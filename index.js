const ramens = [
   { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
   { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
   { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];

function displayRamens(){
    const menu = document.getElementById("ramen-menu");

    ramens.forEach( ramen => {
        const images = document.createElement("img");

        images.src = ramen.image;
        images.alt = ramen.name;
        images.addEventListener("click", () => handleClick(ramen));

        menu.appendChild(images);
    })
}


function handleClick(ramen){
    const details = document.getElementById("ramen-detail");

    details.innerHTML = `
    <h2> ${ramen.name}</h2>
    <h3> ${ramen.restaurant}</h2>
    <img src = "${ramen.image}" alt = "${ramen.name}" >
    <p> Ratings: ${ramen.rating || "Not Rated"}</p>
    <p> Comment section: ${ramen.comment || "No comments available!"}</p>
    `;
}

function addSubmitListener(){
    document.getElementById("new-ramen").addEventListener("submit", (events) => {
        events.preventDefault()

        
    });
}