import React, { useState, useEffect } from 'react';
import { syncTime, getTimeZones } from './Aux';
import { calcTime } from './Calc';
import ZoneRow from './ZoneRow';
import styles from './Home.module.css';

// we will make all clocks on the page have an interval for counting
function Home() {
	let [time, setTime] = useState<number | null>(null); // initially the time is just set to 0
	let [timeZones, setTimeZones] = useState<any[] | null>(null); // initially there exist no timezones

	async function fetchData() {
		let initTime:number | null = await syncTime();
		let zones:any = await getTimeZones();

		setTime(Math.round(initTime/1000)); // sets the time from retrieved milliseconds to seconds
		setTimeZones(zones);

	}

	useEffect(() => {
		fetchData().catch((error) => console.error(error));

		const fetch_interval:any = setInterval(() => {
			fetchData();
		}, 600000);

		const time_interval:any = setInterval(() => {
			setTime((previous_time) => {
				if (previous_time != null) 
					return previous_time + 1
					
				return null;
			});

		}, 1000);

		return () => {
			clearInterval(time_interval);
			clearInterval(fetch_interval);
		};

	}, []); // only rerender when renderToggle is toggled (swapped between true or false)

	return (
		<div className={styles.Home}>
			<div className={styles.top}>	
				<div className={styles.mainClock}>
					<time className={styles.time}>{calcTime(true, time)}</time>

					<div className={styles.description}>
						<span className={styles.abbrev}></span>
						<span className={styles.timeZone}></span>
					</div>

				</div>

			</div>

			<div className={styles.bottom}>
				<div className={styles.searchContainer}>
					<input className={styles.searchInput} type="search" placeholder="Search..."/>
				</div>
				
				<table className={styles.clocksTable}>
					<tr className={styles.tableHeader}>
						<th>Zone</th>
						<th>Time</th>
					</tr>

						{timeZones != null && timeZones.map((row:any) => (
							<ZoneRow time={time} is_millitary={true} offset={row.utc_offset} name={row.name} abbrev={row.abbrev}/>
						))}

				</table>

			</div>

		</div>
	);

}

export default Home;
