// Simple function
function mul(a,b)
{
   a>b ? result=["First value: " ,a] : result=["Second value: " ,b];
   return result;
}

var a=5, b=4;

console.log(mul(a,b));

console.log("Another Value: "+mul(7,9));

// Anonamous Function
var anom = function(num1,num2){

    var c=num1+num2;
    console.log("result: "+c);
}

anom(3,3);

 // Constant variable:

 const myConstant = 5;
 console.log(myConstant);
 // connot change the value
//myConstant = 6;

// let variable

function local(){

    var a = 2;
    console.log(a);

    if(a){
        let a="This different..";
    console.log("Nested variable: "+ a);

    }
    

}

local();

// creating Object 

var obj = new Object();

obj.title = "JavaScript";
obj.instructor = "Adnan Irfan";
obj.designation = "Senior Developer";

console.log(obj);

// creating object in a diff way

var course ={
    name: "sohaib",
    fullname: "sohaib farooqui",
    designation: "intern",
    level: 1,
    updatelevel: function(){
        return ++course.level;
    }

}
//console.log(course);
//console.log(course.name);
console.log(course.level);
course.updatelevel();
console.log(course);

// constructor:

function Subject(courseId, courseName, courseFaculty, courseLevel){

    this.courseId = courseId;
    this.courseName = courseName;
    this.courseFaculty = courseFaculty;
    this.courseLevel = courseLevel;
}

var subject01 = new Subject(1, "Java Script" , "Adnan Bhai" , "Hard");
console.log(subject01);

var subject02 = new Subject(2, "C#", "sohaib" , "normal");
console.log(subject02);


// function inside the dunction relize the variable of inside the funtion:

function math(){

    var a= 5;
    var b= 4;

    function mul(){
        var result = a*b;
        return result;
    }
    return mul();
}

//console.log("sum is: "+math());

var theresult = math();
console.log("The Result: "+ theresult);

// Again practice

function pix(pixcles)
{
    var basevale = 16;
     
    function cal(){
        return pixcles/basevale;
    }

    return cal();
}

var smallpix = pix(12);

console.log("Small pixles: "+smallpix);









