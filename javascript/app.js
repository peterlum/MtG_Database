$(document).ready(function(){

/*
	$.getJSON("AllCards-x.json", function(json) {
    	type:'GET',
    	success: function(cards){
    		$.each(cards, function(i, card){
    			//function to populate list with cards here

    		});
    	};
	});
*/
	var card = {
		name: this.name,
		imageName: this.imageName,
	}

	var $cardList = $('.cardList');



	$.ajax({
		  type: 'GET',
		  url: 'AllCards-x.json',
		  success: function(data) {
			$.each(data,function(index,card){
		 		$cardList.append('<div class="item" ><img class="lazy" data-original="http://mtgimage.com/card/' + card.name + '.jpg" alt="' + card.name + '" ></div>')

		  	}); 
		  	 $("img.lazy").lazyload({
		  	 	threshold:300,
		  	 	effect : "fadeIn"
		  	 });
		  },
		  error:function(){
		  	alert('no cards to load')
		  },
	});



});