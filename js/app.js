const datos = {
    nombre : '',
    telefono:"",
    email : '',
    mensaje : ''
}


const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input',leerTexto);
telefono.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);



formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    //validasrlo
    const {nombre,email,mensaje} = datos;


    if (nombre === ''|| email === ""|| mensaje === ''|| telefono === "") {
        mostrarAlerta('Todos los campos son necesarios',true);
        return;

    }
       

    //enviar correctamente el mensjae
    mostrarAlerta('Se envio correctamente el formulario')


    //enviarlo
    console.log('enviando....');
})


function leerTexto(e) {
    datos[e.target.id] = e.target.value;

    console.log(e.value);
    console.log(datos);


}

function mostrarAlerta(mensaje,error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error')
    }else{
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta);

    //desaparecer en pantalla
    setTimeout(() => {
        alerta.remove();
        },5000);
    
}