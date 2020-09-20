let button= document.querySelectorAll("button");


document.addEventListener("keypress", function(event) {
    let key=event.key.toLocaleUpperCase();
    document.getElementById(key).play();
    document.getElementById("display").innerHTML=key;
});

for(let i=0; i<= button.length;i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function(){
        document.querySelectorAll("audio")[i].play();
        document.getElementById("display").innerHTML=this.innerText;
    })
}

