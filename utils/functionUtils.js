function checkArguments(){
  for(var k in arguments){
    if(!arguments[k]){
      const errObj = {message: 'Illegal arguments. '};
      return Object.assign(errObj, arguments);
    }
  }
  return {};
}

module.exports = {
  checkArguments
};