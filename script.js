var cel = document.getElementById("cel");
var fer = document.getElementById("fah");
var kel = document.getElementById("kel");

cel.addEventListener('input',function(){
    
    let c = this.value;
    let k = 273.15 + c*1;
    let f = ( c * 9/5 ) + 32; 
    f=f.toFixed(4);
    k=k.toFixed(4); 
    fah.value = f;
    kel.value = k;
});

fah.addEventListener('input',function(){
    
    let f = this.value;
    let c = ( f - 32 ) * 5/9;
    let k = c + 273.15;
    k=k.toFixed(4);
    c=c.toFixed(4);
    cel.value = c;
    kel.value = k;
});
kel.addEventListener('input',function(){
    
    let k = this.value;
    let c = k - 273.15;
    let f = ( c * 9/5 ) + 32;
    f=f.toFixed(4);
    c=c.toFixed(4);  
    cel.value = c;
    fah.value = f;
});
btn.addEventListener('click',()=>
{
    cel.value="";
    fah.value="";
    kel.value="";
});