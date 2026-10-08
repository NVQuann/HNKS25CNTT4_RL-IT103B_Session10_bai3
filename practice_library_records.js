const borrowRecords = [
  {
    recordId: "PM01",
    studentId: "SV101",
    bookTitle: "JavaScript Căn bản",
    borrowDays: 10,
    isReturned: false,
  },
  {
    recordId: "PM02",
    studentId: "SV102",
    bookTitle: "Cấu trúc dữ liệu",
    borrowDays: 20,
    isReturned: false,
  },
  {
    recordId: "PM03",
    studentId: "SV103",
    bookTitle: "Cơ sở dữ liệu",
    borrowDays: 14,
    isReturned: true,
  },
];

console.log("=== 1. KHỞI TẠO: DANH SÁCH PHIẾU MƯỢN BAN ĐẦU ===");
console.table(borrowRecords);

const newRecord = {
  recordId: "PM04",
  studentId: "SV104",
  bookTitle: "Clean Code",
  borrowDays: 18,
  isReturned: false,
};
borrowRecords.push(newRecord);

console.log("=== 2. THÊM MỚI: DANH SÁCH SAU KHI THÊM PHIẾU PM04 ===");
console.table(borrowRecords);

console.log("=== 3. TÍNH PHÍ PHẠT QUÁ HẠN TỪNG PHIẾU MƯỢN ===");
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].borrowDays > 14) {
    let daysLate = borrowRecords[i].borrowDays - 14;
    borrowRecords[i].fineAmount = daysLate * 5000;
    console.log(
      `-> Phiếu ${borrowRecords[i].recordId} (${borrowRecords[i].studentId}): Trễ ${daysLate} ngày. Phạt: ${borrowRecords[i].fineAmount.toLocaleString("vi-VN")} VNĐ`,
    );
  } else {
    borrowRecords[i].fineAmount = 0;
    console.log(
      `-> Phiếu ${borrowRecords[i].recordId} (${borrowRecords[i].studentId}): Đúng hạn. Phạt: 0 VNĐ`,
    );
  }
}
console.table(borrowRecords);

for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM01") {
    borrowRecords[i].isReturned = true;
    break;
  }
}

console.log("=== 4. CẬP NHẬT: DANH SÁCH SAU KHI PHIẾU PM01 TRẢ SÁCH ===");
console.table(borrowRecords);

let indexPM03 = -1;
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM03") {
    indexPM03 = i;
    break;
  }
}

if (indexPM03 !== -1) {
  borrowRecords.splice(indexPM03, 1);
  console.log(`-> Đã xóa thành công phiếu PM03 tại vị trí index: ${indexPM03}`);
}

console.log("=== 5. XÓA: DANH SÁCH CUỐI CÙNG SAU KHI PM03 TẤT TOÁN ===");
console.table(borrowRecords);
