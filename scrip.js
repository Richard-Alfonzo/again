const CALCULAR = document.getElementById('calcular')
const error = document.getElementById('error')
const VOLUMEN = document.getElementById('volumenD')
const MANTENIMIENTO = document.getElementById('flu')
const mantmasMant2 = document.getElementById('man')
const INPUT = document.getElementById("peso")

const CASO1 = 1;
const CASO2 = 2;
const CASO3 = 3;
const CASO4 = 4;

INPUT.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        const DATO = document.getElementById('peso').value
    if (DATO > 0) {
        calcCompleto(DATO);
    }
    else {
        mensajesError();
    }
    }
    
})

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    if (DATO > 0) {
        calcCompleto(DATO);
    }
    else {
        mensajesError();
    }
})
function calcFlujo(peso) {
    let flujo;
    let aux;
    if (peso <= 10) {
        flujo = peso * 100;
        metodoCalc(CASO1);
    }

    else if (peso > 10 && peso <= 20) {
        aux = peso - 10;
        flujo = (aux * 50) + (1000);
        metodoCalc(CASO2);
    }
    else if (peso > 20 && peso < 30) {
        aux = peso - 20;
        flujo = (aux * 20) + (1500);
        metodoCalc(CASO3);
    }

    else {
        let sc = ((peso * 4) + 7) / (peso + 90)
        flujo = sc * 1500
        metodoCalc(CASO4);
    }
    return Math.round(flujo)
}
function metodoCalc(caso) {
    switch (caso) {
        case 1:
            L1.innerHTML = "Se calcula por cada Kilogramo 100cc"
            L2.innerHTML = "El mantenimiento es el flujo divido en 24horas"
            L3.innerHTML = "m+m/2 ; es el mantenimiento mas su mitad dividido en 2"
            break
        case 2:
            L1.innerHTML = "Por cada Kilogramo 100cc hasta los primeros 10"
            L2.innerHTML = "Los Kilogramos restantes se calcula 50cc por cada uno"
            L3.innerHTML = "Mantenimiento es el flujo divido en 24horas"
            break
        case 3:
            L1.innerHTML = "Por cada Kilogramo 100cc hasta los primeros 10"
            L2.innerHTML = "Por cada kg mayor a 20kg y menor de 30kg son 20cc "
            L3.innerHTML = "Mantenimiento es el flujo divido en 24horas"
            break
        case 4:
            L1.innerHTML = "Metodo Superficie Corporal"
            L2.innerHTML = "Flujo se calcula por Superficie Corporal multiplicado por 1500"
            L3.innerHTML = "Mantenimiento es el flujo divido en 24horas"
            break
    }
}
function mensajesError() {
    error.style.display = 'block'
    mantmasMant2.style.display = 'none'
    MANTENIMIENTO.style.display = 'none'
    VOLUMEN.style.display = 'none'
}
function mensajesResultado() {
    error.style.display = 'none'
    mantmasMant2.style.display = 'block'
    MANTENIMIENTO.style.display = 'block'
    VOLUMEN.style.display = 'block'
}
function calcCompleto(peso) {
    let flujo = calcFlujo(peso);
    let mantenimiento = flujo / 24;
    let mPlusm = mantenimiento * 1.5;
    VOLUMEN.innerHTML = flujo + 'cc'
    MANTENIMIENTO.innerHTML = Math.round(mantenimiento) + ' cc/hr'
    mantmasMant2.innerHTML = 'm+m/2 ' + Math.round(mPlusm) + ' cc/hr'
    mensajesResultado();
}
    window.sr = ScrollReveal();
    sr.reveal('.contenido', {
        duration:3000,
        origin:'boton'
    });

    window.sr = ScrollReveal();
    sr.reveal('.caja', {
        duration:3000,
        origin:'boton'
      
    });

    window.sr = ScrollReveal();
    sr.reveal('.panel', {
        duration:3000,
        origin:'boton'
      
    });
