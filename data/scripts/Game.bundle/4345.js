Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./15.js");
var s = require("./54.js");
var r = require("./1878.js");
var l = require("./4346.js");
var c = function (e) {
  function PopoverData() {
    var t = e !== null && e.apply(this, arguments) || this;
    t._queueIdIterator = 0;
    t._itemQueue = [];
    return t;
  }
  n.__extends(PopoverData, e);
  PopoverData.prototype.parseSPO = function (e) {
    if (e) {
      if (e != null) {
        for (var t = 0, i = e; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            var o = new l.PopoverVO();
            o.parseServerObject(n);
            o.queueId = this.createNextQueueId();
            this._itemQueue.push(o);
          }
        }
      }
      a.CastleBasicController.getInstance().dispatchEvent(new r.PopoverEvent(r.PopoverEvent.ON_NEW_POPOVER_ARRIVED));
    }
  };
  PopoverData.prototype.removeQueueItem = function (e) {
    for (var t = 0; t < this._itemQueue.length; ++t) {
      if (this._itemQueue[t].queueId == e) {
        this._itemQueue.splice(t, 1);
        break;
      }
    }
  };
  PopoverData.prototype.createNextQueueId = function () {
    return this._queueIdIterator++;
  };
  PopoverData.prototype.getPopoverById = function (e) {
    if (this._itemQueue != null) {
      for (var t = 0, i = this._itemQueue; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.queueId == e) {
          return n;
        }
      }
    }
    return null;
  };
  PopoverData.prototype.getNextPopover = function () {
    if (this._itemQueue.length > 0) {
      return this._itemQueue[0];
    } else {
      return null;
    }
  };
  Object.defineProperty(PopoverData.prototype, "itemQueue", {
    get: function () {
      return this._itemQueue;
    },
    enumerable: true,
    configurable: true
  });
  return PopoverData;
}(s.CastleBasicData);
exports.PopoverData = c;
o.classImplementsInterfaces(c, "IUpdatable");