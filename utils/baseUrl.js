const baseUrl =
	process.env.NODE_ENV === "production"

		? "http://54.206.75.106:3306"
		: "http://localhost:3000";


export default baseUrl;

