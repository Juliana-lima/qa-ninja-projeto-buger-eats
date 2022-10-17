//import SignupPage  from '../pages/SignupPage' Opção 1
import signup from '../pages/SignupPage'
import singnupFactory from '../factories/SignupFactory'

describe('Realizar Cadastro de Entregador', () => {
 //var signup = new SignupPage() Opção 1
    /* beforeEach(function() {
        cy.fixture("entregador").then((e) => {  
            this.entregador = e
        }) 
    });*/

    it('Usuário deve ser capaz de se cadastrar como entregador', function() {     

        var entregador = singnupFactory.entregador()

        signup.go()
        signup.fillForm(entregador)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signup.modalContentShoudBe(expectedMessage)
    });
    it('Verificar e-mail inválido', function() {  
        
        var entregador = singnupFactory.entregador()

        entregador.email = 'teste.com.br88'

        signup.go()
        signup.fillForm(entregador)
        signup.submit()
        const expectedMessage = 'Oops! Email com formato inválido.';
        signup.alertEmailShoudBe(expectedMessage)
    });

    context('Campos Obrigatórios', function(){
        
        const mensagens = [
            {campo:'name', output: 'É necessário informar o nome' },
            {campo:'cpf', output: 'É necessário informar o CPF' },
            {campo:'email', output: 'É necessário informar o email' },
            {campo:'cep', output: 'É necessário informar o CEP' },
            {campo:'numero', output: 'É necessário informar o número do endereço' },
            {campo:'metodo_entrega', output: 'Selecione o método de entrega' },
            {campo:'cnh', output: 'Adicione uma foto da sua CNH' }
        ]  

        before (function(){
            signup.go()
            signup.submit()
        })

        mensagens.forEach(function(msg){
            it(`${msg.campo} is required`, function(){
                signup.alertEmailShoudBe(msg.output)
            })
        })
    })

    it('Deve verificar campos obrigatórios', function() {
        signup.go()
        signup.submit()
        signup.alertEmailShoudBe('É necessário informar o nome')
        signup.alertEmailShoudBe('É necessário informar o CPF')
        signup.alertEmailShoudBe('É necessário informar o email')
        signup.alertEmailShoudBe('É necessário informar o CEP')
        signup.alertEmailShoudBe('É necessário informar o número do endereço')
        signup.alertEmailShoudBe('Selecione o método de entrega')
        signup.alertEmailShoudBe('Adicione uma foto da sua CNH')


    });

});