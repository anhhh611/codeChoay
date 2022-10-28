// B1. Tạo function sum(x), nhận vào tham số x là 1 number. Trả về tổng các số tự nhiên từ 1 cho đến x.
//Nếu như x là một số <= 1 thì trả về 1 string "Please use a number that bigger than 1"
function sum(x) {
  if (x > 1) {
    let result = 0; //xác định biến sum và khởi tạo nó bằng 0.
    for (let i = 1; i <= x; i++) {
      //(khoi_tao_bien/điểm bắt đầu ; check_dieu_kien; tang/giam_bien)
      result += i; // Khối lệnh được thực thi //cộng giá trị i vào sum
    }
    return result; //Trả về tổng các số tự nhiên từ 1 cho đến x. (sum)
  } else {
    return "Please use a number that bigger than 1";
  }
}
// Hoặc
function sum(x) {
  let result = 0;
  for (let i = 1; i <= x; i++) {
    if (x > 1) {
      result += i;
    } else {
      return "Please use a number that bigger than 1";
    }
  }
  return result;
}

sum(5); // trả về 15 (vì 1 + 2 + 3 + 4 + 5 = 15)
sum(10); // trả về 55 (vì 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55)
sum(1); // trả về "Please use a number that bigger than 1"

// B2. Tạo function even(x), nhận vào tham số x là 1 number. Trả về 1 mảng chứa các số chẵn trong khoảng từ 1 cho đến x.
// Lưu ý cách xác định 1 số a có phải là số chẵn hay không:
//nếu như a % 2 === 0 thì a là số chẵn (% là toán tử tính số dư, vd 5 % 2 sẽ bằng 1 vì 5 chia 2 dư 1)
function even(x) {
  let result = [];
  for (let i = 1; i <= x; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}
even(5); // trả về [2, 4]
even(10); // trả về [2, 4, 6, 8, 10]
even(1); // trả về []

// B3. Tạo function doubleAndTriple(x), nhận vào tham số x là 1 mảng, item là các number bất kỳ.
//Trả về 1 mảng mới chứa các item là item của mảng x gấp 2 lên nếu như là số chẵn, gấp 3 lên nếu như là số lẻ
function doubleAndTriple(x) {
  let result = [];
  x.map((item) => {
    if (item % 2 === 0) {
      result.push((item *= 2));
    } else {
      result.push((item *= 3));
    }
  });
  return result;
}

doubleAndTriple([33, 141, 190]); // trả về [99, 423, 380]
doubleAndTriple([5, 63463232, 555, 99, 500]); // trả về [15, 126926464, 1665, 297, 1000]

//  B4. Tạo function countRole(x, y)
// - Tham số x sẽ đại diện cho danh sách nv công ty dưới dạng 1 mảng chứa các object các là các nhân viên, có dạng như sau:
// [
// {
// name: 1 string bất kỳ
// role: 1 string có thể là 1 trong 4 giá trị sau: "developer", "tester", "designer", "PM"
// }
// ...
// ]
// - Tham số y sẽ đại diện cho role của 1 nv, sẽ là 1 trong 4 giá trị sau: "developer", "tester", "designer", "PM"
// - countRole(x, y) sẽ trả về số nv có role là y trong mảng x
const testArr1 = [
  { name: "John", role: "developer" },
  { name: "Anna", role: "tester" },
  { name: "Steve", role: "designer" },
  { name: "Tim", role: "PM" },
];
const testArr2 = [
  { name: "John", role: "developer" },
  { name: "Anna", role: "tester" },
  { name: "Adam", role: "developer" },
  { name: "Tim", role: "PM" },
];
const testArr3 = [
  { name: "John", role: "developer" },
  { name: "Anna", role: "tester" },
  { name: "Lemon", role: "tester" },
  { name: "Alex", role: "developer" },
  { name: "Harry", role: "designer" },
];
const countRole = function (x, y) {
  const result = x.filter((people) => people.role === y);
  return result.length;
};
countRole(testArr1, "designer"); // trả về 1
countRole(testArr2, "developer"); // trả về 2
countRole(testArr3, "PM"); // trả về 0

// B5. Tạo function regionFilter(x, y)
// - Tham số x sẽ đại diện cho danh sách user dưới dạng 1 mảng chứa các object các là các user, có dạng như sau:
// [
// {
// username: 1 string bất kỳ
// region: 1 string có thể là 1 trong các giá trị sau: "ASIA", "EUROPE", "AMERICAS", "AUSTRALIA", "AFRICA", "ANTARCTICA"
// }
// ...
// ]
// - Tham số y sẽ đại diện cho khu vực của 1 user, sẽ là 1 string có thể là 1 trong các giá trị sau: "Asia", "Europe", "Americas", "Australia", "Africa", "Antarctica"
// - regionFilter(x, y) sẽ trả về 1 mảng chứa các user có region là y lọc ra từ mảng x
const testArr4 = [
  { username: "John", region: "AUSTRALIA" },
  { username: "Anna", region: "AUSTRALIA" },
  { username: "Steve", region: "ASIA" },
];
const testArr5 = [
  { username: "Ryan", region: "ASIA" },
  { username: "Gomez", region: "ANTARCTICA" },
  { username: "Rose", region: "AMERICAS" },
  { username: "Lisa", region: "EUROPE" },
];
const testArr6 = [
  { username: "John", region: "EUROPE" },
  { username: "Anna", region: "EUROPE" },
  { username: "Lemon", region: "EUROPE" },
  { username: "Anna", region: "AFRICA" },
  { username: "Lemon", region: "AFRICA" },
];

const regionFilter = function (x, y) {
  const result = x.filter((userPass) => userPass.region === y);
  return result;
};
regionFilter(testArr4, "ASIA"); // trả về [{ username: "Steve", region: "ASIA" }]
regionFilter(testArr4, "EUROPE"); // trả về []
regionFilter(testArr5, "ANTARCTICA"); // trả về [{ username: "Gomez", region: "ANTARCTICA" }]
regionFilter(testArr6, "AFRICA"); // trả về [{ username: "Anna", region: "AFRICA" }, { username: "Lemon", region: "AFRICA" }]

// B6. Tạo function genderFilter(x, y)
// - Tham số x sẽ đại diện cho danh sách nv công ty dưới dạng 1 mảng chứa các object các là các nhân viên, có dạng như sau:
// [
// {
// name: 1 string bất kỳ
// gender: 1 string có thể là 1 trong 2 giá trị sau: "male", "female",
// }
// ...
// ]
// - Tham số y sẽ đại diện cho giới tính của 1 nv, sẽ là 1 trong 2 giá trị sau: "male", "female"
// - genderFilter(x, y) sẽ trả về 1 mảng chứa TÊN các nv có gender là y lọc ra từ mảng x
const testArr7 = [
  { name: "John", gender: "male" },
  { name: "Anna", gender: "female" },
  { name: "Steve", gender: "male" },
  { name: "Tim", gender: "male" },
];
const testArr8 = [
  { name: "Ryan", gender: "male" },
  { name: "Gomez", gender: "female" },
  { name: "Rose", gender: "female" },
  { name: "Lisa", gender: "female" },
];
const testArr9 = [
  { name: "John", gender: "male" },
  { name: "Anna", gender: "female" },
  { name: "Lemon", gender: "female" },
];
const genderFilter = function (x, y) {
  const result = x.filter((people) => people.gender === y);
  return result;
};
genderFilter(testArr9, "male"); // trả về ["John"]
genderFilter(testArr7, "male"); // trả về ["John", "Steve", "Tim"]
genderFilter(testArr8, "female"); // trả về ["Gomez", "Rose", "Lisa"]

// B7. Tạo function findMember(x, y)
// - Tham số x sẽ đại diện cho danh sách 1 nhóm các lãnh đạo quốc gia, dưới dạng 1 mảng chứa các object các là các lãnh đạo, có dạng như sau:
// [
// {
// name: 1 string bất kỳ, (sẽ là tên người),
// country: 1 string bất kỳ (sẽ là tên quốc gia),
// age: 1 number (sẽ là tuổi)
// },
// ]
// - Tham số y sẽ đại diện cho quốc gia của 1 lãnh đạo
// - findMember(x, y) sẽ tìm ra thông tin về lãnh đạo của quốc gia y, từ danh sách x. Nếu không có kq phù hợp thì trả về string "Member not found"
const SEA = [
  { name: "Hassanal Bolkiah", country: "Brunei", age: 76 },
  { name: "Hun Sen", country: "Cambodia", age: 70 },
  { name: "Joko Widodo", country: "Indonesia", age: 61 },
  { name: "Phankham Viphavanh", country: "Laos", age: 71 },
  { name: "Ismail Sabri Yaakob", country: "Malaysia", age: 62 },
  { name: "Min Aung Hlaing", country: "Myanmar", age: 66 },
  { name: "Bongbong Marcos", country: "Philippines", age: 65 },
  { name: "Lee Hsien Loong", country: "Singapore", age: 70 },
  { name: "Prawit Wongsuwan", country: "Thailand", age: 77 },
  { name: "Phạm Minh Chính", country: "Vietnam", age: 63 },
  {
    name: "Lim Jock Hoi",
    country: "Association of Southeast Asian Nations",
    age: 70,
  },
];
const G7 = [
  { name: "Justin Trudeau", country: "Canada", age: 50 },
  { name: "Emmanuel Macron", country: "France", age: 44 },
  { name: "Olaf Scholz", country: "Germany", age: 64 },
  { name: "Giorgia Meloni", country: "Italy", age: 45 },
  { name: "Fumio Kishida", country: "Japan", age: 65 },
  { name: "Rishi Sunak", country: "United Kingdom", age: 42 },
  { name: "Joe Biden", country: "United States", age: 79 },
  { name: "Charles Michel", country: "European Union", age: 46 },
  { name: "Ursula von der Leyen", country: "European Union", age: 64 },
];
const findMember = function (x, y) {
  const result = x.filter((people) => people.name === y);
  if (result.length === 0) {
    return "Member not found";
  }
  return result;
};
findMember(G7, "Rishi Sunak"); // trả về { name: "Rishi Sunak", country: "United Kingdom", age: 42 }
findMember(SEA, "Hun Sen"); // trả về { name: "Hun Sen", country: "Cambodia", age: 70 }
findMember(G7, "Min Aung Hlaing"); // trả về "Member not found"
