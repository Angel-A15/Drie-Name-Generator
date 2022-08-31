
var submitBtn = document.getElementById("sbmt");

function checkGenderValue() {
    var selectedValue = ""
    var radioButtons = document.getElementsByName("answer");

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedValue = radioButtons[i].value;
        }
    }

    console.log(selectedValue)
    if(selectedValue == "male") {
        generateRandomMaleNames()
    } else if (selectedValue = "female") {
        generateRandomFemaleNames()
    } else {
        generateRandomName()
    }
}

function generateRandomMaleNames() {
    fetch('https://randomuser.me/api/?gender=male')
        .then((Response) => Response.json())
        .then((data) => {
            var fullName = data.results[0].name.first + " " + data.results[0].name.last
            console.log(fullName)
            renderRandomName(fullName)
        });
}

function generateRandomName() {
    fetch('https://randomuser.me/api/')
        .then((Response) => Response.json())
        .then((data) => {
            var fullName = data.results[0].name.first + " " + data.results[0].name.last
            console.log(fullName)
            renderRandomName(fullName)
        });
}

function generateRandomFemaleNames() {
    //fetch female name APIs
    fetch("https://randomuser.me/api/?gender=female")
        .then((Response) => Response.json())
        .then((data) =>{
            var femName = data.results[0].name.first + " " + data.results[0].name.last
            console.log(femName)
            renderRandomName(femName)
        });
}

function renderRandomName(fullName) {
    var nameGeneratedH2 = document.getElementById("name-generated");
    nameGeneratedH2.textContent = fullName
}




submitBtn.addEventListener("click", checkGenderValue)