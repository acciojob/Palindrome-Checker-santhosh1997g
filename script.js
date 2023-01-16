// complete the given function

function palindrome(str){
	str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	if(str.length == 0){
		return true
	}else{
		let i = 0
	let j = str.length - 1
	while(i<j){
		if(str[i] != str[j]){
			return false
		}else{
			i++;
			j--;
		}
	}
	return true
	}
	
}
module.exports = palindrome