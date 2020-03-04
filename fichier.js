let turn = false;
document.querySelectorAll(".card").forEach(function(el){
    el.addEventListener("mouseover",function(){

        if(turn === false){
            el.classList.add("flip");
            turn = true;
        }
      
    })

    el.addEventListener("mouseout",function(){

        if(turn === true)
        {
            el.classList.remove("flip");
            

            turn = false;
        }
    })
})