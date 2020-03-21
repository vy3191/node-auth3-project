const server = require('./server');
const PORT = process.env.PORT || 7500;

server.listen(PORT, (req,res) => {
   console.log(`App is running at htpps://localhost:${PORT}`);
});