import { JobPosition } from './JobPosition';
import {
	selectAllPositions,
	selectVisibleSelector,
} from '../store/positions/positions-selectors';
import { useSelector } from 'react-redux';

const JobList = () => {
	
	const positions = useSelector(selectVisibleSelector);

	return (
		<div className='job-list'>
			{positions.map((item) => (
				<JobPosition
					key={item.id}
					{...item}
				/>
			))}
		</div>
	);
};

export { JobList };
