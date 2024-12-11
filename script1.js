function solve() {
        var first = document.getElementById("first").value;
        var last = document.getElementById("last").value;
        var email = document.getElementById("email").value;
        var dob = document.getElementById("dob").value;
        var password = document.getElementById("password").value;
        var repassword = document.getElementById("repassword").value;
        var mobile = document.getElementById("mobile").value;
        var gender = document.getElementById("gender").value;
    
        // Regular expression for email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // Regular expression for mobile number validation
        var mobileRegex = /^\d{10}$/;
    
        // Checking if all fields are filled
        if (first == "" || last == "" || email == "" || dob == "" || password == "" || repassword == "" || mobile == "" || gender == "") {
            alert("All fields are required");
            return false;
        }
    
        // Checking if email is valid
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }
    
        // Checking if mobile number is valid
        if (!mobileRegex.test(mobile)) {
            alert("Please enter a valid mobile number");
            return false;
        }
    
        // Checking if passwords match
        if (password !== repassword) {
            alert("Passwords do not match");
            return false;
        }
    
        // If all validations pass, form submission can proceed
        alert("Registration successful!");
        return true;
    }