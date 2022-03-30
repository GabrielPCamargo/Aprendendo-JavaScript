import validator from 'validator';

export default class Contato {
    constructor(formClass){
        this.form = document.querySelector(formClass);
        this.error = false;
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e) {
        const el = e.target;
        const nome = el.querySelector('input[name="nome"]');
        const sobrenome = el.querySelector('input[name="sobrenome"]');
        const telefone = el.querySelector('input[name="telefone"]');
        const email = el.querySelector('input[name="email"]');

        if(email.value && !validator.isEmail(email.value)){
            this.error = true;
            alert('E-mail inválido');
        }

        if(!nome.value){
            alert('Nome é um campo obrigatório!')
            this.error = true;
        }

        if(!email.value && !telefone.value) {
            alert('Pelo menos um contato precisa ser enviado: e-mail ou telefone');
            this.error = true;
        }

        if(!this.error) el.submit();

    }
}