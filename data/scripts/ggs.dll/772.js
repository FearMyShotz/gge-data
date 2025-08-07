Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./15.js");
var s = require("./67.js");
var r = require("./166.js");
var o = require("./81.js");
var l = require("./169.js");
var u = require("./115.js");
var c = require("./17.js");
var _ = require("./170.js");
var d = require("./120.js");
var m = require("./23.js");
var h = require("./12.js");
var p = require("./171.js");
var g = require("./173.js");
var E = require("./11.js");
var C = require("./8.js");
var f = require("./364.js");
var T = require("./366.js");
var S = require("./370.js");
var y = require("./374.js");
var I = require("./176.js");
var v = require("./375.js");
var A = require("./376.js");
var O = require("./377.js");
var L = require("./378.js");
var D = require("./379.js");
var b = require("./382.js");
var N = require("./383.js");
var R = require("./384.js");
var P = require("./385.js");
var B = require("./387.js");
var M = require("./388.js");
var F = require("./389.js");
var U = require("./390.js");
var G = require("./391.js");
var k = require("./392.js");
var w = require("./393.js");
var x = require("./394.js");
var W = require("./395.js");
var H = require("./397.js");
var V = require("./43.js");
var j = require("./398.js");
var q = require("./399.js");
var K = require("./102.js");
var Y = require("./400.js");
var z = require("./401.js");
var Z = require("./4.js");
var X = require("./402.js");
var Q = require("./403.js");
var $ = require("./174.js");
var J = require("./408.js");
var ee = require("./409.js");
var te = require("./18.js");
var ne = require("./3.js");
var ie = require("./410.js");
var ae = require("./5.js");
var se = require("./2.js");
var re = require("./172.js");
var oe = require("./56.js");
var le = require("./38.js");
var ue = require("./12.js");
exports.CommandController = ue.CommandController;
var ce = require("./74.js");
exports.GoodgamePartners = ce.GoodgamePartners;
var _e = require("./23.js");
exports.ExternalLog = _e.ExternalLog;
var de = require("./169.js");
exports.CookieLogLOFactory = de.CookieLogLOFactory;
var me = require("./31.js");
exports.GGSCountryController = me.GGSCountryController;
var he = require("./111.js");
exports.CampaignVarsVO = he.CampaignVarsVO;
var pe = require("./67.js");
exports.BulkLoader = pe.BulkLoader;
var ge = createjs.Stage;
var Ee = createjs.TimerEvent;
var Ce = require("./414.js");
var fe = require("./774.js");
var Te = require("./775.js");
var Se = se.getLogger("BasicFrameOne");
var ye = function (e) {
  function BasicFrameOne(t) {
    var n = e.call(this, t) || this;
    n.preloaderUpdateTimer = new ne.Timer(100);
    Se.debug("BasicFrameOne constructor");
    n.worldAssignemnt = window.ggs.worldAssignment;
    Z.BasicModel.instanceProxy.setWorldAssignementFacade(n.worldAssignemnt.facade);
    Se.debug(n.worldAssignemnt);
    n.onAddedToStage();
    d.PerformanceMonitoringService.getInstance().init(_.PerformanceMonitoringEnvTypeEnum.Web, n);
    return n;
  }
  i.__extends(BasicFrameOne, e);
  BasicFrameOne.prototype.initLocalizationModule = function () {
    this.localizationModule = new te.LocalizationModule(new te.GlobalizeTextProcessor(V.PathProvider.instance.cldrConfigURL, false), true);
    this.localizationModule.initialize(new te.LanguageVO("DE", "de", this.env.neverUseAbbreviations, this.env.abbreviationThreshold, this.env.fractionalDigits, this.env.leadingZero, this.env.trailingZeros), {}, null, this.env.isTest || this.env.isLocal);
    this.localizationModule.localizationService.localizeReplacements = this.env.localizeReplacements;
    return this.localizationModule.setLanguageAsync(new te.LanguageVO(this.worldAssignemnt.facade.currentCountry.ggsCountryCode, this.worldAssignemnt.facade.currentCountry.ggsLanguageCode, this.env.neverUseAbbreviations, this.env.abbreviationThreshold, this.env.fractionalDigits, this.env.leadingZero, this.env.trailingZeros), {});
  };
  BasicFrameOne.prototype.onAddedToStage = function () {
    var e = this;
    this.stage.enableMouseOver(12);
    this.stage.snapToPixelEnabled = true;
    this.registerCommands();
    h.CommandController.instance.executeCommand(C.BasicController.COMMAND_INIT_LOGGER, this.stage);
    this.isAddedToStage();
    this.initLocalizationModule().then(function () {
      e.initTextRendering();
      e.setVersionInfo();
      oe.ClientFunnelTrackingController.getInstance().trackState(le.ClientFunnelGameStates.FIRST_GAME_SCREEN);
      var t = ne.Capabilities.os;
      u.SupportUtil.initForWeb(e.env.referrer, e.env.gameId, e.env.sessionId, e.env.networkId, ne.Capabilities.version, t);
      Z.BasicModel.basicLoaderData = new Q.BasicLoaderData();
      Z.BasicModel.basicLoaderData.appLoader.loadingQueueElementStarted.add(e.bindFunction(e.handleNewLoadingElementStarted));
      Z.BasicModel.basicLoaderData.appLoader.loadingQueueElementFinished.add(e.bindFunction(e.handleLoadingElementFinished));
      Y.BasicFacebookConnectCommand.gameID = e.env.gameId;
      e.isAddedToStageDone();
      e.loadVersion();
    }).catch(function (e) {
      Se.debug("Error in Localization loader: " + e);
    });
  };
  BasicFrameOne.prototype.onFlushFailedAfterPending = function () {
    m.ExternalLog.logger.log(new l.CookieLogLOFactory(l.CookieLogLOFactory.COOKIE_PENDING_FAILED));
  };
  BasicFrameOne.prototype.registerCommands = function () {
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_CONNECT_CLIENT, ie.BasicConnectClientCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_INIT_LOGGER, this.initLoggerCommandClass);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_TRACK_LOGIN, D.BasicSendClientLoginTrackingCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_RELOAD_NETWORK, v.BasicReloadNetworkCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_UPDATE_NETWORK, I.BasicNetworkUpdateCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_IDENTITY_MANAGEMENT, S.BasicIdentityManagementCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, T.BasicHandleIdentityManagementErrorCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_CHECK_AGE_GATE_ACTIVITY, R.BasicCheckAgeGateActivityCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_VALIDATE_AGE, P.BasicValidateAgeCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_TRACK_REGISTRATION_DATA, b.BasicTrackRegistrationDataCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_TRACK_PROFILING, x.BasicProfilingTrackingCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_TRACK_WORLD_ASSIGNMENT, H.BasicWorldAssignmentTrackingCommand, null, true);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_TRACK_CONNECTION_TRACKING_EVENT, M.BasicConnectionTrackingCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_TRACK_GAME_PAYMENT_SHOP_CLICK_EVENT, w.BasicPaymentShopClickTrackingCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_TRACK_DESKTOP_DEVICE_INFORMATION_EVENT, F.BasicDesktopDeviceInformationTrackingCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_TRACK_BROWSER_STATE_EVENT, Ce.BrowserStateFullscreenTrackingCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_VERIFY_TRACKING, W.BasicVerifyTrackingCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_TRACK_INVITATION, k.BasicInvitationTrackingCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_TRACK_FACEBOOK_CONNECTION, U.BasicFacebookConnectionTrackingCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_TRACK_FACEBOOK_USERDATA, G.BasicFacebookUserDataTrackingCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_TRACK_FACEBOOK_EMAIL, fe.BasicFacebookUserEmailTrackingCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_CHANGE_LANGUAGE, f.BasicChangeLanguageCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_REPORT_SURVEY, O.BasicReportSurveyCommand);
    h.CommandController.instance.registerCommand(C.BasicController.REQUEST_SOCIAL_LOGIN_KEYS, L.BasicRequestSocialLoginKeysCommand);
    h.CommandController.instance.registerCommand(C.BasicController.CHOOSE_LOGIN_METHOD, N.ChooseLoginMethodCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_INIT_ZONE_CAPACITY, y.BasicInitZoneCapacityCommand);
    h.CommandController.instance.registerCommand(C.BasicController.GTM_CALL_GGS_TRACK_EVENT, B.GGSTrackEventCommand);
    h.CommandController.instance.registerCommand(C.BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, Te.GamesightTrackEventCommand);
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, A.BasicReloadPageWithZoneIdCommand);
    this.initPreClientCommands();
  };
  BasicFrameOne.prototype.initPreClientCommands = function () {
    h.CommandController.instance.registerCommand(C.BasicController.COMMAND_FACEBOOK_INITIALIZE, z.BasicInitializeFacebookConnectCommand);
  };
  BasicFrameOne.prototype.setVersionInfo = function () {
    var e = p.VersionInformation.versionInstance;
    this.env.setVersionInformation(e);
  };
  BasicFrameOne.prototype.initTextRendering = function () {
    Z.BasicModel.languageData = new X.BasicLanguageData(p.VersionInformation.versionInstance, V.PathProvider.instance, this.localizationModule);
    var e = o.GoodgameTextFieldManager.getInstance();
    e.languageData = Z.BasicModel.languageData;
    this.initTextFieldBehaviours();
    this.initTextFieldFactory(e);
  };
  BasicFrameOne.prototype.initTextFieldBehaviours = function () {
    var e = o.GoodgameTextFieldManager.getInstance();
    e.mouseOverBehaviour = new ee.BasicGGSTextFieldMouseOverBehaviour();
    e.mouseOutBehaviour = new J.BasicGGSTextFieldMouseOutBehaviour();
  };
  BasicFrameOne.prototype.initTextFieldFactory = function (e) {
    e.textFieldFactory = new r.GoodgameAdvancedTextFieldFactory();
  };
  BasicFrameOne.prototype.isAddedToStage = function () {};
  BasicFrameOne.prototype.isAddedToStageDone = function () {};
  BasicFrameOne.prototype.loadVersion = function () {
    this.env.fallBackCDN = true;
    g.ConfigFilesVersionsModel.instance.loadVersionJson(V.PathProvider.instance.versionURL).then(this.bindFunction(this.onVersionsInitialized)).catch(function (e) {
      return Se.warn("loadingVersionJSON failed " + e);
    });
  };
  BasicFrameOne.prototype.onVersionsInitialized = function () {
    this.env.fallBackCDN = false;
    this.loadItemVersionXML();
  };
  BasicFrameOne.prototype.loadItemVersionXML = function () {
    if (this.env.useItemXML) {
      Z.BasicModel.basicLoaderData.appLoader.addXMLLoader(E.BasicConstants.ITEM_XML_VERSION, V.PathProvider.instance.itemsVersionURL, ne.URLLoaderDataFormat.TEXT, this.bindFunction(this.onVersionPropertiesLoaded));
    } else {
      this.onVersionPropertiesLoaded();
    }
  };
  BasicFrameOne.prototype.onVersionPropertiesLoaded = function () {
    this.createView();
    if (this.env.useItemXML) {
      var e = Z.BasicModel.basicLoaderData.appLoader.getLoaderData(E.BasicConstants.ITEM_XML_VERSION).toString();
      re.BasicVersions.itemXMLVersion = e.substr(e.indexOf("=") + 1).trim();
    }
    this.onLanguagePropertiesLoaded();
  };
  BasicFrameOne.prototype.onViewLoaded = function () {
    this.preloaderView.showProgressBar();
    this.addChildAt(this.preloaderView.disp, 0);
    this.preloaderUpdateTimer.addEventListener(Ee.TIMER, this.bindFunction(this.onUpdatePreloaderView));
    this.preloaderUpdateTimer.start();
    this.preloaderView.show();
    this.preloaderView.showVersion();
    this.preloaderView.updatePosition();
    this.preloaderView.setProgressbarUpdateMethod(true);
    this.showFirstScreen();
    if (this.env.useItemXML) {
      this.loadXMLs();
    } else {
      this.loadAssets();
    }
  };
  BasicFrameOne.prototype.onLanguagePropertiesLoaded = function () {
    this.loadLanguage();
  };
  BasicFrameOne.prototype.loadLanguage = function () {
    h.CommandController.instance.executeCommand(C.BasicController.COMMAND_CHECK_AGE_GATE_ACTIVITY, this.worldAssignemnt.facade.currentCountry);
    Z.BasicModel.languageData.addEventListener(K.LanguageDataEvent.XML_LOAD_COMPLETE, this.bindFunction(this.onLanguageXMLComplete));
    this.env.currentCountryLanguageCode = this.worldAssignemnt.facade.currentCountry.ggsLanguageCode;
    this.env.currentCountryLanguageVersion = g.ConfigFilesVersionsModel.instance.languageVersion(this.env.currentCountryLanguageCode);
    Z.BasicModel.languageData.loadLanguage(undefined, this.env.currentCountryLanguageCode);
    oe.ClientFunnelTrackingController.getInstance().trackState(le.ClientFunnelGameStates.LANG_XML_START);
  };
  BasicFrameOne.prototype.onLanguageXMLComplete = function (e) {
    oe.ClientFunnelTrackingController.getInstance().trackState(le.ClientFunnelGameStates.LANG_XML_END);
    Z.BasicModel.languageData.removeEventListener(K.LanguageDataEvent.XML_LOAD_COMPLETE, this.bindFunction(this.onLanguageXMLComplete));
    $.BasicLanguageFontManager.getInstance().addEventListener(K.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.onFontsLoaded));
    $.BasicLanguageFontManager.getInstance().loadFontsByLanguage();
  };
  BasicFrameOne.prototype.onFontsLoaded = function (e) {
    Se.debug("onFontsLoaded ", "::", e);
    $.BasicLanguageFontManager.getInstance().removeEventListener(K.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.onFontsLoaded));
    Se.debug("useLegacyFontManagement -> Update all GoodgameTextFields");
    o.GoodgameTextFieldManager.getInstance().updateTextInAllTextFields();
  };
  BasicFrameOne.prototype.showFirstScreen = function () {};
  BasicFrameOne.prototype.initFirstVisitScreen = function (e) {
    this.firstVisitSreen = e;
    this.firstVisitSreen.addEventListener(q.BasicFirstVisitEvent.AVATARCREATION_FINISHED, this.bindFunction(this.onFirstVisitAvatarCreationFinished));
    this.addChild(this.firstVisitSreen.disp);
    this.setChildIndex(this.preloaderView.disp, 0);
    this.preloaderView.hideProgressBar();
    this.additionalFirstVisitScreenInitalization(e);
  };
  BasicFrameOne.prototype.additionalFirstVisitScreenInitalization = function (e) {};
  BasicFrameOne.prototype.onFirstVisitAvatarCreationFinished = function (e) {
    this.removeChild(this.firstVisitSreen.disp);
    this.firstVisitSreen.removeEventListener(q.BasicFirstVisitEvent.AVATARCREATION_FINISHED, this.bindFunction(this.onFirstVisitAvatarCreationFinished));
    this.firstVisitSreen = null;
    this.preloaderView.showProgressBar();
  };
  BasicFrameOne.prototype.loadingQueueAppLoaderFinished = function (e = "") {
    this.preloaderUpdateTimer.stop();
    this.preloaderUpdateTimer.removeEventListener(Ee.TIMER, this.bindFunction(this.onUpdatePreloaderView));
    if (this.preloaderView) {
      this.preloaderView.setProgressbarUpdateMethod(false);
    }
    oe.ClientFunnelTrackingController.getInstance().trackState(le.ClientFunnelGameStates.GAME_SWF_LOADED);
    this.checkForFirstVisitScreen();
  };
  BasicFrameOne.prototype.checkForFirstVisitScreen = function () {
    this.firstVisitSreen;
  };
  BasicFrameOne.prototype.isCookieEmpty = function (e) {
    for (var t in e.data) {
      return false;
    }
    return true;
  };
  BasicFrameOne.prototype.createView = function () {};
  Object.defineProperty(BasicFrameOne.prototype, "mainGameClassName", {
    get: function () {
      return "com.goodgamestudios.basic.BasicGame";
    },
    enumerable: true,
    configurable: true
  });
  BasicFrameOne.prototype.onBulkLoaderProgress = function (e) {
    this.preloaderView.updateLoadingProgress(e.loaded / e.total * 100);
  };
  BasicFrameOne.prototype.handleNewLoadingElementStarted = function (e, t) {
    if (this.preloaderView && this.preloaderView.disp && this.preloaderView.disp.visible) {
      var n = undefined;
      if (e == Z.BasicModel.basicLoaderData.appLoader.loaderID) {
        n = Z.BasicModel.basicLoaderData.appLoader.getLoaderObject(t);
      }
      if (n) {
        if (n.totalBytes > E.BasicConstants.MAX_FILESIZE_REALTIMELOADING) {
          this.preloaderUpdateTimer.stop();
          this.preloaderUpdateTimer.removeEventListener(Ee.TIMER, this.bindFunction(this.onUpdatePreloaderView));
          this.preloaderView.startProgressBar();
          this.preloaderView.setProgressbarUpdateMethod(false);
        } else {
          this.preloaderView.stopProgressBar();
          if (!this.preloaderUpdateTimer.running) {
            this.preloaderUpdateTimer.addEventListener(Ee.TIMER, this.bindFunction(this.onUpdatePreloaderView));
            this.preloaderUpdateTimer.start();
          }
          this.preloaderView.setProgressbarUpdateMethod(true);
          this.preloaderView.updateLoadingText(t);
        }
      }
    }
  };
  BasicFrameOne.prototype.onUpdatePreloaderView = function (e) {
    if (Z.BasicModel.basicLoaderData.appLoader.isLoading || Z.BasicModel.basicLoaderData.assetLoader.isRunning) {
      var t = 0;
      if (Z.BasicModel.basicLoaderData.appLoader.isLoading) {
        t = Z.BasicModel.basicLoaderData.appLoader.getProgressOfActualSubloader();
      }
      if (this.preloaderView && this.preloaderView.disp && this.preloaderView.disp.visible && !this.preloaderView.progressBarEnabled) {
        this.preloaderView.updateLoadingProgress(Number(t * 100));
      }
    }
  };
  BasicFrameOne.prototype.handleLoadingElementFinished = function (e, t) {
    if (this.preloaderView) {
      this.preloaderView.updateLoadingProgress(100);
    }
  };
  BasicFrameOne.prototype.goToSecondFrame = function (e = null) {
    var t = document.getElementById("loading");
    if (t) {
      t.remove();
    }
    document.getElementsByTagName("body")[0].style.backgroundImage = "none";
    var n = this.getMainGameClass();
    if (n) {
      oe.ClientFunnelTrackingController.getInstance().trackState(le.ClientFunnelGameStates.GAME_SWF_LOADED);
      var i = c.TrackingCache.getInstance().getEvent(a.TrackingEventIds.CONNECTION);
      Z.BasicModel.basicLoaderData.downloadRateFrameOne = Z.BasicModel.basicLoaderData.appLoader.calculateDataRate();
      if (i != null) {
        i.downloadRate = Z.BasicModel.basicLoaderData.downloadRateFrameOne;
      } else {
        Se.error("cannot retrive ConnectionTrackingEvent");
      }
      var s = new n(this.preloaderView);
      this.addChild(s);
      s.onAddedToStage();
    }
  };
  BasicFrameOne.prototype.getMainGameClass = function () {
    return null;
  };
  BasicFrameOne.prototype.loadXMLs = function () {
    oe.ClientFunnelTrackingController.getInstance().trackState(le.ClientFunnelGameStates.ITEM_XML_START);
    Z.BasicModel.basicLoaderData.appLoader.addXMLLoader(E.BasicConstants.ITEM_XML_LOADER, V.PathProvider.instance.itemsXMLURL, ne.URLLoaderDataFormat.TEXT, this.bindFunction(this.itemXMLComplete));
  };
  BasicFrameOne.prototype.itemXMLComplete = function () {
    oe.ClientFunnelTrackingController.getInstance().trackState(le.ClientFunnelGameStates.ITEM_XML_END);
    this.goToSecondFrame();
  };
  BasicFrameOne.prototype.loadAssets = function () {
    Z.BasicModel.basicLoaderData.assetLoader.addEventListener(s.BulkLoader.COMPLETE, this.bindFunction(this.handleAssetLoaderComplete));
    oe.ClientFunnelTrackingController.getInstance().trackState(le.ClientFunnelGameStates.ASSETS_START);
    this.loadAdditionalAssets();
    for (var e = 1; e <= this.env.numOfItemLibs; e++) {
      Z.BasicModel.basicLoaderData.assetLoader.add(V.PathProvider.instance.getItemSWFURL(e), {
        id: "itemLib" + e
      });
    }
    Z.BasicModel.basicLoaderData.assetLoader.start();
  };
  BasicFrameOne.prototype.handleAssetLoaderComplete = function (e) {
    Z.BasicModel.basicLoaderData.assetLoader.removeEventListener(s.BulkLoader.COMPLETE, this.bindFunction(this.handleAssetLoaderComplete));
    Z.BasicModel.basicLoaderData.assetLoader.removeEventListener(s.BulkLoader.PROGRESS, this.bindFunction(this.onBulkLoaderProgress));
    oe.ClientFunnelTrackingController.getInstance().trackState(le.ClientFunnelGameStates.ASSETS_END);
    Z.BasicModel.basicLoaderData.dispatchEvent(new j.BasicAssetsEvent(j.BasicAssetsEvent.ASSETS_COMPLETE));
    if (this.preloaderView) {
      this.preloaderView.setProgressbarUpdateMethod(false);
    }
  };
  BasicFrameOne.prototype.loadAdditionalAssets = function () {};
  BasicFrameOne.prototype.onExitFrame = function (e) {};
  Object.defineProperty(BasicFrameOne.prototype, "env", {
    get: function () {
      return ae.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicFrameOne.VERSION = "$Id$";
  BasicFrameOne.NAME = "BasicFrameOne";
  return BasicFrameOne;
}(ge);
exports.BasicFrameOne = ye;