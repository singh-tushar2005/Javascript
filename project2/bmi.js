const form = document.querySelector('form')
//whenever you use submit(event), it sends the values to the server(we dont want that), so we use preventdefault in order to stop the action//
form.addEventListener('submit', function(e){
  e.preventDefault()

const height = parseInt( document.querySelector('#height').value)
const weight = parseInt( document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === '' || height<0 || isNaN(height)){   
  results.innerHTML = "Please Give a valid height ${height}";

}
else if(weight === '' || weight<0 || isNaN(weight)){   
  results.innerHTML = "Please Give a valid height ${weight}";

}

  const bmi = (weight/ ((height*height)/10000)).toFixed(2);

if(bmi < 18.6){
  results.innerHTML = `<span>${bmi}, Underweight</span>`;
}
else if(bmi>= 18.6 && bmi<24.9){
  results.innerHTML =`<span>${bmi}, Normalweight</span>`;
}
else{
  results.innerHTML = `<span>${bmi}, Overweight</span>`;
}
});