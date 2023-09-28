document.getElementById("login-button").addEventListener("click", function() {
    login(); // Memanggil fungsi login saat tombol "Login" diklik
});

document.getElementById("password").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        login(); // Memanggil fungsi login saat tombol "Enter" ditekan pada input password
    }
});

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Anda dapat menambahkan validasi login di sini
    if (username === "admin" && password === "password") {
        window.location.href = "https://imzetaa.github.io/TextEditor-Online/#"
        // Redirect ke halaman lain atau jalankan aksi yang sesuai
    } else {
        // Tampilkan pop-up peringatan
        document.getElementById("error-popup").style.display = "block";
    }
}

document.getElementById("close-popup").addEventListener("click", function() {
    // Sembunyikan pop-up ketika tombol "Tutup" diklik
    document.getElementById("error-popup").style.display = "none";
});
