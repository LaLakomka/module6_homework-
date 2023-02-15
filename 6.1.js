//задание 1 (6.1) (показать кол-во четных и не четных через функцию)

let arrNam = [0, 0, 2, 2, 5, 5, 0, 0, 7, 8];

function nams (arr) {
    let chet = 0;
    let anchet = 0;
    let nullCount = 0;
    for (let i = 0; i < arr.length; i++){ 
           
        if (typeof arr[i] != 'string') {

        if (arr[i] == 0) {
            nullCount++
        } 
        else if (arr[i] % 2 == 0) {
            chet++
        } 
        else {
            anchet++
        }
        }
    }
    
    return (nullCount, chet, anchet)
}

let rezult = (nams(arrNam))

console.log('Четных чисел ' + rezult[0]);
console.log('Нечетных чисел ' + rezult[1]);
console.log('Нулей ' + rezult[2]); 



