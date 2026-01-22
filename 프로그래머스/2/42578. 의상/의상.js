function solution(clothes) {
    const map = new Map()
    clothes.forEach(x=>{
        const [name, category] = x;
        map.set(category, (map.get(category)||0)+1)
    })
    const arr = [...map.values()];
    return arr.reduce((a,b)=>a*(b+1),1)-1
}