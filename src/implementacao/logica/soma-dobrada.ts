function somaDobrada(a: number, b:number){
    if (a===b){
        return((a+b)*2);
    }
    else if(a<1 || b < 1){
        return( -1);
    }
    else{
        return( a + b);
    }
}
module.exports = somaDobrada;