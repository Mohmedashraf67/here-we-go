
let apiRespose =[];
let navLinks = document.querySelectorAll("nav li ") ;
let currentCard =[]
let gameId=0;

$("body").animate({ width: "100%"} , 500)
$("body").animate({ height: "100vh"} , 500 , function (){
    $("#allGamesPlace").slideDown({ width: "100%"} , 500)
})



getData("mmorpg");

for(let i =0;i<navLinks.length;i++){
navLinks[i].addEventListener('click' , function(eventInfo){
let goingToCategory= eventInfo.target.getAttribute("get-attr");
getData(goingToCategory)

})
}

async function getData(category){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '28a2355122mshbcfc376da496f55p188e02jsne82c707e5495',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
apiRespose = await api.json();

console.log(apiRespose);

showingData ();

}


function showingData (){
    let cartona =``;

 for(var i=0 ; i<apiRespose.length ;i++)
    { 
   
       cartona+=`
       <div onclick="eachGameData(${apiRespose[i].id})"  class="row ">
       <div class="col-md-3  h-25 p-3">
      <div class="card cards-bacground  " style="width: 16rem;">
      
             <img src="${apiRespose[i].thumbnail}" class="card-img-top w-100 opacity-50 card-Img-When-Hover" alt="...">
      
     
       <div class="card-body">
   
           <div class="btn-and-title d-flex justify-content-between">
                 <h5 class="card-title">${apiRespose[i].title}</h5>
                 <a href="#" class="btn btn-primary btn-for-platforms texto opacity-50 card-Img-When-Hover">free</a>
           </div>
       
         <p class="card-text">${apiRespose[i].short_description}</p>
         <hr class="hr ">
         <div class="platform d-flex justify-content-between">
           <h6 class=" ">${apiRespose[i].genre}<h6>
           <h6 class=" ">${apiRespose[i].platform}<h6>
        </div>
   
       </div>
     </div>
   
       </div>
   </div>
   `;
   
    }

 document.getElementById("placeForCards").innerHTML=(cartona);
 

}

function eachGameData(param)
{
 document.getElementById("allGamesPlace").classList.add("d-none");
 document.getElementById("navoo").classList.add("d-none");

 returnDataForOneGame(param);

 document.getElementById("gameDetails").classList.remove("d-none");
    
}
  


async function returnDataForOneGame(gameId) {
  const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '28a2355122mshbcfc376da496f55p188e02jsne82c707e5495',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
 };

let soloGameData = await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
let finalSoloGameData = await soloGameData.json();
console.log("hh",finalSoloGameData);
displayForCurrentGame (finalSoloGameData);


} 
function displayForCurrentGame (opjecto){
let cartoana=``;
   cartoana+=`   <div class="container">
   <div class="d-flex mt-2 mb-3 justify-content-between">
   <h1>Details Game</h1>
   <i onclick="closeGameData ()" class="fa-solid fa-xmark icon-curser"></i>
</div>
           
   <div class="row">
           <div class="col-md-4">
           <div class="col-md-12">
          <img class="h-100 w-75 m-auto" src="${opjecto.thumbnail}" alt="">
          </div>

   
   </div>
   <div class="col-md-7">
<h1>Title:${opjecto.title}</h1>
<h5>category:${opjecto.genre}</h5>
<h5>platform:${opjecto.platform}</h5>
<h5>status:${opjecto.status}</h5>
<p>${opjecto.description}</p>
<button class="btn btn-outline-warning btn-lg mt-3"> <a class="text-decoration-none text-white" target="_blank" href="${opjecto.game_url}">show game</a> </button>
</div>
   </div>

</div>`
document.getElementById("gameDetails").innerHTML=(cartoana)
}

function closeGameData (){

 document.getElementById("allGamesPlace").classList.replace("d-none" , "d-block");
 document.getElementById("navoo").classList.replace("d-none" , "d-block");
 document.getElementById("gameDetails").classList.add("d-none");

}






// function returnDataForOneGame(){
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '28a2355122mshbcfc376da496f55p188e02jsne82c707e5495',
//             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };
    





//     fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=452', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }





// async function getDataForGame(){
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '28a2355122mshbcfc376da496f55p188e02jsne82c707e5495',
//             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };
// const api = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=452', options)
// const apiRespose = await api.json();
// console.log(apiRespose);

// }



