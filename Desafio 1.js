var peso = 101
const quantidade_na_lista = ['Peça 1', 'Peça 2', 'Peça 3', 'Peça 4', 'Peça 5', 'Peça 6', 'Peça 7', 'Peça 8', 'Peça 9']
let indice = 0
const tamanho = quantidade_na_lista.length

if(peso > 100){
    console.log('Peso de peça adequado, favor continuar.')
    if(tamanho < 10){
        console.log('Há espaço para catalogar mais peças.')
        for(indice; indice < tamanho; indice++){
            if(quantidade_na_lista[indice].length > 3){
                console.log('A peça: ' +quantidade_na_lista[indice]+ ' está qualificada para ser catalogada.')
            }else{
                console.log('A peça: ' +quantidade_na_lista[indice]+ ' não está qualificada para ser catalogada.')
            }
        }
    }else{
        console.log('Não há espaço para catalogar mais peças.\nPeças já catalogadas:\n')
        for(indice = 0; indice < tamanho; indice++){
            console.log(quantidade_na_lista[indice])
        }
    }
}else{
    console.log('Peso de peça inadequado, favor reiniciar.')
}