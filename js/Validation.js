function Validation() {
    // kiểm tra rỗng
    this.checkEmpty = function(value,message,spanID) {
        if(value.trim() != "") {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none"
            return true ; 
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block"
            return false ; 
    }
    // kiểm tra tài khoản trùng
    this.checkTK = function(value,message,spanID,mangNV) {
        var isExist = false ;
        isExist = mangNV.some(function(nv){
            return value == nv.tkNV ;
        })
        if(isExist) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block"
            return false ; 
        } else {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none"
            return true ; 
        }     
    }

    // kiểm tra tên nhân viên
    this.checkName = function(value,message,spanID) {
        var pattern = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$";
        var reg = new RegExp(pattern) ;
        if(reg.test(value)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none"
            return true ; 
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block"
            return false ; 
    }

    // kiểm tra định dạng email
    this.checkEmail = function(value,message,spanID) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none"
            return true ; 
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block"
            return false ; 
    }

    // kiểm tra định dạng password
    this.checkMK = function(value,message,spanID) {
        var pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/ ;
        if(value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none"
            return true ; 
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block"
            return false ; 
    }

    // kiểm tra định dạng ngày làm 
    this.checkDate = function(value,message,spanID) {
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if(value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none"
            return true ; 
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block"
            return false ; 
    }

    // kiểm tra định dạng lương
    this.checkSalary = function(value,message,spanID) {
        var pattern = /^[0-9]+$/ ;
        if(value.match(pattern)) {
            if(value >= 1000000 && value <= 20000000 ) {
                document.getElementById(spanID).innerHTML = "";
                document.getElementById(spanID).style.display = "none"
                return true ; 
            }            
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block"
            return false ; 
    }

    // kiểm tra chức vụ
    this.checkSelect = function(selectID,message,spanID) {
        if(getELE(selectID).selectedIndex != 0) {
                document.getElementById(spanID).innerHTML = "";
                document.getElementById(spanID).style.display = "none"
                return true ; 
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block"
            return false ; 
    }

    // kiểm tra giờ làm 
    this.checkTime = function(value,message,spanID) {
        var pattern = /^[0-9]+$/ ;
        if(value.match(pattern)) {
            if(value>=80 && value <=200) {
                document.getElementById(spanID).innerHTML = "";
                document.getElementById(spanID).style.display = "none"
                return true ; 
            }
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block"
            return false ;
    }
}