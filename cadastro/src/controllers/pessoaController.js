const Pessoa = require('../models/Pessoa');

exports.cadastrar = async (req, res) => {
    try {
        const { nome, cpf, telefone } = req.body;
        const pessoa = await Pessoa.create({ nome, cpf, telefone });
        res.json({ message: 'Pessoa cadastrada com sucesso!', pessoa });
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
        res.status(500).json({ message: 'Erro ao cadastrar a pessoa.' });
    }
};
