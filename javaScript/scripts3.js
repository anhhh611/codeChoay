//Tách nhánh js-3 từ nhánh chính, tạo 1 file mới scripts3.js có nội dung chứa các code sau
//1. Tạo 2 function tên và nội dung tùy ý theo 2 cách Function declaration và Function expression
//Function declaration
function myFunction(a, b) {
  return a * b;
}

myFunction(4, 3);

//Function expression
const x = function (a, b) {
  return a * b;
};
x(4, 3);

//2. Tạo 1 function có 3 parameters, nội dung là console log ra 3 parameters đó.
function test(x, y, z) {
  console.log(x, y, z);
}
//Call function đó với 3 trường hợp: call với 3 arguments, 2 arguments và 0 argument
//call với 3 arguments
test(1, 2, 3); // 1 2 3
//2 arguments
test(1, 2); // 1 2 undefined
//0 argument
test(); // undefined undefined undefined

//3. Tạo 1 function nhận vào 1 parameter là 1 object bất kỳ.
//Mutate object đó trong nội dung function.
const ten = { name: "my name" };
function changeName(object) {
  object.name = "new name";
}
//Console.log object đó trước khi gọi function
console.log(ten); //{name: 'my name'}

//Console.log object đó sau khi gọi function
changeName(ten); //undefined
console.log(ten); //{name: 'new name'}

//4. Tạo 1 function nhận vào 2 parameters. Nội dung function là console log ra (parameter1 + parameter 2).
//Call function đó 4 lần.
function bong(dangiu, danhda) {
  console.log(dangiu + danhda);
};
//Lần 1: argument 1 là 1 number, argument 2 là 1 number.
bong(1,2);        // 3
//Lần 2: argument 1 là 1 number, argument 2 là 1 string.
bong(1,'xinhdep');// 1xinhdep
//Lần 3: argument 1 là null, argument 2 là 1 number
bong(null, 2);    // 2
//Lần 4: argument 1 là number, không truyền vào argument 2
bong(1);         // NaN

//Chú ý: Khi truyền đối số cho hàm ở dạng giá trị, 
//giá trị của đối số được sao chép vào tham số của hàm. 
//Đối số sẽ không bị thay đổi sau lời gọi hàm.


