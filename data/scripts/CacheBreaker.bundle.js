!(function (e) {
  var t = {};
  function __webpack_require__(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return (e[n].call(o.exports, o, o.exports, __webpack_require__), (o.l = !0), o.exports);
  }
  ((__webpack_require__.m = e),
    (__webpack_require__.c = t),
    (__webpack_require__.d = function (e, t, n) {
      __webpack_require__.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (__webpack_require__.r = function (e) {
      ('undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 }));
    }),
    (__webpack_require__.t = function (e, t) {
      if ((1 & t && (e = __webpack_require__(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (__webpack_require__.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          __webpack_require__.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o),
          );
      return n;
    }),
    (__webpack_require__.n = function (e) {
      var t =
        e && e.__esModule
          ? function getDefault() {
              return e.default;
            }
          : function getModuleExports() {
              return e;
            };
      return (__webpack_require__.d(t, 'a', t), t);
    }),
    (__webpack_require__.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (__webpack_require__.p = ''),
    __webpack_require__((__webpack_require__.s = 1977)));
})({
  0: function (e, t, n) {
    e.exports = n(126)(0);
  },
  1: function (e, t, n) {
    e.exports = n(126)(3);
  },
  116: function (e, t, n) {
    e.exports = n(126)(2);
  },
  126: function (e, t) {
    e.exports = ggs_lib;
  },
  1977: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = n(0),
      r = n(2),
      s = n(1978),
      i = n(1979),
      a = n(1980),
      l = n(306),
      c = n(334);
    a.wrapper(l.appVersion);
    var p = (function (e) {
      function CastleCacheBreakerSwf() {
        return (
          CONSTRUCTOR_HACK,
          r.EnvGlobalsHandler.setEnvGlobalsClass(new s.CastleEnvironmentGlobals()),
          e.call(this) || this
        );
      }
      return (
        o.__extends(CastleCacheBreakerSwf, e),
        Object.defineProperty(CastleCacheBreakerSwf.prototype, 'customEnvironments', {
          get: function () {
            var e = [];
            return (e.push(i.RelativePathEnvironment), e);
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(CastleCacheBreakerSwf.prototype, 'ignoreSavedZoneId', {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (CastleCacheBreakerSwf.prototype.loadGame = function () {
          if (r.BasicModel.branchesModel) {
            var t = '/' + r.BasicModel.branchesModel.currentBranch.id + '/index.html';
            if (!this.env.isTest && !window.location.pathname.includes(t)) {
              var n = window.location.href.replace(/\/[a-zA-Z0-9_]+\/index\.html/, t);
              return void document.location.assign(n);
            }
          }
          (e.prototype.loadGame.call(this), window.Helpshift('hide'));
        }),
        CastleCacheBreakerSwf
      );
    })(r.BasicCacheBreakerSwf);
    ((t.CastleCacheBreakerSwf = p), window.setLoadingScreenProgress(30));
    var d = 60;
    window.fakeLoadingTimer = setInterval(function () {
      d >= 30 && (window.setLoadingScreenProgress(100 - d), (d -= (5 + 5 * Math.random()) >> 0));
    }, 1e3);
    var u = document.getElementById('startScreenVideo');
    (c.StartscreenHelper.hasBackgroundAnimation()
      ? c.StartscreenHelper.updateBackgroundAnimation()
      : (u.remove(),
        (document.getElementById('edgeStartscreenVideoReplacement').style.backgroundImage =
          'url(ModernStartscreenAnimation_large.jpg)')),
      new p());
  },
  1978: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = n(0),
      r = n(2),
      s = n(2),
      i = n(2),
      a = n(2),
      l = n(1),
      c = n(306),
      p = (function (e) {
        function CastleEnvironmentGlobals() {
          var t = e.call(this) || this;
          return (
            (t._isOnTemporaryServer = !1),
            (t._isOnAllianceBattleGroundServer = !1),
            (t._isTemporaryServerTestRun = !1),
            (t._isCrossplay = !1),
            (t._isSpecialServerConnectStarted = !1),
            t
          );
        }
        return (
          o.__extends(CastleEnvironmentGlobals, e),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'gameId', {
            get: function () {
              return this.isClosedBeta ? 39 : 12;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'gameId',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'gameTitle', {
            get: function () {
              return 'Castle';
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'gameTitle',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'currentGameTitle', {
            get: function () {
              return 'Goodgame Empire';
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'currentGameTitle',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'versionDateGame', {
            get: function () {
              return c.CastleVersionInformation.versionInstance.buildNumberGame;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'versionDateGame',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'numOfItemLibs', {
            get: function () {
              return 0;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'numOfItemLibs',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'analyticsTrackingPath', {
            get: function () {
              return '/goodgameCastle';
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'analyticsTrackingPath',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'useAutoLogin', {
            get: function () {
              return !0;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'useAutoLogin',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'isLoggingActive', {
            get: function () {
              return !0;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'isLoggingActive',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'useABTest', {
            get: function () {
              return !1;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'useABTest',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'showLoadingText', {
            get: function () {
              return !0;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'showLoadingText',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'useVersionedFontSWF', {
            get: function () {
              return !1;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'useVersionedFontSWF',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'useLegacyFontManagement', {
            get: function () {
              return !1;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'useLegacyFontManagement',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'useShortPaymentHashValidity', {
            get: function () {
              return !0;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'useShortPaymentHashValidity',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'versionInformation', {
            get: function () {
              return c.CastleVersionInformation.versionInstance;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'versionInformation',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'fractionalDigits', {
            get: function () {
              return 2;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'fractionalDigits',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'trailingZeros', {
            get: function () {
              return !1;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'trailingZeros',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'identityManagmentLicenseVO', {
            get: function () {
              var e = new a.IdentitiyManagementLicenseTableRegistrationVO();
              return (
                (e.gameTitle = '굿게임엠파이어(Goodgame Empire)'),
                (e.license_cc_np = 'CC-NP-131015-013'),
                (e.ageRating = r.AgeCheck.OverTwelve),
                (e.gameRatingBoardConcessionDate = new Date(2013, 10, 15)),
                (e.gameRatingBoardConcessionId = -9999),
                (e.productionDate = new Date(2013, 6, 1)),
                e
              );
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'identityManagmentLicenseVO',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(
            CastleEnvironmentGlobals.prototype,
            'sendUserActivityStatusToTheServer',
            {
              get: function () {
                return !0;
              },
              set: function (e) {
                Object.getOwnPropertyDescriptor(
                  i.BasicEnvironmentGlobals.prototype,
                  'sendUserActivityStatusToTheServer',
                ).set.call(this, e);
              },
              enumerable: !0,
              configurable: !0,
            },
          ),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'useLegacySocialRegistration', {
            get: function () {
              return !1;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'useLegacySocialRegistration',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'ageGateFeatureIsActive', {
            get: function () {
              return !1;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'ageGateFeatureIsActive',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'inviterCode', {
            get: function () {
              return this._inviterCode;
            },
            set: function (e) {
              this._inviterCode = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'invite_refer_method', {
            get: function () {
              return this._invite_refer_method;
            },
            set: function (e) {
              this._invite_refer_method = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'localizeReplacements', {
            get: function () {
              return !0;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'localizeReplacements',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'isClosedBeta', {
            get: function () {
              return (
                !(
                  !(
                    CastleEnvironmentGlobals._firstLoaderURL &&
                    CastleEnvironmentGlobals._firstLoaderURL.length > 0
                  ) ||
                  (-1 ==
                    CastleEnvironmentGlobals._firstLoaderURL.indexOf(
                      'test-sns.goodgamestudios.com/rendered/www/39/',
                    ) &&
                    -1 == CastleEnvironmentGlobals._firstLoaderURL.indexOf('-closedbeta') &&
                    -1 ==
                      CastleEnvironmentGlobals._firstLoaderURL.indexOf(
                        'empireclosedbeta.goodgamestudios.com/',
                      ))
                ) ||
                !(
                  !(this.referrer && this.referrer.length > 0) ||
                  (-1 == this.referrer.indexOf('-closedbeta') &&
                    -1 == this.referrer.indexOf('empireclosedbeta'))
                ) ||
                !!(
                  this.baseURL &&
                  this.baseURL.length > 0 &&
                  -1 != this.baseURL.indexOf('-closedbeta')
                )
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'cacheBreakerUrl', {
            get: function () {
              if (this.isClosedBeta) {
                return (
                  s.BasicConstants.DOMAIN_PROTOCOL +
                  '://' +
                  this.cachebreakerSubDomain +
                  '.' +
                  this.domain +
                  '/loader-closedbeta/' +
                  this.gameDir +
                  '/' +
                  this.gameTitle +
                  'CacheBreakerSwf.swf'
                );
              }
              return Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'cacheBreakerUrl',
              ).get.call(this);
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'cacheBreakerUrl',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'firstLoaderURL', {
            get: function () {
              return Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'firstLoaderURL',
              ).get.call(this);
            },
            set: function (e) {
              ((CastleEnvironmentGlobals._firstLoaderURL = e),
                Object.getOwnPropertyDescriptor(
                  i.BasicEnvironmentGlobals.prototype,
                  'firstLoaderURL',
                ).set.call(this, e));
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'blueboxPort', {
            get: function () {
              return 443;
            },
            set: function (e) {
              Object.getOwnPropertyDescriptor(
                i.BasicEnvironmentGlobals.prototype,
                'blueboxPort',
              ).set.call(this, e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'isOnTemporaryServer', {
            get: function () {
              return this._isOnTemporaryServer;
            },
            set: function (e) {
              this._isOnTemporaryServer = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'specialServer', {
            get: function () {
              return this._specialServer;
            },
            set: function (e) {
              this._specialServer = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'lastShownDialog', {
            get: function () {
              return this._lastShownDialog;
            },
            set: function (e) {
              this._lastShownDialog = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'lastUsedCommandName', {
            get: function () {
              return this._lastUsedCommandName;
            },
            set: function (e) {
              this._lastUsedCommandName = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'lastExternalClip', {
            get: function () {
              return this._lastExternalClip;
            },
            set: function (e) {
              this._lastExternalClip = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'isTemporaryServerTestRun', {
            get: function () {
              return this._isTemporaryServerTestRun;
            },
            set: function (e) {
              this._isTemporaryServerTestRun = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(
            CastleEnvironmentGlobals.prototype,
            'originalInstanceVOBeforeSpecialServer',
            {
              get: function () {
                return this._originalInstanceVOBeforeSpecialServer;
              },
              set: function (e) {
                this._originalInstanceVOBeforeSpecialServer = e;
              },
              enumerable: !0,
              configurable: !0,
            },
          ),
          Object.defineProperty(
            CastleEnvironmentGlobals.prototype,
            'isOnAllianceBattleGroundServer',
            {
              get: function () {
                return this._isOnAllianceBattleGroundServer;
              },
              set: function (e) {
                this._isOnAllianceBattleGroundServer = e;
              },
              enumerable: !0,
              configurable: !0,
            },
          ),
          Object.defineProperty(
            CastleEnvironmentGlobals.prototype,
            'isSpecialServerConnectStarted',
            {
              get: function () {
                return this._isSpecialServerConnectStarted;
              },
              set: function (e) {
                this._isSpecialServerConnectStarted = e;
              },
              enumerable: !0,
              configurable: !0,
            },
          ),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'isOnSpecialServer', {
            get: function () {
              return this.isOnTemporaryServer || this.isOnAllianceBattleGroundServer;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleEnvironmentGlobals.prototype, 'isCrossplay', {
            get: function () {
              return this._isCrossplay;
            },
            set: function (e) {
              this._isCrossplay = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          CastleEnvironmentGlobals
        );
      })(i.BasicEnvironmentGlobals);
    ((t.CastleEnvironmentGlobals = p), l.classImplementsInterfaces(p, 'IEnvironmentGlobals'));
  },
  1979: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = n(0),
      r = n(2),
      s = n(2),
      i = n(1),
      a = (function (e) {
        function RelativePathEnvironment() {
          return (CONSTRUCTOR_HACK, e.call(this, 'RelativePathsEnvironment') || this);
        }
        return (
          o.__extends(RelativePathEnvironment, e),
          (RelativePathEnvironment.prototype.initPatterns = function () {
            ((this._zoneCapacitiesConfigPathPattern =
              'https://files-ak.goodgamestudios.com/games-config/network/status/12/zone_capacities.json'),
              (this._maintenanceConfigPathPattern =
                'https://files-ak.goodgamestudios.com/games-config/network/status/12/maint.json'),
              (this._assetsFolderPathPattern = 'assets/'),
              (this._audiosFolderPathPattern = 'assets/sound/'),
              (this._networkConfigPathPattern = '../config/network/{networkId}.xml'),
              (this._versionPathPattern = '../config/languages/version.json'),
              (this._countryConfigPathPattern = 'config/country/{countryVersion}/country.xml'),
              (this._languageConfigPathPattern =
                '../config/languages/{languageVersion}/{languageCode}.json'),
              (this._cldrConfigPathPattern = 'cldr'),
              (this._branchesConfigPathPattern = 'config/branches/latest/branches.xml'),
              (this._itemXMLURLPattern = 'items/items_v{itemsXMLVersion}.json'),
              (this._itemsVersionPathPattern = 'items/ItemsVersion.properties'),
              (this._fontsSWFURLPattern = 'config/fonts'),
              (this._fontsSWFURLPatternVersioned = 'config/fonts/{languageCode}'),
              (this._shopPathPattern =
                r.BasicConstants.DOMAIN_PROTOCOL +
                '{shopBaseUrl}.goodgamestudios.com/{languageCode}/'));
          }),
          (RelativePathEnvironment.prototype.isSupported = function () {
            return !0;
          }),
          RelativePathEnvironment
        );
      })(s.LiveEnvironment);
    ((t.RelativePathEnvironment = a),
      i.classImplementsInterfaces(
        a,
        'IBaseEnvironmentPatterns',
        'IEnvironment',
        'IBaseEnvironment',
        'IDetectableEnvironment',
      ));
  },
  1980: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = n(2),
      r = n(2),
      s = n(2),
      i = n(1981),
      a = !1,
      l = function (e) {
        if ('production' === e) {
          Object.defineProperty(window, 'console', {
            value: console,
            writable: !1,
            configurable: !1,
          });
          var t,
            n = {
              set: function (e) {
                t = e;
              },
              get: function () {
                return (
                  a ||
                    (console.clear(),
                    console.log(
                      '%cStop!',
                      'font: 4em sans-serif; color: white; background-color: red;',
                    ),
                    console.log(
                      '%cThis is a browser feature intended for developers.',
                      'font: 2em sans-serif',
                    ),
                    console.log(
                      "%cIf someone told you to copy-paste something here to enable a GGS feature or 'hack' someone's account, it is a scam and will give them access to your account.",
                      'font: 2em sans-serif',
                    ),
                    (a = !0)),
                  t
                );
              },
            };
          (Object.defineProperty(console, '_commandLineAPI', n),
            Object.defineProperty(console, '__commandLineAPI', n),
            console._commandLineAPI && console._commandLineAPI(),
            console.__commandLineAPI && console.__commandLineAPI());
        }
      };
    t.wrapper = function (e) {
      var t =
        -1 !== window.location.hostname.search('localhost') ||
        -1 !== window.location.hostname.search('127.0.0.1')
          ? 'development'
          : -1 === window.location.hostname.search('test')
            ? 'production'
            : window.location.pathname.split('/')[1] || 'unknown';
      (l(t),
        (function (e) {
          'production' === e &&
            ['log', 'debug', 'info', 'warn', 'error'].forEach(function (e) {
              console[e] = function () {};
            });
        })(t),
        (function (e, t) {
          window.bugsnagClient = i.default({
            apiKey: '8df757b7a283ecd9fe3c3b47fa5ffdf9',
            appVersion: e,
            collectUserIp: !1,
            notifyReleaseStages: ['development', 'qa', 'preproduction', 'production'],
            releaseStage: t,
            beforeSend: function (e) {
              var t = 'no_tracking_info_available';
              try {
                t =
                  r.TrackingCache.getInstance().getEvent(s.TrackingEventIds.CLIENT_FUNNEL)
                    .gamestate_name || 'unknown';
              } catch (e) {}
              var n = o.EnvGlobalsHandler.globals.lastShownDialog,
                i = o.EnvGlobalsHandler.globals.lastUsedCommandName,
                a = o.EnvGlobalsHandler.globals.lastExternalClip;
              e.metaData = {
                gameplay: {
                  last_funnel_step: t,
                  lastShownDialog: n,
                  lastUsedCommandName: i,
                  lastExternalClip: a,
                },
              };
            },
          });
        })(e, t),
        (function (e) {
          if (e.StyleMedia) {
            if (-1 != e.location.href.indexOf('debugedge'))
              return void console.log('Edge logging enabled');
            if ('object' == typeof e.console || 'function' == typeof e.console.log) {
              console.log(
                'logging disabled by default for Edge as with the certain dev setups and console closed it fails, to enable logging add "debugedge" to the querystring load the page (it will fail) open the console and reload, with the console object now created it will work',
              );
              for (
                var t = function noop() {},
                  n = ['show', 'hide', 'clear', 'log', 'debug', 'dir', 'info', 'warn', 'error'],
                  o = n.length;
                o--;

              )
                console[n[o]] = t;
            }
          }
        })(window),
        console.log(
          'Initialize PageIntegration cross-communication registering MessageHandler with allowed domains',
        ),
        (window.messageHandler = new window.MessageHandler(
          new window.EventHandler(),
          '*',
          window.parent,
          window.location != window.parent.location ? document.referrer : document.location.href,
        )),
        window.messageHandler.register());
    };
  },
  1981: function (e, t, n) {
    e.exports = n(126)(987);
  },
  2: function (e, t, n) {
    e.exports = n(126)(29);
  },
  306: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = n(0),
      r = n(2),
      s = n(1),
      i = n(116),
      a = n(851).version;
    t.appVersion = n(852).version;
    var l = (function (e) {
        var t = e.split('.'),
          n = t[0],
          o = t[1],
          r = t[2];
        for (r.indexOf('-') && (r = r.split('-')[0]); o.length < 3; ) o = '0' + o;
        for (; r.length < 3; ) r = '0' + r;
        return n + o + r;
      })(t.appVersion),
      c = i.getLogger('CastleVersionInformation'),
      p = (function (e) {
        function CastleVersionInformation() {
          return e.call(this) || this;
        }
        return (
          o.__extends(CastleVersionInformation, e),
          Object.defineProperty(CastleVersionInformation, 'versionInstance', {
            get: function () {
              return (
                CastleVersionInformation._castleVersionInstance ||
                  ((CastleVersionInformation._castleVersionInstance =
                    new CastleVersionInformation()),
                  c.info(
                    'Game Version ' +
                      CastleVersionInformation._castleVersionInstance.buildNumberGame,
                  )),
                CastleVersionInformation._castleVersionInstance
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleVersionInformation.prototype, 'versionNumberGame', {
            get: function () {
              return t.appVersion;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleVersionInformation.prototype, 'buildNumberGame', {
            get: function () {
              return l;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleVersionInformation.prototype, 'clientVersionString', {
            get: function () {
              return 'C' + this.versionNumberGame;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(CastleVersionInformation.prototype, 'versionText', {
            get: function () {
              return (
                this.clientVersionString +
                ', A' +
                a +
                '\n' +
                this.formatBuildNumberServer +
                ' \nC' +
                this.formatItemXmlVersionNumber +
                ' \nS iXML' +
                this.serverXMLVersion +
                ' \n' +
                this.formatLanguageVersionNumber
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          CastleVersionInformation
        );
      })(r.VersionInformation);
    ((t.CastleVersionInformation = p), s.classImplementsInterfaces(p, 'IVersionInformation'));
  },
  334: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = n(2),
      r = n(2),
      s = n(1),
      i = (function () {
        function StartscreenHelper() {}
        return (
          (StartscreenHelper.usesModernStartscreen = function (e) {
            void 0 === e && (e = -1);
            var t = e > -1 ? e : r.BasicModel.instanceProxy.selectedInstanceVO.zoneId,
              n =
                o.EnvGlobalsHandler.globals.loginIsKeyBased ||
                o.EnvGlobalsHandler.globals.isFacebook,
              s =
                0 == StartscreenHelper.STARTSCREEN_ZONE_IDS.length ||
                StartscreenHelper.STARTSCREEN_ZONE_IDS.indexOf(t) > -1;
            return !n && s;
          }),
          (StartscreenHelper.updateBackgroundAnimation = function (e) {
            void 0 === e && (e = !1);
            var t,
              n = document.getElementById('startScreenVideo'),
              o = document.documentElement.clientWidth,
              r = document.documentElement.clientHeight;
            if (
              (o <= 1024 && r <= 900
                ? ((t = 'ModernStartscreenAnimation_small.mp4'),
                  (n.style.width = '1024px'),
                  (n.style.height = '900px'),
                  (n.style.left = 'calc(50% - 512px)'))
                : o <= 1366 && r <= 910
                  ? ((t = 'ModernStartscreenAnimation_medium.mp4'),
                    (n.style.width = '1366px'),
                    (n.style.height = '910px'),
                    (n.style.left = 'calc(50% - 683px)'))
                  : ((t = 'ModernStartscreenAnimation_large.mp4'),
                    (n.style.width = '1920px'),
                    (n.style.height = '1080px'),
                    (n.style.left = 'calc(50% - 960px)')),
              -1 == n.src.indexOf(t) && (n.src = t),
              e)
            ) {
              var s = n.play();
              s &&
                s.then &&
                s.then(
                  function () {},
                  function (e) {},
                );
            }
          }),
          (StartscreenHelper.hasBackgroundAnimation = function () {
            return !s.currentBrowserInfo.isIE;
          }),
          (StartscreenHelper.STARTSCREEN_ZONE_IDS = []),
          StartscreenHelper
        );
      })();
    t.StartscreenHelper = i;
  },
  851: function (e) {
    e.exports = {
      name: '@goodgamestudios/empire-createjs-assets',
      version: '1.2.1081',
      main: 'generated/index.js',
      types: 'generated/index.d.ts',
      description: 'CreateJS Assets for Empire HTML5',
      scripts: {
        '--Build Steps--':
          '----------------------------------------------------------------------------------------------',
        commitmsg: 'git-jira-ticket-number',
        compile_ALL_flas: 'yarn export_fla_interface && yarn export_fla_itemassets',
        export_fla_interface:
          'animate-export modules/assets/interface --output fla-export/interface --logLevel debug --batch-size 100 --timeout 2700000',
        export_fla_itemassets:
          'animate-export modules/assets/itemassets --output fla-export/itemassets --logLevel debug --batch-size 100 --timeout 2700000',
        export_modified_files: 'node export_modified_files.js --useVersioning --enableModDate',
        assets_cleanup: 'node assets_cleanup.js',
        analyze_assets_logs: 'analyze-logs fla-export/ > fla-export/profile_details.txt',
        generate_ALL_spritesheets:
          'yarn generate_spritesheets_interface && yarn generate_spritesheets_itemassets',
        generate_spritesheets_interface:
          'generate-spritesheets fla-export/interface --output generated/interface',
        generate_spritesheets_itemassets:
          'generate-spritesheets fla-export/itemassets --output generated/itemassets',
        fix_spritesheet_url_references: 'node fix_spritesheet_url_references.js',
        generate_version_lists: 'node generate_version_lists.js --fullExport true',
        fix_hash_version: 'node fix_assets_hash.js',
        extract_exporter_version: 'extract-exporter-version',
        append_hash_version: 'node append_version_to_files.js',
        test_urls: 'node testAssetUrls.js',
        test_urls_min: 'cross-env NODE_ENV=minimized node testAssetUrls.js',
        'clean-up_typescript': 'node clean-up_typescript.js',
        generate_versions: 'node generate_versions_files.js',
        validate_versions: 'validate-versions',
        validate_logs: 'validate-logs',
        validate_reports: 'validate-reports',
        validate_assets_sources: 'validate-assets-sources',
        validate_declarations: 'validate-declarations',
        aggregate_monitoring: 'aggregate-monitoring reports',
        generate_typescript: 'animate-export fla-export --output src --json',
        generate_references: 'node generate_references.js',
        compile_typescript:
          'node --max_old_space_size=15000 ./node_modules/.bin/tsc | tsforgive 2376',
        compile_typescript_declaration:
          'node --max_old_space_size=15000 ./node_modules/.bin/tsc --project tsconfig_declaration.json | tsforgive 2376',
        compile_typescript_diff_files: 'node compile_typescript_diff_files.js',
        addBranchToVersion: 'addBranchToVersion',
        deploy: ' node deploy.js',
        '--Optimisation--':
          '----------------------------------------------------------------------------------------------',
        optimize: 'yarn optimize:code && yarn optimize:gzip && yarn optimize:image',
        'optimize:versioned': 'yarn optimize:code:version && yarn optimize:image:version',
        'optimize:code':
          'node ./node_modules/gulp/bin/gulp.js code --gulpfile ./node_modules/@goodgamestudios/animate-export/gulpfile.js --cwd .',
        'optimize:gzip':
          'node ./node_modules/gulp/bin/gulp.js gzip --gulpfile ./node_modules/@goodgamestudios/animate-export/gulpfile.js --cwd .',
        'optimize:png':
          'node ./node_modules/gulp/bin/gulp.js png --gulpfile ./node_modules/@goodgamestudios/animate-export/gulpfile.js --cwd .',
        'optimize:jpeg':
          'node ./node_modules/gulp/bin/gulp.js mozjpg --gulpfile ./node_modules/@goodgamestudios/animate-export/gulpfile.js --cwd .',
        'optimize:webp':
          'node ./node_modules/gulp/bin/gulp.js webp:em --gulpfile ./node_modules/@goodgamestudios/animate-export/gulpfile.js --cwd .',
        'optimize:sound':
          'node ./node_modules/gulp/bin/gulp.js sound:copy --gulpfile ./node_modules/@goodgamestudios/animate-export/gulpfile.js --cwd .',
        'optimize:image': 'yarn optimize:png && yarn optimize:webp',
        'optimize:code:version':
          'cross-env NODE_ENV=versioned node ./node_modules/gulp/bin/gulp.js code --gulpfile ./node_modules/@goodgamestudios/animate-export/gulpfile.js --cwd .',
        'optimize:image:version':
          'cross-env NODE_ENV=versioned yarn optimize:png && cross-env NODE_ENV=versioned yarn optimize:jpeg && cross-env NODE_ENV=versioned yarn optimize:webp',
        '--Miscellaneous--':
          '----------------------------------------------------------------------------------------------',
        'link-dependencies': 'yarn link spritesheet-js',
        'unlink-dependencies': 'yarn unlink spritesheet-js',
        test: 'echo "Error: no test specified" && exit 1',
        create_ssl:
          'openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem',
        serve: 'http-server generated -g -p 8181 --cors',
        serve_assets: 'http-server versioned -g -p 8181 --cors',
        'serve-ssl': 'http-server versioned -g -p 8181 --cors --ssl',
      },
      publishConfig: { registry: 'https://registry.npmjs.org' },
      repository: {
        type: 'git',
        url: 'git@source.services.ggs-net.com:Empire-HTML5/empire-createjs-assets.git',
      },
      author: 'Goodgame Studios',
      license: 'SEE LICENSE IN LICENSE.md',
      homepage: 'https://source.services.ggs-net.com/Empire-HTML5/empire-createjs-assets#readme',
      devDependencies: {
        '@goodgamestudios/addbranchtoversion': '^1.0.0',
        '@goodgamestudios/animate-export': '1.13.7',
        '@goodgamestudios/createjs-utilities': '^1.35.0',
        '@goodgamestudios/git-jira-ticket-number': '^1.1.1',
        '@goodgamestudios/math-utilities': '~1.2.6',
        async: '^2.6.0',
        chalk: '^2.4.0',
        'cross-env': '^5.1.4',
        del: '^3.0.0',
        'from-xml': '^0.1.6',
        glob: '^7.1.1',
        handlebars: '^4.0.6',
        'http-server': '^0.10.0',
        husky: '^0.14.3',
        mkdirp: '^0.5.1',
        'node-fetch': '^2.1.2',
        ret: '~0.1.10',
        rimraf: '^2.6.1',
        shelljs: '^0.7.7',
        'spritesheet-js': '^1.2.6',
        tmp: '^0.0.31',
        tsforgive: '^0.0.1',
        typescript: '^2.9.2',
        xxhashjs: '^0.2.2',
      },
      dependencies: { minimist: '^1.2.0', tslib: '^1.7.1' },
      resolutions: { vinyl: '^2.2.1', psl: '1.10.0' },
    };
  },
  852: function (e) {
    e.exports = {
      name: 'TranspilationEmpire',
      version: '1.138.29',
      description: 'Transpiled version of the Flash game',
      main: 'index.js',
      repository: 'git@source.services.ggs-net.com:Foundation-HTML5/TranspilationEmpire.git',
      author: 'Davide de Paolis <ddepaolis@goodgamestudios.com>',
      license: 'UNLICENSED',
      scripts: {
        '--- GIT HOOKS -------------------------------------------------------': '',
        precommit: 'sh scripts/check-for-text.sh',
        commitmsg: 'git-jira-ticket-number',
        'build:tsc': 'node --max_old_space_size=25000 ./node_modules/typescript/lib/tsc.js',
        'build:tsc:forgive':
          'node --max_old_space_size=15000 ./node_modules/typescript/lib/tsc.js | tsforgive 2376',
        'build:client':
          'node --max_old_space_size=15000 ./node_modules/webpack/bin/webpack.js --env.target=dev',
        'build:core':
          'node ./node_modules/webpack/bin/webpack.js --config=webpack.dll.js --env.target=dev',
        start:
          'node --max_old_space_size=8192 ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --env.target=dev',
        'start:ie': 'yarn start --env.isIE=true',
        'start:static':
          'http-server ./dist -p 8888 -P http://empire-html5-test.goodgamestudios.com/development/test-resources -g --cors',
        'start:clean': 'rm -rf ./node_modules && yarn && yarn upgrade-dependencies && yarn start',
        'test-dev':
          'node --max_old_space_size=8192 ./node_modules/karma/bin/karma start karma.conf.js',
        '--- RELEASE -------------------------------------------------------': '',
        'release:core':
          'node ./node_modules/webpack/bin/webpack.js --config=webpack.dll.js --env.target=production',
        'release:client':
          'node --max_old_space_size=15000 ./node_modules/webpack/bin/webpack.js --env.target=production && node externallyLinkSourceMaps.js dist',
        releaseDev:
          'npm run build:core && node --max_old_space_size=15000 ./node_modules/webpack/bin/webpack.js --env.target=dev',
        releaseProd: 'yarn get-items-xml && npm run release:core && npm run release:client',
        '--- TRANSPILATION STEPS ---------------------------------------------': '',
        'transpile-full':
          'npm run clean-up-transpiled && npm run transpile-sources && npm run format-transpiled && npm run dos-to-unix',
        'clean-up-transpiled': 'rm -rf transpiled',
        'clean-up-compiled': 'rm -rf compiled',
        'transpile-sources':
          'as3-to-ts as3/src/code/flash/ transpiled --commonjs --measure --symbolMap node_modules/\\@goodgamestudios/empire-createjs-assets/src/LibrarySymbolMap.json > transpilation.log',
        'dos-to-unix': 'node scripts/dos-to-unix "./transpiled/**/*.ts"',
        'apply-code-fixes':
          'yarn tslint-fix-as3 && yarn tslint-fix-unused && yarn tslint-fix-format',
        'format-transpiled':
          'node node_modules/typescript-formatter/bin/tsfmt -r --verbose --useTsconfig tsconfig.formatter.json',
        'tslint-fix-as3': 'sh scripts/tslint-fix goodgame',
        'tslint-fix-unused': 'sh scripts/tslint-fix no-unused',
        'tslint-fix-format':
          'sh scripts/tslint-fix format && tslint --project . --format json | tslint-fix',
        '---------------------------------------------------------------------': '',
        'compile-transpiled':
          'node --max_old_space_size=8192 ./node_modules/typescript/lib/tsc.js | tsforgive 2376 > compilation.log',
        'parse-errors':
          'node ./node_modules/\\@goodgamestudios/tsc-error-stats/bin/tsc-error-stats report compilation.log tsc-error-stats.txt',
        '--- DEPENDENCY UPDATES ----------------------------------------------': '',
        'core-update':
          'cd ../CoreJS && yarn compile && cp -a ../CoreJS/lib/.  ../TranspilationEmpire/node_modules/@goodgamestudios/core/lib && cd ../TranspilationEmpire && yarn build:core',
        'loca-update':
          'cd ../LocalizationJS && yarn compile && cp -a ../LocalizationJS/lib/.  ../TranspilationEmpire/node_modules/@goodgamestudios/localization/lib   && cp -a ../LocalizationJS/lib/.  ../CoreJS/node_modules/@goodgamestudios/localization/lib && cd ../TranspilationEmpire && yarn core-update',
        'createjs-update':
          'cd ../CreateJS-utilities && yarn compile && cp -a ../CreateJS-utilities/lib/.  ../TranspilationEmpire/node_modules/@goodgamestudios/CreateJS-utilities/lib && cd ../TranspilationEmpire && yarn build:core',
        'ggs-update':
          'yarn remove @goodgamestudios/core && yarn add @goodgamestudios/core && yarn install && yarn build:core',
        errors: 'webpack --progress --profile --colors --display-error-details --display-cached',
        'get-items-xml': 'rm -rf ./config/xml/versioned && node ./scripts/get-items-xml.js .',
        'upgrade-dependencies':
          'yarn get-items-xml && yarn upgrade @goodgamestudios/empire-createjs-assets && yarn install && yarn build:core',
        'assets-start':
          'cd ./empire-createjs-assets &&  yarn export_modified_files && cd ../ && yarn build:core && yarn start',
      },
      devDependencies: {
        '@goodgamestudios/as3-to-ts': '^0.46.0',
        '@goodgamestudios/fix-map-index-access': '^0.0.2',
        '@goodgamestudios/fonts': '1.3.0',
        '@goodgamestudios/git-jira-ticket-number': '~1.1.1',
        '@goodgamestudios/itemsxml2json': '^1.0.7',
        '@goodgamestudios/tsc-error-stats': '^0.3.0-1',
        '@goodgamestudios/tslint-fix': '>=0.13.6',
        '@goodgamestudios/tslint-goodgamestudios': '~1.12.7',
        '@types/bytebuffer': '^5.0.37',
        '@types/chai': '^4.1.4',
        '@types/clipboard': '^2.0.0',
        '@types/eventemitter3': '^2.0.2',
        '@types/facebook-js-sdk': '^2.8.6',
        '@types/mocha': '^5.2.5',
        '@types/sinon': '^5.0.1',
        '@types/webpack-env': '^1.13.6',
        chai: '^4.1.2',
        'circular-dependency-plugin': '^5.0.2',
        'clean-webpack-plugin': '^0.1.19',
        clipboard: '^2.0.1',
        'compression-webpack-plugin': '^1.1.11',
        'copy-webpack-plugin': '^5.0.0',
        'core-js': '^2.5.7',
        'es6-map': '^0.1.5',
        'fork-ts-checker-webpack-plugin': '^0.4.3',
        glob: '^7.1.2',
        got: '^9.2.2',
        happypack: '^5.0.0',
        'html-webpack-plugin': '^3.2.0',
        'http-server': '^0.11.1',
        husky: '^0.14.3',
        karma: '^3.0.0',
        'karma-chai': '^0.1.0',
        'karma-chai-sinon': '^0.1.5',
        'karma-chrome-launcher': '^2.2.0',
        'karma-es6-shim': '^1.0.0',
        'karma-mocha': '^1.3.0',
        'karma-sinon': '^1.0.5',
        'karma-sourcemap-loader': '^0.3.7',
        'karma-sourcemap-writer': '^0.1.2',
        'karma-typescript': '^3.0.13',
        'karma-webpack': '^3.0.0',
        'make-dir': '^1.3.0',
        'make-dir-cli': '^1.0.0',
        mocha: '^5.2.0',
        'open-browser-webpack-plugin': '^0.0.5',
        pify: '^3.0.0',
        'read-file': '^0.2.0',
        ret: '~0.1.10',
        rimraf: '^2.6.2',
        'simple-git': '^1.96.0',
        sinon: '^6.1.5',
        'sinon-chai': '^3.2.0',
        'source-map-loader': '^0.2.3',
        'string-replace-loader': '^2.1.1',
        'ts-loader': '^4.4.2',
        'ts-node': '^7.0.0',
        tsforgive: '^0.0.1',
        tslint: '^5.11.0',
        typescript: '^2.9.2',
        'typescript-formatter': '^7.2.2',
        'uglifyjs-webpack-plugin': '^1.2.7',
        webpack: '^4.16.1',
        'webpack-cli': '^3.1.0',
        'webpack-concat-plugin': '^3.0.0',
        'webpack-dev-server': '^3.1.4',
        'webpack-notifier': '^1.6.0',
        'webpack-simple-progress-plugin': '^0.0.4',
        'worker-loader': '^2.0.0',
      },
      dependencies: {
        '@goodgamestudios/core': '^6.12.6',
        '@goodgamestudios/empire-createjs-assets': '^1.2.298',
        '@goodgamestudios/empire-shared-constants': '6.0.1273',
        '@goodgamestudios/message-handler': '1.3.1',
        axios: '^0.21.1',
        'bugsnag-js': '^4.7.2',
        cldr: '^4.10.0',
        gsap: '^2.0.1',
        protobufjs: '^6.8.6',
        'reflect-metadata': '^0.1.12',
        tslib: '^1.9.3',
      },
    };
  },
});
//# sourceMappingURL=https://s3-eu-west-1.amazonaws.com/com.ggs-unicorns.sourcemaps/CacheBreaker.bundle.9b4d8a9d5255b77feeba.js.map
