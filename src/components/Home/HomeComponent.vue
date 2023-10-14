<template>
    <div class="homeComp flex items-center min-h-screen	w-full justify-around ">
      <div class="text-home w-3/5 h-[80vh] inline z-10">
          <div class="title">
              <h2 class="text-black/[0.95]" >Quilombolas</h2>
          </div>
          <div class="sub-title">
              <h3 class="text-black">Povos Originários</h3>
              <h3 class="text-black">do <span class="brasil text-orange-950">Brasil</span></h3>
          </div>
          <div class="text w-3/5 my-5">
              <p class="text-black">Entre na jornada onde adentramos nas suas origens, localizações principais, suas produções, e mais importante, sua cultura....</p>
          </div>
          <button class="down-button hover:bg-gray-400 text-black font-bold py-2 px-4 rounded inline-flex items-center">
              <span>Saiba Mais</span>
              <i class="material-symbols-outlined ">expand_more</i>            
          </button>
      </div>
      <div class="img-home">
          <img src="../../assets/mulher-quilombola.svg" alt="Mulher Quilombola">
      </div>
      
      <div class="circulos">
          <div class="circulo2">
              <svg xmlns="http://www.w3.org/2000/svg" width="147" height="147" viewBox="0 0 147 147" fill="none">
                  <circle cx="73.5" cy="73.5" r="73.5" fill="#4A2F2F"/>
              </svg>
          </div>
          <div class="circulo1">
      
          </div>
          <div class="circulo3">
              <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 147 147" fill="none">
                  <circle cx="73.5" cy="73.5" r="73.5" fill="#4A2F2F"/>
              </svg> 
          </div>
      </div>
    </div>
</template>
  
<script>
  
  export default {
    name: 'HomeComponent',
    methods: {

    }
  }
  </script>
  
<style scoped lang="less">

.text-home{

    .title {
        h2 {
            font-size: calc(5em + 2vw);
        }
    }
    .sub-title{
        h3{
            font-size: 2em;
        }

    }

    .text{
        p {
            font-size: 24px;
        }
    
    }

    a{
        text-decoration: none;
    }

    .down-button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;

        padding: 10px;
        border-radius: 30px;
        border: 1px solid #000000;
        box-shadow: 1px 1px 10px 1px #000;
        transition: all 1s linear;

        overflow: hidden;
        cursor: pointer;
        i{  

            color: #000;
            animation: heartBeat;
            animation-duration: 2s;
            animation-iteration-count: infinite;
        }

        span{
            color: #000;
        }
    }

    .down-button:hover{
        background-color: #4A2F2F;
    }
    
    .down-button:active{
        background-color: #6d4a4a;
        transform: scale(0.9);
    }
}

.img-home{
    display: flex;
    align-items: flex-end;
    z-index: 1;
    img{
        width: 75vh;
        height: auto;
        position: absolute;
        bottom: 0px;
        right: 0px;
    }
}

.circulos
{   
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: hidden;
}
.circulo1
{

    position: absolute;
    left: 50%;
    right: 0;
    width: 60vh;
    height: 60vh;
    border-radius: 50%;
    background: #4A2F2F;
    animation: moveUpDown 4s ease-in-out infinite;

}
.circulo2
{
    position: absolute;
    left: 40%;
    top: 60%;
    animation: moveUpDown 2.5s ease-in-out infinite;
}
.circulo3
{
    animation: moveUpDown 2.5s ease-in-out infinite;
    position: absolute;
    left: 0;
    bottom: 0;
}

@keyframes moveUpDown {
    0%, 100% {
      transform: translateY(0); /* Inicial e estado final: sem deslocamento vertical */
    }
    50% {
      transform: translateY(-1.25rem); /* Estado intermediário: desloca 20px para cima */
    }
}

.dark{
    .img-home{
        img{
            opacity: 0.9;
        }
    }
    .title{
        
        h2{

            color: #ffffff;
        }
    }

    .sub-title{
        h3{
            
            color: #ffffff;
        }
        .brasil {
            color: rgb(116, 64, 64);
        }
    }

    .text{
        p{
            color: #ffffff;
        }
    }

    .down-button{
        border: 1px solid #ffffff;
        
        i{  
            color: #ffffff;
        }

        span{
            color: #ffffff;
        }
    }

    @media screen and (max-width: 600px){
        .circulo1{
            opacity: .5;
        }
        .circulo3{
            opacity: .5;
        }
    }
}

@media screen and (max-width: 1000px){

    .img-home{
        img{
            width: 50vh;
        }
    }

    .text-home{
        height: 85vh;
        .title{
            h2{
                font-size: calc(3em + 2vw);
            }
        }

        .sub-title{
            h3{
                font-size: 1.5em;
            }
        }

        .text{
            width: 70%;
            p{
                font-size: 25px;
            }
        }
    }

    .down-button{
        i{  
            font-size: 20px;
        }
        
        span{
            font-size: 15px;
        }
    }
}    

@media screen and (max-width: 600px){

    .homeComp{
        justify-content: start;
    }

    .img-home{
        position: absolute;
        right: 0;
        bottom: 0;
        overflow: hidden;
        img{
            width: 50vh;
            position: relative;
            left: 10%;
        }
    }

    
    .text-home{
        height: 80vh;
        margin-left: 10px;
        justify-content: flex-start;
        .title{
            h2{
                text-align: center;
               font-size: calc(3em + 2vw);
            }
        }

        .sub-title{
            h3{
                font-size: 1.5em;
            }
        }
        .text{
            width: 80%;
            p{
                font-size: 18px;
            }
        }
    }

    .circulo1{
        opacity: .8;
    }
    .circulo3{
        opacity: .8;
    }
    .circulo2{
        display: none;
    }

    .down-button{
        i{  
            font-size: 18px;
        }
        
        span{
            font-size: 12px;
        }
    }
}    
@media screen and (max-width: 300px){

    .homeComp{
        justify-content: start;
    }

    
    .text-home{
        .title{
            h2{
                text-align: center;
               font-size: calc(2em + 2vw);
            }
        }

        .sub-title{
            h3{
                font-size: 1em;
            }
        }

        .text{
            width: 70%;
            p{
                font-size: 15px;
            }
        }
    }

    .down-button{
        i{  
            font-size: 15px;
        }
        
        span{
            font-size: 10px;
        }
    }
}    
  
  </style>