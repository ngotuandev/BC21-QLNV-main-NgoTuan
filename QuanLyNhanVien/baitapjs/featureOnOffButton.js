// * Refresh Form
export let closeButton = () => {
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
};

// * Hàm mở form
export let onForm = () => {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("myModal").classList.add("show");
  let modalOpenA = document.body.classList.add("modal-open");
  let createE = document.createElement("div");
  createE.classList.add("modal-backdrop", "fade", "show");
  document.body.appendChild(createE);
};

// *Hàm tắt form
export let offForm = () => {
  let modalOpenD = document.getElementsByClassName("modal-open");
  while (modalOpenD.length) {
    modalOpenD[0].classList.remove("modal-open");
  }
  let modalBackup = document.querySelectorAll(".modal-backdrop");
  modalBackup.forEach((item) => {
    item.remove();
  });
  document.getElementById("myModal").style.display = "none";
};
