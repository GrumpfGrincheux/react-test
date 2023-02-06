import { useCallback, useState, useEffect } from "react";

export function useCatFact() {
	const [catFact, setCatFact] = useState();
	const getCatFact = useCallback(async () => {
		try {
			const response = await fetch("https://catfact.ninja/fact");
			let data = await response.json();
			if (response.status === 200) {
				setCatFact(data.fact);
			} else {
				setCatFact(`Error ${response.status}`);
			}
		} catch (error) {
			setCatFact(
				`An error occured, we're sorry for the inconvenience, please try again later.`,
			);
		}
	}, []);
	useEffect(() => {
		getCatFact();
	}, [getCatFact]);
	return {
		catFact,
		getCatFact,
	};
}
