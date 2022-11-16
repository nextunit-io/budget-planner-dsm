import bodyparser from 'body-parser';
import express from "express";
import router from "./routes";
const app = express();
const port = 8080; // default port to listen

app.use(router);
app.use(bodyparser.json());

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});