Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleServerMessageArrivedEvent(t, i = null, n = false, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = i;
    return a;
  }
  n.__extends(CastleServerMessageArrivedEvent, e);
  CastleServerMessageArrivedEvent.JAA_ARRIVED = "JAA_ARRIVED";
  CastleServerMessageArrivedEvent.ETC_ARRIVED = "ETC_ARRIVED";
  CastleServerMessageArrivedEvent.GAA_ARRIVED = "GAA_ARRIVED";
  CastleServerMessageArrivedEvent.TXI_ARRIVED = "TXI_ARRIVED";
  CastleServerMessageArrivedEvent.CPS_ARRIVED = "CPS_ARRIVED";
  CastleServerMessageArrivedEvent.ARC_ARRIVED = "ARC_ARRIVED";
  CastleServerMessageArrivedEvent.FNM_ARRIVED = "FNM_ARRIVED";
  CastleServerMessageArrivedEvent.SDC_ARRIVED = "SDC_ARRIVED";
  CastleServerMessageArrivedEvent.SCP_ARRIVED = "SCP_ARRIVED";
  CastleServerMessageArrivedEvent.CIC_ARRIVED = "CIC_ARRIVED";
  CastleServerMessageArrivedEvent.SUR_ARRIVED = "SUR_ARRIVED";
  CastleServerMessageArrivedEvent.GCC_ARRIVED = "GCC_ARRIVED";
  CastleServerMessageArrivedEvent.DCI_ARRIVED = "DCI_ARRIVED";
  CastleServerMessageArrivedEvent.RFI_ARRIVED = "RFI_ARRIVED";
  CastleServerMessageArrivedEvent.MNS_ARRIVED = "MNS_ARRIVED";
  CastleServerMessageArrivedEvent.AJP_ARRIVED = "AJP_ARRIVED";
  CastleServerMessageArrivedEvent.CPE_ARRIVED = "CPE_ARRIVED";
  CastleServerMessageArrivedEvent.CPD_ARRIVED = "CPD_ARRIVED";
  CastleServerMessageArrivedEvent.UBC_ARRIVED = "UBC_ARRIVED";
  CastleServerMessageArrivedEvent.FCE_ARRIVED = "FCE_ARRIVED";
  CastleServerMessageArrivedEvent.PRE_ARRIVED = "PRE_ARRIVED";
  CastleServerMessageArrivedEvent.CPNE_ARRIVED = "CPNE_ARRIVED";
  CastleServerMessageArrivedEvent.GNCI_ARRIVED = "GNCI_ARRIVED";
  CastleServerMessageArrivedEvent.RMC_ARRIVED = "RMC_ARRIVED";
  CastleServerMessageArrivedEvent.SPSLMS_ARRIVED = "SPSLMS_ARRIVED";
  CastleServerMessageArrivedEvent.SPECIAL_SEVER_INFO_ARRIVED = "GLT_ARRIVED";
  CastleServerMessageArrivedEvent.OLE_LOOT_BOX_ARRIVED = "OLE_ARRIVED";
  CastleServerMessageArrivedEvent.ABG_PERFORMANCE_ALLIANCE_ARRIVED = "ABG_PERFORMANCE_ALLIANCE_ARRIVED";
  CastleServerMessageArrivedEvent.PERFORMANCE_PLAYER_ARRIVED = "ABG_PERFORMANCE_PLAYER_ARRIVED";
  CastleServerMessageArrivedEvent.ABG_TIMERS = "ABG_TIMERS";
  CastleServerMessageArrivedEvent.ABG_TOWER_CASTLES_INFO = "ABG_TOWER_CASTLES_INFO";
  CastleServerMessageArrivedEvent.ABG_TOWERS_LIST_INFO = "ABG_TOWERS_LIST_INFO";
  CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO = "ABG_TOWERS_BUFF_INFO";
  CastleServerMessageArrivedEvent.FORTUNE_TELLER_REWARD_ARRIVED = "FORTUNE_TELLER_REWARD_ARRIVED";
  CastleServerMessageArrivedEvent.GLOBAL_EFFECT_BUFFED = "GLOBAL_EFFECT_BUFFED";
  CastleServerMessageArrivedEvent.SSC_ARRIVED = "SSC_ARRIVED";
  CastleServerMessageArrivedEvent.UPV_SENT = "UPV_SENT";
  return CastleServerMessageArrivedEvent;
}(createjs.Event);
exports.CastleServerMessageArrivedEvent = o;