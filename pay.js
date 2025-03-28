document.addEventListener("DOMContentLoaded", function () {
    const payButton = document.getElementById("razorpay-button");
    const requiredFields = ["name", "email", "pincode"]; // Add required field IDs here

    function validateForm() {
        let isValid = true;
        requiredFields.forEach(id => {
            const field = document.getElementById(id);
            if (!field.value.trim()) {
                isValid = false;
            }
        });
        payButton.disabled = !isValid;
    }

    // Attach event listeners to required fields
    requiredFields.forEach(id => {
        document.getElementById(id).addEventListener("input", validateForm);
    });

    payButton.addEventListener("click", function (e) {
        var options = {
            "key": "rzp_test_NK1pYzPsoyInkd",
            "amount": 499900, // Amount in paisa (4999 INR)
            "currency": "INR",
            "name": "E-learning",
            "description": "Payment for Order #12345",
            "image": "razor.jpg",
            "handler": function (response) {
                alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
            },
            "prefill": {
                "name": document.getElementById("name").value,
                "email": document.getElementById("email").value,
                "contact": "7001481880"
            },
            "theme": {
                "color": "#007BFF"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
        e.preventDefault();
    });

    // Initial validation to disable button on page load
    validateForm();
});
