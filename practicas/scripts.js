let visibleMenu = false;
//Show / hide menu
function showHideMenu(){
    if(visibleMenu){
        document.getElementById("nav").classList ="";
        visibleMenu = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        visibleMenu = true;
    }
}

function select(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    visibleMenu = false;
}
//Funcion que aplica las animaciones de las habilidades
function habilitiesEffect(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let habilities = document.getElementsByClassName("progress");
        habilities[0].classList.add("javascript");
        habilities[1].classList.add("htmlcss");
        habilities[2].classList.add("photoshop");
        habilities[3].classList.add("illustrator");
        habilities[4].classList.add("drupal");
        habilities[5].classList.add("communication");
        habilities[6].classList.add("trabajo");
        habilities[7].classList.add("creatividad");
        habilities[8].classList.add("dedicacion");
        habilities[9].classList.add("project");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    habilitiesEffect();
} 