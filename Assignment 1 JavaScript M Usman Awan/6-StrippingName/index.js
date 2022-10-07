var person_name = '\tEric\n'
var nameRef = document.getElementById("name");
nameRef.innerText = `'${person_name}'`
var nameFormattedRef = document.getElementById("name_formatted");
nameFormattedRef.innerText = `'${person_name.trim()}'`

