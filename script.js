
            const navDialog = document.getElementById('nav-dialog');
            function handleMenu() {
                navDialog.classList.toggle('hidden');  // Toggle the hidden class
            }

           
   

  // Toggle FAQ answers
  
// for service.html
 // Fade-in animation for all elements with the fade-in-up class
 document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in-up');
    fadeInElements.forEach(element => {
        element.classList.add('animate__animated', 'animate__fadeInUp');
    });
});

// for faq.html
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.border-b button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');

            // First, close all other open content sections and reset icons
            buttons.forEach(otherButton => {
                const otherContent = otherButton.nextElementSibling;
                const otherIcon = otherButton.querySelector('i');
                if (otherContent !== content) {
                    otherContent.classList.add('hidden-q'); // Close the other content
                    otherIcon.classList.remove('fa-chevron-up');
                    otherIcon.classList.add('fa-chevron-down');
                }
            });

            // Toggle the clicked content's visibility
            content.classList.toggle('hidden-q');

            // Toggle the chevron icon of the clicked button
            if (content.classList.contains('hidden-q')) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
});


// for error page 
function goBack() {
    if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = '/index.html'; // Redirect to homepage if no previous page
    }
}



// for email js 
  (function() {
    emailjs.init("TC2FI0Onz9WoGVKUL")// Replace with your Email.js User ID
  })();




  document.getElementById("email-form").addEventListener("submit", function(event) {
  
    event.preventDefault(); 

    emailjs.sendForm("service_s8zb8c8", "template_elwj1md", this)
      .then(function(response) {
        alert("Email sent successfully!");
        document.getElementById("email-form").reset();
        
      }, function(error) {
        alert("Failed to send email. Please try again later.");
        console.error("Error:", error);
      });
  });



  