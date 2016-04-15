$(document).ready(function(){

  var startTime = new Date();
	globalMinute = startTime.getMinutes();

	var nextTick = setInterval(function(){

		var time = new Date();
		var hr = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var ms = time.getMilliseconds();

		$('#hr').text(hr);
		$('#min').text(min);
		$('#sec').text(sec);
		$('#ms').text(ms);

//change text color to pink
		if (isEven(min)){
			console.log("the min is even")
			document.getElementById("min").style.color = '#FF00FF';
		}else{
//change text color to white if odd
			console.log("the min is odd")
			document.getElementById("min").style.color = '#FFFFFF';
		}

//Change the background to a random color every 5 minutes.

//Change the text color to white if 
//it is an odd minute and another color if it is even minute.

//Change the text color of "What time is it?" 
//to a different color every hour, selected from an array of colors.
		 

		 var color_ary = ['#F90','#60F','#6C0','#03C','#C30','#0F0'];

		 var rand = Math.floor(Math.random() * color_ary.length);
		 

		 if (startTime(min, sec, ms)){

		 var color_ary = ['#F90','#60F','#6C0','#03C','#C30','#0F0'];

		 var rand = Math.floor(Math.random() * color_ary.length);

		 		console.log("five min")
		 		$('#clock').css("background-color", color_ary[rand])
		 }


		 if (hourTime(min, sec, ms)){

		 var color_ary = ['#F90','#60F','#6C0','#03C','#C30','#0F0'];

		 var rand = Math.floor(Math.random() * color_ary.length);

		 		console.log("hour man")
		 		$('h1').css("text-color", color_ary[rand])
		 }

	}, 1000);

//functions

	function isEven(n) {
	   return n % 2 == 0;
	}

	startTime = function(n, x, c) {
		if (n % 5 == 0 && x == 00 && c < 10){
			return true
		}else{
			return false
		}
	};

	hourTime = function(n, x, c) {
		if (n == 0 && x == 00 && c < 10){
			return true
		}else{
			return false
		}
	};

	})