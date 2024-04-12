function numerosArmstrong(numero: number) {
    let digitos = numero.toString();
    let resultado = 0;
    let resultado1 =0 ;
    
    for(let i =0; i < digitos.length; i++){
        let numeral = parseInt(digitos.charAt(i))
        resultado = numeral**digitos.length;
        resultado1+=resultado;
    }
 
    if (resultado1 === numero){
        return("Este eh um numero de Armstrong!")
    } 
    else{
        return("Este nao eh um numero de Armstrong!")
    }
}
module.exports = numerosArmstrong;