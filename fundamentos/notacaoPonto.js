console.log(Math.ceil(6.1)) //math aponta um arredondamento e pode se ceil e floor

const obj1 = {}
obj1.nome = 'Bola'
//isso é igual a --> obj1['nome'] = 'Bola
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome    //this.nome significa o nome associado ao objeto que foi criado a partir da função
                        //this.nome também significa que se pode instanciar o objeto dentro da funcao e esse nome ficará visivel fora do escopo da função
                        //this significa "essa", ou seja , "essa função" esse objeto dentro dessa função
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()