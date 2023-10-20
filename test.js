const { MongoClient, ServerApiVersion } = require("mongodb");

// Koneksi ke URL
const url = "mongodb://127.0.0.1:27017/MongoDB-Learn"; // Perhatikan bahwa URL koneksi Anda perlu sesuai dengan nama database yang ingin Anda akses.
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const dbName = "MongoDB-Learn";

// Fungsi untuk menghubungkan ke MongoDB dan menyisipkan dokumen ke koleksi
function ConnectDB() {
  client
    .connect()
    .then(() => {
      console.log("Connected to the database!");
      insertDocument(); // Panggil fungsi insertDocument setelah terhubung
    })
    .catch((err) => {
      console.error("Gagal terhubung ke database:", err);
    });
}

// Fungsi untuk menyisipkan dokumen ke koleksi
function insertDocument() {
  const db = client.db(dbName);
  const collection = db.collection("nama_koleksi_anda"); // Ganti "nama_koleksi_anda" dengan nama koleksi Anda

  // Dokumen yang akan disisipkan
  const documentToInsert = {
    nama: "Contoh Nama",
    umur: 30,
    alamat: "Contoh Alamat",
  };

  collection
    .insertOne(documentToInsert)
    .then((result) => {
      console.log("Dokumen berhasil disisipkan:", result.insertedId);
    })
    .catch((err) => {
      console.error("Gagal menyisipkan dokumen:", err);
    })
    .finally(() => {
      client.close(); // Tutup koneksi setelah selesai
    });
}

ConnectDB(); // Mulai koneksi dan proses penyisipan dokumen
