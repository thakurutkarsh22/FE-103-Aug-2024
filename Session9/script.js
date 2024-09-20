import teamsData from "./data.js";


const teamsContainerPillElement = document.getElementById('teams-container'); // Pills
const teamContentContainerElement = document.getElementById("team-content-container"); // Carousel 


// 1.  Display pills 
displayPills(teamsData)

function displayPills(teams = []) {

  teams.forEach(team => {
    const teamPillElement = document.createElement("div");
    teamPillElement.classList.add("m-2");
    teamPillElement.classList.add("card");

    teamPillElement.innerHTML = `<div id=${team.id} class="card-body">${team.name}</div>`;
    teamsContainerPillElement.append(teamPillElement);
  })
}

teamsContainerPillElement.addEventListener("click", (event) => {

  const selectedTeamID = event.target.id
  const selectedTeamsData = teamsData.find(team => team.id === selectedTeamID);

  const images = selectedTeamsData.images;

  teamContentContainerElement.innerHTML = getCarouselOuterStructure();


  const carouselItemParentElement = document.getElementById("carousel-item-parent");


  images.forEach((image, idx) => {
    const divElement = document.createElement("div");
    divElement.className = `carousel-item ${idx === 0 ? 'active' : ''}`;
    divElement.innerHTML = `
      <img src="${image}" class="d-block w-100" alt="image">
    `

    carouselItemParentElement.append(divElement);

  })



})


function getCarouselOuterStructure() {
  return `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style="width:70vw;height:50vh">
      
        <div class="carousel-inner h-100" id="carousel-item-parent">

        </div>
      
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`;
}




