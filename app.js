let btn = document.querySelector('button') ; 
let ans = document.querySelector('.res') ;


btn.addEventListener('click',function() {
    let wt = document.querySelector('.wt').value ; 
    let ft = document.querySelector('#ft').value ;
    let inc = document.querySelector('#in').value ;
    let height = heightconvert(ft, inc) ;  // in metre
    
    
    let bmi = wt / (Math.pow(height,2)) ; 
    if(bmi < 18.5)
    {
        ans.innerHTML = "You are UnderWeight." ;
    }
    else if(bmi >= 18.5 && bmi < 25)
    {
        ans.innerHTML = "You are Healthy." ;
    }
    else
    {
        ans.innerHTML = "You are OverWeight." ;
    }
})


function heightconvert(feet,inches)
{
    let metre = (feet*0.3048) + (inches*0.0254) ; 
    return metre ; 
}