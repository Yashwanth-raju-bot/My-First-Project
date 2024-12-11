// Sample profile object to store user information
let profile = {
    personalInfo: {
        firstName: '',
        lastName: '',
        gender: ''
    },
    businessInfo: {
        contactNo: '',
        email: '',
        address: '',
        commodities: ''
    }
};

// Function to populate form fields with profile data
function populateFormFields() {
    document.getElementById('firstName').value = profile.personalInfo.firstName;
    document.getElementById('lastName').value = profile.personalInfo.lastName;
    document.getElementById('gender').value = profile.personalInfo.gender;
    document.getElementById('contactNo').value = profile.businessInfo.contactNo;
    document.getElementById('email').value = profile.businessInfo.email;
    document.getElementById('address').value = profile.businessInfo.address;
    document.getElementById('commodities').value = profile.businessInfo.commodities;
}

// Function to update profile object with form data
function updateProfile() {
    profile.personalInfo.firstName = document.getElementById('firstName').value;
    profile.personalInfo.lastName = document.getElementById('lastName').value;
    profile.personalInfo.gender = document.getElementById('gender').value;
    profile.businessInfo.contactNo = document.getElementById('contactNo').value;
    profile.businessInfo.email = document.getElementById('email').value;
    profile.businessInfo.address = document.getElementById('address').value;
    profile.businessInfo.commodities = document.getElementById('commodities').value;
}

// Function to handle edit button click
function handleEdit() {
    // Enable form fields for editing
    document.querySelectorAll('input, select, textarea').forEach(element => {
        element.removeAttribute('readonly');
    });
    // Show save button, hide edit button
    document.getElementById('editBtn').style.display = 'none';
    document.getElementById('saveBtn').style.display = 'block';
}

// Function to handle save button click
function handleSave() {
    // Update profile with form data
    updateProfile();
    // Disable form fields after saving
    document.querySelectorAll('input, select, textarea').forEach(element => {
        element.setAttribute('readonly', true);
    });
    // Show edit button, hide save button
    document.getElementById('editBtn').style.display = 'block';
    document.getElementById('saveBtn').style.display = 'none';
}

// Add event listeners to edit and save buttons
document.getElementById('editBtn').addEventListener('click', handleEdit);
document.getElementById('saveBtn').addEventListener('click', handleSave);

// Initial population of form fields with profile data
populateFormFields();
