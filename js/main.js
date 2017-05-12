function validarForm()
{
	//alert("Validando");
	var verificar = true;
	var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	var expRegEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	var formulario = document.getElementById("contacto-frm");
	var nombre = document.getElementById("nombre");
	var email = document.getElementById("email");
	var asunto = document.getElementById("asunto");

	if(!nombre.value)
	{
		alert("El campo nombre es requerido");
		nombre.focus();
		verificar = false;
	}
	else if(!expRegNombre.exec(nombre.value))
	{
		alert("El campo nombre solo acepta letras y espacios en blanco");
		nombre.focus();
		verificar=false;
	}
	
	else if(!email.value)
	{
		alert("El campo email es requerido");
		email.focus();
		verificar = false;
	}
	else if(!expRegEmail.exec(email.value))
	{
		alert("El campo email no es valido");
		email.focus();
		verificar=false;
	}
	
	if(verificar)
	{
		alert("Se ha enviado el formulario");
		document.contacto_frm.submit();
	}
}

function limpiarForm()
{
	alert("Limpiando");
	document.getElementById("contacto-frm").reset();
}

window.onload = function()
{
	var botonEnviar, botonLimpiar;
	botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.onclick = limpiarForm;

	botonEnviar = document.contacto_frm.enviar_btn;
	botonEnviar.onclick = validarForm;
}