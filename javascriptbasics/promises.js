const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('dont work');
  }, 2000);
});

// apiCall
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

/*
    - enquanto não usamos resolve ou reject, a promise é pendente
    - A promise executa uma função assincrona
    - O próprio javascript usa promises. o JS usa promises quando quer executar tarefas demoradas como uma consulta à um bd.
    - Quando fazemos uma query, uma operação pode durar milisegundos ou segundos, e o JS não pode ficar esperando a resposta do bd, por isso ele usa promises, a fim de não travar a call stack.
    - Quando fazemos uma chamda a uma api, uma api pode udrar 2 segundos, 10 milisegundos, depende da velocidade de sua net e vários outros fatores.
    - Ou seja, para resumir, promises são aplicadas para quando tivermos tarefas mais demoradas, e quando finalizadas queremos usar suas respostas.

    */
async function run() {
  try {
    const resposta = await apiCall;
    console.log(apiCall);
  } catch (error) {
    console.log(error);
  }
}
run();
