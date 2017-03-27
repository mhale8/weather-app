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
	  $('#Spokane .currently').text(weather.currently);
      $('#Spokane .temp').text(weather.temp);
      $('#Spokane .city').text(weather.city);
      $('#Spokane img').attr('src', weather.image);
	  $('#Spokane .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#Spokane figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#Spokane figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#Spokane figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#Spokane figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#Spokane figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#Spokane figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#Spokane figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#Spokane figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#Spokane figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#Spokane figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#Spokane figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#spokane figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#spokane figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#spokane figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#spokane figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#Spokane figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#Spokane figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#Spokane figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#Spokane figure:nth-child(5) img').attr('src', weather.forecast[4].image);

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

// Boise
$.simpleWeather({
    location: 83701,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);

      // Display Data
	  $('#Boise .currently').text(weather.currently);
      $('#Boise .temp').text(weather.temp);
      $('#Boise .city').text(weather.city);
      $('#Boise img').attr('src', weather.image);
	  $('#Boise .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#Boise figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#Boise figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#Boise figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#Boise figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#Boise figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#Boise figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#Boise figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#Boise figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#Boise figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#Boise figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#Boise figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#Boise figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#Boise figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#Boise figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#Boise figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#Boise figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#Boise figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#Boise figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#Boise figure:nth-child(5) img').attr('src', weather.forecast[4].image);

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

// Camas
$.simpleWeather({
    location: 98607,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#Camas .currently').text(weather.currently);
      $('#Camas .temp').text(weather.temp);
      $('#Camas .city').text(weather.city);
      $('#Camas img').attr('src', weather.image);
	  $('#Camas .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#Camas figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#Camas figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#Camas figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#Camas figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#Camas figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#Camas figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#Camas figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#Camas figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#Camas figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#Camas figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#Camas figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#Camas figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#Camas figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#Camas figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#Camas figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#Camas figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#Camas figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#Camas figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#Camas figure:nth-child(5) img').attr('src', weather.forecast[4].image);

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
      console.log('Sorry try again later.');
    }
  
  });

// Maui
$.simpleWeather({
    location: 96708,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#Maui .currently').text(weather.currently);
      $('#Maui .temp').text(weather.temp);
      $('#Maui .city').text(weather.city);
      $('#Maui img').attr('src', weather.image);
	  $('#Maui .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#Maui figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#Maui figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#Maui figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#Maui figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#Maui figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#Maui figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#Maui figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#Maui figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#Maui figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#Maui figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#Maui figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#Maui figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#Maui figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#Maui figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#Maui figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#Maui figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#Maui figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#Maui figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#Maui figure:nth-child(5) img').attr('src', weather.forecast[4].image);

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
	
// Mobile
$.simpleWeather({
    location: 36695,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#Mobile .currently').text(weather.currently);
      $('#Mobile .temp').text(weather.temp);
      $('#Mobile .city').text(weather.city);
      $('#Mobile img').attr('src', weather.image);
	  $('#Mobile .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#Mobile figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#Mobile figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#Mobile figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#Mobile figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#Mobile figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#Mobile figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#Mobile figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#Mobile figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#Mobile figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#Mobile figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#Mobile figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#Mobile figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#Mobile figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#Mobile figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#Mobile figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#Mobile figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#Mobile figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#Mobile figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#Mobile figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var MobileIconCode = 'icon-' + weather.code;
	  var MobileIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var MobileIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var MobileIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var MobileIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var MobileIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#Mobile i:nth-child(1)').attr('class', vegasIconCode );
		$('#Mobile .day1 i').attr('class', vegasIconCodeDay1 );
		$('#Mobile .day2 i').attr('class', vegasIconCodeDay2 );
		$('#Mobile .day3 i').attr('class', vegasIconCodeDay3 );
		$('#Mobile .day4 i').attr('class', vegasIconCodeDay4 );
		$('#Mobile .day5 i').attr('class', vegasIconCodeDay5 );
 
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