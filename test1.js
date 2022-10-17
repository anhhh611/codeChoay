// Câu 3
//1. Từ biến a = 'Have a nice day', hãy tạo ra các biến có giá trị như sau:
//a1 sẽ có giá trị = a thay đổi chữ 'day' thành 'weekend'
//a2 sẽ có giá trị = a bỏ đi chữ 'day'
//a3 sẽ có giá trị là phép kiểm tra a có bắt đầu bằng 'h' hay không
//a4 sẽ có giá trị = a nhưng viết hoa tất cả chữ cái
//a5 sẽ có giá trị là phép kiểm tra a có chứa chữ 'nice' hay không

let a = "Have a nice day";
let a1 = a.replace("day", "weekend"); // 'Have a nice weekend'
let a2 = a.replace("day", ""); // 'Have a nice '
let a3 = a.startsWith("h"); // false (vì có phân biệt viết hoa và viết thường)
let a4 = a.toUpperCase(); // 'HAVE A NICE DAY'
let a5 = a.includes("nice"); // true

// 2. Dự đoán kết quả của các biến sau, comment kết quả vào bên cạnh
// VD: const b = Number(1) // 1
const b1 = Number("10.000"); // 10
const b2 = Number(" 0.77 "); // 0.77
const b3 = Number("b3"); // NaN
const b4 = Number("1+2"); // NaN
const b5 = Number(null); //0
const b6 = Number(undefined); //NaN
const b7 = Number(false); //0
const b8 = Number(""); // 0
const b9 = Number(" "); //0
const b10 = Number({ key: "value" }); //NaN
const b11 = Number([12.5]); //NaN???undefined???

const b12 = function (x) {
  x = 10;
}; //undefined  (hàm k có từ khóa return thì sẽ ra là undefined)

// 3. Tạo 1 object tên là c dùng để mô tả 1 chiếc điện thoại (tên và nội dung các trường phải có liên quan đến chiếc điện thoại đó), với các yêu cầu sau
// - c phải có chính xác 3 trường: 2 property thông thường và 1 method,
// - Trong nội dung method có sử dụng this
let c = {
  name: "phoneName",
  brand: "iphone",
  sayName: function () {
    console.log(this.name);
  },
};
// - Từ giá trị của object c, tạo ra các biến c1, c2,.. là các điện thoại khác, với yêu cầu như sau:
// c1 giữ nguyên tên các property của c nhưng có giá trị khác
// c2 giữ nguyên tên các property của c nhưng có giá trị khác, có thêm 1 property và 1 method mới so vói c
// c3 chỉ giữ lại method của c, các property khác bị xóa. nội dung method cũng sẽ thay đổi so với c
let c1 = Object.assign(c, {
  name: "phoneName1",
  brand: "iphone1",
  sayName: function () {
    console.log(this.brand);
  },
});
let c2 = Object.assign(c, {
  name: "phoneName2",
  brand: "iphone2",
  sayName: function () {
    console.log(this.size);
  },
  size: "big",
  showName: function () {
    console.log(this.name);
  },
});
let c3 = Object.assign(c, {
    sayName: function () {
        console.log(this.name);
      },
  });

// - Từ giá trị của object c, tạo ra các biến c4, c5 là các mảng như sau:
// c4 là 1 mảng chứa các tên property của c
// c5 là 1 mảng chứa các giá trị property của c
let c4 = Object.assign([], Object.keys(c));
let c5 = Object.assign([], Object.values(c));

// Xóa item thứ 2 từ trái qua của c4
c4 = c4.splice(1, 1);	
// Thêm 1 item bất kỳ vào cuối c5
c5 = c5.push('itemplus');


// Câu 4
// viết các hàm theo yêu cầu sau:
// - removeSpaces(x) {} : nhận vào 1 string x, trả về 1 string mới với nội dung là string x nhưng loại bỏ hết dấu cách ' ' nếu có.
// VD removeSpaces('today is a good day') sẽ trả về 'todayisagoodday'
function removeSpaces(x) {
    return x.replaceAll(" ", "");
}
removeSpaces('today is a good day'); //todayisagoodday


// - chill(x) {} : nhận vào 1 string x là tên 1 bài hát, có giá trị mặc định là 'này'. Trả về 1 string có nội dung: 'Bài x chill phết!'
// VD chill('Lối nhỏ') sẽ trả về 'Bài Lối nhỏ chill phết!', chill() sẽ trả về 'Bài này chill phết!'
function chill(tenBaiHat = 'này') {
    console.log( 'Bài' + ' ' + tenBaiHat + ' ' + 'chill phết!');
}
chill('Lối nhỏ'); // Bài Lối nhỏ chill phết!
chill()  //Bài này chill phết!

// - yearChecker(x) {} : nhận vào 1 string x là ngày sản xuất của một món đồ (dạng dd/mm/yyyy), kiểm tra xem món đồ này có phải được sản xuất trong năm nay không (2022)
// VD yearChecker('01/01/2022') sẽ trả về true, yearChecker('01/01/20221') sẽ trả về false
function yearChecker(ngaySanXuat = '06/11/2022') {
    return ngaySanXuat.includes('2022') ;
}
yearChecker('01/01/2022'); // true
yearChecker('01/01/2021');  //false

// - diskArea(x) {} : nhận vào 1 number x là bán kính của 1 hình tròn, trả về diện tích của hình tròn đó (có thể tra gg để tìm công thức tính hình tròn)
// VD diskArea(5) sẽ trả về 78.5398163397 (không cần làm tròn)
function diskArea(bkHinhTron) {
    return 'Diện tích của hình tròn là :' + bkHinhTron*bkHinhTron*3.1416 ;
}
diskArea(5); // 78.5398163397


// - beforeLastIndex(x) {} : nhận vào 1 tham số x là 1 array, trả về item trước item cuối cùng của array đó
// VD beforeLastIndex([1, '2', true]) sẽ trả về '2', beforeLastIndex(['a', null, 100, false]) sẽ trả về 100
function beforeLastIndex(myArray) {
    return myArray[[myArray.length - 1] - 1 ];
}
beforeLastIndex([1, '2', true]); // '2'
beforeLastIndex(['a', null, 100, false]) // '100' 

// - isObject(x) {} : nhận vào 1 tham số x là kiểu dữ liệu bất kỳ, kiểm tra xem x có phải là 1 object hay không, trả về 1 boolean
// VD isObject(12) sẽ trả về fasle, objectChecker({key: 'value'}) sẽ trả về true
function isObject(myObj) {
    return Boolean(typeof myObj === 'object'&& myObj !== null && Array.isArray(myObj) === false);
}
isObject(12); // fasle
isObject({key: 'value'}) // true
isObject([1, 2, 3]) // fasle

// - objectChecker(x) {} : nhận vào 1 tham số x là 1 object có các trường bất kỳ, bắt buộc có 1 trường là isChecked: false. 
//Trả về 1 object mới có các trường giống như object x, nhưng giá trị trường "isChecked" sẽ là true
// VD objectChecker({key: 'value', isChecked: false}) sẽ trả về 1 object mới = {{key: 'value', isChecked: true}}
const obj1 = {
    isChecked: false,
    key: 'value',
}
function objectChecker(obj1) {
    return Object.assign({}, obj1, {isChecked : true});
}
// function objectChecker(obj1) {
//     return Object.assign({}, obj1, obj1.isChecked = true);
// }
objectChecker({key: 'value', isChecked: false}); // {key: 'value', isChecked: true}

// - propertyChecker(x, y) {}: nhận vào tham số x là 1 object có các trường bất kỳ và tham số y là 1 string bất kỳ. 
//Kiểm tra xem object x đó có chứa trường nào tên giống như string y không, trả về 1 boolean
// VD propertyChecker({key: 'value'}, 'key') sẽ trả về true
// VD propertyChecker({key: 'value'}, 'key1') sẽ trả về false
const obj2 = {
    isChecked: false,
    key: 'value',
};
const string1 = 'key';
function propertyChecker(obj2, string1) {
    return (Object.keys(obj2)).includes(string1);
};
propertyChecker({key: 'value'}, 'key') // true
propertyChecker({key: 'value'}, 'key1') // false


// - 2 fucntion: convertJSONData(x) {} và fetchJSONData(y) {} :
// + convertJSONData nhận vào 1 tham số x là 1 JSON object có dạng
// {
// statusCode: number,
// data: {
// message: string
// }
// }
// convertJSONData trả về giá trị của message

// + fetchJSONData nhận vào 1 tham số y là 1 callback function. Callback y này sẽ nhận vào tham số là 1 JSON là response từ API, JSON đó có dạng sau:
// {
// statusCode: number,
// data: {
// message: string
// }
// }
// và trả về giá trị của message

// + ngoài ra, trong nội dung fetchJSONData sẽ có 1 biến tên là JSONdata, có giá trị là 1 JSON có dạng như trên
//  Khi call createJSONData và truyền vào cho nó 1 callback, sẽ trả về giá trị của message


// VD fetchJSONData(x) {
// data = {
// statusCode: 200,
// data: {
// message: "Logged in sucessfully"
// }
// }

// // xử lý callback x ở đây
// }

// fetchJSONData(convertJSONData) sẽ trả về "Logged in sucessfully"