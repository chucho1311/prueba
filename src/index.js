const express = require('express');
const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const {swaggerDocs: V1SwaggerDocs} = require('./v1/swagger');

const app = express();
const PORT = process.env.PORT || 3000;
const cache = apicache.middleware;

header('Access-Control-Allow-Origin: *')

app.use(express.json());
app.use(cache("2 minutes"));
app.use("/api/v1", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}, succesfull`);
    V1SwaggerDocs(app, PORT);
});