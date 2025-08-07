Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./3.js");
var _ = require("./3.js");
var m = require("./6.js");
var f = require("./655.js");
var O = require("./218.js");
var E = require("./243.js");
var y = require("./219.js");
var b = require("./261.js");
var D = require("./26.js");
var I = require("./32.js");
var T = require("./1636.js");
var v = require("./183.js");
var S = require("./53.js");
var A = require("./44.js");
var L = require("./13.js");
var P = require("./4.js");
var M = require("./24.js");
var R = require("./279.js");
var V = require("./280.js");
var x = require("./163.js");
var w = require("./276.js");
var B = require("./349.js");
var F = require("./59.js");
var N = require("./8.js");
var k = require("./518.js");
var U = require("./11.js");
var G = createjs.Point;
var H = createjs.Rectangle;
var j = function (e) {
  function CastleQuestDialog() {
    var t = this;
    t.currentCategory = -1;
    t.clearSelected = false;
    t.dclArrived = true;
    t.tmpArrived = true;
    t.resourceIndex = 0;
    t.resourceStorageComponents = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleQuestDialog.NAME) || this;
  }
  n.__extends(CastleQuestDialog, e);
  CastleQuestDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new _.TextVO(L.TextHelper.toUpperCaseLocaSafe(C.Localize.text("dialog_questbook_header"))));
    this.initTabs();
    this.initQuestLists();
    this.questInfoComponent = new X.QuestInfoComponent(this.dialogDisp.mc_questInfo);
    this.questMapComponent = new $.QuestMapComponent(this.dialogDisp.mc_questMap);
    N.ButtonHelper.initButton(this.dialogDisp.btn_close, -1, ie.ClickFeedbackButton);
    N.ButtonHelper.initButton(this.dialogDisp.btn_help, -1, ie.ClickFeedbackButton);
    N.ButtonHelper.initBasicButtons([this.dialogDisp.btn_left, this.dialogDisp.btn_right]);
  };
  CastleQuestDialog.prototype.initQuestLists = function () {
    var e = new R.AccordionComponentProperties();
    e.scrollStepPixels = 48;
    e.scrollStrategy = F.DynamicSizeScrollStrategyVertical;
    e.disableButtons = true;
    e.onlyOneActiveItem = false;
    this.kingdomList = new q.DynamicSliderAccordionComponent(this.dialogDisp.quests_kingdom, e);
    this.eventList = new q.DynamicSliderAccordionComponent(this.dialogDisp.quests_events, e);
    this.campaignList = new z.CampaignQuestListComponent(this.dialogDisp.quests_campaign, e);
    var t = new R.AccordionComponentProperties();
    t.scrollStepPixels = 48;
    t.scrollStrategy = F.DynamicSizeScrollStrategyVertical;
    t.disableButtons = true;
    this.epicList = new q.DynamicSliderAccordionComponent(this.dialogDisp.quests_epic, t);
    this.kingdomList.disp.visible = false;
    this.eventList.disp.visible = false;
    this.epicList.disp.visible = false;
    this.campaignList.disp.visible = false;
  };
  CastleQuestDialog.prototype.initTabs = function () {
    var e = [];
    this.tabLayoutables = [];
    this.tabLayoutStrategy = new w.SimpleLayoutStrategyVertical();
    for (var t = 0; t < CastleQuestDialog.AMOUNT_TABS; t++) {
      var i = this.dialogDisp["tab_" + t];
      N.ButtonHelper.initTwoStateButton(i);
      e.push(N.ButtonHelper.getBasicButton(i));
      i.mouseChildren = false;
      i.toolTipText = this.getCategoryTooltip(t);
      this.tabLayoutables[t] = new B.MovieClipLayoutable(i);
    }
    this.tabGroup = new o.BasicButtonGroup(e);
  };
  CastleQuestDialog.prototype.initKingdomTabButtons = function () {
    for (var e = 0; e < 4; e++) {
      var t = this.dialogDisp["tab_" + e];
      if (t.mc_icon0) {
        k.KingdomCrestsAndSymbolsHelper.addSymbolToMC(t.mc_icon0, t.mc_bg0, this.mapCategoryToKingdomID(e), new G(40, 40));
      }
      if (t.mc_icon1) {
        k.KingdomCrestsAndSymbolsHelper.addSymbolToMC(t.mc_icon1, t.mc_bg1, this.mapCategoryToKingdomID(e), new G(40, 40));
      }
    }
  };
  CastleQuestDialog.prototype.getCategoryTooltip = function (e) {
    switch (e) {
      case K.CastleQuestData.CATEGORY_GREEN:
        return P.CastleModel.kingdomData.getKingdomVOByID(u.WorldClassic.KINGDOM_ID).kingdomNameString;
      case K.CastleQuestData.CATEGORY_ICE:
        return P.CastleModel.kingdomData.getKingdomVOByID(c.WorldIce.KINGDOM_ID).kingdomNameString;
      case K.CastleQuestData.CATEGORY_DESSERT:
        return P.CastleModel.kingdomData.getKingdomVOByID(g.WorldDessert.KINGDOM_ID).kingdomNameString;
      case K.CastleQuestData.CATEGORY_VOLCANO:
        return P.CastleModel.kingdomData.getKingdomVOByID(h.WorldVolcano.KINGDOM_ID).kingdomNameString;
      case K.CastleQuestData.CATEGORY_EVENTS:
        return C.Localize.text("dialog_questbook_categoryEvents");
      case K.CastleQuestData.CATEGORY_CAMPAIGN:
        return C.Localize.text("dialog_questbook_categoryTimeLimitedCampaign");
      case K.CastleQuestData.CATEGORY_EPIC:
        return C.Localize.text("dialog_questbook_categoryChain");
    }
    return "";
  };
  CastleQuestDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dclArrived = false;
    this.selectStartCategory();
    this.updateTabs();
    this.controller.addEventListener(E.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onIslandReset));
    P.CastleModel.questData.addEventListener(b.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onGetQuestList));
    P.CastleModel.questData.addEventListener(b.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onGetQuestList));
    P.CastleModel.specialEventData.addEventListener(D.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    this.controller.addEventListener(T.TimeLimitedCampaignUpdateEvent.CAMPAIGN_UPDATED, this.bindFunction(this.onCampaignUpdated));
    this.controller.addEventListener(y.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListUpdated));
    this.getNewDetailedCastleList();
    this.controller.addEventListener(I.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onGclArrived));
    if (P.CastleModel.specialEventData.activeSeasonVO) {
      this.tmpArrived = false;
      P.CastleModel.smartfoxClient.sendCommandVO(new f.C2STreasureMapsVO());
      P.CastleModel.treasureMapData.addEventListener(v.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapsUpdated));
    }
  };
  CastleQuestDialog.prototype.onGclArrived = function (e) {
    this.getNewDetailedCastleList();
  };
  CastleQuestDialog.prototype.getNewDetailedCastleList = function () {
    this.dclArrived = false;
    P.CastleModel.smartfoxClient.sendCommandVO(new O.C2SGetDetailedCastleListVO());
  };
  CastleQuestDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this.activeList) {
      this.activeList.hide();
    }
    this.currentCategory = -1;
    this.questInfoComponent.hide();
    this.questMapComponent.hide();
    this.controller.removeEventListener(E.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onIslandReset));
    P.CastleModel.questData.removeEventListener(b.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onGetQuestList));
    P.CastleModel.questData.removeEventListener(b.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onGetQuestList));
    P.CastleModel.specialEventData.removeEventListener(D.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    this.controller.removeEventListener(T.TimeLimitedCampaignUpdateEvent.CAMPAIGN_UPDATED, this.bindFunction(this.onCampaignUpdated));
    this.controller.removeEventListener(y.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListUpdated));
    this.controller.removeEventListener(I.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onGclArrived));
    P.CastleModel.treasureMapData.removeEventListener(v.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapsUpdated));
    this.dclArrived = true;
    this.tmpArrived = true;
  };
  CastleQuestDialog.prototype.selectStartCategory = function () {
    var e = 0;
    var t = 0;
    if (this.dialogProperties.preselectQuest && P.CastleModel.questData.getActiveQuestByID(this.dialogProperties.preselectQuest.questID)) {
      t = m.int(this.dialogProperties.preselectQuest.questCategory);
    } else {
      e = m.int(P.CastleModel.kingdomData.activeKingdomID);
      switch (P.CastleModel.kingdomData.activeKingdomID) {
        case c.WorldIce.KINGDOM_ID:
          t = m.int(K.CastleQuestData.CATEGORY_ICE);
          break;
        case g.WorldDessert.KINGDOM_ID:
          t = m.int(K.CastleQuestData.CATEGORY_DESSERT);
          break;
        default:
          t = e;
      }
      if (this.layoutManager.isInTreasureEvent || e == l.WorldIsland.KINGDOM_ID || e == d.FactionConst.KINGDOM_ID) {
        t = P.CastleModel.questData.getQuestListByCategory(K.CastleQuestData.CATEGORY_EVENTS).length > 0 ? m.int(K.CastleQuestData.CATEGORY_EVENTS) : m.int(K.CastleQuestData.CATEGORY_GREEN);
      }
    }
    this.tabGroup.selectButton(this.dialogDisp["tab_" + t].basicButton);
    this.setQuestCategory(t);
  };
  CastleQuestDialog.prototype.updateTabs = function () {
    for (var e = 0; e < CastleQuestDialog.AMOUNT_TABS; e++) {
      var t = this.dialogDisp["tab_" + e];
      var i = false;
      if (e == K.CastleQuestData.CATEGORY_CAMPAIGN) {
        var n = P.CastleModel.specialEventData.getActiveEventByEventId(p.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT);
        i = !!n && n.isActive;
      } else {
        i = P.CastleModel.questData.getQuestListByCategory(e).length > 0;
      }
      if (this.currentCategory == e && !i) {
        this.selectStartCategory();
      }
      t.visible = i;
    }
    this.tabLayoutStrategy.apply(this.tabLayoutables, new H(0, this.tabLayoutables[0].disp.y));
    this.initKingdomTabButtons();
  };
  CastleQuestDialog.prototype.updateResources = function () {
    if (this.dclArrived && this.tmpArrived) {
      var e = m.int(u.WorldClassic.KINGDOM_ID);
      var t = -1;
      if (this.currentCategory <= K.CastleQuestData.CATEGORY_VOLCANO) {
        e = this.mapCategoryToKingdomID(this.currentCategory);
        if (!P.CastleModel.kingdomData.isKingdomUnlocked(e)) {
          e = m.int(u.WorldClassic.KINGDOM_ID);
        }
      } else if (this.currentCategory == K.CastleQuestData.CATEGORY_EVENTS && (this.updateEventList(), this.eventList.items.length > 0 && this.eventList.items[0].questItems.length > 0)) {
        var i = this.eventList.items[0].questItems[0].questVO;
        if (i.mapID > 0) {
          if (P.CastleModel.specialEventData.activeSeasonVO.mapID == i.mapID && !P.CastleModel.specialEventData.activeSeasonVO.isLocked) {
            t = i.mapID;
          }
        } else if (i.triggerKingdomID == l.WorldIsland.KINGDOM_ID || i.triggerKingdomID == d.FactionConst.KINGDOM_ID) {
          e = i.triggerKingdomID;
        }
      }
      if (this.resourceIndex < 0) {
        this.resourceIndex = 0;
      }
      if (this.resourceIndex > this.resourcesToShow().length - 8) {
        this.resourceIndex = this.resourcesToShow().length - 8 - 1;
      }
      for (var n = 0; n < 8; n++) {
        var o = 0;
        var a = 0;
        var s = this.resourcesToShow()[n + this.resourceIndex];
        if (s == Y.CollectableEnum.C1) {
          o = P.CastleModel.currencyData.c1Amount;
        } else if (s == Y.CollectableEnum.C2) {
          o = P.CastleModel.currencyData.c2Amount;
        } else if (t > 0) {
          o = m.int(P.CastleModel.treasureMapData.getTreasureMapByID(t, true).resources.getAmountOrDefaultByType(s));
          a = m.int(P.CastleModel.treasureMapData.getTreasureMapByID(t, true).resourceStorageCapacity.getAmountOrDefaultByType(s));
        } else {
          var r = P.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(e);
          if (r) {
            o = m.int(r.getResource(s));
            a = m.int(r.getMaxStorageSpace(s));
          }
        }
        this.setResource(n, s, o, a);
      }
      N.ButtonHelper.enableButton(this.dialogDisp.btn_left, this.resourceIndex > 0);
      N.ButtonHelper.enableButton(this.dialogDisp.btn_right, this.resourceIndex < this.resourcesToShow().length - 8);
    }
  };
  CastleQuestDialog.prototype.resourcesToShow = function () {
    var e = W.ClientConstCollectable.GROUP_LIST_BASIC_CURRENCY.concat(W.ClientConstCollectable.GROUP_LIST_RESOURCES);
    e.splice(e.indexOf(Y.CollectableEnum.AQUAMARINE), 1);
    return e;
  };
  CastleQuestDialog.prototype.mapCategoryToKingdomID = function (e) {
    switch (e) {
      case K.CastleQuestData.CATEGORY_GREEN:
        return m.int(u.WorldClassic.KINGDOM_ID);
      case K.CastleQuestData.CATEGORY_ICE:
        return m.int(c.WorldIce.KINGDOM_ID);
      case K.CastleQuestData.CATEGORY_DESSERT:
        return m.int(g.WorldDessert.KINGDOM_ID);
      case K.CastleQuestData.CATEGORY_VOLCANO:
        return m.int(h.WorldVolcano.KINGDOM_ID);
    }
    return 0;
  };
  CastleQuestDialog.prototype.setResource = function (e, t, i, n) {
    var o;
    if (n === undefined) {
      n = -1;
    }
    if (this.resourceStorageComponents.length <= e) {
      o = new ee.ResourceComponentWithStorageBar(this.dialogDisp["mc_res_" + e.toString()], t);
      this.resourceStorageComponents[e] = o;
    } else {
      o = this.resourceStorageComponents[e];
    }
    o.resource = t;
    o.setValue(i, n);
    o.disp.doCache();
  };
  CastleQuestDialog.prototype.onTreasureMapsUpdated = function (e) {
    this.tmpArrived = true;
    this.updateResources();
  };
  CastleQuestDialog.prototype.onDetailedCastleListUpdated = function (e) {
    this.dclArrived = true;
    this.updateResources();
  };
  CastleQuestDialog.prototype.onIslandReset = function (e) {
    this.updateQuests();
  };
  CastleQuestDialog.prototype.onSpecialEventRemoved = function (e) {
    this.updateQuests();
  };
  CastleQuestDialog.prototype.onGetQuestList = function (e) {
    this.updateQuests();
  };
  CastleQuestDialog.prototype.onCampaignUpdated = function (e) {
    if (this.currentCategory == K.CastleQuestData.CATEGORY_CAMPAIGN) {
      this.updateQuests();
    }
  };
  CastleQuestDialog.prototype.updateQuests = function () {
    this.updateTabs();
    this.updateByCategory();
  };
  CastleQuestDialog.prototype.onClick = function (t) {
    if (r.currentBrowserInfo.isTouchEvent(t)) {
      e.prototype.onClick.call(this, t);
    }
    if (N.ButtonHelper.isButtonEnabled(t.target)) {
      if (t.target.name && t.target.name.indexOf("tab_") > -1) {
        this.setQuestCategory(this.tabGroup.getSelectedButtonIndex());
      }
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.showHelp();
          break;
        case this.dialogDisp.btn_left:
          this.resourceIndex--;
          this.updateResources();
          break;
        case this.dialogDisp.btn_right:
          this.resourceIndex++;
          this.updateResources();
      }
    }
  };
  CastleQuestDialog.prototype.showHelp = function () {
    var e;
    switch (this.currentCategory) {
      case K.CastleQuestData.CATEGORY_GREEN:
        e = S.ABGHelper.isOnABGServer ? A.SpecialServerHelper.checkTextIDForSkinText("dialog_questbook_help") : "dialog_questbook_help_classic";
        break;
      case K.CastleQuestData.CATEGORY_ICE:
        e = "dialog_questbook_help_ice";
        break;
      case K.CastleQuestData.CATEGORY_DESSERT:
        e = "dialog_questbook_help_desert";
        break;
      case K.CastleQuestData.CATEGORY_VOLCANO:
        e = "dialog_questbook_help_volcano";
        break;
      case K.CastleQuestData.CATEGORY_EVENTS:
        e = "dialog_questbook_help_events";
        break;
      case K.CastleQuestData.CATEGORY_CAMPAIGN:
        e = "dialog_questbook_help_campaign";
        break;
      case K.CastleQuestData.CATEGORY_EPIC:
        e = "dialog_questbook_help_epic";
    }
    U.CastleExternalDialog.dialogHandler.showHelper("", C.Localize.text(e));
  };
  CastleQuestDialog.prototype.setQuestCategory = function (e) {
    if (e != this.currentCategory) {
      if (this.activeList) {
        this.activeList.hide();
      }
      this.questMapComponent.scrollToTop();
      this.questMapComponent.hide();
      this.currentCategory = e;
      this.selectedQuestItem = null;
      this.updateByCategory();
      this.activeList.scrollToTop();
      this.updateResources();
      this.initKingdomTabButtons();
    }
  };
  CastleQuestDialog.prototype.updateByCategory = function () {
    switch (this.currentCategory) {
      case K.CastleQuestData.CATEGORY_GREEN:
      case K.CastleQuestData.CATEGORY_ICE:
      case K.CastleQuestData.CATEGORY_DESSERT:
      case K.CastleQuestData.CATEGORY_VOLCANO:
        this.updateKingdomList();
        break;
      case K.CastleQuestData.CATEGORY_EVENTS:
        this.updateEventList();
        break;
      case K.CastleQuestData.CATEGORY_CAMPAIGN:
        this.updateCampaignList();
        break;
      case K.CastleQuestData.CATEGORY_EPIC:
        this.updateEpicList();
    }
    this.showQuestInfo();
  };
  CastleQuestDialog.prototype.createQuestItem = function (e, t = false) {
    var i = new Z.QuestListItem(e, this.bindFunction(this.onSelectQuest), CastleQuestDialog.questItemProperties, t);
    if (this.selectedQuestItem && this.selectedQuestItem.questVO.questID == e.questID || this.dialogProperties.preselectQuest && this.dialogProperties.preselectQuest.questID == e.questID) {
      this.selectedQuestItem = null;
      i.select(true, true);
      this.clearSelected = false;
      this.dialogProperties.preselectQuest = null;
    }
    return i;
  };
  CastleQuestDialog.prototype.updateKingdomList = function () {
    this.activeList = this.kingdomList;
    if (S.ABGHelper.isOnABGServer) {
      this.kingdomList.disp.mc_kingdom.gotoAndStop(5);
      var e = "QuestBook_ABG_Kingdomteaser_" + S.ABGHelper.skinName + "_" + S.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring;
      s.MovieClipHelper.clearMovieClip(this.kingdomList.disp.mc_kingdom.mc_icon);
      this.kingdomList.disp.mc_kingdom.mc_icon.addChild(new M.CastleGoodgameExternalClip(e, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e), null, 0, false));
    } else {
      this.kingdomList.disp.mc_kingdom.gotoAndStop(this.currentCategory + 1);
    }
    this.kingdomList.hide();
    this.clearSelected = true;
    for (var t = P.CastleModel.questData.getQuestListByCategory(this.currentCategory), i = 0; i < t.length; i++) {
      var n = t[i];
      this.kingdomList.addItem(this.createQuestItem(n, i == 0));
    }
    this.kingdomList.show();
    if (this.clearSelected) {
      this.selectedQuestItem = null;
    }
  };
  CastleQuestDialog.prototype.updateEventList = function () {
    this.activeList = this.eventList;
    this.eventList.hide();
    this.clearSelected = true;
    var e = new Map();
    var t = [];
    var i = P.CastleModel.questData.getQuestListByCategory(K.CastleQuestData.CATEGORY_EVENTS);
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (!e.get(a.eventID)) {
            e.set(a.eventID, new J.QuestListEventItem(this.bindFunction(this.onSelectQuest), CastleQuestDialog.questItemProperties));
            t.push(e.get(a.eventID));
          }
          e.get(a.eventID).addQuestItem(this.createQuestItem(a));
        }
      }
    }
    t.sort(this.bindFunction(this.sortEventsByTime));
    this.eventList.show();
    if (t != null) {
      for (var s = 0, r = t; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined) {
          l.applyLayout();
          this.eventList.addItem(l);
        }
      }
    }
    this.eventList.show();
    if (this.clearSelected) {
      this.selectedQuestItem = null;
    }
  };
  CastleQuestDialog.prototype.sortEventsByTime = function (e, t) {
    return e.getRemainingTime() - t.getRemainingTime();
  };
  CastleQuestDialog.prototype.updateEpicList = function () {
    this.activeList = this.epicList;
    this.epicList.hide();
    this.clearSelected = true;
    P.CastleModel.questData.validateEpicQuests();
    var e = P.CastleModel.questData.getQuestListByCategory(K.CastleQuestData.CATEGORY_EPIC);
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && !n.isCompleted) {
          var o = P.CastleModel.questData.createEpicQuestSeriesByQuest(n);
          var a = new Q.QuestListEpicItem(this.bindFunction(this.onSelectQuest), CastleQuestDialog.questItemProperties);
          if (o != null) {
            for (var s = 0, r = o; s < r.length; s++) {
              var l = r[s];
              if (l !== undefined) {
                a.addQuestItem(this.createQuestItem(l), l == n);
              }
            }
          }
          a.applyLayout();
          this.epicList.addItem(a);
        }
      }
    }
    this.epicList.show();
    this.epicList.onCollapseSignal.add(this.bindFunction(this.onEpicSeriesSelect));
    if (this.epicList.numItems == 1) {
      this.epicList.expandItemAt(0, true, true);
    }
    if (this.clearSelected) {
      this.selectedQuestItem = null;
    }
  };
  CastleQuestDialog.prototype.onEpicSeriesSelect = function (e) {
    if (this.selectedQuestItem) {
      this.selectedQuestItem.select(false, true);
    } else {
      this.showQuestInfo();
    }
  };
  CastleQuestDialog.prototype.updateCampaignList = function () {
    this.activeList = this.campaignList;
    this.campaignList.hide();
    this.clearSelected = true;
    var e = P.CastleModel.specialEventData.getActiveEventByEventId(p.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT).campaignQuests;
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.campaignList.addItem(this.createQuestItem(n, false));
        }
      }
    }
    this.campaignList.show();
    if (this.clearSelected) {
      this.selectedQuestItem = null;
    }
  };
  CastleQuestDialog.prototype.onSelectQuest = function (e, t) {
    if (t) {
      if (this.selectedQuestItem) {
        this.selectedQuestItem.select(false, false);
      }
      this.selectedQuestItem = e;
      this.showQuestInfo();
    } else {
      this.selectedQuestItem = null;
      this.showQuestInfo();
    }
  };
  CastleQuestDialog.prototype.showQuestInfo = function () {
    if (this.selectedQuestItem) {
      this.dialogDisp.mc_questInfo.visible = true;
      this.dialogDisp.mc_noQuestSelected.visible = false;
      this.questInfoComponent.showQuest(this.selectedQuestItem.questVO);
      this.questMapComponent.hide();
    } else {
      this.dialogDisp.mc_questInfo.visible = false;
      this.dialogDisp.mc_noQuestSelected.visible = true;
      if (S.ABGHelper.isOnABGServer) {
        this.dialogDisp.mc_noQuestSelected.gotoAndStop(8);
        var e = "QuestBook_ABG_EmptyQuestbook_Teaser_" + S.ABGHelper.skinName;
        s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_noQuestSelected.mc_teaser);
        this.dialogDisp.mc_noQuestSelected.mc_teaser.addChild(new M.CastleGoodgameExternalClip(e, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e), null, 0, false));
      } else {
        this.dialogDisp.mc_noQuestSelected.gotoAndStop(this.currentCategory + 1);
      }
      if (this.currentCategory == K.CastleQuestData.CATEGORY_EPIC) {
        var t = te.castAs(this.epicList.getLastActivatedItem(), "QuestListEpicItem");
        if (t && t.isExpanded) {
          this.questMapComponent.show(t.questItems);
          this.dialogDisp.mc_noQuestSelected.visible = false;
        } else {
          this.questMapComponent.hide();
          this.dialogDisp.mc_noQuestSelected.visible = true;
        }
      } else if (this.currentCategory == K.CastleQuestData.CATEGORY_CAMPAIGN) {
        this.questMapComponent.show(this.campaignList.items);
      }
    }
  };
  Object.defineProperty(CastleQuestDialog.prototype, "tutorialRecommendedQuest", {
    get: function () {
      if (this.activeList == this.kingdomList) {
        return this.kingdomList.items[0];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestDialog.__initialize_static_members = function () {
    CastleQuestDialog.questItemProperties = new V.GenericCollapsibleItemProperties(new x.LayoutMargin(0, 6, 0, 0), true, 0.2, 0.2);
  };
  CastleQuestDialog.NAME = "CastleQuestDialogEx_R";
  CastleQuestDialog.AMOUNT_TABS = 7;
  return CastleQuestDialog;
}(U.CastleExternalDialog);
exports.CastleQuestDialog = j;
var W = require("./86.js");
var Y = require("./12.js");
var K = require("./545.js");
var z = require("./3344.js");
var q = require("./281.js");
var X = require("./3347.js");
var Q = require("./3349.js");
var J = require("./3350.js");
var Z = require("./3352.js");
var $ = require("./3353.js");
var ee = require("./1024.js");
r.classImplementsInterfaces(j, "ICollectableRendererList");
var te = require("./1.js");
var ie = require("./36.js");
j.__initialize_static_members();