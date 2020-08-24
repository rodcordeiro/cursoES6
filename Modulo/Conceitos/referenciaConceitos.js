// Working with classes
class List {
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList  extends List{
    constructor(){
        super();
        this.usuario = "rodcordeiro";
    }
    mostrausuario(){
        console.log(this.usuario)
    }
}

let minhaLista = new TodoList();
// console.log(minhaLista)

//Working with array
const arr = [1,3,4,5,8,9];

//Map => Runs through the array executing the function with each item of the array
const newArr = arr.map((item, index)=>{
    return item + index;
});
// console.log(newArr)

//Reduce => reduces the array to a single element.
const sum = arr.reduce(function(total,next){
    return total + next;
})
// console.log(sum)

//Filter => filters the array
const filter = arr.filter(item=>item % 2 === 0)
// console.log(filter)

//Find => Used to find an item inside the array
const find = arr.find(function (item, index){
    return item === 4;
});
// console.log(find)

//difference of using an arrow function
const filter1 = arr.map(function(item){
    return item * 2;
})
const filter2 = arr.map(item=>item*2);
const user = ()=>({name:"cordeiro"})

//Operadores rest e spread
// Need to install @babel/plugin-proposal-object-rest-spread 
//REST => o resto das propriedades
const usuario = {
    nome: "rodrigo",
    idade: 21,
    empresa:"Cordeiro'sDev"
}
//Usando o método de desconstrução, selecionamos apenas o nome no objeto usuario e 
//utilizando o rest(...) atribuimos a variavel resto o restante das informações contidas no objeto
const{nome,...resto} = usuario;

function restSum(...params){ //usando o rest como parametro da função ele vai armazenar todos os parametros passados em uma array
    return params.reduce((total,next) => total + next)
}

//spread => usado para propagar as informações de uma variavel(array/objeto) para outra
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2]

const usuario1 = {
    nome: "rodrigo",
    idade: 21,
    empresa:"Cordeiro'sDev"
}
const usuario2 = {...usuario1, nome:"Yasmim"}
