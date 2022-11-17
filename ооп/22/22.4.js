class Validator {
	isString(str){
	  return(typeof str === 'string');
	}
	isEmail(str) {
    return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
  	}
  	isDomain(str) {
    return ((str.indexOf('.com') !== -1) || (str.indexOf('.ru') !== -1))
  	}
  	isNumber(str){
	  return(typeof str === 'number');
	}
}

let validator = new Validator();

let res = validator.isString('20')
console.log(res)
res = validator.isEmail('111@111.11')
console.log(res)
res = validator.isDomain('111.com')
console.log(res)
res = validator.isNumber(20)
console.log(res)