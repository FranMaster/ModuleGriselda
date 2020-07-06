let app=require('./app');
let config=require('./config/config')

app.listen(config.port,()=>{console.log(`Escuchando por Puerto ${config.port}`)})