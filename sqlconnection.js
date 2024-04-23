const { createPool } = require('mysql');
let connPool = null;
const getConnectionPool = () => {
    const config = {
        host: "hakateinc-latest-feb-2019-18.crhg7zleeuhf.ap-south-1.rds.amazonaws.com",
        user: "stagingdb_writespecific",
        password: ")bg*V}3d6[8%$3/l*:7",
        database: "frndzzy_v2_clean",
        connectionLimit: 10
    };
    if (!connPool) {
        connPool = createPool(config);
    }
    return connPool;
}

  module.exports = getConnectionPool;

