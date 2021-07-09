export class KhaiBaoYTe {
    ten = '';
    ho = '';
    email = '';
    soDienThoai = '';
    ngay = '';
    thang = '';
    nam = '';
    diaChi = '';
    thongTinDiChuyen = '';
    constructor() {}
    hienThiThongTin = () => {
        return `
        <ul class="list-group mb-3">
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                            <h4 class="my-0">Tên: ${this.ten}</h4>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                            <h4 class="my-0">Họ: ${this.ho}</h4>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                            <h4 class="my-0">Email: ${this.email}</h4>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                            <h4 class="my-0">Số Điện Thoại: ${this.soDienThoai}</h4>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                            <h4 class="my-0">Ngày Tháng Năm Sinh: ${this.ngay}/${this.thang}/${this.nam}</h4>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                            <h4 class="my-0">Địa Chỉ: ${this.diaChi}</h4>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                            <h4 class="my-0">Thông Tin Di Chuyển: ${this.thongTinDiChuyen}</h4>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                            <h4 class="my-0">Loại Nhiễm: ${this.loaiNhiem}</h4>
                                    </li>
                                </ul>
        `;
    }
}