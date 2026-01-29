function solution(bridge_length, weight, truck_weights) {
    const arr = Array(bridge_length).fill(0)
    
    let time = 0;
    let w = 0;
    let idx = 0;
    
    while(idx<truck_weights.length) {
        const truck = truck_weights[idx]
        
        //시간 먼저
        time ++
        
        //트럭 하나 제거
        w -= arr.shift()

        
        if(w + truck > weight) {
            arr.push(0)
            continue
        }
        arr.push(truck)
        w += truck
        idx++
    }
    return time + bridge_length
}