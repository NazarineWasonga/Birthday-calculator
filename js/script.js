<script >
            var century, year, month, dayOfMonth, dayOfWeek, day;
                //Get input
                function getInput() {
                    century = parseInt(document.getElementById("century").value);
                    year = parseInt(document.getElementById("year").value);
                    month = parseInt(document.getElementById("month").value);
                    dayOfMonth = parseInt(document.getElementById("monthday").value);


                    if ((century == "") && (century <= 0) && (century >= 30)) {
                        if (century == "") {
                            alert("Input the correct gender");
                        } else if ((year == "") && (year <= 0) && (year > 5000)) {
                            return false;
                        } else if (year == "") {
                            alert("Input the correct year");
                        } else if ((month == "") && (month > 12) && (month <= 0)) {
                            return false;
                        } else if (month == "") {
                            alert("Input the correct month");
                        } else if ((dayOfMonth == "") && (dayOfMonth > 31) && (dayOfMonth <= 0)) {
                            return false;
                        } else if (dayOfMonth == "") {
                            alert("input the correct date");
                            return false;
                        }
                    }
                    //Calculate func
                    function calculateDay() {
                        dayOfWeek = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7) - 1;
                        console.log(dayOfWeek); //Test the calculateDay function
                        return (Math.floor(dayOfWeek));
                        if (dayOfWeek < 0) {
                            dayOfWeek = dayOfWeek * -1;
                        }
                        else if (dayOfWeek > 0) {
                            return dayOfWeek;
                        }
                    }
                }

        </script>