// complete the given function

function palindrome(str){
    var len = str.length;
    for(var i=0; i<len ; i++){
        if(str[i] != str[len-1-i]){
            return false;
        }
      else 
      return true;
    }

}
module.exports = palindrome