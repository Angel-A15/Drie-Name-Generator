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
var male = document.querySelector("#male")
var female = document.querySelector("#female")
var nuetral = document.querySelector("#nuetral")

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

function submitBtn(event) {
    event.preventDefault();

    var nameVal = searchVal.value;

    genRanName(nameVal);

}


function genRanName() {
    fetch(
        "https://www.randomlists.com/data/names-female.json"
    )
    console.log()
    .then(function(response){
        return response.json();
       
    })
    .then(function(data){
        console.log(data);

    });
            
}
