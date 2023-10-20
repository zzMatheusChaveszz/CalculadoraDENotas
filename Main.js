const alunos = [
    {
      nome: "Jason",
      notas: [8, 10, 9],
      endereco: "Crystal lake",
    },
    {
      nome: "Freaddy Krueger",
      notas: [7, 8, 7],
      endereco: "Springwood",
    },
    {
      nome: "Michael Myers",
      notas: [4, 7, 3],
      endereco: "Haddonfield",
    },
  ];
  
  function Media(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
  }
  
  alunos.forEach((aluno) => {
    const media = Media(aluno.notas);
    const situacao = media >= 7 ? "aprovado" : "reprovado";
    console.log(`${aluno.nome} Obteve as notas ${aluno.notas.join(', ')} mora em ${aluno.endereco} e teve a média ${media.toFixed(2)}, portanto foi ${situacao}.`);
  });