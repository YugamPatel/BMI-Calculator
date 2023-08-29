document.getElementById('calculateButton').addEventListener('click', function() {
    const heightValue = parseFloat(document.getElementById('userHeight').value);
    const weightValue = parseFloat(document.getElementById('userWeight').value);
    
    if (isNaN(heightValue) || isNaN(weightValue)) {
      document.getElementById('bmiOutput').innerText = 'Enter valid height and weight, please.';
      return;
    }
    
    const bmi = computeBMI(weightValue, heightValue);
    const label = categorizeBMI(bmi);
    
    document.getElementById('bmiOutput').innerText = `Your BMI is ${bmi.toFixed(2)} and you are ${label}.`;
  });
  
  function computeBMI(weight, height) {
    return weight / Math.pow(height / 100, 2);
  }
  
  function categorizeBMI(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  }
  