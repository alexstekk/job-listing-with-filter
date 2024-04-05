export const selectAllPositions = (state) => state.positions;

export const selectVisibleSelector = (state, filters = []) => {
	if (filters.length === 0) {
		return state.positions;
	}

	return state.positions.filter((pos) => {

		const posAttributes = [].concat(
			pos.role,
			pos.level,
			...pos.languages,
			...pos.tools
		);

		return filters.every((filter) => posAttributes.includes(filter));
	});
};

