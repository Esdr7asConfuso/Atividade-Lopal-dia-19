const quantidade = 15
let numeros = []
let posicao=[]

    for (let i = 0; i < quantidade; i++) {
        numeros [i] = parseInt(prompt(`Coloque o número ${i+1}`))
    }
    
    for (let i = 0; i < quantidade; i++) {
        if (numeros[i] % 10 == 0){
            posicao[i] = i+1
        
        }
    }

    alert  (`os números digitados são ${numeros} e os números multiplos de 10 estão na posição ${posicao}`)