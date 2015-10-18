function computeCompatibility(firstAvgs, secondAvgs) {    
    var compatibility = 0;
    for (var avg in firstAvgs) {      
        if(firstAvgs[avg] - secondAvgs[avg] < 5) {
            compatibility++;
        }
    }
    return compatibility;            
}