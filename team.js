document.addEventListener("DOMContentLoaded", () => {
  fetch("team.json")
    .then((response) => response.json())
    .then((teamData) => {
      const teamContainer = document.querySelector(".team-container");

      teamData.forEach((teamMember) => {
        const teamMemberElement = document.createElement("div");
        teamMemberElement.classList.add("team-member");

        teamMemberElement.innerHTML = `
                    <div class="team-image-container">
                    <img src="${teamMember.image}" alt="${teamMember.name}" />
                    </div>
                    <h3>${teamMember.name}</h3>
                    <p>${teamMember.position}</p>
                `;

        teamContainer.appendChild(teamMemberElement);
      });
    })
    .catch((error) => console.error("Error fetching the team data:", error));
});
