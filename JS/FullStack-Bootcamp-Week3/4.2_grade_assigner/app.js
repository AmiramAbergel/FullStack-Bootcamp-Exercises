let myStatus = function score(numScore){
    let fin = parseInt(numScore)
    let res = ""
    if(0 <= fin && fin <= 64){
        return res="F";
    }else if (65 <= fin && fin <= 69){
        return res="D";
    }else if(70 <= fin && fin <= 79){
        return res="C";
    }else if(80 <= fin && fin <= 89){
        return res="B";
    }else if(90 <= fin && fin <= 100){
        return res="A";
    }else {
        return res;
    }
};


console.log(myStatus(0));
console.log(myStatus(65));
console.log(myStatus(79));
console.log(myStatus(80));
console.log(myStatus(91));