Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = function (e) {
  function AIsoDataObjectGroupSimpleList() {
    var t = this;
    t._list = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AIsoDataObjectGroupSimpleList, e);
  AIsoDataObjectGroupSimpleList.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.resetList();
  };
  AIsoDataObjectGroupSimpleList.prototype.resetList = function () {
    this._list = s.IsoHelper.data.destroyAndCreateNewVOList(this.list);
  };
  AIsoDataObjectGroupSimpleList.prototype.addObject = function (e) {
    if (e) {
      this.list.push(e);
    }
  };
  AIsoDataObjectGroupSimpleList.prototype.removeObject = function (e) {
    var t = o.int(this.list.indexOf(e));
    if (t >= 0) {
      this.destroyObject(e);
      this.list.splice(t, 1);
    }
  };
  AIsoDataObjectGroupSimpleList.prototype.containsObjectById = function (e) {
    if (e < 0) {
      return false;
    }
    if (this.list != null) {
      for (var t = 0, i = this.list; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.objectId == e) {
          return true;
        }
      }
    }
    return false;
  };
  AIsoDataObjectGroupSimpleList.prototype.containsObject = function (e) {
    return !!e && this.list.indexOf(e) >= 0;
  };
  AIsoDataObjectGroupSimpleList.prototype.fillInCompleteList = function (e) {
    if (this.list != null) {
      for (var t = 0, i = this.list; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e.push(n);
        }
      }
    }
  };
  Object.defineProperty(AIsoDataObjectGroupSimpleList.prototype, "list", {
    get: function () {
      return this._list;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoDataObjectGroupSimpleList;
}(require("./862.js").AIsoDataObjectGroup);
exports.AIsoDataObjectGroupSimpleList = a;
var s = require("./46.js");