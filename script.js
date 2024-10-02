const livros = [
    { titulo: "A Culpa é das Estrelas", imagem: "imagens/livro1.jpg", lido: false, descricao: "“A culpa é das estrelas” narra o romance de dois adolescentes que se conhecem (e se apaixonam) em um Grupo de Apoio para Crianças com Câncer: Hazel, uma jovem de dezesseis anos que sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões, e Augustus Waters, de dezessete, ex-jogador de basquete que perdeu a perna para o osteosarcoma. Como Hazel, Gus é inteligente, tem ótimo senso de humor e gosta de brincar com os clichês do mundo do câncer – a principal arma dos dois para enfrentar a doença que lentamente drena a vida das pessoas. Inspirador, corajoso, irreverente e brutal, A culpa é das estrelas é a obra mais ambiciosa e emocionante de John Green, sobre a alegria e a tragédia que é viver e amar." },
    { titulo: "Harry Potter e a Pedra Filosofal", imagem: "imagens/livro2.jpg", lido: false, descricao: "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais. O menino de olhos verde, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo." },
    { titulo: "Harry Potter e as Reliquias da Morte", imagem: "imagens/livro3.jpg", lido: false, descricao: "Harry Potter está prestes a fazer 17 anos, mas, ao contrário das outras vezes, não irá para Hogwarts após seu aniversário. Agora, escoltado por uma verdadeira brigada de bruxos, ele precisa fugir, antes que Voldemort o encontre. Esse ingresso brusco na vida adulta marca o início da aventura do jovem bruxo no último livro da série, Harry Potter e as Relíquias da Morte, que chegou às livrarias do país ao primeiro minuto do dia 10 de novembro de 2007, com tiragem inicial de 400 mil exemplares, pela Editora Rocco.A edição em inglês de Harry Potter e as Relíquias da Morte saiu no dia 21 de julho, provocando uma corrida dos fãs às livrarias. Só nos EUA, foram vendidos 8,3 milhões de exemplares do livro nas primeiras 24 horas, batendo recorde de vendas e superando o antecessor, Harry Potter e o enigma do Príncipe, que vendeu 6,9 milhões de exemplares no mesmo período. Ao total, os seis primeiros volumes da série venderam 325 milhões de exemplares, em 64 línguas, em todo o mundo, 2,5 milhões apenas no Brasil.Em Harry Potter e as Relíquias da Morte, o encontro inevitável com Lord Voldemort não pode mais ser adiado. Harry, no entanto, precisa ganhar tempo para encontrar as Horcruxes que ainda estão faltando. E, pelo caminho, descobrir o que são afinal as Relíquias da Morte e como ele pode usá-las contra o Lorde das Trevas. Seguindo as poucas pistas deixadas por Dumbledore, Harry conta apenas com a ajuda dos leais amigos Rony e Hermione.Juntos, eles percorrem lugares nunca visitados, descobrem histórias nebulosas sobre pessoas queridas e acabam por desvendar mistérios que os incomodavam há muito tempo. Enquanto Harry, Rony e Hermione vagam por diferentes lugares em busca de pistas, J. K. Rowling vai revelando aspectos até então desconhecidos sobre os principais personagens.Em sua última e derradeira aventura, Harry não é exposto apenas a batalhas. Ele precisa superar traições, surpresas e, mais do que nunca, aprender a lidar com os próprios sentimentos. Como em todos os livros da série, o amor e a amizade são elementos-chave para a trama. Em Harry Potter e as Relíquias da Morte, J. K. Rowling leva o leitor por uma trilha de suspense, com sustos ininterruptos até a última página, quando entrega, por completo, toda a verdade e conclui os passos de herói de Harry Potter na maior saga bruxa de todos os tempos." },
];

function carregarLivros() {
    const container = document.getElementById('livros');
    livros.forEach(livro => {
        const livroDiv = document.createElement('div');
        livroDiv.className = 'livro';

        const img = document.createElement('img');
        img.src = livro.imagem;
        img.alt = livro.titulo;

        const titulo = document.createElement('h2');
        titulo.textContent = livro.titulo;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${livro.titulo}`;
        checkbox.checked = livro.lido;
        checkbox.addEventListener('change', () => {
            livro.lido = checkbox.checked;
        });

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = 'Lido';

        const botao = document.createElement('button');
        botao.textContent = 'Ver Descrição';
        botao.addEventListener('click', () => {
            abrirModal(livro.titulo, livro.descricao);
        });

        livroDiv.appendChild(img);
        livroDiv.appendChild(titulo);

        // Agrupando checkbox e label em um elemento <div> para melhor organização
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkbox-container');
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);

        livroDiv.appendChild(checkboxContainer);

        livroDiv.appendChild(botao);

        container.appendChild(livroDiv);
    });
}

function abrirModal(titulo, descricao) {
    const modal = document.getElementById('modal');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDescricao = document.getElementById('modal-descricao');
    const span = document.getElementsByClassName('close')[0];

    modalTitulo.textContent = titulo;
    modalDescricao.textContent = descricao;
    modal.style.display = 'block';

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', carregarLivros);
