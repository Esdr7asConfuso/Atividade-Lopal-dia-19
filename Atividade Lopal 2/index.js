const quantidade = 7
let idades = []
let posicao=[]

    for (let i = 0; i < quantidade; i++) {
        idades [i] = parseInt(prompt(`Coloque a Idade da pessoa ${i+1}`))
    }
    
    for (let i = 0; i < quantidade; i++) {
        if (idades[i]>25){
            posicao[i] = i+1
        
        }
    }

    alert  (`os números maiores que 25 estão na posições ${posicao}`)