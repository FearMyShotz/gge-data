Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./6.js");
var a = require("./4.js");
var s = function () {
  function BasicBuildListItem(e) {
    this.itemSize = 70;
    this.itemSpace = 15;
    this.itemSlotSize = this.itemSize + this.itemSpace;
    this.targetMcSize = o.int(this.itemSize * 0.8);
    this._pos = 0;
    this._oldPos = 0;
    this._arrayPos = 0;
    this._oldArrayPos = 0;
    this._isSelected = false;
    this._showProgressbar = true;
    this._isVisibleLocked = true;
    this._disp = e;
    this._disp.mouseChildren = false;
    this._disp.bItem = this;
    this._disp.actLikeButton = true;
    this.isSelected = false;
  }
  BasicBuildListItem.prototype.initItem = function () {};
  Object.defineProperty(BasicBuildListItem.prototype, "isSelected", {
    get: function () {
      return this._isSelected;
    },
    set: function (e) {
      this._isSelected = e;
      if (this._disp.mc_selected) {
        this._disp.mc_selected.visible = this._isSelected;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "isAvailable", {
    get: function () {
      return !a.CastleModel.tutorialData.isTutorialActive;
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListItem.prototype.remove = function () {
    n.assetsPool.recycle(this.disp);
    this.disp;
  };
  BasicBuildListItem.prototype.setIcons = function () {};
  Object.defineProperty(BasicBuildListItem.prototype, "hasItem", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "isFree", {
    get: function () {
      return this.slotVO.isFree;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "isLocked", {
    get: function () {
      return this.slotVO.isLocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "isFirst", {
    get: function () {
      return this._pos == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "pos", {
    get: function () {
      return this._pos;
    },
    set: function (e) {
      this._pos = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "slotVO", {
    get: function () {
      return this._slotVO;
    },
    set: function (e) {
      this._slotVO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "oldPos", {
    get: function () {
      return this._oldPos;
    },
    set: function (e) {
      this._oldPos = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "showProgressbar", {
    get: function () {
      return this._showProgressbar;
    },
    set: function (e) {
      this._showProgressbar = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "arrayPos", {
    get: function () {
      return this._arrayPos;
    },
    set: function (e) {
      this._arrayPos = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListItem.prototype, "oldArrayPos", {
    get: function () {
      return this._oldArrayPos;
    },
    set: function (e) {
      this._oldArrayPos = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListItem.prototype.setVisible = function (e) {
    this.disp.visible = e;
    this._isVisibleLocked = !e;
  };
  Object.defineProperty(BasicBuildListItem.prototype, "isVisibleLocked", {
    get: function () {
      return this._isVisibleLocked;
    },
    enumerable: true,
    configurable: true
  });
  return BasicBuildListItem;
}();
exports.BasicBuildListItem = s;