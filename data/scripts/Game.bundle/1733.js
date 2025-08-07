Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./100.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./85.js");
var c = require("./9.js");
var u = require("./81.js");
var d = require("./8.js");
var p = require("./63.js");
var h = require("./377.js");
var g = require("./113.js");
var C = require("./120.js");
var _ = createjs.MouseEvent;
var m = function (e) {
  function CastleCompactArmyDialogUnitItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleCompactArmyDialogUnitItem, e);
  CastleCompactArmyDialogUnitItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
  };
  CastleCompactArmyDialogUnitItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.disp.addEventListener(_.CLICK, this.bindFunction(this.onMouseClick));
  };
  CastleCompactArmyDialogUnitItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this.disp.removeEventListener(_.CLICK, this.bindFunction(this.onMouseClick));
  };
  CastleCompactArmyDialogUnitItem.prototype.fill = function () {
    d.ButtonHelper.initBasicButtons([this.getItemMc().btn_info0, this.getItemMc().btn_info1, this.getItemMc().btn_info2]);
    this.fillItem(0);
    this.fillItem(1);
    this.fillItem(2);
  };
  CastleCompactArmyDialogUnitItem.prototype.fillItem = function (e) {
    var t = this.data["data" + e];
    var i = this.getItemMc()["item" + e];
    var n = this.getItemMc()["btn_info" + e];
    var o = t.unitVO;
    var s = t.crestVO;
    if (!o) {
      i.visible = false;
      n.visible = false;
      return;
    }
    i.visible = true;
    n.visible = true;
    i.gotoAndStop(1);
    i.toolTipText = o.getNameString();
    i.mouseChildren = false;
    this.textFieldManager.registerTextField(i.mc_counter.txt_pick, new l.CastleLocalizedNumberVO(o.inventoryAmount, {
      compactThreshold: 10000,
      compactFractionalDigits: 0
    }), new a.InternalGGSTextFieldConfigVO(true));
    if (o.type == "Soldiers" || o.type == "Tools") {
      if (o.isStronghold) {
        i.toolTipText = r.Localize.text("Unknown_name") + "\n" + r.Localize.text("stronghold_UnitInside");
      } else {
        i.toolTipText = "Unknown_name";
      }
    } else if (o.isStronghold) {
      i.toolTipText = r.Localize.text(String(String(o.type).toLowerCase() + "_name")) + "\n" + r.Localize.text("stronghold_UnitInside");
    } else {
      i.toolTipText = String(String(o.type).toLowerCase() + "_name");
    }
    i.toolTipText = {
      t: i.toolTipText,
      ox: i.width / 2
    };
    i.mc_counter.visible = !t.isDefenceSpyItem;
    p.WodPicHelper.addUnitPicToContainer(o, i, t.maxUnitSize > 0 ? t.maxUnitSize : p.WodPicHelper.SMALL_UNIT_WIDTH, t.maxUnitSize > 0 ? t.maxUnitSize : p.WodPicHelper.SMALL_UNIT_HEIGHT, t.maxUnitSize > 0 ? t.maxUnitSize : p.WodPicHelper.SMALL_UNIT_WIDTH, t.maxUnitSize > 0 ? t.maxUnitSize : p.WodPicHelper.SMALL_UNIT_HEIGHT, s.backgroundColor1, s.backgroundColor2, t.levelIconSize, t.levelIconOffset, true, h.WodPicHelperUnitFramePerfectCallbackWrapper.callback4SmallPic(o, p.WodPicHelper.SMALL_UNIT_WIDTH, p.WodPicHelper.SMALL_UNIT_HEIGHT));
  };
  CastleCompactArmyDialogUnitItem.prototype.onMouseClick = function (e) {
    var t;
    switch (e.target) {
      case this.getItemMc().btn_info0:
      case this.getItemMc().item0:
        t = this.data.data0.unitVO;
        break;
      case this.getItemMc().btn_info1:
      case this.getItemMc().item1:
        t = this.data.data1.unitVO;
        break;
      case this.getItemMc().btn_info2:
      case this.getItemMc().item2:
        t = this.data.data2.unitVO;
        break;
      default:
        return;
    }
    if (t) {
      c.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleRecruitInfoDialog, new C.CastleRecruitInfoDialogProperties(t, this.data.data0.crestVO));
    }
  };
  Object.defineProperty(CastleCompactArmyDialogUnitItem.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyDialogUnitItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  CastleCompactArmyDialogUnitItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
  };
  Object.defineProperty(CastleCompactArmyDialogUnitItem.prototype, "rewards", {
    get: function () {
      return this.data.rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyDialogUnitItem.prototype, "rewardCategory", {
    get: function () {
      return this.data.rewardCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyDialogUnitItem.prototype, "chance", {
    get: function () {
      return this.data.chance;
    },
    enumerable: true,
    configurable: true
  });
  return CastleCompactArmyDialogUnitItem;
}(u.AInfiniteScrollListItem);
exports.CastleCompactArmyDialogUnitItem = m;
s.classImplementsInterfaces(m, "ICollectableRendererList");