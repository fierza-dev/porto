document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const validUsername = "admin";
    const validPassword = "123456";
  
    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;
  
    if (inputUsername === validUsername && inputPassword === validPassword) {
        console.log("FLAG{CSIRT_2024UNAIR_CONSOLE_JAVASCRIPT}")
    } else {
      document.getElementById("errorMessage").textContent =
        "Username atau Password salah!";
    }
});