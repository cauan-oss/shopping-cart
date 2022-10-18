const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', () => {
    const nome = `<ol><li>Item</li></ol>`;
     saveCartItems(nome);
     expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  });
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave cartItems e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    const nome = `<ol><li>Item</li></ol>`;
    const maisUm = `cartItems`;
    saveCartItems(nome);
    expect(localStorage.setItem).toHaveBeenCalledWith(maisUm, nome);
  });

});
