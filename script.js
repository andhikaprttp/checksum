function hitungsum() {
        const data = document.getElementById("data-input").value;

        // menghitung nilai checksum menggunakan algoritma SHA-256
        const checksum = CryptoJS.SHA256(data).toString();

        // menampilkan hasil checksum pada halaman web
        document.getElementById(
          "hasil"
        ).innerHTML = `Data: ${data}<br>Checksum: ${checksum}`;
      }