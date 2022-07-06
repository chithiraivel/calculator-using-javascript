
var screenmemory = "";
var array = [];

function number(number) {

    document.getElementById('calc').value += number;
    screenmemory += number;
}

function operator(operator) {

    document.getElementById('calc').value += operator;

    if (screenmemory != '') {
        array.push(screenmemory);
        console.log(array);

    }
    screenmemory = '';
    array.push(operator);
    console.log(array);
}

function result() {
    array.push(screenmemory);
    console.log(array);

    var a;
    var k = []

    for (let i = 0; i < array.length; i++) {

        switch (array[i]) {

            case '+':

            if(k.length == 0){
                a = parseFloat(array[i - 1]) + parseFloat(array[i + 1]);
                k.push(a);
            }
            else{
               a = k[0] +parseFloat(array[i + 1]);
               k=[]
               k.push(a)

            }
                break;

            case '-':

                if(k.length == 0){
                    a = parseFloat(array[i - 1]) - parseFloat(array[i + 1]);
                    k.push(a);
                }
                else{
                   a = k[0] - parseFloat(array[i + 1]);
                   k=[]
                   k.push(a)
    
                }
                break;

            case '*':

                if(k.length == 0){
                    a = parseFloat(array[i - 1]) * parseFloat(array[i + 1]);
                    k.push(a);
                }
                else{
                   a = k[0] * parseFloat(array[i + 1]);
                   k=[]
                   k.push(a)
    
                }
                break;
            case '/':

                if(k.length == 0){
                    a = parseFloat(array[i - 1]) / parseFloat(array[i + 1]);
                    k.push(a);
                }
                else{
                   a = k[0] / parseFloat(array[i + 1]);
                   k=[]
                   k.push(a)
    
                }
                break;
            case '%':

                if(k.length == 0){
                    a = parseFloat(array[i - 1]) % parseFloat(array[i + 1]);
                    k.push(a);
                }
                else{
                   a = k[0] % parseFloat(array[i + 1]);
                   k=[]
                   k.push(a)
    
                }
                break;
        }
     
    }

    document.getElementById('calc').value = a;
    screenmemory = a.toString();
    k=[];
    array=[];
}

function clear1(){
    screenmemory = "";
    document.getElementById('calc').value = screenmemory;
    array =[];
}

function delete1(){
    
 document.getElementById('calc').value = screenmemory.substring(screenmemory.length-1 , screenmemory.length)
  
}
