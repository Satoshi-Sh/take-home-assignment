import React from 'react';

const ImageDetailPage = ({ selected, setSelected }) => {
	const imageURL = `https://www.artic.edu/iiif/2/${selected.image_id}/full/843,/0/default.jpg`;
	const handleClickBack = () => {
		setSelected(null);
	};
	return (
		<div>
			<h1>{selected.title}</h1>
			<h2>By {selected.artist_title}</h2>
			<button onClick={handleClickBack}>Back</button>
			<img alt={selected.thumbnail.alt_text} src={imageURL} />
		</div>
	);
};

export default ImageDetailPage;
