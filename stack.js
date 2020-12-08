var stack=[],limit=0,limitation=5;
const element=document.querySelector("#element");
const colorpicker=document.querySelector(".colorpicker");


// const indicator=()=>{
//     const indctrs=document.querySelectorAll(".level-indicator");
//     const indicators1=indctrs[0].childNodes;
//     const indicators2=indctrs[1].childNodes;
//     console.log(indicators1[0])
//     for(var i=0;i<indctrs.length;i++)
//     {
//         for(var j=0;j<indicators1.length;j++)
//         {
//             console.log(indicators1.length)
//             if(limit-1>j)
//             {
//                 indicators1[j].style.backgroundColor="red";
//                 indicators2[j].style.backgroundColor="red";
//             }
//         }
//     }
// }

const push=()=>{
    if(limitation>limit)
    {
        if(element.value=="")
    {
        messagehandler("Please Push the Valid data...")
    }
    else{
    stack[limit]=element.value;
    limit++;
    const parent=document.querySelector(".parent");
    var div=document.createElement('div');
    div.textContent=element.value;
    div.setAttribute('class','children')
    div.style.backgroundColor=colorpicker.value;
    div.animate([{opacity:'0',transform:'translateY(-180%)'},{opacity:'0.5',transform:'translateY(-90%)'},{opacity:'1',transform:'translateY(0%)'}],{duration:1000})
    parent.appendChild(div)
   for(let i=0;i<limit;i++)
    {
        console.log(stack[i]);
    }
    }
    }
    else if(limit==limitation)
    {
        messagehandler("Stack is Full...")
    }
    else{
        console.log("StackOverlow...");
        messagehandler("StackOverlow...")
    }
    element.value="";
}

const empty=()=>{
    if(limit=="0")
    {
        messagehandler("Stack is Empty...")
    }
}
const pop=()=>{
    if(limit)
    {
        const deleteelement=document.querySelectorAll(".children");
        console.log(deleteelement[deleteelement.length-1]);
        deleteelement[deleteelement.length-1].animate([{opacity:'1',transform:'translateY(0px)'},{opacity:'0.5',transform:'translateY(-90%)'},{opacity:'0',transform:'translateY(-180%)'}],{duration:1000})
        setTimeout(()=> deleteelement[deleteelement.length-1].remove(),1000)
       
    console.log(stack[limit-1]);
    limit--;
    console.log("limit:"+limit)
    empty();
    }
    else{
        console.log("StackUnderflow...");
        
        messagehandler("StackUnderlow...")
    }
    
    empty();
}


const messagehandler=(Message)=>
{
    const msg=document.querySelector("#msg");
    msg.innerHTML=Message;
    var opacity=0;
    var fadein=setInterval(()=>{
        if(opacity < 1)
        {
            opacity=opacity+0.5;
            msg.style.opacity=opacity;
        }
        else{
            msg.style.opacity=0;
        clearInterval(fadein)
        }
    },200)
    
}


const colorchanger=()=>{
    const deleteelement=document.querySelectorAll(".children");
 if(deleteelement)
 {
     for(var i=0;i<deleteelement.length;i++)
     {
         deleteelement[i].style.backgroundColor=colorpicker.value;
     }
 }   
}