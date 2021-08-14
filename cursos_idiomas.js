let cursos_idiomas = [
    {nome: 'Inglês', carga_horaria: 150, valor: 2000},
    {nome: 'Espanhol', carga_horaria: 120, valor: 1500},
    {nome: 'Alemão', carga_horaria: 140, valor: 2800},
    {nome: 'Russo', carga_horaria: 180, valor: 2500},
    {nome: 'Mandarin', carga_horaria: 200, valor: 4000}
]
//console.log(cursos_idiomas[1].carga_horaria)
for (curso of cursos_idiomas){

    let nome_curso = curso.nome
    let carga_curso = curso.carga_horaria
    let valor_curso = curso.valor

    let preco_hora_curso = valor_curso / carga_curso
    
    console.log('Nome do curso: ' + nome_curso)
    console.log('Carga horária: ' + carga_curso)
    console.log('Valor do Curso: ' + valor_curso)
    if (preco_hora_curso >=15){
        console.log('O preço hora curso é de '+ preco_hora_curso.toFixed(2) + ' com valor superior ou igual a R$ 15,00/hora')
    }else{
        console.log('O preço hora curso é de ' + preco_hora_curso.toFixed(2) + ' com o valor inferior a R$ 15,00/hora')
    }
    console.log('\n')
}
