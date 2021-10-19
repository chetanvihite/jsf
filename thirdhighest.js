// given an array find the third higest number

function thirdHighest() {
  const arr = [1, 2, 4, 9, 23, 453, 33, 543];
  let first =0, second =0, third =0;
  
  if ( arr.length < 3) return;

  first = arr[0];
  for( let i = 0; i < arr.length; i++){
    
    if ( arr[i] > first){
      third = second;
      second = first;
      first = arr[i];

    }else if ( arr[i] > second ){
      third = second;
      second = arr[i];
    }
    else if ( arr[i] > third ){
      third = arr[i];
    }
  }
  console.log (first, second, third);
}


thirdHighest();
