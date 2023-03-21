const serverURL =
	process.env.NODE_ENV === "development"
		? "http://localhost:5000/"
		: "https://mern-server-azure.vercel.app/";

export default serverURL;