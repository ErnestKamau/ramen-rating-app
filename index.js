const ramens = [
   { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
   { id: 2, name: "Vegetarian Miso Ramen", restaurant: "Menya", image: "Vegetarian Miso Ramen.jpeg", rating: 5, comment: "Healthy!" },
   { id: 3, name: "naruto Ramen", restaurant: "Menya", image: "naruto.jpg", rating: 4, comment: "Very flavorful!" },
   { id: 4, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "Tonkotsu.jpeg" }
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
    const form = document.getElementById("new-ramen");

    form.addEventListener("submit", (events) => {
        events.preventDefault()

        const name = events.target.name.value;
        const restaurant = events.target.restaurant.value;
        const image = events.target.image.value;
        const rating = events.target.rating.value;
        const comment = events.target.comment.value;

        const newRamenEntry = {
            id: ramens.length + 1,
            name,
            restaurant,
            image,
            rating: rating ? parseInt(rating) : 0,
            comment,
        }

        ramens.push(newRamenEntry);

        displayRamens();

        events.target.reset()

    });
}

function main (){
    displayRamens();
    addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);