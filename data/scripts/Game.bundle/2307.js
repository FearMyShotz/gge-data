Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleDelayCommandVO(e, t) {
    this.isStackAble = false;
    this.commandID = e;
    this.isStackAble = t;
    this.commandList = [];
    this.paramList = [];
  }
  CastleDelayCommandVO.prototype.addCommand = function (e, t) {
    if (!this.isStackAble) {
      this.commandList = [];
      this.paramList = [];
    }
    this.commandList.unshift(e);
    this.paramList.unshift(t);
  };
  return CastleDelayCommandVO;
}();
exports.CastleDelayCommandVO = n;