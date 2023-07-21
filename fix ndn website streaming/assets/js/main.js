document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.querySelector(".login__form");
    
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Mencegah form submit secara default
  
      // Mengambil nilai input email dan password
      var emailInput = document.querySelector(".login__input[type='email']");
      var passwordInput = document.querySelector(".login__input[type='password']");
      var email = emailInput.value;
      var password = passwordInput.value;
  
      // Verifikasi email dan password
      if (email === "ndn@smarthome.com" && password === "password") {
        // Redirect ke halaman selanjutnya setelah login berhasil
        window.location.href = "index.html";
      } else {
        // Menampilkan pesan error jika login gagal
        alert("Email or password is incorrect. Please try again.");
      }
    });
  });
  
  /*=============== SHOW HIDDEN - PASSWORD ===============*/
  const showHiddenPass = (inputPass, inputIcon) => {
    const input = document.getElementById(inputPass);
    const iconEye = document.getElementById(inputIcon);
  
    iconEye.addEventListener("click", () => {
      // Change password to text
      if (input.type === "password") {
        // Switch to text
        input.type = "text";
  
        // Add icon
        iconEye.classList.add("ri-eye-line");
        // Remove icon
        iconEye.classList.remove("ri-eye-off-line");
      } else {
        // Change to password
        input.type = "password";
  
        // Remove icon
        iconEye.classList.remove("ri-eye-line");
        // Add icon
        iconEye.classList.add("ri-eye-off-line");
      }
    });
  };
  
  showHiddenPass("input-pass", "input-icon");
  