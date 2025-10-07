function showRegister() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const hp = document.getElementById("hp").value;
  const password = document.getElementById("password").value;

  if (nama && email && hp && password) {
    alert("Pendaftaran berhasil!\nSelamat datang, " + nama + " 🎉");
    showLogin(); // otomatis kembali ke form login setelah daftar
  } else {
    alert("Harap isi semua field!");
  }
});
