const container=document.getElementById("container");
const jokes=document.getElementById("joke");
const button=document.getElementById("btn");

function newJoke() {
  const jokeElement = document.getElementById("joke");

  fetch("https://icanhazdadjoke.com/", {
    headers: {"Accept": "application/json"}
  })
  .then(function(response) {
    return response.json(); 
  })
  .then(function(data) {
    jokeElement.textContent = data.joke; 
  });
} 