Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./23.js");
var r = require("./23.js");
var l = require("./91.js");
var c = require("./15.js");
var u = require("./24.js");
var d = function () {
  function FarhatBuildingSpawnController() {
    this._farhatDisplayObjectClipIsLoaded = false;
    this._farhatDisplayObjectClipIsLoading = false;
    this._farhatAlive = false;
    if (FarhatBuildingSpawnController._instance) {
      throw new Error("Singleton class! Use FarhatBuildingSpawnController.getInstance() instead...");
    }
  }
  FarhatBuildingSpawnController.getInstance = function () {
    FarhatBuildingSpawnController._instance ||= new FarhatBuildingSpawnController();
    return FarhatBuildingSpawnController._instance;
  };
  FarhatBuildingSpawnController.prototype.applaudNow = function (e = false) {
    if (h.CastleLayoutManager.getInstance().isInMyCastle) {
      if (h.CastleLayoutManager.getInstance().isoScreen) {
        if (!p.Iso.renderer.isReady) {
          return;
        }
        this.checkFarhatAsset(e);
      } else {
        c.CastleBasicController.getInstance().addEventListener(l.CastleLayoutManagerEvent.SCREEN_CHANGED, this.bindFunction(function (t) {
          c.CastleBasicController.getInstance().removeEventListener(l.CastleLayoutManagerEvent.SCREEN_CHANGED, arguments.callee);
          if (!!t.params && !(t.params.length < 1) && !!t.params[0]) {
            this.applaudNow(e);
          }
        }));
      }
    }
  };
  FarhatBuildingSpawnController.prototype.checkFarhatAsset = function (e) {
    if (this._farhatDisplayObjectClipIsLoaded) {
      this.findNextFarhatBuildingSpot(e);
    } else if (!this._farhatDisplayObjectClipIsLoading) {
      this.loadFarhatAsset(e);
    }
  };
  FarhatBuildingSpawnController.prototype.loadFarhatAsset = function (e) {
    this._farhatDisplayObjectClipIsLoading = true;
    var t = new u.CastleGoodgameExternalClip(FarhatBuildingSpawnController._CITIZEN_FARHAT_CLASSIC, n.BasicModel.basicLoaderData.getVersionedItemAssetUrl(FarhatBuildingSpawnController._CITIZEN_FARHAT_CLASSIC));
    var i = this.bindFunction(function (t) {
      this._farhatDisplayObjectClipIsLoading = false;
      this._farhatDisplayObjectClipIsLoaded = true;
      this._farhatDisplayObjectClip = t;
      this._farhatDisplayObjectClip.stop();
      this.applaudNow(e);
    });
    if (t.isLoaded) {
      i(t);
    } else {
      t.clipLoaded.addOnce(i);
    }
  };
  FarhatBuildingSpawnController.prototype.findNextFarhatBuildingSpot = function (e) {
    this._currentBuildingsList ||= p.Iso.renderer.objects.innerBuildings.list.slice();
    if (this._currentBuildingsList.length < 1) {
      this._currentBuildingsList = null;
    } else {
      var t = Math.round((this._currentBuildingsList.length - 1) * Math.random());
      var i = o.castAs(this._currentBuildingsList[t], "ABasicBuildingVE");
      this._currentBuildingsList.splice(t, 1);
      if (i && i.dispComponent.isLoaded) {
        this.findNextFarhatSpawnSpot(i, e);
      }
    }
  };
  FarhatBuildingSpawnController.prototype.findNextFarhatSpawnSpot = function (e, t) {
    if (e != null) {
      var i = [];
      if (e.buildingClip != null) {
        var n = o.castAs(e.buildingClip.currentshownDisplayObject, "Container");
        if (n != null) {
          for (var s = a.int(n.numChildren), r = 0; r < s; r++) {
            var l = n.getChildByName("farhatSpot" + r);
            if (l) {
              i.push(l);
            }
          }
          if (i.length < 1) {
            this.findNextFarhatBuildingSpot(t);
          } else {
            this.spawnFarhat(i, t);
          }
        }
      }
    }
  };
  FarhatBuildingSpawnController.prototype.spawnFarhat = function (e, t) {
    if (t) {
      this.stopFarhatClapping();
    }
    (e.length == 1 ? e[0] : e[Math.round(Math.random() * (e.length - 1))]).addChild(this._farhatDisplayObjectClip);
    this._farhatDisplayObjectClip.currentshownDisplayObject.mc_farhat.play();
    this._showingTween = r.TweenMax.fromTo(this._farhatDisplayObjectClip, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: s.Linear.easeIn,
      onComplete: this.bindFunction(this.onShowFarhatComplete)
    });
    this._farhatAlive = true;
    this._currentBuildingsList.length = 0;
    this._currentBuildingsList = null;
  };
  FarhatBuildingSpawnController.prototype.onShowFarhatComplete = function () {
    this._showingTween = null;
    this._aliveTween = r.TweenMax.fromTo(this._farhatDisplayObjectClip, 0.5, {
      alpha: 1
    }, {
      delay: FarhatBuildingSpawnController._TIME_ALIVE,
      alpha: 0,
      ease: s.Linear.easeOut,
      onComplete: this.bindFunction(function () {
        this._farhatAlive = false;
        this._aliveTween = null;
        this._farhatDisplayObjectClip.currentshownDisplayObject.mc_farhat.stop();
      })
    });
  };
  FarhatBuildingSpawnController.prototype.stopFarhatClapping = function () {
    if (this._showingTween) {
      this._showingTween.kill();
      this._showingTween = null;
    }
    if (this._aliveTween) {
      this._aliveTween.kill();
      this._aliveTween = null;
    }
    if (this._farhatDisplayObjectClip && this._farhatDisplayObjectClip.parent) {
      this._farhatDisplayObjectClip.parent.removeChild(this._farhatDisplayObjectClip);
    }
    this._farhatAlive = false;
  };
  FarhatBuildingSpawnController.__initialize_static_members = function () {
    FarhatBuildingSpawnController._TIME_ALIVE = 15;
    FarhatBuildingSpawnController._CITIZEN_FARHAT_CLASSIC = "Citizen_Farhat_Classic";
  };
  return FarhatBuildingSpawnController;
}();
exports.FarhatBuildingSpawnController = d;
var p = require("./34.js");
var h = require("./17.js");
d.__initialize_static_members();