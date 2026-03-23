// Tạo số lượng phần tử ngẫu nhiên từ 10 đến 20
let n = Math.floor(Math.random() * 11) + 10;

// Khai báo mảng
let arr = [];

// Thêm phần tử ngẫu nhiên (từ 0 đến 100)
for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 101));
}

// Hiển thị mảng
console.log("Mảng:", arr);

// Tính tổng
let tongLe = 0;
let tongChan = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        tongChan += arr[i];
    } else {
        tongLe += arr[i];
    }
}

// Hiển thị kết quả
alert("Tổng số chẵn: " + tongChan);
alert("Tổng số lẻ: " + tongLe);



