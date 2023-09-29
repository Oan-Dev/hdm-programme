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

	
    function transform(params) {
        const arg = [...params];
        for ( let i = 0 ; i < arg.length ; i++ ) {
			if (arg[i] % 15 === 0 ) {
				console.log('fizzbuzz', arg[i]);
			}
            else if(arg[i] % 3 === 0) {
				console.log('fizz', arg[i]);
            }
            else if (arg[i]% 5 === 0){
				console.log('buzz', arg[i]);
            }
            else {
                console.log('nothing', arg[i]);
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



