let idades = [];
const quantidade = 8;

let idade = 0

for(let i = 0; i < quantidade; i++) {

    do{

    idade = parseFloat(prompt(`Digite a idade ${i + 1}` ));
    
        if (isNaN(idade) || idade < 0){
        alert("idade inválida! Digite uma idade correta.")
    }

    } while (isNaN(idade) || idade < 0);

    idades[i] = idade;

}

let soma = 0;
 
for (let i = 0; i < quantidade; i++) {
    
    soma += idades[i];

    
}
      
let  = soma / quantidade;

alert(`A média das idades é: ${media.toFixed(2)}`)