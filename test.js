// console.log(document.getElementsByClassName('findH2'));

// var storeContent = document.getElementsByClassName('findH2');

// var storedH2= storeContent[1].getElementsByTagName('h2');

// storeContent[1].innerHTML = "I have been changed to a real boy";


// var docBody = document.getElementsByTagName('body');

// docBody[0].innerHTML = "<p> I am a paragraph</p>";

// var pageTitle = document.getElementById("page-title")

// var pTag = document.getElementById('singular');

// pTag.getAttribute('class');

// pTag.setAttribute('class', 'newClass')
// pTag.setAttribute('style', 'color: orange');



// var title = document.getElementById('page-title')




// var newItem = document.createElement('li');
// var newPar = document.createElement('p');

// var newLink = document.getElementById('container').getElementsByTagName('ul')[0];

// newLink.appendChild(newItem);
// newItem.appendChild(newPar);
// newPar.innerHTML = 'Item 4';

// // newLink.insertBefore(newItem, newLink.getElementsByTagName('li')[0]);

// var parent = document.getElementById('container').getElementsByTagName('ul')[0];
// var child = parent.getElementsByTagName('li')[0];
// var removed = parent.removeChild(child);
// parent.appendChild(removed);



// var title = document.getElementById('clickThis');
// title.onclick = function(){
//     alert('You clicked me!');
// }                            

// title.onmouseover = function(){
//     alert('You hovered over me!');
// }


// function eventSetup(){
// var content = document.getElementById('content');

// var button = document.getElementById('show-more');

// button.onclick = function(){
//     if(content.className == 'open'){
//         //shrink
//         content.className = "";
//         button.innerHTML = 'show more';
//     } else {
//         content.className = "open";
//         button.innerHTML = 'show less'
//         //expand box
//     }
//    }
//   }

// window.onload = function(){
//     eventSetup();
// }



// var hiddenMessage = document.getElementById("message");

// function showMessage(){
//     hiddenMessage.className=('show');
// }

// setTimeout(showMessage, 3000);

// var changeColor = document.getElementById('colorChanger');
// var colors = ['purple', 'green', 'gold', 'blue', 'red', 'pink']
// var counter = 0 

// function rainbowChange(){
//     if(counter >= colors.length){
//         counter = 0;
//     }

//     changeColor.style.background = colors[counter];
//     counter++
// };

// var timer = setInterval(rainbowChange, 3000);

// changeColor.onclick = function(){
//     clearInterval(timer);
//     changeColor.innerHTML = "Timer Stopped";
// }


// var someForm = document.forms.someForm;

// someForm.name.onfocus = function(){
//     someForm.name.style.border = "4px solid pink";
// }

// someForm.name.onblur = function(){
//     someForm.name.style.border = "none";
// }



var someForm = document.forms.someForm;
var message = document.getElementById('message');

someForm.onsubmit = function (){
    if(someForm.name.value == ""){
        message.innerHTML = "Please enter a name";
        return false;
    } else{
        message.innerHTML = '';
        return true;
    }
}
