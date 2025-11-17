// scripts.js — comportamentos gerais: ano no rodapé + máscaras + validação


/* ==========================================================
   UTILIDADES
   ========================================================== */

// Remove qualquer caractere que não seja número
function onlyDigits(value) {
    return value.replace(/\D/g, '');
}

// Aplica máscara sempre que o input existir
function applyMaskIfExists(inputId, maskFn) {
    const field = document.getElementById(inputId);
    if (!field) return;

    field.addEventListener('input', function () {
        const digits = onlyDigits(this.value);
        this.value = maskFn(digits);
    });
}


/* ==========================================================
   MÁSCARA CPF
   ========================================================== */
applyMaskIfExists('cpf', function (v) {
    v = v.slice(0, 11);
    return v
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
});


/* ==========================================================
   MÁSCARA TELEFONE (com 9 dígitos ou 8)
   ========================================================== */
applyMaskIfExists('telefone', function (v) {
    v = v.slice(0, 11);
    return v
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{2})\) (\d{5})(\d)/, '($1) $2-$3')
        .replace(/(\d{2})\) (\d{4})(\d)/, '($1) $2-$3');
});


/* ==========================================================
   MÁSCARA CEP
   ========================================================== */
applyMaskIfExists('cep', function (v) {
    v = v.slice(0, 8);
    return v.replace(/(\d{5})(\d)/, '$1-$2');
});


/* ==========================================================
   VALIDAÇÃO DO FORMULÁRIO
   ========================================================== */
const form = document.getElementById('cadastroForm');

if (form) {
    form.addEventListener('submit', function (e) {

        if (!form.checkValidity()) {
            e.preventDefault(); // impede envio
            form.reportValidity(); // deixa o navegador exibir mensagens
            return;
        }

        e.preventDefault();
        alert('Formulário válido! (Simulação). Integração com backend será feita depois.');
    });
}


/* ==========================================================
   ANO AUTOMÁTICO NO RODAPÉ
   ========================================================== */
const yearElem = document.getElementById('year');
if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
}