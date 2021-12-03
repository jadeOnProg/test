Class TestClass {

	function reverse(number) {
	 	let digit, result = 0

		while( number ){
			digit = number % 10;  
			result = (result * 10) + digit;
			number = number/10|0; 
		}  
	  
		return result
	}

	function fizzBuzz(limit=10) {

		for(var i=1;i<=limit;i++){
		   console.log(((['Fizz'][i%3] || '') + (['Buzz'][i%5] || '')) || i)
		} 
		
	function reverse(number=123456789) {
	 	var reversed = 0;

	 	while (number != 0) {
	  		reversed *= 10;
	  		reversed += number % 10;
	  		number -= number % 10;
	  		number /= 10;
	 	}

	 	return reversed;
	}
	
	function fizzBuzz(limit=10) {
	
		for(int i=1;i<=limit;i++){
		    if((i%3 == 0) && (i%5==0)){
		    	console.log('FizzBuzz');
		    }
		   
		    else if(i%3 == 0) {
		    	console.log('Fizz');
		    }
		        
		    else if(i%5 == 0) {
		    	console.log('Buzz');
		    }     
		}
		 
		return;
	}

	function swap (number, anotherNumber) {
	
		number = number + anotherNumber;
		anotherNumber = number - anotherNumber;
		number = number - anotherNumber;
		
		return { number, anotherNumber };
	  } 
}
