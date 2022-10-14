//ĐỀ BÀI:Tạo 1 file script2.js cùng cấp với index.html (nhớ import file mới này vào trong index.html). script2.js có các đoạn code sau:
//1. Tạo 1 biến x có giá trị là 1 object có các trường bất kỳ,
//sau đó tạo 1 biến y = biến x.
//Thay đổi giá trị của y. Console log ra giá trị của x và y sau đó.
let x = {
  name: "Hải Bông",
  age: 1,
};
//console.log(x); //x = {name: 'Hải Bông', age: 1}
let y = x;
//console.log(x); //x = {name: 'Hải Bông', age: 1}
//console.log(y); //y = {name: 'Hải Bông', age: 1}
y.name = "Hải Tuyết";
y.age = 5;
console.log(x); //x = {name: 'Hải Tuyết', age: 5}
console.log(y); //y = {name: 'Hải Tuyết', age: 5}

//2. Thực tiện thử thao tác copy các trường từ object a sang object b
// (a và b có các trường tùy ý, nhưng chúng có ít nhất 2 trường trùng tên nhau).
//Console log ra giá trị của a và b sau đó.
const date = "date of manufacture";
const a = {
  brand: "YSL",
  [date]: "13/10/2022",
  uses: function () {
    console.log("hang out");
  },
  sayName: function () {
    console.log(this.brand);
  },
};
const b = {
  brand: "hơi mợt",
  uses: function () {
    console.log("zay dam");
  },
  sayName: function () {
    console.log(this.brand);
  },
};
Object.assign(b,a);
console.log(a);//{brand: 'YSL', date of manufacture: '13/10/2022', uses: ƒ, sayName: ƒ} //a.uses() = hang out
console.log(b);//{brand: 'YSL', date of manufacture: '13/10/2022', uses: ƒ, sayName: ƒ} //b.uses() = hang out,b.sayName() = YSL 
// Chú ý: copy các trường từ object a sang object b sẽ có 2 TH 
//TH 1. Đối với các trường có keys trùng nhau thì value của a sẽ đè lên value của b
//TH 2. Đối với các trường KHÔNG có keys trùng nhau (a có mà b không có) thì sẽ tự động được thêm vào b
// TH đặc biệt : copy a sang 1 object mới => Object.assign({},a);


//3. cho 1 JSON như sau: const c = '{name: 'x', age: 30, gender: 'male'}',
//hãy chuyển đổi JSON này thành object trong JS.
const c = '{"name": "x", "age": 30, "gender": "male"}';
const obj = JSON.parse(c);
console.log(obj); //{name: 'x', age: 30, gender: 'male'}

//Sau đó thực hiện thay đổi/thêm bớt giá trị trường.
//sửa giá trị 1 property
obj.name = "editName";
console.log(obj); //{name: 'editName', age: 30, gender: 'male'}
//Thêm mới 1 property
obj.town = "Hung yen";
console.log(obj); //{name: 'editName', age: 30, gender: 'male', town: 'Hung yen'}
//Xóa 1 property
delete obj.town;
console.log(obj); //{name: 'editName', age: 30, gender: 'male'}

//Cuối cùng hãy chuyển object đã được thay đổi trở về 1 JSON
const obj2 = JSON.stringify(obj);
console.log(obj2); //{"name":"editName","age":30,"gender":"male"}

//4. Tạo 1 array có tối thiểu 5 item, mỗi item là 1 kiểu dữ liệu khác nhau (trong đó có 1 nested array).
const giaTocHai = [
  "Hải Anh",
  { cám: "Hải Nam" },
  ["Hải Tuyết", "Hải Bông", "Hải Vàng"],
  "item4",
  "item5",
];
//Thực hiện các thao tác sau theo đúng thứ tự:
//Thêm mới 1 item vào cuối
giaTocHai.push("item6"); //[ 'Hải Anh', {'cám': 'Hải Nam'}, ['Hải Tuyết', 'Hải Bông', 'Hải Vàng'],'item4','item5','item6' ]
//Xóa 1 item ở đầu
giaTocHai.shift(); //[ {'cám': 'Hải Nam'}, ['Hải Tuyết', 'Hải Bông', 'Hải Vàng'],'item4','item5','item6' ]
//thay đổi giá trị item thứ 3
giaTocHai[2] = "editValue"; //[ {'cám': 'Hải Nam'}, ['Hải Tuyết', 'Hải Bông', 'Hải Vàng'],'editValue','item5','item6' ]
//xóa giá trị thứ 2.
giaTocHai.splice(1, 1); //[ {'cám': 'Hải Nam'}, 'editValue','item5','item6' ]
//Console.log ra array sau đó để kiểm tra kết quả
Console.log(giaTocHai); //[ {'cám': 'Hải Nam'}, 'editValue','item5','item6' ]
