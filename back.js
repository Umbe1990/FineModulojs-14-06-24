document.addEventListener("DOMContentLoaded", () => {
    risultato()
    
        })




let token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4MTMyMThmYzBmMzAwMTU1ZTU4ZWYiLCJpYXQiOjE3MTgxMDE2NzcsImV4cCI6MTcxOTMxMTI3N30.bAkuY75eF5wJ6PYdbmKMDfnAEb3f3DceAtoMERg0_Wg"

//funzione per prendere la post e inserire elementi
function nasa(){
    //console.log("ciao")
     
    let name=document.getElementById("name").value
    let description=document.getElementById("description").value
    let brand=document.getElementById("brand").value
    let imageUrl=document.getElementById("imageUrl").value
    let price=document.getElementById("price").value
    
    
    
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "Authorization": token
            
            },
            body: JSON.stringify({
                name:name,
                description:description,
                brand:brand,
                imageUrl:imageUrl,
                price:price
                
            })
            
        }) .then(response=>{
           
         
                
               
                
                response.json().then((pluto)=>{
                    console.log(pluto)
                })
            
                removeModal()
                risultato()
                svuotaCampi()
            
    })}
        
   
    



//funzione modal per bottone

function modal(){
    
  let modal=document.getElementById('modal')
  modal.classList.add("d-block")
}
function removeModal(){
    let modal=document.getElementById('modal')
    let modal1=document.getElementById('modal1')
    modal1.classList.remove('d-block')
  modal.classList.add("d-none")
  let modal3=document.getElementById('modal3');
    modal3.classList.add('d-none')
    let body=document.getElementById('body')
    body.classList.remove('body2')
}

///funzione stampa prodotto su back 
function risultato(){
    let token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4MTMyMThmYzBmMzAwMTU1ZTU4ZWYiLCJpYXQiOjE3MTgxMDE2NzcsImV4cCI6MTcxOTMxMTI3N30.bAkuY75eF5wJ6PYdbmKMDfnAEb3f3DceAtoMERg0_Wg"
    let ul=document.getElementById("ularrivo")
    
         fetch("https://striveschool-api.herokuapp.com/api/product/",{
            headers: {
                "content-type":"application/json",
               "Authorization": token
         }})
         .then(response=>{
            //console.log(response)
            response.json().then((pluto)=>{
                //console.log(pluto.name)
                 ul.innerHTML=""
                pluto.forEach(element => {
                    //console.log(element._id)
                    let ul=document.getElementById("ularrivo")
                    
                    let li= `
                             
                            <tr>
                            
                            <td>${element.name}</td>
                            <td>${element.description} </td>
                            <td>${element.brand} </td>
                            <td>${element.imageUrl}</td>
                            <td>${element.price}</td>
                            <td><button onclick="modal1('${element._id}')" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                            </svg></button></td>
                            <td><button onclick="chiamaModifica('${element._id}')" type="button">modifica</button></td>
                            
                            </tr>`
                         
    
                    ul.innerHTML+=li
    
                });
    
              })  
            })
}
//funione per svuotare campi inserimento
function svuotaCampi(){
    console.log('fffffff')
   let name=document.getElementById("name")
   let description=document.getElementById("description")
   let brand=document.getElementById("brand")
   let imageUrl=document.getElementById("imageUrl")
   let price=document.getElementById("price")
   name.value=''
   description.value=''
   brand.value=''
   imageUrl.value=''
   price.value=''
}


function prendiId(id){
   
    //console.log(checkId.checked)

     let token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4MTMyMThmYzBmMzAwMTU1ZTU4ZWYiLCJpYXQiOjE3MTgxMDE2NzcsImV4cCI6MTcxOTMxMTI3N30.bAkuY75eF5wJ6PYdbmKMDfnAEb3f3DceAtoMERg0_Wg"
   
     fetch("https://striveschool-api.herokuapp.com/api/product/" + id,{
        method: "delete",
        headers: {
            "content-type":"application/json",
           "Authorization": token
     }})
     .then(response=>{
        console.log(response)
     risultato()
     removeModal()
     
})}


//crea modale1
function modal1(id){
    let body=document.getElementById('body')
    body.classList.add('body2')
    
    let modalFoter=document.getElementById('modalFoter')
    modalFoter.innerHTML=""
    modalFoter.innerHTML+= `<button onclick="prendiId('${id}')" type="button" class="btn btn-primary">cancella</button>`
    let modal1=document.getElementById('modal1')
    modal1.classList.add('d-block')
     
}
//funzione per contorllare se tutti i campi sono valorizzati
function check(){
    let name=document.getElementById("name").value
    let description=document.getElementById("description").value
    let brand=document.getElementById("brand").value
    let imageUrl=document.getElementById("imageUrl").value
    let price=document.getElementById("price").value
    if((name !='')&&(description !='')&&(brand !='')&&(imageUrl!='')&&(price!='')){
        nasa()
    }else{
        alert ('non tutti i campi sono inseriti')
    }

}
 //funzione per chiamare modifica
 function chiamaModifica(id){
    let body=document.getElementById('body')
    body.classList.add('body2')
    document.getElementById('id').value=id
   // console.log(id)
    let modal3=document.getElementById('modal3');
    modal3.classList.add('d-block')

    let name=document.getElementById("name").value
    let description=document.getElementById("description").value
    let brand=document.getElementById("brand").value
    let imageUrl=document.getElementById("imageUrl").value
    let price=document.getElementById("price").value
    fetch("https://striveschool-api.herokuapp.com/api/product/"+ id,{
        headers: {
            "content-type":"application/json",
           "Authorization": token
     }})
     .then(response=>{
        //console.log(response)
        response.json().then((pluto)=>{
            console.log(pluto.name)
            document.getElementById("name3").value=pluto.name;
            document.getElementById("description3").value=pluto.description;
            document.getElementById("brand3").value=pluto.brand;
            document.getElementById("imageUrl3").value=pluto.imageUrl;
            document.getElementById("price3").value=pluto.price;
            
           
            })
     })

}
function modifica(){
    let idImportato=document.getElementById('id').value
    //console.log(idImportato)
    let nameModificato=document.getElementById("name3").value
    let descriptionModificato=document.getElementById("description3").value
    let brandModificato=document.getElementById("brand3").value
    let imageUrlModificato=document.getElementById("imageUrl3").value
    let priceModificato=document.getElementById("price3").value
    let token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4MTMyMThmYzBmMzAwMTU1ZTU4ZWYiLCJpYXQiOjE3MTgxMDE2NzcsImV4cCI6MTcxOTMxMTI3N30.bAkuY75eF5wJ6PYdbmKMDfnAEb3f3DceAtoMERg0_Wg"
    
    fetch("https://striveschool-api.herokuapp.com/api/product/"+ idImportato, {
        method: "PUT",
        headers: {
            "content-type":"application/json",
            "Authorization": token
        
        },
        body: JSON.stringify({
            name:nameModificato,
            description:descriptionModificato,
            brand:brandModificato,
            imageUrl:imageUrlModificato,
            price:priceModificato
            
        })
        
    }) .then(response=>{
            //console.log(response)
            response.json().then((pluto)=>{
                console.log(pluto)
                
            })
            risultato()
            removeModal()
})

}
    
    
    
    
    
 

