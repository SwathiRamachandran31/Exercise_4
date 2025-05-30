let clickAction = () =>{
    console.log('click');
    let a=parseInt(document.getElementById('a').value);
    let b=parseInt(document.getElementById('b').value);
    let l=document.getElementById('l').value.split(',');   //l will be having 1,2,.. as a string. To convert string to an array we use split. 
    let sum=findsum(a,b,l);
    alert(sum);
}

let findsum = (num1,num2,array1) => { //[1,2,3,4,5,6,7,8,9,10] array values/array length
                                      //[0 1 2 3 4 5 6 7 8 9] array index/array positions
    let sum=0;
    for(let i=0;i<array1.length;i++){ //i=2
        let value= parseInt(array1[i]); // value=3
        if(value%num1===0||value%num2===0){ //3%3===0
            sum+=value; //0+3= 3
        }
    }
    return sum;
}