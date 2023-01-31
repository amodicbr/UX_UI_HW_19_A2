//PSUEDO CODE

//I want the javascript to rotate the class rotate when the mouse enters the Element.
//onHover is the function. 
//Target it to the correct Element. 
//Element doesn't have class typically but it's added. 
//Mouse leave would rotate it back. 

//END PSUEDO CODE

//ADDING ROTATE CLASS ON CLICK

const aboutMe = document.querySelector('#aboutMe');
//VARIABLE IS WHAT YOU'RE TARGETTING. 
addEventListener('click', () => {
    aboutMe.classList.add('rotate');
});
//Function is what you want the thing to do. 

const resume = document.querySelector('#resume');
addEventListener('click', () => {
    resume.classList.add('rotate');
});

const myWork = document.querySelector('#myWork');
addEventListener('click', () => {
    myWork.classList.add('rotate');
});



//Hi Anna here are some of my CODE ATTEMPTs;

/* function addClass(){
    aboutMe.className; "rotate";
    //aboutMe.classList.toggle("rotate");
    document.getElementById('rotate').addEventListener('mouseenter', addClass);
}

console.log(addClass);


//console.log(addClass);

 /*CODE FROM WHEELCHAIR GUY VID
 get.ClassList.toggle('rotateactive');
}
document.getelementsByClassName('rotate').addeventListener('mouseover', change);*/

//CODING ATTEMPTs 
/*function change(){
    document.getElementsByClassName('rotate').ClassList.add('rotating').addEventListener('mouseenter', (change));
}

const mouseTarget = document.getElementsByClassName('rotate');

mouseTarget.addEventListener('mouseenter', (Event)); {
    mouseTarget.style.transform = 'rotate (90deg)';
}

function rotateImg() */

/*const mouseTarget = document.getElementsByClassName('rotate');

mouseTarget.addEventListener('mouseenter', (e) => {
    mouseTarget.style.border = '5px hotpink';
  });

  function addEventListener()

function rotateImg(){
    document.getElementsByClassName('rotate').addEventListener('onMouseOver', rotateImg);

}

console.log(rotateImg);
*/

/*document.querySelector('rotate').addEventListenter('mouseOver', function(event)){
    event.preventDefault();
    
    var rotate = document.querySelector('rotate');

    if(rotate.classList.contains('rotate')){
        EventTarget.classList.remove('rotate');
    }else{
        EventTarget.classList.add('rotate');
   }
}
  */  
//END UNSUCCESSFUL CODE ATTEMPTS!
