var femaleNameUrl = "https://www.randomlists.com/data/names-female.json"
var maleNameUrl =   "https://www.randomlists.com/data/names-male.json"
//function for type of names
var typeBtn = document.querySelector("#ser")
//function for gender
var controlBtn = document.querySelector("#control")
//function for country of origin
var countryOfOriginBtn = document.querySelector("#origin")
//to do-need an API for Country of Origin
var originOfName = "https://gender-api.com/v2/country-of-origin.json"
var apiKey = "d3ea58ecf9205655990f1cf8327310516bbb1a3f0c4eb64813cb698bbddafd09"
var submitBtn = document.querySelector("#fetchBtn")
var nameGen = document.querySelector("per")
var male = document.querySelector("#answer")
var female = document.querySelector("#answer")
var neutral = document.querySelector("#answer")

//fetch female name APIs
// fetch ("https://www.randomlists.com/data/names-female.json")
// .then((Response) =>Response.json())
// .then((data) =>console.log(data));

// //fetch Male name APIs
// fetch ('http://www.randomlists.com/data/names-male.json')
// .then((Response) =>Response.json())
// .then((data) =>console.log(data));
// //fetch country of origin API
// fetch ('https://gender-api.com/v2/country-of-origin ')
// .then((Response) =>Response.json())
// .then((data) =>console.log(data));

function generateRandomName() {
    console.log("generate random name")
    //dropdown button confirms Type of name

    //radio buttons confirm male, female, or neutral
    function controlBtn() {
        console.log("Control button")
        if (male=== true) {
            return (maleNameUrl);
        }
        if(female===true) {
            return (femaleNameUrl);
        }
        if (neutral=== true) {
            return {male: maleNameUrl, female: femaleNameUrl}
        }
        else {
            window.alert("Please choose a gender")
        }
            
    };
    controlBtn()

    function countryOfOriginBtn() {
        console.log("Country of Origin button")
        if (min=2, max=30){
        return originOfName
    }

        else{
        window.alert("Please choose a country")
    }
    }
    countryOfOriginBtn()

    

    function submitBtn() {
        console.log("Submit button")
        Element.addEventListner("click",submitBtn);
        return window.alert("BUTTON WAS CLICKED")

    }    
    submitBtn()
}
var myStr = ""
for (let i= 0; index < lengthInput; i++) {
    var randomchar=selected.charAt(Math.floor(Math.random()*selected.length))
    myStr = myStr + generateRandomName;
    
}
generateRandomName()
