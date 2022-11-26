// code your solution 
//const ages = [3, 10, 18, 20];

//function checkAge(age) {
 // return age > 18;
//}

//function myFunction() {
 // document.getElementById("demo").innerHTML = ages.find(checkAge);
//} 
function superbowlWin(record){
    let game =record.find((game)=>{
        if(game.result==='W'){
            return true;
        }
    })

if(game){
    return game.year
}
}