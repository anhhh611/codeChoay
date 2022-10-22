// Câu 1
// B1. Dự đoán kết quả của các biến sau, comment kết quả vào bên cạnh
// // VD: const b = 1 + 1 // 2
const a1 = "abc" + undefined; // 'abcundefined'
const b2 = null + !NaN; // 0 + true = 0 + 1 = 1
const b3 = undefined + null; // NaN + 0 = NaN
const b4 = "12" + -12; // 12 + (-12) = 0
const b5 = -12 + !undefined; // -12 + true = -12 + 1 = -11
const b6 = "500ae" + "100ae"; // '500ae100ae'
const b7 = !Number(" ") + "def"; // !0 + 'def' = true + 'def' = 1 + 'def' = '1def'
const b8 = !Boolean("abc") + false; //false + false = 0 + 0 = 0
const b9 = "100.0" + "20"; // 100 + 20 = 120
const b10 = 0 + "0"; // 0 + 0 = 0

const c1 = NaN - undefined; // NaN - NaN = NaN
const c2 = true - !"abc"; // true - false = 1 - 0 = 1
const c3 = !"120" - NaN; // false - NaN = NaN
const c4 = !true - !true; //false - false = 0 - 0 = 0
const c5 = 120 * "10"; //120*10 = 12000
const c6 = !3.1416 * undefined; // false*NaN = NaN
const c7 = undefined / !null; //NaN/true = NaN
const c8 = Boolean(undefined) / !false; //false/true = 0/1 = 0
const c9 = "!100.0" - "20"; //false - 20 = 1 - 20 = -19
const c10 = "abc" - "a"; // NaN - NaN = NaN

const d1 = 200 === "200.00"; // false  (200 !== '200.00')
const d2 = "abc" == "abc"; // true
const d3 = false == NaN; // false  (0 != NaN)
const d4 = true == "1"; // true
const d5 = Boolean(null) === false; // true  (false === false)
const d6 = Boolean(0) === 0; // false  (false !== 0)
const d7 = Number("12a") === null; // false (NaN !== null)
const d8 = NaN === 1 - NaN; // true (NaN === NaN)
const d9 = NaN === undefined - null; // true (NaN === NaN-0)???
const d10 = "90" / "9" === 10; // true (90/9 === 10)

const e1 = 200 && "200.00"; //200.00
const e2 = 200 || "200.00"; //200
const e3 = "abc" || !"abc"; //abc
const e4 = false || NaN; //NaN
const e5 = undefined && null; //undefined
const e6 = true && 1; //1
const e7 = Boolean(null) || false; //false (false || false )
const e8 = !Boolean(1) || true; //true  (false || true)
const e9 = Boolean(0) || 0; //0  (false || 0 )
const e10 = Number("12a") && !null; //NaN  (NaN && true)

// B2. Tạo function isSameType(x, y) nhận vào 2 tham số x và y có kiểu dữ liệu bất kỳ, kiểm tra xem x và y có cùng kiểu dữ liệu hay không.
//Nếu có thì trả về true, ngược lai trả về false
function isSameType(x, y) {
  if (typeof x === typeof y) {
    return true;
  } else {
    return false;
  }
}
isSameType(1, 1); // true
isSameType(1, "1"); // false

// B3. Tạo function isAuthenticaed(x, y) nhận vào 2 tham số x và y.
//x là 1 giá trị boolean tượng trưng cho việc user nay
// VD: isSameType(1, 1) // true isSameType(1, '1') // false
// function isAuthenticaed(x1, y1){
//     if () {
//       return
//     } else{
//         return
//     }
// }
// isAuthenticaed(1, 1) // true
// isAuthenticaed(1, '1') // false

// B4. Tạo function  nhận vào tham số x mô tả 1 user có dạng như sau:
// {
// id: sẽ là 1 number bất kỳ
// gender: sẽ là 'male' hoặc 'female',
// joinDate: sẽ là 1 string có dạng 'dd/mm/yyyy'
// }
// Kiểm tra xem user x này có phải là 1 user nữ và mới đăng ký trong năm nay (2022) hay không.
//Nếu đúng thì trả về id của user đó, nếu sai thì trả về false
let x3 = {
  id: 1,
  gender: "female",
  joinDate: "22/10/2022",
};
function isNewFemaleUser(x3) {
  if (x3.gender === "female" && x3.joinDate.includes("2022")) {
    return x3.id;
  } else {
    return false;
  }
}
isNewFemaleUser({ id: 1, gender: "male", joinDate: "1/1/2022" }); // false
isNewFemaleUser({ id: 2, gender: "female", joinDate: "1/1/2022" }); // 2
isNewFemaleUser({ id: 3, gender: "female", joinDate: "1/1/2021" }); // false

// B5. Tạo function isAuthorized(x) nhận vào tham số x mô tả 1 user có dạng như sau:
// {
// role: sẽ là 'admin' hoặc 'normal',
// rank: sẽ là 1 number số nguyên có giá trị từ 0 đến 3 (0, 1, 2, 3)
// }
// 1 user sẽ có quyền truy cập nếu như user đó có role là 'admin' hoặc có rank lớn hơn 1.
//Kiểm tra xem user x có quyền truy cập hay không, nếu có thì trả về true, không thì trả về false
let x5 = {
  role: "admin",
  rank: [0, 1, 2, 3],
};
function isAuthorized(x5) {
  if (x5.role === "admin" || x5.rank > 1) {
    return true;
  } else {
    return false;
  }
}
isAuthorized({ role: "admin", rank: 1 }); // true
isAuthorized({ role: "admin", rank: 2 }); // true
isAuthorized({ role: "normal", rank: 0 }); // false
isAuthorized({ role: "normal", rank: 3 }); // true

// B6. Tạo function isPayable(x, y) nhận vào 2 tham số x, y
// - tham sô x mô tả tình trạng balance (số dư tài khoản) của user, có dạng như sau:
// {
// balance: sẽ là 1 number số nguyên dương bất kỳ
// isVIP: sẽ là 1 booklean true hoặc false
// }
// - tham sô y mô tả giá tiền của 1 món hàng, sẽ là 1 số nguyên dương bất kỳ

// Nếu như user không đủ tiền trả cho món hàng (balance ít hơn giá tiền) thì trả về false, còn không trả về true.
//Tuy nhiên nếu như user đó là  (isVIP là true) thì dù không đủ tiền vẫn cho phép mua, trả về true
let x6 = {
  balance: 15000,
  isVIP: true,
};
let y6 = 5000;
function isPayable(x6, y6) {
  if (x6.balance > y6 || x6.isVIP === true) {
    return true;
  } else {
    return false;
  }
}
isPayable({ balance: 1000000, isVIP: false }, 1000); // true
isPayable({ balance: 1000, isVIP: false }, 1000000); // false
isPayable({ balance: 1000000, isVIP: true }, 1000); // true
isPayable({ balance: 1000, isVIP: true }, 1000000); // true

// B7. Tạo function isPayable(x, y) nhận vào 2 tham số x, y
// - tham sô x mô tả tình trạng balance (số dư tài khoản) của user, có dạng như sau:
// {
// balance: sẽ là 1 number số nguyên dương bất kỳ
// isVIP: sẽ là 1 booklean true hoặc false
// }
// - tham sô y mô tả giá tiền của 1 món hàng, sẽ là 1 số nguyên dương bất kỳ

// Nếu như user không đủ tiền trả cho món hàng (balance ít hơn giá tiền) thì trả về false, còn không trả về true. Tuy nhiên nếu như user đó là  (isVIP là true) thì dù không đủ tiền vẫn cho phép mua, trả về true
// VD:
// isPayable({balance: 1000000, isVIP: false }, 1000) // true
// isPayable({balance: 1000, isVIP: false }, 1000000) // false
// isPayable({balance: 1000000, isVIP: true }, 1000) // true
// isPayable({balance: 1000, isVIP: true }, 1000000) // true

// B8. Tạo function daysCalc(x), nhận vào 1 tham số x mô tả 1 số là 1 tháng trong năm (1- 12).
//Trả về số ngày trong tháng đó dưới dạng 1 number.
//Tuy nhiên nếu như đối số truyền vào cho x không phải kiểu dữ liệu là number thì trả về chuỗi sau: "Wrong data type: argument is not a valid number"
let x8 = 12;
function daysCalc(x8) {
  if (typeof x8 === "number") {
    return 31;
  } else {
    return "Wrong data type: argument is not a valid number";
  }
}
daysCalc(12); // 31
daysCalc(11); // 30
daysCalc("abc"); // "Wrong data type: argument is not a valid number"

// B9.
// - Tạo 1 mảng đại diện cho 1 nhóm 4 người, mỗi người được mô tả bằng một object như sau:
// {
// name: 1 string bất kỳ,
// gender: là sring 'male' hoặc 'female'
// }
// - Tạo 1 function girlFilter(x), nhận vào x là 1 mảng chính là mảng đã tạo bên trên.
//Lọc ra các thành viên là nữ (gender là 'female') trong mảng x, trả về 1 mảng khác chỉ chứa các thành viên nữ đó.
// VD: girlFilter(testArr) // [{name: 'Hermione', gender: 'female'}, {name: 'Ginny', gender: 'female'}]
const testArr = [
  { name: "Harry", gender: "male" },
  { name: "Hermione", gender: "female" },
  { name: "Ron", gender: "male" },
  { name: "Ginny", gender: "female" },
];
function girlFilter(x9) {
  if (testArr[1]["gender"] === "female") {
    return testArr.testArr[1]["gender"] === "female";
  } else {
    return false;
  }
}
girlFilter(testArr); // [{name: 'Hermione', gender: 'female'}, {name: 'Ginny', gender: 'female'}]
