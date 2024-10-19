//foi removido o script do arquivo 'html' e copiado 'main.js'
// foi observado erro no codigo 'carousel' corrigido para 'carousel-imagens'

$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })
})

// foi observado erro no codigo 'mascara' corrigido para 'mask'

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
})

// foi observado erro no codigo 'requerido' corrigido para 'requerid'// segue a segunda correção professor 'required'

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true,
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
    },
     messages: {
            nome:'por favar, insira o seu nome'
        },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
})



