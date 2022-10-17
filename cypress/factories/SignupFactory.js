var faker = require('faker')

export default {
    entregador: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            nome: `${firstName} ${lastName}`,
                cpf: '00000000158',
                email: faker.internet.email(firstName),
                whatsapp : '21987999999',
                endereco : {
                    cep: '26540290',
                    numero : '300',
                    complemento : 'Fundos',
                    rua : 'Rua Fernando Gonçalves de Almeida',
                    bairro : 'Cabuis',
                    ciadade_uf : 'Nilópolis/RJ'
                },
                metodo_entrega : 'Moto',
                cnh: 'cnh-digital.jpg'
        }

        return data
    }
}