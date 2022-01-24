const Query = require("minecraft-query");

const q = new Query({host: 's.cmplx.tk', port: 25568, timeout: 10000});

function Server() {
  q.fullStat()
  .then(success => {
    let stats =  {};
    stats = success;
    console.log(stats);
    //return q.basicStat()
    q.close();
  })
}