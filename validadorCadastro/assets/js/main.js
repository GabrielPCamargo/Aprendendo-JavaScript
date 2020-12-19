class ValidaFormulario {
  constructor(){
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos(){
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if(camposValidos && senhasValidas){
      alert('Formulário enviado');
      this.formulario.submit();
    }
  }

  senhasSaoValidas(){
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha devem ser iguais');
      this.criaErro(repetirSenha, 'Campos senha e repetir senha devem ser iguais');
    }

    if(senha.value.lengh < 6 || senha.value.lengh > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa ter entre 6 a 12 caracteres.')
    }


    return valid;
  }

  camposSaoValidos() {
    let valida = true;

    for(let error of this.formulario.querySelectorAll('.error-text')){
      error.remove();
    }

    for(let campo of this.formulario.querySelectorAll('.validar')){
      const label = campo.previousElementSibling.innerText;
      if(!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
        valida = false;
      }

      if(campo.classList.contains('cpf')){
        if(!this.validaCPF(campo)) valida = false;
      }

      if(campo.classList.contains('usuario')){
        if(!this.validaUsuario(campo)) valida = false;
      }
    }

    return valida;
  }

  validaCPF(campo){
    const cpf = new ValidaCPF(campo.value);
    if(!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido.');
      return false;
    }

    return true;
  }

  validaUsuario(campo){
    const usuario = campo.value;
    let valid = true;

    if(usuario < 3 || usuario > 12){
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
      valid = false;
    }

    if(!usuario.match(/[a-zA-Z0-9]+/g)){
      this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números');
      valid = false;
    }


    return valid;
  }

  criaErro(campo, msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();