// Funciones callback

programaPrincipal(); 
function programaPrincipal()
    {
    console.log ("programaPrincipal: comenzando"); 
    // Invocamos un proceso y, cuando termine, que llame a A
    funProceso(funCallBack_A); 
    console.log ("programaPrincipal: haciendo otra cosa"); 
    funProceso(funCallBack_B); 
    console.log ("programaPrincipal: terminando"); 
    }

function funCallBack_A(todoCorrecto)
    {
    console.log ("funCallBack A: hemos terminado" + todoCorrecto);  
    }

function funCallBack_B(todoCorrecto)
    {
    if (todoCorrecto)
    console.log ("funCallBack: hemos terminado");  
    else console.log ("funCallBack B: algo ha ido mal"); 
    }

// Proceso independiente (jQuery, Ajax, módulo propio)
function funProceso(funDeAviso)
    {
    console.log ("funProceso: comenzando proceso"); 
    let todoOk = true; 
    funDeAviso(todoOk); 
    console.log ("funProceso: terminando proceso"); 
    }