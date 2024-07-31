/*sign-up page*/
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple validation
    if (username && email && password) {
      alert('Sign-up successful!');
      window.location.href = 'index.html'; // Redirect to login page
    } else {
      alert('Please fill in all fields.');
      }
    });

    /*sign-in.html*/
    document.getElementById('sign-in-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
      
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
      
        // Simple validation
        if (email && password) {
          alert('Sign-in successful!');
          window.location.href = 'index.html'; // Redirect to profile page
        } else {
          alert('Please fill in all fields.');
        }
      });

      /*forgot-password.html*/
      document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
      
        const email = document.getElementById('email').value;
      
        // Simple validation
        if (email) {
          alert('A reset link has been sent to your email!');
          window.location.href = 'signin.html'; // Redirect to sign-in page
        } else {
          alert('Please enter your email.');
        }
      });
      
      
  