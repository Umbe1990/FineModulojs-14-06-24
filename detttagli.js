document.addEventListener("DOMContentLoaded", async () => {
    console.log("prova")
})





const para= new URLSearchParams(location.search)
//console.log(para)
const id= para.get("id")
//console.log(id)
let token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4MTMyMThmYzBmMzAwMTU1ZTU4ZWYiLCJpYXQiOjE3MTgxMDE2NzcsImV4cCI6MTcxOTMxMTI3N30.bAkuY75eF5wJ6PYdbmKMDfnAEb3f3DceAtoMERg0_Wg"
   
    
fetch("https://striveschool-api.herokuapp.com/api/product/" +id,{
            headers: {
                "content-type":"application/json",
               "Authorization": token
         }}).then((response) =>{
            //console.log(response)
            response.json().then(pluto =>{
                console.log(pluto)
                let img="https://m.media-amazon.com/images/I/61eEYLATF9L._AC_UF894,1000_QL80_.jpg"
                let container=document.querySelector(".cards")
                let contenuto=`
                   
                <div class="card" style="width: 30rem;">
                                    <img src="${pluto.imageUrl}" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <div>
                                            <h5 class="card-title">${pluto.name}</h5>
                                            <h5 class="card-title">${pluto.price} Euro</h5>
                                           
                                        </div>
                                        <div class=divButton">  
                                           <button type="button" class="btn btn-warning">Acquista</button>
                                       
                                    </div>
                                </div>
                            </div>
                    `
                container.innerHTML+=contenuto
            })
         })