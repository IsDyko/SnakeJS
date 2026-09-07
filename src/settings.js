export async function loadSettings() {
	const response = await fetch("../config.json");
	const data = await response.json();
	return data;
}
