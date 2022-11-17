class Validator {
	isString(str){
	  return(typeof str === 'string');
	}
}

let validator = new Validator();

let res = validator.isString('20')
console.log(res)
