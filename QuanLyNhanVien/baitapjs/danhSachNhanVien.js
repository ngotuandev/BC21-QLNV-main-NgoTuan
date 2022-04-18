export class NhanVien {
  constructor(tkNV, tenNV, emailNV, mkNV, ngayNV, luongNV, chucVuNV, gioLamNV) {
    this.taiKhoan = tkNV;
    this.ten = tenNV;
    this.email = emailNV;
    this.matKhau = mkNV;
    this.ngayLam = ngayNV;
    this.luong = luongNV;
    this.chucVu = chucVuNV;
    this.gioLam = gioLamNV;
  }
}

export let thongTinNhanVien = () => {
  let taiKhoanE = document.getElementById("tknv").value;
  let tenE = document.getElementById("name").value;
  let emailE = document.getElementById("email").value;
  let matKhauE = document.getElementById("password").value;
  let ngayLamE = document.getElementById("datepicker").value;
  let luongE = document.getElementById("luongCB").value * 1;
  let chucVuE = document.getElementById("chucvu").value * 1;
  let gioLamE = document.getElementById("gioLam").value * 1;
  let nhanVienTuForm = new NhanVien(
    taiKhoanE,
    tenE,
    emailE,
    matKhauE,
    ngayLamE,
    luongE,
    chucVuE,
    gioLamE
  );
  return nhanVienTuForm;
};

export let renderDanhSachNhanVien = (danhSachNhanVien) => {
  let dsnvHTML = "";
  for (let index of danhSachNhanVien) {
    let nhanVienHienTai = index;
    let tongLuong = "";
    let xepLoai = "";
    let chucVuE = "";
    let tongLuongNV = () => {
      if (nhanVienHienTai.chucVu == 1) {
        return (tongLuong = nhanVienHienTai.luong * 3);
      } else if (nhanVienHienTai.chucVu == 2) {
        return (tongLuong = nhanVienHienTai.luong * 2);
      } else if (nhanVienHienTai.chucVu === 3) {
        return (tongLuong = nhanVienHienTai.luong);
      } else return "";
    };
    let xepLoaiNV = () => {
      if (nhanVienHienTai.gioLam >= 192) {
        return (xepLoai = "Xuất sắc");
      } else if (nhanVienHienTai.gioLam >= 176) {
        return (xepLoai = "Giỏi");
      } else if (nhanVienHienTai.gioLam >= 160) {
        return (xepLoai = "Khá");
      } else return (xepLoai = "Trung bình");
    };
    let chucVuNV = () => {
      if (nhanVienHienTai.chucVu == 1) {
        return (chucVuE = "Sếp");
      } else if (nhanVienHienTai.chucVu == 2) {
        return (chucVuE = "Trưởng phòng");
      } else if (nhanVienHienTai.chucVu == 3) {
        return (chucVuE = "Nhân Viên");
      } else return "";
    };
    let dsnvTR = `<tr>
    <td>${nhanVienHienTai.taiKhoan}</td>
    <td>${nhanVienHienTai.ten}</td>
    <td>${nhanVienHienTai.email}</td>
    <td>${nhanVienHienTai.ngayLam}</td>
    <td>${chucVuNV(danhSachNhanVien)}</td>
    <td>${tongLuongNV(danhSachNhanVien)}</td>
    <td id="xepLoaiNV">${xepLoaiNV(danhSachNhanVien)}</td>
    <td class="d-flex"> <button class="btn btn-success mr-1 suaButton" id="suaNhanVien">Sửa</button>
                          <button class="btn btn-danger xoaButton" id="xoaNhanVien">Xóa</button> </td>
    
    
    </tr>`;
    dsnvHTML += dsnvTR;
  }
  document.getElementById("tableDanhSach").innerHTML = dsnvHTML;
};

export let setLocalNhanVien = (array) => {
  let json = JSON.stringify(array);
  localStorage.setItem("nhanVienLocal", json);
};
