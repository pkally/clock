// for calculating times given unix epoch (milliseconds)
export function calcTime(millitary_time:boolean, given_seconds:number): string | null {
	// we first get the number of seconds.
	let hours:number | string = Math.floor(given_seconds/3600) % 24;
	let minutes:number | string = Math.floor((given_seconds - (hours * 3600)) / 60) % 60;
	let seconds:number | string = Math.floor(given_seconds - (hours * 3600) - (minutes * 60)) % 60;

	let period:string = "" // we only deal with periods if not expressing millitary time (AM and PM)

	if (!millitary_time) { // do a couple more changes for the 12 hour clock
		if (hours < 12) 
			period = "AM";

		else
			hours %= 12
			period = "PM";

		if (hours == 0)
			hours = 12;

	}

	if (hours < 10)
		hours = "0" + hours;
	
	if (minutes < 10)
		minutes = "0" + minutes;

	if (seconds < 10)
		seconds = "0" + seconds;

	return (hours + ':' + minutes + ':' + seconds + " " + period);

}
