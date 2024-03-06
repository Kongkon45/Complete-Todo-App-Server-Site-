const app = require('./app');
const config = require('./config/config')

const PORT = config.app.port || 3010;

app.listen(PORT, ()=>{
    console.log(`Server is running successfully at http://localhost:${PORT}`);
})