Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CollectableManager() {}
  Object.defineProperty(CollectableManager, "sorter", {
    get: function () {
      return CollectableManager._sorter;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableManager, "parser", {
    get: function () {
      return CollectableManager._parser;
    },
    enumerable: true,
    configurable: true
  });
  CollectableManager.matchRarenessEquipments = function (e, t) {
    var i;
    var n;
    var s = [];
    var r = new a.CollectableList();
    if (e) {
      for (var l = 0; l < e.length; ++l) {
        i = e.getItemByIndex(l);
        if (!t || i.itemType != o.CollectableEnum.EQUIPMENT_RARENESS && i.itemType != o.CollectableEnum.HERO_RANDOM) {
          r.addItem(i);
        } else {
          for (var c = 0; c < t.length; ++c) {
            if (((n = t.getItemByIndex(c)).itemType == o.CollectableEnum.EQUIPMENT_RARENESS || n.itemType == o.CollectableEnum.HERO_RANDOM) && s.indexOf(c) < 0 && i.equipmentVO.rareID == n.equipmentVO.rareID) {
              r.addItem(n);
              s.push(c);
              break;
            }
          }
        }
      }
    }
    return r;
  };
  CollectableManager.mergeLists = function (e, t = false) {
    var i = new a.CollectableList();
    if (e) {
      for (var n = 0; n < e.length; ++n) {
        if (e[n]) {
          i.addList(e[n], t);
        }
      }
    }
    return i;
  };
  CollectableManager.__initialize_static_members = function () {
    CollectableManager._sorter = new r.CollectableSorter();
    CollectableManager._parser = new s.CollectableParser();
  };
  return CollectableManager;
}();
exports.CollectableManager = n;
var o = require("./12.js");
var a = require("./48.js");
var s = require("./1175.js");
var r = require("./2038.js");
n.__initialize_static_members();