//console.log('Hola desde jasvascript')

//DOM
/*
//seleccionar el primer elemento aunque existan muchos con las mismas carcateristicas
let container = document.querySelector('.container');
console.log(container)

//seleccionar todos los elementos con las mismas carcateristicas
let links = document.querySelectorAll('a');

links.forEach(function(links){
    console.log(links)
})*/

/*
let celdas = document.querySelectorAll('td');

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log('Hiciste click')
    })
})*/

/*
let celdas = document.querySelectorAll('td');

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this)
    })
})*/

//----------------DESARROLLO-------------------
//Obtener los elementos de la clase .close

let link = document.querySelectorAll('.close')

//Recorrerlos

link.forEach(function(link){

    //Agregar une evento click a cada uno de ellos
    link.addEventListener('click',function(ev){
        ev.preventDefault()  //esto evita la ejecucion del comportamiento del evento por defecto y evita que este se ejecute
        let content = document.querySelector('.content')
        //Quitarle las clases de animacion que ya tiene
        content.classList.remove('animate__fadeInDown')
        content.classList.remove('animate__animated')
        //Agregar clases para animar su salida
        content.classList.add('animate__fadeOutUp')
        content.classList.add('animate__animated')

        //enviar a la otra página despues de terminar la animación
        //con settimeout retrasamos el redireccionamiento
        setTimeout(() => {
            location.href = '/'
        }, 600); // 1000 es un segundo
        

        return false
    })

})


/*
//cómo quitar y agregar clases a un elemnto en js

let icons = document.querySelectorAll('i')

icons.forEach(function(icons){
    icons.classList.remove('fa-star')//quitamos la clase a las estrellas
})*/




