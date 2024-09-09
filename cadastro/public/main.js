document.getElementById('pessoaForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    const pessoa = {
        nome: nome,
        cpf: cpf,
        telefone: telefone
    };

    try {
        const response = await fetch('http://localhost:3000/api/pessoas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pessoa)
        });

        if (response.ok) {
            document.getElementById('mensagem').innerHTML = '<div class="alert alert-success">Pessoa cadastrada com sucesso!</div>';
            document.getElementById('pessoaForm').reset();
        } else {
            document.getElementById('mensagem').innerHTML = '<div class="alert alert-danger">Erro ao cadastrar pessoa!</div>';
        }
    } catch (error) {
        document.getElementById('mensagem').innerHTML = '<div class="alert alert-danger">Erro: Não foi possível conectar ao servidor!</div>';
    }
});
