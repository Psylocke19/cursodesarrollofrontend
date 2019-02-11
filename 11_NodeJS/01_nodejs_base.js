"use strict"; // Para usar JavaScript en modo estricto

let variable = 3434; 
console.log ("Var " + variable); 
listar(); 

function listar()
    {
    for (let i = 0; i < process.argv.length; i++)
        {
        console.log ("Parámetro: " + i + " - " + process.argv[i]);    
        }
    }

console.log (process.cpuUsage()); 
console.log (process.cwd()); 