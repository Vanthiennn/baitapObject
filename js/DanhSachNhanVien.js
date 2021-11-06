function DanhSachNhanVien() {
    this.mangNV = [] ;
    this.themNV = function(nv) {
        this.mangNV.push(nv)
    }

    this.timViTri = function(tk) {
        var viTri = -1 ;
        this.mangNV.map(function(nv,index){
            if(nv.tkNV == tk) {
                viTri = index ;
            }
        }) ;
        return viTri
    }

    this.xoaNV = function(tk) {
        var viTri = this.timViTri(tk)
        if(viTri > -1 ) {
            this.mangNV.splice(viTri,1) ;
        }
    }

    this.capNhatNV = function(nv) {
        var viTri = this.timViTri(nv.tkNV)
        if(viTri > -1) {
            this.mangNV[viTri] = nv
        } else {
            console.log("Không tìm thấy")
        }
    }

    DanhSachNhanVien.prototype.searchPlaces = function(tuKhoa) {
        var mangSearch = [] ;
        var tuTK = tuKhoa.trim().toLowerCase() ;
        this.mangNV.map(function(nv) {
            var xepLoai = nv.xepLoai.toLowerCase() ;
            if(xepLoai.indexOf(tuTK) > -1) {
                mangSearch.push(nv)
            }
        })
        return mangSearch ;
    }
}