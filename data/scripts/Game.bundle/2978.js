Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./2979.js");
var s = require("./85.js");
var r = require("./4.js");
var l = require("./8.js");
var c = require("./1581.js");
var u = createjs.Point;
var d = createjs.MovieClip;
var p = createjs.MouseEvent;
var h = function () {
  function StrongholdInventoryListItemComponent(e, t) {
    this.disp = e;
    this.tooltip = t;
    l.ButtonHelper.initBasicButtons([this.disp.item, this.disp.btn_info]);
    this.infoAmountText = n.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.item.mc_contentHolder.infoAmount.txt_value, new s.CastleLocalizedNumberVO(0, {
      compactThreshold: 10000,
      compactFractionalDigits: 0
    }, 0));
    this.show();
  }
  StrongholdInventoryListItemComponent.prototype.show = function () {
    this.disp.addEventListener(p.CLICK, this.bindFunction(this.onClick));
    this.disp.addEventListener(p.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.addEventListener(p.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  StrongholdInventoryListItemComponent.takeSoldiers = function (e, t) {
    r.CastleModel.smartfoxClient.sendCommandVO(new a.C2STakeSoldiersVO(e, t));
  };
  StrongholdInventoryListItemComponent.prototype.destroy = function () {
    this.disp.removeEventListener(p.CLICK, this.bindFunction(this.onClick));
    this.disp.removeEventListener(p.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.removeEventListener(p.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  Object.defineProperty(StrongholdInventoryListItemComponent.prototype, "unitVO", {
    get: function () {
      return this._unitVO;
    },
    set: function (e) {
      this._unitVO = e;
      this.update();
    },
    enumerable: true,
    configurable: true
  });
  StrongholdInventoryListItemComponent.prototype.onClick = function (e) {
    g.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleRecruitStrongholdAddUnitsDialog, new c.CastleRecruitStrongholdAddUnitsDialogProperties(false, this.unitVO, StrongholdInventoryListItemComponent.takeSoldiers, this.unitVO.inventoryAmount));
  };
  StrongholdInventoryListItemComponent.prototype.onMouseOver = function (e) {
    var t = new d();
    t.x = this.disp.x;
    t.y = this.disp.y + 25;
    t.setBounds(this.disp.x, this.disp.y + 25, this.disp.width, this.disp.height);
    this.tooltip.show(this._unitVO, t);
  };
  StrongholdInventoryListItemComponent.prototype.onMouseOut = function (e) {
    this.tooltip.hide();
  };
  StrongholdInventoryListItemComponent.prototype.update = function () {
    if (this._unitVO) {
      this.disp.visible = true;
      this.tooltip.hide();
      C.WodPicHelper.addUnitPic(this._unitVO, this.disp.item.mc_contentHolder.mc_content, this.disp.item.width, this.disp.item.height, r.CastleModel.userData.playerCrest.colorsTwo[0], r.CastleModel.userData.playerCrest.colorsTwo[1], 30, new u(20, 20));
      this.infoAmountText.textContentVO.numberValue = this._unitVO.inventoryAmount;
    } else {
      this.disp.visible = false;
    }
  };
  return StrongholdInventoryListItemComponent;
}();
exports.StrongholdInventoryListItemComponent = h;
var g = require("./9.js");
var C = require("./63.js");
var _ = require("./1582.js");
o.classImplementsInterfaces(h, "IInventoryListItem");