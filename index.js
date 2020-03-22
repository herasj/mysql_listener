const ZongJi = require('zongji');

//User with replication privileges
const config = {
    host     : 'localhost',
    user     : 'listener',
    password : 'zMzTXWMMiKxgQ3hp',
};

let zongji = new ZongJi(config);
console.log("Starting app");

 // Binlog must be started, optionally pass in filters
zongji.start({
    includeEvents: ['tablemap', 'writerows', 'updaterows', 'deleterows']
  });

// Each change to the replication log results in an event
zongji.on('binlog', function(evt) {
  evt.dump();
});
 