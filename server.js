const app = require('./app/main')

const port = 3333;

app.listen(port,() => {
    console.log("server is running");
});