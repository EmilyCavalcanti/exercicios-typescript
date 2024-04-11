function apuraVotacao(votos: Array<number>) {

    let contador1=0;
    let contador2=0;
    let contador3=0;

    for(let i=0; i< votos.length; i++)
        if(votos[i] === 1){
            contador1++
        }
        else if (votos[i] === 2){
            contador2++
        }
        else if (votos[i] === 3){
            contador3++
        } 
    if(contador1 > contador2 && contador1 > contador3){
        return ("Vencedor: 1")
    }
    
   else if(contador2 > contador1 && contador2 > contador3){
        return ("Vencedor: 2")
    } 

    else if(contador3 > contador1 && contador3>contador2){
        return ("Vencedor: 3")
    }    
    else {
        return ("Empate")
    }    
}
module.exports = apuraVotacao;