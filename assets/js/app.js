let player =
document.getElementById("player");
let block = document.getElementById("enemy");
function jump (){
    if(player.classList !="animate"){
        
        player.classList.add("animate");
    }

    setTimeout(() => {
        player.classList.remove("animate");
    }, 500);
}

let checkDead = setInterval (function(){

    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));

    if(enemyLeft < 20 && enemyLeft > 0 && playerTop >= 130){

        alert("you lose");
    }

},10);