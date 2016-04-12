var count =0;

function counter () {
    count++;
    var el = '<h3>Counter: '+count+'</h3>';
    $('#counter').empty();
    $('#counter').append(el);
}
function genDom () {
    var el = '<div class = "yellow">'+
                '<button class = "remove">Remove</button>'+
                '<button class = "change">Change</button>'+
            '</div>';
        $('#out').append(el);    
}

function changer (self) {
    var target = $(self).parent();
    $(target).toggleClass('red');
    console.log(target);
}

function remover () {
    
    var target = $(self).parent();
    $(target).remove();
}



$(document).ready(function(){
	
//listeners
$('#main').on('click', '#generate', function () {
   counter(); 
   genDom();
});

$('#out').on('click', '.change', function (){
    self = this;
    changer(self);
});

$('#out').on('click', '.remove', function (){
    self = this;
    remover(self);
});

//functionality


});