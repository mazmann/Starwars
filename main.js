// async function fetchPlanets() { 
//     let results = await fetch("https://swapi.dev/api/starships/?page=1");
//     const data = await results.json();
//       console.log(data);
//     let count = data.count;
//     let next = data.next;
//     let previous = data.previous;
//       console.log(count);
//       console.log(next);
//       console.log(previous);
  
//       console.log(data.results[0]);
//     let name = data.results[0].name;

    
//     let planets = data.results;
//     planets.forEach(item => {
//       console.log(item.name);
//       console.log(item.crew);
//       console.log(item.manufacturer);
//       console.log(item.cargo_capacity);
//       console.log(item.hyperdrive_rating);
//     });  
//   } 
//   fetchPlanets();

  