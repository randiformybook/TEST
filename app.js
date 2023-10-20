const { MongoClient, ServerApiVersion } = require("mongodb");

//Koneksi ke URL
const url = "mongodb://127.0.0.1:27017//MongoDB-Learn";
// Buat instance MongoClient dengan mengoper URI koneksi
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const dbName = "MongoDB-Learn";

//connect ke MongoDB
async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to the MongoDB!");
    //membuat database dan collection jika belum ada
    const db = client.db(dbName);
    // Send ping buat confirmasi connect ke Database
    await db.command({ ping: 1 });
    console.log(`Your success connected to ${dbName}`);
    const collection = db.collection("Learn-1");

    // Dokument yang ingin di insert
    const insertDocument = {
      nama: "Sweden",
      email: "sweden@hotmail.com",
    };

    //// Method untuk menambahkan doucment yang ada di dalam collection (Insert Data)
    // const result = await collection.insertOne(insertDocument);

    // console.log(`Document is Success inserted with ID: ${result.insertedId}`);

    const insertDatas = await collection.insertMany([
      { nama: "Indonesia", email: "indonesia@gmail.com" },
      { nama: "Medan", email: "medan@gmail.com" },
      { nama: "Semarang", email: "semarang@gmail.com" },
    ]);

    console.log("Daftar data yang Baru di Input :");
    console.log(typeof insertDatas);
    console.log(insertDatas);

    insertDatas.ops.forEach((document, index) => {
      console.log(`Memasukan index ke ${index + 1}`);
      console.log(document);
    });

    // // Method untuk melihat isi document yang ada di dalam collection (Collection.find())
    // const findDocuments = await collection.find().toArray();
    // console.log("contect of Collection :");
    // findDocuments.forEach((doucment) => {
    //   console.log(doucment);
    // });

    // // Method untuk melihat list Collection yang ada di dalam database (database.listCollections())
    // const collections = await db.listCollections().toArray();

    // // menampilkan Daftar Collection
    // console.log("List of Collection :");
    // collections.forEach((collection) => {
    //   console.log(collection);
    // });
  } finally {
    await client.close();
  }
}
connectDB().catch(console.dir);
