function fibo(n){
    if (n==1||n==2) return 1;
    else return fibo(n-2)+fibo(n-1);		
    }
    var numberOfFibo=parseInt(prompt('Введите порядковый номер числа Фибоначчи'));
    console.log(fibo(numberOfFibo));