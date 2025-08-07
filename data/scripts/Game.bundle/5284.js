Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AreaDataModel() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AreaDataModel, e);
  AreaDataModel.prototype.reset = function () {
    if (this._activeArea) {
      this._activeArea.destroy();
      this._activeArea = null;
    }
  };
  AreaDataModel.prototype.addArea = function (e) {
    if (this._activeArea) {
      this._activeArea.destroy();
    }
    this._activeArea = e;
  };
  AreaDataModel.prototype.changePosOfOwnArea = function (e) {
    this._activeArea.areaInfo.absAreaPosX = e.x;
    this._activeArea.areaInfo.absAreaPosY = e.y;
  };
  Object.defineProperty(AreaDataModel.prototype, "activeArea", {
    get: function () {
      return this._activeArea;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeAreaInfo", {
    get: function () {
      return this.activeArea.areaInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeOwnerInfo", {
    get: function () {
      return this.activeArea.areaInfo.ownerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeIsoData", {
    get: function () {
      return this.getActiveDataSave(s.AreaDataEnum.ISO_DATA);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeCommonInfo", {
    get: function () {
      return this.getActiveDataSave(s.AreaDataEnum.COMMON_INFO);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeStorage", {
    get: function () {
      return this.getActiveDataSave(s.AreaDataEnum.STORAGE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeMorality", {
    get: function () {
      return this.getActiveDataSave(s.AreaDataEnum.MORALITY);
    },
    enumerable: true,
    configurable: true
  });
  AreaDataModel.prototype.getActiveStorageItem = function (e) {
    if (this.activeStorage) {
      return this.activeStorage.getItem(e);
    } else {
      return null;
    }
  };
  Object.defineProperty(AreaDataModel.prototype, "activeConstructionList", {
    get: function () {
      return this.getActiveDataSave(s.AreaDataEnum.CONSTRUCTION_LIST);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeConstructionItems", {
    get: function () {
      return this.getActiveDataSave(s.AreaDataEnum.CONSTRUCTION_ITEMS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeSlum", {
    get: function () {
      return this.getActiveDataSave(s.AreaDataEnum.SLUM);
    },
    enumerable: true,
    configurable: true
  });
  AreaDataModel.prototype.getActiveDataSave = function (e) {
    var t = this.activeArea;
    if (t) {
      return t.getData(e);
    } else {
      return null;
    }
  };
  return AreaDataModel;
}(require("./54.js").CastleBasicData);
exports.AreaDataModel = a;
var s = require("./1158.js");
o.classImplementsInterfaces(a, "IUpdatable");