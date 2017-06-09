const logger = require('./log4jsUtils')('promiseUtils');

module.exports = {
  /**
   * fn: a function return a promise
   * actionName: for log
   */
  retry(fn, times, millisecond, actionName){
    return new Promise((reso, reje) => {
      let err;
      const attempt = (remainTimes) => {
        if(remainTimes === 0){
          reje(err);
        }else{
          fn()
            .then(reso)
            .catch((e) => {
              err = e;
              logger.info(`Retry ${actionName}, remain times: ${remainTimes}`);
              setTimeout(() => attempt(--remainTimes), millisecond);
            });
        }
      };
      attempt(times);
    });
  }
};