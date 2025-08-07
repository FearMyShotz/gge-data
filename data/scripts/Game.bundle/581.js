Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./4.js");
var u = require("./891.js");
var d = require("./425.js");
var p = require("./8.js");
var h = function (e) {
  function ABGTowerInfoComponent(t, i) {
    var n = e.call(this, t) || this;
    n._maxSize = i;
    if (t.txt_name) {
      n.itxt_name = f.CastleComponent.textFieldManager.registerTextField(t.txt_name, new r.LocalizedTextVO(""));
    }
    if (t.txt_level) {
      n.itxt_level = f.CastleComponent.textFieldManager.registerTextField(t.txt_level, new r.LocalizedTextVO(""));
    }
    if (t.txt_xp) {
      n.itxt_xp = f.CastleComponent.textFieldManager.registerTextField(t.txt_xp, new r.LocalizedTextVO(""));
    }
    if (t.txt_points) {
      n.itxt_points = f.CastleComponent.textFieldManager.registerTextField(t.txt_points, new l.LocalizedNumberVO(0));
    }
    if (t.txt_units) {
      n.itxt_units = f.CastleComponent.textFieldManager.registerTextField(t.txt_units, new r.LocalizedTextVO(""));
    }
    if (t.txt_alliance) {
      n.itxt_alliance = f.CastleComponent.textFieldManager.registerTextField(t.txt_alliance, new s.TextVO(""));
    }
    if (t.icon_points) {
      t.icon_points.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_Statuette_tooltip";
    }
    if (t.icon_units) {
      t.icon_units.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_troopsStationed_tooltip";
    }
    if (t.btn_info) {
      n.infoButton = t.btn_info;
      p.ButtonHelper.initBasicButton(t.btn_info);
    }
    if (t.btn_bookmark) {
      p.ButtonHelper.initButtons([t.btn_bookmark], y.ClickFeedbackButtonHover);
      t.btn_bookmark.toolTipText = "ringmenu_markLocation";
    }
    if (t.mc_connections) {
      n.connectionsComponent = new O.ABGTowerConnectionsComponent(t.mc_connections, E.ABGTowerConnectionStateComponent.TYPE_DIALOG, E.ABGTowerConnectionStateComponent.SIZE_DIALOG, E.ABGTowerConnectionStateComponent.SPACING_DIALOG);
    }
    return n;
  }
  n.__extends(ABGTowerInfoComponent, e);
  ABGTowerInfoComponent.prototype.updateTowerInfo = function (e) {
    this.towerVO = e;
    if (this.itxt_name) {
      this.itxt_name.textContentVO.textId = e.areaNameString;
    }
    if (this.itxt_alliance) {
      this.itxt_alliance.textContentVO.stringValue = e.allianceName;
    }
    if (this.itxt_level) {
      this.itxt_level.textContentVO.textId = "levelX";
      this.itxt_level.textContentVO.textReplacements = [e.level];
    }
    if (this.itxt_xp) {
      this.itxt_xp.textContentVO.textId = "value_proportional_value";
      this.itxt_xp.textContentVO.textReplacements = [e.currentVictoryCountFromLevel, e.neededVictoryCountForLevel];
    }
    if (this.itxt_points) {
      this.itxt_points.textContentVO.numberValue = e.currentTowerPoints;
    }
    if (this.itxt_units) {
      this.itxt_units.textContentVO.textId = "value_proportional_value";
      this.itxt_units.textContentVO.textReplacements = [e.getCurrentUnitSupport(), e.towerInfoVO.unitCapacity];
    }
    if (this.disp.mc_level) {
      this.disp.mc_level.mc_xpBar.scaleX = e.currentVictoryCountFromLevel / e.neededVictoryCountForLevel;
    }
    if (this.disp.mc_tower) {
      a.MovieClipHelper.clearMovieClip(this.disp.mc_tower);
      if (this._maxSize.y > 145) {
        this.disp.mc_tower.addChild(m.WorldmapObjectIconHelper.drawMapObjectIcon(e, this._maxSize, true, false, true, "panel_action_jumpTo", null, true));
      } else {
        this.disp.mc_tower.addChild(m.WorldmapObjectIconHelper.drawMapObjectIcon(e, this._maxSize, true, false, true, "panel_action_jumpTo"));
      }
    }
    if (this.disp.mc_connections) {
      this.connectionsComponent.setConnections(e.connections);
    }
    if (this.disp.mc_myTower) {
      var t = false;
      for (var i = 0, n = e.connections; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.playerName == c.CastleModel.userData.userName) {
          t = true;
        }
      }
      this.disp.mc_myTower.visible = t;
    }
  };
  ABGTowerInfoComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.infoButton:
        if (this.towerVO.ownerInfo.allianceID == c.CastleModel.userData.allianceID) {
          f.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(g.CastleABGTowerDetailAllianceDialog, new u.CastleABGTowerInfoDialogProperties(this.towerVO));
        } else {
          f.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(C.CastleABGTowerDetailDialog, new u.CastleABGTowerInfoDialogProperties(this.towerVO));
        }
        break;
      case this.disp.btn_bookmark:
        f.CastleComponent.dialogHandler.registerDefaultDialogs(_.CastleWorldmapBookmarkSetDialog, new d.CastleWorldmapBookmarkSetDialogProperties(this.towerVO, _.CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK));
    }
  };
  return ABGTowerInfoComponent;
}(require("./40.js").CastleItemRenderer);
exports.ABGTowerInfoComponent = h;
var g = require("./1233.js");
var C = require("./1407.js");
var _ = require("./441.js");
var m = require("./70.js");
var f = require("./14.js");
var O = require("./706.js");
var E = require("./424.js");
var y = require("./20.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");