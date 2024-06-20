document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const enviarBtn = document.getElementById("enviarBtn");
  const aguardePopup = document.getElementById("aguardePopup");
  const sucessoPopup = document.getElementById("sucessoPopup");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Verifica se o campo de email contém o símbolo "@"
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    
    if (!emailValue.includes('@')) {
      alert('Por favor, insira um endereço de email válido.');
      return; // Impede o envio do formulário se o email não for válido
    }

    // Exibir balão de "Aguarde..." no topo da tela
    aguardePopup.style.top = "0";
    aguardePopup.style.opacity = "1";

    // Esconder o balão de "Aguarde..." após 3 segundos
    setTimeout(function() {
      aguardePopup.style.opacity = "0";
    }, 3000);

    // Simular um atraso para a mensagem de sucesso (apenas para demonstração)
    setTimeout(function() {
      // Exibir balão de "Mensagem Enviada com Sucesso!" no topo da tela
      sucessoPopup.style.top = "0";
      sucessoPopup.style.opacity = "1";

      // Esconder o balão de sucesso após mais 3 segundos
      setTimeout(function() {
        sucessoPopup.style.opacity = "0";
      }, 3000);
    }, 4000); // Tempo simulado para a mensagem ser enviada com sucesso
  });
});
