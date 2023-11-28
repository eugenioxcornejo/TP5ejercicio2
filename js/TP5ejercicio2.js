

class Persona {
    constructor(
        nombreParam,
        edadParam,
        dniParam,
        sexoParam,
        
        pesoParam,
        alturaParam,
        nacimientodiaParam,
        nacimientomesParam,
        nacimientoanoParam,


    ) {
        this.nombre = nombreParam;
        this.edad = edadParam;
        this.dni = dniParam;
        this.sexo = sexoParam;
        
        this.peso = pesoParam;
        this.altura = alturaParam;
        this.fecha_nacimientodia = nacimientodiaParam;
        this.fecha_nacimientomes = nacimientomesParam;
        this.fecha_nacimientoano = nacimientoanoParam;

    }

     naciemientoParam = document.getElementById('año');

    mostrarGeneracion() {

        if(this.fecha_nacimientoano>=1994 && this.fecha_nacimientoano<2010){
            alert(' Generacion Z  - caracteristica Irreverencia🤪')
        } else if (this.fecha_nacimientoano==2010){
            alert(' Generacion Z  - caracteristica Irreverencia🤪')
        }
        else if(this.fecha_nacimientoano>=1981 && this.fecha_nacimientoano<1993){
            alert(' Generacion Y  - caracteristica Frustracion 😭')
        } else if (this.fecha_nacimientoano==1993){
            alert(' Generacion Y  - caracteristica Frustracion 😭')
        }
        else if(this.fecha_nacimientoano>=1969 && this.fecha_nacimientoano<1980){
            alert(' Generacion X  - caracteristica Obsesion por el exito 😎')
        } else if (this.fecha_nacimientoano==1980){
            alert(' Generacion X  - caracteristica Obsesion por el exito 😎')
        }
        else if(this.fecha_nacimientoano>=1949 && this.fecha_nacimientoano<1968){
            alert(' Generacion BabyBoom  - Paz y explosion demografica 🤑')
        } else if (this.fecha_nacimientoano==1968){
            alert(' Generacion BabyBoom  - Paz y explosion demografica 🤑')
        }
        else if(this.fecha_nacimientoano>=1930 && this.fecha_nacimientoano<1948){
            alert(' Generacion Silent Generation - Auteridad 😐')
        } else if (this.fecha_nacimientoano==1948){
            alert(' Generacion Silent Generation - Auteridad 😐')
        }
    }
esMayorDeEdad (){
    
}

mostrarDatos () {
    document.write(`Nombre:${this.nombre},edad:${this.edad}, DNI:${this.dni}, sexo:, peso: ${this.peso}, altura:${this.altura}, Fecha de nacimiento ${this.fecha_nacimientodia}/${this.fecha_nacimientomes}/${this.fecha_nacimientoano} `)
}

}
const boton =() =>{ 
const personaingresada = new Persona (
    document.querySelector('#nombre').value,
    document.getElementById('edad').value,
    document.querySelector('#dni').value,
    document.getElementById('sexo').value,
    document.getElementById('peso').value,
    document.getElementById('altura').value,
    document.getElementById('dia').value,
    document.getElementById('mes').value,
    document.getElementById('ano').value,
)

personaingresada.mostrarGeneracion();
personaingresada.mostrarDatos();
personaingresada.esMayorDeEdad();}
