import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from '../store/filters/filters-selector';
import { clearFilter, removeFilter } from '../store/filters/filters-actions';
const FilterPanel = () => {
	const filters = useSelector(selectFilters);

	const dispatch = useDispatch();

	if (filters.length === 0) return null;

	return (
		<Card className='filter-panel'>
			<div className='filter-panel-wrapper'>
				<Stack>
					{filters.map((filter) => (
						<Badge
							variant='clearable'
							key={filter}
							onClear={() => dispatch(removeFilter(filter))}
						>
							{filter}
						</Badge>
					))}
				</Stack>

				<button
					className='link'
					onClick={() => dispatch(clearFilter)}
				>
					Clear
				</button>
			</div>
		</Card>
	);
};

export { FilterPanel };
