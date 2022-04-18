export let validatorNV = {
  kiemTraRong: (string, idErr, message) => {
    let value = string.trim();

    if (value.length > 0) {
      document.getElementById(idErr).innerText = "";
      return true;
    }
    document.getElementById(idErr).innerText = message;
    return false;
  },
  kiemTraRong1: (string, idErr, message) => {
    if (string == "") {
      document.getElementById(idErr).innerText = message;
      return false;
    }
    document.getElementById(idErr).innerText = "";
    return true;
  },
  kiemTraTaiKhoan: (string, idErr) => {
    let regex = /^[1-9][0-9]{3,5}$/;
    let isValid = regex.test(string);
    if (!isValid) {
      document.getElementById(idErr).innerText = "Tài khoản phải từ 4-6 ký số";
      return false;
    }
    return true;
  },
  kiemTraTen: (string, idErr) => {
    let regex = /^[a-z ,.'-]+$/i;
    let isValid = regex.test(string);
    if (!isValid) {
      document.getElementById(idErr).innerText = "Họ và tên chỉ được là chữ";
      return false;
    }
    return true;
  },
  kiemTraPassWord: (string, idErr) => {
    let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,9}$/;
    let isValid = regex.test(string);
    if (!isValid) {
      document.getElementById(idErr).innerText =
        "Mật khẩu 6-10 ký tự bao gồm 1 ký tự hoa, 1 ký tự số, 1 ký tự đặc biệt";
      return false;
    }
    return true;
  },
  kiemTraEmail: (string, idErr) => {
    let regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = regex.test(string);
    if (!isValid) {
      document.getElementById(idErr).innerText =
        "Vui lòng nhập đúng định dạng email";
      return false;
    }
    return true;
  },
  kiemTraNgayLam: (string, idErr) => {
    let regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    let isValid = regex.test(string);
    if (!isValid) {
      document.getElementById(idErr).innerText =
        "Vui lòng nhập đúng định dạng mm/dd/yyyy";
      return false;
    }
    return true;
  },
  kiemTraLuongCB: (string, idErr) => {
    if (string < 1000000 || string > 20000000) {
      document.getElementById(idErr).innerText =
        "Vui lòng nhập từ 1.000.000 - 20.000.000 đồng";
      return false;
    }
    return true;
  },
  kiemTraChucVu: (string, idErr) => {
    if (string == 0) {
      document.getElementById(idErr).innerText = "Vui lòng chọn chức vụ";
      return false;
    }
    return true;
  },
  kiemTraGioLam: (string, idErr) => {
    if (string < 80 || string > 200) {
      document.getElementById(idErr).innerText =
        "Vui lòng nhập từ 80 - 200 giờ";
      return false;
    }
    return true;
  },
  kiemTraTrungTaiKhoan: (idNew, danhSachSinhVien) => {
    var index = danhSachSinhVien.findIndex((nhanVienMoi) => {
      return nhanVienMoi.taiKhoan === idNew;
    });
    if (index == -1) {
      document.getElementById("tbTKNV").innerText = "";
      return true;
    }
    document.getElementById("tbTKNV").innerText =
      "Tài khoản nhân viên đã tồn tại";
    return false;
  },
};
