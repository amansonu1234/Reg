// Function to load user data from localStorage
function loadUser () {
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    console.log("All User Data:", userData);
}

// Handle form submission
document.getElementById('userInputForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Create a user object
    const user = { username, email };

    // Load existing user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Check for duplicates
    const isDuplicate = userData.some(existingUser  => 
        existingUser .username === username && existingUser .email === email
    );

    if (isDuplicate) {
        document.getElementById('message').innerText = "Duplicate entry! This username and email combination already exists.";
        return; // Exit the function if duplicate
    }

    // Add new user object to the array
    userData.push(user);

    // Save updated user data back to localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Generate a random OTP
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
       alert(`OTP for ${email}:'OTP'${otp}`);

    localStorage.setItem('otp', otp); // Store OTP in localStorage
    localStorage.setItem('otpEmail', email); // Store the email for verification

    // Log all user input data to the console
    console.log("All User Data:", userData);
    console.log(`OTP for ${email}:${otp}`); // Log the OTP for debugging

    // Display a success message on the page
    document.getElementById('message').innerText = "Successfully registered! Please check OTP.";

    // Redirect to OTP verification page after 10 seconds
    setTimeout(function() {
        window.location.href = 'verifyOTP.html';
    }, 10000);

    // Clear the input fields
    document.getElementById('userInputForm').reset();
});



// Load user data when the page is loaded
window.onload = loadUser ;