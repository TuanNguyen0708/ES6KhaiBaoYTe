import { KhaiBaoYTe } from "./index.js";

console.log('file này đã chạy');
let arrKhaiBaoYTe = [];
// a DOM sai chưa bắt được sự kiện
document.querySelector('#signup-form .wizard .actions ul li:last-child a').onclick = () => {
    let arrTagInput = document.querySelectorAll('form input,form select, form textarea');
    let kBYT = new KhaiBaoYTe();
    console.log(arrTagInput);
    for (let input of arrTagInput) {
        //mỗi lần duyệt 1 tag input lấy ra name và value
        let {name,value} = input;
        //gán giá trị value dựa vào name (thuộc tính) cho object khai báo y tế
        kBYT[name]=value;
        console.log(name,value);
    }
    var arrTagOutput = document.querySelectorAll('form input, form select');
    document.querySelector('.noiDungHienThi').innerHTML = kBYT.hienThiThongTin();
}
// document.querySelector('#signup-form .wizard .actions ul li:last-child a').onclick = function() {
//     document.querySelector('.noiDungHienThi').innerHTML = 'Đã DOM Tới';
//     // console.log(arrKhaiBaoYTe)
//     // let kBYT = new KhaiBaoYTe();
//     // let arrTagInput = document.querySelectorAll('form input, form select')
//     // for (let input of arrTagInput) {
//     //     let {name,value} = input;
//     //     kBYT[name] = value;
//     // }
//     // var arrTagOutput = document.querySelectorAll('form input, form select');
//     // document.querySelector('.noiDungHienThi').innerHTML = kBYT.hienThiThongTin();
// }
// cái file này a còn chưa gắn dô html nữa a
