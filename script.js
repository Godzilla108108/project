document.getElementById("cropForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get user inputs
    let nitrogen = parseFloat(document.getElementById("nitrogen").value);
    let phosphorus = parseFloat(document.getElementById("phosphorus").value);
    let potassium = parseFloat(document.getElementById("potassium").value);
    let temperature = parseFloat(document.getElementById("temperature").value);
    let humidity = parseFloat(document.getElementById("humidity").value);
    let ph = parseFloat(document.getElementById("ph").value);
    let rainfall = parseFloat(document.getElementById("rainfall").value);

    // Simple logic for crop recommendation (can be replaced with ML API)
    let recommendedCrop = "";

    if (temperature > 30 && humidity > 70) {
        recommendedCrop = "Rice";
    } else if (ph >= 6 && ph <= 7.5 && nitrogen > 30) {
        recommendedCrop = "Wheat";
    } else if (phosphorus > 40 && potassium > 30 && rainfall > 100) {
        recommendedCrop = "Sugarcane";
    } else if (temperature > 25 && humidity < 60) {
        recommendedCrop = "Maize";
    } else {
        recommendedCrop = "Unable to determine a suitable crop. Try adjusting the inputs.";
    }

    // Display result
    document.getElementById("result").innerHTML = `<strong>Recommended Crop:</strong> ${recommendedCrop}`;
});
