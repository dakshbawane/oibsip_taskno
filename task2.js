document.getElementById("convert-btn").addEventListener("click", function () {
    const degrees = parseFloat(document.getElementById("degrees").value);
    const conversionType = document.getElementById("type").value;
    const resultField = document.getElementById("result");
  
    if (isNaN(degrees)) {
      alert("Please enter a valid number");
      return;
    }
  
    let result = 0;
  
    if (conversionType === "fahrenheit-to-celsius") {
      result = ((degrees - 32) * 5) / 9;
      resultField.value = `${result.toFixed(2)} °C`;
    } else if (conversionType === "celsius-to-fahrenheit") {
      result = (degrees * 9) / 5 + 32;
      resultField.value = `${result.toFixed(2)} °F`;
    }
  });
  