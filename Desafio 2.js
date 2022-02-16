var alunos = ['Rafael', 'Arthur', 'Abdiel', 'Abdimel', 'Gilson', 'Gustavo']
var tamanho = alunos.length
for(let indice = 0; indice < tamanho; indice++){
    if(indice == 0){
        console.log('O aluno ' +indice+ ' com o nome de ' +alunos[indice]+ ' equivale ao aluno Zero.')
    }else if(indice % 2 == 0){
        console.log('O aluno ' +indice+ ' com o nome de ' +alunos[indice]+ ' equivale a um aluno par.')
    }else{
        console.log('O aluno ' +indice+ ' com o nome de ' +alunos[indice]+ ' equivale a um aluno ímpar.')
    }
}