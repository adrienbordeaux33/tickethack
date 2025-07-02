document.querySelector("#btn-search").addEventListener("click", function () {
  const departure = document.querySelector("#depart");
  const arrival = document.querySelector("#arrive");
  const date = document.querySelector("#date");

  const voyag = {
    departure: departure.value,
    arrival: arrival.value,
    date: date.value,
  };

  fetch("http://localhost:3000/trips")
    .then((response) => response.json())
    .then((data) => {
      const array = data.data;

      const departureInput = voyag.departure.toLowerCase();
      const arrivalInput = voyag.arrival.toLowerCase();
      const dateInput = voyag.date; // format: YYYY-MM-DD

      const result = array.filter((trip) => {
        const from = trip.departure.toLowerCase();
        const to = trip.arrival.toLowerCase();
        const tripDate = new Date(trip.date).toISOString().split("T")[0];

        return (
          from === departureInput &&
          to === arrivalInput &&
          tripDate === dateInput
        );
      });

      console.log(result);

      const container = document.querySelector("#content-right");
      container.innerHTML = "";

      if (result.length > 0) {
        for (const element of result) {
          const card = document.createElement("div");
          card.innerHTML = `
            <p>${element.departure} → ${element.arrival}</p>
            <p>Date: ${new Date(element.date).toLocaleDateString()}</p>
            <p>Price: ${element.price}€</p>
            <button class="book-btn" id="${element._id}">Book</button>
          `;
          container.appendChild(card);
        }
      } else {
        const notFound = document.createElement("div");
        notFound.innerHTML = `
          <img class="logoxxx" src="./assets/notfound.png" />
          <hr />
          <p id="presentation3">It's time to book your future trip</p>
        `;
        container.appendChild(notFound);
      }
    });


document.querySelector("#content-right").addEventListener("click", function (event) {
    const tripsId = event.target.id;
      fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({tripsId}),
      })
        .then((response) => response.json())
        .then((data) => {
    })

  });


});




