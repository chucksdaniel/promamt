const express = require("express");
const colors = require("colors");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();

const schema = require("./v1/schema/schema");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());

// app.use(
// 	"/graphql",
// 	graphqlHTTP({
// 		schema,
// 		graphiql: process.env.NODE_ENV === "development",
// 	})
// );

app.use(
	"/v1/graphql",
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === "development",
	})
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server listening/running on port ${PORT}`);
});
