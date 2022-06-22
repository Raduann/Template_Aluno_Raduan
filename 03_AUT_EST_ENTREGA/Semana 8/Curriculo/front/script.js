
$('#titulo').fadeIn("1")
$('#nomeC').append(" Oliveira Galli Muarrek")

    function mostrar(){
        curriculo.innerHTML = "Fui convidado por um dos assessores a me juntar na Delta. Sou estagiário em marketing, mas durante as férias escolares fiquei até mais tarde no escritório para aprender com todas as áreas. Atualmente meu trabalho está sendo avaliado de maneira positiva. No marketing fechei parcerias com clubes de benefícios para conseguir leads sem que tenhamos que investir nada. Fora isso liderei a ideia de abrirmos mão da agência terceirizada e estamos começando o processo da fazer tudo de maneira interna. Até o momento os resultados estão melhores."
    }

    function rodar(){
        let url = '/curso'
        let xhttp = new XMLHttpRequest()
        xhttp.open("get", url, false)
        xhttp.send()
        let data = JSON.parse(xhttp.responseText)[0]
        console.log(data)
        document.getElementById("nome").textContent = data.nome
        document.getElementById("instituicao").textContent = data.instituicao
        document.getElementById("duracao").textContent = data.duracao
}