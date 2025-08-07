Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function ClientFunnelPlayTimeStateVO(e, t) {
    this.timeDelayMinutes = e;
    this.eventState = t;
  }
  Object.defineProperty(ClientFunnelPlayTimeStateVO.prototype, "timeDelayMilliseconds", {
    get: function () {
      return this.timeDelayMinutes * 60 * 1000;
    },
    enumerable: true,
    configurable: true
  });
  return ClientFunnelPlayTimeStateVO;
}();
exports.ClientFunnelPlayTimeStateVO = i;