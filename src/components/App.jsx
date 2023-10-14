import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import ImageDetailPage from './ImageDetailPage';
import { Footer } from './Footer';

import './App.css';

export function App() {
	const [artworks, setArtworks] = useState([]);
	const [selected, setSelected] = useState(null);
	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			setArtworks(json.data);
		});
	}
	function handleClickView(artwork) {
		setSelected(artwork);
	}

	return (
		<div className="App">
			{selected ? (
				<ImageDetailPage selected={selected} setSelected={setSelected} />
			) : (
				<>
					<h1>TCL Career Lab Art Finder</h1>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<ul>
						{artworks.map((artwork, index) => {
							return (
								<li key={index}>
									{`${artwork.title}, ${artwork.artist_title}`}{' '}
									<button onClick={(e) => handleClickView(artwork)}>
										View
									</button>
								</li>
							);
						})}
					</ul>
					<Footer />
				</>
			)}
		</div>
	);
}
