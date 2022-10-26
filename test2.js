// Câu 1
// B1. Dự đoán kết quả của các biến sau, comment kết quả vào bên cạnh
// // VD: const b = 1 + 1 // 2
const a1 = "abc" + undefined; // 'abcundefined'
const b2 = null + !NaN; // 0 + true = 0 + 1 = 1
const b3 = undefined + null; // NaN + 0 = NaN
const b4 = "12" + -12; // '12 -12'
const b5 = -12 + !undefined; // -12 + true = -12 + 1 = -11
const b6 = "500ae" + "100ae"; // '500ae100ae'
const b7 = !Number(" ") + "def"; // !0 + 'def' = true + 'def' = 'truedef'
const b8 = !Boolean("abc") + false; //false + false = 0 + 0 = 0
const b9 = "100.0" + "20"; // '100.020'
const b10 = 0 + "0"; // '00'

const c1 = NaN - undefined; // NaN - NaN = NaN
const c2 = true - !"abc"; // true - false = 1 - 0 = 1
const c3 = !"120" - NaN; // false - NaN = NaN
const c4 = !true - !true; //false - false = 0 - 0 = 0
const c5 = 120 * "10"; //120*10 = 12000
const c6 = !3.1416 * undefined; // false*NaN = NaN
const c7 = undefined / !null; //NaN/true = NaN
const c8 = Boolean(undefined) / !false; //false/true = 0/1 = 0
const c9 = "!100.0" - "20"; //'!100.0' - 20 = NaN //toán tử bị string hóa ('!100')
const c10 = "abc" - "a"; // NaN - NaN = NaN

const d1 = 200 === "200.00"; // false  (200 !== '200.00')
const d2 = "abc" == "abc"; // true
const d3 = false == NaN; // false  (0 != NaN)
const d4 = true == "1"; // true
const d5 = Boolean(null) === false; // true  (false === false)
const d6 = Boolean(0) === 0; // false  (false !== 0)
const d7 = Number("12a") === null; // false (NaN !== null)
const d8 = NaN === 1 - NaN; // false (NaN sẽ không === NaN)
const d9 = NaN === undefined - null; // false (NaN sẽ không === NaN)
const d10 = "90" / "9" === 10; // true (90/9 === 10)

const e1 = 200 && "200.00"; //'200.00'
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
function isSameType(x2, y2) {
  if (typeof x2 === typeof y2) {
    if (
      typeof x2 === "object" &&
      x2 !== null &&
      Array.isArray(x2) === false &&
      typeof y2 === "object" &&
      typeof y2 !== null &&
      Array.isArray(y2) === false
    ) {
      return true;
    } else if (
      typeof x2 === "object" &&
      x2 !== "null" &&
      Array.isArray(x2) === false &&
      typeof y2 !== "object" &&
      (y2 === null || Array.isArray(y2) === true)
    ) {
      return false;
    } else if (
      (x2 === null || Array.isArray(x2) === true) &&
      typeof y2 === "object" &&
      y2 !== "null" &&
      Array.isArray(y2) === false
    ) {
      return false;
    } else if (
      typeof x2 !== "object" &&
      x2 !== null &&
      Array.isArray(x2) === false &&
      typeof y2 !== "object" &&
      y2 !== null &&
      Array.isArray(y2) === false
    ) {
      return true;
    }
  } else {
    return false;
  }
}
isSameType(null, {}); // false
isSameType(1, 1); // true
isSameType(1, "1"); // false
isSameType({}, {}); // true
isSameType([], []); // true  (undefined???)
isSameType([], {}); // false

// No.53: x2 và y2 cùng là obj => true
// No.61: x2 là obj và y2 là null or arr => false
//  No.69: x2 là null or arr và y2 obj => false
//  No.77: x2 và y2 cùng không phải là obj => true

// B3. Tạo function isAuthenticated(x, y) nhận vào 2 tham số x và y
// - Tham số x mô tả 1 thông tin đăng nhập của 1 user (là nội dung request body của method POST trong REST API).
// x sẽ có dạng 1 object như sau:
// {
//      username: sẽ là 1 string bất kỳ,
//      password: sẽ là 1 string bất kỳ,
// }
// - Tham số y mô tả 1 token của user (là 1 request header của method POST trong REST API)
// y sẽ là 1 string bất kỳ
// - isAuthenticated sẽ kiểm tra xem username có chính xác là 'abc' VÀ password chính xác là '123' VÀ token chính xác là 'def456' hay không.
// Nếu cả 3 điều kiện trên đều đúng, trả về true, các TH khác đều trả về false
let x3 = {
  username: "abc",
  password: "123",
};
let y3 = "def456";
function isAuthenticated(x3, y3) {
  if (x3.username === "abc" && x3.password === "123" && y3 === "def456") {
    return true;
  } else {
    return false;
  }
}
isAuthenticated({ username: "abc", password: "123" }, "def456"); // true
isAuthenticated({ username: "abc1", password: "123" }, "def456"); // false
isAuthenticated({ username: "abc", password: "1231" }, "def456"); // false
isAuthenticated({ username: "abc", password: "123" }, "def4561"); // false
isAuthenticated({ username: "abc1", password: "1231" }, "def456"); // false
isAuthenticated({ username: "abc", password: "1231" }, "def4561"); // false

// B4. Tạo function  nhận vào tham số x mô tả 1 user có dạng như sau:
// {
// id: sẽ là 1 number bất kỳ
// gender: sẽ là 'male' hoặc 'female',
// joinDate: sẽ là 1 string có dạng 'dd/mm/yyyy'
// }
// Kiểm tra xem user x này có phải là 1 user nữ và mới đăng ký trong năm nay (2022) hay không.
//Nếu đúng thì trả về id của user đó, nếu sai thì trả về false
let x4 = {
  id: 1,
  gender: "female",
  joinDate: "22/10/2022",
};
function isNewFemaleUser(x4) {
  if (x4.gender === "female" && x4.joinDate.includes("2022")) {
    return x4.id;
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

// B8. Tạo function daysCalc(x), nhận vào 1 tham số x mô tả 1 số là 1 tháng trong năm (1- 12).
//Trả về số ngày trong tháng đó dưới dạng 1 number.
//Tuy nhiên nếu như đối số truyền vào cho x không phải kiểu dữ liệu là number thì trả về chuỗi sau: "Wrong data type: argument is not a valid number"

//Cách 1
function daysCalc(x8) {
  if (x8 <= 12 && x8 >= 1) {
    if (x8 === 2) {
      return "28 or 29";
    } else if (
      x8 === 1 ||
      x8 === 3 ||
      x8 === 5 ||
      x8 === 7 ||
      x8 === 8 ||
      x8 === 10 ||
      x8 === 12
    ) {
      return 31;
    } else {
      return 30;
    }
  } else {
    return "Wrong data type: argument is not a valid number";
  }
}

// Cách 2
function daysCalc(x8) {
  let result;
  switch (x8) {
    case 2: {
      result = "28 or 29";
      break;
    }
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      result = 31;
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      result = 30;
      break;
    }
    default: {
      result = "Wrong data type: argument is not a valid number";
    }
  }
  return result;
}

daysCalc(12); // 31
daysCalc(11); // 30
daysCalc("abc"); // "Wrong data type: argument is not a valid number"
daysCalc(2); // '28 or 29'
daysCalc(-23); // "Wrong data type: argument is not a valid number"
daysCalc(13); // "Wrong data type: argument is not a valid number"

// B9.
// - Tạo 1 mảng đại diện cho 1 nhóm 4 người, mỗi người được mô tả bằng một object như sau:
// {
// name: 1 string bất kỳ,
// gender: là sring 'male' hoặc 'female'
// }
// - Tạo 1 function girlFilter(x), nhận vào x là 1 mảng chính là mảng đã tạo bên trên.
//Lọc ra các thành viên là nữ (gender là 'female') trong mảng x, trả về 1 mảng khác chỉ chứa các thành viên nữ đó.
const testArr = [
  { name: "Harry", gender: "male" },
  { name: "Hermione", gender: "female" },
  { name: "Ron", gender: "male" },
  { name: "Ginny", gender: "female" },
];
function girlFilter(testArr) {
  const result = [];
  if (testArr[0].gender === "female") {
    result.push(testArr[0]);
  }
  if (testArr[1].gender === "female") {
    result.push(testArr[1]);
  }
  if (testArr[2].gender === "female") {
    result.push(testArr[2]);
  }
  if (testArr[3].gender === "female") {
    result.push(testArr[3]);
  }
  return result;
}
girlFilter(testArr); // [{name: 'Hermione', gender: 'female'}, {name: 'Ginny', gender: 'female'}]
