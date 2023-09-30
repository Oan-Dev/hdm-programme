	// ! ecrire 1 prog
    /** 
     * nom function transform();
     * @param array 
     * 
     * for each array element
     *  condition : 
			 if (arg[i] % 3 === 0 && arg[i] % 5=== 0) {fizzbuzz}
     *       else if ( arg[i] === 3 ) {fizz}
     *       else if (arg[i]=== 5 ) {buzz}
     *       else { nothing}
     */

	
    function transform(params) {
        const arg = [...params]; //the local varible fot the for looping 
        for ( let i = 0 ; i < arg.length ; i++ ) {
				if (arg[i] % 15 === 0 ) {//  the 3 && 5	
					console.log('fizzbuzz');
				}
				else if(arg[i] % 3 === 0) { // only 3
					console.log('fizz');
				}
				else if (arg[i]% 5 === 0){ // only 5
					console.log('buzz');
				}
				else { // all other cases
					console.log('nothing');
				}
    	}
	}
console.log('transform argument tab 1 : ');
transform([3,5]);
console.log('transform argument tab 2 : ');
transform([0,15]);
console.log('transform argument tab 3 : ');
transform([1, 2, 4, 5]);
console.log('transform argument tab 4 : ');
transform([115, 90, 99, 100, 5421, 667]);
console.log('transform argument tab 5 : ');
transform([]);



