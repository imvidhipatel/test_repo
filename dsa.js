function maximumOccuringElement(arr,N){
    //write code here
    
    map = {}
    
    for(let i=0; i<=arr.length-1; i++) {
        if(map[arr[i]] == undefined) {
            map[arr[i]] = 1
        } else {
            map[arr[i]]++
        }
    }
    
    maxOccuringElement = arr[0]
    maxFrequency = 1
    
    for(const element in map) {
        if(map[element] > maxFrequency) {
            maxFrequency = map[element]
            maxOccuringElement = element
        }
    }
    
    console.log(maxOccuringElement)
    
}


