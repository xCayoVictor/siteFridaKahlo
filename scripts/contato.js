function limparError(){
    document.querySelector('#cep').classList.remove('error')
}

function buscarCep(){
    const cep = document.getElementById('cep').value

    if (cep == ''){
        alert("O campo de CEP não pode ser vazio")
        document.querySelector('#cep').classList.add('error')
    } else if (cep.length != 8){
        alert("O campo de CEP é inválido")
        document.querySelector('#cep').classList.add('error')
    } else {
        viaCep(cep)
    }
}

function viaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(response => {
        document.querySelector('#logradouro').value = response.logradouro
        document.querySelector('#bairro').value = response.bairro
        document.querySelector('#cidade').value = response.localidade
        document.querySelector('#complemento').value = response.complemento
        buscarEstado(response.uf) 
    })

        document.querySelector('.classHidden').hidden = false
}

function buscarEstado(uf){
    if(uf == 'AC') {
        document.querySelector('#estado').value = 'Acre'
    } else if (uf == 'AL') {
        document.querySelector('#estado').value = 'Alagoas'
    } else if (uf == 'AP') {
        document.querySelector('#estado').value = 'Amapá'
    } else if (uf == 'AM') {
        document.querySelector('#estado').value = 'Amazonas'
    } else if (uf == 'BA') {
        document.querySelector('#estado').value = 'Bahia'
    } else if (uf == 'CE') {
        document.querySelector('#estado').value = 'Ceará'
    }  else if (uf == 'ES') {
        document.querySelector('#estado').value = 'Espírito Santo'
    }  else if (uf == 'GO') {
        document.querySelector('#estado').value = 'Goiás'
    }  else if (uf == 'MA') {
        document.querySelector('#estado').value = 'Maranhão'
    }  else if (uf == 'MT') {
        document.querySelector('#estado').value = 'Mato Grosso'
    }  else if (uf == 'MS') {
        document.querySelector('#estado').value = 'Mato Grosso do Sul'
    }  else if (uf == 'MG') {
        document.querySelector('#estado').value = 'Minas Gerais'
    } else if (uf == 'PA') {
        document.querySelector('#estado').value = 'Pará'
    } else if (uf == 'PB') {
        document.querySelector('#estado').value = 'Paraíba'
    } else if (uf == 'PR') {
        document.querySelector('#estado').value = 'Paraná'
    } else if (uf == 'PE') {
        document.querySelector('#estado').value = 'Pernambuco'
    } else if (uf == 'PI') {
        document.querySelector('#estado').value = 'Piauí'
    } else if (uf == 'RJ') {
        document.querySelector('#estado').value = 'Rio de Janeiro'
    } else if (uf == 'RN') {
        document.querySelector('#estado').value = 'Rio Grande do Norte'
    } else if (uf == 'RS') {
        document.querySelector('#estado').value = 'Rio Grande do Sul'
    } else if (uf == 'RO') {
        document.querySelector('#estado').value = 'Rondônia'
    } else if (uf == 'RR') {
        document.querySelector('#estado').value = 'Roraima'
    } else if (uf == 'SC') {
        document.querySelector('#estado').value = 'Santa Catarina'
    } else if (uf == 'SP') {
        document.querySelector('#estado').value = 'São Paulo'
    } else if (uf == 'SE') {
        document.querySelector('#estado').value = 'Sergipe'
    } else if (uf == 'TO') {
        document.querySelector('#estado').value = 'Tocantins'
    } else if (uf == 'DF') {
        document.querySelector('#estado').value = 'Distrito Federal'
    }

}

function limparPagina(){
    document.querySelector('#nome').value = ""
    document.querySelector('#sobrenome').value = ""
    document.querySelector('#email').value = ""
    document.querySelector('#dataNascimento').value = ""
    document.querySelector('#genero').value = ""
    document.querySelector('#cep').value = ""
    document.querySelector('#cep').classList.remove('error')
    document.querySelector('.classHidden').hidden = true
    document.querySelector('#areaTexto').value = ""
}

function enviar(){
    alert("Feedback enviado! \n\nAgradecemos sua colaboração.")
    limparPagina()
}



