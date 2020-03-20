const btn = document.querySelector('button');
 btn.addEventListener('click', function(evt) {
   // testing!
   const li =  document.createElement('li');
   const inp = document.querySelector('input');
   li.textContent = inp.value;
   document.querySelector('ul').appendChild(li);
  
 });
 document.querySelector('ul')
 .addEventListener('click', handleClick);
 function handleClick(evt) {

    console.log(evt)
 }
