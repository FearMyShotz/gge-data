Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function ObserverManager() {
    this.observerData = [];
  }
  ObserverManager.prototype.subscribeOnce = function (e) {
    for (var t = this.observerData.length, n = 0; n < t; n++) {
      if (e === this.observerData[n]) {
        return;
      }
    }
    this.observerData.push(e);
  };
  ObserverManager.prototype.subscribe = function (e) {
    this.observerData.push(e);
  };
  ObserverManager.prototype.unsubscribe = function (e) {
    for (var t = this.observerData.length, n = 0; n < t; n++) {
      if (e === this.observerData[n]) {
        this.observerData.splice(n, 1);
        break;
      }
    }
  };
  ObserverManager.prototype.unsubscribeAllObserver = function () {
    this.observerData = [];
  };
  ObserverManager.prototype.notify = function (e) {
    for (var t = this.observerData.length - 1; t >= 0; t--) {
      this.observerData[t].update(e);
    }
  };
  return ObserverManager;
}();
exports.ObserverManager = i;