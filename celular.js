// Função que retorna valor em tempo real, dando efeito de mask
function formatarCelular(event) {
    var input = event.target;
    var numero = event.target.value;
    var tamanho = numero.length;   

    // Remover todo caractere que não seja dígito
    numero = numero.replace(/(\D)/g, '');

    // Verificações por etapa. Vou concatenando os parênteses e o traço conforme a progressão evolui
    if (tamanho >= 11) numero = numero.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4');
    if (tamanho >= 8) numero = numero.replace(/^(\d{2})(\d{1})(\d{4})/, '($1) $2 $3-');
    if (tamanho >= 4) numero = numero.replace(/^(\d{2})(\d{1})/, '($1) $2 ');
    if (tamanho >= 3) numero = numero.replace(/^(\d{2})/, '($1) ');

    input.value = numero;
}