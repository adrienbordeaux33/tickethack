document.querySelector("#btn-search").addEventListener("click", function () {
  const departure = document.querySelector("#depart");
  const arrival = document.querySelector("#arrive");
  const date = document.querySelector("#date");
  const voyag = {
    departure: departure.value,
    arrival: arrival.value,
    date: date.value,
  };
  // console.log("veleur de la const voyag qui est depart arrivee date" , voyag);

  fetch("http://localhost:3000/trips", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(voyag),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("retour de data apres le fetch post :", data);
      document.querySelector("#content-right").innerHTML = "";
      for (const element of data) {
        if (element.departure.toLowerCase === voyag.departure.toLowerCase) {
          document.createElement("div").innerHTML = `
      //       <p>${data.departure} a ${data.arrival}</p>
      //       <p>Date: ${data.date}</p>
      //       <p>Price: ${data.price}€</p>
      //       <button class="book-btn">Book</button>`;
        } else {
          document.createElement("div").innerHTML = `
                <img class="logoxxx" src="./assets/notfound.png" />
                <hr />
                <p id="presentation3">It's time to book your future trip</p>`;
        }
      }
    });
});
