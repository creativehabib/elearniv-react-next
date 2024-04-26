const baseUrl =
	process.env.NODE_ENV === "production"

		? "https://www.esubject.in"
		: "http://localhost:3000";


export default baseUrl;

