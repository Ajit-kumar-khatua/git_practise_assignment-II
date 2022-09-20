function prime(num){
	for(let i=0;i<=num;i++){
		if(i%num){
			return i;
		}
	}
}

let x=prime(19)
console.log(x);