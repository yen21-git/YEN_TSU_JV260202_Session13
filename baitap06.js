// Khai báo mảng có sẵn (12 phần tử)
let arr = [3, 7, 5, 7, 9, 2, 7, 1, 4, 7, 6, 8];

// Nhập số k từ người dùng
let k = parseInt(prompt("Nhập số nguyên k:"));

// Biến đếm
let count = 0;

// Duyệt mảng và đếm
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
        count++;
    }
}

// Hiển thị kết quả
alert("Số " + k + " xuất hiện " + count + " lần trong mảng");