const express = require('express');
const app = express();
const path = require("path");
const PORT = 3030;
app.use(express.static("public"));

/* enrutador */
const mainRouter = require('./routers/main');

/* rutas */
app.use("/", mainRouter);



app.listen(PORT,()=>{
    console.log(`
    server listen in port ${PORT}
    http://localhost:${PORT}`)
});