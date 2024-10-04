// Selección de elementos
    var seleccion = document.getElementById("seleccion");
    var colorf = document.getElementById("colorf");
    var nombreInput = document.getElementById("nombreInput");
    var mensajeInput = document.getElementById("mensajeInput");
    var colorTexto = document.getElementById("colorTexto");
    var tarjeta = document.getElementById("tarjeta");
    var nombre = document.getElementById("nombre");
    var arriba = document.getElementById("arriba");
    var mensaje = document.getElementById("mensaje");
    var img = document.getElementById("img");
    var mostrar = document.getElementById("mostrar");

    // Imágenes dinámicas
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");

    // Variables para almacenamiento
    let imgSeleccionada = "";

    // Objeto que contiene las rutas de las imágenes por categoría
    const imagenesPorCategoria = {
        cump: ["./img/283709-crear-tarjetas-felicitar-cumpleanos.jpg", "./img/composition-birthday-cupcake-on-pink-600nw-1564602874.jpg", "./img/depositphotos_41828583-stock-photo-retro-vintage-style-cupcake-fairy.jpg"],
        navidad: ["./img/adornos de navidad.jpg", "./img/istockphoto-1804975122-612x612.jpg", "./img/media-docena-de-datos-curiosos-relacionados-con-la-navidad.jpg"],
        dmama: ["./img/B4K6OZNWFVBWJMWGZ4CRNZEAJY.jpg", "./img/f.elconfidencial.com_original_10a_7be_4fe_10a7be4fedc8df42d65f4763ffa086ac.jpg", "./img/f.elconfidencial.com_original_811_75b_bc1_81175bbc16c177e6a4ee6e8aed7271d0.jpg"]
    };

    // Función para cambiar las imágenes según la categoría seleccionada
    seleccion.addEventListener("change", () => {
        const categoria = seleccion.value;

        if (categoria in imagenesPorCategoria) {
            // Cambiar las imágenes
            img1.src = imagenesPorCategoria[categoria][0];
            img2.src = imagenesPorCategoria[categoria][1];
            img3.src = imagenesPorCategoria[categoria][2];
        } else {
            // Si no hay categoría seleccionada, poner imágenes vacías o predeterminadas
            img1.src = "";
            img2.src = "";
            img3.src = "";
        }
    });

    // Cambiar imagen seleccionada
    img1.addEventListener("click", () => {
        imgSeleccionada = img1.src;
        img.src = imgSeleccionada;
    });

    img2.addEventListener("click", () => {
        imgSeleccionada = img2.src;
        img.src = imgSeleccionada;
    });

    img3.addEventListener("click", () => {
        imgSeleccionada = img3.src;
        img.src = imgSeleccionada;
    });

    // Mostrar tarjeta con datos ingresados
    mostrar.addEventListener("click", function() {
        nombre.innerHTML = nombreInput.value;
        nombre.style.color = colorTexto.value;

        mensaje.innerHTML = mensajeInput.value;

        // Cambiar el color de fondo
        tarjeta.style.backgroundColor = colorf.value;

        // Cambiar el mensaje dependiendo de la temática seleccionada
        switch (seleccion.value) {
            case "cump":
                arriba.innerHTML = "¡Feliz Cumpleaños!";
                break;
            case "navidad":
                arriba.innerHTML = "¡Feliz Navidad!";
                break;
            case "dmama":
                arriba.innerHTML = "¡Feliz Día de las Madres!";
                break;
            default:
                arriba.innerHTML = "";
                break;
        }
    });
