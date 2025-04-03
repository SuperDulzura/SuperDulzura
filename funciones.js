function mensaje()
{
    var usuario;
    var estilo;
    usuario = document.getElementById("psdContraseña");
    estilo = document.getElementById("txtVerContraseña").className;

    if(usuario.type == "text" && estilo == "colorRojo"){
        usuario.type = "password";
        document.getElementById("txtVerContraseña").className = "colorAzul";
    }
    else {
        usuario.type = "text";
        document.getElementById("txtVerContraseña").className = "colorRojo";
    }
}

function enviar()
{
    var usuario;
    usuario = document.getElementById("txtNombre").value;

    alert("Recibimos tu mensaje "+usuario+", te contactamos en la brevedad.");
}

function ingresar()
{
    var usuario;
    usuario = document.getElementById("txtUsuario").value;

    alert("Has iniciado sesión "+usuario);
}

function registrar()
{
    var nombre;
    nombre = document.getElementById("txtNombre").value;

    alert(nombre+", te has registrado correctamente");
}

function restablecer()
{
    var correo;
    correo = document.getElementById("txtCorreo").value;

    alert("Enviamos un mensaje a "+correo+". Revisa tu correo.");
}

function carrito()
{
    alert("El producto se añadió al carrito.");
}