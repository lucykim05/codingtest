function solution(a, b, c) {
    const unique = [...new Set([a,b,c])]
    
    switch(unique.length) {
        case 1:
            return (27*(a**6));
        case 2:
            return((a+b+c)*(a**2+b**2+c**2));
        case 3:
            return(a+b+c)
    }
}