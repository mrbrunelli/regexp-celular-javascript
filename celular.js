// Seletor
const celular = document.querySelector('#celular')

// Evento de que aciona função assim que a tecla sobe
celular.addEventListener('keyup', () => {
    // Passando valor atual do input por parâmetro
    formatarCelular(celular.value)
})

// Função que retorna valor em tempo real, dando efeito de mask
function formatarCelular(celular) {
    // Remover todo caractere que não seja dígito
    celular = celular.replace(/(\D)/g, '')

    // Verificações por etapa. Vou concatenando os parênteses e o traço conforme a progressão evolui
    if (celular.length >= 11) return document.querySelector('#celular').value = celular.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4')
    if (celular.length >= 8) return document.querySelector('#celular').value = celular.replace(/^(\d{2})(\d{1})(\d{4})/, '($1) $2 $3-')
    if (celular.length >= 4) return document.querySelector('#celular').value = celular.replace(/^(\d{2})(\d{1})/, '($1) $2 ')
    if (celular.length >= 3) return document.querySelector('#celular').value = celular.replace(/^(\d{2})/, '($1) ')
}