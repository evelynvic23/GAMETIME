//joguinho que pega palavra digitada pelo o usuário e troca pelo nome dos filmes

function jogar(){
    var palavra = document.getElementById('valor').value;



    
    // prompt('escreva uma palavra para substituir as palavras dos filmes');

    

 
    // document.write("<br><br>*Velozes e " + palavra +
    // "<br> *O mágico de " + palavra +
    // "<br>*11 homens e um " + palavra +
    // "<br>*O " + palavra + " de Oz"+ 
    // "<br> *O " + palavra +  " dos anéis")

    document.getElementById('complet1').innerHTML = palavra;
    document.getElementById('complet2').innerHTML = palavra;
    document.getElementById('complet3').innerHTML = palavra;
    document.getElementById('complet4').innerHTML = palavra;
    document.getElementById('complet5').innerHTML = palavra;
 

   
}




    

  
       
