// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const calulateWeight = (earthWeight, planet) => {
  switch (planet) {
    case 'Mercury': 
      return earthWeight * .378;  
    case 'Venus': 
      return earthWeight * .907;  
    case 'Mars': 
      return earthWeight * .377;  
    case 'Jupiter': 
      return earthWeight * 2.36;   
    case 'Saturn': 
      return earthWeight * .916; 
    default: 
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.' 
  }
};  

console.log(calulateWeight(100, 'Venus'));  
