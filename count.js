let count=0;
const plus=document.getElementById('plus').addEventListener('click',function(){
count++;
document.getElementById('count').innerText=count;
})
const minus=document.getElementById('minus').addEventListener('click',function(){
    count--;
    document.getElementById('count').innerText=count;
})