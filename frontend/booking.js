const cartContainer = document.querySelector('#cart-container')


fetch('http://localhost:3000/bookings')
.then(response=>response.json())
.then(data=>{
    console.log(data)


    let affiche = false;
    if(data.result===true && data.data[0]){
        affiche=true;
    }

    const trajetsHTML = data.data.map((item) => `
    <div class="un-trajet">
        <div>${item.trip.departure} > ${item.trip.arrival}</div>
        <div>${item.trip.date}</div>
        <div>${item.trip.price} €</div>
        <div>Departure in 5 hours</div>
    </div>
    `).join("");

    if(affiche){
        cartContainer.innerHTML =
        `
         <div id="bookingList">
            <p>My booking</p>
            ${trajetsHTML}
            <hr id="hrBookings">
            <p>Enjoy your travel with Tickethack!</p>
        </div>        
        `
    }else{
        cartContainer.innerHTML = 
        `
        <div id="p-container">
            <p id="phrase1">No booking yet.</p>
            <p id="phrase2">Why not plan a trip ?</p>
        </div>
        `
    }



})