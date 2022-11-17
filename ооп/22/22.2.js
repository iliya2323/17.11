class Validator {
	isString(str){
	  return(typeof str === 'string');
	}
	isEmail(str) {
    return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
  	}
  	
}

let validator = new Validator();

let res = validator.isString('20')
console.log(res)
res = validator.isEmail('111@111.11')
console.log(res)
