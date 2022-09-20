function prime(number){
	let factor=0
	for(let i=0;i<=number;i++){
		if(i%number){
			factor++;
		}
	}
	if(factor==2){
		return true;
	}
	return false;
}

let answer=prime(19)
 if(answer==true){
 	console.log("Prime Number");
 }else{
 	console.log("Not a Prime Number")
 }