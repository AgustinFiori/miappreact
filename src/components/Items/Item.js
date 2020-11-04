import React from 'react'

const producto = {
    numero:1,
    nombre:"Combo Hamburguesa",
    precio:"$450",
    delivery:"Si"
}

let Promesa = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(producto);
}, 2000);
});

    Promesa.then((producto) => {
        console.log(producto);
    
    });

export default Promise