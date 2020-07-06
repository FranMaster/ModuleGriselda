const mongoose=require('mongoose')
let app = require('./app');
let config = require('./config/config')
app.listen(config.port, () => { 
    console.log(`Escuchando por Puerto ${config.port}`)
    mongoose.connect(config.database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(()=>{console.log('DataBase OnLine...')})
      .catch((err)=>{console.log(`DataBase OffLine. \n error:${err}`)})
})