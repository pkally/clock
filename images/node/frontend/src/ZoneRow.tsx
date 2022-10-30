import React from 'react';
import { calcTime } from './Calc';
import styles from './ZoneRow.module.css';

export default function ZoneRow(props:any) {
	return (
		<tr>
			<th>{props.name + " (" + props.abbrev + ")"}</th>
			<th>{calcTime(props.is_millitary, Math.round(props.offset/1000) + props.time)}</th>
		</tr>

	);
}
