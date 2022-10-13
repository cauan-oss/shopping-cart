const fetchItem = async (itemId) => {
  try {
   const eOFecth = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
   const eOresponse = await eOFecth.json();
   return eOresponse;
  } catch (erro) {
       return erro;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
