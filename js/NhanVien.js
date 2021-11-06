function NhanVien(tk,ten,email,pass,day,salary,position,time){
    this.tkNV = tk ;
    this.tenNV = ten ;
    this.email = email ;
    this.matKhau = pass ;
    this.ngayLam = day ;
    this.luongCB = salary ;
    this.chucVu = position ;
    this.gioLam = time ;
    this.totalSalary = 0 ;
    this.xepLoai = ""
    
    this.tinhLuongTB = function() {
       if(this.chucVu == "Sếp") {
           return this.luongCB * 3 ;
       } else if(this.chucVu == "Trưởng phòng") {
           return this.luongCB * 2 ;
       } else {
           return this.luongCB 
       }
    }
    this.xepLoaiNV = function() {
        if(this.gioLam >= 192) {
            return this.xepLoai = "Xuất sắc"
        } else if(this.gioLam>= 176 && this.gioLam<192) {
            return this.xepLoai = "Giỏi"
        } else if (this.gioLam >= 160 && this.gioLam < 176) {
            return this.xepLoai = "Khá"
        } else {
            return this.xepLoai = "Trung bình"
        }
    }    
}