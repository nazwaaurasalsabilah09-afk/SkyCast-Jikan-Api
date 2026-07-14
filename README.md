# 🌤️ SkyCast - Weather App

SkyCast adalah aplikasi website cuaca yang dibuat menggunakan **HTML, CSS, dan JavaScript** dengan memanfaatkan **Open-Meteo API** sebagai sumber data cuaca. Aplikasi ini memungkinkan pengguna mencari kondisi cuaca berdasarkan nama kota di seluruh dunia secara real-time.

---

## 📖 Deskripsi

Website ini menampilkan informasi cuaca terkini berdasarkan kota yang dicari pengguna. Data diperoleh dari Open-Meteo API tanpa memerlukan API Key sehingga dapat digunakan secara gratis.

---

## ✨ Fitur

- 🔍 Pencarian cuaca berdasarkan nama kota
- 🌡️ Menampilkan suhu saat ini
- 🌡️ Menampilkan suhu terasa (Feels Like)
- 💧 Menampilkan kelembapan udara
- 💨 Menampilkan kecepatan angin
- 🌧️ Menampilkan curah hujan
- ☔ Menampilkan peluang hujan
- 📍 Menampilkan koordinat lokasi
- 🌍 Menampilkan nama kota dan negara
- 🕒 Menampilkan waktu lokal kota
- 📅 Menampilkan tanggal lokal kota
- 🌤️ Menampilkan ikon cuaca sesuai kondisi
- 🎨 Background berubah sesuai kondisi cuaca
- 📱 Responsive untuk desktop maupun perangkat mobile
- ⌨️ Mendukung pencarian menggunakan tombol **Enter**

---

## 🛠️ Teknologi

- HTML5
- CSS3
- JavaScript (ES6)
- Open-Meteo Geocoding API
- Open-Meteo Forecast API
- Font Awesome
- Google Fonts (Poppins)

---

## 📂 Struktur Folder

```
SkyCast/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Cara Menjalankan

1. Download atau clone project.
2. Simpan seluruh file dalam satu folder.
3. Buka file **index.html** menggunakan browser.
4. Masukkan nama kota pada kolom pencarian.
5. Klik tombol **Cari** atau tekan **Enter**.
6. Informasi cuaca akan ditampilkan secara otomatis.

---

## 🌐 API yang Digunakan

### Open-Meteo Geocoding API

Digunakan untuk mencari koordinat berdasarkan nama kota.

Contoh:

```
https://geocoding-api.open-meteo.com/v1/search?name=Jakarta
```

### Open-Meteo Forecast API

Digunakan untuk mengambil data cuaca.

Data yang digunakan meliputi:

- Temperature
- Apparent Temperature
- Relative Humidity
- Wind Speed
- Weather Code
- Precipitation
- Precipitation Probability
- Local Time

Contoh:

```
https://api.open-meteo.com/v1/forecast
```

---

## 📊 Informasi yang Ditampilkan

- Nama Kota
- Negara
- Suhu
- Suhu Terasa
- Kelembapan
- Kecepatan Angin
- Curah Hujan
- Peluang Hujan
- Koordinat
- Waktu Lokal
- Tanggal Lokal
- Kondisi Cuaca
- Ikon Cuaca

---

## 📱 Tampilan

Website memiliki tampilan modern dengan konsep **Glassmorphism** yang dilengkapi dengan:

- Efek blur pada card
- Ikon cuaca
- Background dinamis sesuai kondisi cuaca
- Animasi ikon cuaca
- Responsive layout

---

## 📌 Kelebihan

- Gratis tanpa API Key
- Data cuaca real-time
- Interface sederhana dan mudah digunakan
- Ringan dan cepat
- Responsif di berbagai ukuran layar

---

## 👩‍💻 Developer

**Nama:** Nazwa Aura Salsabilah

**Jurusan:** Rekayasa Perangkat Lunak (RPL)

**Sekolah:** SMK

---

## 📄 Lisensi

Project ini dibuat untuk keperluan pembelajaran dan tugas sekolah. Bebas digunakan sebagai referensi maupun dikembangkan lebih lanjut.

---

## 📷 Preview

SkyCast menampilkan informasi cuaca secara lengkap dengan desain modern sehingga memudahkan pengguna dalam mengetahui kondisi cuaca suatu kota secara cepat dan akurat.