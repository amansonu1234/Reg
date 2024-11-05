
 // Function to load user data from localStorage
function loadUser () {
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    console.log("All User Data:", userData);
}

// Handle OTP form submission
document.getElementById('otpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the OTP entered by the user
    const enteredOTP = document.getElementById('otp').value;

    // Retrieve the stored OTP and email from localStorage
    const storedOTP = localStorage.getItem('otp');
    const storedEmail = localStorage.getItem('otpEmail');

    // Check if the entered OTP matches the stored OTP
    if (enteredOTP === storedOTP) {
        document.getElementById('message').innerText = "OTP Verified Successfully!";
        document.getElementById('message').style.color = "green";

        // Optionally, you can clear the stored OTP and email after verification
        localStorage.removeItem('otp');
        localStorage.removeItem('otpEmail');
    } else {
        document.getElementById('message').innerText = "Invalid OTP. Please try again.";
        document.getElementById('message').style.color = "red";
    }
});
    setTimeout(function() {
        window.location.href = 'a.html';
    }, 10000);

// Load user data when the page is loaded
window.onload = loadUser ;