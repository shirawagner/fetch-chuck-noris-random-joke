(function(){

    //variables

    const show = document.getElementById("display-joke");
    const btn = document.getElementById("get-joke")
    
    //Event

    btn.addEventListener('click',()=>{

        const process = fetch("https://api.chucknorris.io/jokes/random")
        .then((process)=>{
            return process.json();
        }).then((data)=>{
            show.innerText = data.value;
            console.log(data.value);
        })
        
        
    })

})();