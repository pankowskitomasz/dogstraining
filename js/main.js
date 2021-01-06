
$(document).ready(function(){
    $(".navbar-toggler").click(function(){
       $(".navbar-collapse").toggleClass("h-32");
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
});

$("input, textarea").on("paste",function(){
    return false;
});

function pointsMap() {
	var opts = {
	    center: new google.maps.LatLng(37.7497451,-122.4600963),
	    zoom:11,
	    maxZoom:11,
	    panControl: false,
	    zoomControl: true,
	    mapTypeControl: false,
	    scaleControl: false,
	    streetViewControl: false,
	    overviewMapControl: false,
	    rotateControl: false,
	    scrollwheel: false
	};
	var map = new google.maps.Map(document.getElementById("pointsmap"),opts);
	var point1 = new google.maps.Marker({
	 	position: new google.maps.LatLng(37.7497451,-122.4600963),
	 	map: map,
	 	animation: google.maps.Animation.Drop
	 	});
}

function checkFormText(){
    var inputArray = $("input[type='text']");
    var rgx = new RegExp(/[^a-zA-Z]+$/i);  
    for(var i=0;i<inputArray.length;i++){
        if(inputArray[i].value.match(rgx)){
            return false;
        }
    }
    return true;
}

function checkFormTel(){
    var inputArray = $("input[type='tel']");
    var rgx = new RegExp(/[^0-9]+$/i);  
    for(var i=0;i<inputArray.length;i++){
        if(inputArray[i].value.match(rgx)){
            return false;
        }
    }
    return true;
}

function checkFormEmail(){
    var inputArray = $("input[type='email']");
    var rgx = new RegExp(/[^a-zA-Z0-9.@]+$/i);
    for(var i=0;i<inputArray.length;i++){
        if(inputArray[i].value.match(rgx)){
            return false;
        }
    }
    return true;
}

function checkFormTextarea(){
    var inputArray = $("input[type='textarea']");
    var rgx = new RegExp(/[^a-zA-Z0-9.,!?#\- ]+$/i);
    for(var i=0;i<inputArray.length;i++){
        if(inputArray[i].value.match(rgx)){
            return false;
        }
    }
    return true;
}

function checkForm(){
    if(checkFormText()===true
        && checkFormTel()===true
        && checkFormEmail()===true
        && checkFormTextarea()===true){
            return true;
        }
    return false;
}

function swapTarget(){
    $(".contact-form").attr("action","confirm.php");
}

setTimeout(swapTarget,11000);