var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var females = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

event.preventDefault();
var day = document.getElementById('day');
var year = document.getElementById('year');
var month = document.getElementById('month');
var gender = document.getElementById('gender').value;
dates = new Date(year);
var days = dates.getDay();

// Invalid Day
if ((day <= 0) || (day > 31)) {
    alert("Day is out of range!");
}

//Invalid Month 
if ((month <= 0) || (month > 12)) {
    alert("Month is out of range!");
}

// Invalid Year
if (year < 1900) {
    alert("You're not really that old!");
}

if (gender === 'male') {
    return maleArray(7);
} else {
    return femaleArray(7);
};

if (gender === 'male') {
    alert(days[dates.getDay()] + ',' + " your name is: " + males[dates.getDay()]);
    document.getElementById('your-name').innerHTML = ("Your Name Is: " + males[dates.getDay()] + " . ");
    if (gender === 'male') {
        alert(days[dates.getDay()] + ',' + " your name is: " + males[dates.getDay()]);
        document.getElementById('your-name').innerHTML = ("Your Name Is: " + males[dates.getDay()] + " . ");
    } else if (gender === 'female') {
        alert(days[dates.getDay()] + ',' + " your name is: " + females[dates.getDay()]);
        document.getElementById('your-name').innerHTML = ("Your Name Is: " + females[dates.getDay()] + " . ");

    } else { }
}
