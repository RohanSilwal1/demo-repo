// 1234

let num=Number(prompt("enter a number to reverse"));
let abcd=num;

if(num>0)
{
    var sum=0;
    while(num!=0)
    {
        
    
    var rem=num%10;
    var fact=1;
    for(let i =1;i<=rem;i++)
    {
        fact=fact*i;
    }
    sum=sum+fact;

    num=Math.floor(num/10);
}
    if(abcd==sum)
    {
        console.log("this is strong number");
        
    }
    else{
     console.log("   this is not a strong number");
    }
}