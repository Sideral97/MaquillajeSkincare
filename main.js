// Creé un array de productos con nombre, precio y stock
const productos = [
  
  { nombre: 'Base de maquillaje', precio: 25, stock: 5 },
  { nombre: 'Máscara de pestañas', precio: 13, stock: 10 },
  { nombre: 'Serum facial', precio: 20, stock: 2 },
  { nombre: 'Crema hidratante', precio: 10, stock: 8 },
  { nombre: 'Lápiz labial', precio: 20, stock: 3 },
  { nombre: 'Limpiador facial', precio: 15, stock: 6 }
];

// Otro array para guardar los productos que se meten al carrito
const carrito = [];

// Función para aplicar descuentos a los productos que superan 0 en la caracteristica stock
const aplicarDescuento = (producto) => {
  if (producto.stock > 0) {
    producto.precio -= 5;
    return producto;
  }
  return producto;
};

// Función para agregar algun producto a su carrito
const agregarAlCarrito = (producto) => {
  carrito.push(producto);
  alert(`"${producto.nombre}" Ha sido agregado a su carrito.`);
};

// Para ejecutar al final lo planteado usé un while para que haga algo mientras tal valor sea falso o verdadero, cree la lista de prod. disponibles en un let que son mostrados todos con el forEach recorriendo. Tambien está If como ciclo para ver si se cumplen las conidiciones y que asi salga todo bien o haga la accion que corresponda ingresar un numero de la lista por ejemplo
let agregarProducto = true;
while (agregarProducto) {
  let productosDisponibles = 'Productos disponibles:\n';
  productos.forEach((producto, index) => {
    productosDisponibles += `${index + 1}. ${producto.nombre} - Precio: ${producto.precio}\n`;
  });

  const seleccion = prompt(productosDisponibles + '\nIngrese el número del producto que quiera agregar al carrito:');
  const indiceProducto = parseInt(seleccion) - 1;

  if (isNaN(indiceProducto) || indiceProducto < 0 || indiceProducto >= productos.length) {
    alert('Selección incorrecta. Ingrese un número válido.');
    continue;
  }

  const productoSeleccionado = productos[indiceProducto];

  if (productoSeleccionado.stock === 0) {
    alert('No hay mas productos en stock.');
    continue;
  }

  const productoConDescuento = aplicarDescuento(productoSeleccionado);
  agregarAlCarrito(productoConDescuento);

  productoSeleccionado.stock--;

  const agregarOtro = prompt('¿Deseas agregar otro producto? (si/no)');
  if (agregarOtro.toLowerCase() !== 'si') {
    agregarProducto = false;
  }
}

alert('Tus productos se agregaron con éxito.');