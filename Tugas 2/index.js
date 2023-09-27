function EditProfile() {
    // Menampilkan form ketika tombol "Edit Profile" diklik
    document.getElementById("profile-form").style.display = "block";
  }

  function SimpanData() {
    // Menyembunyikan form ketika tombol "Simpan" diklik
    document.getElementById("profile-form").style.display = "none";

    // Mengambil dan menampilkan data
    var name = document.getElementById("name").value;
    var role = document.getElementById("role").value;
    var availability = document.getElementById("availability").value;
    var usia = document.getElementById("usia").value;
    var lokasi = document.getElementById("lokasi").value;
    var experience = document.getElementById("experience").value;
    var email = document.getElementById("email").value;

    document.getElementById("name-data").textContent = name;
    document.getElementById("role-data").textContent = role;
    document.getElementById("availability-data").textContent = availability;
    document.getElementById("usia-data").textContent = usia;
    document.getElementById("lokasi-data").textContent = lokasi;
    document.getElementById("experience-data").textContent = experience;
    document.getElementById("email-data").textContent = email;
  }