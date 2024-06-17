document.addEventListener("DOMContentLoaded", () => {
    creareard()
    
        })


let arraycarrello=[]





function creareard(){
    
    let token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4MTMyMThmYzBmMzAwMTU1ZTU4ZWYiLCJpYXQiOjE3MTgxMDE2NzcsImV4cCI6MTcxOTMxMTI3N30.bAkuY75eF5wJ6PYdbmKMDfnAEb3f3DceAtoMERg0_Wg"
    
        
    fetch("https://striveschool-api.herokuapp.com/api/product/",{
                headers: {
                    "content-type":"application/json",
                   "Authorization": token
        }})
             .then(response=>{
                //console.log(response)
                response.json().then((pluto)=>{
                    //console.log(pluto.name)
                     pluto.forEach(element =>{
                       // console.log(element.imageUrl)  
                        let cards=document.querySelector('.cards')
                        let contenitore= `
                            <div class="card" style="width: 22rem;">
                                    <img src="${element.imageUrl}" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <div>
                                            <h5 class="card-title">${element.name}</h5>
                                            <h5 class="card-title">${element.price} Euro</h5>
                                           
                                        </div>
                                        <div class=divButton">  
                                           
                                             <a href="./dettagli.html?id=${element._id}" class="btn btn-primary">Dettagli</a>
                                        <button id='aggiungiAlCarrello' onclick="'somma()',aggiungiCarrello('${element._id}'),creaCarrello('${element._id}')" type="button" class="btn btn-danger">Aggiungi</button>
                                        <button onclick="rimuoviCarrello('${element._id}') " type="button" class="btn btn-secondary">Rimuovi</button>
                                    </div>
                                </div>
                            </div>
                             `
                        cards.innerHTML+=contenitore
                    })
                        
                })
            
        })
                          
}   
// aggiunge numero al carello
function aggiungiCarrello(id){
    arraycarrello.push(id)
    console.log(arraycarrello)
document.getElementById('quantitaCarrello').innerHTML=arraycarrello.length
   
}


function rimuoviCarrello(){
    arraycarrello.splice(-1)
    document.getElementById('quantitaCarrello').innerHTML=arraycarrello.length
   
}

   //funzione al click porta nel carrello 
   
function creaCarrello(id){
    let token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4MTMyMThmYzBmMzAwMTU1ZTU4ZWYiLCJpYXQiOjE3MTgxMDE2NzcsImV4cCI6MTcxOTMxMTI3N30.bAkuY75eF5wJ6PYdbmKMDfnAEb3f3DceAtoMERg0_Wg"

    fetch("https://striveschool-api.herokuapp.com/api/product/" + id ,{
        headers: {
            "content-type":"application/json",
           "Authorization": token
}})
     .then(response=>{
        //console.log(response)
        response.json().then((pluto)=>{
            //console.log(pluto.name)
            
                console.log(pluto.imageUrl)  
                let modalbody=document.getElementById('modalbody')
                let contenitore= `
                    <div id='card' class="card" style="width: 10rem;">
                            <img src="${pluto.imageUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                                <div>
                                    <h5 data-price='${pluto.price}' class="card-title articoliPrezzo">${pluto.price} Euro</h5>
                                </div>
                                <div class=divButton">   
                                    <button onclick="svuotaSingoloCarrello('${pluto._id}')"  type="button" class="provas btn btn-danger btn-sm ">Elimina</button>                               
                            </div>
                        </div>
                    </div>
                     `
                     modalbody.innerHTML+=contenitore
            })
                
        })
    
}
//apre modal con prodotti

function apriCarrello(){
    let modal=document.getElementById('modal')
    modal.classList.add('d-block')
}

//elimina chiude prodotti e modal
function eliminaChiudiModal(){
    let modal=document.getElementById('modal')
    modal.classList.add('d-none')
    let modalbody=document.getElementById('modalbody')
    let contenitore= ''
}
//chiudere il modal con x
 function chiudiModalX(){
  let modal=document.getElementById('modal')
  modal.classList.add('d-none') 
 }
    
 //calcolo somma prezzo
 function somma(){
    let totale=0
    //console.log(totale)
    let articoli=document.querySelectorAll('.articoliPrezzo')
    
    articoli.forEach(articolo=>{
        console.log(articoli)
        const prezzo=parseFloat(articolo.getAttribute('data-price'))
        //console.log(prezzo)
        totale +=prezzo
        console.log(totale)
        document.getElementById('prova').innerText+=totale
    })
 }

 //svuota singolo Carrello

   function svuotaSingoloCarrello(id){
    
    arraycarrello.splice(id)
    console.log(arraycarrello)
 }                
