// payement
var a = document.getElementById('payement');
a.addEventListener('submit',function(e){
    e.preventDefault();
   let b = document.getElementById('message');
   b.innerHTML ='payement effectuer avec succes';
});
