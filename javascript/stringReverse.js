function reverse(s){
    arr = s.split('')

    i = 0
    j = arr.length -1

    while(i<j){
        t = arr[i]
        arr[i] = arr[j]
        arr[j] = t

        i+=1
        j-=1
    }
    ans=""
    for(i=0;i<arr.length;i++){
        ans+=arr[i]
    }
    return ans
}
list = ["ABHI","SHYAM","MANOJ","DEEPAK"]
for (k=0;k<list.length;k++){
    list[k] = reverse(list[k])
}
console.log(list)