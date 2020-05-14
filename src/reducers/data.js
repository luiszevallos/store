const INITIAL_STATE = {
  products: [
    {marca: 'Wine', name: 'Amor White', price: 90.89, image: './assets/Untitled-1_470x.jpg'},
    {marca: 'Fila', name: 'Camiseta letter', price: 80.89, image: './assets/camiseta-fila-letter-infantil-img.jpg'},
    {marca: 'Adidas', name: 'Essential 3', price: 60.89, image: './assets/franela-adidas-essentials-3-stripes-hombres-original-s98722-D_NQ_NP_946641-MLV32040482478_092019-F.jpg'},
    {marca: 'Fila', name: 'Letter Infantil', price: 98.89, image: './assets/camiseta-fila-letter-infantil-img.jpg'},
    {marca: 'Verticales', name: 'Franela Negra', price: 34.89, image: './assets/Franela-negra-Verticales.jpg'},
    {marca: 'Adidas', name: 'Originals', price: 13.89, image: './assets/franela-adidas-originals-ninos-original-ab8315-D_NQ_NP_658519-MLV29533522007_032019-F.jpg'},
  ]
}

export default function data(state = INITIAL_STATE, action) {
  switch (action) {
    default:
      return state
  }
}