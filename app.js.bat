const { MongoClient, ServerApiVersion } = require("mongodb");

//Koneksi ke URL
const url = "mongodb://127.0.0.1:27017";

// Buat instance MongoClient dengan mengoper URI koneksi
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect menggunakan asynchronous
async function run() {
  try {
    // Koneksi ke database
    await client.connect();
    // Send a ping to confirm a successful conection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully");
  } finally {
    await client.close;
  }
}
run().catch(console.dir);

// menggunakan then and catch
// const connectToMongoDB = () => {
//   client
//     .connect()
//     .then(() => {
//       return client.db("MongoDB-Learn").command({ ping: 1 });
//     })
//     .then(() => {
//       console.log("connected Success");
//     })
//     .catch(() => {
//       console.error("connection failed");
//     })
//     .finally(() => {
//       client.close();
//     });
// };

// connectToMongoDB();
