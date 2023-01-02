const express = require('express');
const cors = require('cors');
const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const {swaggerDocs: V1SwaggerDocs} = require('./v1/swagger');

const app = express();
const PORT = process.env.PORT || 3001 ;
const cache = apicache.middleware;

app.use(cors())
app.use(express.json());
app.use(cache("2 minutes"));
app.use("/api/v1", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}, succesfull`);
    V1SwaggerDocs(app, PORT);
});