document.getElementById("formLogin").addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password= document.getElementById("password").value;
    let message = ""
    let alerType = ""

    if(email === "" || password === ""){
        alerType = "warning"
    message = 'Por favor completa todos los campos.'
    }
    else if (email === "prueba@gmail.com" && password === "123456"){
        alerType = "success"
        message = 'Inicio de secion exitoso'
    }
    else{
        alerType = "danger"
        message = "correo o contraseña incorrectos."
    }

    let alert = `
       <div class="alert alert-${alerType} alert-dismissible fade show" role="alert">
           ${message}
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>
         `;
    document.getElementById("alert").innerHTML = alert;
})

