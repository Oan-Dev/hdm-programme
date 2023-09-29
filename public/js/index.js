// ! ecrire 1 prog
    /** 
     * nom function transform();
     * @param array 
     * 
     * for each array element
     *  condition : 
     *       if ( === 3 ) {fizz}
     *       else if ( === 5 ) {buzz}
     *       else { nothing}
     */

   const array =  function nbArray(){

        let array = []; 
        for(i = 0; i < array.length; i++) {
             array.push(i);
        }
        return array;
    }
    
    // console.log('creation array de nb : ', array);
    function transform(params) {
        const arg = [...params];
        for ( let i = 0 ; i < arg.length ; i++ ) {
            if(i % 3 === 0) {
            console.log('fizz', arg[i]);
            }
            else if (i % 5 === 0){
                console.log('buzz', arg[i]);
            }
            else {
                console.log('nothing', arg[i]);
            }
    }
}

transform([3,15,7,8, 25]);