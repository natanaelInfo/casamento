


//Abaixo divs que quero alterar, header, container, menu nav a 
const header1 = document.querySelector('header');
const container1 = document.querySelector('.container1');

const $menuNava = document.querySelectorAll('.menu-nav a');




window.addEventListener('scroll', mudarHeader, false);

function mudarHeader (){/*altera o header e a tag do menu */
  
    if(window.pageYOffset >= 200 && !header1.classList.contains('change-cor')){
       
        header1.classList.add('change-cor');
        container1.classList.add('change-cor');
      
        /*adicionando cor ao link A*/
      $menuNava.forEach(itensA =>{
  
        itensA.style.color ='black';
     
     });
    }else if(window.pageYOffset < 200 && header1.classList.contains('change-cor')){
        header1.classList.remove('change-cor');
        container1.classList.remove('change-cor');
      /*removendo cor ao link A */
      $menuNava.forEach(itensA =>{
  
        itensA.style.color ='blue';
     
     });
    }
}


/*funcao no clique para ir para a sections*/

const $navegacao1  = document.querySelectorAll('.menu-nav a');

/*verificar se foi clicado abaixo*/

$navegacao1.forEach(item =>{
  
    item.addEventListener('click', scrollToId);
 
 });

 /**funcao */
function scrollToId(event){/*funcao para ir para a section */
    event.preventDefault();
    /**abaixo pego o target, a botÃ£o em sim o nome do botÃ£o */
     const element = event.target;
    
     /*abaixo pego o href o atributo, Ã© a referÃªncia do item que quero falar*/
    const id = element.getAttribute('href');
    console.log(id);
   

    /**passo abaixo o id  */
    const intro1 = document.querySelector('.intro');
   
    
    const to = document.querySelector(id).offsetTop;
   
    if(id === '#informacao'){
          
            window.scroll({
            top:intro1.offsetHeight,
            left:0,
            behavior: "smooth",
         
         
      });
    }else if(id === '#fotos'){
       
       
        window.scroll({
           
            top:to,
            left:0,
            behavior: "smooth",
        });
    
    }else if(id === '#contato'){
        window.scroll({
           
            top:to,
            left:0,
            behavior: "smooth",
        });
    }
}


/*botão subir aparecer */

const btnSubir1 = document.getElementById('btnSubir');//*1 mostrar butão */

window.addEventListener('scroll', showButton,false);

function showButton (){
  
 /*a distancia que o meu scrool está do topo */
  
    if( window.pageYOffset >= 700 && !btnSubir1.classList.contains('mostrarButton')){
        btnSubir1.classList.remove('button1');
        btnSubir1.classList.add('mostrarButton');
    }
    
   else if(window.pageYOffset < 700 && btnSubir1.classList.contains('mostrarButton')){
        btnSubir1.classList.add('button1');
        btnSubir1.classList.remove('mostrarButton');
    }
    
}

/*evento clique para pagína subir  */

btnSubir1.addEventListener('click', subirTopo, false);

function subirTopo(){

    window.scrollTo({
        top:2,
        left:0,
        behavior:'smooth'})
}

/*funcao texto cair*/

const textoInformacoes =  document.getElementById('informacao');


window.addEventListener('scroll',mostrarDiv, false);

function mostrarDiv(){
  
    if( window.pageYOffset >=150 && !textoInformacoes.classList.contains('informacoes')){
        textoInformacoes.classList.remove('informacoes1');
        textoInformacoes.classList.add('informacoes');
    }
}


