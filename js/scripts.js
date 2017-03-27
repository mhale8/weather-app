// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js

// call Sidr Plugin. Toggle by Default
$('#sidr-show-hide').sidr({
	speed:500
});
	
// Close from inside
$('#close').sidr({
  method: 'toggle',
	timimg:'ease-out',
	speed:500
});

$('section').sidr({
	method: 'close',
	timimg:'ease-out',
	speed:500
});

// Get and store Geo Location lat/long coordinates
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// Get Geo Location
// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.geo').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});

// Show geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Display Data
	  $('#currentLocation .currently').text(weather.currently);
      $('#currentLocation .temp').text(weather.temp);
      $('#currentLocation .city').text(weather.city);
      $('#currentLocation img').attr('src', weather.image);
	  $('#currentLocation .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#currentLocation figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#currentLocation figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#currentLocation figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#currentLocation figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#currentLocation figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#currentLocation figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#currentLocation figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#currentLocation figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#currentLocation figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#currentLocation figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#currentLocation figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#currentLocation figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#currentLocation figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#currentLocation figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#currentLocation figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#currentLocation figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#currentLocation figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#currentLocation figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#currentLocation figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var currentLocationIconCode = 'icon-' + weather.code;
	  var currentLocationIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var currentLocationIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var currentLocationIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var currentLocationIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var currentLocationIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#currentLocation i:nth-child(1)').attr('class', currentLocationIconCode );
		$('#currentLocation .day1 i').attr('class', currentLocationIconCodeDay1 );
		$('#currentLocation .day2 i').attr('class', currentLocationIconCodeDay2 );
		$('#currentLocation .day3 i').attr('class', currentLocationIconCodeDay3 );
		$('#currentLocation .day4 i').attr('class', currentLocationIconCodeDay4 );
		$('#currentLocation .day5 i').attr('class', currentLocationIconCodeDay5 );
	
		if (weather.code >= 0 && weather.code <= 8) {
          $('#currentLocation').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#currentLocation').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#currentLocation').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#currentLocation').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#currentLocation').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#currentLocation').addClass('bad');
          }

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
    
}; 
	
	// Spokane
$.simpleWeather({
    location: 99203,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#spokane .currently').text(weather.currently);
      $('#spokane .temp').text(weather.temp);
      $('#spokane .city').text(weather.city);
      $('#spokane img').attr('src', weather.image);
	  $('#spokane .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#spokane figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#spokane figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#spokane figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#spokane figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#spokane figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#spokane figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#spokane figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#spokane figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#spokane figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#spokane figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#spokane figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#spokane figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#spokane figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#spokane figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#spokane figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#spokane figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#spokane figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#spokane figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#spokane figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var iconCode = 'icon-' + weather.code;
	  var iconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var iconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var iconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var iconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var iconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#spokane i:nth-child(1)').attr('class', iconCode );
		$('#spokane .day1 i').attr('class', iconCodeDay1 );
		$('#spokane .day2 i').attr('class', iconCodeDay2 );
		$('#spokane .day3 i').attr('class', iconCodeDay3 );
		$('#spokane .day4 i').attr('class', iconCodeDay4 );
		$('#spokane .day5 i').attr('class', iconCodeDay5 );
	
		if (weather.code >= 0 && weather.code <= 8) {
          $('#spokane').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#spokane').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#spokane').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#spokane').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#spokane').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#spokane').addClass('bad');
          }
      
	},
	
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Seattle
$.simpleWeather({
    location: 98105,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);

      // Display Data
	  $('#seattle .currently').text(weather.currently);
      $('#seattle .temp').text(weather.temp);
      $('#seattle .city').text(weather.city);
      $('#seattle img').attr('src', weather.image);
	  $('#seattle .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#seattle figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#seattle figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#seattle figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#seattle figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#seattle figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#seattle figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#seattle figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#seattle figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#seattle figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#seattle figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#seattle figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#seattle figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#seattle figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#seattle figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#seattle figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#seattle figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#seattle figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#seattle figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#seattle figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var seattleIconCode = 'icon-' + weather.code;
	  var seattleIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var seattleIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var seattleIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var seattleIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var seattleIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#seattle i:nth-child(1)').attr('class', seattleIconCode );
		$('#seattle .day1 i').attr('class', seattleIconCodeDay1 );
		$('#seattle .day2 i').attr('class', seattleIconCodeDay2 );
		$('#seattle .day3 i').attr('class', seattleIconCodeDay3 );
		$('#seattle .day4 i').attr('class', seattleIconCodeDay4 );
		$('#seattle .day5 i').attr('class', seattleIconCodeDay5 );
		
		if (weather.code >= 0 && weather.code <= 8) {
          $('#seattle').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#seattle').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#seattle').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#seattle').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#seattle').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#seattle').addClass('bad');
          }
	},
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Portland
$.simpleWeather({
    location: 97214,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#portland .currently').text(weather.currently);
      $('#portland .temp').text(weather.temp);
      $('#portland .city').text(weather.city);
      $('#portland img').attr('src', weather.image);
	  $('#portland .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#portland figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#portland figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#portland figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#portland figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#portland figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#portland figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#portland figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#portland figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#portland figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#portland figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#portland figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#portland figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#portland figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#portland figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#portland figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#portland figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#portland figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#portland figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#portland figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var portlandIconCode = 'icon-' + weather.code;
	  var portlandIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var portlandIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var portlandIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var portlandIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var portlandIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#portland i:nth-child(1)').attr('class', portlandIconCode );
		$('#portland .day1 i').attr('class', portlandIconCodeDay1 );
		$('#portland .day2 i').attr('class', portlandIconCodeDay2 );
		$('#portland .day3 i').attr('class', portlandIconCodeDay3 );
		$('#portland .day4 i').attr('class', portlandIconCodeDay4 );
		$('#portland .day5 i').attr('class', portlandIconCodeDay5 );
		
		if (weather.code >= 0 && weather.code <= 8) {
          $('#portland').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#portland').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#portland').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#portland').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#portland').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#portland').addClass('bad');
          }
	},
	
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Ventura
$.simpleWeather({
    location: 93003,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#ventura .currently').text(weather.currently);
      $('#ventura .temp').text(weather.temp);
      $('#ventura .city').text(weather.city);
      $('#ventura img').attr('src', weather.image);
	  $('#ventura .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#ventura figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#ventura figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#ventura figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#ventura figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#ventura figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#ventura figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#ventura figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#ventura figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#ventura figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#ventura figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#ventura figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#ventura figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#ventura figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#ventura figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#ventura figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#ventura figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#ventura figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#ventura figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#ventura figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var venturaIconCode = 'icon-' + weather.code;
	  var venturaIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var venturaIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var venturaIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var venturaIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var venturaIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#ventura i:nth-child(1)').attr('class', venturaIconCode );
		$('#ventura .day1 i').attr('class', venturaIconCodeDay1 );
		$('#ventura .day2 i').attr('class', venturaIconCodeDay2 );
		$('#ventura .day3 i').attr('class', venturaIconCodeDay3 );
		$('#ventura .day4 i').attr('class', venturaIconCodeDay4 );
		$('#ventura .day5 i').attr('class', venturaIconCodeDay5 );
 
		//get condition code
      
		if (weather.code >= 0 && weather.code <= 8) {
          $('#ventura').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#ventura').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#ventura').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#ventura').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#ventura').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#ventura').addClass('bad');
          }
	},
	
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });
	
// Vegas
$.simpleWeather({
    location: 89101,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#vegas .currently').text(weather.currently);
      $('#vegas .temp').text(weather.temp);
      $('#vegas .city').text(weather.city);
      $('#vegas img').attr('src', weather.image);
	  $('#vegas .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#vegas figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#vegas figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#vegas figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#vegas figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#vegas figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#vegas figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#vegas figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#vegas figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#vegas figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#vegas figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#vegas figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#vegas figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#vegas figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#vegas figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#vegas figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#vegas figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#vegas figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#vegas figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#vegas figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var vegasIconCode = 'icon-' + weather.code;
	  var vegasIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var vegasIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var vegasIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var vegasIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var vegasIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#vegas i:nth-child(1)').attr('class', vegasIconCode );
		$('#vegas .day1 i').attr('class', vegasIconCodeDay1 );
		$('#vegas .day2 i').attr('class', vegasIconCodeDay2 );
		$('#vegas .day3 i').attr('class', vegasIconCodeDay3 );
		$('#vegas .day4 i').attr('class', vegasIconCodeDay4 );
		$('#vegas .day5 i').attr('class', vegasIconCodeDay5 );
 
		//get condition code
      
		if (weather.code >= 0 && weather.code <= 8) {
          $('#vegas').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#vegas').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#vegas').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#vegas').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#vegas').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#vegas').addClass('bad');
          }
	},
	
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// phoenix
$.simpleWeather({
    location: 85001,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#phoenix .currently').text(weather.currently);
      $('#phoenix .temp').text(weather.temp);
      $('#phoenix .city').text(weather.city);
      $('#phoenix img').attr('src', weather.image);
	  $('#phoenix .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#phoenix figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#phoenix figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#phoenix figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#phoenix figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#phoenix figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#phoenix figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#phoenix figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#phoenix figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#phoenix figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#phoenix figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#phoenix figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#phoenix figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#phoenix figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#phoenix figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#phoenix figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#phoenix figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#phoenix figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#phoenix figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#phoenix figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var phoenixIconCode = 'icon-' + weather.code;
	  var phoenixIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var phoenixIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var phoenixIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var phoenixIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var phoenixIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#phoenix i:nth-child(1)').attr('class', phoenixIconCode );
		$('#phoenix .day1 i').attr('class', phoenixIconCodeDay1 );
		$('#phoenix .day2 i').attr('class', phoenixIconCodeDay2 );
		$('#phoenix .day3 i').attr('class', phoenixIconCodeDay3 );
		$('#phoenix .day4 i').attr('class', phoenixIconCodeDay4 );
		$('#phoenix .day5 i').attr('class', phoenixIconCodeDay5 );
 
		//get condition code
      
		if (weather.code >= 0 && weather.code <= 8) {
          $('#phoenix').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#phoenix').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#phoenix').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#phoenix').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#phoenix').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#phoenix').addClass('bad');
          }
	},
	
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });