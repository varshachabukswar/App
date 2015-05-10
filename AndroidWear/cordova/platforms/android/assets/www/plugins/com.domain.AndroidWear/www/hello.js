cordova.define("com.domain.AndroidWear.hello", function(require, exports, module) { /*global cordova, module*/
alert("in hello.js");
    window.greet =  function (name, successCallback, errorCallback) {
		alert("in plugin greet1");
        cordova.exec(successCallback, errorCallback, "Hello", "greet", [name]);
	}


});
