import express from 'express';
const app = express();
const port = "3000";
app.get("/", (req, res) => {
    res.send("Hello Word");
});
app.listen(port);
//# sourceMappingURL=server.js.map