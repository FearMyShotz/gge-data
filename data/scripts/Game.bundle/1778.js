Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = function (e) {
  function DefaultGlobalLeaderBoardItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(DefaultGlobalLeaderBoardItem, e);
  DefaultGlobalLeaderBoardItem.prototype.update = function () {
    this.setVisibility(this._data != null);
    if (this.disp.visible) {
      this.disp.mc_mouseOver.visible = false;
      this.disp.mc_downState.visible = false;
      this.disp.mc_searched.visible = this._searchScoreID != "" && this._searchScoreID == this.scoreID;
      this.disp.gotoAndStop(this.getPrefixFrame());
      o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_rank, new s.TextVO(this.rankText)).autoFitToBounds = true;
      o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_name, new s.TextVO(this.playerName)).autoFitToBounds = true;
      o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_allianceName, new s.TextVO(this.allianceName)).autoFitToBounds = true;
      o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_server, new s.TextVO(this.serverName)).autoFitToBounds = true;
      o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_points, new s.TextVO(this.points)).autoFitToBounds = true;
    } else {
      this.disp.gotoAndStop(1);
    }
  };
  DefaultGlobalLeaderBoardItem.prototype.getPrefixFrame = function () {
    if (this.isOwnPlayer()) {
      return 4;
    }
    switch (this.rank) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
    }
    return 5;
  };
  return DefaultGlobalLeaderBoardItem;
}(require("./3791.js").AGlobalLeaderBoardItem);
exports.DefaultGlobalLeaderBoardItem = r;
a.classImplementsInterfaces(r, "ICollectableRendererList");