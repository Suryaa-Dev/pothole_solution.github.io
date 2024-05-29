document.getElementById('upload-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form input values
  const fileInput = document.getElementById('image-upload');
  const locationInput = document.getElementById('location');
  const descriptionInput = document.getElementById('description');
  const issueType = document.querySelector('input[name="issue"]:checked').value;
  const files = fileInput.files;

  // Iterate over uploaded files
  for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = function() {
          const imageUrl = reader.result;
          const roadCardsContainer = document.getElementById('road-cards');

          // Create road card elements
          const roadCard = document.createElement('div');
          roadCard.classList.add('road-card');

          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          imgElement.alt = 'Reported Road';

          const detailsContainer = document.createElement('div');
          detailsContainer.classList.add('road-card-details');

          // Populate details container
          const locationElement = document.createElement('p');
          locationElement.textContent = `Location: ${locationInput.value}`;

          const descriptionElement = document.createElement('p');
          descriptionElement.textContent = `Description: ${descriptionInput.value}`;

          const issueElement = document.createElement('p');
          issueElement.textContent = `Issue Type: ${issueType}`;

          const dateElement = document.createElement('p');
          const currentDate = new Date();
          dateElement.textContent = `Date: ${currentDate.toLocaleDateString()}`;

          detailsContainer.appendChild(locationElement);
          detailsContainer.appendChild(descriptionElement);
          detailsContainer.appendChild(issueElement);
          detailsContainer.appendChild(dateElement);

          // Append elements to road card
          roadCard.appendChild(imgElement);
          roadCard.appendChild(detailsContainer);

          // Append road card to container
          roadCardsContainer.appendChild(roadCard);
      };
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav ul');

  menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('show');
  });
});
