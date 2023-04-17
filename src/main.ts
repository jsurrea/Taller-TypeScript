import { series } from "./data.js"

series.forEach(serie => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <th scope="row">${serie.id}</th>
        <td><a href="#" class="text-decoration-none">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `

    row.onclick = () => {
        let card = document.getElementById("card-detail")
        if(card === null) return;
        card.classList.remove("d-none")
        card.innerHTML = `
        <div class="card">
            <img src="${serie.image}" class="card-img-top" alt="Imagen for ${serie.name}">
            <h2 class="card-header bg-primary text-white">${serie.name}</h2>
            <div class="card-body">
                <p class="card-text">${serie.description}</p>
                <div class="text-center">
                    <a class="text-decoration-none" href="${serie.url}">${serie.url}</a>
                </div>
            </div>
        </div>`
    }

    document.getElementById("table-body")?.appendChild(row);
});

let average = document.getElementById("average")
if(average) {
    average.innerText = (series.reduce((acc, serie) => acc + serie.seasons, 0) / series.length).toString()
}
