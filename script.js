'use strict'

let mensagens =[
    {
        "id": 1,
        "messageContent":"Olá, como posso ajudá-lo?",
        "user": 0
    },
    {
        "id": 2,
        "messageContent":"Me traga uma solução para esse problema: ~~~~~~",
        "user": 1
    },
    {
        "id": 3,
        "messageContent":"Claro! Aqui está a solução para o seu problema: ~~~~~~",
        "user": 0
    },
    {
        "id": 4,
        "messageContent":"Muito obrigado!",
        "user": 1
    },
    {
        "id": 5,
        "messageContent":"Por nada! Sinta-se à vontade caso precise de ajuda com mais alguma coisa.",
        "user": 0
    }
]

const container = document.getElementById('mensagens')

function criarMensagem(info){    
    const mensagem = document.createElement('div')
    let classeMensagem
    if(info.user == 0){
        classeMensagem = 'mensagemBot'
    } else {
        classeMensagem = 'mensagemUsuario'
    }
    mensagem.classList.add(classeMensagem)
    mensagem.classList.add('mensagem')

    const texto = document.createElement('div')
    texto.textContent=info.messageContent

    mensagem.replaceChildren(texto)
    container.appendChild(mensagem)
}

function criarMensagens(){
    mensagens.forEach(mensagem => {
        criarMensagem(mensagem)
    });
}
function excluirCardsMensagem(){
    container.innerHTML = ''
}

criarMensagens()


const input = document.querySelector('input') 
input.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter'){

        let id
        mensagens.forEach(mensagem => {
            id = mensagem.id
        });     
       const messageContent = input.value

       const novoJSON = {
        id,
        messageContent,
        user:1
       }
       mensagens.push(novoJSON)
       container.innerHTML = `        <div class="mensagemUsuario mensagem">
       <div>
           Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo
           utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os
           embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como
           também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na
           década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente
           quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
       </div>
   </div>
   <div class="mensagemBot mensagem">
       <div>
           Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo
           utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os
           embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como
           também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na
           década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente
           quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
       </div>
   </div>
   <div class="mensagemUsuario mensagem">
       <div>
           Lorem Ipsum é simplesmente uma simulação de texto da
       </div>
   </div>
   <div class="mensagemBot mensagem">
       <div>
           Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo
           utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os
           embaralhou
           para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao
           salto
           para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60,
           quando
           a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser
           integrado a softwares de editoração eletrônica como Aldus PageMaker.
       </div>
   </div>
   <div class="mensagemUsuario mensagem">
       <div>
           Lorem Ipsum é simplesmente uma simulação de texto da
       </div>
   </div>`
       criarMensagens()
       container.scrollTop = container.scrollHeight
    }
})
