Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AIsoViewObjectGroupSimpleList() {
    var t = this;
    t._list = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AIsoViewObjectGroupSimpleList, e);
  AIsoViewObjectGroupSimpleList.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.resetList();
  };
  AIsoViewObjectGroupSimpleList.prototype.resetList = function () {
    this._list = this.destroyAndCreateNewObjectList(this.list);
    this.isoRenderer.objects.invalidateCompleteObjectsList();
  };
  AIsoViewObjectGroupSimpleList.prototype.removeObjectByVE = function (e) {
    if (this.list != null) {
      for (var t = 0, i = this.list; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n == e) {
          this.removeObjectFromList(n, this.list);
          break;
        }
      }
    }
  };
  AIsoViewObjectGroupSimpleList.prototype.render = function (e = false) {
    if (this.list != null) {
      for (var t = 0, i = this.list; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.updateDisp();
        }
      }
    }
  };
  AIsoViewObjectGroupSimpleList.prototype.containsObject = function (e) {
    return this.list.indexOf(e) >= 0;
  };
  AIsoViewObjectGroupSimpleList.prototype.fillInCompleteList = function (e) {
    if (this.list != null) {
      for (var t = 0, i = this.list; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e.push(n);
        }
      }
    }
  };
  Object.defineProperty(AIsoViewObjectGroupSimpleList.prototype, "list", {
    get: function () {
      return this._list;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoViewObjectGroupSimpleList;
}(require("./1009.js").AIsoViewObjectGroup);
exports.AIsoViewObjectGroupSimpleList = o;