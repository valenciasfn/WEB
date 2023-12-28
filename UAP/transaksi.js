// inputan barang
let barang = [
    {
        kode : "001",
        nama : "Barang A",
        harga: 10.000
    },
    {
        kode : "002",
        nama : "Barang B",
        harga: 20.000
    },
    {
        kode : "003",
        nama : "Barang C",
        harga: 30.000
    }
];

// pengambilan data
    function cariBarang(kode){
        for(let i = 0; i < barang.length; i++) {
            if(barang[i].kode === kode) {
            return barang[i];
            }
        }
    return null;
    }

    // ambil data input
    function proses(){
        let kode = document.getElementById("kode").value;
        let jumlah = parseInt(document.getElementById)("jumlah").value;

    //cari barang
    let dataBarang = cariBarang(kode);
    
    // barang tidak ditemukan
    if(!dataBarang) {
        alert("Kode barang tidak ditemukan!");
        return;  
    }

    // hitung total barang 
    let total = hargaBarang.harga * jumlah;
    alert("Total yang harus dibayar = Rp " + total);

    // ambil inputan kembalian
    let bayar = parseInt(prompt("uang yang dibayar = "));

    // hitung kembalian
    let kembalian = bayar - total;
    alert(kembalian = + kembalian);
    
    }
