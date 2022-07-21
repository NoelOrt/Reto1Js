
const numbers={};
function addnumbers(){
    let num1=0;
    let num2
    num1=prompt('Introduce el primer numero entre 1 y 50');
    num2=prompt('Introduce el segundo numero entre 1 y 50');
    this.num1=Number(num1);
    this.num2=Number(num2);
    
}
var calc=new addnumbers();
while((calc.num1<1)|(calc.num1>50)|(calc.num2<1)|(calc.num2>50)){
    alert('Los numeros introducidos('+calc.num1+', '+calc.num2+') estan fuera de rango.');
    const calculo=new addnumbers();
    calc=calculo;
    console.log(calc.num1);
}

alert('Resumen de datos introducidos = '+calc.num1 +','+calc.num2);
let suma=calc.num1+calc.num2;
const esPrimo = numero => {
	
	if (numero == 0 || numero == 1 || numero == 4) return 'no es primo';
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return 'no es primo';
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return 'si es primo';
}
const esPar = num => {
    if(num%2==0){
        
        return 'es par';
    
    }else{
        
        return 'no es par';;
        
    }
}



let num1Prim= esPrimo(calc.num1);
let num2Prim= esPrimo(calc.num2);
let num1Par=esPar(calc.num1);
let num2Par=esPar(calc.num2);
let pulso = document.getElementById('button')
pulso.addEventListener('click', _ => {location.reload();})


let par;
let series=[];
if(calc.num1==calc.num2){
    par=`.<br> El `+calc.num1+` `+num1Par+`.`;
    series=[calc.num1];
}else{
    par=`.<br> El ` +calc.num1+` ` +num1Par+` y `+calc.num2+` `+num2Par+`.`;
}
if(calc.num1<calc.num2){
    for (let i = calc.num1; i < calc.num2; i++) {
        if (i % 2 === 0) {
          series.push(i);
        }
    }
}
if(calc.num1>calc.num2){
    for (let i = calc.num1; i > calc.num2; i--) {
        if (i % 2 != 0) {
          series.push(i);
        }
    }
}

const out = document.getElementById("calculos");
out.innerHTML = 'La suma de los dos valores es '+suma+'.<br> El primer numero introducido ('+calc.num1+') '+
num1Prim+', el segundo ('+calc.num2+') '+num2Prim+par+' <br> Series= '+series+'.';
