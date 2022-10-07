var person_name = 'Eric'
// Name paragraph references
var lowercaseNameRef = document.getElementById("lowercase_name");
var uppercaseNameRef = document.getElementById("uppercase_name");
var titlecaseNameRef = document.getElementById("titlecase_name");

// converting to lowercase
person_name = person_name.toLowerCase();
lowercaseNameRef.innerText = person_name;
// converting to uppercase
person_name = person_name.toUpperCase();
uppercaseNameRef.innerText = person_name;

// converting to titlecase
titlecaseNameRef.innerText = person_name.charAt(0).toUpperCase() +
person_name.substr(1).toLowerCase();
