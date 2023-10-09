async function asyncFetch() {
    const res = await fetch(`https://swapi.dev/api/starships/`);
    const data = await res.json();
    displayResults(data);
}

function displayResults(data) {
    const starshipsToShow = data.results.slice(0, 10);
    let output = "";
    data.results.forEach((item, index) => {
        output += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <div class="card">
                    <h2>${item.name}</h2>
                    <p>Crew: ${item.crew}</p>
                    <p>Model: ${item.model}</p>
                    <p>Class: ${item.starship_class}</p>
                    <p>Manufacturer: ${item.manufacturer}</p>
                    <!-- Add more details as needed -->
                </div>
            </div>
        `;
    });

    const containerDiv = document.getElementById('carousel-inner');
    containerDiv.innerHTML = output;
}

asyncFetch();
