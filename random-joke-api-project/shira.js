//https://api.chucknorris.io/jokes/random



(function(){

    //variables

    const show = document.getElementById("display-joke");
    const btn = document.getElementById("get-joke")
    
    //Event

    btn.addEventListener('click',()=>{
        
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if (this.status == 200){
                show.textContent = JSON.parse(this.responseText).value;
                console.log(JSON.parse(this.responseText).value);
            }
        }
        xhr.open("GET","https://api.chucknorris.io/jokes/random",true);
        xhr.send();
    })

})();
