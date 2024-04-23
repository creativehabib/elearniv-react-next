const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://elearniv-react-next-i5p7.vercel.app"
		: "http://localhost:3000";

export default baseUrl;
