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
var p = require("./2.js");
var h = require("./2.js");
var g = require("./2.js");
var C = require("./2.js");
var _ = require("./2.js");
var m = require("./2.js");
var f = require("./2.js");
var O = require("./2.js");
var E = require("./2.js");
var y = require("./2.js");
var b = require("./2.js");
var D = require("./2.js");
var I = require("./2.js");
var T = require("./2.js");
var v = require("./2.js");
var S = require("./2.js");
var A = require("./2.js");
var L = require("./2.js");
var P = require("./2.js");
var M = require("./1.js");
var R = require("./1.js");
var V = require("./1164.js");
var x = require("./267.js");
var w = require("./4224.js");
var B = require("./4225.js");
var F = require("./4226.js");
var N = require("./4227.js");
var k = require("./4228.js");
var U = require("./4229.js");
var G = require("./4230.js");
var H = require("./4233.js");
var j = require("./4234.js");
var W = require("./4235.js");
var Y = require("./4236.js");
var K = require("./4237.js");
var z = require("./4238.js");
var q = require("./4239.js");
var X = require("./4240.js");
var Q = require("./4241.js");
var J = require("./4243.js");
var Z = require("./91.js");
var $ = require("./30.js");
var ee = require("./15.js");
var te = require("./432.js");
var ie = require("./4.js");
var ne = require("./4245.js");
var oe = require("./4247.js");
var ae = require("./223.js");
var se = require("./4250.js");
var re = require("./270.js");
var le = require("./4252.js");
var ce = require("./4254.js");
var ue = require("./4256.js");
var de = require("./4258.js");
var pe = require("./4259.js");
var he = require("./4267.js");
var ge = require("./1885.js");
var Ce = require("./4274.js");
var _e = require("./4276.js");
var me = require("./4279.js");
var fe = require("./4281.js");
var Oe = require("./4284.js");
var Ee = require("./4286.js");
var ye = require("./4296.js");
var be = require("./4302.js");
var De = require("./4303.js");
var Ie = require("./569.js");
var Te = require("./4306.js");
var ve = require("./4307.js");
var Se = require("./4308.js");
var Ae = require("./4310.js");
var Le = require("./4311.js");
var Pe = require("./4312.js");
var Me = require("./4313.js");
var Re = require("./4314.js");
var Ve = require("./4315.js");
var xe = require("./4316.js");
var we = require("./4317.js");
var Be = require("./1650.js");
var Fe = require("./4319.js");
var Ne = require("./4321.js");
var ke = require("./4323.js");
var Ue = require("./4338.js");
var Ge = require("./4339.js");
var He = require("./4341.js");
var je = require("./4343.js");
var We = require("./4344.js");
var Ye = require("./4345.js");
var Ke = require("./4347.js");
var ze = require("./4349.js");
var qe = require("./4351.js");
var Xe = createjs.Ticker;
var Qe = createjs.Event;
var Je = createjs.DisplayObject;
var Ze = function (e) {
  function CastleGame(t) {
    var i = this;
    i.modelObserverManager = new A.ObserverManager();
    i.now = NaN;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).assignHandlerInstances();
    i.setImports();
    return i;
  }
  n.__extends(CastleGame, e);
  CastleGame.prototype.setImports = function () {
    $e.ClientConstImport;
  };
  CastleGame.prototype.assignHandlerInstances = function () {
    this.bDialogHandler ||= Ai.CastleDialogHandler.getInstance();
    this.cIngameMessageHandler ||= Pi.CastleIngameMessageHandler.getInstance();
  };
  CastleGame.prototype.onEnterFrame = function (e) {
    $.CachedTimer.clearCachedTimer();
    this.now = $.CachedTimer.getCachedTimer();
    this.modelObserverManager.notify(this.now);
    this.bDialogHandler.showDialog(this.now);
    this.cIngameMessageHandler.showMessage(this.now);
  };
  CastleGame.prototype.onAddedToStage = function () {
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_HANDLE_SERVER_ERROR, nt.CastleHandleServerErrorCommand);
    e.prototype.onAddedToStage.call(this);
    S.Input.instance.activate(this.stage);
    if (this.env.isClosedBeta) {
      var t = ie.CastleModel.worldAssignment.facade.getInstancesByCountryCode(V.CountryCodes.USA);
      if (t.length > 0 && t[0]) {
        T.CommandController.instance.executeCommand(c.BasicController.COMMAND_CHANGE_COUNTRY, t[0]);
      }
    }
    window.focus();
  };
  CastleGame.prototype.registerCommands = function () {
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_HANDLE_SERVER_ERROR, nt.CastleHandleServerErrorCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_LOGOUT, W.CastleLogoutCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_RECONNECT, m.BasicReconnectCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_OPEN_FORUM, lt.CastleOpenForumCommand);
    T.CommandController.instance.registerCommand(ee.CastleBasicController.OPEN_DISCORD, K.CastleOpenDiscordCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_DESTROY_GAME, it.CastleDestroyGameCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_SHOW_REGISTER_DIALOG, b.BasicShowRegisterDialogCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_SHOW_COMA_TEASER, y.BasicShowComaTeaserCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_JOINED_ROOM, j.CastleJoinedRoomCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_CONNECTION_FAILED, s.BasicConnectionFailedCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_CONNECTION_TIMEOUT, r.BasicConnectionTimeoutCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_PREPARE_RECONNECT, _.BasicPrepareReconnectCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_ADD_EXTRA_CURRENCY, k.CastleAddExtraCurrencyCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_LOGIN_JSON, g.BasicLoginJsonCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_REGISTER_USER_JSON, f.BasicRegisterJsonCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_INVITE_FRIEND, d.BasicInviteFriendCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_INVITE_FRIEND_JSON, p.BasicInviteFriendJsonCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_EXTENSION_RESPONSE, H.CastleExtensionResponseCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_INIT_SERVERCOMMANDS, at.CastleInitServerCommands);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_SOCIAL_LOGIN, q.CastleSocialLoginCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_LOGIN, st.CastleLoginCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_CONNECTION_LOST, tt.CastleConnectionLostCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_INITALIZE_CONTROLLER, ot.CastleInitalizeControllerCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_REGISTER_USER, z.CastleRegisterUserCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_CHANGE_COUNTRY, o.BasicChangeCountryCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_CHECK_MAINTENANCE, ct.CastleCheckMaintenanceCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, U.CastleConnectToInstanceVOCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_CONNECT_CLIENT, a.BasicConnectClientCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_RELOAD_NETWORK, O.BasicReloadNetworkCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_UPDATE_NETWORK, Y.CastleNetworkUpdateCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_LOST_PASSWORD, rt.CastleLostPasswordCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_VERIFY_PLAYER_MAIL, X.CastleVerifyPlayerMailCommand);
    T.CommandController.instance.registerCommand(c.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, E.BasicReloadPageWithZoneIdCommand);
    T.CommandController.instance.registerCommand(ee.CastleBasicController.CONNECT_TO_TEMPORARY_SERVER, G.CastleConnectToTemporaryServerCommand);
    T.CommandController.instance.registerCommand(ee.CastleBasicController.CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER, Ui.CastleConnectToAllianceBattleGroundServerCommand);
    T.CommandController.instance.registerCommand(ee.CastleBasicController.TRACK_ATTACK_SCREEN_ACTION, J.AttackScreenWaveTrackingCommand);
    T.CommandController.instance.registerCommand(ee.CastleBasicController.TRACK_GENERALS_ATTACK_SCREEN, Q.AttackScreenGeneralsTrackingCommand);
    T.CommandController.instance.registerCommand(ee.CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION, w.AccountDeletionTrackingCommand);
    T.CommandController.instance.registerCommand(ee.CastleBasicController.TRACK_SOCIAL_BUTTON, F.SocialButtonTrackingCommand);
    T.CommandController.instance.registerCommand(ee.CastleBasicController.TRACK_SSO_USER_MOVE_ACTION, N.SsoUserMoveTrackingCommand);
    T.CommandController.instance.registerCommand(ee.CastleBasicController.TRACK_DONATION_EVENT, B.DonationEventTrackingCommand);
    dt.IngameClientCommands.InitIngameClientCommands();
    Si.TutorialClientCommands.InitTutorialClientCommands();
    M.TextField.FontRestriction = {
      fontOverwrites: new Map([]),
      allowedFonts: new Set([CastleGame.BODY_FONT, CastleGame.HEADER_FONT, CastleGame.BODY_FONT_IE, CastleGame.HEADER_FONT_IE]),
      fallbackFont: CastleGame.BODY_FONT_IE
    };
  };
  CastleGame.prototype.initializeGame = function () {
    e.prototype.initializeGame.call(this);
    vi.CastleFacebookModule.initialize();
    v.GoodgameBitmapEngine.instance.debugShowPlaceholder = false;
    v.GoodgameBitmapEngine.instance.smoothing = true;
    M.TextField.scaleHTMLByPixelDensity = false;
    Je.setDoCacheScalingMode(Je.DOCACHE_SCALING_MODE_BY_ALL_PARENTS);
    this.parseConfigXML();
    this.initModel();
    this.initView();
    this.initController();
    this.layoutManager.uiStage.addEventListener(Qe.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.setupFpsMeasurements();
    this.initialized.dispatch();
    createjs.Touch.enable(this.layoutManager.uiStage);
    x.initCXF();
    if (M.currentBrowserInfo.isMobile) {
      document.querySelector("meta[name=\"viewport\"]").setAttribute("content", "initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no");
    }
  };
  CastleGame.prototype.setupFpsMeasurements = function () {};
  CastleGame.prototype.parseConfigXML = function () {
    var e = C.BasicModel.basicLoaderData.appLoader.getLoaderData(l.BasicConstants.ITEM_XML_LOADER);
    if (!e) {
      throw new Error("loaderData is NULL - execute maven-task 'GENERATE AND VERSIONIZE ITEM.GGS' or 'GENERATE AND VERSIONIZE Item SWFS'");
    }
    this._configXML = L.XMLInterfaceObjectFactory.CREATE_MAP_FROM_JSON(e);
  };
  CastleGame.prototype.initModel = function () {
    ie.CastleModel.smartfoxClient = new D.BasicSmartfoxClient();
    ie.CastleModel.timerData = ie.CastleModel.addModel(new Me.CastleTimerData());
    ie.CastleModel.trackingTimer = ie.CastleModel.addModel(new Re.CastleTrackingTime());
    ie.CastleModel.currencyData = ie.CastleModel.addModel(new ri.CurrencyData(this._configXML));
    ie.CastleModel.landmark = ie.CastleModel.addModel(new ki.LandmarkData(this._configXML));
    ie.CastleModel.effectsData = new _e.CastleEffectsData(this._configXML);
    ie.CastleModel.allianceCrestData = new oe.CastleAllianceCrestData(this._configXML);
    ie.CastleModel.wodData = new ni.CastleWodData(this._configXML);
    ie.CastleModel.localData = new ve.CastleSharedObject();
    C.BasicModel.localData = ie.CastleModel.localData;
    ie.CastleModel.socialData = new Le.CastleSocialData();
    C.BasicModel.socialData = ie.CastleModel.socialData;
    ie.CastleModel.gfxData = new Ue.GFXData();
    ie.CastleModel.settingsData = new Kt.CastleSettingsData();
    ie.CastleModel.changePlayerNameData = new Qi.ChangePlayerNameData(this._configXML);
    ie.CastleModel.playerEmailData = new $i.PlayerEmailData();
    ie.CastleModel.deleteAccountData = new Ji.DeleteAccountData();
    ie.CastleModel.buddyListData = new le.CastleBuddyListData(this.stage.loaderInfo.parameters.buddylist);
    ie.CastleModel.resourcePoolData = new Wt.CastleResourcePoolData();
    ie.CastleModel.cheatData = new te.CastleCheatData();
    ie.CastleModel.xmlPropertyData = ie.CastleModel.addModel(new qe.CastleXmlPropertyData(this._configXML));
    ie.CastleModel.specialServerData = ie.CastleModel.addModel(new Wi.CastleSpecialServerData(this._configXML));
    ie.CastleModel.crestSymbolData = new he.CastleCrestSymbolData(this._configXML);
    ie.CastleModel.craftingMaterialData = ie.CastleModel.addModel(new si.CraftingMaterialData(this._configXML));
    ie.CastleModel.constructionItemBlueprintData = new oi.ConstructionItemBlueprintData(this._configXML);
    ie.CastleModel.areaData = ie.CastleModel.addModel(new ut.AreaDataModel());
    ie.CastleModel.equipData = ie.CastleModel.addModel(new Vi.CastleEquipmentData());
    ie.CastleModel.equipData.parseXml(this._configXML);
    ie.CastleModel.userData = ie.CastleModel.addModel(new ii.CastleUserData(this._configXML));
    ie.CastleModel.lordData = new Vt.CastleLordData(this._configXML);
    ie.CastleModel.gemData = new xi.CastleGemData();
    ie.CastleModel.gemData.parseXML(this._configXML);
    ie.CastleModel.legendSkillData = new Ee.CastleLegendSkillData(this._configXML);
    ie.CastleModel.constructionItemData = ie.CastleModel.addModel(new ai.ConstructionItemData(this._configXML));
    ie.CastleModel.lootBoxData = ie.CastleModel.addModel(new ye.CastleLootboxData(this._configXML));
    ie.CastleModel.eventPackageData = new At.CastleEventPackageData();
    ie.CastleModel.eventPackageData.parseXml(this._configXML);
    ie.CastleModel.rewardData = new yi.CastleRewardData(this._configXML);
    ie.CastleModel.inviteFriendsData = ie.CastleModel.addModel(new ht.CastleInviteFriendsData(this._configXML));
    ie.CastleModel.partPayPricesData = new mi.CastlePartpaypriceData(this._configXML);
    ie.CastleModel.decoShop = new vt.CastleDecoShop();
    ie.CastleModel.defenceData = new St.CastleDefenceData();
    ie.CastleModel.titleData = new Jt.CastleTitleData(this._configXML);
    ie.CastleModel.primeDayData = new De.CastlePrimeDayData(this._configXML);
    ie.CastleModel.shoppingCartPrimeDayData = new Se.CastleShoppingCartPrimeDayData(this._configXML);
    ie.CastleModel.globalEffectData = ie.CastleModel.addModel(new Ri.GlobalEffectData(this._configXML));
    ie.CastleModel.specialEventData = ie.CastleModel.addModel(new zt.CastleSpecialEventData(this._configXML));
    ie.CastleModel.prebuiltCastleData = ie.CastleModel.addModel(new fi.PrebuiltCastleData(this._configXML));
    ie.CastleModel.kingdomData = new Mt.CastleKingdomData(this._configXML);
    ie.CastleModel.militaryData = ie.CastleModel.addModel(new Bt.CastleMilitaryData());
    ie.CastleModel.taxData = new Pe.CastleTaxData();
    ie.CastleModel.decoStorage = ie.CastleModel.addModel(new ui.DecoStorageData());
    ie.CastleModel.subscriptionData = ie.CastleModel.addModel(new et.SubscriptionData(this._configXML));
    ie.CastleModel.fusionForgeData = ie.CastleModel.addModel(new hi.FusionForgeData(this._configXML));
    ie.CastleModel.armyData = ie.CastleModel.addModel(new yt.CastleArmyData());
    ie.CastleModel.attackData = new bt.CastleAttackData();
    ie.CastleModel.otherPlayerData = ie.CastleModel.addModel(new Nt.CastleOtherPlayerData());
    ie.CastleModel.messageData = ie.CastleModel.addModel(new wt.CastleMessageData(this._configXML));
    ie.CastleModel.boostData = ie.CastleModel.addModel(new Ut.CastlePremiumBoostData(this._configXML));
    ie.CastleModel.questData = ie.CastleModel.addModel(new Ht.CastleQuestData(this._configXML));
    ie.CastleModel.dailyQuestData = ie.CastleModel.addModel(new Tt.CastleDailyQuestData(this._configXML));
    ie.CastleModel.spyData = new qt.CastleSpyData();
    ie.CastleModel.allianceData = ie.CastleModel.addModel(new Ot.CastleAllianceData(this._configXML));
    ie.CastleModel.allianceHelpRequestData = ie.CastleModel.addModel(new _t.AllianceHelpRequestData(this._configXML));
    ie.CastleModel.globalOfferData = ie.CastleModel.addModel(new Lt.CastleGlobalOfferData());
    ie.CastleModel.privateOfferData = ie.CastleModel.addModel(new gt.CastlePrivateOfferData());
    ie.CastleModel.skipDiscountData = new Ae.CastleSkipDiscountData();
    ie.CastleModel.eventDifficultyScaling = new Xi.CastleEventDifficultyScalingData(this._configXML);
    ie.CastleModel.userCastleListDetailed = new ti.CastleUserCastleListDetailed();
    ie.CastleModel.supportDefenceData = new Xt.CastleSupportDefenceData();
    ie.CastleModel.tradeData = new Zt.CastleTradeData();
    ie.CastleModel.premiumData = ie.CastleModel.addModel(new Gt.CastlePremiumMarketCollectionData());
    ie.CastleModel.premiumData.init(this._configXML);
    ie.CastleModel.treasureMapData = ie.CastleModel.addModel(new $t.CastleTreasureMapData(this._configXML));
    ie.CastleModel.allianceFameData = new Et.CastleAllianceFameData(this._configXML);
    ie.CastleModel.costsData = new de.CastleCostsData();
    ie.CastleModel.worldmapCameraData = ie.CastleModel.addModel(new xe.CastleWorldmapCameraData());
    ie.CastleModel.researchData = ie.CastleModel.addModel(new jt.CastleResearchData(this._configXML));
    ie.CastleModel.castleAchievementData = ie.CastleModel.addModel(new mt.CastleAchievementData(this._configXML));
    ie.CastleModel.highscoreData = new fe.CastleHighscoreData(this._configXML);
    ie.CastleModel.loginBonusData = ie.CastleModel.addModel(new Ci.CastleLoginBonusData());
    ie.CastleModel.startUpBonusData = ie.CastleModel.addModel(new ze.CastleStartUpBonusData(this._configXML));
    ie.CastleModel.activityBonusData = ie.CastleModel.addModel(new ne.CastleActivityBonusData(this._configXML));
    ie.CastleModel.judgementData = ie.CastleModel.addModel(new Pt.CastleJudgementData(this._configXML));
    ie.CastleModel.mineData = ie.CastleModel.addModel(new _i.CastleMineData(this._configXML));
    ie.CastleModel.dungeonData = new Ce.CastleDungeonData(this._configXML);
    ie.CastleModel.hunterData = ie.CastleModel.addModel(new gi.CastleHunterData());
    ie.CastleModel.breweryData = ie.CastleModel.addModel(new Yi.CastleBreweryData());
    ie.CastleModel.castleForumData = new ae.CastleAllianceForumData();
    ie.CastleModel.chatData = ie.CastleModel.addModel(new ue.CastleChatData());
    ie.CastleModel.mercenaryData = ie.CastleModel.addModel(new xt.CastleMercenaryData());
    ie.CastleModel.expansionCostsData = new we.ExpansionCostsData(this._configXML);
    ie.CastleModel.resourceCartsData = new Ei.CastleResourceCartsData();
    ie.CastleModel.treasureHuntData = new Ve.CastleTreasureHuntData();
    ie.CastleModel.vipData = ie.CastleModel.addModel(new Ti.CastleVIPData(this._configXML));
    ie.CastleModel.allianceBuffData = new Ct.AllianceBuffData(this._configXML);
    ie.CastleModel.bookmarkData = ie.CastleModel.addModel(new Dt.CastleBookmarkData());
    ie.CastleModel.eilandData = new di.CastleEilandData(this._configXML);
    ie.CastleModel.primeSaleData = new je.CastlePrimeSaleData();
    ie.CastleModel.allianceGiftData = ie.CastleModel.addModel(new pt.CastleAllianceGiftData());
    ie.CastleModel.playerGiftData = new We.PlayerGiftData();
    ie.CastleModel.monumentsData = ie.CastleModel.addModel(new Ft.CastleMonumentData(this._configXML));
    ie.CastleModel.laboratoryData = ie.CastleModel.addModel(new Rt.CastleLaboratoryData(this._configXML));
    ie.CastleModel.permanentCastleData = ie.CastleModel.addModel(new kt.CastlePermanentCastleData());
    ie.CastleModel.sagaMapData = ie.CastleModel.addModel(new Yt.CastleSagaMapData(this._configXML));
    ie.CastleModel.nomadCampData = ie.CastleModel.addModel(new be.CastleNomadCampData(this._configXML));
    ie.CastleModel.tempServerData = ie.CastleModel.addModel(new Qt.CastleTempServerData(this._configXML));
    ie.CastleModel.samuraiCampData = ie.CastleModel.addModel(new Te.CastleSamuraiCampData(this._configXML));
    ie.CastleModel.factionInvasionCampData = ie.CastleModel.addModel(new me.CastleFactionInvasionCampData(this._configXML));
    ie.CastleModel.allianceInvasionCampData = ie.CastleModel.addModel(new se.CastleAllianceInvasionCampData(this._configXML));
    ie.CastleModel.rubyWishingWellData = ie.CastleModel.addModel(new Ie.CastleRubyWishingWellData(this._configXML));
    ie.CastleModel.mightData = ie.CastleModel.addModel(new He.MightData(this._configXML));
    ie.CastleModel.levelUpData = ie.CastleModel.addModel(new Ge.LevelUpData(this._configXML));
    ie.CastleModel.luckyWheelData = new Ii.LuckyWheelData(this._configXML);
    ie.CastleModel.saleDaysLuckyWheelData = new Gi.SaleDaysLuckyWheelData(this._configXML);
    ie.CastleModel.eventAnnouncementData = new Be.EventAnnouncementData(this._configXML);
    ie.CastleModel.tutorialData = ie.CastleModel.addModel(new ei.CastleTutorialData(this._configXML));
    ie.CastleModel.boosterSaleData = ie.CastleModel.addModel(new re.CastleBoosterSaleData());
    ie.CastleModel.buyLevelData = ie.CastleModel.addModel(new ce.CastleBuyLevelData(this._configXML));
    ie.CastleModel.friendListData = ie.CastleModel.addModel(new Fe.CastleFriendListData());
    ie.CastleModel.autoRecruitPriceData = ie.CastleModel.addModel(new Oi.AutoRecruitmentPriceData(this._configXML));
    ie.CastleModel.popoverData = ie.CastleModel.addModel(new Ye.PopoverData());
    ie.CastleModel.rerollCostData = ie.CastleModel.addModel(new Bi.CastleRerollCostData(this._configXML));
    ie.CastleModel.alienRerollData = ie.CastleModel.addModel(new ft.CastleAlienRerollData(this._configXML));
    ie.CastleModel.officerSchoolData = ie.CastleModel.addModel(new Fi.OfficersSchoolData(this._configXML));
    ie.CastleModel.seasonLeagueData = ie.CastleModel.addModel(new Di.SeasonLeagueData(this._configXML));
    ie.CastleModel.fightPresetData = ie.CastleModel.addModel(new pi.FightPresetData(this._configXML));
    ie.CastleModel.collectEventData = new It.CastleCollectorEventData(this._configXML);
    ie.CastleModel.privateResourceVillageData = ie.CastleModel.addModel(new Mi.CastlePrivateResourceVillageData(this._configXML));
    ie.CastleModel.lostAndFoundData = ie.CastleModel.addModel(new wi.CastleLostAndFoundData());
    ie.CastleModel.daimyoCastleXmlData = new li.DaimyoCastleXmlData(this._configXML);
    ie.CastleModel.daimyoTownshipXmlData = new ci.DaimyoTownshipXmlData(this._configXML);
    ie.CastleModel.samuraiDaimyoData = new bi.SamuraiDaimyoData(this._configXML);
    ie.CastleModel.allianceBattlegroundData = ie.CastleModel.addModel(new Ni.CastleAllianceBattleGroundData(this._configXML));
    ie.CastleModel.fortuneTeller = ie.CastleModel.addModel(new Hi.CastleFortuneTellerData(this._configXML));
    ie.CastleModel.buildingDistrictData = ie.CastleModel.addModel(new ji.CastleBuildingDistrictData(this._configXML));
    ie.CastleModel.newsletterData = new Ki.CastleNewsletterData(this._configXML);
    ie.CastleModel.rewardHubData = ie.CastleModel.addModel(new zi.RewardHubData());
    ie.CastleModel.craftingData = ie.CastleModel.addModel(new pe.CastleCraftingData(this._configXML));
    ie.CastleModel.dynamicTopXxmlData = new qi.DynamicTopXxmlData(this._configXML);
    ie.CastleModel.generalsData = ie.CastleModel.addModel(new ke.GeneralsData());
    ie.CastleModel.generalsData.init(this._configXML);
    ie.CastleModel.generalsIntroductionData = ie.CastleModel.addModel(new Ne.GeneralIntroductionData());
    ie.CastleModel.webShopAccountIdData = new Zi.WebShopAccountIdData();
    ie.CastleModel.donationEventData = new ge.CastleDonationEventData(this._configXML);
    ie.CastleModel.gachaData = new Ke.GachaData();
    ie.CastleModel.gachaData.init(this._configXML);
    ie.CastleModel.leaderboardRewardsData = new Oe.CastleLeaderBoardRewardsData(this._configXML);
  };
  CastleGame.prototype.initView = function () {
    Xe.timingMode = Xe.RAF;
    Je.defaultCenterHittestArea = 0;
    this.initAdditionalURLParameter();
    var e = Li.CastleLayoutManager.getInstance();
    this.addChild(e);
    e.initialize(this.preloaderView);
    e.changeQualityLevel(ie.CastleModel.localData.readQuality());
    e.customCursor.lookForLowPerformance = false;
    e.customCursor.useUpdateAfterEvent = false;
    window.showCached = I.CacheHelper.showWhatsCached;
  };
  CastleGame.prototype.initAdditionalURLParameter = function () {
    if (this.env.urlVariables.urlParams.has("ticker")) {
      switch (parseInt(this.env.urlVariables.urlParams.get("ticker"))) {
        case 2:
          Xe.timingMode = Xe.RAF;
          break;
        case 3:
          Xe.timingMode = Xe.RAF_SYNCHED;
          break;
        default:
        case 1:
          Xe.timingMode = Xe.TIMEOUT;
      }
    }
    if (this.env.urlVariables.urlParams.has("fps")) {
      var e = parseInt(this.env.urlVariables.urlParams.get("fps"));
      if (e > 0 && e <= 60) {
        Xe.framerate = e;
      }
    }
  };
  CastleGame.prototype.initController = function () {
    P.debug("+-*------ initController called in CastleGame");
    T.CommandController.instance.executeCommand(c.BasicController.COMMAND_INITALIZE_CONTROLLER);
    T.CommandController.instance.executeCommand(dt.IngameClientCommands.SET_ADD_PIPES_ON_END_OF_TEXT);
    T.CommandController.instance.executeCommand(dt.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
    this.controller.addEventListener(Z.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutstate));
  };
  CastleGame.prototype.onChangeLayoutstate = function (e) {
    this.modelObserverManager.unsubscribeAllObserver();
    switch (this.layoutManager.currentState) {
      case h.BasicLayoutManager.STATE_CONNECT:
      case h.BasicLayoutManager.STATE_LOAD_ITEMS:
        break;
      case h.BasicLayoutManager.STATE_STARTSCREEN:
        if (this.preloaderView) {
          this.preloaderView.stopProgressBar();
        }
        break;
      case Li.CastleLayoutManager.STATE_WORLDMAP:
        this.subscribeCommonModels();
        this.modelObserverManager.subscribe(ie.CastleModel.worldmapData);
        break;
      case Li.CastleLayoutManager.STATE_ISO:
        if (this.preloaderView) {
          this.preloaderView.stopProgressBar();
        }
        this.subscribeCommonModels();
        if (ie.CastleModel.areaData && ie.CastleModel.areaData.activeConstructionList) {
          this.modelObserverManager.subscribe(ie.CastleModel.areaData.activeConstructionList);
        }
        this.modelObserverManager.subscribe(ie.CastleModel.militaryData);
        this.modelObserverManager.subscribe(ie.CastleModel.mineData);
        break;
      case Li.CastleLayoutManager.STATE_SEASON_WORLDMAP:
      case Li.CastleLayoutManager.STATE_WORLDMAP_RELOCATION:
      case Li.CastleLayoutManager.STATE_KINGDOMMAP:
        this.subscribeCommonModels();
    }
  };
  CastleGame.prototype.subscribeCommonModels = function () {
    this.modelObserverManager.subscribe(ie.CastleModel.timerData);
    this.modelObserverManager.subscribe(ie.CastleModel.armyData);
    this.modelObserverManager.subscribe(ie.CastleModel.userData);
    this.modelObserverManager.subscribe(ie.CastleModel.boostData);
    this.modelObserverManager.subscribe(ie.CastleModel.globalOfferData);
    this.modelObserverManager.subscribe(ie.CastleModel.specialEventData);
    this.modelObserverManager.subscribe(ie.CastleModel.treasureMapData);
    this.modelObserverManager.subscribe(ie.CastleModel.loginBonusData);
    this.modelObserverManager.subscribe(ie.CastleModel.privateOfferData);
    this.modelObserverManager.subscribe(ie.CastleModel.activityBonusData);
    this.modelObserverManager.subscribe(ie.CastleModel.vipData);
    this.modelObserverManager.subscribe(ie.CastleModel.allianceHelpRequestData);
    this.modelObserverManager.subscribe(ie.CastleModel.allianceGiftData);
    this.modelObserverManager.subscribe(ie.CastleModel.lostAndFoundData);
    this.modelObserverManager.subscribe(ie.CastleModel.taxData);
  };
  CastleGame.prototype.onTick = function (e) {
    if (!Xe.paused) {
      var t = this.layoutManager.gamestageNeedsUpdate;
      var i = false;
      if (!!this.layoutManager.gamestage && (!Ai.CastleDialogHandler.getInstance().isDisplayingAnyDialog || !!t)) {
        if (t && !this.layoutManager.gamestage.tickEnabled) {
          this.layoutManager.gamestage.tickEnabled = true;
          i = true;
        } else if (!Ai.CastleDialogHandler.getInstance().isDisplayingAnyDialog && !this.layoutManager.gamestage.tickEnabled) {
          this.layoutManager.gamestage.tickEnabled = true;
        }
        this.layoutManager.renderGamestage(e);
        if (i) {
          this.layoutManager.gamestage.tickEnabled = false;
        }
      }
      if (window.renderStaticStageOnNextTick) {
        try {
          this.layoutManager.staticStage.update(e);
        } catch (t) {
          console.warn("update function failed! props info: " + JSON.stringify(e) + " " + t);
        }
        window.renderStaticStageOnNextTick = false;
      }
      if (window.renderBgStageOnNextTick && this.layoutManager.bgStage) {
        try {
          this.layoutManager.bgStage.update(e);
        } catch (t) {
          throw new Error("update function failed! props info: " + JSON.stringify(e) + " " + t);
        }
        window.renderBgStageOnNextTick = false;
      }
      if (this.layoutManager.uiStage && this.layoutManager.uiStage.tickEnabled) {
        this.layoutManager.renderUIstage(e);
      }
    }
  };
  Object.defineProperty(CastleGame.prototype, "layoutManager", {
    get: function () {
      return Li.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGame.prototype, "controller", {
    get: function () {
      return ee.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleGame.STAGE_MOUSEOVER_TIME = 20;
  CastleGame.STAGE_BG_MOUSEOVER_TIME = 1;
  CastleGame.HEADER_FONT = "_HeaderFont";
  CastleGame.BODY_FONT = "_BodyFont";
  CastleGame.HEADER_FONT_IE = "HeaderFont";
  CastleGame.BODY_FONT_IE = "BodyFont";
  return CastleGame;
}(u.BasicGame);
exports.CastleGame = Ze;
var $e = require("./4353.js");
var et = require("./4613.js");
var tt = require("./4628.js");
var it = require("./4629.js");
var nt = require("./4630.js");
var ot = require("./4632.js");
var at = require("./4633.js");
var st = require("./5277.js");
var rt = require("./5279.js");
var lt = require("./5280.js");
var ct = require("./5281.js");
var ut = require("./5282.js");
var dt = require("./29.js");
var pt = require("./5283.js");
var ht = require("./434.js");
var gt = require("./5285.js");
var Ct = require("./747.js");
var _t = require("./5341.js");
var mt = require("./811.js");
var ft = require("./5346.js");
var Ot = require("./317.js");
var Et = require("./5348.js");
var yt = require("./5350.js");
var bt = require("./5353.js");
var Dt = require("./945.js");
var It = require("./5360.js");
var Tt = require("./5367.js");
var vt = require("./5370.js");
var St = require("./5371.js");
var At = require("./5372.js");
var Lt = require("./589.js");
var Pt = require("./5374.js");
var Mt = require("./5378.js");
var Rt = require("./5384.js");
var Vt = require("./1106.js");
var xt = require("./775.js");
var wt = require("./5386.js");
var Bt = require("./5561.js");
var Ft = require("./1226.js");
var Nt = require("./5564.js");
var kt = require("./5566.js");
var Ut = require("./402.js");
var Gt = require("./170.js");
var Ht = require("./544.js");
var jt = require("./5570.js");
var Wt = require("./5577.js");
var Yt = require("./5578.js");
var Kt = require("./5580.js");
var zt = require("./5582.js");
var qt = require("./5584.js");
var Xt = require("./5587.js");
var Qt = require("./5589.js");
var Jt = require("./565.js");
var Zt = require("./5597.js");
var $t = require("./5600.js");
var ei = require("./5604.js");
var ti = require("./5606.js");
var ii = require("./284.js");
var ni = require("./56.js");
var oi = require("./5608.js");
var ai = require("./623.js");
var si = require("./5611.js");
var ri = require("./5612.js");
var li = require("./5616.js");
var ci = require("./5617.js");
var ui = require("./5618.js");
var di = require("./5625.js");
var pi = require("./5627.js");
var hi = require("./5633.js");
var gi = require("./688.js");
var Ci = require("./1122.js");
var _i = require("./1534.js");
var mi = require("./5641.js");
var fi = require("./5643.js");
var Oi = require("./5646.js");
var Ei = require("./774.js");
var yi = require("./5648.js");
var bi = require("./5651.js");
var Di = require("./5658.js");
var Ii = require("./474.js");
var Ti = require("./1426.js");
var vi = require("./193.js");
var Si = require("./5671.js");
var Ai = require("./9.js");
var Li = require("./17.js");
var Pi = require("./657.js");
var Mi = require("./5710.js");
var Ri = require("./5712.js");
var Vi = require("./5714.js");
var xi = require("./5733.js");
var wi = require("./5740.js");
var Bi = require("./648.js");
var Fi = require("./5742.js");
var Ni = require("./5746.js");
var ki = require("./5756.js");
var Ui = require("./5758.js");
var Gi = require("./5759.js");
var Hi = require("./5760.js");
var ji = require("./5762.js");
var Wi = require("./5763.js");
var Yi = require("./1024.js");
var Ki = require("./5764.js");
var zi = require("./809.js");
var qi = require("./5766.js");
var Xi = require("./5768.js");
var Qi = require("./5773.js");
var Ji = require("./5775.js");
var Zi = require("./5776.js");
var $i = require("./1298.js");
R.classImplementsInterfaces(Ze, "Container");