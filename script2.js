document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');
    let total = 0;
  
    // Função para adicionar um item ao carrinho
    function addToCart(productInfo) {
      // Criar elemento de item do carrinho
      const cartItem = document.createElement('li');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span>${productInfo.name}</span>
        <span>R$ ${productInfo.price.toFixed(2)}</span>
        <button class="remove-from-cart">Remover</button>
      `;
  
      // Adicionar item ao carrinho
      cartItemsList.appendChild(cartItem);
  
      // Atualizar o total do carrinho
      total += productInfo.price;
      cartTotal.innerText = `R$ ${total.toFixed(2)}`;
  
      // Adicionar evento de remover ao botão
      const removeButton = cartItem.querySelector('.remove-from-cart');
      removeButton.addEventListener('click', function() {
        cartItemsList.removeChild(cartItem); // Remove o item do DOM
        total -= productInfo.price; // Subtrai o preço do total
        cartTotal.innerText = `R$ ${total.toFixed(2)}`; // Atualiza o total exibido
      });
    }
  
    // Adicionar evento ao botão "Limpar Carrinho"
    clearCartButton.addEventListener('click', function() {
      // Exibir mensagem de confirmação
      if (confirm('Você tem certeza que deseja limpar o carrinho?')) {
        // Se o usuário confirmar, limpar o carrinho
        cartItemsList.innerHTML = '';
        // Reiniciar o total para R$ 0,00
        total = 0;
        cartTotal.innerText = 'R$ 0,00';
      }
    });
  
    // Adicionar evento de clique aos botões "Adicionar ao Carrinho"
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const product = button.parentNode;
        const productInfo = {
          name: product.querySelector('h3').innerText,
          price: parseFloat(product.querySelector('p').innerText.replace('R$', '').trim())
        };
  
        addToCart(productInfo); // Adiciona o produto ao carrinho
      });
    });
  });
