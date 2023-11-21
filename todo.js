let addtodobutton= document.getElementById('todoadd');  //id attribute
let todocontent=document.getElementById('todocontainer');
let inputfield= document.getElementById('todoinput');

addtodobutton.addEventListener('click',function()   //event object depends on the specified event'click'
{
    var para=document.createElement('p');
    para.classList.add('para-styling');   //returns the styling properties
    para.innerText=inputfield.value;
    todocontent.appendChild(para);

    inputfield.value='';
    para.addEventListener('click',function(){
        para.style.textDecoration='line-through';
    })

    para.addEventListener('dblclick',function(){
        todocontent.removeChild(para);
    })
})
