const fetchProducts = async (param) => {
   try { 
    const meuFecth = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param}`);
   const response = await meuFecth.json();
   return response;
 } catch (erro) {
  return erro;
 }
  };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
