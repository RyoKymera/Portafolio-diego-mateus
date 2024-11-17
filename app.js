const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_5lp0wql';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Mensaje Enviado';
      alert('Mensaje Enviado');
    }, (err) => {
      btn.value = 'Mensaje Enviado';
      alert(JSON.stringify(err));
    });
});


// Selecciona el formulario por su ID
const form = document.getElementById("form");

// Escucha el evento de envío del formulario
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío por defecto
    form.reset(); // Resetea los campos del formulario
});
