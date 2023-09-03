(function (){
const buttons=document.querySelectorAll('.button')
let count=0;
const counter=document.querySelector('#counter');
counter.textContent=count;
buttons.forEach(function(button){
    button.addEventListener('click' , function(){

        if(button.classList.contains('Mbtn')){
            count--;
        }
        else if(button.classList.contains('Pbtn')){
            count++;
        }
        counter.textContent=count;

        if(count<0){
         counter.style.color='red'
        }
        else if(count>0){
            counter.style.color='green';
         }
         else{
            counter.style.color='#333333';
         }
        
        
        })
});

})()