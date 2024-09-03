let person = {
    fistname: "shanzay",
    lastname: "eman"
}
document.getElementById("demo").innerHTML = 
"Fullname is :" + " " + person.fistname + " " + person.lastname;

const bhn = new Object();
bhn.fistname = "Atif";
bhn.lastname = "Aslam";
bhn.age = "22";
document.getElementById("demo2").innerHTML = 
"My name is " + bhn.lastname + "or " + bhn.fistname + " " + " and my age is " + bhn.age;

let broder = new Object();
broder.name="Habib bhae";
broder.age="32";
broder.character="Men";

document.getElementById("demo3").innerHTML=
"I love my broder " + broder.name + " loves me tooo but you know he is : The " + broder.character;

function myTadow(a){
    return "The value of a is:" + " " + a;
}
let s=myTadow(15);
document.getElementById("demo4").innerHTML=s;