const path = require('path');
const vite = require('./vite.js');

module.exports = async function() {
  this.global.viteServer = await vite.start({
    configFile: path.join(__dirname, '../vite.config.js')
  });

  const port = this.global.viteServer.config.server.port;
  this.global.viteServerUrl = `http://localhost:${port}`;
}