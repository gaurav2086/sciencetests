initTemplateLoader = {
	start: function(message, noLoader) {
		var selector = document.getElementById('body');
		if(noLoader === true) {
			selector.insertAdjacentHTML('beforeend', '<div id="loader">' + '<div id="loader-message"></div>' + '</div>');
		} else {
			selector.insertAdjacentHTML('beforeend', '<div id="loader">' + '<div class="spinner">'+
	                                                '<div class="bounce1"></div>' +
	                                                '<div class="bounce2"></div>' +
	                                                '<div class="bounce3"></div>' +
	                                            '</div>' + '<div id="loader-message">Loading.</div>' + '</div>');
		};

		if(!message) { //if we have a specific message for the loader, skip messages below
			var i = 0;
			var loaderMessage = document.getElementById('loader-message');
			generateRandomFact = function(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			};
			changeMessage = function() {
				i++
				if (i > 9)
					loaderMessage.innerHTML = "Still working on it.";
				if (i > 16)
					loaderMessage.innerHTML = "We're making progress.";
				if (i > 24)
					loaderMessage.innerHTML = "Did you know - Socrative supports Teachers in over 150 countries!";
				if (i > 34)
					loaderMessage.innerHTML = "Did you know - Socrative users have created over 6 million quizzes!";

			};
			
			//call changeMessage function each second
			this.message = setInterval(changeMessage, 1000);
		} else { //show the specific message for the loader
			document.getElementById('loader-message').innerHTML = message;
		}
	},

	stop: function() {
		var that = this;
		this.loader = document.getElementById('loader');
		if(this.loader != null)
			this.loader.parentNode.removeChild(this.loader);
		clearInterval(that.message);


	}
};

// start a timer when this js is loaded
// start the app loader only if the app loading is taking more than 2 seconds
checkTime = {
	start: function() {
		var that = this;
		var time = 0;
		var checkTimer = function() {
			time++;
			if (time > 2){
				initTemplateLoader.start();
				that.reset();
			}
		};
		this.counter = setInterval(checkTimer, 1000);
	},

	reset: function() {
		var that = this;
		clearInterval(that.counter);
	}
}

checkTime.start();
