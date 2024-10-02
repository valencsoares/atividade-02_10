const livros = [
    { titulo: "A Culpa é das Estrelas", imagem: "imagens/livro1.jpg", lido: false },
    { titulo: "Harry Potter e a Pedra Filosofal", imagem: "imagens/livro2.jpg", lido: false },
    { titulo: "Harry Potter e as Reliquias da Morte", imagem: "imagens/livro3.jpg", lido: false },
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
        checkbox.checked = livro.lido;
        checkbox.addEventListener('change', () => {
            livro.lido = checkbox.checked;
        });
        
        livroDiv.appendChild(img);
        livroDiv.appendChild(titulo);
        livroDiv.appendChild(checkbox);
        
        container.appendChild(livroDiv);
    });
}

document.addEventListener('DOMContentLoaded', carregarLivros);
