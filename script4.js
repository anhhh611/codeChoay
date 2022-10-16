//1. Tạo 1 function log ra 1 lời chào đến user,
//nhận vào 1 tham số là name có giá trị default là 'User',
//nội dung function là log ra console "Hello " + tham số name.

function function1(name = 'User') {
  console.log("Hello" + name);
}

//Call function này 2 lần: có truyền vào 1 cái tên và không truyền vào gì
function1("Hai Anh"); // HelloHai Anh
function1(); // HelloUser

//2. Tạo 1 function có 4 parameters, trong đó có 2 default parameters
// các default parameters này sẽ dùng giá trị liên quan đến các parameters khác
function function2(a, b, c = a + 1, d = b + 2) {
  console.log(a, b, c, d);
}
//function2 (1, 2, 3, 4); // 1 2 3 4
//function2 (1, 2); // 1 2 2 4

//3. Tạo 4 function, đều nhận vào 2 parameters, có tên là add, sub, mul, div
// lần lượt có tác dụng sau: trả về kết quả tổng, hiệu, tích, thương của 2 parameters.
//VD add(1,2) sẽ trả về 3. mul(1,2) sẽ trả về 2. Lưu ý: dấu nhân trong js sẽ là ký tự asterisk (*), dấu chia trong js sẽ là ký tự slash (/).
function sum(x, y) {
  return x + y;
}
sum(1, 2); // 3
function sub(x, y) {
  return x - y;
}
sub(1, 2); //-1
function mul(x, y) {
  return x * y;
}
mul(1, 2); // 2
function div(x, y) {
  return x / y;
}
div(1, 2); //0.5

//4. Tạo 1 function fuelCalc có tác dụng tính giá xăng RON 95-III, 
//nhận vào 1 tham số là số lít xăng và sẽ trả về kết quả là số lít xăng nhân với 22000. VD a(10) sẽ trả về 220000
function fuelCalcl(x) {      // x là số lít xăng
  return x*22000;
}

// Tạo 1 function waveAlpha2015FuelCalc nhận vào 1 tham số là 1 function. 
//Function b có nội dung sau: tạo 1 biến maximum có giá trị là số lít xăng tối đa của xe Wave Alpha 2015 (tra gg) và 
//kết quả trả về của function này sẽ là gọi function nhận vào làm tham số với đối số là biến maximum trên.

function waveAlpha2015FuelCalc(fuelCalcl) {
  const maximum = 3.7; 
  return fuelCalcl(maximum); 
};


//Gọi function waveAlpha2015FuelCalc để xem đổ đầy bình xe Wave Alpha 2015 sẽ hết bn xèng
waveAlpha2015FuelCalc(fuelCalcl); //


//5. Tạo 1 function có nội dung chứa 3 biến được khai báo bằng let / const / var. 
function function6() {
  var name1 = 'bong';
  let name2 = 'tuyet';
  const name3 = 'vang';
};
// thử truy cập 3 biến đó từ 1 function bên ngoài function trên.
function showName(){
  console.log(name1);
  console.log(name2);
  console.log(name3);
};
showName();
//note: truy cập ở đây là log ra giá trị, thử gán lại giá trị...