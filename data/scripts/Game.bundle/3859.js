Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./115.js");
var o = createjs.Point;
var a = function () {
  function AttackDialogResizer() {
    this._shouldReorder = false;
    this._scaleFactorX = 1;
    this._scaleFactorY = 1;
  }
  AttackDialogResizer.prototype.initWithDialogDisp = function (e) {
    this.disp = e;
    this.attackHornPos = new o(this.disp.mc_hornHolder.x, this.disp.mc_hornHolder.y);
    this.onResize(true);
  };
  AttackDialogResizer.prototype.onShow = function () {
    n.AttackDialogController.getInstance().onResizeDialog.add(this.bindFunction(this.onResize));
    n.AttackDialogController.getInstance().hidePlayerInfos.add(this.bindFunction(this.updatePlayerBuffPosition));
    n.AttackDialogController.getInstance().hideTargetInfos.add(this.bindFunction(this.updatePlayerBuffPosition));
    n.AttackDialogController.getInstance().showPlayerInfos.add(this.bindFunction(this.updatePlayerBuffPosition));
    n.AttackDialogController.getInstance().showTargetInfos.add(this.bindFunction(this.updatePlayerBuffPosition));
    n.AttackDialogController.getInstance().onShowAutoFillOptions.add(this.bindFunction(this.updatePlayerBuffPosition));
    n.AttackDialogController.getInstance().onHideAutoFillOptions.add(this.bindFunction(this.updatePlayerBuffPosition));
  };
  AttackDialogResizer.prototype.onHide = function () {
    n.AttackDialogController.getInstance().onResizeDialog.remove(this.bindFunction(this.onResize));
    n.AttackDialogController.getInstance().hidePlayerInfos.remove(this.bindFunction(this.updatePlayerBuffPosition));
    n.AttackDialogController.getInstance().hideTargetInfos.remove(this.bindFunction(this.updatePlayerBuffPosition));
    n.AttackDialogController.getInstance().showPlayerInfos.remove(this.bindFunction(this.updatePlayerBuffPosition));
    n.AttackDialogController.getInstance().showTargetInfos.remove(this.bindFunction(this.updatePlayerBuffPosition));
    n.AttackDialogController.getInstance().onShowAutoFillOptions.remove(this.bindFunction(this.updatePlayerBuffPosition));
    n.AttackDialogController.getInstance().onHideAutoFillOptions.remove(this.bindFunction(this.updatePlayerBuffPosition));
  };
  AttackDialogResizer.prototype.onResize = function (e = false) {
    this._scaleFactorX = AttackDialogResizer.MAX_DIALOGUE_WIDTH / AttackDialogResizer.ORIGINAL_WIDTH;
    this._scaleFactorY = 1;
    if (this.disp && this.disp.stage) {
      if (this.disp.stage.stageWidth < AttackDialogResizer.MIN_DIALOGUE_WIDTH) {
        this._shouldReorder = false;
      } else {
        this._shouldReorder = true;
      }
      if (this.disp.stage.stageWidth < AttackDialogResizer.MAX_DIALOGUE_WIDTH) {
        this._scaleFactorX = Math.min(this._scaleFactorX, Math.max(this.disp.stage.stageWidth, AttackDialogResizer.MIN_DIALOGUE_WIDTH) / AttackDialogResizer.ORIGINAL_WIDTH);
      }
      if (this.disp.stage.stageHeight < AttackDialogResizer.MAX_DIALOGUE_HEIGHT * this._scaleFactorX) {
        this._scaleFactorY = Math.max(this.disp.stage.stageHeight, AttackDialogResizer.MIN_DIALOGUE_HEIGHT) / AttackDialogResizer.MAX_DIALOGUE_HEIGHT;
      }
      if (this._shouldReorder || e) {
        this.disp.scaleX = this.disp.scaleY = 1;
        this.disp.mc_bg.scaleX = this._scaleFactorX;
        this.disp.mc_bg.scaleY = this._scaleFactorY;
        if (this.disp.mc_bg.width >= AttackDialogResizer.MIN_DIALOG_WIDTH_FOR_FULL_SIDE_PANELS) {
          n.AttackDialogController.getInstance().showPlayerInfos.dispatch();
          n.AttackDialogController.getInstance().showTargetInfos.dispatch();
          this.disp.mc_hornHolder.x = this.attackHornPos.x - 20;
          this.disp.mc_hornHolder.y = this.attackHornPos.y - 20;
          this.disp.mc_hornHolder.scaleX = this.disp.mc_hornHolder.scaleY = 0.75;
        } else {
          if (e) {
            n.AttackDialogController.getInstance().hidePlayerInfos.dispatch();
            n.AttackDialogController.getInstance().hideTargetInfos.dispatch();
          }
          this.disp.mc_hornHolder.x = this.attackHornPos.x;
          this.disp.mc_hornHolder.y = this.attackHornPos.y - 20;
          this.disp.mc_hornHolder.scaleX = this.disp.mc_hornHolder.scaleY = 0.65;
        }
        var t = AttackDialogResizer.SIDE_PART_WIDTH;
        this.disp.mc_playerInfo.x = this.disp.mc_bg.x - this.bgWidthNorm * 0.5;
        this.disp.mc_targetInfo.x = this.disp.mc_bg.x + this.bgWidthNorm * 0.5;
        this.disp.mc_waveList.x = this.disp.mc_bg.x - this.bgWidthNorm * 0.5;
        this.disp.mc_bottom_800.x = this.disp.mc_bg.x + this.bgWidthNorm * 0.5;
        this.disp.mc_autofill_filter.x = Math.min(this.bgWidthNorm / 2, this.bgWidthNorm / 2 - (t - this.disp.mc_autofill_filter.width));
        this.disp.mc_autofill_filter.mc_open.btn_close.visible = this.disp.mc_bg.width < AttackDialogResizer.MIN_DIALOG_WIDTH_FOR_FULL_SIDE_PANELS;
        this.scaleSideInfo(this.disp.mc_playerInfo, -1);
        this.scaleSideInfo(this.disp.mc_targetInfo, 1);
        this.disp.mc_general_selection.mc_generalSelection_bg.width = this.bgWidthNorm;
        this.disp.mc_general_selection.x = -this.bgWidthNorm / 2 + this.disp.mc_playerInfo.mc_double_bg.width + 112;
        this.disp.mc_general_selection.mc_generalSelection_bg.x = -this.bgWidthNorm / 2 - this.disp.mc_general_selection.x;
        this.centerDialogue();
        this.updateButtons();
        if (!this._shouldReorder || this.disp.stage.stageHeight < AttackDialogResizer.MIN_DIALOGUE_HEIGHT) {
          this.updateScale();
        }
        this.updateDetailView();
      } else {
        this.updateScale();
      }
    }
  };
  AttackDialogResizer.prototype.updateButtons = function () {
    this.disp.btn_close.x = this.disp.mc_bg.x + this.bgWidthNorm * 0.5 - (AttackDialogResizer.BUTTONS_PADDING_SIDES + this.disp.btn_close.width * 0.5);
    this.disp.btn_close.y = this.disp.mc_bg.y - this.bgHeightNorm * 0.5 + (AttackDialogResizer.BUTTONS_PADDING_TOP + this.disp.btn_close.height * 0.5);
    this.disp.btn_help.x = this.disp.btn_close.x - this.disp.btn_close.width / 2 - this.disp.btn_help.width / 2;
    this.disp.btn_help.y = this.disp.btn_close.y;
    this.disp.btn_back.x = this.disp.mc_bg.x - this.bgWidthNorm * 0.5 + (AttackDialogResizer.BUTTONS_PADDING_SIDES + this.disp.btn_back.width * 0.5);
    this.disp.btn_back.y = this.disp.btn_close.y;
    this.disp.btn_player_left.x = this.disp.mc_bg.x - this.bgWidthNorm * 0.5 + (AttackDialogResizer.BUTTONS_PADDING_SIDES + 50);
    this.disp.btn_player_right.x = this.disp.mc_bg.x + this.bgWidthNorm * 0.5 - (AttackDialogResizer.BUTTONS_PADDING_SIDES + 50);
    this.disp.mc_bottom_800.btn_attack.x = (this.bgWidthNorm - AttackDialogResizer.WAVE_LIST_WIDTH) * -0.5;
    var e = this.disp.mc_bg.width < AttackDialogResizer.MIN_DIALOG_WIDTH_FOR_FULL_SIDE_PANELS;
    this.disp.mc_playerInfo.btn_mini.visible = e;
    this.disp.mc_targetInfo.btn_mini.visible = e;
    this.disp.mc_playerInfo.mc_double_bg.visible = e;
    this.disp.mc_targetInfo.mc_double_bg.visible = e;
    this.disp.mc_playerInfo.btn_mini.x = this.disp.mc_playerInfo.mc_double_bg.width + this.disp.mc_playerInfo.btn_mini.width / 2;
    this.disp.mc_targetInfo.btn_mini.x = this.disp.mc_targetInfo.mc_double_bg.x - this.disp.mc_targetInfo.btn_mini.width / 2;
    this.updatePlayerBuffPosition();
  };
  AttackDialogResizer.prototype.updateDetailView = function () {
    this.disp.mc_detailView_mask.scaleX = this._scaleFactorX;
    this.disp.mc_detailView_mask.scaleY = this._scaleFactorY - 0.003;
    this.disp.mc_detailViewCastle.x = -400;
    this.disp.mc_detailViewCastle.y = -320;
    this.disp.mc_detailViewCastle.scaleX = 1;
    this.disp.mc_detailViewCastle.scaleY = 1;
    var e = this.bgWidthNorm / 800;
    var t = this.bgHeightNorm / 600;
    var i = Math.max(e, t);
    this.disp.mc_detailViewBG.scaleX = this.disp.mc_detailViewBG.scaleY = i;
    this.disp.mc_detailViewBG.scaleY = this.disp.mc_detailViewBG.scaleY = i;
    this.disp.mc_detailViewBG.x = -this.bgWidthNorm / 2 - Math.max(0, (i * 800 - this.bgWidthNorm) / 2);
    this.disp.mc_detailViewBG.y = -this.bgHeightNorm / 2 - Math.max(0, (i * 600 - this.bgHeightNorm) / 2);
  };
  Object.defineProperty(AttackDialogResizer.prototype, "bgWidthNorm", {
    get: function () {
      return this.disp.mc_bg.width - 16;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogResizer.prototype, "bgHeightNorm", {
    get: function () {
      return this.disp.mc_bg.height - 16;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogResizer.prototype.scaleSideInfo = function (e, t) {
    var i = AttackDialogResizer.MIN_SIDE_INFO_WIDTH;
    e.mc_double_bg.width = i + 4;
    e.bg.width = i + 4;
    if (t == -1) {
      e.txt_generalInfo.width = i;
      e.txt_generalInfo.x = 0;
      e.txt_generalInfo_bg.x = 0;
      e.mc_double_bg.x = 0;
      e.bg.x = 0;
      e.txt_generalInfo_bg.width = i;
      e.mc_player.bg.width = i;
      e.mc_player.btn_details.x = e.mc_player.bg.x + e.mc_player.bg.width - e.mc_player.btn_details.width / 2;
      e.mc_general_bg.x = i / 2 + 40;
      e.mc_abilites.x = i / 2;
    }
    if (t == 1) {
      e.txt_generalInfo.width = i;
      e.txt_generalInfo_bg.width = i;
      e.txt_generalInfo_bg.x = -i;
      e.txt_generalInfo.x = -i;
      e.mc_double_bg.x = -e.mc_double_bg.width;
      e.bg.x = -e.bg.width;
      e.mc_player.bg.width = i;
      e.mc_player.bg.x = 160 - i;
      e.mc_general_bg.x = -i / 2 + 40;
      e.mc_abilites.x = -i / 2;
    }
    var n = -i / 2 + 12 + 23;
    var o = (i - 24 - 46) / 4;
    for (var a = 0; a < 5; a++) {
      e.mc_abilites["mc_ability" + a].x = n + o * a;
    }
  };
  AttackDialogResizer.prototype.updatePlayerBuffPosition = function () {
    if (this.disp.mc_playerInfo.visible) {
      this.disp.mc_waveList.mc_bonus_left.x = this.disp.mc_playerInfo.mc_double_bg.width + 30;
    } else {
      this.disp.mc_waveList.mc_bonus_left.x = 30;
    }
    if (this.disp.mc_autofill_filter.mc_open.visible) {
      this.disp.mc_waveList.mc_bonus_right.x = this.disp.mc_bg.width - this.disp.mc_autofill_filter.mc_open.width - 45;
    } else {
      this.disp.mc_waveList.mc_bonus_right.x = this.disp.mc_bg.width - this.disp.mc_autofill_filter.mc_closed.width - 45;
    }
  };
  AttackDialogResizer.prototype.updateScale = function () {
    var e = Math.min(this.disp.stage.stageWidth / this.disp.mc_bg.width, this.disp.stage.stageHeight / this.disp.mc_bg.height);
    this.disp.scaleX = this.disp.scaleY = e;
    this.centerDialogue();
  };
  AttackDialogResizer.prototype.centerDialogue = function () {
    this.disp.x = this.disp.stage.stageWidth * 0.5;
    this.disp.y = this.disp.stage.stageHeight * 0.5;
  };
  AttackDialogResizer.MAX_DIALOGUE_WIDTH = 1296;
  AttackDialogResizer.MAX_DIALOGUE_HEIGHT = 816;
  AttackDialogResizer.MIN_DIALOGUE_WIDTH = 1050;
  AttackDialogResizer.MIN_DIALOGUE_HEIGHT = 816;
  AttackDialogResizer.MIN_DIALOG_WIDTH_FOR_FULL_SIDE_PANELS = 1296;
  AttackDialogResizer.ORIGINAL_WIDTH = 1438;
  AttackDialogResizer.MIDDLE_PART_WIDTH = 632;
  AttackDialogResizer.SIDE_PART_WIDTH = 320;
  AttackDialogResizer.MIN_SIDE_INFO_WIDTH = 320;
  AttackDialogResizer.WAVE_LIST_WIDTH = 956;
  AttackDialogResizer.BUTTONS_PADDING_SIDES = 11;
  AttackDialogResizer.BUTTONS_PADDING_TOP = 11;
  return AttackDialogResizer;
}();
exports.AttackDialogResizer = a;