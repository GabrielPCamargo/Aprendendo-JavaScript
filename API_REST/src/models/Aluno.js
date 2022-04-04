import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defatultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 355 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defatultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 355 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defatultValue: '',
        unique: {
          msg: 'Email já utilizado',
        },
        validate: {
          isEmail: {
            msg: 'E-mail não válido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defatultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defatultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de ponto flutuante',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defatultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou de ponto flutuante',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
