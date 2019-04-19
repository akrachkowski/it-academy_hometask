var arr = [];
var sum = 0;

function sumArray(){
    for (var i=0; i<arr.length; ++i){
    for (var j = 0; j < arr[i].length; j++) {
		sum += arr[i][j];
}
    }
}