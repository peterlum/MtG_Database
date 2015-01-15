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

/*
		var init = function() {
	  var card = document.getElementsByClassName('card');
		card.mouseenter(function (){
			card.addClass('flipped');
		});
		card.mouseleave(function(){
			card.removeClass('flipped')
		});
	  document.getElementsByClassName('card').addEventListener( 'mouseover', function(){
	    card.toggleClassName('flipped');
	  }, false);
	};

	window.addEventListener('DOMContentLoaded', init, false);
*/
 /*
	var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('data-alt-src');
        $this.data('data-alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }
   $(function () {
        $('img.cardBack').hover(sourceSwap, sourceSwap);
    });
*/

	$.ajax({
		  type: 'GET',
		  url: 'AllCards-x.json',
		  success: function(data) {
			$.each(data,function(index,card){
	 		var cardDiv = '<div class="item lazy" ><figure class="lazy" ><img class="lazy front" data-original="http://mtgimage.com/card/' + card.name + '.jpg" alt="' + card.name + '" src=""></figure><figure class="cardBacks"><img class="back" src="http://mtgimage.com/card/cardback.jpg" ></figure></div>';
			$cardList.append(cardDiv)
		  	}); 	
		  	$(function() {
		  	 $("img.lazy").lazyload({
		  	 	threshold:300,
		  	 	effect : "fadeIn"
		  	 	});
		  	 });
		  },
		  error:function(){
		  	alert('no cards to load')
		  },
	});

			 $('#search').keyup(function(){
		            var searchField = $('#search').val();
		            var regex = new RegExp(searchField, "i");
		            var output = '<div class="item"><img class="lazy" data-original="http://mtgimage.com/card/';
		            var count = 1;
		            $.getJSON('AllCards-x.json', function(data) {
		            	$cardList.empty();
		              $.each(data, function(index, card){
		                if ((card.name(regex) != -1) || (card.rarity(regex) != -1)  || (card.text(regex) != -1)) {
		                  output += card.name ;
		                  output += '.jpg" alt="';
		                  output += card.name ;
		                  output += '"</div>' ;
		                  if(count%2 == 0){
		                    output += '</div>'
		                  }
		                  count++;
		                }
		              });
		              output += '</div>';
		              $cardList.append(output);
		            }); 
		        });

/*
	$.ajax({
			type: 'GET',
			url: 'AllCards-x.json',
			success: function(data){
			 $('#search').keyup(function(){
		            var searchField = $('#search').val();
		            var regex = new RegExp(searchField, "i");
		            var output = '<div class="item"><img class="lazy" data-original="http://mtgimage.com/card/';
		            var count = 1;
		            $.getJSON('AllCards-x.json', function(data) {
		            	$cardList.empty();
		              $.each(data, function(index, card){
		                if ((val.name.search(regex) != -1) || (val.rarity.search(regex) != -1)  || (val.text.search(regex) != -1)) {
		                  output += card.name ;
		                  output += '.jpg" alt="';
		                  output += card.name ;
		                  output += '"</div>' ;
		                  if(count%2 == 0){
		                    output += '</div>'
		                  }
		                  count++;
		                }
		              });
		              output += '</div>';
		              $cardList.append(output);
		            }); 
		        });

			//	
			}
	});
*/

});


/*
		        $('#search').keyup(function(){
		        	$("#performSearch").click();
		            var searchField = $('#search').val();
		            var regex = new RegExp(searchField, "i");
		            var output = '<div class="item"><img class="lazy" data-original="http://mtgimage.com/card/';
		            var count = 1;
		            $.getJSON('AllCards-x.json', function(data) {
		              $.each(data, function(key, val){
		                if ((val.name.search(regex) != -1) || (val.rarity.search(regex) != -1)  || (val.text.search(regex) != -1)) {
		                  output += card.name ;
		                  output += '.jpg" alt="';
		                  output += card.name ;
		                  output += '"</div>' ;
		                  if(count%2 == 0){
		                    output += '</div>'
		                  }
		                  count++;
		                }
		              });
		              output += '</div>';
		              $cardList.append(output);
		            }); 
		        });

*/