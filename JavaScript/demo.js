
/*
var a  = 20;
var b = 10;
document.write(a+b);
document.write("<br>");
document.write(a - b);
document.write("<br>");
document.write(a * b);
document.write("<br>");
document.write(a / b);
document.write("<br>");
document.write(a % b);
document.write("<br>");

// var result = a + b;
// document.write(result);

var num1 = 10, num2 = 30;
num1  +=  5;
document.write("<br>"+num1+"<br>");
var result = (10 + 5)*20;
document.write(result);

document.write("<br><br>");

var arr = new Array(5);
arr[0] = "Ajay";
arr[1] = "Anil";
arr[2] = "Sai Kumar";
arr[3] = "Frooti Reddy";
arr[4] = "Anitha";

for(var i=0;i<arr.length;i++){
    document.write(arr[i]+" <br>");
}

*/

const container = document.getElementById('container');

var paragraph = document.createElement("p");
paragraph.textContent = "This is a Paragraph";

var h1tag = document.createElement("h1");
h1tag.textContent = "Welcome To JAVASCRIPT"
container.append(h1tag,paragraph);
container.append("Swag sing");



var user = {
    firstname : "Ajay",
    lastname  : "Vatham",
    age : 23,
    address : "Hyderabad",
    emailId : "ajayvatham31@gmail.com",

    getFullName : function(){
       return  user.firstname +"  "+ user.lastname;
    },

    fullDetails : function(){
        return "FirstName : "+user.firstname+" <br>  LastName  : "+user.lastname+" <br> Age  : "+user.age+" <br> Address :  "+user.address+" <br> Email Id :  "+user.emailId+" <br>  FullName : "+user.getFullName()+"  ";
    }
}
let x = "emailId";
let firstname = user[x];
document.write(firstname);

//adding new property to user
user.fullname = user.firstname + "  "+ user.lastname;
document.write("<br>"+user.fullname);


//iterating over user
var txt = "";
var xy;
for(xy in user){
    txt += user[xy]+ "  ";
}
document.write("<br>"+txt);

console.log(Object.keys(user));
document.write(Object.keys(user));
document.write("<br><br>");
var rest = Object.getOwnPropertyNames(user);
document.write(rest+"<br><br> Line Break<br><br>");

//Object.keys(user) will get property names 
//Object.getOwnPropertyNames(user) will get property names or keys

document.write(Object.keys(user));
var keys = Object.getOwnPropertyNames(user);
document.write("<br>"+keys+"<br><br>");
document.write(user.getFullName());

document.write("<br>Details<br><br>");
document.write("First Name : "+user.firstname + "  <br>");
document.write("Last Name : "+user.lastname + "  <br>");
document.write("Age : "+user.age + "  <br>");
document.write("Address : "+user.address + "  <br>");
document.write("Full Name : "+user.getFullName() + "  <br><br><br><br><br><br>");


document.write(user.fullDetails()+"<br><br>");

var employee = Object.create(user);
document.write(employee.firstname+"<br><br>");


//Constructor function
function creatingUser(firstname,lastname,age,gender){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
}

var user3 = new creatingUser("Tony ","Stark",23,"Male");
document.write(user3.lastname+"<br><br>");
document.write(Object.getOwnPropertyNames(user3));



