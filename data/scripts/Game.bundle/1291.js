Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ButtonBookmarkConfigVO(e, t, i = ButtonBookmarkConfigVO.ACTION_NONE) {
    this.enableButton = false;
    this.buttonAction = 0;
    this.enableButton = e;
    this.errorToolTipTextID = t;
    this.buttonAction = i;
  }
  ButtonBookmarkConfigVO.__initialize_static_members = function () {
    ButtonBookmarkConfigVO.ACTION_NONE = 0;
    ButtonBookmarkConfigVO.ACTION_OPEN_CREATE_PLAYER_BOOKMARK = 1;
    ButtonBookmarkConfigVO.ACTION_OPEN_CREATE_ALLIANCE_BOOKMARK = 2;
  };
  return ButtonBookmarkConfigVO;
}();
exports.ButtonBookmarkConfigVO = n;
n.__initialize_static_members();