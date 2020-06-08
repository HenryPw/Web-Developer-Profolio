function go() {
    var rankine = [];
    for (i = 1 ; i<101 ; i++) {
        var j = i%3;
        var k = i%5; 
        if (j===0 && k===0) {
            rankine.push("haha yeah");
        } else if (j>0 && k===0) {
            rankine.push("yeah");
        } else if (j===0 && k>0) {
            rankine.push("haha");
        } else {
            rankine.push(i);
        };   
    }  
    console.log(rankine);      
}
