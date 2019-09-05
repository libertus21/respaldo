const productos = [
    {nombre: 'Orgullo y prejuicio', precio: 50},
    {nombre: 'Cien años de soledad', precio: 59},
    {nombre: 'Mundo superados', precio: 17},
];

const mutations = {
    anadirProducto: (state, producto) => state.productos.unshift(producto),
};

export default {
    state: productos,
    mutations,
};