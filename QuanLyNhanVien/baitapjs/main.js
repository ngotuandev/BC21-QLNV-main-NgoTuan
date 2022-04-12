import {
  NhanVien,
  thongTinNhanVien,
  renderDanhSachNhanVien,
  setLocalNhanVien,
} from "./danhSachNhanVien.js";
import { validatorNV } from "./validation.js";

let danhSachNhanVien = [];
const nhanVienLocal = "nhanVienLocal";

// *Local
let json = localStorage.getItem(nhanVienLocal);
if (json) {
  danhSachNhanVien = JSON.parse(json);
  renderDanhSachNhanVien(danhSachNhanVien);
}

// *Thêm nhân viên
let btnThem = document
  .getElementById("btnThemNV")
  .addEventListener("click", () => {
    let nhanVienMoi = thongTinNhanVien();
    let isValidation =
      (validatorNV.kiemTraRong(
        nhanVienMoi.taiKhoan,
        "tbTKNV",
        "Vui lòng nhập tài khoản"
      ) &&
        validatorNV.kiemTraTaiKhoan(nhanVienMoi.taiKhoan, "tbTKNV") &&
        validatorNV.kiemTraTrungTaiKhoan(
          nhanVienMoi.taiKhoan,
          danhSachNhanVien
        )) &
      (validatorNV.kiemTraRong(
        nhanVienMoi.ten,
        "tbTen",
        "Vui lòng nhập họ và tên"
      ) && validatorNV.kiemTraTen(nhanVienMoi.ten, "tbTen")) &
      (validatorNV.kiemTraRong(
        nhanVienMoi.email,
        "tbEmail",
        "Vui lòng nhập email"
      ) && validatorNV.kiemTraEmail(nhanVienMoi.email, "tbEmail")) &
      (validatorNV.kiemTraRong(
        nhanVienMoi.matKhau,
        "tbMatKhau",
        "Vui lòng nhập mật khẩu"
      ) && validatorNV.kiemTraPassWord(nhanVienMoi.matKhau, "tbMatKhau")) &
      (validatorNV.kiemTraRong(
        nhanVienMoi.ngayLam,
        "tbNgay",
        "Vui lòng nhập ngày làm"
      ) && validatorNV.kiemTraNgayLam(nhanVienMoi.ngayLam, "tbNgay")) &
      (validatorNV.kiemTraRong1(
        nhanVienMoi.luong,
        "tbLuongCB",
        "Vui lòng nhập lương căn bản"
      ) && validatorNV.kiemTraLuongCB(nhanVienMoi.luong, "tbLuongCB")) &
      (validatorNV.kiemTraRong1(
        nhanVienMoi.gioLam,
        "tbGiolam",
        "Vui lòng nhập giờ làm"
      ) && validatorNV.kiemTraGioLam(nhanVienMoi.gioLam, "tbGiolam")) &
      validatorNV.kiemTraChucVu(nhanVienMoi.chucVu, "tbChucVu");
    if (isValidation) {
      danhSachNhanVien = [...danhSachNhanVien, nhanVienMoi];
      renderDanhSachNhanVien(danhSachNhanVien);
      setLocalNhanVien(danhSachNhanVien);
      document.getElementById("formQLNV").reset();
      document.getElementById("chucvu").selectedIndex = 0;
    }
  });

// *Xóa nhân viên theo dòng mỗi khi click
document.querySelector("table").addEventListener("click", (element) => {
  if (!element.target.classList.contains("xoaButton")) {
    return false;
  } else {
    let btn = element.target.closest("tr").getElementsByTagName("td");
    for (let i = 0; i < danhSachNhanVien.length; i++) {
      if (danhSachNhanVien[i].taiKhoan == btn[0].textContent) {
        danhSachNhanVien.splice(i, 1);
        renderDanhSachNhanVien(danhSachNhanVien);
        setLocalNhanVien(danhSachNhanVien);
      }
    }
  }
});

// *Sửa nhân viên, click vào sẽ hiện form
document.querySelector("table").addEventListener("click", (element) => {
  if (!element.target.classList.contains("suaButton")) {
    return false;
  }
  let btn = element.target.closest("tr").getElementsByTagName("td");
  for (let i = 0; i < danhSachNhanVien.length; i++) {
    if (danhSachNhanVien[i].taiKhoan == btn[0].textContent) {
      document.getElementById("tknv").value = danhSachNhanVien[i].taiKhoan;
      document.getElementById("name").value = danhSachNhanVien[i].ten;
      document.getElementById("email").value = danhSachNhanVien[i].email;
      document.getElementById("password").value = danhSachNhanVien[i].matKhau;
      document.getElementById("datepicker").value = danhSachNhanVien[i].ngayLam;
      document.getElementById("luongCB").value = danhSachNhanVien[i].luong;
      document.getElementById("chucvu").value = danhSachNhanVien[i].chucVu;
      document.getElementById("gioLam").value = danhSachNhanVien[i].gioLam;
      document.getElementById("tknv").disabled = true;
      document.getElementById("btnThemNV").style.display = "none";
    }
  }
});

// *Cập nhật nhân viên
document.getElementById("btnCapNhat").addEventListener("click", () => {
  let taiKhoanUp = document.getElementById("tknv").value;
  let nhanVienUp = thongTinNhanVien();

  let isValidation =
    (validatorNV.kiemTraRong(
      nhanVienUp.ten,
      "tbTen",
      "Vui lòng nhập họ và tên"
    ) && validatorNV.kiemTraTen(nhanVienUp.ten, "tbTen")) &
    (validatorNV.kiemTraRong(
      nhanVienUp.email,
      "tbEmail",
      "Vui lòng nhập email"
    ) && validatorNV.kiemTraEmail(nhanVienUp.email, "tbEmail")) &
    (validatorNV.kiemTraRong(
      nhanVienUp.matKhau,
      "tbMatKhau",
      "Vui lòng nhập mật khẩu"
    ) && validatorNV.kiemTraPassWord(nhanVienUp.matKhau, "tbMatKhau")) &
    (validatorNV.kiemTraRong(
      nhanVienUp.ngayLam,
      "tbNgay",
      "Vui lòng nhập ngày làm"
    ) && validatorNV.kiemTraNgayLam(nhanVienUp.ngayLam, "tbNgay")) &
    (validatorNV.kiemTraRong1(
      nhanVienUp.luong,
      "tbLuongCB",
      "Vui lòng nhập lương căn bản"
    ) && validatorNV.kiemTraLuongCB(nhanVienUp.luong, "tbLuongCB")) &
    (validatorNV.kiemTraRong1(
      nhanVienUp.gioLam,
      "tbGiolam",
      "Vui lòng nhập giờ làm"
    ) && validatorNV.kiemTraGioLam(nhanVienUp.gioLam, "tbGiolam")) &
    validatorNV.kiemTraChucVu(nhanVienUp.chucVu, "tbChucVu");
  if (isValidation) {
    for (let i = 0; i < danhSachNhanVien.length; i++) {
      if (taiKhoanUp == danhSachNhanVien[i].taiKhoan) {
        danhSachNhanVien[i] = nhanVienUp;
        renderDanhSachNhanVien(danhSachNhanVien);
        setLocalNhanVien(danhSachNhanVien);
        document.getElementById("formQLNV").reset();
        document.getElementById("tknv").disabled = false;
        document.getElementById("btnThemNV").style.display = "block";
      }
    }
  }
});

// *Tìm kiếm nhân viên theo xếp loại
document.getElementById("searchName").addEventListener("keyup", (search) => {
  let rows = document.querySelectorAll("#tableDanhSach tr");
  const searchValue = search.srcElement.value.toLowerCase();
  rows.forEach((row) => {
    row
      .querySelector("#xepLoaiNV")
      .textContent.toLowerCase()
      .startsWith(searchValue)
      ? (row.style.display = "")
      : (row.style.display = "none");
  });
});
// *Button đóng
document.getElementById("btnDong").addEventListener("click", () => {
  document.getElementById("btnThemNV").style.display = "block";
  document.getElementById("tknv").disabled = false;
  document.getElementById("formQLNV").reset();
  document.getElementById("tbTKNV").innerText = "";
  document.getElementById("tbTen").innerText = "";
  document.getElementById("tbEmail").innerText = "";
  document.getElementById("tbMatKhau").innerText = "";
  document.getElementById("tbNgay").innerText = "";
  document.getElementById("tbLuongCB").innerText = "";
  document.getElementById("tbChucVu").innerText = "";
  document.getElementById("tbGiolam").innerText = "";
});
