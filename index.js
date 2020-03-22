const ZongJi = require('zongji');

//User with replication privileges
const config = {
    host     : 'localhost',
    user     : 'listener',
    password : 'zMzTXWMMiKxgQ3hp',
};

let zongji = new ZongJi(config);
 
// Each change to the replication log results in an event
zongji.on('binlog', function(evt) {
  evt.dump();
});
 
// Binlog must be started, optionally pass in filters
zongji.start({
  includeEvents: ['tablemap', 'writerows', 'updaterows', 'deleterows']
});

process.on('SIGINT', function() {
    console.log('Got SIGINT.');
    zongji.stop();
    process.exit();
  });