//General Array Function
function MakeArray(n) {
    this.length = n;
    for (var i = 1; i <= n; i++) {
        this[i] = 0;
    }
    }
   
//Initialize Days of Week Array
days = new MakeArray(7);
days[0] = "Sunday"
days[1] = "Monday"
days[2] = "Tuesday"
days[3] = "Wednesday"
days[4] = "Thursday"
days[5] = "Friday"
days[6] = "Saturday"

//Initialize male Akan names Array
name[0] = "Kwasi"
name[1] = "Kwadwo"
name[2] = "Kwabena"
name[3] = "Kwaku"
name[4] = "Yaw"
name[5] = "kofi"
name[6] = "Kwame"

//Initialize female Akan names Array
name[0] = "Akosua"
name[1] = "Adwoa"
name[2] = "Abenaa"
name[3] = "Akua"
name[4] = "Yaa"
name[5] = "Afua"
name[6] = "Ama"

//Initialize Months Array
months = new MakeArray(12);
months[0] = "January"
months[1] = "February"
months[2] = "March"
months[3] = "April"
months[4] = "May"
months[5] = "June"
months[6] = "July"
months[7] = "August"
months[8] = "September"
months[9] = "October"
months[10] = "November"
months[11] = "December"

//Day of Week Function
function compute(form) {
    var val1 = parseInt(form.day.value, 10)
    if ((val1 < 0) || (val1 > 31)) {
        alert("Please enter valid day")
    }
    var val2 = parseInt(form.month.value, 10)
    if ((val2 < 0) || (val2 > 12)) {
        alert("Please enter valid month")
    }
    var val2x = parseInt(form.month.value, 10)
    var val3 = parseInt(form.year.value, 10)
    if (val3 < 1900) {
        alert("Are you that old!")
    }
    if (val2 == 1) {
        val2x = 13;
        val3 = val3 - 1
    }
    if (val2 == 2) {
        val2x = 14;
        val3 = val3 - 1
    }
    var val4 = parseInt(((val2x + 1) * 3) / 5, 10)
    var val5 = parseInt(val3 / 4, 10)
    var val6 = parseInt(val3 / 100, 10)
    var val7 = parseInt(val3 / 400, 10)
    var val8 = val1 + (val2x * 2) + val4 + val3 + val5 - val6 + val7 + 2
    var val9 = parseInt(val8 / 7, 10)
    var val0 = val8 - (val9 * 7)
    form.result1.value = months[val2] + " " + form.day.value + ", " + form.year.value
    form.result2.value = days[val0]
}