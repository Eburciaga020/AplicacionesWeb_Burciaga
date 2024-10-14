// Obtener el valor del parámetro URL
const ParametroURL = new URLSearchParams(window.location.search);
const id_producto = parseInt(ParametroURL.get('id_producto'), 10);

// Datos de los productos
const productos = {
    1: {
        nombre: "IPHONE 16",
        imagen: "assets/imagenes/Producto1.jpg",
        descripcion: "Iphone de ultima generacion",
        precio: "20,000"
    },
    2: {
        nombre: "APPLE WATCH",
        imagen: "assets/imagenes/Producto2.jpg",
        descripcion: "Apple watch de ultima generacion",
        precio: "$10,000"
    },
    3: {
        nombre: "AIRPODS",
        imagen: "assets/imagenes/Producto3.jpg",
        descripcion: "Airpods de ultima generacion",
        precio: "6,000"
    },
};

// Actualizar etiquetas de texto HTML según el producto
if (productos[id_producto]) {
    document.getElementById("nombre_producto").textContent = productos[id_producto].nombre;
    document.getElementById("img_pto").src = productos[id_producto].imagen;
    document.getElementById("descripcion_pto").textContent = productos[id_producto].descripcion;
    document.getElementById("precio_pto").textContent = productos[id_producto].precio;
} else {
    document.getElementById("nombre_producto").textContent = "El producto no existe";
    document.getElementById("img_pto").style.display = "none";
    document.getElementById("descripcion_pto").textContent = "NULL";
    document.getElementById("precio_pto").textContent = "NULL";
}
