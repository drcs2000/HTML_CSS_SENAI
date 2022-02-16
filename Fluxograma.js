var data_de_hoje = new Date ('2021/11/17')
var data_do_evento = new Date ('2021/11/15')
var data_de_nascimento = new Date ('2000/06/11')
var idade = Math.abs(data_de_hoje - data_de_nascimento)
var days = idade/(1000*3600*24)/365

console.log(days|0)