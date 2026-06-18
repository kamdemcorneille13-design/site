// la validation du formulaire
var form = document.getElementById('formulaire');
var passe = document.getElementById('passe');
var email = document.getElementById('email');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        if(email.value == ''){
            let adresse = document.getElementById('adresse');
            let  mot = document.getElementById('mot');
            adresse.innerText='Votre adressse Email est requis';
            adresse.style.color='#ff0000';
            email.style.border='#ff0000 2px solid';
            adresse.style.fontSize='10px';
        }
        else{
           email.style.border='#0a1dee 2px solid';
        }
    });
    form.addEventListener('submit',function(a){
        a.preventDefault();
        if(passe.value ==''){
            mot.innerText='votre mot de passe';
            mot.style.color='#ff0000';
            passe.style.border='#ff0000 2px solid';
            mot.style.fontSize='10px';
            
        }
        else{
              passe.style.border='#0715d7 2px solid';
        }
        let confirme = document.getElementsByClassName('confirme');
        let confirme_passe = document.querySelector('.confirme_passe');
        if(confirme.value != passe.value){
            confirme_passe.style.color ='#ff0000';
        }
        else{
            confirme.style.border = '2px solid #0715d7';
        }
    });
// mode clair et sombre