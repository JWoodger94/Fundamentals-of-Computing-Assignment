// Recent Fights API
function fetchJSONData() {
            fetch('fights.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();  
                })
                .then(data => console.log(data))  
                .catch(error => console.error('Failed to fetch data:', error)); 
        }
        fetchJSONData(); 

// Newsletter form 
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('newsletterform');

  form.addEventListener('submit', function(event) {

    if (!form.checkValidity()) {
      event.preventDefault();   
      event.stopPropagation();  
      form.classList.add('was-validated'); 
      return;                   
    }

    event.preventDefault();     
    form.classList.add('was-validated');

    const modalElement = document.getElementById('submitModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    modalElement.addEventListener('hidden.bs.modal', () => {
      form.reset();
      form.classList.remove('was-validated');
    });
  });
});