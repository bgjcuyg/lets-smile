const btnE1 = document.getElementById("btn");
const jokeE1 = document.getElementById("joke");
const apiKey = "LH4az0ufFHidZ3MCWyL7iw==8zxAttYZgg1BVcWx"
const op = {
    method: "GET",
     headers:{ //obj
        "x-Api-Key" : apiKey,
    },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){
     
 try {
    jokeE1.innerText="Updating....."
    btnE1.disabled = true;
    btnE1.innerText = " please wait.";

   const response =  await fetch(apiUrl,op);
   const data = await response.json();
   btnE1.disabled = false;
    btnE1.innerText = "Tell me a joke ";
   jokeE1.innerText = data[0].joke;
    
 } catch (error) {
    jokeE1.innerText= "Oops something is wrong , pls check your connection."
    btnE1.disabled = false;
    btnE1.innerText = "Tell me a joke ";
 }

    
}
btnE1.addEventListener('click' , getJoke)