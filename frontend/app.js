document.addEventListener('DOMContentLoaded', function() {
    const formTarefa = document.getElementById('formTarefa');
    const listaTarefas = document.getElementById('listaTarefas');
  
    // Evento de envio do formulário
    formTarefa.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const titulo = document.getElementById('titulo').value;
      const descricao = document.getElementById('descricao').value;
      const dataInicio = document.getElementById('dataInicio').value;
      const horaInicio = document.getElementById('horaInicio').value;
      const dataFim = document.getElementById('dataFim').value;
      const horaFim = document.getElementById('horaFim').value;
      const prioridade = document.getElementById('prioridade').value;
      const usuario = document.getElementById('usuario').value;
      const categoria = document.getElementById('categoria').value;
  
      // Envio dos dados para o servidor
      fetch('/adicionarTarefa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            titulo: titulo,
            descricao: descricao,
            dataInicio: dataInicio,
            horaInicio: horaInicio,
            dataFim: dataFim,
            horaFim: horaFim,
            prioridade: prioridade,
            usuario: usuario,
            categoria: categoria
          })
        })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          if (data.success) {
            // Limpar o formulário
            formTarefa.reset();
  
            // Atualizar a lista de tarefas
            carregarTarefas();
          } else {
            console.log('Erro ao adicionar tarefa');
          }
        });
    });
  
    // Função para carregar as tarefas
    function carregarTarefas() {
      fetch('/tarefas')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          if (data.success) {
            listaTarefas.innerHTML = '';
  
            // Iterar sobre as tarefas e criar os elementos na lista
            data.tarefas.forEach(function(tarefa) {
              const li = document.createElement('li');
              li.textContent = tarefa.titulo + ' - ' + tarefa.descricao;
              listaTarefas.appendChild(li);
            });
          } else {
            console.log('Erro ao carregar tarefas');
          }
        });
    }
  
    // Função para carregar as opções de usuários e categorias
    function carregarUsuariosECategorias() {
      fetch('/usuariosECategorias')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          if (data.success) {
            const selectUsuario = document.getElementById('usuario');
            const selectCategoria = document.getElementById('categoria');
  
            // Limpar as opções existentes
            selectUsuario.innerHTML = '';
            selectCategoria.innerHTML = '';
  
            // Iterar sobre os usuários e adicionar as opções no select de usuário
            data.usuarios.forEach(function(usuario) {
              const option = document.createElement('option');
              option.value = usuario.id;
              option.textContent = usuario.nome;
              selectUsuario.appendChild(option);
            });
  
            // Iterar sobre as categorias e adicionar as opções no select de categoria
            data.categorias.forEach(function(categoria) {
              const option = document.createElement('option');
              option.value = categoria.id;
              option.textContent = categoria.nome;
              selectCategoria.appendChild(option);
            });
          } else {
            console.log('Erro ao carregar usuários e categorias');
          }
        });
    }
  
    // Carregar as tarefas, usuários e categorias ao carregar a página
    carregarTarefas();
    carregarUsuariosECategorias();
  });
  