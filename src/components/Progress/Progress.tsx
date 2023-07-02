'use client'

import { CircularProgress, useMediaQuery } from '@mui/material';

const Progress = () => {
	const query = useMediaQuery('(max-width: 768px)')

	return (
		<CircularProgress  size={query ? 15 : 30} sx={{ color: '#ffffff' }} />
	);
};

export default Progress;