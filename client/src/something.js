function Orr(str){
    var arr = null;
    var cnt = 0;
    var oCnt = 0;
    var xCnt = 0;
    var same = false;

    arr = str.toLowerCase().split("").sort();
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === "o"){
            cnt++
        }
    } 
    oCnt = cnt;
    cnt = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === "x"){
            cnt++
        }
    } 
    xCnt = cnt;

    if (xCnt === oCnt){
        same = true;
    }
    else {
        same = false
    }
    return same;
  
}
Orr("hello")