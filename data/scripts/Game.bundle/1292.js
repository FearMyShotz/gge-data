Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./49.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./2270.js");
var h = require("./4.js");
var g = require("./8.js");
var C = function (e) {
  function CastleChooseHeroDialog() {
    var t = this;
    t._heroesVector = [];
    t._heroID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleChooseHeroDialog.NAME) || this;
  }
  n.__extends(CastleChooseHeroDialog, e);
  CastleChooseHeroDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    var i = [this.dialogDisp.pick_btn];
    this.initBasicButtons(i);
    this.initHeroesIcons();
    this._pickBtn = this.dialogDisp.pick_btn.basicButton;
    this.setText();
    g.ButtonHelper.enableButton(this.dialogDisp.pick_btn, false);
    s.ClientFunnelTrackingController.getInstance().trackState("hero_selection_opened");
  };
  CastleChooseHeroDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.description_txt, new u.LocalizedTextVO("dialog_chooseHero_desc")).verticalAlign = r.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.pick_btn.btn_txt, new u.LocalizedTextVO("dialog_chooseHero_choose"));
  };
  CastleChooseHeroDialog.prototype.initHeroesIcons = function () {
    this.dialogDisp.old_knight.basicButton = new a.HeroTwoStateButton(this.dialogDisp.old_knight);
    this._heroesVector.push(this.dialogDisp.old_knight.basicButton);
    this.dialogDisp.female_warrior.basicButton = new a.HeroTwoStateButton(this.dialogDisp.female_warrior);
    this._heroesVector.push(this.dialogDisp.female_warrior.basicButton);
    this.dialogDisp.young_knight.basicButton = new a.HeroTwoStateButton(this.dialogDisp.young_knight);
    this._heroesVector.push(this.dialogDisp.young_knight.basicButton);
    this._btnGroup = new o.BasicButtonGroup(this._heroesVector);
  };
  CastleChooseHeroDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    var i;
    var n = false;
    if (this._heroesVector != null) {
      for (var o = 0, a = this._heroesVector; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && s.isSelected) {
          n = true;
          i = s;
        }
      }
    }
    g.ButtonHelper.enableButton(this.dialogDisp.pick_btn, n);
    if (n) {
      switch (t.target) {
        case this.dialogDisp.pick_btn:
          switch (i.disp) {
            case this.dialogDisp.old_knight:
              this._heroID = d.int(c.TutorialConst.TUTORIAL_HERO_1_ID);
              this._eventName = "hero_1_selected";
              break;
            case this.dialogDisp.young_knight:
              this._heroID = d.int(c.TutorialConst.TUTORIAL_HERO_0_ID);
              this._eventName = "hero_3_selected";
              break;
            case this.dialogDisp.female_warrior:
              this._heroID = d.int(c.TutorialConst.TUTORIAL_HERO_2_ID);
              this._eventName = "hero_2_selected";
          }
          this.sendHeroIdToServer(this._heroID, this._eventName);
          this.hide();
      }
    }
  };
  CastleChooseHeroDialog.prototype.sendHeroIdToServer = function (e, t) {
    h.CastleModel.smartfoxClient.sendCommandVO(new p.HeroDecisionVO(e));
    s.ClientFunnelTrackingController.getInstance().trackState(t);
  };
  CastleChooseHeroDialog.__initialize_static_members = function () {
    CastleChooseHeroDialog.NAME = "CastleChooseHero";
  };
  return CastleChooseHeroDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleChooseHeroDialog = C;
l.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();