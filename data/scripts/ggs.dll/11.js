Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function BasicConstants() {}
  BasicConstants.isLocalHost = function (e) {
    return BasicConstants.LOCAL_HOSTNAME_PATTERNS.filter(function (t) {
      return e.indexOf(t) > -1;
    }).length > 0;
  };
  BasicConstants.isFlashLanguage = function (e) {
    if (!e) {
      return false;
    }
    switch (e) {
      case BasicConstants.LANGUAGE_GERMAN:
      case BasicConstants.LANGUAGE_ENGLISH:
      case BasicConstants.LANGUAGE_ARABIC:
      case BasicConstants.LANGUAGE_CZECH:
      case BasicConstants.LANGUAGE_CHINESE_SIMPLE:
      case BasicConstants.LANGUAGE_CHINESE_TRADITIONAL:
      case BasicConstants.LANGUAGE_DANISH:
      case BasicConstants.LANGUAGE_DUTCH:
      case BasicConstants.LANGUAGE_FINNISH:
      case BasicConstants.LANGUAGE_FRENCH:
      case BasicConstants.LANGUAGE_GREECE:
      case BasicConstants.LANGUAGE_HUNGARIAN:
      case BasicConstants.LANGUAGE_ITALIAN:
      case BasicConstants.LANGUAGE_JAPANESE:
      case BasicConstants.LANGUAGE_KOREAN:
      case BasicConstants.LANGUAGE_NORWEGIAN:
      case BasicConstants.LANGUAGE_POLISH:
      case BasicConstants.LANGUAGE_PORTUGUESE:
      case BasicConstants.LANGUAGE_RUSSIAN:
      case BasicConstants.LANGUAGE_SPANISH:
      case BasicConstants.LANGUAGE_SWEDISH:
      case BasicConstants.LANGUAGE_TURKISH:
      case BasicConstants.LANGUAGE_SLOVAKIAN:
        return true;
      default:
        return false;
    }
  };
  BasicConstants.uniqueAgbLink = function (e) {
    return BasicConstants.AGB_URL + e + "/#terms";
  };
  BasicConstants.uniquePolicyLink = function (e) {
    return BasicConstants.AGB_URL + e + "/#privacy";
  };
  BasicConstants.COMPANY_NAME = "Goodgame Studios";
  BasicConstants.TARGET_FRAMERATE = 24;
  BasicConstants.LOGGEDIN_MESSAGE_TIME_INTERVAL = 60000;
  BasicConstants.POPUP_TIME_INTERVAL = 300000;
  BasicConstants.AUTOMATIC_LOADING_BAR_UPDATE_TIME = 2000;
  BasicConstants.MAX_FILESIZE_REALTIMELOADING = 500000;
  BasicConstants.NUM_RANDOM_LOADINGTEXT_ELEMENTS_AVAILABLE = 20;
  BasicConstants.DOMAIN_PROTOCOL = "https";
  BasicConstants.DOMAIN_INTERNAL_DNS = "filetest.services.ggs-net.com";
  BasicConstants.DOMAIN_INTERNAL_DNS_ALIAS = "filetest.ggs-hh.net";
  BasicConstants.NETWORK_PARAMETER = "network";
  BasicConstants.IS_TEST_PARAMETER = "IS_TEST";
  BasicConstants.IS_LOCALE_PARAMETER = "IS_LOCALE";
  BasicConstants.COUNTRY_PARAMETER = "country";
  BasicConstants.PRE_CLIENT_PARAMETER = "PRE_CLIENT";
  BasicConstants.FORCE_TO_SHOW_TEST_SERVERS = "forceToShowTestServers";
  BasicConstants.USE_MIN_ASSETS = "useMinAssets";
  BasicConstants.COMMAND_EMULATE_LAGGY_CLIENT = "emulateLaggyClient";
  BasicConstants.LAGGY_CLIENT_MIN_DELAY = "laggyClientMinDelay";
  BasicConstants.LAGGY_CLIENT_MAX_DELAY = "laggyClientMaxDelay";
  BasicConstants.MAINTENANCE_PARAMETER = "maintenance";
  BasicConstants.NETCONF_TEST_PARAMETER = "testNetConf";
  BasicConstants.FORCE_TO_SHOW_LOGGER = "forceToShowLogger";
  BasicConstants.FORCE_MANUAL_LOGIN = "forceManualLogin";
  BasicConstants.IN_GAME_SHOP = "inGameShop";
  BasicConstants.KEY_PARAMETER = "key";
  BasicConstants.GENDER_PARAMETER = "gender";
  BasicConstants.DISPLAY_NAME_PARAMETER = "displayName";
  BasicConstants.DISABLE_FACEBOOK_LOGIN = "disableFBLogin";
  BasicConstants.DISABLE_FRIEND_INV = "disableFriendInv";
  BasicConstants.NATIVE_STORE = "nativeStore";
  BasicConstants.NATIVE_STORE_MICROSOFT = "ms";
  BasicConstants.PLN_PARAMETER = "pln";
  BasicConstants.SIG_PARAMETER = "sig";
  BasicConstants.SUK_PARAMETER = "suk";
  BasicConstants.CACHE_PARAMETER = "cache";
  BasicConstants.DISTRIBUTOR_ID_PARAMETER = "distributorId";
  BasicConstants.VERSION_DATE_PARAMETER = "vD";
  BasicConstants.GAME_ID_PARAMETER = "gameID";
  BasicConstants.REFERRER_PARAMETER = "ref";
  BasicConstants.NETWORK_ID = "networkID";
  BasicConstants.PARTNER_WEBSITE = "w";
  BasicConstants.LP_PARTNER_WEBSITE = "lpw";
  BasicConstants.LOGIN_SOURCE = "ls";
  BasicConstants.FIRST_LOADER_VERSION = "firstLoaderVersion";
  BasicConstants.FRIEND_INVITE_CODE = "ic";
  BasicConstants.BASIC_FRAME_ONE_LOADER = "basicFrameOne";
  BasicConstants.NETWORK_INFO_LOADER = "networkInfo";
  BasicConstants.ZONE_CAPACITY_INFO_LOADER = "zoneCapacityInfo";
  BasicConstants.LANGUAGE_PROP_LOADER = "langVersion";
  BasicConstants.LANGUAGE_RES_LOADER = "languageXML";
  BasicConstants.ITEM_XML_LOADER = "itemXML";
  BasicConstants.ITEM_XML_VERSION = "itemXMLVersion";
  BasicConstants.ACCOUNT_COOKIE_LOADER = "accountCookie";
  BasicConstants.AB_CONFIG_LOADER = "AB_CONFIG_LOADER";
  BasicConstants.GLOBAL_COOKIE_SAVER_LOADER = "GLOBAL_COOKIE_SAVER_LOADER";
  BasicConstants.OLD_GLOBAL_COOKIE_SAVER_LOADER = "OLD_GLOBAL_COOKIE_SAVER_LOADER";
  BasicConstants.LANDING_PAGE_COOKIE_SAVER_LOADER = "LANDING_PAGE_COOKIE_SAVER_LOADER";
  BasicConstants.COUNTRY_CONFIG_LOADER = "countryConfigLoader";
  BasicConstants.PLATFORM_ID_WEB = 1;
  BasicConstants.PLATFORM_ID_MS = 11;
  BasicConstants.STORE_ID_WEB = 9;
  BasicConstants.STORE_ID_MS = 11;
  BasicConstants.PRE_ASSETS = "PRE_ASSETS";
  BasicConstants.APP_LOADER = "APP_LOADER";
  BasicConstants.CORE_TEST_FOLDER = "-coretest";
  BasicConstants.CORE_DEV_FOLDER = "-coredev";
  BasicConstants.TEST_FOLDER = "-test";
  BasicConstants.LIVE_TEST_FOLDER = "-livetest";
  BasicConstants.LOCA_TEST_FOLDER = "-locatest";
  BasicConstants.USABILITYTEST_FOLDER = "-usability";
  BasicConstants.PRECLIENT_FOLDER = "-preClient";
  BasicConstants.DEV_TEST_FOLDER = "-dev";
  BasicConstants.PRIVATE_TEST_SERVER_URL = "client1.test.ggs-of.net";
  BasicConstants.LOCALE_URL = "file:";
  BasicConstants.AGB_URL = BasicConstants.DOMAIN_PROTOCOL + "://www.goodgamestudios.com/terms_";
  BasicConstants.GGS_DOMAIN = "goodgamestudios.com";
  BasicConstants.LOCAL_HOSTNAME_PATTERNS = ["localhost", "127.0.0.1", "0.0.0.0", "10.0.2.2", ".local"];
  BasicConstants.LIVE_BRANCHING_ENVIRONMENT = "Web_PreClient";
  BasicConstants.LANGUAGE_GERMAN = "de";
  BasicConstants.LANGUAGE_ENGLISH = "en";
  BasicConstants.LANGUAGE_ARABIC = "ar";
  BasicConstants.LANGUAGE_CZECH = "cs";
  BasicConstants.LANGUAGE_CHINESE_SIMPLE = "zh_CN";
  BasicConstants.LANGUAGE_CHINESE_TRADITIONAL = "zh_TW";
  BasicConstants.LANGUAGE_DANISH = "da";
  BasicConstants.LANGUAGE_DUTCH = "nl";
  BasicConstants.LANGUAGE_FINNISH = "fi";
  BasicConstants.LANGUAGE_FRENCH = "fr";
  BasicConstants.LANGUAGE_GREECE = "el";
  BasicConstants.LANGUAGE_HUNGARIAN = "hu";
  BasicConstants.LANGUAGE_ITALIAN = "it";
  BasicConstants.LANGUAGE_JAPANESE = "ja";
  BasicConstants.LANGUAGE_KOREAN = "ko";
  BasicConstants.LANGUAGE_NORWEGIAN = "no";
  BasicConstants.LANGUAGE_POLISH = "pl";
  BasicConstants.LANGUAGE_PORTUGUESE = "pt";
  BasicConstants.LANGUAGE_RUSSIAN = "ru";
  BasicConstants.LANGUAGE_SPANISH = "es";
  BasicConstants.LANGUAGE_SWEDISH = "sv";
  BasicConstants.LANGUAGE_TURKISH = "tr";
  BasicConstants.LANGUAGE_BULGARIAN = "bg";
  BasicConstants.LANGUAGE_SLOVAKIAN = "sk";
  BasicConstants.LANGUAGE_ROMANIAN = "ro";
  BasicConstants.KOREA_INSTANCE_ID = 23;
  BasicConstants.FONT_ALIAS_HEADER = "_HeaderFont";
  BasicConstants.FONT_ALIAS_BODY = "_BodyFont";
  return BasicConstants;
}();
exports.BasicConstants = i;