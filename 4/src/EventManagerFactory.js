import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{

  static create(events, types) {

		var eventsArray = [];

		var j = 0;

		for (var i = 0; i < events.length; i++) {
			if ( types.includes(events[i].type) ) {
				eventsArray[j] = new Event(events[i].second, events[i].type, events[i].message);
				j++;
			}
		}

		for (var i = 0; i < eventsArray.length; i++) {
  		setEventTimer(i);
  	}

  	function setEventTimer (time) {
		  var prueba = setTimeout(function () {
  	    console.log('At second ' + eventsArray[time].second + ': {type: "' + eventsArray[time].type +'", message: "' + eventsArray[time].message + '"}');
  	  }, parseInt(eventsArray[time].second)*1000);
		};

    return new EventManager();
  }
};