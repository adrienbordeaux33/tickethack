const cartContainer = document.querySelector('#cart-container')
fetch('http://localhost:3000/carts')
.then(response =>response.json())
.then(data=>{

    let affiche = false;
    if(data.result===true){ // ajouter && quil y ai du contenue
        affiche=true; // permet d'afficher le pannier et false affiche les phrases
        // ajouter dans trajet-container les trajet dynamiquement
    }



    if(affiche){
            
        cartContainer.innerHTML += 
        `
        <div id="pannier">
            <p id="pcart">My cart</p>
            <div id="trajet-container">
            <!-- ---------------------- a suppr de la --------------------------------------------------------------------- -->
                <div class="un-trajet">
                    <div>Paris > Lyon</div>
                    <div>20h09</div>
                    <div>103€</div>
                    <input class="btn-delete-cart" type="button" value="X">
                </div>
                <div class="un-trajet">
                    <div>Paris > Lyon</div>
                    <div>20h09</div>
                    <div>103€</div>
                    <input class="btn-delete-cart" type="button" value="X">
                </div>
            <!-- ----------------------- a la ------------------------------------------------------------------------------- -->
            </div>
            <div id="validationPannier">
                <div id="montant">Total: <span id="montantTotal"></span></div>
                <input id="purchase" type="button" value="Purchase">

            </div>
        </div>
        `

    }else{
        cartContainer.innerHTML += 
        `
        <div id="p-container">
            <p class="p1">No tickets in your cart.</p>
            <p class="p1">Why not plan a trip ?</p>
        </div>
        `
    }
    
    //console.log(data)




});


