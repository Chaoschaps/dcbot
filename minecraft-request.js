const Query = require("minecraft-query");

const q = new Query({host: 's.cmplx.tk', port: 25568, timeout: 10000});

async function Server() {
  let stats =  await q.fullStat();
  q.close();
  return stats.motd;
}

//Server();

exports.Server =  Server;