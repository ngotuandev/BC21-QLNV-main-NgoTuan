import {
  NhanVien,
  renderDanhSachNhanVien,
  thongTinNhanVien,
  setLocalNhanVien,
} from "./danhSachNhanVien.js";
import { validatorNV } from "./validation.js";
let danhSachNhanVien = [];
const nhanVienLocal = "nhanVienLocal";

let json = localStorage.getItem(nhanVienLocal);
if (json) {
  danhSachNhanVien = JSON.parse(json);
  renderDanhSachNhanVien(danhSachNhanVien);
}
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
      document.getElementById("myModal").classList.remove("show");
      document.querySelector(".modal-backdrop").remove();
    }
  });
let kiemTraViTri = (taiKhoan) => {
  return danhSachNhanVien.findIndex((nhanVienMoi) => {
    return nhanVienMoi.taiKhoan == taiKhoan;
  });
};
console.log(kiemTraViTri(taiKhoan));
let xoaNhanVien = (taiKhoan) => {
  let index = kiemTraViTri(taiKhoan);
  if (index !== -1) {
    danhSachNhanVien.splice(index, 1);
    renderDanhSachNhanVien(danhSachNhanVien);
    setLocalNhanVien(danhSachNhanVien);
  }
};
let suaNhanVien = (taiKhoan) => {
  let index = kiemTraViTri(taiKhoan);
  if (index !== -1) {
    var nhanVienHienTai = danhSachNhanVien[index];
    console.log(nhanVienHienTai);
  }
  document.getElementById("tknv").value = nhanVienHienTai.taiKhoan;
  document.getElementById("name").value = nhanVienHienTai.ten;
  document.getElementById("email").value = nhanVienHienTai.email;
  document.getElementById("password").value = nhanVienHienTai.matKhau;
  document.getElementById("datepicker").value = nhanVienHienTai.ngayLam;
  document.getElementById("luongCB").value = nhanVienHienTai.luong;
  document.getElementById("chucvu").value = nhanVienHienTai.chucVu;
  document.getElementById("gioLam").value = nhanVienHienTai.gioLam;
  document.getElementById("tknv").disabled = true;
  document.getElementById("btnThemNV").disabled = true;
};
