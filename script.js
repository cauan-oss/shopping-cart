// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 
/* const { fetchProducts } = require('./helpers/fetchProducts'); */
// Fique a vontade para modificar o código já escrito e criar suas próprias funções!
//
/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const cartItemClickListener = (event) => { 
 event.target.remove();
};

const buttonWiped = () => {
  const wipedButton = document.querySelector('.empty-cart');
   const myOl = document.querySelector('.cart__items');
  wipedButton.addEventListener('click', () => {
    myOl.innerHTML = '';
  });
};
 
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const functionSave = (product) => {
  const retorna = JSON.parse(localStorage.getItem('cartItems'));
  if (retorna !== null) {
    retorna.push(product);
    saveCartItems(JSON.stringify(retorna));
   } else {
     saveCartItems(JSON.stringify([product]));
   }
 }; 

const carItem = document.querySelector('.cart__items');
const myFunction = async () => {
  const getProduct = await fetchProducts('computador');
  const myResults = getProduct.results;
  const selectSection = document.querySelector('.items');
  myResults.forEach((element) => {
    const product = createProductItemElement(element);
    product.lastChild.addEventListener('click', () => {
      const cartProduct = createCartItemElement(element);
      carItem.appendChild(cartProduct);
      functionSave(element);
      });
    selectSection.appendChild(product);
  });
};  

const doGet = () => {
 const getCart = getSavedCartItems();
 if (getCart !== null) {
  const parseJson = JSON.parse(getCart);
  parseJson.forEach((element) => {
   const cartProduct = createCartItemElement(element);
   carItem.appendChild(cartProduct);
  });
 }
};
  
/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
 /* const getIdFromProductItem = (product) => product.querySelector('span.id').innerText; 
 */
/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

window.onload = async () => { 
  await myFunction();
  buttonWiped();
  doGet();
};
