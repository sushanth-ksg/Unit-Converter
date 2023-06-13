const conversionRatios = {
    length: {
      m: 1,
      km: 0.001,
      cm: 100,
      mm: 1000,
      mi: 0.000621371,
      yd: 1.09361,
      ft: 3.28084,
      in: 39.3701
    },
    time: {
      s: 1,
      min: 60,
      hr: 3600,
      day: 86400,
      week: 604800,
      month: 2628000,
      year: 31536000
    },
    temperature: {
      c: {
        c: 1,
        f: (val) => (val * 9/5) + 32,
        k: (val) => val + 273.15
      },
      f: {
        c: (val) => (val - 32) * 5/9,
        f: 1,
        k: (val) => ((val - 32) * 5/9) + 273.15
      },
      k: {
        c: (val) => val - 273.15,
        f: (val) => ((val - 273.15) * 9/5) + 32,
        k: 1
      }
    },
    weight: {
      g: 1,
      kg: 0.001,
      lb: 0.00220462,
      oz: 0.035274
    }
  };
  
  function convertLength() {
    const input = document.getElementById('length-input').value;
    const fromUnit = document.getElementById('length-select-from').value;
    const toUnit = document.getElementById('length-select-to').value;
  
    const result = input * conversionRatios.length[toUnit] / conversionRatios.length[fromUnit];
    document.getElementById('length-output').value = result;
  }
  
  function convertTime() {
    const input = document.getElementById('time-input').value;
    const fromUnit = document.getElementById('time-select-from').value;
    const toUnit = document.getElementById('time-select-to').value;
  
    const result = input * conversionRatios.time[fromUnit] / conversionRatios.time[toUnit];
    document.getElementById('time-output').value = result;
  }
  
  function convertTemperature() {
    const input = document.getElementById('temperature-input').value;
    const fromUnit = document.getElementById('temperature-select-from').value;
    const toUnit = document.getElementById('temperature-select-to').value;
  
    const result = conversionRatios.temperature[fromUnit][toUnit](input); 
    document.getElementById('temperature-output').value = result;
  }
  
  function convertWeight() {
    const input = document.getElementById('weight-input').value;
    const fromUnit = document.getElementById('weight-select-from').value;
    const toUnit = document.getElementById('weight-select-to').value;
  
    const result = input * conversionRatios.weight[toUnit] / conversionRatios.weight[fromUnit];
    document.getElementById('weight-output').value = result;
  }
  
  const conversionTypeSelect = document.getElementById('conversion-type');
  conversionTypeSelect.addEventListener('change', function () {
    const selectedConverter = this.value;
  
   
    const converters = document.getElementsByClassName('converter');
    for (let i = 0; i < converters.length; i++) {
      converters[i].classList.add('hidden');
    }
  
  
    const selectedConverterElement = document.getElementById(`${selectedConverter}-converter`);
    selectedConverterElement.classList.remove('hidden');
  });
  
  conversionTypeSelect.value = 'length';
  document.getElementById('length-converter').classList.remove('hidden');
  
  document.getElementById('length-convert-btn').addEventListener('click', convertLength);
  document.getElementById('time-convert-btn').addEventListener('click', convertTime);
  document.getElementById('temperature-convert-btn').addEventListener('click', convertTemperature);
  document.getElementById('weight-convert-btn').addEventListener('click', convertWeight);
  