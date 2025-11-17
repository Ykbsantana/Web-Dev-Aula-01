// scripts.js - pequenos comportamentos: ano no rodapé + máscaras simples


// Máscara simples para CPF, Telefone e CEP (vanilla JS)
function setInputFilter(elem, filter){
elem.addEventListener('input', function(){
if(filter(this.value)) this.oldValue = this.value; else this.value = this.oldValue || '';
});
}


var cpf = document.getElementById('cpf');
var tel = document.getElementById('telefone');
var cep = document.getElementById('cep');


function onlyDigits(v){ return v.replace(/\D/g,''); }


if(cpf){
cpf.addEventListener('input', function(){
var v = onlyDigits(this.value).slice(0,11);
v = v.replace(/(\d{3})(\d)/, '$1.$2');
v = v.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
v = v.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
this.value = v;
});
}


if(tel){
tel.addEventListener('input', function(){
var v = onlyDigits(this.value).slice(0,11);
v = v.replace(/(\d{2})(\d)/, '($1) $2');
v = v.replace(/(\d{2})\) (\d{5})(\d)/, '($1) $2-$3');
v = v.replace(/(\d{2})\) (\d{4})(\d)/, '($1) $2-$3');
this.value = v;
});
}


if(cep){
cep.addEventListener('input', function(){
var v = onlyDigits(this.value).slice(0,8);
v = v.replace(/(\d{5})(\d)/, '$1-$2');
this.value = v;
});
}


// Validação extra simples (mostrar mensagens nativas do browser)
var form = document.getElementById('cadastroForm');
if(form){
form.addEventListener('submit', function(e){
if(!form.checkValidity()){
// permite que o navegador mostre mensagens de validação
e.preventDefault();
form.reportValidity();
} else {
e.preventDefault();
alert('Formulário válido (simulação). Verifique envio para backend na próxima entrega.');
}
});
};