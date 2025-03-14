// console.log("carlo")

// link API
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

// variabile per dove mi devo legare
const cardContainer = document.getElementById('card-container');

// HTML DA CREARE
/* <div class="col col-4">
    <div class="cardMain">
        <img src="" class="card-img-top" alt="">
            <div class="card-body">
                <p class="card-text"></p>
            </div>
    </div>
</div> */

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

      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = data[i].title;
      cardBody.appendChild(cardText); 

    }
  });


