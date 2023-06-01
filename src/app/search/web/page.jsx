import React from "react";

export default async function page({ searchParams }) {
	const response = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
	);
	const data = await response.json();

	const results = data.items;
	return <div>{results && results.map((res) => <h1>{res.title}</h1>)}</div>;
}

/*
API_KEY = AIzaSyBsZBSOWbOUPpZZhremyzNd3ibBSbPlVao

*/
