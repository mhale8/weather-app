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
      var currentLocationIconCode = 'wi wi-' + weather.currently;
	  var currentLocationIconCodeDay1 = 'wi wi-' + weather.forecast[0].currently;
	  var currentLocationIconCodeDay2 = 'wi wi-' + weather.forecast[1].currently;
	  var currentLocationIconCodeDay3 = 'wi wi-' + weather.forecast[2].currently;
	  var currentLocationIconCodeDay4 = 'wi wi-' + weather.forecast[3].currently;
	  var currentLocationIconCodeDay5 = 'wi wi-' + weather.forecast[4].currently;
      
		$('#currentLocation i:nth-child(1)').attr('class', currentLocationIconCode );
		$('#currentLocation .day1 i').attr('class', currentLocationIconCodeDay1 );
		$('#currentLocation .day2 i').attr('class', currentLocationIconCodeDay2 );
		$('#currentLocation .day3 i').attr('class', currentLocationIconCodeDay3 );
		$('#currentLocation .day4 i').attr('class', currentLocationIconCodeDay4 );
		$('#currentLocation .day5 i').attr('class', currentLocationIconCodeDay5 );
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
        // wi-rain-wind
      var iconCode = 'wi wi-' + weather.text;
	  var iconCodeDay1 = 'wi wi-' + weather.forecast[0].text;
	  var iconCodeDay2 = 'wi wi-' + weather.forecast[1].text;
	  var iconCodeDay3 = 'wi wi-' + weather.forecast[2].text;
	  var iconCodeDay4 = 'wi wi-' + weather.forecast[3].text;
	  var iconCodeDay5 = 'wi wi-' + weather.forecast[4].text;
      
		$('#spokane i:nth-child(1)').attr('class', iconCode );
		$('#spokane .day1 i').attr('class', iconCodeDay1 );
		$('#spokane .day2 i').attr('class', iconCodeDay2 );
		$('#spokane .day3 i').attr('class', iconCodeDay3 );
		$('#spokane .day4 i').attr('class', iconCodeDay4 );
		$('#spokane .day5 i').attr('class', iconCodeDay5 );

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
      var BoiseIconCode = 'wi wi-' + weather.text;
	  var BoiseIconCodeDay1 = 'wi wi-' + weather.forecast[0].text;
	  var BoiseIconCodeDay2 = 'wi wi-' + weather.forecast[1].text;
	  var BoiseIconCodeDay3 = 'wi wi-' + weather.forecast[2].text;
	  var BoiseIconCodeDay4 = 'wi wi-' + weather.forecast[3].text;
	  var BoiseIconCodeDay5 = 'wi wi-' + weather.forecast[4].text;
      
		$('#Boise i:nth-child(1)').attr('class', BoiseIconCode );
		$('#Boise .day1 i').attr('class', BoiseIconCodeDay1 );
		$('#Boise .day2 i').attr('class', BoiseIconCodeDay2 );
		$('#Boise .day3 i').attr('class', BoiseIconCodeDay3 );
		$('#Boise .day4 i').attr('class', BoiseIconCodeDay4 );
		$('#Boise .day5 i').attr('class', BoiseIconCodeDay5 );
		
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
      var iconCode = 'wi wi-' + weather.text;
	  var iconCodeDay1 = 'wi wi-' + weather.forecast[0].text;
	  var iconCodeDay2 = 'wi wi-' + weather.forecast[1].text;
	  var iconCodeDay3 = 'wi wi-' + weather.forecast[2].text;
	  var iconCodeDay4 = 'wi wi-' + weather.forecast[3].text;
	  var iconCodeDay5 = 'wi wi-' + weather.forecast[4].text;
      
		$('#Camas i:nth-child(1)').attr('class', iconCode );
		$('#Camas .day1 i').attr('class', iconCodeDay1 );
		$('#Camas .day2 i').attr('class', iconCodeDay2 );
		$('#Camas .day3 i').attr('class', iconCodeDay3 );
		$('#Camas .day4 i').attr('class', iconCodeDay4 );
		$('#Camas .day5 i').attr('class', iconCodeDay5 );
        
        
		
		
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
      var MauiIconCode = 'wi wi-' + weather.text;
	  var MauiIconCodeDay1 = 'wi wi-' + weather.forecast[0].text;
	  var MauiIconCodeDay2 = 'wi wi-' + weather.forecast[1].text;
	  var MauiIconCodeDay3 = 'wi wi-' + weather.forecast[2].text;
	  var MauiIconCodeDay4 = 'wi wi-' + weather.forecast[3].text;
	  var MauiIconCodeDay5 = 'wi wi-' + weather.forecast[4].text;
      
		$('#Maui i:nth-child(1)').attr('class', MauiIconCode );
		$('#Maui .day1 i').attr('class', MauiIconCodeDay1 );
		$('#Maui .day2 i').attr('class', MauiIconCodeDay2 );
		$('#Maui .day3 i').attr('class', MauiIconCodeDay3 );
		$('#Maui .day4 i').attr('class', MauiIconCodeDay4 );
		$('#Maui .day5 i').attr('class', MauiIconCodeDay5 );
      
		
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
      var MobileIconCode = 'wi wi-' + weather.text;
	  var MobileIconCodeDay1 = 'wi wi-' + weather.forecast[0].text;
	  var MobileIconCodeDay2 = 'wi wi-' + weather.forecast[1].text;
	  var MobileIconCodeDay3 = 'wi wi-' + weather.forecast[2].text;
	  var MobileIconCodeDay4 = 'wi wi-' + weather.forecast[3].text;
	  var MobileIconCodeDay5 = 'wi wi-' + weather.forecast[4].text;
      
		$('#Mobile i:nth-child(1)').attr('class', MobileIconCode );
		$('#Mobile .day1 i').attr('class', MobileIconCodeDay1 );
		$('#Mobile .day2 i').attr('class', MobileIconCodeDay2 );
		$('#Mobile .day3 i').attr('class', MobileIconCodeDay3 );
		$('#Mobile .day4 i').attr('class', MobileIconCodeDay4 );
		$('#Mobile .day5 i').attr('class', MobileIconCodeDay5 );
 
		
	},
	
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });