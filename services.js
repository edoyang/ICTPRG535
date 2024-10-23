document.addEventListener("DOMContentLoaded", () => {
  // Fetch the services data from the services.json file
  fetch("services.json")
    .then((response) => response.json())
    .then((servicesData) => {
      const leftContainer = document.querySelector(".services-left");
      const rightContainer = document.querySelector(".services-right");

      // Loop through the data and append to the correct container
      servicesData.forEach((service) => {
        const serviceElement = document.createElement("div");
        serviceElement.classList.add("service");

        serviceElement.innerHTML = `
          <h1>${("0" + service.id).slice(-2)}</h1>
          <div class="description">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
          </div>
        `;

        // Add services 1-3 to the left, and 4-6 to the right
        if (service.id >= 1 && service.id <= 3) {
          leftContainer.appendChild(serviceElement);
        } else if (service.id >= 4 && service.id <= 6) {
          rightContainer.appendChild(serviceElement);
        }
      });
    })
    .catch((error) =>
      console.error("Error fetching the services data:", error)
    );
});
