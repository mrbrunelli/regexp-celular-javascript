// Função que retorna valor em tempo real, dando efeito de mask
function formatarCelular(event) {
    var input = event.target;
    var celular = event.target.value

    // Remover todo caractere que não seja dígito
    celular = celular.replace(/(\D)/g, '')

    // Verificações por etapa. Vou concatenando os parênteses e o traço conforme a progressão evolui
    if (celular.length >= 11) celular = celular.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4')
    if (celular.length >= 8) celular = celular.replace(/^(\d{2})(\d{1})(\d{4})/, '($1) $2 $3-')
    if (celular.length >= 4) celular = celular.replace(/^(\d{2})(\d{1})/, '($1) $2 ')
    if (celular.length >= 3) celular = celular.replace(/^(\d{2})/, '($1) ')

    input.value = celular;
}