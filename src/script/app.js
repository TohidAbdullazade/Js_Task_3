// ===> Variables <===
let name = prompt("Enter your Name please");
let surname = prompt("Enter your Surname please");
let age = +prompt("Enter your age please");

// ===> Control for Name and Surname <===
if (!name || !surname || !isNaN(name) || !isNaN(surname)) {
    alert("Type an valid name and surname please not numbers and spaces")
}

// ===> Control for age <===
else if (isNaN(age) || age == "" || age == null) {
    alert("Please enter valid number not characters and not spaces")
}
else if (age > 18) {
    alert("qeyidyyat üçün yaşınız çoxdur yaş tələbi 18-dir")
}
else if (age < 18) {
    alert("qeydiyyat keçmək üçün yaşınız azdır yaş tələbi 18-dir")
}
else {
    alert("qeydiyyat uğurla tamamlandı")
};

