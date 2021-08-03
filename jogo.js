var timerId= null;

function iniciajogo(){
    var url = window.location.search;
        var nivel_jogo = url.replace("?", "");

    var tempo_segundos = 0;

        if(nivel_jogo == 1) { // 1 Facil - 120 Segundos
            tempo_segundos = 120;
        }

        if(nivel_jogo == 2) { // 2 Médio - 60 Segundos
            tempo_segundos = 60;
        }

        if(nivel_jogo == 3) { // 3 Difícil - 30 Segundos
            tempo_segundos = 30;
        }

        document.getElementById('cronometro').innerHTML = tempo_segundos;

        var qtde_patos = 40;
        criar_patos(qtde_patos);

        document.getElementById('patos_vivos').innerHTML = qtde_patos;

        document.getElementById('patos_mortos').innerHTML = 0;

        function contagem_tempo(tempo_segundos){
            tempo_segundos = tempo_segundos -1;
            if (tempo_segundos == -1){
                clearTimeout(timerId);
                game_over();
                return false;
            }
            document.getElementById('cronometro').innerHTML = tempo_segundos;
           timerId= setTimeout("contagem_tempo("+tempo_segundos+")", 1000);
        }

        function game_over(){
            alert('Fim de Jogo! Alguns Patos Fugiram!')
        }
        }

    function criar_patos(qtde_patos){
        for(var i = 1; i<= qtde_patos; i++){
            var patos = document.createElement("img");
            patos.src = 'img/pato.png';
            patos.onclick = function(){matar(this);}
            
            document.getElementById('cenario').appendChild(patos);
    }
}

function matar(m){
    var id_patos = m.id;
    document.getElementById(id_patos).setAttribute("onclick","");
    document.getElementById(id_patos).src = 'img/pato_morto.png';

    pontuacao(-1);  
}

function pontuacao(acao){
    var patos_vivos = document.getElementById(patos_vivos).innerHTML;
    var patos_mortos = document.getElementById(patos_mortos).innerHTML;

    patos_vivos = parseInt(patos_vivos);
    patos_mortos = parseInt(patos_mortos);
    
    patos_vivos = patos_vivos + acao;
    patos_mortos = patos_mortos - acao;

    document.getElementById('patos_vivos').innerHTML = patos_vivos;
    document.getElementById('patos_mortos').innerHTML = patos_mortos;

    situcao_jogo(patos_vivos);
}

function remove_eventos_patos(){
    var i = 1;

    while(document.getElementById('p' +i)){
        document.getElementById('p' +i).onclick = '';
        i++;
    }
}

function situacao_jogo{
    if(patos_vivos == 0){
        alert('Parabéns! Todos os Patos Foram Mortos!');
        parar_jogo();
    }
}

function parar_jogo(){
    clearTimeout(timerId);
}

function game_over(){
    remove_eventos_patos();
    alert('Fim de Jogo! Alguns Patos Fugiram')
}