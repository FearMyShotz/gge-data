Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = function (e) {
  function HTTPStatusEvent(t, n = false, i = false, a = 0, s = false) {
    var r = e.call(this, t, n, i) || this;
    r.type = t;
    r.bubbles = n;
    r.cancelable = i;
    r.status = a;
    r.redirected = s;
    return r;
  }
  i.__extends(HTTPStatusEvent, e);
  HTTPStatusEvent.prototype.clone = function () {
    return new HTTPStatusEvent(this.type, this.bubbles, this.cancelable, this.status, this.redirected);
  };
  HTTPStatusEvent.HTTP_STATUS = "httpStatus";
  HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
  return HTTPStatusEvent;
}(createjs.Event);
exports.HTTPStatusEvent = a;