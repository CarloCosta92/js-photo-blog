// console.log("carlo")

// link API
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

// variabile per dove mi devo legare
const cardContainer = document.getElementById('card-container');

// variabili per overlay
const overlayDiv = document.getElementById('overlayDiv');
const overlayImage = document.getElementById('immagineOverlay');

// variabili per il bottone
const bottoneChiudi = document.getElementById('bottone');


//chiamata api

axios.get(endpoint)
.then((response)=>{

    const data = response.data;

    for (let i = 0; i< 6;i++){

        const card = document.createElement('div');
      card.classList.add('col', 'col-lg-4' ,'col-md-6','col-sm-12' );  
      cardContainer.appendChild(card);

      const cardMain = document.createElement('div');
      cardMain.classList.add('card');  
      card.appendChild(cardMain); 

      const img = document.createElement('img');
      img.src = data[i].url;  
      img.classList.add('card-img-top');  
      img.alt = 'immagine';  
      cardMain.appendChild(img);

      const imgPuntina = document.createElement('img');
      imgPuntina.src = "../img/pin.svg";  
      imgPuntina.classList.add('puntina');  
      imgPuntina.alt = 'immagine';  
      cardMain.appendChild(imgPuntina);

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body'); 
      cardMain.appendChild(cardBody);  

      const cardTextDate = document.createElement('p');
      cardTextDate.classList.add('card-text');
      cardTextDate.textContent = data[i].date;
      cardBody.appendChild(cardTextDate);

      const cardText = document.createElement('h3');
      cardText.classList.add('card-text');
      cardText.textContent = data[i].title;
      cardBody.appendChild(cardText); 

    }
      // devo creare una funzione che al click mi mostri display-block alla classe overlay
      const elementImg = document.querySelectorAll(".card-img-top");
      elementImg.forEach((img) => {
        img.addEventListener("click", function() {
          overlayDiv.classList.add("overlay");   
          overlayImage.src = img.src;
        });
      });   
  });


// al click sul bottone tolgo la classe overlay

bottoneChiudi.addEventListener("click", function() {
overlayDiv.classList.remove("overlay");
});


// HTML DA CREARE
/* <div class="col col-4">
    <div class="cardMain">
        <img src="" class="card-img-top" alt="">
            <div class="card-body">
                <p class="card-text"></p>
            </div>
    </div>
</div> */




