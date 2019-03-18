import React, { Component } from 'react';

/**
 * An example that shows how you can interpolate/mix javascript with HTML
 */
class Example extends Component {
	getTime () {
		function startTime() {
		  var today = new Date();
		  var h = today.getHours();
		  var m = today.getMinutes();
		  var s = today.getSeconds();
		  m = checkTime(m);
		  s = checkTime(s);
		  document.getElementById('time').innerHTML =
		  h + ":" + m + ":" + s;
		  var t = setTimeout(startTime, 500);
		}
		function checkTime(i) {
		  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
		  return i;
		}
		startTime();		
	}
	getData(){
		var count = 0;
		function counter() {
			count++;
			document.getElementById("counter").innerHTML = "count: "+count;
			setTimeout(() => {
				counter();
	  		}, 1000)
		} 
		counter();		
	}
	componentDidMount(){
	  this.getData();
	  this.getTime();
	}    
    render () {
        //const date = new Date().toDateString(); 
        var counter = 0;
        return (
            <div>
                <p id="time"></p>
                <span id="counter"></span>
            </div>
        )
    }
}

export default Example