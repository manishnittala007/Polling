const express = require('express')
var cors = require('cors')
const getConnectionPool = require('./sqlconnection');
const app = express()
const port = 3000
app.use(cors())
app.get('/getData', async (req, res) => {  
  // config for your database
  
  const connPool = getConnectionPool();
  connPool.query(`SELECT * FROM questionnaire LIMIT 3`, function (err, result, fields) {
        
    if (err) console.log(err)

    // send records as a response
    res.send(result).status(200);
    
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})