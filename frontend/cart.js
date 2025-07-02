const cartContainer = document.querySelector('#cart-container')
fetch('http://localhost:3000/carts')
.then(response =>response.json())
.then(data=>{

    const trajetsHTML = data.data.map((item) => {
    const hour = moment(item.trip.date).format('HH:mm')
        
    return `
    <div class="un-trajet">
        <div>${item.trip.departure} > ${item.trip.arrival}</div>
        <div>${hour}</div>
        <div>${item.trip.price} €</div>
        <input class="btn-delete-cart" type="button" value="X" data-index="${item.trip._id}">
    </div>
    `}).join("");


array = [];
for (let i = 0; i < data.data.length; i++) {
    array.push(data.data[i].trip.price)
}
const montantTotal = data.data.reduce((t, i) => t + Number(i.trip.price), 0);


    let affiche = false;
    if(data.result===true && data.data[0]){
        affiche=true;
    }


    if(affiche){
        cartContainer.innerHTML = 
        `
        <div id="pannier">
            <p id="pcart">My cart</p>
            <div id="trajet-container">
            ${trajetsHTML}
            </div>
            <div id="validationPannier">
                <div id="montant">Total: <span id="montantTotal"></span>${montantTotal} €</div>
                <input id="purchase" type="button" value="Purchase">
            </div>
        </div>
        `
    }else{
        cartContainer.innerHTML = 
        `
        <div id="p-container">
            <p class="p1">No tickets in your cart.</p>
            <p class="p1">Why not plan a trip ?</p>
        </div>
        `
    }

    const dataPurchase = [];
    for (let i = 0; i < data.data.length; i++) {
        dataPurchase.push(data.data[i].trip._id)
    }
    document.querySelector('#purchase').addEventListener('click', function(){
        fetch('http://localhost:3000/bookings',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataPurchase }),
        }).then(response=>response.json())
        .then(data =>{

            if(data.result === true){
                fetch('http://localhost:3000/carts', {
                    method:'DELETE'
                }).then(response=>response.json())
                .then(data=>{
                    if(data.result ===true){
                        window.location.href = "./booking.html";
                    }
                })
            }
        })
    })


});


