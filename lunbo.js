window.onload = function() {
   var container = document.getElementById('container');
   var list = document.getElementById('list');
   var buttons = document.getElementById('button').getElementsByTagName('span');
   var prev = document.getElementById('prev');
   var next = document.getElementById('next');
   var index = 0;
   var timer = null;

   container.onmouseout = play;

   container.onmouseover = stop;
   play();

   function showButton() {
     for (var i = 0; i < buttons.length; i++) {
       if (buttons[i].className == 'on') {
         buttons[i].className = '';
         break;
       }
     }

     buttons[index].className = 'on';
   }

   function animate(value) {
     var newLeft = parseInt(list.style.left) + value;
     var time = 300; //位移总时间
     var interval = 10; //位移间隔时间
     var speed = value / (time / interval); //每次位移量

     list.style.left = newLeft + 'px';
     if (newLeft > -600) {
       list.style.left = -3000 + 'px';
     }
     if (newLeft < -3000) {
       list.style.left = -600 + 'px';

     }
   }

   function play() {
     timer = setInterval(function() {
       next.onclick();
     }, 2000)
   }

   function stop() {
     clearInterval(timer);
   }

   next.onclick = function() {
     if (index == 4) {
       index = 0;
     } else {
       index++;
     }
     showButton();
     animate(-600);

   }
   prev.onclick = function() {
     if (index == 0) {
       index = 4;
     } else {
       index--;
     }
     showButton();
     animate(600);

   }
   for (var j = 0; j < buttons.length; j++) {
     buttons[j].onclick = function() {
       if (this.className == 'on') {
         return;
       }
       var myIndex = parseInt(this.getAttribute('index'));
       var offset = -600 * (myIndex - index - 1);
       animate(offset);
       index = myIndex - 1;
       showButton();

     }
   }
 }  
