import React from 'react';

const ImageDetailPage = ({ setSelected }) => {
	const handleClickBack = () => {
		setSelected(null);
	};
	return (
		<div>
			<button onClick={handleClickBack}>Back</button>
		</div>
	);
};

export default ImageDetailPage;
