var person_name = 'Eric roberts'
var lowercaseNameRef = document.getElementById("lowercase_name");
var uppercaseNameRef = document.getElementById("uppercase_name");
var titlecaseNameRef = document.getElementById("titlecase_name");

person_name = person_name.toLowerCase();
lowercaseNameRef.innerText = person_name;
person_name = person_name.toUpperCase();
uppercaseNameRef.innerText = person_name;


// let updatedName = person_name.toLowerCase().split(" ");

let titleCaseName = person_name.toLowerCase().split(' ');
for (var i = 0; i < titleCaseName.length; i++) {
  titleCaseName[i] = titleCaseName[i].charAt(0).toUpperCase() + titleCaseName[i].slice(1); 
}

titlecaseNameRef.innerText = String(titleCaseName.join(' '));
