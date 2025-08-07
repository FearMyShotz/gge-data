Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function DecorationForgeSelectTargetDialogListItemVO(e) {
    this._isSelected = false;
    this._selectVO = e;
    this._searchName = this.buildingVO.buildingVO.getInfoTooltipLine1().toLowerCase();
  }
  Object.defineProperty(DecorationForgeSelectTargetDialogListItemVO.prototype, "buildingVO", {
    get: function () {
      return this._selectVO.itemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectTargetDialogListItemVO.prototype, "searchName", {
    get: function () {
      return this._searchName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectTargetDialogListItemVO.prototype, "isSelected", {
    get: function () {
      return this._isSelected;
    },
    set: function (e) {
      this._isSelected = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectTargetDialogListItemVO.prototype, "selectVO", {
    get: function () {
      return this._selectVO;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeSelectTargetDialogListItemVO;
}();
exports.DecorationForgeSelectTargetDialogListItemVO = n;