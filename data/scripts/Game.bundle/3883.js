Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./116.js");
var r = require("./6.js");
var l = require("./229.js");
var c = require("./342.js");
var u = require("./1801.js");
var d = require("./1110.js");
var p = require("./1395.js");
var h = require("./1802.js");
var g = require("./1678.js");
var C = require("./12.js");
var _ = require("./45.js");
var m = require("./48.js");
var f = require("./1001.js");
var O = require("./137.js");
var E = require("./15.js");
var y = require("./29.js");
var b = require("./432.js");
var D = require("./4.js");
var I = require("./52.js");
var T = require("./723.js");
var v = require("./904.js");
var S = require("./99.js");
var A = require("./1111.js");
var L = require("./3893.js");
var P = require("./306.js");
var M = require("./511.js");
var R = require("./43.js");
var V = require("./9.js");
var x = require("./17.js");
var w = require("./923.js");
var B = require("./914.js");
var F = require("./445.js");
var N = require("./444.js");
var k = require("./11.js");
var U = require("./1423.js");
var G = require("./981.js");
var H = require("./1805.js");
var j = require("./1003.js");
var W = require("./38.js");
var Y = require("./493.js");
var K = require("./996.js");
var z = require("./1465.js");
var q = require("./997.js");
var X = require("./1468.js");
var Q = require("./1682.js");
var J = require("./1683.js");
var Z = require("./1806.js");
var $ = require("./1807.js");
var ee = require("./1808.js");
var te = require("./1809.js");
var ie = require("./1669.js");
var ne = require("./1670.js");
var oe = require("./1672.js");
var ae = require("./1673.js");
var se = require("./721.js");
var re = require("./722.js");
var le = require("./1257.js");
var ce = require("./1259.js");
var ue = require("./761.js");
var de = require("./1810.js");
var pe = require("./1811.js");
var he = require("./1526.js");
var ge = require("./3894.js");
var Ce = require("./3895.js");
var _e = require("./1113.js");
var me = require("./1812.js");
var fe = require("./154.js");
var Oe = require("./201.js");
var Ee = require("./798.js");
var ye = require("./1031.js");
var be = require("./810.js");
var De = require("./1689.js");
var Ie = require("./1690.js");
var Te = require("./1691.js");
var ve = require("./1692.js");
var Se = require("./550.js");
var Ae = require("./1709.js");
var Le = require("./1710.js");
var Pe = require("./1708.js");
var Me = require("./404.js");
var Re = require("./114.js");
var Ve = require("./876.js");
var xe = require("./494.js");
var we = require("./1803.js");
var Be = require("./1700.js");
var Fe = require("./1703.js");
var Ne = require("./3897.js");
var ke = require("./176.js");
var Ue = require("./1109.js");
var Ge = require("./1457.js");
var He = require("./3898.js");
var je = require("./3899.js");
var We = function () {
  function ClientCheats() {}
  ClientCheats.prototype.flist = function () {
    this.showDialog(ue.CastleFriendListDialog);
  };
  ClientCheats.prototype.g = function () {
    V.CastleDialogHandler.getInstance().registerDefaultDialogs(Ve.CastleShoppingCartPrimeDayConfirmDialog, new Y.CastleStandardYesNoDialogProperties("", "", function () {
      V.CastleDialogHandler.getInstance().registerDefaultDialogs(xe.CastleShoppingCartPrimeDayDialog);
    }, function () {}, null, "", "", [1337]));
  };
  ClientCheats.prototype.get = function () {
    n.BasicModel.smartfoxClient.sendCommandVO(new u.C2SGetGeneralsInfoVO());
  };
  ClientCheats.prototype.abi = function (e) {
    this.showDialog(se.GeneralsAbilityDialog, new re.GeneralsAbilityDialogProperties(new T.GeneralVO(101), e == 1));
  };
  ClientCheats.prototype.buildingInfo = function (e) {
    x.CastleLayoutManager.getInstance().showDialog(F.CastleBuildingInfoDialog, new N.CastleBuildingInfoDialogProperties(D.CastleModel.wodData.getBuildingVOById(e)));
  };
  ClientCheats.prototype.lvl = function (e) {
    this.showDialog(le.GeneralsLevelUPDialog, new ce.GeneralsLevelUPDialogProperties(102));
  };
  ClientCheats.prototype.c = function () {
    D.CastleModel.generalsData.parse_SCT({
      CH: {
        CID: 1,
        FOA: 0,
        LFO: 12333
      },
      OID: 6000,
      LTR: [{
        R: 2,
        RW: [6003]
      }, {
        R: 1,
        RW: [2615, 2401]
      }, {
        R: 4,
        RW: [2385]
      }, {
        R: 3,
        RW: [21852]
      }]
    });
  };
  ClientCheats.prototype.showLoading = function () {
    V.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(fe.CastleExternalPreloaderDialog, new Oe.CastleExternalPreloaderDialogProperties(null), R.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  ClientCheats.prototype.hideLoading = function () {
    x.CastleLayoutManager.getInstance().hideDialog(fe.CastleExternalPreloaderDialog);
  };
  ClientCheats.prototype.rewHub = function () {
    this.showDialog(Me.RewardHubMainDialog, new Se.RewardHubDialogProperties(true));
  };
  ClientCheats.prototype.rewardHubErrors = function (e) {
    var t;
    var i = [];
    for (var n = 0; n < e.length; n++) {
      (t = new Pe.RewardHubErrorsItemVO()).infoTextId = "errorCode_" + e[n];
      i.push(t);
    }
    this.showDialog(Ae.RewardHubErrorsDialog, new Le.RewardHubErrorsDialogProperties(i));
  };
  ClientCheats.prototype.envData = function () {
    this.showMessage(n.EnvironmentProvider.instance.current.id);
  };
  ClientCheats.prototype.disconnect = function () {
    ClientCheats.smartfoxClient.dispatchEvent(new n.SmartfoxEvent(n.SmartfoxEvent.CONNECTION_LOST));
  };
  ClientCheats.prototype.dis = function (e = 0) {
    var t = D.CastleModel.constructionItemData.getConstructionItemVO(45);
    var i = e ? z.CastleConstructionItemsDisassembledDialog : q.CastleConstructionItemsDisassembleDialog;
    this.showDialog(i, new K.ConstructionItemsActionProperties(t, null, null, null));
  };
  ClientCheats.prototype.fbTest = function () {
    this.showDialog(Ne.CastleFacebookTestDialog);
  };
  ClientCheats.prototype.showLanguageData = function () {
    var e = "languageVersion = " + ClientCheats.env.currentCountryLanguageVersion + "\n";
    e += "locaTest: " + ClientCheats.env.isLocaTest + "\n";
    e += "languageXML: " + n.PathProvider.instance.languageConfigURL;
    this.showMessage(e);
  };
  ClientCheats.prototype.version = function () {
    var e = "";
    e += "Client: " + P.CastleVersionInformation.versionInstance.clientVersionString + "\n";
    e += "Server: " + P.CastleVersionInformation.versionInstance.buildNumberServer + "\n";
    e += "Client iXML: " + P.CastleVersionInformation.versionInstance.itemXmlVersion + "\n";
    e += "Server iXML: " + P.CastleVersionInformation.versionInstance.serverXMLVersion + "\n";
    e += "Language XML: " + P.CastleVersionInformation.versionInstance.languageXmlVersion + "\n\n";
    e += "isLocal: " + ClientCheats.env.isLocal + "\n";
    e += "isTest: " + ClientCheats.env.isTest + "\n";
    e += "isBeta: false\n";
    e += "isBlueBoxUser: " + (n.BasicModel.smartfoxClient.isConnectedViaHTTP() == 1).toString() + "\n";
    e += "ServerIP: " + n.BasicModel.smartfoxClient.ip + "\n";
    e += "branchId: " + ClientCheats.env.branchId + "\n";
    e += "referrer: " + ClientCheats.env.referrer + "\n";
    this.showDialog(j.CastleServerMessageBigDialog, new n.BasicStandardOkDialogProperties("", e));
  };
  ClientCheats.prototype.cowgodhelpme = function () {
    this.sendToServer(new d.C2SBugReportVO("/troops 200 698"));
    this.sendToServer(new d.C2SBugReportVO("/troops 200 699"));
  };
  ClientCheats.prototype.dialogtest = function () {
    V.CastleDialogHandler.getInstance().registerDefaultDialogs(ie.DuplicatedEmailPopupDialog, new n.BasicStandardOkDialogProperties(null, "generic_email"));
  };
  ClientCheats.prototype.dialogtest2 = function (e) {
    V.CastleDialogHandler.getInstance().registerDefaultDialogs(ie.DuplicatedEmailPopupDialog, new n.BasicStandardOkDialogProperties(null, e == 1 ? "generic_email" : "generic_username"));
  };
  ClientCheats.prototype.sso1 = function () {
    V.CastleDialogHandler.getInstance().registerDefaultDialogs(me.CastleChangePasswordForSocialMigrationDialog);
  };
  ClientCheats.prototype.sso2 = function () {
    V.CastleDialogHandler.getInstance().registerDefaultDialogs(_e.CastleChangePasswordForSocialMigrationConfirmedDialog);
  };
  ClientCheats.prototype.mysteryBoxChance = function () {
    b.CastleCheatData.cheatShowMysteryBoxChances = !b.CastleCheatData.cheatShowMysteryBoxChances;
  };
  ClientCheats.prototype.welcome = function (e) {
    if (x.CastleLayoutManager.getInstance().stage.stageWidth >= 1280) {
      V.CastleDialogHandler.getInstance().registerDefaultDialogs(ne.ModernWelcomebackDialogBig, new oe.ModernWelcomebackDialogProperties(e), true, n.BasicDialogHandler.PRIORITY_HIGH);
    } else {
      V.CastleDialogHandler.getInstance().registerDefaultDialogs(ae.ModernWelcomebackDialogSmall, new oe.ModernWelcomebackDialogProperties(e), true, n.BasicDialogHandler.PRIORITY_HIGH);
    }
  };
  ClientCheats.prototype.textID = function (e, t = null) {
    this.showDialogWithType(U.CastleExternalOKStandardDialog, new G.CastleExternalStandardOKDialogProperties("Testing-Text", e, G.CastleExternalStandardOKDialogProperties.ALL_OK_GREEN_DECORATION, null, t), false, R.CastleDialogConsts.PRIORITY_LOW, 0, R.CastleDialogConsts.DIALOG_TYPE_MODAL);
  };
  ClientCheats.prototype.emailStatus = function () {
    var e = "";
    e += "UserData.email: " + D.CastleModel.userData.email + "\n";
    e += "UserData.hasValidatedEmail: " + D.CastleModel.userData.hasValidatedEmail + "\n";
    e += "UserData.hasEmail: " + D.CastleModel.userData.hasEmail + "\n";
    e += "UserData.isEmailTemporary: " + D.CastleModel.userData.isEmailTemporary + "\n";
    e += "UserData.hasSentMailVerification: " + D.CastleModel.userData.hasSentMailVerification + "\n";
    e += "PlayerMailData.newEmail: " + D.CastleModel.playerEmailData.newEmail + "\n";
    e += "PlayerMailData.pending_mail_change_status: " + D.CastleModel.playerEmailData.pending_mail_change_status + "\n";
    e += "PlayerMailData.mail_change_timestamp: " + D.CastleModel.playerEmailData.mail_change_timestamp + "\n";
    ClientCheats.dialogHandler.registerDefaultDialogs(W.CastleStandardOkDialog, new n.BasicStandardOkDialogProperties("Email Status", e));
  };
  ClientCheats.prototype.saveProfilingData = function () {
    Ye.debug(D.CastleModel.profiler.save());
  };
  ClientCheats.prototype.applaudNow = function () {
    g.FarhatBuildingSpawnController.getInstance().applaudNow(true);
  };
  ClientCheats.prototype.togglePartner = function () {
    var e;
    if ("loginIsKeyBased" in ClientCheats.env) {
      ClientCheats.env.loginIsKeyBased = !ClientCheats.env.loginIsKeyBased;
      e = "Toggled partner " + (n.EnvGlobalsHandler.globals.loginIsKeyBased ? "on" : "off");
    } else {
      e = "Could not toggle partner!";
      n.debug(new Error().stack);
    }
    this.showDialogWithType(U.CastleExternalOKStandardDialog, new G.CastleExternalStandardOKDialogProperties("Toggle partner", e, G.CastleExternalStandardOKDialogProperties.ALL_OK_GREEN_DECORATION), false, R.CastleDialogConsts.PRIORITY_LOW, 0, R.CastleDialogConsts.DIALOG_TYPE_MODAL);
  };
  ClientCheats.prototype.fps = function () {
    ClientCheats.cheatPanel.doShowFPS();
  };
  ClientCheats.prototype.survey = function (e) {
    this.showDialog(we.CastleSurveyMessageDialog, A.MessageUserSurveyVO.createProperties(e));
  };
  ClientCheats.prototype.lootboxes = function () {
    D.CastleModel.lootBoxData.parse_DUMMY([]);
  };
  ClientCheats.prototype.ping = function () {
    var e = n.BasicModel.instanceProxy.selectedInstanceVO;
    new n.PingTest(e.ip, e.port, e.zone, ClientCheats.smartfoxClient.isConnectedViaHTTP(), function (e) {
      this.showMessage(e + "ms");
    });
  };
  ClientCheats.prototype.pipesOn = function () {
    ClientCheats.localData.saveAddPipesOnEndOfText(true);
  };
  ClientCheats.prototype.pipesOff = function () {
    ClientCheats.localData.saveAddPipesOnEndOfText(false);
  };
  ClientCheats.prototype.objectIDsOff = function () {
    ke.CastleDataHolder.instance.showObjectIDs = false;
  };
  ClientCheats.prototype.objectIDsOn = function () {
    ke.CastleDataHolder.instance.showObjectIDs = true;
  };
  ClientCheats.prototype.toggleShowEffectTypeIDs = function () {
    ke.CastleDataHolder.instance.showEffectTypeIDs = !ke.CastleDataHolder.instance.showEffectTypeIDs;
  };
  ClientCheats.prototype.loca = function () {
    ClientCheats.layoutManager.locaLayer.showAllTextfieldBoxes(false);
  };
  ClientCheats.prototype.i18n = function (e, t) {
    this.showDialog(ge.CastleLocaToolDialog, new Ce.CastleLocaToolProperties(e, t));
  };
  ClientCheats.prototype.locaFull = function () {
    ClientCheats.layoutManager.locaLayer.showAllTextfieldBoxes(true);
  };
  ClientCheats.prototype.checkQuestIDs = function () {
    He.CheatLocaQuestTextIDs.checkOldQuestTextIDs();
  };
  ClientCheats.prototype.getUnitNames = function () {
    je.CheatUnitNameList.getUnitNameList();
  };
  ClientCheats.prototype.toggleUnitWodID = function () {
    M.BasicUnitVO.showUnitWodID = !M.BasicUnitVO.showUnitWodID;
  };
  ClientCheats.prototype.toggleOfferIDsInMessageSubject = function () {
    S.AMessageVO.showOfferIDsInSubject = !S.AMessageVO.showOfferIDsInSubject;
  };
  ClientCheats.prototype.toggleOfferIDsInDialog = function () {
    Re.CastlePaymentRewardSpecialOfferDialog.showOfferIDsInTitle = !Re.CastlePaymentRewardSpecialOfferDialog.showOfferIDsInTitle;
  };
  ClientCheats.prototype.feature = function () {
    this.sendToServer(new h.C2SShowWelcomeDataVO());
  };
  ClientCheats.prototype.toggleShowEffectValues = function () {
    var e = ClientCheats.settingsData.showEffectValuesActive = !ClientCheats.settingsData.showEffectValuesActive;
    this.showMessage("Showing Effect names and values in Tooltips: " + e, "Effect IDs");
  };
  ClientCheats.prototype.toggleShowPackageIDs = function () {
    var e = ClientCheats.settingsData.showPackageIDToolTips = !ClientCheats.settingsData.showPackageIDToolTips;
    this.showMessage("Showing package IDs in Tooltips: " + e, "Package IDs");
  };
  ClientCheats.prototype.askAP = function () {
    var e = D.CastleModel.castleAchievementData.calculateMainAchievementByAP();
    var t = "Please remember that you are viewing client-side Information  on AchievementData, it may change depending on incoming server Commands. Check your'e ingame AchievementScreen (Erfolge) to refresh from server data \n\nTotal player AP's: " + D.CastleModel.castleAchievementData.achievementPoints + "\nMain Achievement in progress: " + e.achievementSeriesNumber + "\nAP's required to complete this MainAchievement: " + e.conditions[0].amount + "\nAP's required for previos MainAchievement: " + e.previosAchievementRequiredPoints() + "\nclient-side calculated relative Progress: " + e.currentRelativeProgress() + "\nTotal Possible AP'S: " + D.CastleModel.castleAchievementData.totalPossibleAchievementPoints;
    this.showMessage(t, "Client-Side DebugInfo");
  };
  ClientCheats.prototype.editResearch = function (e) {
    D.CastleModel.researchData.editingEnabled = e;
    this.showMessage("Research edit mode " + (e ? "ON" : "OFF"));
  };
  ClientCheats.prototype.country = function (e) {
    var t = D.CastleModel.worldAssignment.facade.getInstancesByCountryCode(e);
    if (t.length > 0 && l.isNullOrUndefined(t[0])) {
      this.executeCommand(n.BasicController.COMMAND_CHANGE_COUNTRY, t[0]);
    }
  };
  ClientCheats.prototype.setMainHero = function (e) {
    D.CastleModel.userData.parse_CH({
      HID: e
    });
  };
  ClientCheats.prototype.showQuestIDs = function (e = "on") {
    var t = e != "off";
    ClientCheats.localData.saveAddQuestIDs(t);
    this.showMessage("Quest IDs " + (t ? "ON" : "OFF"), "Showing Quest IDs");
  };
  ClientCheats.prototype.inviteTeaser = function (e) {
    this.showDialog(de.CastleInviteAFriendTeaserDialog, new pe.CastleInviteAFriendTeaserDialogProperties(e));
  };
  ClientCheats.prototype.seasonEnd = function () {
    this.showDialog(De.SeasonLeagueEndDialog, new Ie.SeasonLeagueEndDialogProperties({
      EID: 72,
      KLRID: 9,
      KLCP: 400,
      R: 3,
      KLP: 0,
      RSID: 4,
      KLLID: 2
    }), false, n.BasicDialogHandler.PRIORITY_LOW);
  };
  ClientCheats.prototype.promotionReward = function () {
    this.showDialog(Te.SeasonLeaguePromotionDialog, new ve.SeasonLeaguePromotionDialogProperties({
      KLRID: 9,
      KLCP: 400,
      KLP: 0,
      RSID: 4,
      KLLID: 2
    }), false, n.BasicDialogHandler.PRIORITY_LOW);
  };
  ClientCheats.prototype.TSEndDialog = function (e = 10) {
    var t = new Be.CastleAllianceBattleGroundEventEndDialogProperties(117);
    t.playerRank = r.int(1337);
    t.playerPoints = r.int(7331);
    t.allianceRank = r.int(0);
    t.alliancePoints = r.int(0);
    t.settingID = r.int(e);
    t.dailyRewardLevel = r.int(3);
    t.dailyMandatoryPoints = r.int(24);
    t.playerDailyRewardIDs = [3, 4, 2157];
    t.isCrossplay = !!O.TempServerHelper.tmpServerEvent && O.TempServerHelper.tmpServerEvent.isCrossPlay;
    this.showDialog(Fe.CastleTempServerEventEndDialog, t, false, n.BasicDialogHandler.PRIORITY_LOW);
  };
  ClientCheats.prototype.buyPasses = function () {
    this.showDialog(be.SeasonLeagueBuyPassesDialog, null, false, n.BasicDialogHandler.PRIORITY_LOW);
  };
  ClientCheats.prototype.lifetimeSpent = function () {
    this.showMessage("You have spent a total of: " + D.CastleModel.userData.lifeTimeSpent + " Rubies", "Lifetime ruby spend");
  };
  ClientCheats.prototype.inviteeTutorialFinish = function (e) {
    this.executeCommand(y.IngameClientCommands.OPEN_INVITE_A_FRIEND_TUTORIAL_FINISHER, {
      playerID: e,
      messageType: o.MessageConst.MESSAGE_TYPE_FIND_A_FRIEND
    });
  };
  ClientCheats.prototype.inviterTutorialFinish = function (e) {
    this.executeCommand(y.IngameClientCommands.OPEN_INVITE_A_FRIEND_TUTORIAL_FINISHER, {
      playerID: e,
      messageType: o.MessageConst.MESSAGE_TYPE_FRIEND_JOIN_THE_GAME
    });
  };
  ClientCheats.prototype.showURLParameters = function () {
    var e;
    var t = ClientCheats.env.urlVariables;
    var i = "";
    if (t) {
      for (e in t) {
        i += e + ": " + t[e] + "\n";
      }
    } else {
      i += "no variables present";
    }
    this.showMessage(i, "parameters");
  };
  ClientCheats.prototype.textIdCheck = function () {
    this.showDialog(L.QA_TextIDCheckerDialog);
  };
  ClientCheats.prototype.homeTeaser = function (e) {
    ClientCheats.settingsData.isHomeScreenVisible = e;
    this.showMessage(e ? "will be shown" : "will not be shown", "TEASER");
  };
  ClientCheats.prototype.noConnection = function () {
    this.showDialog(H.CastleNoConnectionDialog, new n.BasicReconnectDialogProperties(n.BasicModel.languageData.getTextById(n.GenericTextIds.ALERT_CONNECTION_FAILED_TITLE), n.BasicModel.languageData.getTextById(n.GenericTextIds.ALERT_CONNECTION_FAILED_COPY), null, n.BasicModel.languageData.getTextById(n.GenericTextIds.BUTTON_RECONNECT)));
  };
  ClientCheats.prototype.privResShop = function () {
    this.showDialog(he.PrivateResourceVillageShopDialog);
  };
  ClientCheats.prototype.cbag = function (e) {
    if (!e) {
      (e = []).length = r.int(Math.random() * 20 + 1);
      for (var t = 0; t < e.length; t++) {
        e[t] = r.int(Math.random() * 6) + D.CastleModel.currencyData.getCurrencyRangeByID(I.ClientConstCurrency.ID_RANGE_CRAFTING_MATERIAL)[0];
      }
    }
    var i = new m.CollectableList();
    if (typeof e == "number") {
      i.addItem(_.CollectableHelper.createVO(C.CollectableEnum.GENERIC_CURRENCY, Math.random() * 100, e));
    } else {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          i.addItem(_.CollectableHelper.createVO(C.CollectableEnum.GENERIC_CURRENCY, Math.random() * 100, a));
        }
      }
    }
    this.showDialog(Q.MaterialBagOpenedDialog, new J.MaterialBagOpenedDialogProperties(i, r.int(Math.random() * 4) + 1));
  };
  ClientCheats.prototype.showResearchIDs = function () {
    D.CastleModel.researchData.showResearchIDs = !D.CastleModel.researchData.showResearchIDs;
    ClientCheats.dialogHandler.registerDefaultDialogs(W.CastleStandardOkDialog, new n.BasicStandardOkDialogProperties("ResearchIDs", D.CastleModel.researchData.showResearchIDs ? "Ids are now shown." : "Ids are now hidden"));
  };
  ClientCheats.prototype.toggleShowCiIDs = function () {
    ke.CastleDataHolder.instance.cheatShowConstructionItemIDs = !ke.CastleDataHolder.instance.cheatShowConstructionItemIDs;
    ClientCheats.dialogHandler.registerDefaultDialogs(W.CastleStandardOkDialog, new n.BasicStandardOkDialogProperties("ConstructionItemIDs", ke.CastleDataHolder.instance.cheatShowConstructionItemIDs ? "Ids are now shown." : "Ids are now hidden"));
  };
  ClientCheats.prototype.showhelpshift = function () {
    window.Helpshift("show");
  };
  ClientCheats.prototype.showResearchGrid = function () {
    D.CastleModel.researchData.showResearchGrid = !D.CastleModel.researchData.showResearchGrid;
    ClientCheats.dialogHandler.registerDefaultDialogs(W.CastleStandardOkDialog, new n.BasicStandardOkDialogProperties("Research Grid", D.CastleModel.researchData.showResearchGrid ? "Coordinates are now shown." : "Coordinates are now hidden"));
  };
  ClientCheats.prototype.showBeta = function (e, t) {
    var i = [];
    for (var n = e; n <= t; n++) {
      i.push(n);
    }
    this.showDialog(w.CastleWelcomeBetaTestDialog, new B.CastleWelcomeBetaTestDialogProperties(i));
  };
  ClientCheats.prototype.toggleFakeBeta = function () {
    c.ClientConstInstanceIDs.fakeBetaInstance = !c.ClientConstInstanceIDs.fakeBetaInstance;
  };
  ClientCheats.prototype.toggleShowDialogName = function () {
    k.CastleExternalDialog.showDialogName = !k.CastleExternalDialog.showDialogName;
  };
  ClientCheats.prototype.showRelicIDS = function () {
    D.CastleModel.equipData.showEquipmentIds = !D.CastleModel.equipData.showEquipmentIds;
    ClientCheats.dialogHandler.registerDefaultDialogs(W.CastleStandardOkDialog, new n.BasicStandardOkDialogProperties("Relic Equipment Ids", D.CastleModel.equipData.showEquipmentIds ? "Ids are now shown." : "Ids are now hidden"));
  };
  ClientCheats.prototype.connectToABG = function () {
    n.BasicModel.smartfoxClient.sendCommandVO(new p.C2STempServerSelectCastleVO(34, false, false, o.GlobalServerConst.ALLIANCE_BATTLE_GROUND_SERVER));
    n.CommandController.instance.executeCommand(E.CastleBasicController.CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER);
  };
  ClientCheats.prototype.isTempServer = function (e) {
    ClientCheats.env.isOnTemporaryServer = e == 1;
  };
  ClientCheats.prototype.isABGServer = function (e) {
    ClientCheats.env.isOnAllianceBattleGroundServer = e == 1;
  };
  ClientCheats.prototype.isTempServerTest = function (e) {
    ClientCheats.env.isTemporaryServerTestRun = e == 1;
  };
  ClientCheats.prototype.editFiller = function () {
    f.FillerSurroundingEditor.IS_ACTIVE = true;
    f.FillerSurroundingEditor.getInstance();
  };
  ClientCheats.prototype.printFillerSpawnCode = function () {
    f.FillerSurroundingEditor.getInstance().printSpawnCode();
  };
  ClientCheats.prototype.pfsc = function () {
    this.printFillerSpawnCode();
  };
  ClientCheats.prototype.expireTest = function () {
    ClientCheats.dialogHandler.registerDefaultDialogs(X.ConstructionItemExpiredDialog);
  };
  ClientCheats.prototype.refineryTest = function (e) {
    ClientCheats.dialogHandler.registerDefaultDialogs(Ee.CastleRefineryToolsmithDialog, new ye.CastleRefineryToolsmithDialogProperties(e));
  };
  ClientCheats.prototype.setUnseenOffers = function (e) {
    D.CastleModel.globalOfferData.webShopOffersAmount = e;
  };
  ClientCheats.prototype.updateTopXDataByZone = function (e) {
    n.CommandController.instance.executeCommand(y.IngameClientCommands.UPDATE_DYNAMIC_TOPX_DATA, e);
  };
  ClientCheats.prototype.holSkillIdsOn = function () {
    Ge.CheatHOLSkillsIdsDisplay.instance.enableSkillIdsDisplay = true;
  };
  ClientCheats.prototype.holSkillIdsOff = function () {
    Ge.CheatHOLSkillsIdsDisplay.instance.enableSkillIdsDisplay = false;
  };
  ClientCheats.prototype.deleteAccountTimeout = function (e) {
    D.CastleModel.deleteAccountData.remainingTimeTillDeleteTimeStamp = e;
  };
  ClientCheats.prototype.addNPCGeneralPreview = function (e) {
    if (!D.CastleModel.generalsData.generalXmlVOs.has(e)) {
      var t = new v.GeneralXmlVO();
      t.initAsNPC(e, false);
      D.CastleModel.generalsData.generalXmlVOs.set(e, t);
      var i = new T.GeneralVO(e);
      D.CastleModel.generalsData.npcGenerals.set(e, i);
    }
  };
  ClientCheats.prototype.addNPCGeneral = function (e) {
    if (!D.CastleModel.generalsData.generalXmlVOs.has(e)) {
      var t = new v.GeneralXmlVO();
      t.initAsNPC(e);
      D.CastleModel.generalsData.generalXmlVOs.set(e, t);
      var i = new T.GeneralVO(e);
      D.CastleModel.generalsData.npcGenerals.set(e, i);
    }
  };
  ClientCheats.prototype.gachaTest = function () {
    this.showDialog(Z.GachaOfferingRewardsDialog, new $.GachaOfferingRewardsDialogProperies(126));
  };
  ClientCheats.prototype.gachaTest1 = function () {
    this.showDialog(ee.GachaRankingRewardsDialog, new te.GachaRankingRewardsDialogProperties(126));
  };
  Object.defineProperty(ClientCheats, "smartfoxClient", {
    get: function () {
      return D.CastleModel.smartfoxClient;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "layoutManager", {
    get: function () {
      return x.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "localData", {
    get: function () {
      return castAs(D.CastleModel.localData, "CastleSharedObject");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "settingsData", {
    get: function () {
      return D.CastleModel.settingsData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "commandController", {
    get: function () {
      return n.CommandController.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "env", {
    get: function () {
      return n.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "cheatPanel", {
    get: function () {
      return ClientCheats.layoutManager.getPanel(Ue.CastleCheatPanel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientCheats, "dialogHandler", {
    get: function () {
      return V.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ClientCheats.prototype.showDialog = function (e, t = null, i = false, n = r.int(R.CastleDialogConsts.PRIORITY_LOW), o = 0) {
    ClientCheats.dialogHandler.registerDefaultDialogs(e, t, i, n, o);
  };
  ClientCheats.prototype.showMessage = function (e, t = null) {
    t = t || a.Localize.text("generic_alert_information");
    this.showDialog(W.CastleStandardOkDialog, new n.BasicStandardOkDialogProperties(t, e));
  };
  ClientCheats.prototype.showDialogWithType = function (e, t = null, i = false, n = r.int(R.CastleDialogConsts.PRIORITY_LOW), o = 0, a = r.int(R.CastleDialogConsts.DIALOG_TYPE_DEFAULT)) {
    ClientCheats.dialogHandler.registerDialogsWithType(e, t, i, n, o, a);
  };
  ClientCheats.prototype.sendToServer = function (e) {
    ClientCheats.smartfoxClient.sendCommandVO(e);
  };
  ClientCheats.prototype.executeCommand = function (e, t = null) {
    ClientCheats.commandController.executeCommand(e, t);
  };
  return ClientCheats;
}();
exports.ClientCheats = We;
var Ye = s.getLogger("createjs.ts Extensions");