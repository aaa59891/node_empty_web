
module.exports = {
  isEmptyObj(obj){
    if(!obj)
      return true;
    return Object.keys(obj).length === 0;
  },
  
  createObject(key, value, mustContainKey){
    const obj = {};
    if(mustContainKey){
      obj[key] = value;
      return obj;
    }
    if(value){
      obj[key] = value;
    }
    return obj;
  }
};