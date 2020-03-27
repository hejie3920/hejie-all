function bubble_sort(arr){
    for(let i=0;i<arr.length-1;i++){
      for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
          let swap=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=swap;
        }
      }
    }
  }
  
  let arr=[3,1,5,7,2,4,9,6,10,8];
  bubble_sort(arr);
  console.log(arr);
  