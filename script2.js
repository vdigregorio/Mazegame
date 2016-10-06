$(document).ready(function() {
 var searchUrl = window.location.search.substring(1);
var split = [];
split = searchUrl.split("&");
var obj = {};
var form = document.querySelector('form');

for (i = 0; i < split.length; i++) {
 var arr = [];
 arr = split[i].split("=");
 var key = arr[0];
 var value = arr[1];

   var p1 = $('<p>');

   p1.text(key);

   $('.field').append(p1);


var input = document.createElement('input');
input.type= 'hidden';
input.value= value;
input.name= key;
form.appendChild(input);
}
})
