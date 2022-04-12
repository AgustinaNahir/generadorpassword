const body = document.createElement ("body");
const card = document.createElement("div");
const input = document.createElement ("input");
card.classList.add("card");
input.classList.add("input");
document.body.appendChild(card)
card.appendChild(input);

const contenedor = document.createElement("div");
contenedor.classList.add("contenedor");
const h1 = document.createElement("h1");
const textH1 = document.createTextNode ("Personalice su contraseña")
h1.classList.add("titulo");
h1.appendChild(textH1);
card.appendChild(contenedor);
contenedor.appendChild(h1);

const form = document.createElement ("form")
contenedor.appendChild(form);
form.classList.add("form");

const unaFuncion = (title, tipoInput, items, key) => {

    const fieldset = document.createElement('fieldset');
    fieldset.classList.add("box")
    const subtitulo = document.createElement('h2')
    const textsubtitulo = document.createTextNode(title)
    subtitulo.classList.add("subtitulo")
    subtitulo.appendChild(textsubtitulo)
    fieldset.appendChild(subtitulo)
    for(const elem of items) {
        const label = document.createElement("label")
        label.setAttribute ("for", `check-${elem}`)
        label.textContent = `${elem}`
        label.classList.add("label")
    
        const input = document.createElement('input')
        input.setAttribute("type", tipoInput)       
        input.setAttribute("id", `check-${elem}`)
        input.setAttribute("name", `${key}-control`) 
        input.setAttribute("value", `${elem}`)

        input.addEventListener('change', () => {
            generatePassword();
            
        })

        const contenedor = document.createElement("div");
        contenedor.appendChild(input)
        contenedor.appendChild(label)

        fieldset.appendChild(contenedor)
     
    }

    form.appendChild(fieldset);
}

const generatePassword = () => {

    // Tendriamos que obtener de alguna manera todos los inputs para recorrerlos y saber cual esta checked

    // Obtener todos los long
    // Obtener todos los rule (document.getElementsByClassName o document.querySelectorAl('input[name="long-cocntrol"]) )
    // obtener todos los char

    // recorrer las longitudes y ver cual esta checkt

    // 

    console.log('funcion generar password')
}


const long = [12, 9, 6]; //to do
const reglas = ["Solo letras", "Lectura simple", "Todos los caracteres"] 
const caracteres = ["Mayúsculas", "Minúsculas", "Números", "Símbolos"]
unaFuncion("Longitud", 'radio', long, 'long')
unaFuncion("Reglas",'radio', reglas, 'rules')  
unaFuncion("Caracteres", 'checkbox', caracteres, 'chars')


input.value = "shihdnsdifhi"

// poner la palabra carateres despues de los numeros
//subtitulo para cADA BLOQUE
//disabel
//llamar la funcion generar contraseña en el input



