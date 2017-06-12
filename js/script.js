function string() {
   var array = document.getElementById('numbers').value.split(",");
   var operations = {
     '+' : array.reduce((a, b) => parseFloat(a) + parseFloat(b)),
     '-' : array.reduce((a, b) => parseFloat(a) - parseFloat(b)),
     '*' : array.reduce((a, b) => parseFloat(a) * parseFloat(b)),
     '/' : array.reduce((a, b) => parseFloat(a) / parseFloat(b))
   }
   var answer = operations[document.getElementById('operation').selectedOptions[0].text];
  
   document.getElementById('result').innerHTML = answer;
}