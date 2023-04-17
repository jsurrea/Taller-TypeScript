import { series } from "./data.js";
series.forEach(serie => {
    var _a;
    let row = document.createElement("tr");
    row.innerHTML = `
        <th scope="row">${serie.id}</th>
        <td><a href="${serie.url}" class="text-decoration-none">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    (_a = document.getElementById("table-body")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
});
let average = document.getElementById("average");
if (average) {
    average.innerText = (series.reduce((acc, serie) => acc + serie.seasons, 0) / series.length).toString();
}
