import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'gabriel',
      sobrenome: 'camargo',
      email: 'gabriel@gmail.com',
      idade: 18,
      peso: 90,
      altura: 2.6,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
