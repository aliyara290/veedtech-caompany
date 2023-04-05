// this for nav-sticky 

document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// this is for icon bar 

let changeIcon = function(icon) {
    icon.classList.toggle('fa-times')
}

 // this is for contact 

  const form = document.querySelector('form');
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting
        // Check if all required fields are filled in
        if (checkForm()) {
        document.getElementById("con-message").style.opacity = 1;
           // Clear the form fields
          clearForm();
        }
      });
      
      function checkForm() {
        const firstName = document.querySelector('#firstname').value;
        const lastName = document.querySelector('#lastname').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const message = document.querySelector('#message').value;
        
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
          // At least one required field is empty
          alert('Please fill in all required fields!');
          return false;
        }
        
        // All required fields are filled in
        return true;
      }
       function clearForm() {
        document.querySelector('#firstname').value = '';
        document.querySelector('#lastname').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#phone').value = '';
        document.querySelector('#message').value = '';
      }