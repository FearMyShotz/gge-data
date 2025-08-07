Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./6.js");
var r = function () {
  function CollectableList() {
    this._list = [];
  }
  CollectableList.prototype.addItem = function (e, t = false) {
    if (e) {
      this._list.push(e);
      if (t) {
        this.combineDuplicatedItems();
      }
    }
    return this;
  };
  CollectableList.prototype.addItemOnIndex = function (e, t, i = false) {
    this._list.splice(t, 0, e);
    if (i) {
      this.combineDuplicatedItems();
    }
    return this;
  };
  CollectableList.prototype.addList = function (e, t = false) {
    if (!e) {
      return this;
    }
    for (var i = 0; i < e.length; ++i) {
      this._list.push(e._list[i].clone());
    }
    if (t) {
      this.combineDuplicatedItems();
    }
    return this;
  };
  CollectableList.prototype.replaceItemOnIndex = function (e, t) {
    if (!(t < 0) && !(t >= this._list.length)) {
      this.removeByIndex(t);
      this.addItemOnIndex(e, t);
    }
  };
  CollectableList.prototype.removeByIndex = function (e) {
    return this._list.splice(e, 1)[0];
  };
  CollectableList.prototype.removeByItem = function (e) {
    var t = s.int(this._list.indexOf(e));
    if (t >= 0) {
      return this.removeByIndex(t);
    } else {
      return null;
    }
  };
  Object.defineProperty(CollectableList.prototype, "length", {
    get: function () {
      return this._list.length;
    },
    enumerable: true,
    configurable: true
  });
  CollectableList.prototype.getItemByIndex = function (e) {
    if (e < this._list.length) {
      return this._list[e];
    } else {
      return null;
    }
  };
  CollectableList.prototype.getItemByIndexSave = function (e) {
    if (e >= 0 && e < this._list.length) {
      return this._list[e];
    } else {
      return null;
    }
  };
  CollectableList.prototype.getIndexByType = function (e) {
    for (var t = 0; t < this._list.length; ++t) {
      if (this._list[t].itemType == e) {
        return t;
      }
    }
    return -1;
  };
  CollectableList.prototype.getIndexByTypeVO = function (e) {
    for (var t = 0; t < this._list.length; ++t) {
      if (e.hasType(this._list[t])) {
        return t;
      }
    }
    return -1;
  };
  CollectableList.prototype.getFirstItemOfType = function (e) {
    for (var t = 0; t < this._list.length; ++t) {
      if (this._list[t].itemType == e) {
        return this._list[t];
      }
    }
    return null;
  };
  CollectableList.prototype.getFirstItemOfTypeVO = function (e) {
    for (var t = 0; t < this._list.length; ++t) {
      if (e.hasType(this._list[t])) {
        return this._list[t];
      }
    }
    return null;
  };
  CollectableList.prototype.getFirstItemOfTypes = function (e) {
    for (var t = 0; t < this._list.length; ++t) {
      if (e.indexOf(this._list[t].itemType) >= 0) {
        return this._list[t];
      }
    }
    return null;
  };
  CollectableList.prototype.getFirstItemOfTypeVOs = function (e) {
    for (var t = 0; t < this._list.length; ++t) {
      for (var i = 0; i < this.list.length; ++i) {
        e[i];
        if (e[i].hasType(this._list[t])) {
          return this._list[t];
        }
      }
    }
    return null;
  };
  CollectableList.prototype.getIndicesByType = function (e) {
    var t = [];
    for (var i = 0; i < this._list.length; ++i) {
      if (this._list[i].itemType == e) {
        t.push(i);
      }
    }
    return t;
  };
  CollectableList.prototype.getIndicesByTypeVO = function (e) {
    var t = [];
    for (var i = 0; i < this._list.length; ++i) {
      if (e.hasType(this._list[i])) {
        t.push(i);
      }
    }
    return t;
  };
  CollectableList.prototype.getItemByType = function (e) {
    var t = s.int(this.getIndexByType(e));
    if (t >= 0) {
      return this._list[t];
    } else {
      return null;
    }
  };
  CollectableList.prototype.getItemByTypeVO = function (e) {
    var t = s.int(this.getIndexByTypeVO(e));
    if (t >= 0) {
      return this._list[t];
    } else {
      return null;
    }
  };
  CollectableList.prototype.getFilteredListByTypes = function (e) {
    var t = new CollectableList();
    for (var i = 0; i < this._list.length; ++i) {
      if (e.indexOf(this._list[i].itemType) >= 0) {
        t.addItem(this._list[i]);
      }
    }
    return t;
  };
  CollectableList.prototype.getFilteredListByTypeVOs = function (e) {
    var t = new CollectableList();
    for (var i = 0; i < this._list.length; ++i) {
      for (var n = 0; n < e.length; ++n) {
        if (e[n].hasType(this._list[i])) {
          t.addItem(this._list[i]);
        }
      }
    }
    return t;
  };
  CollectableList.prototype.getFilteredListByType = function (e) {
    var t = new CollectableList();
    for (var i = 0; i < this._list.length; ++i) {
      if (this._list[i].itemType == e) {
        t.addItem(this._list[i]);
      }
    }
    return t;
  };
  CollectableList.prototype.getFilteredListByTypeVO = function (e) {
    var t = new CollectableList();
    for (var i = 0; i < this._list.length; ++i) {
      if (e.hasType(this._list[i])) {
        t.addItem(this._list[i]);
      }
    }
    return t;
  };
  CollectableList.prototype.getFilteredListWithoutTypes = function (e) {
    var t = new CollectableList();
    for (var i = 0; i < this._list.length; ++i) {
      if (e.indexOf(this._list[i].itemType) < 0) {
        t.addItem(this._list[i]);
      }
    }
    return t;
  };
  CollectableList.prototype.getFilteredListWithoutTypeVOs = function (e) {
    var t = new CollectableList();
    for (var i = 0; i < this._list.length; ++i) {
      for (var n = 0; n < e.length; ++n) {
        if (!e[n].hasType(this._list[i])) {
          t.addItem(this._list[i]);
        }
      }
    }
    return t;
  };
  CollectableList.prototype.getFilteredListWithoutType = function (e) {
    var t = new CollectableList();
    for (var i = 0; i < this._list.length; ++i) {
      if (this._list[i].itemType != e) {
        t.addItem(this._list[i]);
      }
    }
    return t;
  };
  CollectableList.prototype.getFilteredListWithoutTypeVO = function (e) {
    var t = new CollectableList();
    for (var i = 0; i < this._list.length; ++i) {
      if (!e.hasType(this._list[i])) {
        t.addItem(this._list[i]);
      }
    }
    return t;
  };
  CollectableList.prototype.containsType = function (e) {
    for (var t = 0; t < this._list.length; ++t) {
      if (this._list[t].itemType == e) {
        return true;
      }
    }
    return false;
  };
  CollectableList.prototype.containsTypeVO = function (e) {
    for (var t = 0; t < this._list.length; ++t) {
      if (e.hasType(this._list[t])) {
        return true;
      }
    }
    return false;
  };
  CollectableList.prototype.containsAnyTypeOf = function (e) {
    for (var t = 0; t < this._list.length; ++t) {
      if (e.indexOf(this._list[t].itemType) >= 0) {
        return true;
      }
    }
    return false;
  };
  CollectableList.prototype.containsAnyTypeVOOf = function (e) {
    for (var t = 0; t < this._list.length; ++t) {
      for (var i = 0; i < e.length; ++i) {
        if (e[i].hasType(this._list[t])) {
          return true;
        }
      }
    }
    return false;
  };
  CollectableList.prototype.getAmountOrDefaultByType = function (e) {
    var t = this.getItemByType(e);
    return s.int(t ? t.amount : 0);
  };
  CollectableList.prototype.getAmountOrDefaultByTypeVO = function (e) {
    var t = this.getItemByTypeVO(e);
    return s.int(t ? t.amount : 0);
  };
  CollectableList.prototype.clone = function () {
    var e = new CollectableList();
    for (var t = 0; t < this._list.length; ++t) {
      e.addItem(this._list[t].clone());
    }
    return e;
  };
  Object.defineProperty(CollectableList.prototype, "grantType", {
    get: function () {
      if (this.list.length > 0) {
        var e = s.int(this.list[0].grantType);
        for (var t = 0; t < this.list.length; t++) {
          if (e != this.list[t].grantType) {
            e = -1;
            break;
          }
        }
        return e;
      }
      return o.RewardConst.PLAYER;
    },
    enumerable: true,
    configurable: true
  });
  CollectableList.prototype.getShortTooltip = function () {
    var e = "";
    for (var t = 0; t < this._list.length; t++) {
      if (t) {
        e += "\n";
      }
      e += a.Localize.text(n.GenericTextIds.VALUE_ASSIGN_COLON, [this._list[t].getTooltipTextId(), this._list[t].amount]);
    }
    return e;
  };
  CollectableList.prototype.getRewardAmountTooltip = function () {
    var e = "";
    for (var t = 0; t < this._list.length; t++) {
      if (t) {
        e += "\n";
      }
      e += a.Localize.text("generic_amount_reward", [this._list[t].amount, this._list[t].getTooltipTextId()]);
    }
    return e;
  };
  CollectableList.prototype.getContainingTypes = function () {
    var e = [];
    if (this._list != null) {
      for (var t = 0, i = this._list; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = false;
          if (e != null) {
            for (var a = 0, s = e; a < s.length; a++) {
              var r = s[a];
              if (r !== undefined && r.hasType(n)) {
                o = true;
                break;
              }
            }
          }
          if (!o) {
            e.push(new l.CollectableTypeVO().initByCollectable(n));
          }
        }
      }
    }
    return e;
  };
  CollectableList.prototype.clear = function () {
    this._list = [];
  };
  CollectableList.prototype.combineDuplicatedItems = function () {
    var e;
    var t;
    for (var i = 0; i < this._list.length; ++i) {
      (e = this._list[i]).itemType;
      for (var n = s.int(this._list.length - 1); n > i; --n) {
        t = this._list[n];
        if (e.isCombineAbleWith(t)) {
          e.combineWith(t);
          this.removeByIndex(n);
        }
      }
    }
  };
  CollectableList.prototype.sort = function (e) {
    this._list.sort(e);
  };
  CollectableList.prototype.filter = function (e) {
    var t = new CollectableList();
    var i = this.list.filter(e);
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          t.addItem(a);
        }
      }
    }
    return t;
  };
  Object.defineProperty(CollectableList.prototype, "list", {
    get: function () {
      return this._list;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableList;
}();
exports.CollectableList = r;
var l = require("./74.js");