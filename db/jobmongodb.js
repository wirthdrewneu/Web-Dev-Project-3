const { MongoClient, ObjectId } = require("mongodb");
if (process.env.NODE_ENV !== "production") require("dotenv").config();
function myDB() {
	const myDB = {};
	const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URI}`;
	console.log(uri);

	myDB.getCaldata = async () => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobcalendar = db.collection("jobcalendar");
		const query = {};
		console.log(jobcalendar.find(query).toArray());
		return jobcalendar.find(query).toArray();
	};

	myDB.getAppDetails = async () => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobposts");
		const query = {};
		console.log(jobposts.find(query).toArray());
		return jobposts.find(query).sort({ _id: -1 }).toArray();
	};

	myDB.createAppPost = async (post) => {
		console.log("created post:", post);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobposts");
		return await jobposts.insert(post);
	};

	myDB.editAppPost = async (post) => {
		console.log("created post:", post);
		const findByID = post._id;
		delete post._id;
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobposts");
		let newValues = { // very good use of the $set operator!
			$set: { 
				Company: post.Company,
				Role: post.Role,
				Type: post.Type,
				RecruiterInfo: post.RecruiterInfo,
				DateApplied: post.DateApplied,
				Stage: post.Stage,
				StageDate: post.StageDate,
				JobDescription: post.JobDescription
			},
		};
		var myquery = { _id: ObjectId(findByID)}; // not sure if affects anything practically but may be good to stick with either var or let
		return await jobposts.updateOne(myquery, newValues);
	};

	myDB.createAppEvent = async (post) => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobcalendar");
		return await jobposts.insert(post);
	};

	myDB.delAppEvent = async (post) => {
		console.log("Post_id", post.title);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobcalendar");
		var myquery = { title: post.title };
		console.log("jobpostquery", jobposts.find(myquery));
		return await jobposts.deleteOne(myquery);
	};

	myDB.delApplication = async (post) => {
		console.log("Post_id", post._id, post.Company);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobposts");
		var myquery = { _id: ObjectId(post._id) };
		// console.log( "jobpostquery", jobposts.find(myquery));
		let dbResponse = {
			success: true,
			message: "Record Deleted Successfully",
		};
		try {
			await jobposts.deleteOne(myquery);
		} catch (error) {
			console.log(error);
			dbResponse = {
				success: false,
				message: error,
			};
			return dbResponse;
		}
		return dbResponse;
	};

	myDB.updateAppEvent = async (post) => {
		console.log("Post_id", post.title);
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobposts = db.collection("jobcalendar");
		var myquery = { title: post.title };
		var newvalues = {
			$set: { title: post.title, start: post.start, end: post.end },
		};
		console.log("jobpostquery", jobposts.find(myquery));
		return await jobposts.updateOne(myquery, newvalues);
	};

	//   dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {

	/*return [
			{
				Stage: "Online Assesment",
				Company: "Google",
				Date: new Date(),
			},
			{
				Stage: "1st Interview",
				Company: "Google",
				Date: new Date(),
			},
			{
				Stage: "1st Interview",
				Company: "Google",
				Date: new Date(),
			},
		];
	};*/

	return myDB;
}

module.exports = myDB();

// Replace the uri string with your MongoDB deployment's connection string.
