function kirimData(){
    var nama = document.getElementById("nama").value
    var NIM = document.getElementById("NIM").value
    var peminatan = document.querySelector("input[name=peminatan]:checked").value
    var alamat = document.getElementById("alamat").value
    var angkatan = document.getElementById('angkatan').value;

    alert(
        "Nama Mahasiswa : " + nama +
        "\nNIM : " + NIM +
        "\nAngkatan : " + angkatan +
        "\nPeminatan : "  + peminatan +
        "\nAlamat : " + alamat
    )
}