import { JobPosition } from './JobPosition';
import {
	selectAllPositions,
	selectVisibleSelector,
} from '../store/positions/positions-selectors';
import { selectFilters } from '../store/filters/filters-selector';
import { useSelector } from 'react-redux';
import { addFilter } from '../store/filters/filters-actions';
import { useDispatch } from 'react-redux';

const JobList = () => {
	const dispatch = useDispatch();
	const activeFilters = useSelector(selectFilters);
	const positions = useSelector(state => selectVisibleSelector(state,activeFilters));

	const handleAddFilter = (filter) => {
		dispatch(addFilter(filter));
	};
	return (
		<div className='job-list'>
			{positions.map((item) => (
				<JobPosition
					handleAddFilter={handleAddFilter}
					key={item.id}
					{...item}
				/>
			))}
		</div>
	);
};

export { JobList };
