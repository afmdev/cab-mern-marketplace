const serverURL =
	process.env.NODE_ENV === "development"
		? "http://localhost:5000/"
		: "https://afm-mern.herokuapp.com/";

export default serverURL;