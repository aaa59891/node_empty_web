let config;

try{
  config = require('./conf/default.json');
  let current;

  switch(process.env.NODE_ENV){
  case 'test':
    current = 'test';
    break;
  case 'prod':
    current = 'prod';
    break;
  case 'stage':
    current = 'stage';
    break;
  }
  
  if(current){
    Object.assign(config, require(`./conf/${current}/config.json`));
  }
  console.log(JSON.stringify(config,undefined,2));
}catch(e){
  console.log(e);
}

module.exports = config;