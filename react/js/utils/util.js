var crypto = require('crypto');

var util = {
  requestKey:function(ary) {
    var i, obj;
    var sha1 = crypto.createHash('sha1');
    var hashAry = Object.assign({}, ary);
    for ( i = 0; i < ary.length; i++ ) {
      if ( $.type(ary[i]) === 'object' ) {
        obj = ary[i];
        obj = Object.keys(obj).sort().reduce(function(pre, key) {
          pre[key] = obj[key];
        }, {})
      }
    }
    sha1.update(JSON.stringify(hashAry));
    return sha1.digest('hex');
  }
};

module.exports = util;
