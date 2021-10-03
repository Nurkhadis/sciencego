let name;
let age;

name = "Nurkhadis";
age = 18;

let a = 25;
// let plus = document.querySelector("#anulen1");
console.log(plus);

$(function() {
 let header = $('.header');
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('header_fixed');
   } else {
    header.removeClass('header_fixed');
   }
 });
});