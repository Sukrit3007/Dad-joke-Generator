const button = document.getElementById("btn");
const jokeDisplay =document.getElementById("joke");

const apiKey = "9gWPE+tR3VV5V59wAb6qiw==VbKYW9UBrydAG4Oj";

const options ={
    method : "GET",
    headers :{
        "X-Api-Key" : apiKey,
    },
};


const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
    jokeDisplay.innerText = "updating...";
    button.disabled = true;
    button.innerText ="loading";
    const reponse = await fetch(apiURL, options)
    const data = await reponse.json()

    button.disabled = false;
    button.innerText ="Tell me a joke";

    jokeDisplay.innerText =data[0].joke

    // console.log(data[0].joke);
        
    } catch (error) {
        jokeDisplay.innerText("ERROR!! try again")
        console.log(error);
    }

    jokeDisplay.innerText = "updating...";
    button.disabled = true;
    button.innerText ="loading";
    const reponse = await fetch(apiURL, options)
    const data = await reponse.json()

    button.disabled = false;
    button.innerText ="Tell me a joke";

    jokeDisplay.innerText =data[0].joke

    // console.log(data[0].joke);
}

button.addEventListener("click", getJoke)