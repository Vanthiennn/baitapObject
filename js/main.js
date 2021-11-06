var dsnv = new DanhSachNhanVien() ; 
var validation = new Validation() ;

function getELE(id) {
    return document.getElementById(id) 
}

function setLocalStorage(mangNV) {
    localStorage.setItem("DSNV", JSON.stringify(mangNV))
}

function getLocalStorage(){
    if(localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV")) ;
        hienThiTable(dsnv.mangNV)
    }
}
getLocalStorage()

    


function layThongTinNV() {
    var tk = getELE("tknv").value ; 
    var ten = getELE("name").value ; 
    var email = getELE("email").value ; 
    var pass = getELE("password").value ;
    var day = getELE("datepicker").value ;
    var salary = getELE("luongCB").value ;
    var position = getELE("chucvu").value ; 
    var time = getELE("gioLam").value ; 

    var isValid = true ; 
    isValid &= validation.checkEmpty(tk,"Tài khoản không được để trống","tbTKNV") && validation.checkTK(tk,"Tài khoản của bạn bị trùng","tbTKNV",dsnv.mangNV) ;
    isValid &= validation.checkEmpty(ten,"Tên không được để trống","tbTen") && validation.checkName(ten,"Tên nhân viên phải là kiểu chữ","tbTen") ;
    isValid &= validation.checkEmpty(email,"Email không được để trống","tbEmail") && validation.checkEmail(email,"Email phải đúng định dạng","tbEmail")
    isValid &= validation.checkEmpty(pass,"Mật khẩu không được để trống","tbMatKhau") && validation.checkMK(pass,"Mật khẩu có độ dài từ 6-10 ký tự và cần ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt","tbMatKhau")
    isValid &= validation.checkEmpty(day,"Ngày làm không được để trống","tbNgay") && validation.checkDate(day,"Ngày làm cần phải nhập đúng thứ tự","tbNgay")
    isValid &= validation.checkEmpty(salary,"Lương không được để trống","tbLuongCB") && validation.checkSalary(salary,"Lương từ 1.000.000 đến 20.000.000","tbLuongCB")
    isValid &= validation.checkSelect("chucvu","Chức vụ phải được chọn","tbChucVu")
    isValid &= validation.checkEmpty(time,"Giờ làm không được để trống","tbGiolam") && validation.checkTime(time,"Số giờ làm ít nhất là 80 và nhiều nhất là 200","tbGiolam")


    if(isValid) {
        var nv = new NhanVien(tk,ten,email,pass,day,salary,position,time) 
        dsnv.themNV(nv) ;
        nv.totalSalary = nv.tinhLuongTB()
        nv.xepLoai = nv.xepLoaiNV();
        hienThiTable(dsnv.mangNV)
        setLocalStorage(dsnv.mangNV)
    }
}

function hienThiTable(mangNV) {
    var content = "" ;
    for(var i = 0 ; i < mangNV.length ; i++){
        var trNV = `<tr>
        <td>${mangNV[i].tkNV}</td>
        <td>${mangNV[i].tenNV}</td>
        <td>${mangNV[i].email}</td>
        <td>${mangNV[i].ngayLam}</td>
        <td>${mangNV[i].chucVu}</td>
        <td>${mangNV[i].totalSalary}</td>
        <td>${mangNV[i].xepLoai}</td>
        <td>
            <button onclick="xoaNhanVien('${mangNV[i].tkNV}')" class="btn btn-danger">Xóa</button>
           
        </td>
        </tr>`
        content += trNV ;
    }
    getELE("tableDanhSach").innerHTML = content
}

function xoaNhanVien(tk) {
    dsnv.xoaNV(tk);
    setLocalStorage(dsnv.mangNV);
    hienThiTable(dsnv.mangNV)
}

function capNhat() {
    var tk = getELE("tknv").value ; 
    var ten = getELE("name").value ; 
    var email = getELE("email").value ; 
    var pass = getELE("password").value ;
    var day = getELE("datepicker").value ;
    var salary = getELE("luongCB").value ;
    var position = getELE("chucvu").value ; 
    var time = getELE("gioLam").value ; 

    var isValid = true ; 
    isValid &= validation.checkEmpty(tk,"Tài khoản không được để trống","tbTKNV") ;
    isValid &= validation.checkEmpty(ten,"Tên không được để trống","tbTen") && validation.checkName(ten,"Tên nhân viên phải là kiểu chữ","tbTen") ;
    isValid &= validation.checkEmpty(email,"Email không được để trống","tbEmail") && validation.checkEmail(email,"Email phải đúng định dạng","tbEmail")
    isValid &= validation.checkEmpty(pass,"Mật khẩu không được để trống","tbMatKhau") && validation.checkMK(pass,"Mật khẩu có độ dài từ 6-10 ký tự và cần ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt","tbMatKhau")
    isValid &= validation.checkEmpty(day,"Ngày làm không được để trống","tbNgay") && validation.checkDate(day,"Ngày làm cần phải nhập đúng thứ tự","tbNgay")
    isValid &= validation.checkEmpty(salary,"Lương không được để trống","tbLuongCB") && validation.checkSalary(salary,"Lương từ 1.000.000 đến 20.000.000","tbLuongCB")
    isValid &= validation.checkSelect("chucvu","Chức vụ phải được chọn","tbChucVu")
    isValid &= validation.checkEmpty(time,"Giờ làm không được để trống","tbGiolam") && validation.checkTime(time,"Số giờ làm ít nhất là 80 và nhiều nhất là 200","tbGiolam")

    if(isValid) {
        var nv = new NhanVien(tk,ten,email,pass,day,salary,position,time) 
        nv.totalSalary = nv.tinhLuongTB()
        nv.xepLoai = nv.xepLoaiNV();
        dsnv.capNhatNV(nv);
        hienThiTable(dsnv.mangNV)
        setLocalStorage(dsnv.mangNV)
    }
}

getELE("btnTimNV").onclick = function() {
    var tuKhoa = getELE("searchName").value;
    var mangSearch = dsnv.searchPlaces(tuKhoa);
    hienThiTable(mangSearch)
}

getELE("searchName").onkeyup = function() {
    var tuKhoa = getELE("searchName").value ;
    var mangSearch = dsnv.searchPlaces(tuKhoa);
    hienThiTable(mangSearch)
}