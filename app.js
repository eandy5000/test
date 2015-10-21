$(document).ready(function(){
	
$('.gen').on('click', function(){
	
	$('.catch').append("<p class='yellow'>testing" + 
		"<button class='deleteButton'>Delete</button>" + 
		"<button class='changeButton'>Change</button></p>");
console.log("gen somthing");
});



$('.catch') .on('click', '.deleteButton', function(){
	
console.log('delete something');

$('this').before().remove();

});


$('.catch') .on('click', '.changeButton', function(){
	
$('this').toggleClass('.red');

console.log('change something');

});





});