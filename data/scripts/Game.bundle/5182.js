Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./1.js");
var h = require("./1.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./6.js");
var m = require("./18.js");
var f = require("./342.js");
var O = require("./7.js");
var E = require("./678.js");
var y = require("./105.js");
var b = require("./92.js");
var D = require("./491.js");
var I = require("./598.js");
var T = require("./44.js");
var v = require("./4.js");
var S = require("./193.js");
var A = require("./913.js");
var L = require("./176.js");
var P = require("./5183.js");
var M = require("./1925.js");
var R = require("./1123.js");
var V = require("./1700.js");
var x = require("./1799.js");
var w = require("./1800.js");
var B = require("./159.js");
var F = require("./700.js");
var N = require("./515.js");
var k = require("./10.js");
var U = createjs.Event;
var G = function (e) {
  function GBDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GBDCommand, e);
  Object.defineProperty(GBDCommand.prototype, "cmdId", {
    get: function () {
      return O.ClientConstSF.S2C_GET_BASIC_DATA;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(k.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GBDCommand.prototype.exec = function (e) {
    var t = _.int(e[0]);
    var i = e[1];
    switch (t) {
      case g.ERROR.ALL_OK:
        o.BasicController.getInstance().onLoggedIn();
        a.BasicDialogHandler.getInstance().blockDialogs = true;
        var n;
        var p = i[1];
        try {
          n = JSON.parse(p);
        } catch (e) {
          u.debug(p);
          d.error(e.stack);
          return;
        }
        v.CastleModel.userData.splitRunData.parse_ATL(n.atl);
        v.CastleModel.userData.parse_GHO(n.gho);
        v.CastleModel.userData.parse_GPI(n.gpi);
        v.CastleModel.userData.hasSentMailVerification = false;
        I.HelpshiftHelper.getInstance().updateUserData();
        if (!T.SpecialServerHelper.isOnSpecialServer && v.CastleModel.userData.isConnectedToFacebook && S.CastleFacebookModule.accessToken && S.CastleFacebookModule.accessToken != "") {
          l.CommandController.instance.executeCommand(j.IngameClientCommands.GET_FACEBOOK_USER_DATA, true);
        }
        v.CastleModel.titleData.parseUFA(n.ufa);
        v.CastleModel.titleData.parseUHT(n.uht);
        v.CastleModel.titleData.parseUAR(n.uar);
        if (n.scd) {
          v.CastleModel.userData.parse_SCD(n.scd);
        }
        if (n.fcs && !v.CastleModel.userData.isConnectedToFacebook) {
          v.CastleModel.userData.parse_FCS(n.fcs);
        }
        v.CastleModel.currencyData.parseSCE(n.sce);
        if (c.EnvGlobalsHandler.globals.loginIsKeyBased) {
          v.CastleModel.socialData.setSocialData(v.CastleModel.userData.playerID, v.CastleModel.userData.userName);
        }
        v.CastleModel.userData.parse_CH(n.ch);
        v.CastleModel.userData.parse_GEM(n.gem);
        v.CastleModel.currencyData.parseGCU(n.gcu);
        v.CastleModel.userData.parse_LTS(n.lts);
        v.CastleModel.userData.parse_GXP(n.gxp);
        v.CastleModel.userData.parse_GCL(n.gcl);
        if (n.mre) {
          v.CastleModel.monumentsData.parseMRE(n.mre);
        }
        if (n.lrr) {
          v.CastleModel.laboratoryData.parseLRR(n.lrr);
        }
        v.CastleModel.userData.kingstowerList.parseGKL(n.gkl);
        v.CastleModel.userData.monumentList.parseGML(n.gml);
        v.CastleModel.userData.laboratoryList.parseGLL(n.gll);
        v.CastleModel.userData.parse_KGV(n.kgv);
        v.CastleModel.userData.parse_UAP(n.uap);
        v.CastleModel.userData.parse_UAP(n.gac);
        v.CastleModel.userData.parse_UPI(n.upi);
        v.CastleModel.userData.parse_GAL(n.gal);
        v.CastleModel.userData.parse_GPF(n.gpf);
        v.CastleModel.userData.parse_DTS(n.DTS);
        v.CastleModel.settingsData.parse_OPT(n.opt);
        v.CastleModel.settingsData.parse_MVF(n.mvf);
        v.CastleModel.spyData.parse_GMS(n.gms);
        v.CastleModel.allianceData.parse_AIN(n.ain);
        v.CastleModel.allianceHelpRequestData.parse_AHL(n.ahl);
        v.CastleModel.chatData.parseHistory(n.acl);
        v.CastleModel.boostData.parse_BOI(n.boi);
        v.CastleModel.specialEventData.parseTEI(n.tei);
        v.CastleModel.specialEventData.parse_SEI(n.sei);
        v.CastleModel.treasureMapData.parse_TMP(n.tmp);
        v.CastleModel.treasureHuntData.parse_THI(n.thi);
        v.CastleModel.messageData.parse_SNE(n.sne);
        v.CastleModel.messageData.parse_MCD(n.mcd ? n.mcd : n);
        v.CastleModel.mightData.parse_GMU(n.gmu);
        v.CastleModel.castleAchievementData.parse_vli(n.vli);
        v.CastleModel.taxData.parse_TXI(n.txi);
        v.CastleModel.researchData.parse_REI(n.rei);
        v.CastleModel.kingdomData.parse_KPI(n.kpi);
        v.CastleModel.userData.parse_GRI(n.gri);
        v.CastleModel.spyData.parse_CPI(n.cpi);
        v.CastleModel.lordData.parse_GLI(n.gli);
        v.CastleModel.dailyQuestData.parse_DQL(n.dql);
        v.CastleModel.timerData.parse_DRT(n.drt);
        v.CastleModel.mercenaryData.parse_MPE(n.mpe);
        v.CastleModel.vipData.parse_VIP(n.vip);
        v.CastleModel.permanentCastleData.parseGPC(n.gpc);
        v.CastleModel.equipData.parse_ESL(n.esl);
        v.CastleModel.equipData.parseNRF(n.nrf);
        v.CastleModel.gemData.parse_ESL(n.esl);
        v.CastleModel.rubyWishingWellData.parse_RWW(n.rww);
        v.CastleModel.settingsData.parse_DSD(n.dsd);
        v.CastleModel.userCastleListDetailed.parseData(n.dcl);
        v.CastleModel.officerSchoolData.parse_GATP(n.gatp);
        v.CastleModel.globalEffectData.parse_GIE(n.bie);
        v.CastleModel.lootBoxData.parse_GLS(n.gls);
        v.CastleModel.settingsData.abTestShowSagamap = !n.nsm;
        v.CastleModel.userData.splitRunData.retrieveTestCaseInfos();
        v.CastleModel.koreanData.koreaHoursPlayed = 0;
        if (n.fii) {
          v.CastleModel.inviteFriendsData.parse_FII(n.fii);
        }
        if (n.ggm) {
          v.CastleModel.gemData.parseGGM(n.ggm);
        }
        if (n.pgl) {
          v.CastleModel.playerGiftData.parse_PGL(n.pgl.G, n.pgl.RA);
        }
        if (n.skl) {
          v.CastleModel.legendSkillData.parse_SKL(n.skl);
        }
        if (n.nec) {
          v.CastleModel.constructionItemData.parse_NEC(n.nec);
        }
        if (n.gai) {
          v.CastleModel.userData.attackCounter.parseParamObject(n.gai);
        }
        v.CastleModel.inviteFriendsData.getFriendInviteLink();
        if (r.BasicModel.basicLoaderData.assetLoader.isFinished) {
          this.joinMyCastle();
        } else {
          this.layoutManager.state = s.BasicLayoutManager.STATE_LOAD_ITEMS;
          r.BasicModel.basicLoaderData.assetLoader.addEventListener(U.COMPLETE, this.bindFunction(this.joinMyCastle));
        }
        l.CommandController.instance.executeCommand(o.BasicController.COMMAND_TRACK_LOGIN, this.env);
        l.CommandController.instance.executeCommand(o.BasicController.GTM_CALL_GGS_TRACK_EVENT, "enteredclient");
        L.CastleDataHolder.instance.gbdParsed = true;
        L.CastleDataHolder.instance.requestUptOnWorldmapSwitch = true;
        N.CommandDelayController.getInstance().finishDelayOfAllCommands();
        if (f.ClientConstInstanceIDs.isBetaInstance() || h.instanceOfClass(this.env, "CastleEnvironmentGlobals") && this.env.isClosedBeta) {
          Y.CastleDialogHandler.getInstance().registerDefaultDialogs(K.CastleWelcomeBetaTestDialog, new A.CastleWelcomeBetaTestDialogProperties(), true, a.BasicDialogHandler.PRIORITY_TOP);
          N.CommandDelayController.getInstance().addDelayCommandID(O.ClientConstSF.S2C_QUEST_LIST);
          N.CommandDelayController.getInstance().addDelayCommandID(O.ClientConstSF.S2C_QUEST_START);
          N.CommandDelayController.getInstance().addDelayCommandID(O.ClientConstSF.S2C_QUEST_PROGRES);
          N.CommandDelayController.getInstance().addDelayCommandID(O.ClientConstSF.S2C_QUEST_FINISHED);
        }
        if (z.ABGHelper.isOnABGAndTower) {
          v.CastleModel.smartfoxClient.sendCommandVO(new q.C2SGetAllianceInfoVO(v.CastleModel.allianceData.myAllianceVO.allianceId));
        }
        this.controller.addEventListener(b.IsoEvent.ON_RENDERER_READY, this.bindFunction(this.focusViewOnEvent));
        D.ClientBetaHelper.setSupportContextMenu();
        v.CastleModel.settingsData.validateEventBookmark();
        v.CastleModel.allianceData.validateAllianceLanguage();
        r.BasicModel.smartfoxClient.sendCommandVO(new x.C2SGetGeneralsInfoVO());
        this.controller.dispatchEvent(new E.CastleLoginEvent(E.CastleLoginEvent.ON_GBD_ARRIVED));
        L.CastleDataHolder.instance.showEffectTypeIDs = c.EnvGlobalsHandler.globals.isTest;
        L.CastleDataHolder.instance.cheatShowConstructionItemIDs = c.EnvGlobalsHandler.globals.isTest;
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  GBDCommand.prototype.focusViewOnEvent = function (e) {
    this.controller.removeEventListener(b.IsoEvent.ON_RENDERER_READY, this.bindFunction(this.focusViewOnEvent));
    if (v.CastleModel.tutorialData.isTutorialFinished()) {
      if (!(H.Iso.data.objects.eventBuildings.list.length <= 0)) {
        H.Iso.renderer.camera.scrollToGridPos(H.Iso.data.grid.origins.getOriginPos(y.IsoGridOriginEnum.BOTTOM_CORNER));
      }
    }
  };
  GBDCommand.prototype.joinMyCastle = function (e = null) {
    try {
      o.BasicController.getInstance().soundController.playMusic(M.CastleSoundController.MUSIC_LOOP1, -1);
      o.BasicController.getInstance().soundController.setMusicVolume(0.3);
      o.BasicController.getInstance().saveSoundSettings();
    } catch (e) {
      P.ExceptionHelper.debugError(e);
    }
    r.BasicModel.basicLoaderData.assetLoader.removeEventListener(U.COMPLETE, this.bindFunction(this.joinMyCastle));
    l.CommandController.instance.executeCommand(o.BasicController.COMMAND_VERIFY_TRACKING);
    if (v.CastleModel.userData.userLevel <= 1) {
      l.CommandController.instance.executeCommand(o.BasicController.COMMAND_TRACK_REGISTRATION_DATA);
    } else {
      l.CommandController.instance.executeCommand(o.BasicController.COMMAND_TRACK_DESKTOP_DEVICE_INFORMATION_EVENT);
    }
    if (v.CastleModel.worldmapData) {
      v.CastleModel.worldmapData.allowGAARequests = false;
    }
    v.CastleModel.smartfoxClient.sendCommandVO(new F.C2SGetBookmarkList());
    v.CastleModel.smartfoxClient.sendCommandVO(new B.C2SJoinCastleVO(B.C2SJoinCastleVO.MY_CASTLE, C.WorldClassic.KINGDOM_ID));
    if (v.CastleModel.userData.userXP >= W.CastleLoginBonusData.REQUIRED_XP) {
      this.checkLoginBonus();
    }
    v.CastleModel.smartfoxClient.sendCommandVO(new V.C2SGetSLI());
    v.CastleModel.userData.hideCapToolNotifications = false;
  };
  GBDCommand.prototype.getWelcomeScreenData = function () {
    if (m.ClientConstCastle.WELCOME_FEATURE_ENABLED) {
      v.CastleModel.smartfoxClient.sendCommandVO(new w.C2SShowWelcomeDataVO());
    } else {
      this.controller.dispatchEvent(new E.CastleLoginEvent(E.CastleLoginEvent.LOGIN_PROCESS_COMPLETE));
    }
  };
  GBDCommand.prototype.checkLoginBonus = function () {
    v.CastleModel.smartfoxClient.sendCommandVO(new R.C2SGetLoginBonusVO());
  };
  return GBDCommand;
}(k.CastleCommand);
exports.GBDCommand = G;
var H = require("./33.js");
var j = require("./29.js");
var W = require("./1122.js");
var Y = require("./9.js");
var K = require("./922.js");
var z = require("./53.js");
var q = require("./296.js");
p.classImplementsInterfaces(G, "IExecCommand");