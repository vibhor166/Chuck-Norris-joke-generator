document.getElementById('second').addEventListener('click',getJokes);
function getJokes(e){
    const number = document.getElementById('first').value;
    console.log(number);
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload = function(){
        if(this.status===200){
            const response = JSON.parse(this.responseText);
            
               let output = '';
               if(response.type==='success'){
                response.value.forEach(function(joke){
                    output+= `<li>${joke.joke}</li>`;
                })
               }
               else{
                   output+= '<li>Something went wrong</li>'
               }



            console.log(response);
            document.querySelector('.asla').innerHTML = output;
        }
    }


    xhr.send();
    e.preventDefault();
}