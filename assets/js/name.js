// variables
var male = document.querySelector("#male")
var female = document.querySelector("#female")
var nuetral = document.querySelector("#nuetral")

//fetch female name APIs
// fetch ("https://www.randomlists.com/data/names-female.json")



// //fetch Male name APIs
// fetch ('http://www.randomlists.com/data/names-male.json')

// //fetch country of origin API
// fetch ('https://gender-api.com/v2/country-of-origin ')

// will set trigger to retrieve data
function submitBtn(event) {
    event.preventDefault();

    var nameVal = searchVal.value;

    genRanName(nameVal);

}

// will convert and retreive data
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
