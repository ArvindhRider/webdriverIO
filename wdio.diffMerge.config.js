//To merge the parent config with this new additional changes
//In simple words deepmerge is used to merge to objects

//deepmerge is the node module which we are using to merge the config files
const merge = require('deepmerge');
const wdioConf = require('./wdio.conf');

//we are calling wdioConfig.config(exports.config from the parent config)
//syntax
//merge(parentobj, tobemergedObj)
exports.config = merge(wdioConf.config, {
  //All the attributes of the objects whcih needs to be merged
  baseUrl: 'https://rahulshettyacademy.com',
  waitforTimeout: 10000,
});
