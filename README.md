# Geleee Store

Geleee Store adalah web e-commerce modern untuk penjualan produk knalpot motor, dibuat dengan HTML, CSS, dan JavaScript. Website ini mendukung fitur katalog produk, keranjang belanja, testimoni ala Shopee, filter rating, login/register, dan pengalaman pengguna yang responsif.

---

## ✨ Fitur Utama
- **Katalog Produk**: Daftar produk knalpot lengkap dengan gambar, harga, dan detail.
- **Keranjang Belanja**: Tambah, hapus, dan update jumlah produk. Cart responsif dan sticky.
- **Testimoni Shopee-style**: Modal testimoni, filter rating, tampilan bintang, dan empty state.
- **Filter & Sortir**: Filter produk berdasarkan rating, urutkan produk (nama, harga, rating).
- **Pencarian Produk**: Cari produk secara real-time.
- **Login & Register**: Sistem autentikasi berbasis localStorage, dengan guard sebelum akses index.
- **Quick Login**: Halaman login cepat dengan user & admin dummy.
- **Notifikasi & Animasi**: Notifikasi aksi, animasi smooth, empty/loading state.
- **Responsif**: Tampilan mobile & desktop optimal.

---

## 🛠️ Tech Stack
- HTML5
- CSS3 (Flexbox, Responsive)
- JavaScript (Vanilla, localStorage)

---

## 🚀 Cara Menjalankan di Lokal

klik ini geleee-store.vercel.app
atau
1. **Clone/download** project ini ke komputer kamu.
2. **Jalankan server lokal** (wajib, agar localStorage & routing berjalan):
   ```
   python -m http.server 8000
   ```
   atau pakai Live Server (VSCode) atau server lokal lain.
3. **Buka di browser**:
   ```
   http://localhost:8000
   ```
4. **Akses halaman utama**: `index.html`
5. **Akses halaman login cepat**: `quick-login.html`

---

## 👤 Cara Login & Akun Admin
- **Sebelum akses index.html, user wajib login.**
- Bisa register akun baru di `register.html` atau pakai quick login.
- **Akun admin & test user:**

| Role   | Email              | Password   |
|--------|--------------------|------------|
| Admin  | admin@gmail.com    | admin123   |
| User   | user@gmail.com     | user123    |
| Test   | test@gmail.com     | test123    |

- Bisa juga login custom di quick-login.html.

---

## 📁 Struktur Folder/File
```
GeleeeStore/
├── index.html           # Halaman utama katalog & cart
├── login.html           # Halaman login user
├── register.html        # Halaman registrasi user
├── quick-login.html     # Halaman login cepat (test user)
├── script.js            # Script utama (produk, cart, auth, dsb)
├── style.css            # Style utama (responsif, animasi, dsb)
├── icons/               # Folder icon aplikasi (jika ada)
│   └── ...
├── images/              # Gambar produk
│   └── ...
└── ...
```

---

## 📋 Spesifikasi & Catatan
- **Login Guard:** User yang belum login akan otomatis redirect ke login.html.
- **Cart:** Data cart tersimpan di localStorage, tetap ada walau browser ditutup.
- **Testimoni:** Minimal 10 testimoni per produk, filter rating, modal Shopee-style.
- **Notifikasi:** Setiap aksi penting (tambah cart, hapus, login, dsb) ada notifikasi.
- **Responsif:** Layout optimal di desktop & mobile.
- **Tidak ada PWA:** Semua fitur PWA sudah dihapus.
- **Akses admin:** Tidak ada dashboard admin, tapi akun admin bisa login seperti user biasa.
- **Data user & cart hanya di localStorage (bukan server).**

---

## 💡 Tips Penggunaan
- Untuk testing cepat, gunakan quick-login.html dan klik salah satu test user.
- Untuk reset data, hapus localStorage di browser (DevTools > Application > Local Storage).
- Jika ada bug, refresh browser atau clear localStorage.

---

## 📞 Kontak & Kontribusi
- Project ini untuk pembelajaran & showcase.
- Silakan modifikasi, kembangkan, atau gunakan untuk referensi project e-commerce lain.

---

## 🧑‍💻 Panduan Pengguna (Customer)

Berikut langkah-langkah mudah untuk menggunakan Geleee Store sebagai customer:

### 1. **Registrasi Akun**
- Klik tombol **Register** di pojok kanan atas.
- Isi nama, email, dan password, lalu klik **Daftar/Register**.
- Setelah berhasil, kamu bisa langsung login.

### 2. **Login ke Akun**
- Klik tombol **Login** di pojok kanan atas.
- Masukkan email & password yang sudah didaftarkan.
- Atau, gunakan akun test (lihat tabel di atas) untuk mencoba fitur.

### 3. **Mencari & Menjelajah Produk**
- Gunakan kolom pencarian di atas untuk mencari produk knalpot.
- Scroll ke bawah untuk melihat semua produk yang tersedia.

### 4. **Filter & Urutkan Produk**
- Gunakan filter bintang (rating) untuk menampilkan produk dengan rating tertentu.
- Pilih urutan produk (nama, harga, rating) di menu "Urutkan".

### 5. **Melihat Detail Produk**
- Klik tombol **Lihat Detail** pada produk untuk melihat deskripsi lengkap, gambar besar, dan testimoni pembeli lain.

### 6. **Menambah ke Keranjang**
- Klik tombol **Tambah ke Keranjang** pada produk yang diinginkan.
- Keranjang bisa diakses dengan klik tombol **Cart** di pojok kanan atas.

### 7. **Mengelola Keranjang**
- Di halaman cart, kamu bisa menambah/mengurangi jumlah produk, menghapus produk, atau melihat total belanja.
- Jika keranjang kosong, klik **Mulai Belanja** untuk kembali ke katalog.

### 8. **Checkout (Simulasi)**
- Klik tombol **Checkout** di cart untuk menyelesaikan pesanan (simulasi, belum terhubung ke pembayaran asli).
- Akan muncul notifikasi sukses.

### 9. **Melihat & Menulis Testimoni**
- Di halaman detail produk, scroll ke bawah untuk melihat testimoni pembeli lain.
- (Fitur menulis testimoni hanya simulasi, testimoni sudah disediakan otomatis.)

### 10. **Logout**
- Klik tombol **Logout** di pojok kanan atas untuk keluar dari akun.

---

**Tips:**
- Semua data belanja & akun hanya tersimpan di browser kamu (localStorage), jadi aman & privat.
- Jika lupa password, bisa register ulang dengan email berbeda, atau gunakan quick-login.
- Untuk pengalaman terbaik, gunakan browser Chrome/Edge versi terbaru. 
