module.exports.multitenancy = function(req){
    const Tenants = sails.models.tenants;
    return new Promise(async (resolve, reject) => {
        console.log('test')
        console.log(req.hostname)
        const data = {
          "host": "127.0.0.1",// (String - The host of datasource)
           "port": 27017,// (Number - The port of datasource)
           "schema": true, //(Boolean - Determine if the datasource use schameas in the tables or is a schamless datasource)
           "adapter": "sails-mongo",// (String - Indicates the driver use for the datasource. Example: sails-mysql) 
           "user": "admin", // (String - Indicates the user of datasource)
           "password": "password", //(String - Indicates the password of datasource)
           "database": "tenant1", // (String - Indicates the name of database in datasource)
           "identity": "tenant1" //(String - Indicate the name of datasource)
         }
         const _datasource = require('sails-hook-multitenant/datasource');
        // ....
        // ....
        const datasource = new _datasource(data);
         //await Tenants.creat
        /*
        const datasource = await Tenants.findOne({
            identity: req.hostname
        });
        */
        resolve(datasource);
    });
}