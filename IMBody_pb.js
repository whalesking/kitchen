// source: IMBody.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.tcim.AllowMic', null, global);
goog.exportSymbol('proto.tcim.ApplyMic', null, global);
goog.exportSymbol('proto.tcim.CancleApplyMic', null, global);
goog.exportSymbol('proto.tcim.ChangeMicPosition', null, global);
goog.exportSymbol('proto.tcim.DeleteRoomMicIncome', null, global);
goog.exportSymbol('proto.tcim.EmojInfo', null, global);
goog.exportSymbol('proto.tcim.EnterRoom', null, global);
goog.exportSymbol('proto.tcim.FailUpMic', null, global);
goog.exportSymbol('proto.tcim.FloatingGame', null, global);
goog.exportSymbol('proto.tcim.FloatingGiftSend', null, global);
goog.exportSymbol('proto.tcim.FloatingGiftSendGift', null, global);
goog.exportSymbol('proto.tcim.FloatingLuckGift', null, global);
goog.exportSymbol('proto.tcim.FloatingRoom', null, global);
goog.exportSymbol('proto.tcim.FloatingScreen', null, global);
goog.exportSymbol('proto.tcim.GameGift', null, global);
goog.exportSymbol('proto.tcim.GameInfo', null, global);
goog.exportSymbol('proto.tcim.Gift', null, global);
goog.exportSymbol('proto.tcim.GiftRoom', null, global);
goog.exportSymbol('proto.tcim.GiftSend', null, global);
goog.exportSymbol('proto.tcim.GoHangUpMic', null, global);
goog.exportSymbol('proto.tcim.GoUpMic', null, global);
goog.exportSymbol('proto.tcim.GuessScheduleStatusChange', null, global);
goog.exportSymbol('proto.tcim.HangUpMic', null, global);
goog.exportSymbol('proto.tcim.HeadLineFloatingScreen', null, global);
goog.exportSymbol('proto.tcim.InviteJoinRoom', null, global);
goog.exportSymbol('proto.tcim.LeaveRoom', null, global);
goog.exportSymbol('proto.tcim.LockRoomMic', null, global);
goog.exportSymbol('proto.tcim.LockRoomMicMap', null, global);
goog.exportSymbol('proto.tcim.MusicPlayNotify', null, global);
goog.exportSymbol('proto.tcim.MuteRoomMic', null, global);
goog.exportSymbol('proto.tcim.PKInvitation', null, global);
goog.exportSymbol('proto.tcim.PKInvitationFeedback', null, global);
goog.exportSymbol('proto.tcim.PKScoreRefresh', null, global);
goog.exportSymbol('proto.tcim.PKStateChange', null, global);
goog.exportSymbol('proto.tcim.PlayGame', null, global);
goog.exportSymbol('proto.tcim.RandomPKMatched', null, global);
goog.exportSymbol('proto.tcim.RefuseApplyMic', null, global);
goog.exportSymbol('proto.tcim.Room2022ValentineDayGift', null, global);
goog.exportSymbol('proto.tcim.Room2022ValentineDayStreamer', null, global);
goog.exportSymbol('proto.tcim.Room2022ValentineDayUser', null, global);
goog.exportSymbol('proto.tcim.RoomEndLiving', null, global);
goog.exportSymbol('proto.tcim.RoomForceEndLiving', null, global);
goog.exportSymbol('proto.tcim.RoomHeartMod', null, global);
goog.exportSymbol('proto.tcim.RoomHeartModChooseResult', null, global);
goog.exportSymbol('proto.tcim.RoomHeartModHeartResult', null, global);
goog.exportSymbol('proto.tcim.RoomHwdCirclePoised', null, global);
goog.exportSymbol('proto.tcim.RoomManage', null, global);
goog.exportSymbol('proto.tcim.RoomModMvpAndClownInfo', null, global);
goog.exportSymbol('proto.tcim.RoomOpenLive', null, global);
goog.exportSymbol('proto.tcim.RoomPassword', null, global);
goog.exportSymbol('proto.tcim.RoomPkMod', null, global);
goog.exportSymbol('proto.tcim.RoomSendRedPack', null, global);
goog.exportSymbol('proto.tcim.RoomSystemMsg', null, global);
goog.exportSymbol('proto.tcim.SendLuckGiftAward', null, global);
goog.exportSymbol('proto.tcim.SendLuckGiftGive', null, global);
goog.exportSymbol('proto.tcim.SendLuckGiftSystem', null, global);
goog.exportSymbol('proto.tcim.SocketUser', null, global);
goog.exportSymbol('proto.tcim.SpeakMsg', null, global);
goog.exportSymbol('proto.tcim.SuccessUpMic', null, global);
goog.exportSymbol('proto.tcim.SyncUserWallet', null, global);
goog.exportSymbol('proto.tcim.UpdateRoomBg', null, global);
goog.exportSymbol('proto.tcim.UpdateRoomMod', null, global);
goog.exportSymbol('proto.tcim.UpdateRoomTopic', null, global);
goog.exportSymbol('proto.tcim.User2022ValentineDayMessageTop', null, global);
goog.exportSymbol('proto.tcim.UserAccostText', null, global);
goog.exportSymbol('proto.tcim.UserAirTicket', null, global);
goog.exportSymbol('proto.tcim.UserDress', null, global);
goog.exportSymbol('proto.tcim.UserFollowFeedNotice', null, global);
goog.exportSymbol('proto.tcim.UserInteractNotice', null, global);
goog.exportSymbol('proto.tcim.UserMessageTop', null, global);
goog.exportSymbol('proto.tcim.UserMessageTopProp', null, global);
goog.exportSymbol('proto.tcim.UserPrivateMode', null, global);
goog.exportSymbol('proto.tcim.UserPrivateRisk', null, global);
goog.exportSymbol('proto.tcim.UserTextInformation', null, global);
goog.exportSymbol('proto.tcim.UserTrueLove', null, global);
goog.exportSymbol('proto.tcim.UserUpgrade', null, global);
goog.exportSymbol('proto.tcim.UserVisitNotice', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.EnterRoom = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tcim.EnterRoom.repeatedFields_, null);
};
goog.inherits(proto.tcim.EnterRoom, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.EnterRoom.displayName = 'proto.tcim.EnterRoom';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.LeaveRoom = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.LeaveRoom, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.LeaveRoom.displayName = 'proto.tcim.LeaveRoom';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.ApplyMic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.ApplyMic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.ApplyMic.displayName = 'proto.tcim.ApplyMic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.CancleApplyMic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.CancleApplyMic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.CancleApplyMic.displayName = 'proto.tcim.CancleApplyMic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.GoUpMic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.GoUpMic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.GoUpMic.displayName = 'proto.tcim.GoUpMic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.SuccessUpMic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.SuccessUpMic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.SuccessUpMic.displayName = 'proto.tcim.SuccessUpMic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.FailUpMic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.FailUpMic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.FailUpMic.displayName = 'proto.tcim.FailUpMic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RefuseApplyMic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RefuseApplyMic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RefuseApplyMic.displayName = 'proto.tcim.RefuseApplyMic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.LockRoomMic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tcim.LockRoomMic.repeatedFields_, null);
};
goog.inherits(proto.tcim.LockRoomMic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.LockRoomMic.displayName = 'proto.tcim.LockRoomMic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.LockRoomMicMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.LockRoomMicMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.LockRoomMicMap.displayName = 'proto.tcim.LockRoomMicMap';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.MuteRoomMic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.MuteRoomMic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.MuteRoomMic.displayName = 'proto.tcim.MuteRoomMic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.HangUpMic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.HangUpMic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.HangUpMic.displayName = 'proto.tcim.HangUpMic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.ChangeMicPosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.ChangeMicPosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.ChangeMicPosition.displayName = 'proto.tcim.ChangeMicPosition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RoomPassword = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RoomPassword, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RoomPassword.displayName = 'proto.tcim.RoomPassword';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UpdateRoomBg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UpdateRoomBg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UpdateRoomBg.displayName = 'proto.tcim.UpdateRoomBg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UpdateRoomMod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UpdateRoomMod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UpdateRoomMod.displayName = 'proto.tcim.UpdateRoomMod';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UpdateRoomTopic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UpdateRoomTopic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UpdateRoomTopic.displayName = 'proto.tcim.UpdateRoomTopic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.GoHangUpMic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.GoHangUpMic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.GoHangUpMic.displayName = 'proto.tcim.GoHangUpMic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RoomSystemMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RoomSystemMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RoomSystemMsg.displayName = 'proto.tcim.RoomSystemMsg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.SpeakMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.SpeakMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.SpeakMsg.displayName = 'proto.tcim.SpeakMsg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.SocketUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tcim.SocketUser.repeatedFields_, null);
};
goog.inherits(proto.tcim.SocketUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.SocketUser.displayName = 'proto.tcim.SocketUser';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.EmojInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.EmojInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.EmojInfo.displayName = 'proto.tcim.EmojInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.SyncUserWallet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.SyncUserWallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.SyncUserWallet.displayName = 'proto.tcim.SyncUserWallet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.GiftRoom = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.GiftRoom, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.GiftRoom.displayName = 'proto.tcim.GiftRoom';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.Gift = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.Gift, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.Gift.displayName = 'proto.tcim.Gift';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.GiftSend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tcim.GiftSend.repeatedFields_, null);
};
goog.inherits(proto.tcim.GiftSend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.GiftSend.displayName = 'proto.tcim.GiftSend';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.DeleteRoomMicIncome = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.DeleteRoomMicIncome, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.DeleteRoomMicIncome.displayName = 'proto.tcim.DeleteRoomMicIncome';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RoomPkMod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RoomPkMod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RoomPkMod.displayName = 'proto.tcim.RoomPkMod';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RoomModMvpAndClownInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RoomModMvpAndClownInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RoomModMvpAndClownInfo.displayName = 'proto.tcim.RoomModMvpAndClownInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RoomHeartMod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tcim.RoomHeartMod.repeatedFields_, null);
};
goog.inherits(proto.tcim.RoomHeartMod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RoomHeartMod.displayName = 'proto.tcim.RoomHeartMod';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RoomHeartModChooseResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RoomHeartModChooseResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RoomHeartModChooseResult.displayName = 'proto.tcim.RoomHeartModChooseResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RoomHeartModHeartResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RoomHeartModHeartResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RoomHeartModHeartResult.displayName = 'proto.tcim.RoomHeartModHeartResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.FloatingScreen = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.FloatingScreen, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.FloatingScreen.displayName = 'proto.tcim.FloatingScreen';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.FloatingLuckGift = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.FloatingLuckGift, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.FloatingLuckGift.displayName = 'proto.tcim.FloatingLuckGift';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.FloatingRoom = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.FloatingRoom, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.FloatingRoom.displayName = 'proto.tcim.FloatingRoom';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.FloatingGiftSend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tcim.FloatingGiftSend.repeatedFields_, null);
};
goog.inherits(proto.tcim.FloatingGiftSend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.FloatingGiftSend.displayName = 'proto.tcim.FloatingGiftSend';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.FloatingGiftSendGift = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.FloatingGiftSendGift, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.FloatingGiftSendGift.displayName = 'proto.tcim.FloatingGiftSendGift';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.FloatingGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.FloatingGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.FloatingGame.displayName = 'proto.tcim.FloatingGame';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.AllowMic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.AllowMic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.AllowMic.displayName = 'proto.tcim.AllowMic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.PlayGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tcim.PlayGame.repeatedFields_, null);
};
goog.inherits(proto.tcim.PlayGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.PlayGame.displayName = 'proto.tcim.PlayGame';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.GameGift = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.GameGift, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.GameGift.displayName = 'proto.tcim.GameGift';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.GameInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.GameInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.GameInfo.displayName = 'proto.tcim.GameInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RoomEndLiving = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RoomEndLiving, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RoomEndLiving.displayName = 'proto.tcim.RoomEndLiving';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UserUpgrade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UserUpgrade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UserUpgrade.displayName = 'proto.tcim.UserUpgrade';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RoomManage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RoomManage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RoomManage.displayName = 'proto.tcim.RoomManage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RoomHwdCirclePoised = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RoomHwdCirclePoised, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RoomHwdCirclePoised.displayName = 'proto.tcim.RoomHwdCirclePoised';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RoomSendRedPack = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RoomSendRedPack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RoomSendRedPack.displayName = 'proto.tcim.RoomSendRedPack';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.SendLuckGiftSystem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tcim.SendLuckGiftSystem.repeatedFields_, null);
};
goog.inherits(proto.tcim.SendLuckGiftSystem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.SendLuckGiftSystem.displayName = 'proto.tcim.SendLuckGiftSystem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RoomForceEndLiving = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RoomForceEndLiving, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RoomForceEndLiving.displayName = 'proto.tcim.RoomForceEndLiving';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.HeadLineFloatingScreen = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.HeadLineFloatingScreen, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.HeadLineFloatingScreen.displayName = 'proto.tcim.HeadLineFloatingScreen';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.Room2022ValentineDayStreamer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.Room2022ValentineDayStreamer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.Room2022ValentineDayStreamer.displayName = 'proto.tcim.Room2022ValentineDayStreamer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.Room2022ValentineDayUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.Room2022ValentineDayUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.Room2022ValentineDayUser.displayName = 'proto.tcim.Room2022ValentineDayUser';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.Room2022ValentineDayGift = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.Room2022ValentineDayGift, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.Room2022ValentineDayGift.displayName = 'proto.tcim.Room2022ValentineDayGift';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.SendLuckGiftAward = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.SendLuckGiftAward, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.SendLuckGiftAward.displayName = 'proto.tcim.SendLuckGiftAward';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.SendLuckGiftGive = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.SendLuckGiftGive, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.SendLuckGiftGive.displayName = 'proto.tcim.SendLuckGiftGive';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.MusicPlayNotify = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.MusicPlayNotify, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.MusicPlayNotify.displayName = 'proto.tcim.MusicPlayNotify';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UserTextInformation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UserTextInformation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UserTextInformation.displayName = 'proto.tcim.UserTextInformation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UserDress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UserDress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UserDress.displayName = 'proto.tcim.UserDress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UserTrueLove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UserTrueLove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UserTrueLove.displayName = 'proto.tcim.UserTrueLove';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UserPrivateMode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tcim.UserPrivateMode.repeatedFields_, null);
};
goog.inherits(proto.tcim.UserPrivateMode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UserPrivateMode.displayName = 'proto.tcim.UserPrivateMode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UserAccostText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UserAccostText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UserAccostText.displayName = 'proto.tcim.UserAccostText';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UserPrivateRisk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UserPrivateRisk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UserPrivateRisk.displayName = 'proto.tcim.UserPrivateRisk';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UserInteractNotice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UserInteractNotice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UserInteractNotice.displayName = 'proto.tcim.UserInteractNotice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UserVisitNotice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UserVisitNotice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UserVisitNotice.displayName = 'proto.tcim.UserVisitNotice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UserFollowFeedNotice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UserFollowFeedNotice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UserFollowFeedNotice.displayName = 'proto.tcim.UserFollowFeedNotice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UserAirTicket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UserAirTicket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UserAirTicket.displayName = 'proto.tcim.UserAirTicket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UserMessageTop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tcim.UserMessageTop.repeatedFields_, null);
};
goog.inherits(proto.tcim.UserMessageTop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UserMessageTop.displayName = 'proto.tcim.UserMessageTop';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.UserMessageTopProp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.UserMessageTopProp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.UserMessageTopProp.displayName = 'proto.tcim.UserMessageTopProp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.User2022ValentineDayMessageTop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.User2022ValentineDayMessageTop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.User2022ValentineDayMessageTop.displayName = 'proto.tcim.User2022ValentineDayMessageTop';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.InviteJoinRoom = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.InviteJoinRoom, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.InviteJoinRoom.displayName = 'proto.tcim.InviteJoinRoom';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.PKInvitation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.PKInvitation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.PKInvitation.displayName = 'proto.tcim.PKInvitation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.PKInvitationFeedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.PKInvitationFeedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.PKInvitationFeedback.displayName = 'proto.tcim.PKInvitationFeedback';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RandomPKMatched = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RandomPKMatched, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RandomPKMatched.displayName = 'proto.tcim.RandomPKMatched';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.PKStateChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.PKStateChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.PKStateChange.displayName = 'proto.tcim.PKStateChange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.PKScoreRefresh = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.PKScoreRefresh, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.PKScoreRefresh.displayName = 'proto.tcim.PKScoreRefresh';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.RoomOpenLive = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.RoomOpenLive, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.RoomOpenLive.displayName = 'proto.tcim.RoomOpenLive';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tcim.GuessScheduleStatusChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcim.GuessScheduleStatusChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcim.GuessScheduleStatusChange.displayName = 'proto.tcim.GuessScheduleStatusChange';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tcim.EnterRoom.repeatedFields_ = [22];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.EnterRoom.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.EnterRoom.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.EnterRoom} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.EnterRoom.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nick: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 3, ""),
    identity: jspb.Message.getFieldWithDefault(msg, 4, 0),
    wealthLevel: jspb.Message.getFieldWithDefault(msg, 5, 0),
    creditLevel: jspb.Message.getFieldWithDefault(msg, 6, 0),
    isTrueLove: jspb.Message.getFieldWithDefault(msg, 7, 0),
    trueLoveLevel: jspb.Message.getFieldWithDefault(msg, 8, 0),
    trueLoveName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    nobleLevel: jspb.Message.getFieldWithDefault(msg, 10, 0),
    isNew: jspb.Message.getFieldWithDefault(msg, 11, 0),
    isFollow: jspb.Message.getFieldWithDefault(msg, 12, 0),
    isBan: jspb.Message.getFieldWithDefault(msg, 13, 0),
    isManager: jspb.Message.getFieldWithDefault(msg, 14, 0),
    isHost: jspb.Message.getFieldWithDefault(msg, 15, 0),
    micStatus: jspb.Message.getFieldWithDefault(msg, 16, 0),
    rNum: jspb.Message.getFieldWithDefault(msg, 17, 0),
    vNum: jspb.Message.getFieldWithDefault(msg, 18, 0),
    idx: jspb.Message.getFieldWithDefault(msg, 19, 0),
    repeat: jspb.Message.getFieldWithDefault(msg, 20, 0),
    isStealth: jspb.Message.getFieldWithDefault(msg, 21, 0),
    badgeList: (f = jspb.Message.getRepeatedField(msg, 22)) == null ? undefined : f,
    car: jspb.Message.getFieldWithDefault(msg, 23, 0),
    micIsMute: jspb.Message.getFieldWithDefault(msg, 24, 0),
    isHaveRed: jspb.Message.getFieldWithDefault(msg, 25, 0),
    entrance: jspb.Message.getFieldWithDefault(msg, 26, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.EnterRoom}
 */
proto.tcim.EnterRoom.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.EnterRoom;
  return proto.tcim.EnterRoom.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.EnterRoom} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.EnterRoom}
 */
proto.tcim.EnterRoom.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNick(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIdentity(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWealthLevel(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreditLevel(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsTrueLove(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTrueLoveLevel(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrueLoveName(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNobleLevel(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsNew(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsFollow(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsBan(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsManager(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsHost(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMicStatus(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRNum(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVNum(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIdx(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRepeat(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsStealth(value);
      break;
    case 22:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBadge(values[i]);
      }
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCar(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMicIsMute(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsHaveRed(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEntrance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.EnterRoom.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.EnterRoom.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.EnterRoom} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.EnterRoom.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNick();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIdentity();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getWealthLevel();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getCreditLevel();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getIsTrueLove();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getTrueLoveLevel();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getTrueLoveName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getNobleLevel();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getIsNew();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getIsFollow();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getIsBan();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = message.getIsManager();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = message.getIsHost();
  if (f !== 0) {
    writer.writeUint32(
      15,
      f
    );
  }
  f = message.getMicStatus();
  if (f !== 0) {
    writer.writeUint32(
      16,
      f
    );
  }
  f = message.getRNum();
  if (f !== 0) {
    writer.writeUint32(
      17,
      f
    );
  }
  f = message.getVNum();
  if (f !== 0) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = message.getIdx();
  if (f !== 0) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = message.getRepeat();
  if (f !== 0) {
    writer.writeUint32(
      20,
      f
    );
  }
  f = message.getIsStealth();
  if (f !== 0) {
    writer.writeUint32(
      21,
      f
    );
  }
  f = message.getBadgeList();
  if (f.length > 0) {
    writer.writePackedInt64(
      22,
      f
    );
  }
  f = message.getCar();
  if (f !== 0) {
    writer.writeInt64(
      23,
      f
    );
  }
  f = message.getMicIsMute();
  if (f !== 0) {
    writer.writeUint32(
      24,
      f
    );
  }
  f = message.getIsHaveRed();
  if (f !== 0) {
    writer.writeUint32(
      25,
      f
    );
  }
  f = message.getEntrance();
  if (f !== 0) {
    writer.writeUint32(
      26,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nick = 2;
 * @return {string}
 */
proto.tcim.EnterRoom.prototype.getNick = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setNick = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string avatar = 3;
 * @return {string}
 */
proto.tcim.EnterRoom.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 identity = 4;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getIdentity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setIdentity = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 wealth_level = 5;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getWealthLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setWealthLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 credit_level = 6;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getCreditLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setCreditLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 is_true_love = 7;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getIsTrueLove = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setIsTrueLove = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 true_love_level = 8;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getTrueLoveLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setTrueLoveLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string true_love_name = 9;
 * @return {string}
 */
proto.tcim.EnterRoom.prototype.getTrueLoveName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setTrueLoveName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional uint32 noble_level = 10;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getNobleLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setNobleLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 is_new = 11;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getIsNew = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setIsNew = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 is_follow = 12;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getIsFollow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setIsFollow = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint32 is_ban = 13;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getIsBan = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setIsBan = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint32 is_manager = 14;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getIsManager = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setIsManager = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional uint32 is_host = 15;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getIsHost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setIsHost = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional uint32 mic_status = 16;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getMicStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setMicStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional uint32 r_num = 17;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getRNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setRNum = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional uint32 v_num = 18;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getVNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setVNum = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional uint32 idx = 19;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getIdx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setIdx = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional uint32 repeat = 20;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getRepeat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setRepeat = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional uint32 is_stealth = 21;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getIsStealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setIsStealth = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * repeated int64 badge = 22;
 * @return {!Array<number>}
 */
proto.tcim.EnterRoom.prototype.getBadgeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 22));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setBadgeList = function(value) {
  return jspb.Message.setField(this, 22, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.addBadge = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 22, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.clearBadgeList = function() {
  return this.setBadgeList([]);
};


/**
 * optional int64 car = 23;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getCar = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setCar = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional uint32 mic_is_mute = 24;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getMicIsMute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setMicIsMute = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional uint32 is_have_red = 25;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getIsHaveRed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setIsHaveRed = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional uint32 entrance = 26;
 * @return {number}
 */
proto.tcim.EnterRoom.prototype.getEntrance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EnterRoom} returns this
 */
proto.tcim.EnterRoom.prototype.setEntrance = function(value) {
  return jspb.Message.setProto3IntField(this, 26, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.LeaveRoom.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.LeaveRoom.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.LeaveRoom} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.LeaveRoom.toObject = function(includeInstance, msg) {
  var f, obj = {
    rNum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    vNum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.LeaveRoom}
 */
proto.tcim.LeaveRoom.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.LeaveRoom;
  return proto.tcim.LeaveRoom.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.LeaveRoom} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.LeaveRoom}
 */
proto.tcim.LeaveRoom.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRNum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVNum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.LeaveRoom.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.LeaveRoom.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.LeaveRoom} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.LeaveRoom.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRNum();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getVNum();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint32 r_num = 1;
 * @return {number}
 */
proto.tcim.LeaveRoom.prototype.getRNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.LeaveRoom} returns this
 */
proto.tcim.LeaveRoom.prototype.setRNum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 v_num = 2;
 * @return {number}
 */
proto.tcim.LeaveRoom.prototype.getVNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.LeaveRoom} returns this
 */
proto.tcim.LeaveRoom.prototype.setVNum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 uid = 3;
 * @return {number}
 */
proto.tcim.LeaveRoom.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.LeaveRoom} returns this
 */
proto.tcim.LeaveRoom.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.ApplyMic.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.ApplyMic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.ApplyMic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.ApplyMic.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nickname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    micApplyCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    headimage: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.ApplyMic}
 */
proto.tcim.ApplyMic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.ApplyMic;
  return proto.tcim.ApplyMic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.ApplyMic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.ApplyMic}
 */
proto.tcim.ApplyMic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMicApplyCount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeadimage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.ApplyMic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.ApplyMic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.ApplyMic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.ApplyMic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMicApplyCount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getHeadimage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.ApplyMic.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.ApplyMic} returns this
 */
proto.tcim.ApplyMic.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nickname = 2;
 * @return {string}
 */
proto.tcim.ApplyMic.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.ApplyMic} returns this
 */
proto.tcim.ApplyMic.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 mic_apply_count = 3;
 * @return {number}
 */
proto.tcim.ApplyMic.prototype.getMicApplyCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.ApplyMic} returns this
 */
proto.tcim.ApplyMic.prototype.setMicApplyCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string headimage = 4;
 * @return {string}
 */
proto.tcim.ApplyMic.prototype.getHeadimage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.ApplyMic} returns this
 */
proto.tcim.ApplyMic.prototype.setHeadimage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.CancleApplyMic.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.CancleApplyMic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.CancleApplyMic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.CancleApplyMic.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    micApplyCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.CancleApplyMic}
 */
proto.tcim.CancleApplyMic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.CancleApplyMic;
  return proto.tcim.CancleApplyMic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.CancleApplyMic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.CancleApplyMic}
 */
proto.tcim.CancleApplyMic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMicApplyCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.CancleApplyMic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.CancleApplyMic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.CancleApplyMic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.CancleApplyMic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMicApplyCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.CancleApplyMic.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.CancleApplyMic} returns this
 */
proto.tcim.CancleApplyMic.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 mic_apply_count = 2;
 * @return {number}
 */
proto.tcim.CancleApplyMic.prototype.getMicApplyCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.CancleApplyMic} returns this
 */
proto.tcim.CancleApplyMic.prototype.setMicApplyCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.GoUpMic.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.GoUpMic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.GoUpMic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GoUpMic.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isInviteMic: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.GoUpMic}
 */
proto.tcim.GoUpMic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.GoUpMic;
  return proto.tcim.GoUpMic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.GoUpMic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.GoUpMic}
 */
proto.tcim.GoUpMic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsInviteMic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.GoUpMic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.GoUpMic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.GoUpMic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GoUpMic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getIsInviteMic();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.GoUpMic.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GoUpMic} returns this
 */
proto.tcim.GoUpMic.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 rid = 2;
 * @return {number}
 */
proto.tcim.GoUpMic.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GoUpMic} returns this
 */
proto.tcim.GoUpMic.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 is_invite_mic = 3;
 * @return {number}
 */
proto.tcim.GoUpMic.prototype.getIsInviteMic = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GoUpMic} returns this
 */
proto.tcim.GoUpMic.prototype.setIsInviteMic = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.SuccessUpMic.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.SuccessUpMic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.SuccessUpMic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SuccessUpMic.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    micId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nick: jspb.Message.getFieldWithDefault(msg, 3, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 4, ""),
    micIncome: jspb.Message.getFieldWithDefault(msg, 5, 0),
    micMute: jspb.Message.getFieldWithDefault(msg, 6, 0),
    avatarFrame: jspb.Message.getFieldWithDefault(msg, 7, 0),
    frameRatio: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    micApplyCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    isInviteMic: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.SuccessUpMic}
 */
proto.tcim.SuccessUpMic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.SuccessUpMic;
  return proto.tcim.SuccessUpMic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.SuccessUpMic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.SuccessUpMic}
 */
proto.tcim.SuccessUpMic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMicId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNick(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMicIncome(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMicMute(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAvatarFrame(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFrameRatio(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMicApplyCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsInviteMic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.SuccessUpMic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.SuccessUpMic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.SuccessUpMic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SuccessUpMic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMicId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getNick();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMicIncome();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getMicMute();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getAvatarFrame();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getFrameRatio();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getMicApplyCount();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getIsInviteMic();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.SuccessUpMic.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SuccessUpMic} returns this
 */
proto.tcim.SuccessUpMic.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 mic_id = 2;
 * @return {number}
 */
proto.tcim.SuccessUpMic.prototype.getMicId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SuccessUpMic} returns this
 */
proto.tcim.SuccessUpMic.prototype.setMicId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string nick = 3;
 * @return {string}
 */
proto.tcim.SuccessUpMic.prototype.getNick = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.SuccessUpMic} returns this
 */
proto.tcim.SuccessUpMic.prototype.setNick = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string avatar = 4;
 * @return {string}
 */
proto.tcim.SuccessUpMic.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.SuccessUpMic} returns this
 */
proto.tcim.SuccessUpMic.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 mic_income = 5;
 * @return {number}
 */
proto.tcim.SuccessUpMic.prototype.getMicIncome = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SuccessUpMic} returns this
 */
proto.tcim.SuccessUpMic.prototype.setMicIncome = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 mic_mute = 6;
 * @return {number}
 */
proto.tcim.SuccessUpMic.prototype.getMicMute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SuccessUpMic} returns this
 */
proto.tcim.SuccessUpMic.prototype.setMicMute = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 avatar_frame = 7;
 * @return {number}
 */
proto.tcim.SuccessUpMic.prototype.getAvatarFrame = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SuccessUpMic} returns this
 */
proto.tcim.SuccessUpMic.prototype.setAvatarFrame = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional float frame_ratio = 8;
 * @return {number}
 */
proto.tcim.SuccessUpMic.prototype.getFrameRatio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SuccessUpMic} returns this
 */
proto.tcim.SuccessUpMic.prototype.setFrameRatio = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional uint32 mic_apply_count = 9;
 * @return {number}
 */
proto.tcim.SuccessUpMic.prototype.getMicApplyCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SuccessUpMic} returns this
 */
proto.tcim.SuccessUpMic.prototype.setMicApplyCount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 is_invite_mic = 10;
 * @return {number}
 */
proto.tcim.SuccessUpMic.prototype.getIsInviteMic = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SuccessUpMic} returns this
 */
proto.tcim.SuccessUpMic.prototype.setIsInviteMic = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.FailUpMic.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.FailUpMic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.FailUpMic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FailUpMic.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    micApplyCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.FailUpMic}
 */
proto.tcim.FailUpMic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.FailUpMic;
  return proto.tcim.FailUpMic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.FailUpMic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.FailUpMic}
 */
proto.tcim.FailUpMic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMicApplyCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.FailUpMic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.FailUpMic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.FailUpMic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FailUpMic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMicApplyCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.FailUpMic.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.FailUpMic} returns this
 */
proto.tcim.FailUpMic.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 mic_apply_count = 2;
 * @return {number}
 */
proto.tcim.FailUpMic.prototype.getMicApplyCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.FailUpMic} returns this
 */
proto.tcim.FailUpMic.prototype.setMicApplyCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RefuseApplyMic.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RefuseApplyMic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RefuseApplyMic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RefuseApplyMic.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    micApplyCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RefuseApplyMic}
 */
proto.tcim.RefuseApplyMic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RefuseApplyMic;
  return proto.tcim.RefuseApplyMic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RefuseApplyMic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RefuseApplyMic}
 */
proto.tcim.RefuseApplyMic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMicApplyCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RefuseApplyMic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RefuseApplyMic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RefuseApplyMic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RefuseApplyMic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMicApplyCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.RefuseApplyMic.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RefuseApplyMic} returns this
 */
proto.tcim.RefuseApplyMic.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 mic_apply_count = 2;
 * @return {number}
 */
proto.tcim.RefuseApplyMic.prototype.getMicApplyCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RefuseApplyMic} returns this
 */
proto.tcim.RefuseApplyMic.prototype.setMicApplyCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tcim.LockRoomMic.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.LockRoomMic.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.LockRoomMic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.LockRoomMic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.LockRoomMic.toObject = function(includeInstance, msg) {
  var f, obj = {
    listsList: jspb.Message.toObjectList(msg.getListsList(),
    proto.tcim.LockRoomMicMap.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.LockRoomMic}
 */
proto.tcim.LockRoomMic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.LockRoomMic;
  return proto.tcim.LockRoomMic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.LockRoomMic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.LockRoomMic}
 */
proto.tcim.LockRoomMic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tcim.LockRoomMicMap;
      reader.readMessage(value,proto.tcim.LockRoomMicMap.deserializeBinaryFromReader);
      msg.addLists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.LockRoomMic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.LockRoomMic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.LockRoomMic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.LockRoomMic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tcim.LockRoomMicMap.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LockRoomMicMap lists = 1;
 * @return {!Array<!proto.tcim.LockRoomMicMap>}
 */
proto.tcim.LockRoomMic.prototype.getListsList = function() {
  return /** @type{!Array<!proto.tcim.LockRoomMicMap>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tcim.LockRoomMicMap, 1));
};


/**
 * @param {!Array<!proto.tcim.LockRoomMicMap>} value
 * @return {!proto.tcim.LockRoomMic} returns this
*/
proto.tcim.LockRoomMic.prototype.setListsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tcim.LockRoomMicMap=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tcim.LockRoomMicMap}
 */
proto.tcim.LockRoomMic.prototype.addLists = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tcim.LockRoomMicMap, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tcim.LockRoomMic} returns this
 */
proto.tcim.LockRoomMic.prototype.clearListsList = function() {
  return this.setListsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.LockRoomMicMap.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.LockRoomMicMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.LockRoomMicMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.LockRoomMicMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    micId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isLock: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.LockRoomMicMap}
 */
proto.tcim.LockRoomMicMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.LockRoomMicMap;
  return proto.tcim.LockRoomMicMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.LockRoomMicMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.LockRoomMicMap}
 */
proto.tcim.LockRoomMicMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMicId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsLock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.LockRoomMicMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.LockRoomMicMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.LockRoomMicMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.LockRoomMicMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMicId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getIsLock();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 mic_id = 1;
 * @return {number}
 */
proto.tcim.LockRoomMicMap.prototype.getMicId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.LockRoomMicMap} returns this
 */
proto.tcim.LockRoomMicMap.prototype.setMicId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 is_lock = 2;
 * @return {number}
 */
proto.tcim.LockRoomMicMap.prototype.getIsLock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.LockRoomMicMap} returns this
 */
proto.tcim.LockRoomMicMap.prototype.setIsLock = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.MuteRoomMic.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.MuteRoomMic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.MuteRoomMic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.MuteRoomMic.toObject = function(includeInstance, msg) {
  var f, obj = {
    micId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isMute: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isByMute: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.MuteRoomMic}
 */
proto.tcim.MuteRoomMic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.MuteRoomMic;
  return proto.tcim.MuteRoomMic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.MuteRoomMic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.MuteRoomMic}
 */
proto.tcim.MuteRoomMic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMicId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsMute(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsByMute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.MuteRoomMic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.MuteRoomMic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.MuteRoomMic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.MuteRoomMic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMicId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getIsMute();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getIsByMute();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 mic_id = 1;
 * @return {number}
 */
proto.tcim.MuteRoomMic.prototype.getMicId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.MuteRoomMic} returns this
 */
proto.tcim.MuteRoomMic.prototype.setMicId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 uid = 2;
 * @return {number}
 */
proto.tcim.MuteRoomMic.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.MuteRoomMic} returns this
 */
proto.tcim.MuteRoomMic.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 is_mute = 3;
 * @return {number}
 */
proto.tcim.MuteRoomMic.prototype.getIsMute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.MuteRoomMic} returns this
 */
proto.tcim.MuteRoomMic.prototype.setIsMute = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 is_by_mute = 4;
 * @return {number}
 */
proto.tcim.MuteRoomMic.prototype.getIsByMute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.MuteRoomMic} returns this
 */
proto.tcim.MuteRoomMic.prototype.setIsByMute = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.HangUpMic.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.HangUpMic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.HangUpMic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.HangUpMic.toObject = function(includeInstance, msg) {
  var f, obj = {
    micId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isKickMic: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.HangUpMic}
 */
proto.tcim.HangUpMic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.HangUpMic;
  return proto.tcim.HangUpMic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.HangUpMic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.HangUpMic}
 */
proto.tcim.HangUpMic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMicId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsKickMic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.HangUpMic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.HangUpMic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.HangUpMic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.HangUpMic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMicId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getIsKickMic();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 mic_id = 1;
 * @return {number}
 */
proto.tcim.HangUpMic.prototype.getMicId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.HangUpMic} returns this
 */
proto.tcim.HangUpMic.prototype.setMicId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 uid = 2;
 * @return {number}
 */
proto.tcim.HangUpMic.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.HangUpMic} returns this
 */
proto.tcim.HangUpMic.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 is_kick_mic = 3;
 * @return {number}
 */
proto.tcim.HangUpMic.prototype.getIsKickMic = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.HangUpMic} returns this
 */
proto.tcim.HangUpMic.prototype.setIsKickMic = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.ChangeMicPosition.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.ChangeMicPosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.ChangeMicPosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.ChangeMicPosition.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromMicId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toMicId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.ChangeMicPosition}
 */
proto.tcim.ChangeMicPosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.ChangeMicPosition;
  return proto.tcim.ChangeMicPosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.ChangeMicPosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.ChangeMicPosition}
 */
proto.tcim.ChangeMicPosition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFromMicId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setToMicId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.ChangeMicPosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.ChangeMicPosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.ChangeMicPosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.ChangeMicPosition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromMicId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToMicId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint32 from_mic_id = 1;
 * @return {number}
 */
proto.tcim.ChangeMicPosition.prototype.getFromMicId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.ChangeMicPosition} returns this
 */
proto.tcim.ChangeMicPosition.prototype.setFromMicId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 to_mic_id = 2;
 * @return {number}
 */
proto.tcim.ChangeMicPosition.prototype.getToMicId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.ChangeMicPosition} returns this
 */
proto.tcim.ChangeMicPosition.prototype.setToMicId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 uid = 3;
 * @return {number}
 */
proto.tcim.ChangeMicPosition.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.ChangeMicPosition} returns this
 */
proto.tcim.ChangeMicPosition.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RoomPassword.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RoomPassword.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RoomPassword} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomPassword.toObject = function(includeInstance, msg) {
  var f, obj = {
    isLock: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RoomPassword}
 */
proto.tcim.RoomPassword.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RoomPassword;
  return proto.tcim.RoomPassword.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RoomPassword} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RoomPassword}
 */
proto.tcim.RoomPassword.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsLock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RoomPassword.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RoomPassword.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RoomPassword} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomPassword.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsLock();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 is_lock = 1;
 * @return {number}
 */
proto.tcim.RoomPassword.prototype.getIsLock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomPassword} returns this
 */
proto.tcim.RoomPassword.prototype.setIsLock = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UpdateRoomBg.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UpdateRoomBg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UpdateRoomBg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UpdateRoomBg.toObject = function(includeInstance, msg) {
  var f, obj = {
    backId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    backExt: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UpdateRoomBg}
 */
proto.tcim.UpdateRoomBg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UpdateRoomBg;
  return proto.tcim.UpdateRoomBg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UpdateRoomBg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UpdateRoomBg}
 */
proto.tcim.UpdateRoomBg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBackId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackExt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UpdateRoomBg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UpdateRoomBg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UpdateRoomBg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UpdateRoomBg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBackExt();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 back_id = 1;
 * @return {number}
 */
proto.tcim.UpdateRoomBg.prototype.getBackId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UpdateRoomBg} returns this
 */
proto.tcim.UpdateRoomBg.prototype.setBackId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string back_ext = 2;
 * @return {string}
 */
proto.tcim.UpdateRoomBg.prototype.getBackExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UpdateRoomBg} returns this
 */
proto.tcim.UpdateRoomBg.prototype.setBackExt = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UpdateRoomMod.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UpdateRoomMod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UpdateRoomMod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UpdateRoomMod.toObject = function(includeInstance, msg) {
  var f, obj = {
    mod: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UpdateRoomMod}
 */
proto.tcim.UpdateRoomMod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UpdateRoomMod;
  return proto.tcim.UpdateRoomMod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UpdateRoomMod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UpdateRoomMod}
 */
proto.tcim.UpdateRoomMod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UpdateRoomMod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UpdateRoomMod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UpdateRoomMod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UpdateRoomMod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMod();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 mod = 1;
 * @return {number}
 */
proto.tcim.UpdateRoomMod.prototype.getMod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UpdateRoomMod} returns this
 */
proto.tcim.UpdateRoomMod.prototype.setMod = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UpdateRoomTopic.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UpdateRoomTopic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UpdateRoomTopic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UpdateRoomTopic.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UpdateRoomTopic}
 */
proto.tcim.UpdateRoomTopic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UpdateRoomTopic;
  return proto.tcim.UpdateRoomTopic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UpdateRoomTopic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UpdateRoomTopic}
 */
proto.tcim.UpdateRoomTopic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UpdateRoomTopic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UpdateRoomTopic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UpdateRoomTopic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UpdateRoomTopic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.tcim.UpdateRoomTopic.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UpdateRoomTopic} returns this
 */
proto.tcim.UpdateRoomTopic.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.tcim.UpdateRoomTopic.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UpdateRoomTopic} returns this
 */
proto.tcim.UpdateRoomTopic.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.GoHangUpMic.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.GoHangUpMic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.GoHangUpMic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GoHangUpMic.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.GoHangUpMic}
 */
proto.tcim.GoHangUpMic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.GoHangUpMic;
  return proto.tcim.GoHangUpMic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.GoHangUpMic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.GoHangUpMic}
 */
proto.tcim.GoHangUpMic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.GoHangUpMic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.GoHangUpMic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.GoHangUpMic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GoHangUpMic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.GoHangUpMic.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GoHangUpMic} returns this
 */
proto.tcim.GoHangUpMic.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 rid = 2;
 * @return {number}
 */
proto.tcim.GoHangUpMic.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GoHangUpMic} returns this
 */
proto.tcim.GoHangUpMic.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RoomSystemMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RoomSystemMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RoomSystemMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomSystemMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    url: jspb.Message.getFieldWithDefault(msg, 4, ""),
    image: jspb.Message.getFieldWithDefault(msg, 5, ""),
    type: jspb.Message.getFieldWithDefault(msg, 6, 0),
    openType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    roomType: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RoomSystemMsg}
 */
proto.tcim.RoomSystemMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RoomSystemMsg;
  return proto.tcim.RoomSystemMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RoomSystemMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RoomSystemMsg}
 */
proto.tcim.RoomSystemMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOpenType(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RoomSystemMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RoomSystemMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RoomSystemMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomSystemMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getOpenType();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getRoomType();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * optional uint64 rid = 1;
 * @return {number}
 */
proto.tcim.RoomSystemMsg.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomSystemMsg} returns this
 */
proto.tcim.RoomSystemMsg.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 uid = 2;
 * @return {number}
 */
proto.tcim.RoomSystemMsg.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomSystemMsg} returns this
 */
proto.tcim.RoomSystemMsg.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.tcim.RoomSystemMsg.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.RoomSystemMsg} returns this
 */
proto.tcim.RoomSystemMsg.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string url = 4;
 * @return {string}
 */
proto.tcim.RoomSystemMsg.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.RoomSystemMsg} returns this
 */
proto.tcim.RoomSystemMsg.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string image = 5;
 * @return {string}
 */
proto.tcim.RoomSystemMsg.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.RoomSystemMsg} returns this
 */
proto.tcim.RoomSystemMsg.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 type = 6;
 * @return {number}
 */
proto.tcim.RoomSystemMsg.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomSystemMsg} returns this
 */
proto.tcim.RoomSystemMsg.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 open_type = 7;
 * @return {number}
 */
proto.tcim.RoomSystemMsg.prototype.getOpenType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomSystemMsg} returns this
 */
proto.tcim.RoomSystemMsg.prototype.setOpenType = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 room_type = 8;
 * @return {number}
 */
proto.tcim.RoomSystemMsg.prototype.getRoomType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomSystemMsg} returns this
 */
proto.tcim.RoomSystemMsg.prototype.setRoomType = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.SpeakMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.SpeakMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.SpeakMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SpeakMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: (f = msg.getSender()) && proto.tcim.SocketUser.toObject(includeInstance, f),
    getter: (f = msg.getGetter()) && proto.tcim.SocketUser.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    emoj: (f = msg.getEmoj()) && proto.tcim.EmojInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.SpeakMsg}
 */
proto.tcim.SpeakMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.SpeakMsg;
  return proto.tcim.SpeakMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.SpeakMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.SpeakMsg}
 */
proto.tcim.SpeakMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tcim.SocketUser;
      reader.readMessage(value,proto.tcim.SocketUser.deserializeBinaryFromReader);
      msg.setSender(value);
      break;
    case 2:
      var value = new proto.tcim.SocketUser;
      reader.readMessage(value,proto.tcim.SocketUser.deserializeBinaryFromReader);
      msg.setGetter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = new proto.tcim.EmojInfo;
      reader.readMessage(value,proto.tcim.EmojInfo.deserializeBinaryFromReader);
      msg.setEmoj(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.SpeakMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.SpeakMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.SpeakMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SpeakMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tcim.SocketUser.serializeBinaryToWriter
    );
  }
  f = message.getGetter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tcim.SocketUser.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmoj();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tcim.EmojInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional SocketUser sender = 1;
 * @return {?proto.tcim.SocketUser}
 */
proto.tcim.SpeakMsg.prototype.getSender = function() {
  return /** @type{?proto.tcim.SocketUser} */ (
    jspb.Message.getWrapperField(this, proto.tcim.SocketUser, 1));
};


/**
 * @param {?proto.tcim.SocketUser|undefined} value
 * @return {!proto.tcim.SpeakMsg} returns this
*/
proto.tcim.SpeakMsg.prototype.setSender = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.SpeakMsg} returns this
 */
proto.tcim.SpeakMsg.prototype.clearSender = function() {
  return this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.SpeakMsg.prototype.hasSender = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SocketUser getter = 2;
 * @return {?proto.tcim.SocketUser}
 */
proto.tcim.SpeakMsg.prototype.getGetter = function() {
  return /** @type{?proto.tcim.SocketUser} */ (
    jspb.Message.getWrapperField(this, proto.tcim.SocketUser, 2));
};


/**
 * @param {?proto.tcim.SocketUser|undefined} value
 * @return {!proto.tcim.SpeakMsg} returns this
*/
proto.tcim.SpeakMsg.prototype.setGetter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.SpeakMsg} returns this
 */
proto.tcim.SpeakMsg.prototype.clearGetter = function() {
  return this.setGetter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.SpeakMsg.prototype.hasGetter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.tcim.SpeakMsg.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.SpeakMsg} returns this
 */
proto.tcim.SpeakMsg.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional EmojInfo emoj = 4;
 * @return {?proto.tcim.EmojInfo}
 */
proto.tcim.SpeakMsg.prototype.getEmoj = function() {
  return /** @type{?proto.tcim.EmojInfo} */ (
    jspb.Message.getWrapperField(this, proto.tcim.EmojInfo, 4));
};


/**
 * @param {?proto.tcim.EmojInfo|undefined} value
 * @return {!proto.tcim.SpeakMsg} returns this
*/
proto.tcim.SpeakMsg.prototype.setEmoj = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.SpeakMsg} returns this
 */
proto.tcim.SpeakMsg.prototype.clearEmoj = function() {
  return this.setEmoj(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.SpeakMsg.prototype.hasEmoj = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tcim.SocketUser.repeatedFields_ = [15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.SocketUser.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.SocketUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.SocketUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SocketUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nick: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 3, ""),
    identity: jspb.Message.getFieldWithDefault(msg, 4, 0),
    wealthLevel: jspb.Message.getFieldWithDefault(msg, 5, 0),
    creditLevel: jspb.Message.getFieldWithDefault(msg, 6, 0),
    isTrueLove: jspb.Message.getFieldWithDefault(msg, 7, 0),
    trueLoveLevel: jspb.Message.getFieldWithDefault(msg, 8, 0),
    trueLoveName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    nobleLevel: jspb.Message.getFieldWithDefault(msg, 10, 0),
    isNew: jspb.Message.getFieldWithDefault(msg, 11, 0),
    isManager: jspb.Message.getFieldWithDefault(msg, 12, 0),
    isHost: jspb.Message.getFieldWithDefault(msg, 13, 0),
    isStealth: jspb.Message.getFieldWithDefault(msg, 14, 0),
    badgeList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    car: jspb.Message.getFieldWithDefault(msg, 16, 0),
    os: jspb.Message.getFieldWithDefault(msg, 17, 0),
    idx: jspb.Message.getFieldWithDefault(msg, 18, 0),
    income: jspb.Message.getFieldWithDefault(msg, 19, 0),
    mic: jspb.Message.getFieldWithDefault(msg, 20, 0),
    combo: jspb.Message.getFieldWithDefault(msg, 21, 0),
    comboId: jspb.Message.getFieldWithDefault(msg, 22, 0),
    isCombo: jspb.Message.getFieldWithDefault(msg, 23, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.SocketUser}
 */
proto.tcim.SocketUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.SocketUser;
  return proto.tcim.SocketUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.SocketUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.SocketUser}
 */
proto.tcim.SocketUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNick(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIdentity(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWealthLevel(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreditLevel(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsTrueLove(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTrueLoveLevel(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrueLoveName(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNobleLevel(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsNew(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsManager(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsHost(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsStealth(value);
      break;
    case 15:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBadge(values[i]);
      }
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCar(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOs(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIdx(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIncome(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMic(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCombo(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setComboId(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsCombo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.SocketUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.SocketUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.SocketUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SocketUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNick();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIdentity();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getWealthLevel();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getCreditLevel();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getIsTrueLove();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getTrueLoveLevel();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getTrueLoveName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getNobleLevel();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getIsNew();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getIsManager();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getIsHost();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = message.getIsStealth();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = message.getBadgeList();
  if (f.length > 0) {
    writer.writePackedInt64(
      15,
      f
    );
  }
  f = message.getCar();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getOs();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getIdx();
  if (f !== 0) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = message.getIncome();
  if (f !== 0) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = message.getMic();
  if (f !== 0) {
    writer.writeInt32(
      20,
      f
    );
  }
  f = message.getCombo();
  if (f !== 0) {
    writer.writeUint32(
      21,
      f
    );
  }
  f = message.getComboId();
  if (f !== 0) {
    writer.writeUint64(
      22,
      f
    );
  }
  f = message.getIsCombo();
  if (f !== 0) {
    writer.writeUint32(
      23,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nick = 2;
 * @return {string}
 */
proto.tcim.SocketUser.prototype.getNick = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setNick = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string avatar = 3;
 * @return {string}
 */
proto.tcim.SocketUser.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 identity = 4;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getIdentity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setIdentity = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 wealth_level = 5;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getWealthLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setWealthLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 credit_level = 6;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getCreditLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setCreditLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 is_true_love = 7;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getIsTrueLove = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setIsTrueLove = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 true_love_level = 8;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getTrueLoveLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setTrueLoveLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string true_love_name = 9;
 * @return {string}
 */
proto.tcim.SocketUser.prototype.getTrueLoveName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setTrueLoveName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional uint32 noble_level = 10;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getNobleLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setNobleLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 is_new = 11;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getIsNew = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setIsNew = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 is_manager = 12;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getIsManager = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setIsManager = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint32 is_host = 13;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getIsHost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setIsHost = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint32 is_stealth = 14;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getIsStealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setIsStealth = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * repeated int64 badge = 15;
 * @return {!Array<number>}
 */
proto.tcim.SocketUser.prototype.getBadgeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setBadgeList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.addBadge = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.clearBadgeList = function() {
  return this.setBadgeList([]);
};


/**
 * optional int64 car = 16;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getCar = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setCar = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int32 os = 17;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getOs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setOs = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional uint32 idx = 18;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getIdx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setIdx = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional uint32 income = 19;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getIncome = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setIncome = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int32 mic = 20;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getMic = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setMic = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional uint32 combo = 21;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getCombo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setCombo = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional uint64 combo_id = 22;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getComboId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setComboId = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional uint32 is_combo = 23;
 * @return {number}
 */
proto.tcim.SocketUser.prototype.getIsCombo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SocketUser} returns this
 */
proto.tcim.SocketUser.prototype.setIsCombo = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.EmojInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.EmojInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.EmojInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.EmojInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    emojId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    result: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.EmojInfo}
 */
proto.tcim.EmojInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.EmojInfo;
  return proto.tcim.EmojInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.EmojInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.EmojInfo}
 */
proto.tcim.EmojInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmojId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setResult(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.EmojInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.EmojInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.EmojInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.EmojInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmojId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResult();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string emoj_id = 1;
 * @return {string}
 */
proto.tcim.EmojInfo.prototype.getEmojId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.EmojInfo} returns this
 */
proto.tcim.EmojInfo.prototype.setEmojId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 result = 2;
 * @return {number}
 */
proto.tcim.EmojInfo.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EmojInfo} returns this
 */
proto.tcim.EmojInfo.prototype.setResult = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 type = 3;
 * @return {number}
 */
proto.tcim.EmojInfo.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.EmojInfo} returns this
 */
proto.tcim.EmojInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.SyncUserWallet.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.SyncUserWallet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.SyncUserWallet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SyncUserWallet.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    money: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tokencoin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.SyncUserWallet}
 */
proto.tcim.SyncUserWallet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.SyncUserWallet;
  return proto.tcim.SyncUserWallet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.SyncUserWallet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.SyncUserWallet}
 */
proto.tcim.SyncUserWallet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMoney(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTokencoin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.SyncUserWallet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.SyncUserWallet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.SyncUserWallet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SyncUserWallet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMoney();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTokencoin();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.SyncUserWallet.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SyncUserWallet} returns this
 */
proto.tcim.SyncUserWallet.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 money = 2;
 * @return {number}
 */
proto.tcim.SyncUserWallet.prototype.getMoney = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SyncUserWallet} returns this
 */
proto.tcim.SyncUserWallet.prototype.setMoney = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 tokencoin = 3;
 * @return {number}
 */
proto.tcim.SyncUserWallet.prototype.getTokencoin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SyncUserWallet} returns this
 */
proto.tcim.SyncUserWallet.prototype.setTokencoin = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 timestamp = 4;
 * @return {number}
 */
proto.tcim.SyncUserWallet.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SyncUserWallet} returns this
 */
proto.tcim.SyncUserWallet.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.GiftRoom.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.GiftRoom.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.GiftRoom} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GiftRoom.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    hot: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.GiftRoom}
 */
proto.tcim.GiftRoom.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.GiftRoom;
  return proto.tcim.GiftRoom.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.GiftRoom} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.GiftRoom}
 */
proto.tcim.GiftRoom.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.GiftRoom.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.GiftRoom.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.GiftRoom} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GiftRoom.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getHot();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 rid = 1;
 * @return {number}
 */
proto.tcim.GiftRoom.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GiftRoom} returns this
 */
proto.tcim.GiftRoom.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 hot = 2;
 * @return {number}
 */
proto.tcim.GiftRoom.prototype.getHot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GiftRoom} returns this
 */
proto.tcim.GiftRoom.prototype.setHot = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.Gift.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.Gift.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.Gift} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.Gift.toObject = function(includeInstance, msg) {
  var f, obj = {
    gid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resType: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.Gift}
 */
proto.tcim.Gift.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.Gift;
  return proto.tcim.Gift.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.Gift} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.Gift}
 */
proto.tcim.Gift.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setQuantity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setResType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.Gift.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.Gift.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.Gift} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.Gift.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getResType();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint64 gid = 1;
 * @return {number}
 */
proto.tcim.Gift.prototype.getGid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.Gift} returns this
 */
proto.tcim.Gift.prototype.setGid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.tcim.Gift.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.Gift} returns this
 */
proto.tcim.Gift.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 quantity = 3;
 * @return {number}
 */
proto.tcim.Gift.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.Gift} returns this
 */
proto.tcim.Gift.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 res_type = 4;
 * @return {number}
 */
proto.tcim.Gift.prototype.getResType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.Gift} returns this
 */
proto.tcim.Gift.prototype.setResType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tcim.GiftSend.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.GiftSend.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.GiftSend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.GiftSend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GiftSend.toObject = function(includeInstance, msg) {
  var f, obj = {
    room: (f = msg.getRoom()) && proto.tcim.GiftRoom.toObject(includeInstance, f),
    fromUser: (f = msg.getFromUser()) && proto.tcim.SocketUser.toObject(includeInstance, f),
    toUserList: jspb.Message.toObjectList(msg.getToUserList(),
    proto.tcim.SocketUser.toObject, includeInstance),
    gift: (f = msg.getGift()) && proto.tcim.Gift.toObject(includeInstance, f),
    isAll: jspb.Message.getFieldWithDefault(msg, 5, 0),
    time: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.GiftSend}
 */
proto.tcim.GiftSend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.GiftSend;
  return proto.tcim.GiftSend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.GiftSend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.GiftSend}
 */
proto.tcim.GiftSend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tcim.GiftRoom;
      reader.readMessage(value,proto.tcim.GiftRoom.deserializeBinaryFromReader);
      msg.setRoom(value);
      break;
    case 2:
      var value = new proto.tcim.SocketUser;
      reader.readMessage(value,proto.tcim.SocketUser.deserializeBinaryFromReader);
      msg.setFromUser(value);
      break;
    case 3:
      var value = new proto.tcim.SocketUser;
      reader.readMessage(value,proto.tcim.SocketUser.deserializeBinaryFromReader);
      msg.addToUser(value);
      break;
    case 4:
      var value = new proto.tcim.Gift;
      reader.readMessage(value,proto.tcim.Gift.deserializeBinaryFromReader);
      msg.setGift(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsAll(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.GiftSend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.GiftSend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.GiftSend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GiftSend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tcim.GiftRoom.serializeBinaryToWriter
    );
  }
  f = message.getFromUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tcim.SocketUser.serializeBinaryToWriter
    );
  }
  f = message.getToUserList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tcim.SocketUser.serializeBinaryToWriter
    );
  }
  f = message.getGift();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tcim.Gift.serializeBinaryToWriter
    );
  }
  f = message.getIsAll();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional GiftRoom room = 1;
 * @return {?proto.tcim.GiftRoom}
 */
proto.tcim.GiftSend.prototype.getRoom = function() {
  return /** @type{?proto.tcim.GiftRoom} */ (
    jspb.Message.getWrapperField(this, proto.tcim.GiftRoom, 1));
};


/**
 * @param {?proto.tcim.GiftRoom|undefined} value
 * @return {!proto.tcim.GiftSend} returns this
*/
proto.tcim.GiftSend.prototype.setRoom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.GiftSend} returns this
 */
proto.tcim.GiftSend.prototype.clearRoom = function() {
  return this.setRoom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.GiftSend.prototype.hasRoom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SocketUser from_user = 2;
 * @return {?proto.tcim.SocketUser}
 */
proto.tcim.GiftSend.prototype.getFromUser = function() {
  return /** @type{?proto.tcim.SocketUser} */ (
    jspb.Message.getWrapperField(this, proto.tcim.SocketUser, 2));
};


/**
 * @param {?proto.tcim.SocketUser|undefined} value
 * @return {!proto.tcim.GiftSend} returns this
*/
proto.tcim.GiftSend.prototype.setFromUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.GiftSend} returns this
 */
proto.tcim.GiftSend.prototype.clearFromUser = function() {
  return this.setFromUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.GiftSend.prototype.hasFromUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated SocketUser to_user = 3;
 * @return {!Array<!proto.tcim.SocketUser>}
 */
proto.tcim.GiftSend.prototype.getToUserList = function() {
  return /** @type{!Array<!proto.tcim.SocketUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tcim.SocketUser, 3));
};


/**
 * @param {!Array<!proto.tcim.SocketUser>} value
 * @return {!proto.tcim.GiftSend} returns this
*/
proto.tcim.GiftSend.prototype.setToUserList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tcim.SocketUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tcim.SocketUser}
 */
proto.tcim.GiftSend.prototype.addToUser = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tcim.SocketUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tcim.GiftSend} returns this
 */
proto.tcim.GiftSend.prototype.clearToUserList = function() {
  return this.setToUserList([]);
};


/**
 * optional Gift gift = 4;
 * @return {?proto.tcim.Gift}
 */
proto.tcim.GiftSend.prototype.getGift = function() {
  return /** @type{?proto.tcim.Gift} */ (
    jspb.Message.getWrapperField(this, proto.tcim.Gift, 4));
};


/**
 * @param {?proto.tcim.Gift|undefined} value
 * @return {!proto.tcim.GiftSend} returns this
*/
proto.tcim.GiftSend.prototype.setGift = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.GiftSend} returns this
 */
proto.tcim.GiftSend.prototype.clearGift = function() {
  return this.setGift(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.GiftSend.prototype.hasGift = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 is_all = 5;
 * @return {number}
 */
proto.tcim.GiftSend.prototype.getIsAll = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GiftSend} returns this
 */
proto.tcim.GiftSend.prototype.setIsAll = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 time = 6;
 * @return {number}
 */
proto.tcim.GiftSend.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GiftSend} returns this
 */
proto.tcim.GiftSend.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.DeleteRoomMicIncome.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.DeleteRoomMicIncome.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.DeleteRoomMicIncome} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.DeleteRoomMicIncome.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isClear: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.DeleteRoomMicIncome}
 */
proto.tcim.DeleteRoomMicIncome.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.DeleteRoomMicIncome;
  return proto.tcim.DeleteRoomMicIncome.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.DeleteRoomMicIncome} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.DeleteRoomMicIncome}
 */
proto.tcim.DeleteRoomMicIncome.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsClear(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.DeleteRoomMicIncome.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.DeleteRoomMicIncome.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.DeleteRoomMicIncome} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.DeleteRoomMicIncome.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIsClear();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint64 rid = 1;
 * @return {number}
 */
proto.tcim.DeleteRoomMicIncome.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.DeleteRoomMicIncome} returns this
 */
proto.tcim.DeleteRoomMicIncome.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 is_clear = 2;
 * @return {number}
 */
proto.tcim.DeleteRoomMicIncome.prototype.getIsClear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.DeleteRoomMicIncome} returns this
 */
proto.tcim.DeleteRoomMicIncome.prototype.setIsClear = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RoomPkMod.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RoomPkMod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RoomPkMod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomPkMod.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    modStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    punish: jspb.Message.getFieldWithDefault(msg, 3, ""),
    overTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    mvpInfo: (f = msg.getMvpInfo()) && proto.tcim.RoomModMvpAndClownInfo.toObject(includeInstance, f),
    clownInfo: (f = msg.getClownInfo()) && proto.tcim.RoomModMvpAndClownInfo.toObject(includeInstance, f),
    leftIncome: jspb.Message.getFieldWithDefault(msg, 7, 0),
    rightIncome: jspb.Message.getFieldWithDefault(msg, 8, 0),
    pkResult: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RoomPkMod}
 */
proto.tcim.RoomPkMod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RoomPkMod;
  return proto.tcim.RoomPkMod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RoomPkMod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RoomPkMod}
 */
proto.tcim.RoomPkMod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setModStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPunish(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOverTime(value);
      break;
    case 5:
      var value = new proto.tcim.RoomModMvpAndClownInfo;
      reader.readMessage(value,proto.tcim.RoomModMvpAndClownInfo.deserializeBinaryFromReader);
      msg.setMvpInfo(value);
      break;
    case 6:
      var value = new proto.tcim.RoomModMvpAndClownInfo;
      reader.readMessage(value,proto.tcim.RoomModMvpAndClownInfo.deserializeBinaryFromReader);
      msg.setClownInfo(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLeftIncome(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRightIncome(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPkResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RoomPkMod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RoomPkMod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RoomPkMod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomPkMod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getModStatus();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPunish();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOverTime();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getMvpInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tcim.RoomModMvpAndClownInfo.serializeBinaryToWriter
    );
  }
  f = message.getClownInfo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.tcim.RoomModMvpAndClownInfo.serializeBinaryToWriter
    );
  }
  f = message.getLeftIncome();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getRightIncome();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getPkResult();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
};


/**
 * optional uint32 type = 1;
 * @return {number}
 */
proto.tcim.RoomPkMod.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomPkMod} returns this
 */
proto.tcim.RoomPkMod.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 mod_status = 2;
 * @return {number}
 */
proto.tcim.RoomPkMod.prototype.getModStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomPkMod} returns this
 */
proto.tcim.RoomPkMod.prototype.setModStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string punish = 3;
 * @return {string}
 */
proto.tcim.RoomPkMod.prototype.getPunish = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.RoomPkMod} returns this
 */
proto.tcim.RoomPkMod.prototype.setPunish = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 over_time = 4;
 * @return {number}
 */
proto.tcim.RoomPkMod.prototype.getOverTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomPkMod} returns this
 */
proto.tcim.RoomPkMod.prototype.setOverTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional RoomModMvpAndClownInfo mvp_info = 5;
 * @return {?proto.tcim.RoomModMvpAndClownInfo}
 */
proto.tcim.RoomPkMod.prototype.getMvpInfo = function() {
  return /** @type{?proto.tcim.RoomModMvpAndClownInfo} */ (
    jspb.Message.getWrapperField(this, proto.tcim.RoomModMvpAndClownInfo, 5));
};


/**
 * @param {?proto.tcim.RoomModMvpAndClownInfo|undefined} value
 * @return {!proto.tcim.RoomPkMod} returns this
*/
proto.tcim.RoomPkMod.prototype.setMvpInfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.RoomPkMod} returns this
 */
proto.tcim.RoomPkMod.prototype.clearMvpInfo = function() {
  return this.setMvpInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.RoomPkMod.prototype.hasMvpInfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RoomModMvpAndClownInfo clown_info = 6;
 * @return {?proto.tcim.RoomModMvpAndClownInfo}
 */
proto.tcim.RoomPkMod.prototype.getClownInfo = function() {
  return /** @type{?proto.tcim.RoomModMvpAndClownInfo} */ (
    jspb.Message.getWrapperField(this, proto.tcim.RoomModMvpAndClownInfo, 6));
};


/**
 * @param {?proto.tcim.RoomModMvpAndClownInfo|undefined} value
 * @return {!proto.tcim.RoomPkMod} returns this
*/
proto.tcim.RoomPkMod.prototype.setClownInfo = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.RoomPkMod} returns this
 */
proto.tcim.RoomPkMod.prototype.clearClownInfo = function() {
  return this.setClownInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.RoomPkMod.prototype.hasClownInfo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 left_income = 7;
 * @return {number}
 */
proto.tcim.RoomPkMod.prototype.getLeftIncome = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomPkMod} returns this
 */
proto.tcim.RoomPkMod.prototype.setLeftIncome = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 right_income = 8;
 * @return {number}
 */
proto.tcim.RoomPkMod.prototype.getRightIncome = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomPkMod} returns this
 */
proto.tcim.RoomPkMod.prototype.setRightIncome = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 pk_result = 9;
 * @return {number}
 */
proto.tcim.RoomPkMod.prototype.getPkResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomPkMod} returns this
 */
proto.tcim.RoomPkMod.prototype.setPkResult = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RoomModMvpAndClownInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RoomModMvpAndClownInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomModMvpAndClownInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nick: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isStealth: jspb.Message.getFieldWithDefault(msg, 4, 0),
    position: jspb.Message.getFieldWithDefault(msg, 5, 0),
    grade: jspb.Message.getFieldWithDefault(msg, 6, 0),
    level: jspb.Message.getFieldWithDefault(msg, 7, 0),
    type: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RoomModMvpAndClownInfo}
 */
proto.tcim.RoomModMvpAndClownInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RoomModMvpAndClownInfo;
  return proto.tcim.RoomModMvpAndClownInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RoomModMvpAndClownInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RoomModMvpAndClownInfo}
 */
proto.tcim.RoomModMvpAndClownInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNick(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsStealth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPosition(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGrade(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RoomModMvpAndClownInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RoomModMvpAndClownInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomModMvpAndClownInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNick();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsStealth();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getGrade();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomModMvpAndClownInfo} returns this
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nick = 2;
 * @return {string}
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.getNick = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.RoomModMvpAndClownInfo} returns this
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.setNick = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string avatar = 3;
 * @return {string}
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.RoomModMvpAndClownInfo} returns this
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 is_stealth = 4;
 * @return {number}
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.getIsStealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomModMvpAndClownInfo} returns this
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.setIsStealth = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 position = 5;
 * @return {number}
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomModMvpAndClownInfo} returns this
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 grade = 6;
 * @return {number}
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.getGrade = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomModMvpAndClownInfo} returns this
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.setGrade = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 level = 7;
 * @return {number}
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomModMvpAndClownInfo} returns this
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 type = 8;
 * @return {number}
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomModMvpAndClownInfo} returns this
 */
proto.tcim.RoomModMvpAndClownInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tcim.RoomHeartMod.repeatedFields_ = [8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RoomHeartMod.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RoomHeartMod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RoomHeartMod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomHeartMod.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    modStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    leftMvpInfo: (f = msg.getLeftMvpInfo()) && proto.tcim.RoomModMvpAndClownInfo.toObject(includeInstance, f),
    rightMvpInfo: (f = msg.getRightMvpInfo()) && proto.tcim.RoomModMvpAndClownInfo.toObject(includeInstance, f),
    chooseResult: (f = msg.getChooseResult()) && proto.tcim.RoomHeartModChooseResult.toObject(includeInstance, f),
    heartResultList: jspb.Message.toObjectList(msg.getHeartResultList(),
    proto.tcim.RoomHeartModHeartResult.toObject, includeInstance),
    allChooseList: jspb.Message.toObjectList(msg.getAllChooseList(),
    proto.tcim.RoomHeartModChooseResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RoomHeartMod}
 */
proto.tcim.RoomHeartMod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RoomHeartMod;
  return proto.tcim.RoomHeartMod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RoomHeartMod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RoomHeartMod}
 */
proto.tcim.RoomHeartMod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setModStatus(value);
      break;
    case 5:
      var value = new proto.tcim.RoomModMvpAndClownInfo;
      reader.readMessage(value,proto.tcim.RoomModMvpAndClownInfo.deserializeBinaryFromReader);
      msg.setLeftMvpInfo(value);
      break;
    case 6:
      var value = new proto.tcim.RoomModMvpAndClownInfo;
      reader.readMessage(value,proto.tcim.RoomModMvpAndClownInfo.deserializeBinaryFromReader);
      msg.setRightMvpInfo(value);
      break;
    case 7:
      var value = new proto.tcim.RoomHeartModChooseResult;
      reader.readMessage(value,proto.tcim.RoomHeartModChooseResult.deserializeBinaryFromReader);
      msg.setChooseResult(value);
      break;
    case 8:
      var value = new proto.tcim.RoomHeartModHeartResult;
      reader.readMessage(value,proto.tcim.RoomHeartModHeartResult.deserializeBinaryFromReader);
      msg.addHeartResult(value);
      break;
    case 9:
      var value = new proto.tcim.RoomHeartModChooseResult;
      reader.readMessage(value,proto.tcim.RoomHeartModChooseResult.deserializeBinaryFromReader);
      msg.addAllChoose(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RoomHeartMod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RoomHeartMod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RoomHeartMod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomHeartMod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getModStatus();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getLeftMvpInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tcim.RoomModMvpAndClownInfo.serializeBinaryToWriter
    );
  }
  f = message.getRightMvpInfo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.tcim.RoomModMvpAndClownInfo.serializeBinaryToWriter
    );
  }
  f = message.getChooseResult();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.tcim.RoomHeartModChooseResult.serializeBinaryToWriter
    );
  }
  f = message.getHeartResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.tcim.RoomHeartModHeartResult.serializeBinaryToWriter
    );
  }
  f = message.getAllChooseList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.tcim.RoomHeartModChooseResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 type = 1;
 * @return {number}
 */
proto.tcim.RoomHeartMod.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartMod} returns this
 */
proto.tcim.RoomHeartMod.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 mod_status = 2;
 * @return {number}
 */
proto.tcim.RoomHeartMod.prototype.getModStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartMod} returns this
 */
proto.tcim.RoomHeartMod.prototype.setModStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional RoomModMvpAndClownInfo left_mvp_info = 5;
 * @return {?proto.tcim.RoomModMvpAndClownInfo}
 */
proto.tcim.RoomHeartMod.prototype.getLeftMvpInfo = function() {
  return /** @type{?proto.tcim.RoomModMvpAndClownInfo} */ (
    jspb.Message.getWrapperField(this, proto.tcim.RoomModMvpAndClownInfo, 5));
};


/**
 * @param {?proto.tcim.RoomModMvpAndClownInfo|undefined} value
 * @return {!proto.tcim.RoomHeartMod} returns this
*/
proto.tcim.RoomHeartMod.prototype.setLeftMvpInfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.RoomHeartMod} returns this
 */
proto.tcim.RoomHeartMod.prototype.clearLeftMvpInfo = function() {
  return this.setLeftMvpInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.RoomHeartMod.prototype.hasLeftMvpInfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RoomModMvpAndClownInfo right_mvp_info = 6;
 * @return {?proto.tcim.RoomModMvpAndClownInfo}
 */
proto.tcim.RoomHeartMod.prototype.getRightMvpInfo = function() {
  return /** @type{?proto.tcim.RoomModMvpAndClownInfo} */ (
    jspb.Message.getWrapperField(this, proto.tcim.RoomModMvpAndClownInfo, 6));
};


/**
 * @param {?proto.tcim.RoomModMvpAndClownInfo|undefined} value
 * @return {!proto.tcim.RoomHeartMod} returns this
*/
proto.tcim.RoomHeartMod.prototype.setRightMvpInfo = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.RoomHeartMod} returns this
 */
proto.tcim.RoomHeartMod.prototype.clearRightMvpInfo = function() {
  return this.setRightMvpInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.RoomHeartMod.prototype.hasRightMvpInfo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RoomHeartModChooseResult choose_result = 7;
 * @return {?proto.tcim.RoomHeartModChooseResult}
 */
proto.tcim.RoomHeartMod.prototype.getChooseResult = function() {
  return /** @type{?proto.tcim.RoomHeartModChooseResult} */ (
    jspb.Message.getWrapperField(this, proto.tcim.RoomHeartModChooseResult, 7));
};


/**
 * @param {?proto.tcim.RoomHeartModChooseResult|undefined} value
 * @return {!proto.tcim.RoomHeartMod} returns this
*/
proto.tcim.RoomHeartMod.prototype.setChooseResult = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.RoomHeartMod} returns this
 */
proto.tcim.RoomHeartMod.prototype.clearChooseResult = function() {
  return this.setChooseResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.RoomHeartMod.prototype.hasChooseResult = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated RoomHeartModHeartResult heart_result = 8;
 * @return {!Array<!proto.tcim.RoomHeartModHeartResult>}
 */
proto.tcim.RoomHeartMod.prototype.getHeartResultList = function() {
  return /** @type{!Array<!proto.tcim.RoomHeartModHeartResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tcim.RoomHeartModHeartResult, 8));
};


/**
 * @param {!Array<!proto.tcim.RoomHeartModHeartResult>} value
 * @return {!proto.tcim.RoomHeartMod} returns this
*/
proto.tcim.RoomHeartMod.prototype.setHeartResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.tcim.RoomHeartModHeartResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tcim.RoomHeartModHeartResult}
 */
proto.tcim.RoomHeartMod.prototype.addHeartResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.tcim.RoomHeartModHeartResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tcim.RoomHeartMod} returns this
 */
proto.tcim.RoomHeartMod.prototype.clearHeartResultList = function() {
  return this.setHeartResultList([]);
};


/**
 * repeated RoomHeartModChooseResult all_choose = 9;
 * @return {!Array<!proto.tcim.RoomHeartModChooseResult>}
 */
proto.tcim.RoomHeartMod.prototype.getAllChooseList = function() {
  return /** @type{!Array<!proto.tcim.RoomHeartModChooseResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tcim.RoomHeartModChooseResult, 9));
};


/**
 * @param {!Array<!proto.tcim.RoomHeartModChooseResult>} value
 * @return {!proto.tcim.RoomHeartMod} returns this
*/
proto.tcim.RoomHeartMod.prototype.setAllChooseList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.tcim.RoomHeartModChooseResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tcim.RoomHeartModChooseResult}
 */
proto.tcim.RoomHeartMod.prototype.addAllChoose = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.tcim.RoomHeartModChooseResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tcim.RoomHeartMod} returns this
 */
proto.tcim.RoomHeartMod.prototype.clearAllChooseList = function() {
  return this.setAllChooseList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RoomHeartModChooseResult.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RoomHeartModChooseResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RoomHeartModChooseResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomHeartModChooseResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromPosition: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toPosition: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RoomHeartModChooseResult}
 */
proto.tcim.RoomHeartModChooseResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RoomHeartModChooseResult;
  return proto.tcim.RoomHeartModChooseResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RoomHeartModChooseResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RoomHeartModChooseResult}
 */
proto.tcim.RoomHeartModChooseResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFromPosition(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setToPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RoomHeartModChooseResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RoomHeartModChooseResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RoomHeartModChooseResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomHeartModChooseResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromPosition();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToPosition();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 from_position = 1;
 * @return {number}
 */
proto.tcim.RoomHeartModChooseResult.prototype.getFromPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartModChooseResult} returns this
 */
proto.tcim.RoomHeartModChooseResult.prototype.setFromPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 to_position = 2;
 * @return {number}
 */
proto.tcim.RoomHeartModChooseResult.prototype.getToPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartModChooseResult} returns this
 */
proto.tcim.RoomHeartModChooseResult.prototype.setToPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RoomHeartModHeartResult.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RoomHeartModHeartResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RoomHeartModHeartResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomHeartModHeartResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    leftUid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    leftNick: jspb.Message.getFieldWithDefault(msg, 2, ""),
    leftAvatar: jspb.Message.getFieldWithDefault(msg, 3, ""),
    leftIsStealth: jspb.Message.getFieldWithDefault(msg, 4, 0),
    leftGrade: jspb.Message.getFieldWithDefault(msg, 5, 0),
    leftLevel: jspb.Message.getFieldWithDefault(msg, 6, 0),
    rightUid: jspb.Message.getFieldWithDefault(msg, 7, 0),
    rightNick: jspb.Message.getFieldWithDefault(msg, 8, ""),
    rightAvatar: jspb.Message.getFieldWithDefault(msg, 9, ""),
    rightIsStealth: jspb.Message.getFieldWithDefault(msg, 10, 0),
    rightGrade: jspb.Message.getFieldWithDefault(msg, 11, 0),
    rightLevel: jspb.Message.getFieldWithDefault(msg, 12, 0),
    effect: jspb.Message.getFieldWithDefault(msg, 13, 0),
    leftMicId: jspb.Message.getFieldWithDefault(msg, 14, 0),
    rightMicId: jspb.Message.getFieldWithDefault(msg, 15, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RoomHeartModHeartResult}
 */
proto.tcim.RoomHeartModHeartResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RoomHeartModHeartResult;
  return proto.tcim.RoomHeartModHeartResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RoomHeartModHeartResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RoomHeartModHeartResult}
 */
proto.tcim.RoomHeartModHeartResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLeftUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeftNick(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeftAvatar(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLeftIsStealth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLeftGrade(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLeftLevel(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRightUid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRightNick(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRightAvatar(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRightIsStealth(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRightGrade(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRightLevel(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEffect(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLeftMicId(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRightMicId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RoomHeartModHeartResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RoomHeartModHeartResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RoomHeartModHeartResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomHeartModHeartResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeftUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLeftNick();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLeftAvatar();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLeftIsStealth();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getLeftGrade();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getLeftLevel();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getRightUid();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getRightNick();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRightAvatar();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRightIsStealth();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getRightGrade();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getRightLevel();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getEffect();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = message.getLeftMicId();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = message.getRightMicId();
  if (f !== 0) {
    writer.writeUint32(
      15,
      f
    );
  }
};


/**
 * optional uint64 left_uid = 1;
 * @return {number}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getLeftUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setLeftUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string left_nick = 2;
 * @return {string}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getLeftNick = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setLeftNick = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string left_avatar = 3;
 * @return {string}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getLeftAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setLeftAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 left_is_stealth = 4;
 * @return {number}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getLeftIsStealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setLeftIsStealth = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 left_grade = 5;
 * @return {number}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getLeftGrade = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setLeftGrade = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 left_level = 6;
 * @return {number}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getLeftLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setLeftLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 right_uid = 7;
 * @return {number}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getRightUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setRightUid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string right_nick = 8;
 * @return {string}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getRightNick = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setRightNick = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string right_avatar = 9;
 * @return {string}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getRightAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setRightAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional uint32 right_is_stealth = 10;
 * @return {number}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getRightIsStealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setRightIsStealth = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 right_grade = 11;
 * @return {number}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getRightGrade = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setRightGrade = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 right_level = 12;
 * @return {number}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getRightLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setRightLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint32 effect = 13;
 * @return {number}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getEffect = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setEffect = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint32 left_mic_id = 14;
 * @return {number}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getLeftMicId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setLeftMicId = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional uint32 right_mic_id = 15;
 * @return {number}
 */
proto.tcim.RoomHeartModHeartResult.prototype.getRightMicId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHeartModHeartResult} returns this
 */
proto.tcim.RoomHeartModHeartResult.prototype.setRightMicId = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.FloatingScreen.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.FloatingScreen.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.FloatingScreen} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FloatingScreen.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    room: (f = msg.getRoom()) && proto.tcim.FloatingRoom.toObject(includeInstance, f),
    giftSend: (f = msg.getGiftSend()) && proto.tcim.FloatingGiftSend.toObject(includeInstance, f),
    game: (f = msg.getGame()) && proto.tcim.FloatingGame.toObject(includeInstance, f),
    luckGift: (f = msg.getLuckGift()) && proto.tcim.FloatingLuckGift.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.FloatingScreen}
 */
proto.tcim.FloatingScreen.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.FloatingScreen;
  return proto.tcim.FloatingScreen.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.FloatingScreen} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.FloatingScreen}
 */
proto.tcim.FloatingScreen.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.tcim.FloatingRoom;
      reader.readMessage(value,proto.tcim.FloatingRoom.deserializeBinaryFromReader);
      msg.setRoom(value);
      break;
    case 3:
      var value = new proto.tcim.FloatingGiftSend;
      reader.readMessage(value,proto.tcim.FloatingGiftSend.deserializeBinaryFromReader);
      msg.setGiftSend(value);
      break;
    case 4:
      var value = new proto.tcim.FloatingGame;
      reader.readMessage(value,proto.tcim.FloatingGame.deserializeBinaryFromReader);
      msg.setGame(value);
      break;
    case 5:
      var value = new proto.tcim.FloatingLuckGift;
      reader.readMessage(value,proto.tcim.FloatingLuckGift.deserializeBinaryFromReader);
      msg.setLuckGift(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.FloatingScreen.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.FloatingScreen.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.FloatingScreen} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FloatingScreen.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRoom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tcim.FloatingRoom.serializeBinaryToWriter
    );
  }
  f = message.getGiftSend();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tcim.FloatingGiftSend.serializeBinaryToWriter
    );
  }
  f = message.getGame();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tcim.FloatingGame.serializeBinaryToWriter
    );
  }
  f = message.getLuckGift();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tcim.FloatingLuckGift.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 type = 1;
 * @return {number}
 */
proto.tcim.FloatingScreen.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.FloatingScreen} returns this
 */
proto.tcim.FloatingScreen.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional FloatingRoom room = 2;
 * @return {?proto.tcim.FloatingRoom}
 */
proto.tcim.FloatingScreen.prototype.getRoom = function() {
  return /** @type{?proto.tcim.FloatingRoom} */ (
    jspb.Message.getWrapperField(this, proto.tcim.FloatingRoom, 2));
};


/**
 * @param {?proto.tcim.FloatingRoom|undefined} value
 * @return {!proto.tcim.FloatingScreen} returns this
*/
proto.tcim.FloatingScreen.prototype.setRoom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingScreen} returns this
 */
proto.tcim.FloatingScreen.prototype.clearRoom = function() {
  return this.setRoom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingScreen.prototype.hasRoom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FloatingGiftSend gift_send = 3;
 * @return {?proto.tcim.FloatingGiftSend}
 */
proto.tcim.FloatingScreen.prototype.getGiftSend = function() {
  return /** @type{?proto.tcim.FloatingGiftSend} */ (
    jspb.Message.getWrapperField(this, proto.tcim.FloatingGiftSend, 3));
};


/**
 * @param {?proto.tcim.FloatingGiftSend|undefined} value
 * @return {!proto.tcim.FloatingScreen} returns this
*/
proto.tcim.FloatingScreen.prototype.setGiftSend = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingScreen} returns this
 */
proto.tcim.FloatingScreen.prototype.clearGiftSend = function() {
  return this.setGiftSend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingScreen.prototype.hasGiftSend = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional FloatingGame game = 4;
 * @return {?proto.tcim.FloatingGame}
 */
proto.tcim.FloatingScreen.prototype.getGame = function() {
  return /** @type{?proto.tcim.FloatingGame} */ (
    jspb.Message.getWrapperField(this, proto.tcim.FloatingGame, 4));
};


/**
 * @param {?proto.tcim.FloatingGame|undefined} value
 * @return {!proto.tcim.FloatingScreen} returns this
*/
proto.tcim.FloatingScreen.prototype.setGame = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingScreen} returns this
 */
proto.tcim.FloatingScreen.prototype.clearGame = function() {
  return this.setGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingScreen.prototype.hasGame = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FloatingLuckGift luck_gift = 5;
 * @return {?proto.tcim.FloatingLuckGift}
 */
proto.tcim.FloatingScreen.prototype.getLuckGift = function() {
  return /** @type{?proto.tcim.FloatingLuckGift} */ (
    jspb.Message.getWrapperField(this, proto.tcim.FloatingLuckGift, 5));
};


/**
 * @param {?proto.tcim.FloatingLuckGift|undefined} value
 * @return {!proto.tcim.FloatingScreen} returns this
*/
proto.tcim.FloatingScreen.prototype.setLuckGift = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingScreen} returns this
 */
proto.tcim.FloatingScreen.prototype.clearLuckGift = function() {
  return this.setLuckGift(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingScreen.prototype.hasLuckGift = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.FloatingLuckGift.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.FloatingLuckGift.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.FloatingLuckGift} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FloatingLuckGift.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromUser: (f = msg.getFromUser()) && proto.tcim.SocketUser.toObject(includeInstance, f),
    gift: (f = msg.getGift()) && proto.tcim.GameGift.toObject(includeInstance, f),
    multiples: (f = msg.getMultiples()) && proto.tcim.SendLuckGiftGive.toObject(includeInstance, f),
    gets: (f = msg.getGets()) && proto.tcim.SendLuckGiftAward.toObject(includeInstance, f),
    award: (f = msg.getAward()) && proto.tcim.SendLuckGiftAward.toObject(includeInstance, f),
    activityName: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.FloatingLuckGift}
 */
proto.tcim.FloatingLuckGift.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.FloatingLuckGift;
  return proto.tcim.FloatingLuckGift.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.FloatingLuckGift} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.FloatingLuckGift}
 */
proto.tcim.FloatingLuckGift.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tcim.SocketUser;
      reader.readMessage(value,proto.tcim.SocketUser.deserializeBinaryFromReader);
      msg.setFromUser(value);
      break;
    case 2:
      var value = new proto.tcim.GameGift;
      reader.readMessage(value,proto.tcim.GameGift.deserializeBinaryFromReader);
      msg.setGift(value);
      break;
    case 3:
      var value = new proto.tcim.SendLuckGiftGive;
      reader.readMessage(value,proto.tcim.SendLuckGiftGive.deserializeBinaryFromReader);
      msg.setMultiples(value);
      break;
    case 4:
      var value = new proto.tcim.SendLuckGiftAward;
      reader.readMessage(value,proto.tcim.SendLuckGiftAward.deserializeBinaryFromReader);
      msg.setGets(value);
      break;
    case 5:
      var value = new proto.tcim.SendLuckGiftAward;
      reader.readMessage(value,proto.tcim.SendLuckGiftAward.deserializeBinaryFromReader);
      msg.setAward(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivityName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.FloatingLuckGift.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.FloatingLuckGift.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.FloatingLuckGift} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FloatingLuckGift.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tcim.SocketUser.serializeBinaryToWriter
    );
  }
  f = message.getGift();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tcim.GameGift.serializeBinaryToWriter
    );
  }
  f = message.getMultiples();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tcim.SendLuckGiftGive.serializeBinaryToWriter
    );
  }
  f = message.getGets();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tcim.SendLuckGiftAward.serializeBinaryToWriter
    );
  }
  f = message.getAward();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tcim.SendLuckGiftAward.serializeBinaryToWriter
    );
  }
  f = message.getActivityName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional SocketUser from_user = 1;
 * @return {?proto.tcim.SocketUser}
 */
proto.tcim.FloatingLuckGift.prototype.getFromUser = function() {
  return /** @type{?proto.tcim.SocketUser} */ (
    jspb.Message.getWrapperField(this, proto.tcim.SocketUser, 1));
};


/**
 * @param {?proto.tcim.SocketUser|undefined} value
 * @return {!proto.tcim.FloatingLuckGift} returns this
*/
proto.tcim.FloatingLuckGift.prototype.setFromUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingLuckGift} returns this
 */
proto.tcim.FloatingLuckGift.prototype.clearFromUser = function() {
  return this.setFromUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingLuckGift.prototype.hasFromUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GameGift gift = 2;
 * @return {?proto.tcim.GameGift}
 */
proto.tcim.FloatingLuckGift.prototype.getGift = function() {
  return /** @type{?proto.tcim.GameGift} */ (
    jspb.Message.getWrapperField(this, proto.tcim.GameGift, 2));
};


/**
 * @param {?proto.tcim.GameGift|undefined} value
 * @return {!proto.tcim.FloatingLuckGift} returns this
*/
proto.tcim.FloatingLuckGift.prototype.setGift = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingLuckGift} returns this
 */
proto.tcim.FloatingLuckGift.prototype.clearGift = function() {
  return this.setGift(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingLuckGift.prototype.hasGift = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SendLuckGiftGive multiples = 3;
 * @return {?proto.tcim.SendLuckGiftGive}
 */
proto.tcim.FloatingLuckGift.prototype.getMultiples = function() {
  return /** @type{?proto.tcim.SendLuckGiftGive} */ (
    jspb.Message.getWrapperField(this, proto.tcim.SendLuckGiftGive, 3));
};


/**
 * @param {?proto.tcim.SendLuckGiftGive|undefined} value
 * @return {!proto.tcim.FloatingLuckGift} returns this
*/
proto.tcim.FloatingLuckGift.prototype.setMultiples = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingLuckGift} returns this
 */
proto.tcim.FloatingLuckGift.prototype.clearMultiples = function() {
  return this.setMultiples(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingLuckGift.prototype.hasMultiples = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SendLuckGiftAward gets = 4;
 * @return {?proto.tcim.SendLuckGiftAward}
 */
proto.tcim.FloatingLuckGift.prototype.getGets = function() {
  return /** @type{?proto.tcim.SendLuckGiftAward} */ (
    jspb.Message.getWrapperField(this, proto.tcim.SendLuckGiftAward, 4));
};


/**
 * @param {?proto.tcim.SendLuckGiftAward|undefined} value
 * @return {!proto.tcim.FloatingLuckGift} returns this
*/
proto.tcim.FloatingLuckGift.prototype.setGets = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingLuckGift} returns this
 */
proto.tcim.FloatingLuckGift.prototype.clearGets = function() {
  return this.setGets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingLuckGift.prototype.hasGets = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SendLuckGiftAward award = 5;
 * @return {?proto.tcim.SendLuckGiftAward}
 */
proto.tcim.FloatingLuckGift.prototype.getAward = function() {
  return /** @type{?proto.tcim.SendLuckGiftAward} */ (
    jspb.Message.getWrapperField(this, proto.tcim.SendLuckGiftAward, 5));
};


/**
 * @param {?proto.tcim.SendLuckGiftAward|undefined} value
 * @return {!proto.tcim.FloatingLuckGift} returns this
*/
proto.tcim.FloatingLuckGift.prototype.setAward = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingLuckGift} returns this
 */
proto.tcim.FloatingLuckGift.prototype.clearAward = function() {
  return this.setAward(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingLuckGift.prototype.hasAward = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string activity_name = 6;
 * @return {string}
 */
proto.tcim.FloatingLuckGift.prototype.getActivityName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.FloatingLuckGift} returns this
 */
proto.tcim.FloatingLuckGift.prototype.setActivityName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.FloatingRoom.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.FloatingRoom.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.FloatingRoom} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FloatingRoom.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roomType: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.FloatingRoom}
 */
proto.tcim.FloatingRoom.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.FloatingRoom;
  return proto.tcim.FloatingRoom.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.FloatingRoom} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.FloatingRoom}
 */
proto.tcim.FloatingRoom.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.FloatingRoom.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.FloatingRoom.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.FloatingRoom} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FloatingRoom.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRoomType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 rid = 1;
 * @return {number}
 */
proto.tcim.FloatingRoom.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.FloatingRoom} returns this
 */
proto.tcim.FloatingRoom.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string room_type = 2;
 * @return {string}
 */
proto.tcim.FloatingRoom.prototype.getRoomType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.FloatingRoom} returns this
 */
proto.tcim.FloatingRoom.prototype.setRoomType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tcim.FloatingGiftSend.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.FloatingGiftSend.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.FloatingGiftSend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.FloatingGiftSend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FloatingGiftSend.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromUser: (f = msg.getFromUser()) && proto.tcim.SocketUser.toObject(includeInstance, f),
    toUserList: jspb.Message.toObjectList(msg.getToUserList(),
    proto.tcim.SocketUser.toObject, includeInstance),
    gift: (f = msg.getGift()) && proto.tcim.FloatingGiftSendGift.toObject(includeInstance, f),
    isAll: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.FloatingGiftSend}
 */
proto.tcim.FloatingGiftSend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.FloatingGiftSend;
  return proto.tcim.FloatingGiftSend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.FloatingGiftSend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.FloatingGiftSend}
 */
proto.tcim.FloatingGiftSend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tcim.SocketUser;
      reader.readMessage(value,proto.tcim.SocketUser.deserializeBinaryFromReader);
      msg.setFromUser(value);
      break;
    case 2:
      var value = new proto.tcim.SocketUser;
      reader.readMessage(value,proto.tcim.SocketUser.deserializeBinaryFromReader);
      msg.addToUser(value);
      break;
    case 3:
      var value = new proto.tcim.FloatingGiftSendGift;
      reader.readMessage(value,proto.tcim.FloatingGiftSendGift.deserializeBinaryFromReader);
      msg.setGift(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.FloatingGiftSend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.FloatingGiftSend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.FloatingGiftSend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FloatingGiftSend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tcim.SocketUser.serializeBinaryToWriter
    );
  }
  f = message.getToUserList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tcim.SocketUser.serializeBinaryToWriter
    );
  }
  f = message.getGift();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tcim.FloatingGiftSendGift.serializeBinaryToWriter
    );
  }
  f = message.getIsAll();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional SocketUser from_user = 1;
 * @return {?proto.tcim.SocketUser}
 */
proto.tcim.FloatingGiftSend.prototype.getFromUser = function() {
  return /** @type{?proto.tcim.SocketUser} */ (
    jspb.Message.getWrapperField(this, proto.tcim.SocketUser, 1));
};


/**
 * @param {?proto.tcim.SocketUser|undefined} value
 * @return {!proto.tcim.FloatingGiftSend} returns this
*/
proto.tcim.FloatingGiftSend.prototype.setFromUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingGiftSend} returns this
 */
proto.tcim.FloatingGiftSend.prototype.clearFromUser = function() {
  return this.setFromUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingGiftSend.prototype.hasFromUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SocketUser to_user = 2;
 * @return {!Array<!proto.tcim.SocketUser>}
 */
proto.tcim.FloatingGiftSend.prototype.getToUserList = function() {
  return /** @type{!Array<!proto.tcim.SocketUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tcim.SocketUser, 2));
};


/**
 * @param {!Array<!proto.tcim.SocketUser>} value
 * @return {!proto.tcim.FloatingGiftSend} returns this
*/
proto.tcim.FloatingGiftSend.prototype.setToUserList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tcim.SocketUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tcim.SocketUser}
 */
proto.tcim.FloatingGiftSend.prototype.addToUser = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tcim.SocketUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tcim.FloatingGiftSend} returns this
 */
proto.tcim.FloatingGiftSend.prototype.clearToUserList = function() {
  return this.setToUserList([]);
};


/**
 * optional FloatingGiftSendGift gift = 3;
 * @return {?proto.tcim.FloatingGiftSendGift}
 */
proto.tcim.FloatingGiftSend.prototype.getGift = function() {
  return /** @type{?proto.tcim.FloatingGiftSendGift} */ (
    jspb.Message.getWrapperField(this, proto.tcim.FloatingGiftSendGift, 3));
};


/**
 * @param {?proto.tcim.FloatingGiftSendGift|undefined} value
 * @return {!proto.tcim.FloatingGiftSend} returns this
*/
proto.tcim.FloatingGiftSend.prototype.setGift = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingGiftSend} returns this
 */
proto.tcim.FloatingGiftSend.prototype.clearGift = function() {
  return this.setGift(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingGiftSend.prototype.hasGift = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 is_all = 4;
 * @return {number}
 */
proto.tcim.FloatingGiftSend.prototype.getIsAll = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.FloatingGiftSend} returns this
 */
proto.tcim.FloatingGiftSend.prototype.setIsAll = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.FloatingGiftSendGift.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.FloatingGiftSendGift.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.FloatingGiftSendGift} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FloatingGiftSendGift.toObject = function(includeInstance, msg) {
  var f, obj = {
    gid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    totalPrice: jspb.Message.getFieldWithDefault(msg, 3, 0),
    quantity: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.FloatingGiftSendGift}
 */
proto.tcim.FloatingGiftSendGift.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.FloatingGiftSendGift;
  return proto.tcim.FloatingGiftSendGift.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.FloatingGiftSendGift} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.FloatingGiftSendGift}
 */
proto.tcim.FloatingGiftSendGift.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.FloatingGiftSendGift.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.FloatingGiftSendGift.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.FloatingGiftSendGift} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FloatingGiftSendGift.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalPrice();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint64 gid = 1;
 * @return {number}
 */
proto.tcim.FloatingGiftSendGift.prototype.getGid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.FloatingGiftSendGift} returns this
 */
proto.tcim.FloatingGiftSendGift.prototype.setGid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.tcim.FloatingGiftSendGift.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.FloatingGiftSendGift} returns this
 */
proto.tcim.FloatingGiftSendGift.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 total_price = 3;
 * @return {number}
 */
proto.tcim.FloatingGiftSendGift.prototype.getTotalPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.FloatingGiftSendGift} returns this
 */
proto.tcim.FloatingGiftSendGift.prototype.setTotalPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 quantity = 4;
 * @return {number}
 */
proto.tcim.FloatingGiftSendGift.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.FloatingGiftSendGift} returns this
 */
proto.tcim.FloatingGiftSendGift.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.FloatingGame.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.FloatingGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.FloatingGame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FloatingGame.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromUser: (f = msg.getFromUser()) && proto.tcim.SocketUser.toObject(includeInstance, f),
    gift: (f = msg.getGift()) && proto.tcim.GameGift.toObject(includeInstance, f),
    game: (f = msg.getGame()) && proto.tcim.GameInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.FloatingGame}
 */
proto.tcim.FloatingGame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.FloatingGame;
  return proto.tcim.FloatingGame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.FloatingGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.FloatingGame}
 */
proto.tcim.FloatingGame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tcim.SocketUser;
      reader.readMessage(value,proto.tcim.SocketUser.deserializeBinaryFromReader);
      msg.setFromUser(value);
      break;
    case 2:
      var value = new proto.tcim.GameGift;
      reader.readMessage(value,proto.tcim.GameGift.deserializeBinaryFromReader);
      msg.setGift(value);
      break;
    case 3:
      var value = new proto.tcim.GameInfo;
      reader.readMessage(value,proto.tcim.GameInfo.deserializeBinaryFromReader);
      msg.setGame(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.FloatingGame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.FloatingGame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.FloatingGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.FloatingGame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tcim.SocketUser.serializeBinaryToWriter
    );
  }
  f = message.getGift();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tcim.GameGift.serializeBinaryToWriter
    );
  }
  f = message.getGame();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tcim.GameInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional SocketUser from_user = 1;
 * @return {?proto.tcim.SocketUser}
 */
proto.tcim.FloatingGame.prototype.getFromUser = function() {
  return /** @type{?proto.tcim.SocketUser} */ (
    jspb.Message.getWrapperField(this, proto.tcim.SocketUser, 1));
};


/**
 * @param {?proto.tcim.SocketUser|undefined} value
 * @return {!proto.tcim.FloatingGame} returns this
*/
proto.tcim.FloatingGame.prototype.setFromUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingGame} returns this
 */
proto.tcim.FloatingGame.prototype.clearFromUser = function() {
  return this.setFromUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingGame.prototype.hasFromUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GameGift gift = 2;
 * @return {?proto.tcim.GameGift}
 */
proto.tcim.FloatingGame.prototype.getGift = function() {
  return /** @type{?proto.tcim.GameGift} */ (
    jspb.Message.getWrapperField(this, proto.tcim.GameGift, 2));
};


/**
 * @param {?proto.tcim.GameGift|undefined} value
 * @return {!proto.tcim.FloatingGame} returns this
*/
proto.tcim.FloatingGame.prototype.setGift = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingGame} returns this
 */
proto.tcim.FloatingGame.prototype.clearGift = function() {
  return this.setGift(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingGame.prototype.hasGift = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GameInfo game = 3;
 * @return {?proto.tcim.GameInfo}
 */
proto.tcim.FloatingGame.prototype.getGame = function() {
  return /** @type{?proto.tcim.GameInfo} */ (
    jspb.Message.getWrapperField(this, proto.tcim.GameInfo, 3));
};


/**
 * @param {?proto.tcim.GameInfo|undefined} value
 * @return {!proto.tcim.FloatingGame} returns this
*/
proto.tcim.FloatingGame.prototype.setGame = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.FloatingGame} returns this
 */
proto.tcim.FloatingGame.prototype.clearGame = function() {
  return this.setGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.FloatingGame.prototype.hasGame = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.AllowMic.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.AllowMic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.AllowMic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.AllowMic.toObject = function(includeInstance, msg) {
  var f, obj = {
    nick: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowMic: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.AllowMic}
 */
proto.tcim.AllowMic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.AllowMic;
  return proto.tcim.AllowMic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.AllowMic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.AllowMic}
 */
proto.tcim.AllowMic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNick(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAllowMic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.AllowMic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.AllowMic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.AllowMic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.AllowMic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNick();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowMic();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string nick = 1;
 * @return {string}
 */
proto.tcim.AllowMic.prototype.getNick = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.AllowMic} returns this
 */
proto.tcim.AllowMic.prototype.setNick = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 allow_mic = 2;
 * @return {number}
 */
proto.tcim.AllowMic.prototype.getAllowMic = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.AllowMic} returns this
 */
proto.tcim.AllowMic.prototype.setAllowMic = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tcim.PlayGame.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.PlayGame.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.PlayGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.PlayGame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.PlayGame.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromUser: (f = msg.getFromUser()) && proto.tcim.SocketUser.toObject(includeInstance, f),
    giftList: jspb.Message.toObjectList(msg.getGiftList(),
    proto.tcim.GameGift.toObject, includeInstance),
    game: (f = msg.getGame()) && proto.tcim.GameInfo.toObject(includeInstance, f),
    award: (f = msg.getAward()) && proto.tcim.GameGift.toObject(includeInstance, f),
    activityName: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.PlayGame}
 */
proto.tcim.PlayGame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.PlayGame;
  return proto.tcim.PlayGame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.PlayGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.PlayGame}
 */
proto.tcim.PlayGame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tcim.SocketUser;
      reader.readMessage(value,proto.tcim.SocketUser.deserializeBinaryFromReader);
      msg.setFromUser(value);
      break;
    case 2:
      var value = new proto.tcim.GameGift;
      reader.readMessage(value,proto.tcim.GameGift.deserializeBinaryFromReader);
      msg.addGift(value);
      break;
    case 3:
      var value = new proto.tcim.GameInfo;
      reader.readMessage(value,proto.tcim.GameInfo.deserializeBinaryFromReader);
      msg.setGame(value);
      break;
    case 4:
      var value = new proto.tcim.GameGift;
      reader.readMessage(value,proto.tcim.GameGift.deserializeBinaryFromReader);
      msg.setAward(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivityName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.PlayGame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.PlayGame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.PlayGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.PlayGame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tcim.SocketUser.serializeBinaryToWriter
    );
  }
  f = message.getGiftList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tcim.GameGift.serializeBinaryToWriter
    );
  }
  f = message.getGame();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tcim.GameInfo.serializeBinaryToWriter
    );
  }
  f = message.getAward();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tcim.GameGift.serializeBinaryToWriter
    );
  }
  f = message.getActivityName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional SocketUser from_user = 1;
 * @return {?proto.tcim.SocketUser}
 */
proto.tcim.PlayGame.prototype.getFromUser = function() {
  return /** @type{?proto.tcim.SocketUser} */ (
    jspb.Message.getWrapperField(this, proto.tcim.SocketUser, 1));
};


/**
 * @param {?proto.tcim.SocketUser|undefined} value
 * @return {!proto.tcim.PlayGame} returns this
*/
proto.tcim.PlayGame.prototype.setFromUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.PlayGame} returns this
 */
proto.tcim.PlayGame.prototype.clearFromUser = function() {
  return this.setFromUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.PlayGame.prototype.hasFromUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated GameGift gift = 2;
 * @return {!Array<!proto.tcim.GameGift>}
 */
proto.tcim.PlayGame.prototype.getGiftList = function() {
  return /** @type{!Array<!proto.tcim.GameGift>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tcim.GameGift, 2));
};


/**
 * @param {!Array<!proto.tcim.GameGift>} value
 * @return {!proto.tcim.PlayGame} returns this
*/
proto.tcim.PlayGame.prototype.setGiftList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tcim.GameGift=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tcim.GameGift}
 */
proto.tcim.PlayGame.prototype.addGift = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tcim.GameGift, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tcim.PlayGame} returns this
 */
proto.tcim.PlayGame.prototype.clearGiftList = function() {
  return this.setGiftList([]);
};


/**
 * optional GameInfo game = 3;
 * @return {?proto.tcim.GameInfo}
 */
proto.tcim.PlayGame.prototype.getGame = function() {
  return /** @type{?proto.tcim.GameInfo} */ (
    jspb.Message.getWrapperField(this, proto.tcim.GameInfo, 3));
};


/**
 * @param {?proto.tcim.GameInfo|undefined} value
 * @return {!proto.tcim.PlayGame} returns this
*/
proto.tcim.PlayGame.prototype.setGame = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.PlayGame} returns this
 */
proto.tcim.PlayGame.prototype.clearGame = function() {
  return this.setGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.PlayGame.prototype.hasGame = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GameGift award = 4;
 * @return {?proto.tcim.GameGift}
 */
proto.tcim.PlayGame.prototype.getAward = function() {
  return /** @type{?proto.tcim.GameGift} */ (
    jspb.Message.getWrapperField(this, proto.tcim.GameGift, 4));
};


/**
 * @param {?proto.tcim.GameGift|undefined} value
 * @return {!proto.tcim.PlayGame} returns this
*/
proto.tcim.PlayGame.prototype.setAward = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.PlayGame} returns this
 */
proto.tcim.PlayGame.prototype.clearAward = function() {
  return this.setAward(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.PlayGame.prototype.hasAward = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string activity_name = 5;
 * @return {string}
 */
proto.tcim.PlayGame.prototype.getActivityName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.PlayGame} returns this
 */
proto.tcim.PlayGame.prototype.setActivityName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.GameGift.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.GameGift.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.GameGift} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GameGift.toObject = function(includeInstance, msg) {
  var f, obj = {
    gid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.GameGift}
 */
proto.tcim.GameGift.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.GameGift;
  return proto.tcim.GameGift.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.GameGift} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.GameGift}
 */
proto.tcim.GameGift.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.GameGift.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.GameGift.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.GameGift} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GameGift.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint64 gid = 1;
 * @return {number}
 */
proto.tcim.GameGift.prototype.getGid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GameGift} returns this
 */
proto.tcim.GameGift.prototype.setGid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.tcim.GameGift.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.GameGift} returns this
 */
proto.tcim.GameGift.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 quantity = 3;
 * @return {number}
 */
proto.tcim.GameGift.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GameGift} returns this
 */
proto.tcim.GameGift.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.GameInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.GameInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.GameInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GameInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.GameInfo}
 */
proto.tcim.GameInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.GameInfo;
  return proto.tcim.GameInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.GameInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.GameInfo}
 */
proto.tcim.GameInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.GameInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.GameInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.GameInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GameInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.tcim.GameInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.GameInfo} returns this
 */
proto.tcim.GameInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RoomEndLiving.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RoomEndLiving.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RoomEndLiving} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomEndLiving.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RoomEndLiving}
 */
proto.tcim.RoomEndLiving.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RoomEndLiving;
  return proto.tcim.RoomEndLiving.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RoomEndLiving} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RoomEndLiving}
 */
proto.tcim.RoomEndLiving.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RoomEndLiving.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RoomEndLiving.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RoomEndLiving} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomEndLiving.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 rid = 1;
 * @return {number}
 */
proto.tcim.RoomEndLiving.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomEndLiving} returns this
 */
proto.tcim.RoomEndLiving.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UserUpgrade.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UserUpgrade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UserUpgrade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserUpgrade.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    wealthLevel: jspb.Message.getFieldWithDefault(msg, 3, 0),
    creditLevel: jspb.Message.getFieldWithDefault(msg, 4, 0),
    time: jspb.Message.getFieldWithDefault(msg, 5, 0),
    avatar: jspb.Message.getFieldWithDefault(msg, 6, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UserUpgrade}
 */
proto.tcim.UserUpgrade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UserUpgrade;
  return proto.tcim.UserUpgrade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UserUpgrade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UserUpgrade}
 */
proto.tcim.UserUpgrade.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWealthLevel(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreditLevel(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UserUpgrade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UserUpgrade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UserUpgrade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserUpgrade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getWealthLevel();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getCreditLevel();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.UserUpgrade.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserUpgrade} returns this
 */
proto.tcim.UserUpgrade.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 type = 2;
 * @return {number}
 */
proto.tcim.UserUpgrade.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserUpgrade} returns this
 */
proto.tcim.UserUpgrade.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 wealth_level = 3;
 * @return {number}
 */
proto.tcim.UserUpgrade.prototype.getWealthLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserUpgrade} returns this
 */
proto.tcim.UserUpgrade.prototype.setWealthLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 credit_level = 4;
 * @return {number}
 */
proto.tcim.UserUpgrade.prototype.getCreditLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserUpgrade} returns this
 */
proto.tcim.UserUpgrade.prototype.setCreditLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 time = 5;
 * @return {number}
 */
proto.tcim.UserUpgrade.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserUpgrade} returns this
 */
proto.tcim.UserUpgrade.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string avatar = 6;
 * @return {string}
 */
proto.tcim.UserUpgrade.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserUpgrade} returns this
 */
proto.tcim.UserUpgrade.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string nickname = 7;
 * @return {string}
 */
proto.tcim.UserUpgrade.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserUpgrade} returns this
 */
proto.tcim.UserUpgrade.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RoomManage.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RoomManage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RoomManage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomManage.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    action: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RoomManage}
 */
proto.tcim.RoomManage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RoomManage;
  return proto.tcim.RoomManage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RoomManage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RoomManage}
 */
proto.tcim.RoomManage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RoomManage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RoomManage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RoomManage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomManage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAction();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.RoomManage.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomManage} returns this
 */
proto.tcim.RoomManage.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 action = 2;
 * @return {number}
 */
proto.tcim.RoomManage.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomManage} returns this
 */
proto.tcim.RoomManage.prototype.setAction = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RoomHwdCirclePoised.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RoomHwdCirclePoised.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RoomHwdCirclePoised} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomHwdCirclePoised.toObject = function(includeInstance, msg) {
  var f, obj = {
    lucktime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isluck: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    score: jspb.Message.getFieldWithDefault(msg, 4, 0),
    giftName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    giftId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    ratio: jspb.Message.getFieldWithDefault(msg, 7, 0),
    endtime: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RoomHwdCirclePoised}
 */
proto.tcim.RoomHwdCirclePoised.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RoomHwdCirclePoised;
  return proto.tcim.RoomHwdCirclePoised.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RoomHwdCirclePoised} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RoomHwdCirclePoised}
 */
proto.tcim.RoomHwdCirclePoised.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLucktime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsluck(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setScore(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGiftName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGiftId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRatio(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEndtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RoomHwdCirclePoised.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RoomHwdCirclePoised.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RoomHwdCirclePoised} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomHwdCirclePoised.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLucktime();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIsluck();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getScore();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getGiftName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getGiftId();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getRatio();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getEndtime();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
};


/**
 * optional uint64 lucktime = 1;
 * @return {number}
 */
proto.tcim.RoomHwdCirclePoised.prototype.getLucktime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHwdCirclePoised} returns this
 */
proto.tcim.RoomHwdCirclePoised.prototype.setLucktime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 isluck = 2;
 * @return {number}
 */
proto.tcim.RoomHwdCirclePoised.prototype.getIsluck = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHwdCirclePoised} returns this
 */
proto.tcim.RoomHwdCirclePoised.prototype.setIsluck = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 type = 3;
 * @return {number}
 */
proto.tcim.RoomHwdCirclePoised.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHwdCirclePoised} returns this
 */
proto.tcim.RoomHwdCirclePoised.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 score = 4;
 * @return {number}
 */
proto.tcim.RoomHwdCirclePoised.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHwdCirclePoised} returns this
 */
proto.tcim.RoomHwdCirclePoised.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string gift_name = 5;
 * @return {string}
 */
proto.tcim.RoomHwdCirclePoised.prototype.getGiftName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.RoomHwdCirclePoised} returns this
 */
proto.tcim.RoomHwdCirclePoised.prototype.setGiftName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 gift_id = 6;
 * @return {number}
 */
proto.tcim.RoomHwdCirclePoised.prototype.getGiftId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHwdCirclePoised} returns this
 */
proto.tcim.RoomHwdCirclePoised.prototype.setGiftId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 ratio = 7;
 * @return {number}
 */
proto.tcim.RoomHwdCirclePoised.prototype.getRatio = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHwdCirclePoised} returns this
 */
proto.tcim.RoomHwdCirclePoised.prototype.setRatio = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 endtime = 8;
 * @return {number}
 */
proto.tcim.RoomHwdCirclePoised.prototype.getEndtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomHwdCirclePoised} returns this
 */
proto.tcim.RoomHwdCirclePoised.prototype.setEndtime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RoomSendRedPack.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RoomSendRedPack.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RoomSendRedPack} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomSendRedPack.toObject = function(includeInstance, msg) {
  var f, obj = {
    redPackType: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RoomSendRedPack}
 */
proto.tcim.RoomSendRedPack.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RoomSendRedPack;
  return proto.tcim.RoomSendRedPack.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RoomSendRedPack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RoomSendRedPack}
 */
proto.tcim.RoomSendRedPack.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRedPackType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RoomSendRedPack.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RoomSendRedPack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RoomSendRedPack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomSendRedPack.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRedPackType();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 red_pack_type = 1;
 * @return {number}
 */
proto.tcim.RoomSendRedPack.prototype.getRedPackType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomSendRedPack} returns this
 */
proto.tcim.RoomSendRedPack.prototype.setRedPackType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tcim.SendLuckGiftSystem.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.SendLuckGiftSystem.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.SendLuckGiftSystem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.SendLuckGiftSystem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SendLuckGiftSystem.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromUser: (f = msg.getFromUser()) && proto.tcim.SocketUser.toObject(includeInstance, f),
    gift: (f = msg.getGift()) && proto.tcim.GameGift.toObject(includeInstance, f),
    multiplesList: jspb.Message.toObjectList(msg.getMultiplesList(),
    proto.tcim.SendLuckGiftGive.toObject, includeInstance),
    gets: (f = msg.getGets()) && proto.tcim.SendLuckGiftAward.toObject(includeInstance, f),
    award: (f = msg.getAward()) && proto.tcim.SendLuckGiftAward.toObject(includeInstance, f),
    activityName: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.SendLuckGiftSystem}
 */
proto.tcim.SendLuckGiftSystem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.SendLuckGiftSystem;
  return proto.tcim.SendLuckGiftSystem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.SendLuckGiftSystem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.SendLuckGiftSystem}
 */
proto.tcim.SendLuckGiftSystem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tcim.SocketUser;
      reader.readMessage(value,proto.tcim.SocketUser.deserializeBinaryFromReader);
      msg.setFromUser(value);
      break;
    case 2:
      var value = new proto.tcim.GameGift;
      reader.readMessage(value,proto.tcim.GameGift.deserializeBinaryFromReader);
      msg.setGift(value);
      break;
    case 3:
      var value = new proto.tcim.SendLuckGiftGive;
      reader.readMessage(value,proto.tcim.SendLuckGiftGive.deserializeBinaryFromReader);
      msg.addMultiples(value);
      break;
    case 4:
      var value = new proto.tcim.SendLuckGiftAward;
      reader.readMessage(value,proto.tcim.SendLuckGiftAward.deserializeBinaryFromReader);
      msg.setGets(value);
      break;
    case 5:
      var value = new proto.tcim.SendLuckGiftAward;
      reader.readMessage(value,proto.tcim.SendLuckGiftAward.deserializeBinaryFromReader);
      msg.setAward(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivityName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.SendLuckGiftSystem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.SendLuckGiftSystem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.SendLuckGiftSystem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SendLuckGiftSystem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tcim.SocketUser.serializeBinaryToWriter
    );
  }
  f = message.getGift();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tcim.GameGift.serializeBinaryToWriter
    );
  }
  f = message.getMultiplesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tcim.SendLuckGiftGive.serializeBinaryToWriter
    );
  }
  f = message.getGets();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tcim.SendLuckGiftAward.serializeBinaryToWriter
    );
  }
  f = message.getAward();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tcim.SendLuckGiftAward.serializeBinaryToWriter
    );
  }
  f = message.getActivityName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional SocketUser from_user = 1;
 * @return {?proto.tcim.SocketUser}
 */
proto.tcim.SendLuckGiftSystem.prototype.getFromUser = function() {
  return /** @type{?proto.tcim.SocketUser} */ (
    jspb.Message.getWrapperField(this, proto.tcim.SocketUser, 1));
};


/**
 * @param {?proto.tcim.SocketUser|undefined} value
 * @return {!proto.tcim.SendLuckGiftSystem} returns this
*/
proto.tcim.SendLuckGiftSystem.prototype.setFromUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.SendLuckGiftSystem} returns this
 */
proto.tcim.SendLuckGiftSystem.prototype.clearFromUser = function() {
  return this.setFromUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.SendLuckGiftSystem.prototype.hasFromUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GameGift gift = 2;
 * @return {?proto.tcim.GameGift}
 */
proto.tcim.SendLuckGiftSystem.prototype.getGift = function() {
  return /** @type{?proto.tcim.GameGift} */ (
    jspb.Message.getWrapperField(this, proto.tcim.GameGift, 2));
};


/**
 * @param {?proto.tcim.GameGift|undefined} value
 * @return {!proto.tcim.SendLuckGiftSystem} returns this
*/
proto.tcim.SendLuckGiftSystem.prototype.setGift = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.SendLuckGiftSystem} returns this
 */
proto.tcim.SendLuckGiftSystem.prototype.clearGift = function() {
  return this.setGift(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.SendLuckGiftSystem.prototype.hasGift = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated SendLuckGiftGive multiples = 3;
 * @return {!Array<!proto.tcim.SendLuckGiftGive>}
 */
proto.tcim.SendLuckGiftSystem.prototype.getMultiplesList = function() {
  return /** @type{!Array<!proto.tcim.SendLuckGiftGive>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tcim.SendLuckGiftGive, 3));
};


/**
 * @param {!Array<!proto.tcim.SendLuckGiftGive>} value
 * @return {!proto.tcim.SendLuckGiftSystem} returns this
*/
proto.tcim.SendLuckGiftSystem.prototype.setMultiplesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tcim.SendLuckGiftGive=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tcim.SendLuckGiftGive}
 */
proto.tcim.SendLuckGiftSystem.prototype.addMultiples = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tcim.SendLuckGiftGive, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tcim.SendLuckGiftSystem} returns this
 */
proto.tcim.SendLuckGiftSystem.prototype.clearMultiplesList = function() {
  return this.setMultiplesList([]);
};


/**
 * optional SendLuckGiftAward gets = 4;
 * @return {?proto.tcim.SendLuckGiftAward}
 */
proto.tcim.SendLuckGiftSystem.prototype.getGets = function() {
  return /** @type{?proto.tcim.SendLuckGiftAward} */ (
    jspb.Message.getWrapperField(this, proto.tcim.SendLuckGiftAward, 4));
};


/**
 * @param {?proto.tcim.SendLuckGiftAward|undefined} value
 * @return {!proto.tcim.SendLuckGiftSystem} returns this
*/
proto.tcim.SendLuckGiftSystem.prototype.setGets = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.SendLuckGiftSystem} returns this
 */
proto.tcim.SendLuckGiftSystem.prototype.clearGets = function() {
  return this.setGets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.SendLuckGiftSystem.prototype.hasGets = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SendLuckGiftAward award = 5;
 * @return {?proto.tcim.SendLuckGiftAward}
 */
proto.tcim.SendLuckGiftSystem.prototype.getAward = function() {
  return /** @type{?proto.tcim.SendLuckGiftAward} */ (
    jspb.Message.getWrapperField(this, proto.tcim.SendLuckGiftAward, 5));
};


/**
 * @param {?proto.tcim.SendLuckGiftAward|undefined} value
 * @return {!proto.tcim.SendLuckGiftSystem} returns this
*/
proto.tcim.SendLuckGiftSystem.prototype.setAward = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.SendLuckGiftSystem} returns this
 */
proto.tcim.SendLuckGiftSystem.prototype.clearAward = function() {
  return this.setAward(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.SendLuckGiftSystem.prototype.hasAward = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string activity_name = 6;
 * @return {string}
 */
proto.tcim.SendLuckGiftSystem.prototype.getActivityName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.SendLuckGiftSystem} returns this
 */
proto.tcim.SendLuckGiftSystem.prototype.setActivityName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RoomForceEndLiving.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RoomForceEndLiving.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RoomForceEndLiving} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomForceEndLiving.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RoomForceEndLiving}
 */
proto.tcim.RoomForceEndLiving.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RoomForceEndLiving;
  return proto.tcim.RoomForceEndLiving.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RoomForceEndLiving} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RoomForceEndLiving}
 */
proto.tcim.RoomForceEndLiving.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RoomForceEndLiving.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RoomForceEndLiving.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RoomForceEndLiving} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomForceEndLiving.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 rid = 1;
 * @return {number}
 */
proto.tcim.RoomForceEndLiving.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomForceEndLiving} returns this
 */
proto.tcim.RoomForceEndLiving.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.HeadLineFloatingScreen.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.HeadLineFloatingScreen.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.HeadLineFloatingScreen} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.HeadLineFloatingScreen.toObject = function(includeInstance, msg) {
  var f, obj = {
    room: (f = msg.getRoom()) && proto.tcim.FloatingRoom.toObject(includeInstance, f),
    giftSend: (f = msg.getGiftSend()) && proto.tcim.FloatingGiftSend.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.HeadLineFloatingScreen}
 */
proto.tcim.HeadLineFloatingScreen.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.HeadLineFloatingScreen;
  return proto.tcim.HeadLineFloatingScreen.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.HeadLineFloatingScreen} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.HeadLineFloatingScreen}
 */
proto.tcim.HeadLineFloatingScreen.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tcim.FloatingRoom;
      reader.readMessage(value,proto.tcim.FloatingRoom.deserializeBinaryFromReader);
      msg.setRoom(value);
      break;
    case 2:
      var value = new proto.tcim.FloatingGiftSend;
      reader.readMessage(value,proto.tcim.FloatingGiftSend.deserializeBinaryFromReader);
      msg.setGiftSend(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.HeadLineFloatingScreen.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.HeadLineFloatingScreen.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.HeadLineFloatingScreen} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.HeadLineFloatingScreen.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tcim.FloatingRoom.serializeBinaryToWriter
    );
  }
  f = message.getGiftSend();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tcim.FloatingGiftSend.serializeBinaryToWriter
    );
  }
};


/**
 * optional FloatingRoom room = 1;
 * @return {?proto.tcim.FloatingRoom}
 */
proto.tcim.HeadLineFloatingScreen.prototype.getRoom = function() {
  return /** @type{?proto.tcim.FloatingRoom} */ (
    jspb.Message.getWrapperField(this, proto.tcim.FloatingRoom, 1));
};


/**
 * @param {?proto.tcim.FloatingRoom|undefined} value
 * @return {!proto.tcim.HeadLineFloatingScreen} returns this
*/
proto.tcim.HeadLineFloatingScreen.prototype.setRoom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.HeadLineFloatingScreen} returns this
 */
proto.tcim.HeadLineFloatingScreen.prototype.clearRoom = function() {
  return this.setRoom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.HeadLineFloatingScreen.prototype.hasRoom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FloatingGiftSend gift_send = 2;
 * @return {?proto.tcim.FloatingGiftSend}
 */
proto.tcim.HeadLineFloatingScreen.prototype.getGiftSend = function() {
  return /** @type{?proto.tcim.FloatingGiftSend} */ (
    jspb.Message.getWrapperField(this, proto.tcim.FloatingGiftSend, 2));
};


/**
 * @param {?proto.tcim.FloatingGiftSend|undefined} value
 * @return {!proto.tcim.HeadLineFloatingScreen} returns this
*/
proto.tcim.HeadLineFloatingScreen.prototype.setGiftSend = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.HeadLineFloatingScreen} returns this
 */
proto.tcim.HeadLineFloatingScreen.prototype.clearGiftSend = function() {
  return this.setGiftSend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.HeadLineFloatingScreen.prototype.hasGiftSend = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.Room2022ValentineDayStreamer.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.Room2022ValentineDayStreamer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.Room2022ValentineDayStreamer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.Room2022ValentineDayStreamer.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromUser: (f = msg.getFromUser()) && proto.tcim.Room2022ValentineDayUser.toObject(includeInstance, f),
    toUser: (f = msg.getToUser()) && proto.tcim.Room2022ValentineDayUser.toObject(includeInstance, f),
    gift: (f = msg.getGift()) && proto.tcim.Room2022ValentineDayGift.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.Room2022ValentineDayStreamer}
 */
proto.tcim.Room2022ValentineDayStreamer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.Room2022ValentineDayStreamer;
  return proto.tcim.Room2022ValentineDayStreamer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.Room2022ValentineDayStreamer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.Room2022ValentineDayStreamer}
 */
proto.tcim.Room2022ValentineDayStreamer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tcim.Room2022ValentineDayUser;
      reader.readMessage(value,proto.tcim.Room2022ValentineDayUser.deserializeBinaryFromReader);
      msg.setFromUser(value);
      break;
    case 2:
      var value = new proto.tcim.Room2022ValentineDayUser;
      reader.readMessage(value,proto.tcim.Room2022ValentineDayUser.deserializeBinaryFromReader);
      msg.setToUser(value);
      break;
    case 3:
      var value = new proto.tcim.Room2022ValentineDayGift;
      reader.readMessage(value,proto.tcim.Room2022ValentineDayGift.deserializeBinaryFromReader);
      msg.setGift(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.Room2022ValentineDayStreamer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.Room2022ValentineDayStreamer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.Room2022ValentineDayStreamer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.Room2022ValentineDayStreamer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tcim.Room2022ValentineDayUser.serializeBinaryToWriter
    );
  }
  f = message.getToUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tcim.Room2022ValentineDayUser.serializeBinaryToWriter
    );
  }
  f = message.getGift();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tcim.Room2022ValentineDayGift.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional Room2022ValentineDayUser from_user = 1;
 * @return {?proto.tcim.Room2022ValentineDayUser}
 */
proto.tcim.Room2022ValentineDayStreamer.prototype.getFromUser = function() {
  return /** @type{?proto.tcim.Room2022ValentineDayUser} */ (
    jspb.Message.getWrapperField(this, proto.tcim.Room2022ValentineDayUser, 1));
};


/**
 * @param {?proto.tcim.Room2022ValentineDayUser|undefined} value
 * @return {!proto.tcim.Room2022ValentineDayStreamer} returns this
*/
proto.tcim.Room2022ValentineDayStreamer.prototype.setFromUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.Room2022ValentineDayStreamer} returns this
 */
proto.tcim.Room2022ValentineDayStreamer.prototype.clearFromUser = function() {
  return this.setFromUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.Room2022ValentineDayStreamer.prototype.hasFromUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Room2022ValentineDayUser to_user = 2;
 * @return {?proto.tcim.Room2022ValentineDayUser}
 */
proto.tcim.Room2022ValentineDayStreamer.prototype.getToUser = function() {
  return /** @type{?proto.tcim.Room2022ValentineDayUser} */ (
    jspb.Message.getWrapperField(this, proto.tcim.Room2022ValentineDayUser, 2));
};


/**
 * @param {?proto.tcim.Room2022ValentineDayUser|undefined} value
 * @return {!proto.tcim.Room2022ValentineDayStreamer} returns this
*/
proto.tcim.Room2022ValentineDayStreamer.prototype.setToUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.Room2022ValentineDayStreamer} returns this
 */
proto.tcim.Room2022ValentineDayStreamer.prototype.clearToUser = function() {
  return this.setToUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.Room2022ValentineDayStreamer.prototype.hasToUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Room2022ValentineDayGift gift = 3;
 * @return {?proto.tcim.Room2022ValentineDayGift}
 */
proto.tcim.Room2022ValentineDayStreamer.prototype.getGift = function() {
  return /** @type{?proto.tcim.Room2022ValentineDayGift} */ (
    jspb.Message.getWrapperField(this, proto.tcim.Room2022ValentineDayGift, 3));
};


/**
 * @param {?proto.tcim.Room2022ValentineDayGift|undefined} value
 * @return {!proto.tcim.Room2022ValentineDayStreamer} returns this
*/
proto.tcim.Room2022ValentineDayStreamer.prototype.setGift = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcim.Room2022ValentineDayStreamer} returns this
 */
proto.tcim.Room2022ValentineDayStreamer.prototype.clearGift = function() {
  return this.setGift(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcim.Room2022ValentineDayStreamer.prototype.hasGift = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.tcim.Room2022ValentineDayStreamer.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.Room2022ValentineDayStreamer} returns this
 */
proto.tcim.Room2022ValentineDayStreamer.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.Room2022ValentineDayUser.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.Room2022ValentineDayUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.Room2022ValentineDayUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.Room2022ValentineDayUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nickname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    headimage: jspb.Message.getFieldWithDefault(msg, 3, ""),
    avatarFrame: jspb.Message.getFieldWithDefault(msg, 4, 0),
    frameRatio: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.Room2022ValentineDayUser}
 */
proto.tcim.Room2022ValentineDayUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.Room2022ValentineDayUser;
  return proto.tcim.Room2022ValentineDayUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.Room2022ValentineDayUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.Room2022ValentineDayUser}
 */
proto.tcim.Room2022ValentineDayUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeadimage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAvatarFrame(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFrameRatio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.Room2022ValentineDayUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.Room2022ValentineDayUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.Room2022ValentineDayUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.Room2022ValentineDayUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHeadimage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvatarFrame();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getFrameRatio();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.Room2022ValentineDayUser.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.Room2022ValentineDayUser} returns this
 */
proto.tcim.Room2022ValentineDayUser.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nickname = 2;
 * @return {string}
 */
proto.tcim.Room2022ValentineDayUser.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.Room2022ValentineDayUser} returns this
 */
proto.tcim.Room2022ValentineDayUser.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string headimage = 3;
 * @return {string}
 */
proto.tcim.Room2022ValentineDayUser.prototype.getHeadimage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.Room2022ValentineDayUser} returns this
 */
proto.tcim.Room2022ValentineDayUser.prototype.setHeadimage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 avatar_frame = 4;
 * @return {number}
 */
proto.tcim.Room2022ValentineDayUser.prototype.getAvatarFrame = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.Room2022ValentineDayUser} returns this
 */
proto.tcim.Room2022ValentineDayUser.prototype.setAvatarFrame = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional float frame_ratio = 5;
 * @return {number}
 */
proto.tcim.Room2022ValentineDayUser.prototype.getFrameRatio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.Room2022ValentineDayUser} returns this
 */
proto.tcim.Room2022ValentineDayUser.prototype.setFrameRatio = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.Room2022ValentineDayGift.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.Room2022ValentineDayGift.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.Room2022ValentineDayGift} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.Room2022ValentineDayGift.toObject = function(includeInstance, msg) {
  var f, obj = {
    gid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.Room2022ValentineDayGift}
 */
proto.tcim.Room2022ValentineDayGift.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.Room2022ValentineDayGift;
  return proto.tcim.Room2022ValentineDayGift.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.Room2022ValentineDayGift} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.Room2022ValentineDayGift}
 */
proto.tcim.Room2022ValentineDayGift.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.Room2022ValentineDayGift.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.Room2022ValentineDayGift.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.Room2022ValentineDayGift} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.Room2022ValentineDayGift.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint64 gid = 1;
 * @return {number}
 */
proto.tcim.Room2022ValentineDayGift.prototype.getGid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.Room2022ValentineDayGift} returns this
 */
proto.tcim.Room2022ValentineDayGift.prototype.setGid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.tcim.Room2022ValentineDayGift.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.Room2022ValentineDayGift} returns this
 */
proto.tcim.Room2022ValentineDayGift.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 quantity = 3;
 * @return {number}
 */
proto.tcim.Room2022ValentineDayGift.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.Room2022ValentineDayGift} returns this
 */
proto.tcim.Room2022ValentineDayGift.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.SendLuckGiftAward.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.SendLuckGiftAward.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.SendLuckGiftAward} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SendLuckGiftAward.toObject = function(includeInstance, msg) {
  var f, obj = {
    money: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.SendLuckGiftAward}
 */
proto.tcim.SendLuckGiftAward.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.SendLuckGiftAward;
  return proto.tcim.SendLuckGiftAward.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.SendLuckGiftAward} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.SendLuckGiftAward}
 */
proto.tcim.SendLuckGiftAward.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMoney(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.SendLuckGiftAward.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.SendLuckGiftAward.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.SendLuckGiftAward} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SendLuckGiftAward.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMoney();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 money = 1;
 * @return {number}
 */
proto.tcim.SendLuckGiftAward.prototype.getMoney = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SendLuckGiftAward} returns this
 */
proto.tcim.SendLuckGiftAward.prototype.setMoney = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.SendLuckGiftGive.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.SendLuckGiftGive.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.SendLuckGiftGive} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SendLuckGiftGive.toObject = function(includeInstance, msg) {
  var f, obj = {
    multiple: jspb.Message.getFieldWithDefault(msg, 1, 0),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.SendLuckGiftGive}
 */
proto.tcim.SendLuckGiftGive.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.SendLuckGiftGive;
  return proto.tcim.SendLuckGiftGive.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.SendLuckGiftGive} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.SendLuckGiftGive}
 */
proto.tcim.SendLuckGiftGive.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMultiple(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.SendLuckGiftGive.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.SendLuckGiftGive.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.SendLuckGiftGive} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.SendLuckGiftGive.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMultiple();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 multiple = 1;
 * @return {number}
 */
proto.tcim.SendLuckGiftGive.prototype.getMultiple = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SendLuckGiftGive} returns this
 */
proto.tcim.SendLuckGiftGive.prototype.setMultiple = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 count = 2;
 * @return {number}
 */
proto.tcim.SendLuckGiftGive.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.SendLuckGiftGive} returns this
 */
proto.tcim.SendLuckGiftGive.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.MusicPlayNotify.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.MusicPlayNotify.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.MusicPlayNotify} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.MusicPlayNotify.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    songName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.MusicPlayNotify}
 */
proto.tcim.MusicPlayNotify.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.MusicPlayNotify;
  return proto.tcim.MusicPlayNotify.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.MusicPlayNotify} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.MusicPlayNotify}
 */
proto.tcim.MusicPlayNotify.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSongName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.MusicPlayNotify.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.MusicPlayNotify.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.MusicPlayNotify} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.MusicPlayNotify.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSongName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.MusicPlayNotify.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.MusicPlayNotify} returns this
 */
proto.tcim.MusicPlayNotify.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string song_name = 2;
 * @return {string}
 */
proto.tcim.MusicPlayNotify.prototype.getSongName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.MusicPlayNotify} returns this
 */
proto.tcim.MusicPlayNotify.prototype.setSongName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UserTextInformation.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UserTextInformation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UserTextInformation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserTextInformation.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UserTextInformation}
 */
proto.tcim.UserTextInformation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UserTextInformation;
  return proto.tcim.UserTextInformation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UserTextInformation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UserTextInformation}
 */
proto.tcim.UserTextInformation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UserTextInformation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UserTextInformation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UserTextInformation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserTextInformation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.tcim.UserTextInformation.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserTextInformation} returns this
 */
proto.tcim.UserTextInformation.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.tcim.UserTextInformation.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserTextInformation} returns this
 */
proto.tcim.UserTextInformation.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UserDress.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UserDress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UserDress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserDress.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dressId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dressType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ratio: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    explain: jspb.Message.getFieldWithDefault(msg, 6, ""),
    price: jspb.Message.getFieldWithDefault(msg, 7, 0),
    day: jspb.Message.getFieldWithDefault(msg, 8, 0),
    openType: jspb.Message.getFieldWithDefault(msg, 9, 0),
    textUnlink: jspb.Message.getFieldWithDefault(msg, 10, ""),
    textLink: jspb.Message.getFieldWithDefault(msg, 11, ""),
    jumpType: jspb.Message.getFieldWithDefault(msg, 12, 0),
    backimage: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UserDress}
 */
proto.tcim.UserDress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UserDress;
  return proto.tcim.UserDress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UserDress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UserDress}
 */
proto.tcim.UserDress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDressId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDressType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRatio(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setExplain(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrice(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDay(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOpenType(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextUnlink(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextLink(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setJumpType(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackimage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UserDress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UserDress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UserDress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserDress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDressId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDressType();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getRatio();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getExplain();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getDay();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getOpenType();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getTextUnlink();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTextLink();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getJumpType();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getBackimage();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional uint32 action = 1;
 * @return {number}
 */
proto.tcim.UserDress.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserDress} returns this
 */
proto.tcim.UserDress.prototype.setAction = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 dress_id = 2;
 * @return {number}
 */
proto.tcim.UserDress.prototype.getDressId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserDress} returns this
 */
proto.tcim.UserDress.prototype.setDressId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 dress_type = 3;
 * @return {number}
 */
proto.tcim.UserDress.prototype.getDressType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserDress} returns this
 */
proto.tcim.UserDress.prototype.setDressType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional float ratio = 4;
 * @return {number}
 */
proto.tcim.UserDress.prototype.getRatio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserDress} returns this
 */
proto.tcim.UserDress.prototype.setRatio = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.tcim.UserDress.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserDress} returns this
 */
proto.tcim.UserDress.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string explain = 6;
 * @return {string}
 */
proto.tcim.UserDress.prototype.getExplain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserDress} returns this
 */
proto.tcim.UserDress.prototype.setExplain = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 price = 7;
 * @return {number}
 */
proto.tcim.UserDress.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserDress} returns this
 */
proto.tcim.UserDress.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 day = 8;
 * @return {number}
 */
proto.tcim.UserDress.prototype.getDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserDress} returns this
 */
proto.tcim.UserDress.prototype.setDay = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 open_type = 9;
 * @return {number}
 */
proto.tcim.UserDress.prototype.getOpenType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserDress} returns this
 */
proto.tcim.UserDress.prototype.setOpenType = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string text_unlink = 10;
 * @return {string}
 */
proto.tcim.UserDress.prototype.getTextUnlink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserDress} returns this
 */
proto.tcim.UserDress.prototype.setTextUnlink = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string text_link = 11;
 * @return {string}
 */
proto.tcim.UserDress.prototype.getTextLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserDress} returns this
 */
proto.tcim.UserDress.prototype.setTextLink = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint32 jump_type = 12;
 * @return {number}
 */
proto.tcim.UserDress.prototype.getJumpType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserDress} returns this
 */
proto.tcim.UserDress.prototype.setJumpType = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string backimage = 13;
 * @return {string}
 */
proto.tcim.UserDress.prototype.getBackimage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserDress} returns this
 */
proto.tcim.UserDress.prototype.setBackimage = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UserTrueLove.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UserTrueLove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UserTrueLove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserTrueLove.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    openType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    textUnlink: jspb.Message.getFieldWithDefault(msg, 3, ""),
    textLink: jspb.Message.getFieldWithDefault(msg, 4, ""),
    backimage: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UserTrueLove}
 */
proto.tcim.UserTrueLove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UserTrueLove;
  return proto.tcim.UserTrueLove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UserTrueLove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UserTrueLove}
 */
proto.tcim.UserTrueLove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOpenType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextUnlink(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextLink(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackimage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UserTrueLove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UserTrueLove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UserTrueLove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserTrueLove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOpenType();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTextUnlink();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTextLink();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBackimage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint32 action = 1;
 * @return {number}
 */
proto.tcim.UserTrueLove.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserTrueLove} returns this
 */
proto.tcim.UserTrueLove.prototype.setAction = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 open_type = 2;
 * @return {number}
 */
proto.tcim.UserTrueLove.prototype.getOpenType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserTrueLove} returns this
 */
proto.tcim.UserTrueLove.prototype.setOpenType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string text_unlink = 3;
 * @return {string}
 */
proto.tcim.UserTrueLove.prototype.getTextUnlink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserTrueLove} returns this
 */
proto.tcim.UserTrueLove.prototype.setTextUnlink = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string text_link = 4;
 * @return {string}
 */
proto.tcim.UserTrueLove.prototype.getTextLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserTrueLove} returns this
 */
proto.tcim.UserTrueLove.prototype.setTextLink = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string backimage = 5;
 * @return {string}
 */
proto.tcim.UserTrueLove.prototype.getBackimage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserTrueLove} returns this
 */
proto.tcim.UserTrueLove.prototype.setBackimage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tcim.UserPrivateMode.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UserPrivateMode.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UserPrivateMode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UserPrivateMode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserPrivateMode.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roomType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    url: jspb.Message.getFieldWithDefault(msg, 5, ""),
    feedId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    feedType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    imageList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    type: jspb.Message.getFieldWithDefault(msg, 9, 0),
    openType: jspb.Message.getFieldWithDefault(msg, 10, 0),
    underText: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UserPrivateMode}
 */
proto.tcim.UserPrivateMode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UserPrivateMode;
  return proto.tcim.UserPrivateMode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UserPrivateMode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UserPrivateMode}
 */
proto.tcim.UserPrivateMode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeedId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFeedType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addImage(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOpenType(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnderText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UserPrivateMode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UserPrivateMode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UserPrivateMode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserPrivateMode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRoomType();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFeedId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFeedType();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getImageList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getOpenType();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getUnderText();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional uint64 rid = 1;
 * @return {number}
 */
proto.tcim.UserPrivateMode.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserPrivateMode} returns this
 */
proto.tcim.UserPrivateMode.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 room_type = 2;
 * @return {number}
 */
proto.tcim.UserPrivateMode.prototype.getRoomType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserPrivateMode} returns this
 */
proto.tcim.UserPrivateMode.prototype.setRoomType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 uid = 3;
 * @return {number}
 */
proto.tcim.UserPrivateMode.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserPrivateMode} returns this
 */
proto.tcim.UserPrivateMode.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.tcim.UserPrivateMode.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserPrivateMode} returns this
 */
proto.tcim.UserPrivateMode.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string url = 5;
 * @return {string}
 */
proto.tcim.UserPrivateMode.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserPrivateMode} returns this
 */
proto.tcim.UserPrivateMode.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string feed_id = 6;
 * @return {string}
 */
proto.tcim.UserPrivateMode.prototype.getFeedId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserPrivateMode} returns this
 */
proto.tcim.UserPrivateMode.prototype.setFeedId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 feed_type = 7;
 * @return {number}
 */
proto.tcim.UserPrivateMode.prototype.getFeedType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserPrivateMode} returns this
 */
proto.tcim.UserPrivateMode.prototype.setFeedType = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated string image = 8;
 * @return {!Array<string>}
 */
proto.tcim.UserPrivateMode.prototype.getImageList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tcim.UserPrivateMode} returns this
 */
proto.tcim.UserPrivateMode.prototype.setImageList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tcim.UserPrivateMode} returns this
 */
proto.tcim.UserPrivateMode.prototype.addImage = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tcim.UserPrivateMode} returns this
 */
proto.tcim.UserPrivateMode.prototype.clearImageList = function() {
  return this.setImageList([]);
};


/**
 * optional uint32 type = 9;
 * @return {number}
 */
proto.tcim.UserPrivateMode.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserPrivateMode} returns this
 */
proto.tcim.UserPrivateMode.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 open_type = 10;
 * @return {number}
 */
proto.tcim.UserPrivateMode.prototype.getOpenType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserPrivateMode} returns this
 */
proto.tcim.UserPrivateMode.prototype.setOpenType = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string under_text = 11;
 * @return {string}
 */
proto.tcim.UserPrivateMode.prototype.getUnderText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserPrivateMode} returns this
 */
proto.tcim.UserPrivateMode.prototype.setUnderText = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UserAccostText.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UserAccostText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UserAccostText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserAccostText.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UserAccostText}
 */
proto.tcim.UserAccostText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UserAccostText;
  return proto.tcim.UserAccostText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UserAccostText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UserAccostText}
 */
proto.tcim.UserAccostText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UserAccostText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UserAccostText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UserAccostText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserAccostText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string content = 1;
 * @return {string}
 */
proto.tcim.UserAccostText.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserAccostText} returns this
 */
proto.tcim.UserAccostText.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UserPrivateRisk.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UserPrivateRisk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UserPrivateRisk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserPrivateRisk.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UserPrivateRisk}
 */
proto.tcim.UserPrivateRisk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UserPrivateRisk;
  return proto.tcim.UserPrivateRisk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UserPrivateRisk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UserPrivateRisk}
 */
proto.tcim.UserPrivateRisk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UserPrivateRisk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UserPrivateRisk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UserPrivateRisk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserPrivateRisk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.tcim.UserPrivateRisk.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserPrivateRisk} returns this
 */
proto.tcim.UserPrivateRisk.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UserInteractNotice.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UserInteractNotice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UserInteractNotice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserInteractNotice.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UserInteractNotice}
 */
proto.tcim.UserInteractNotice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UserInteractNotice;
  return proto.tcim.UserInteractNotice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UserInteractNotice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UserInteractNotice}
 */
proto.tcim.UserInteractNotice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UserInteractNotice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UserInteractNotice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UserInteractNotice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserInteractNotice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.UserInteractNotice.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserInteractNotice} returns this
 */
proto.tcim.UserInteractNotice.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UserVisitNotice.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UserVisitNotice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UserVisitNotice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserVisitNotice.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UserVisitNotice}
 */
proto.tcim.UserVisitNotice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UserVisitNotice;
  return proto.tcim.UserVisitNotice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UserVisitNotice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UserVisitNotice}
 */
proto.tcim.UserVisitNotice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UserVisitNotice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UserVisitNotice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UserVisitNotice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserVisitNotice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.UserVisitNotice.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserVisitNotice} returns this
 */
proto.tcim.UserVisitNotice.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 type = 2;
 * @return {number}
 */
proto.tcim.UserVisitNotice.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserVisitNotice} returns this
 */
proto.tcim.UserVisitNotice.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UserFollowFeedNotice.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UserFollowFeedNotice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UserFollowFeedNotice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserFollowFeedNotice.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UserFollowFeedNotice}
 */
proto.tcim.UserFollowFeedNotice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UserFollowFeedNotice;
  return proto.tcim.UserFollowFeedNotice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UserFollowFeedNotice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UserFollowFeedNotice}
 */
proto.tcim.UserFollowFeedNotice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UserFollowFeedNotice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UserFollowFeedNotice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UserFollowFeedNotice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserFollowFeedNotice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.UserFollowFeedNotice.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserFollowFeedNotice} returns this
 */
proto.tcim.UserFollowFeedNotice.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UserAirTicket.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UserAirTicket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UserAirTicket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserAirTicket.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roomType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    url: jspb.Message.getFieldWithDefault(msg, 5, ""),
    image: jspb.Message.getFieldWithDefault(msg, 6, ""),
    type: jspb.Message.getFieldWithDefault(msg, 7, 0),
    openType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    buttonType: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UserAirTicket}
 */
proto.tcim.UserAirTicket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UserAirTicket;
  return proto.tcim.UserAirTicket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UserAirTicket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UserAirTicket}
 */
proto.tcim.UserAirTicket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOpenType(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setButtonType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UserAirTicket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UserAirTicket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UserAirTicket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserAirTicket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRoomType();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getOpenType();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getButtonType();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
};


/**
 * optional uint64 rid = 1;
 * @return {number}
 */
proto.tcim.UserAirTicket.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserAirTicket} returns this
 */
proto.tcim.UserAirTicket.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 room_type = 2;
 * @return {number}
 */
proto.tcim.UserAirTicket.prototype.getRoomType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserAirTicket} returns this
 */
proto.tcim.UserAirTicket.prototype.setRoomType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 uid = 3;
 * @return {number}
 */
proto.tcim.UserAirTicket.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserAirTicket} returns this
 */
proto.tcim.UserAirTicket.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.tcim.UserAirTicket.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserAirTicket} returns this
 */
proto.tcim.UserAirTicket.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string url = 5;
 * @return {string}
 */
proto.tcim.UserAirTicket.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserAirTicket} returns this
 */
proto.tcim.UserAirTicket.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string image = 6;
 * @return {string}
 */
proto.tcim.UserAirTicket.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserAirTicket} returns this
 */
proto.tcim.UserAirTicket.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 type = 7;
 * @return {number}
 */
proto.tcim.UserAirTicket.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserAirTicket} returns this
 */
proto.tcim.UserAirTicket.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 open_type = 8;
 * @return {number}
 */
proto.tcim.UserAirTicket.prototype.getOpenType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserAirTicket} returns this
 */
proto.tcim.UserAirTicket.prototype.setOpenType = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 button_type = 9;
 * @return {number}
 */
proto.tcim.UserAirTicket.prototype.getButtonType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserAirTicket} returns this
 */
proto.tcim.UserAirTicket.prototype.setButtonType = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tcim.UserMessageTop.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UserMessageTop.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UserMessageTop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UserMessageTop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserMessageTop.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    propList: jspb.Message.toObjectList(msg.getPropList(),
    proto.tcim.UserMessageTopProp.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UserMessageTop}
 */
proto.tcim.UserMessageTop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UserMessageTop;
  return proto.tcim.UserMessageTop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UserMessageTop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UserMessageTop}
 */
proto.tcim.UserMessageTop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = new proto.tcim.UserMessageTopProp;
      reader.readMessage(value,proto.tcim.UserMessageTopProp.deserializeBinaryFromReader);
      msg.addProp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UserMessageTop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UserMessageTop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UserMessageTop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserMessageTop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPropList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.tcim.UserMessageTopProp.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 type = 1;
 * @return {number}
 */
proto.tcim.UserMessageTop.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserMessageTop} returns this
 */
proto.tcim.UserMessageTop.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.tcim.UserMessageTop.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserMessageTop} returns this
 */
proto.tcim.UserMessageTop.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.tcim.UserMessageTop.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserMessageTop} returns this
 */
proto.tcim.UserMessageTop.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated UserMessageTopProp prop = 4;
 * @return {!Array<!proto.tcim.UserMessageTopProp>}
 */
proto.tcim.UserMessageTop.prototype.getPropList = function() {
  return /** @type{!Array<!proto.tcim.UserMessageTopProp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tcim.UserMessageTopProp, 4));
};


/**
 * @param {!Array<!proto.tcim.UserMessageTopProp>} value
 * @return {!proto.tcim.UserMessageTop} returns this
*/
proto.tcim.UserMessageTop.prototype.setPropList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.tcim.UserMessageTopProp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tcim.UserMessageTopProp}
 */
proto.tcim.UserMessageTop.prototype.addProp = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.tcim.UserMessageTopProp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tcim.UserMessageTop} returns this
 */
proto.tcim.UserMessageTop.prototype.clearPropList = function() {
  return this.setPropList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.UserMessageTopProp.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.UserMessageTopProp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.UserMessageTopProp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserMessageTopProp.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resource: jspb.Message.getFieldWithDefault(msg, 4, ""),
    resourceType: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.UserMessageTopProp}
 */
proto.tcim.UserMessageTopProp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.UserMessageTopProp;
  return proto.tcim.UserMessageTopProp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.UserMessageTopProp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.UserMessageTopProp}
 */
proto.tcim.UserMessageTopProp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setResource(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setResourceType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.UserMessageTopProp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.UserMessageTopProp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.UserMessageTopProp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.UserMessageTopProp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getResource();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getResourceType();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.tcim.UserMessageTopProp.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserMessageTopProp} returns this
 */
proto.tcim.UserMessageTopProp.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 count = 2;
 * @return {number}
 */
proto.tcim.UserMessageTopProp.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserMessageTopProp} returns this
 */
proto.tcim.UserMessageTopProp.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 type = 3;
 * @return {number}
 */
proto.tcim.UserMessageTopProp.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserMessageTopProp} returns this
 */
proto.tcim.UserMessageTopProp.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string resource = 4;
 * @return {string}
 */
proto.tcim.UserMessageTopProp.prototype.getResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.UserMessageTopProp} returns this
 */
proto.tcim.UserMessageTopProp.prototype.setResource = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 resource_type = 5;
 * @return {number}
 */
proto.tcim.UserMessageTopProp.prototype.getResourceType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.UserMessageTopProp} returns this
 */
proto.tcim.UserMessageTopProp.prototype.setResourceType = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.User2022ValentineDayMessageTop.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.User2022ValentineDayMessageTop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.User2022ValentineDayMessageTop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.User2022ValentineDayMessageTop.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.User2022ValentineDayMessageTop}
 */
proto.tcim.User2022ValentineDayMessageTop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.User2022ValentineDayMessageTop;
  return proto.tcim.User2022ValentineDayMessageTop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.User2022ValentineDayMessageTop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.User2022ValentineDayMessageTop}
 */
proto.tcim.User2022ValentineDayMessageTop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.User2022ValentineDayMessageTop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.User2022ValentineDayMessageTop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.User2022ValentineDayMessageTop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.User2022ValentineDayMessageTop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.tcim.User2022ValentineDayMessageTop.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.User2022ValentineDayMessageTop} returns this
 */
proto.tcim.User2022ValentineDayMessageTop.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.InviteJoinRoom.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.InviteJoinRoom.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.InviteJoinRoom} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.InviteJoinRoom.toObject = function(includeInstance, msg) {
  var f, obj = {
    avatar: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cover: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    roomType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    topicTitle: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.InviteJoinRoom}
 */
proto.tcim.InviteJoinRoom.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.InviteJoinRoom;
  return proto.tcim.InviteJoinRoom.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.InviteJoinRoom} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.InviteJoinRoom}
 */
proto.tcim.InviteJoinRoom.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCover(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopicTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.InviteJoinRoom.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.InviteJoinRoom.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.InviteJoinRoom} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.InviteJoinRoom.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCover();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getRoomType();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTopicTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string avatar = 1;
 * @return {string}
 */
proto.tcim.InviteJoinRoom.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.InviteJoinRoom} returns this
 */
proto.tcim.InviteJoinRoom.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cover = 2;
 * @return {string}
 */
proto.tcim.InviteJoinRoom.prototype.getCover = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.InviteJoinRoom} returns this
 */
proto.tcim.InviteJoinRoom.prototype.setCover = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 rid = 3;
 * @return {number}
 */
proto.tcim.InviteJoinRoom.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.InviteJoinRoom} returns this
 */
proto.tcim.InviteJoinRoom.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 room_type = 4;
 * @return {number}
 */
proto.tcim.InviteJoinRoom.prototype.getRoomType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.InviteJoinRoom} returns this
 */
proto.tcim.InviteJoinRoom.prototype.setRoomType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string topic_title = 5;
 * @return {string}
 */
proto.tcim.InviteJoinRoom.prototype.getTopicTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.InviteJoinRoom} returns this
 */
proto.tcim.InviteJoinRoom.prototype.setTopicTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.PKInvitation.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.PKInvitation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.PKInvitation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.PKInvitation.toObject = function(includeInstance, msg) {
  var f, obj = {
    avatar: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nick: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fromRid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    roomTitle: jspb.Message.getFieldWithDefault(msg, 4, ""),
    roomHot: jspb.Message.getFieldWithDefault(msg, 5, 0),
    topic: jspb.Message.getFieldWithDefault(msg, 6, ""),
    punish: jspb.Message.getFieldWithDefault(msg, 7, ""),
    pkid: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.PKInvitation}
 */
proto.tcim.PKInvitation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.PKInvitation;
  return proto.tcim.PKInvitation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.PKInvitation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.PKInvitation}
 */
proto.tcim.PKInvitation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNick(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFromRid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomTitle(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRoomHot(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPunish(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPkid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.PKInvitation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.PKInvitation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.PKInvitation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.PKInvitation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNick();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFromRid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getRoomTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRoomHot();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPunish();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPkid();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
};


/**
 * optional string avatar = 1;
 * @return {string}
 */
proto.tcim.PKInvitation.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.PKInvitation} returns this
 */
proto.tcim.PKInvitation.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string nick = 2;
 * @return {string}
 */
proto.tcim.PKInvitation.prototype.getNick = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.PKInvitation} returns this
 */
proto.tcim.PKInvitation.prototype.setNick = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 from_rid = 3;
 * @return {number}
 */
proto.tcim.PKInvitation.prototype.getFromRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKInvitation} returns this
 */
proto.tcim.PKInvitation.prototype.setFromRid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string room_title = 4;
 * @return {string}
 */
proto.tcim.PKInvitation.prototype.getRoomTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.PKInvitation} returns this
 */
proto.tcim.PKInvitation.prototype.setRoomTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 room_hot = 5;
 * @return {number}
 */
proto.tcim.PKInvitation.prototype.getRoomHot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKInvitation} returns this
 */
proto.tcim.PKInvitation.prototype.setRoomHot = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string topic = 6;
 * @return {string}
 */
proto.tcim.PKInvitation.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.PKInvitation} returns this
 */
proto.tcim.PKInvitation.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string punish = 7;
 * @return {string}
 */
proto.tcim.PKInvitation.prototype.getPunish = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.PKInvitation} returns this
 */
proto.tcim.PKInvitation.prototype.setPunish = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint64 pkid = 8;
 * @return {number}
 */
proto.tcim.PKInvitation.prototype.getPkid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKInvitation} returns this
 */
proto.tcim.PKInvitation.prototype.setPkid = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.PKInvitationFeedback.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.PKInvitationFeedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.PKInvitationFeedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.PKInvitationFeedback.toObject = function(includeInstance, msg) {
  var f, obj = {
    pkid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dstRid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.PKInvitationFeedback}
 */
proto.tcim.PKInvitationFeedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.PKInvitationFeedback;
  return proto.tcim.PKInvitationFeedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.PKInvitationFeedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.PKInvitationFeedback}
 */
proto.tcim.PKInvitationFeedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPkid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDstRid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.PKInvitationFeedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.PKInvitationFeedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.PKInvitationFeedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.PKInvitationFeedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPkid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getDstRid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 pkid = 1;
 * @return {number}
 */
proto.tcim.PKInvitationFeedback.prototype.getPkid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKInvitationFeedback} returns this
 */
proto.tcim.PKInvitationFeedback.prototype.setPkid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 type = 2;
 * @return {number}
 */
proto.tcim.PKInvitationFeedback.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKInvitationFeedback} returns this
 */
proto.tcim.PKInvitationFeedback.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 dst_rid = 3;
 * @return {number}
 */
proto.tcim.PKInvitationFeedback.prototype.getDstRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKInvitationFeedback} returns this
 */
proto.tcim.PKInvitationFeedback.prototype.setDstRid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RandomPKMatched.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RandomPKMatched.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RandomPKMatched} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RandomPKMatched.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nick: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 3, 0),
    creditLevel: jspb.Message.getFieldWithDefault(msg, 4, 0),
    avatar: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fromRid: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pkid: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RandomPKMatched}
 */
proto.tcim.RandomPKMatched.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RandomPKMatched;
  return proto.tcim.RandomPKMatched.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RandomPKMatched} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RandomPKMatched}
 */
proto.tcim.RandomPKMatched.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNick(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGender(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreditLevel(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFromRid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPkid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RandomPKMatched.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RandomPKMatched.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RandomPKMatched} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RandomPKMatched.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNick();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGender();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getCreditLevel();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFromRid();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getPkid();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.tcim.RandomPKMatched.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RandomPKMatched} returns this
 */
proto.tcim.RandomPKMatched.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nick = 2;
 * @return {string}
 */
proto.tcim.RandomPKMatched.prototype.getNick = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.RandomPKMatched} returns this
 */
proto.tcim.RandomPKMatched.prototype.setNick = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 gender = 3;
 * @return {number}
 */
proto.tcim.RandomPKMatched.prototype.getGender = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RandomPKMatched} returns this
 */
proto.tcim.RandomPKMatched.prototype.setGender = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 credit_level = 4;
 * @return {number}
 */
proto.tcim.RandomPKMatched.prototype.getCreditLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RandomPKMatched} returns this
 */
proto.tcim.RandomPKMatched.prototype.setCreditLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string avatar = 5;
 * @return {string}
 */
proto.tcim.RandomPKMatched.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.RandomPKMatched} returns this
 */
proto.tcim.RandomPKMatched.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 from_rid = 6;
 * @return {number}
 */
proto.tcim.RandomPKMatched.prototype.getFromRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RandomPKMatched} returns this
 */
proto.tcim.RandomPKMatched.prototype.setFromRid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 pkid = 7;
 * @return {number}
 */
proto.tcim.RandomPKMatched.prototype.getPkid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RandomPKMatched} returns this
 */
proto.tcim.RandomPKMatched.prototype.setPkid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.PKStateChange.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.PKStateChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.PKStateChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.PKStateChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    pkid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hostUid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    guestUid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    hostRid: jspb.Message.getFieldWithDefault(msg, 5, 0),
    guestRid: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pkState: jspb.Message.getFieldWithDefault(msg, 7, 0),
    endTime: jspb.Message.getFieldWithDefault(msg, 8, 0),
    topic: jspb.Message.getFieldWithDefault(msg, 9, ""),
    punish: jspb.Message.getFieldWithDefault(msg, 10, ""),
    guestNick: jspb.Message.getFieldWithDefault(msg, 11, ""),
    iconReset: jspb.Message.getFieldWithDefault(msg, 12, ""),
    time: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.PKStateChange}
 */
proto.tcim.PKStateChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.PKStateChange;
  return proto.tcim.PKStateChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.PKStateChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.PKStateChange}
 */
proto.tcim.PKStateChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPkid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHostUid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGuestUid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHostRid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGuestRid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPkState(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEndTime(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPunish(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuestNick(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconReset(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.PKStateChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.PKStateChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.PKStateChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.PKStateChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPkid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getHostUid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getGuestUid();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getHostRid();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getGuestRid();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getPkState();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getEndTime();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPunish();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getGuestNick();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getIconReset();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
};


/**
 * optional uint64 pkid = 1;
 * @return {number}
 */
proto.tcim.PKStateChange.prototype.getPkid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKStateChange} returns this
 */
proto.tcim.PKStateChange.prototype.setPkid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 state = 2;
 * @return {number}
 */
proto.tcim.PKStateChange.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKStateChange} returns this
 */
proto.tcim.PKStateChange.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 host_uid = 3;
 * @return {number}
 */
proto.tcim.PKStateChange.prototype.getHostUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKStateChange} returns this
 */
proto.tcim.PKStateChange.prototype.setHostUid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 guest_uid = 4;
 * @return {number}
 */
proto.tcim.PKStateChange.prototype.getGuestUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKStateChange} returns this
 */
proto.tcim.PKStateChange.prototype.setGuestUid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 host_rid = 5;
 * @return {number}
 */
proto.tcim.PKStateChange.prototype.getHostRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKStateChange} returns this
 */
proto.tcim.PKStateChange.prototype.setHostRid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 guest_rid = 6;
 * @return {number}
 */
proto.tcim.PKStateChange.prototype.getGuestRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKStateChange} returns this
 */
proto.tcim.PKStateChange.prototype.setGuestRid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 pk_state = 7;
 * @return {number}
 */
proto.tcim.PKStateChange.prototype.getPkState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKStateChange} returns this
 */
proto.tcim.PKStateChange.prototype.setPkState = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 end_time = 8;
 * @return {number}
 */
proto.tcim.PKStateChange.prototype.getEndTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKStateChange} returns this
 */
proto.tcim.PKStateChange.prototype.setEndTime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string topic = 9;
 * @return {string}
 */
proto.tcim.PKStateChange.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.PKStateChange} returns this
 */
proto.tcim.PKStateChange.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string punish = 10;
 * @return {string}
 */
proto.tcim.PKStateChange.prototype.getPunish = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.PKStateChange} returns this
 */
proto.tcim.PKStateChange.prototype.setPunish = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string guest_nick = 11;
 * @return {string}
 */
proto.tcim.PKStateChange.prototype.getGuestNick = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.PKStateChange} returns this
 */
proto.tcim.PKStateChange.prototype.setGuestNick = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string icon_reset = 12;
 * @return {string}
 */
proto.tcim.PKStateChange.prototype.getIconReset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.PKStateChange} returns this
 */
proto.tcim.PKStateChange.prototype.setIconReset = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional uint64 time = 13;
 * @return {number}
 */
proto.tcim.PKStateChange.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKStateChange} returns this
 */
proto.tcim.PKStateChange.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.PKScoreRefresh.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.PKScoreRefresh.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.PKScoreRefresh} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.PKScoreRefresh.toObject = function(includeInstance, msg) {
  var f, obj = {
    pkid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hostScore: jspb.Message.getFieldWithDefault(msg, 3, 0),
    guestScore: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.PKScoreRefresh}
 */
proto.tcim.PKScoreRefresh.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.PKScoreRefresh;
  return proto.tcim.PKScoreRefresh.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.PKScoreRefresh} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.PKScoreRefresh}
 */
proto.tcim.PKScoreRefresh.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPkid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHostScore(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGuestScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.PKScoreRefresh.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.PKScoreRefresh.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.PKScoreRefresh} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.PKScoreRefresh.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPkid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getHostScore();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getGuestScore();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 pkid = 1;
 * @return {number}
 */
proto.tcim.PKScoreRefresh.prototype.getPkid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKScoreRefresh} returns this
 */
proto.tcim.PKScoreRefresh.prototype.setPkid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 rid = 2;
 * @return {number}
 */
proto.tcim.PKScoreRefresh.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKScoreRefresh} returns this
 */
proto.tcim.PKScoreRefresh.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 host_score = 3;
 * @return {number}
 */
proto.tcim.PKScoreRefresh.prototype.getHostScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKScoreRefresh} returns this
 */
proto.tcim.PKScoreRefresh.prototype.setHostScore = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 guest_score = 4;
 * @return {number}
 */
proto.tcim.PKScoreRefresh.prototype.getGuestScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.PKScoreRefresh} returns this
 */
proto.tcim.PKScoreRefresh.prototype.setGuestScore = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.RoomOpenLive.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.RoomOpenLive.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.RoomOpenLive} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomOpenLive.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.RoomOpenLive}
 */
proto.tcim.RoomOpenLive.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.RoomOpenLive;
  return proto.tcim.RoomOpenLive.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.RoomOpenLive} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.RoomOpenLive}
 */
proto.tcim.RoomOpenLive.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.RoomOpenLive.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.RoomOpenLive.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.RoomOpenLive} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.RoomOpenLive.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 rid = 1;
 * @return {number}
 */
proto.tcim.RoomOpenLive.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.RoomOpenLive} returns this
 */
proto.tcim.RoomOpenLive.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tcim.GuessScheduleStatusChange.prototype.toObject = function(opt_includeInstance) {
  return proto.tcim.GuessScheduleStatusChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcim.GuessScheduleStatusChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GuessScheduleStatusChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    sid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tikTime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    serverTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    luckyTicket: jspb.Message.getFieldWithDefault(msg, 5, 0),
    big: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tcim.GuessScheduleStatusChange}
 */
proto.tcim.GuessScheduleStatusChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcim.GuessScheduleStatusChange;
  return proto.tcim.GuessScheduleStatusChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcim.GuessScheduleStatusChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcim.GuessScheduleStatusChange}
 */
proto.tcim.GuessScheduleStatusChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTikTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setServerTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLuckyTicket(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tcim.GuessScheduleStatusChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcim.GuessScheduleStatusChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcim.GuessScheduleStatusChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcim.GuessScheduleStatusChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTikTime();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getServerTime();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getLuckyTicket();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getBig();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional uint32 sid = 1;
 * @return {number}
 */
proto.tcim.GuessScheduleStatusChange.prototype.getSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GuessScheduleStatusChange} returns this
 */
proto.tcim.GuessScheduleStatusChange.prototype.setSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 status = 2;
 * @return {number}
 */
proto.tcim.GuessScheduleStatusChange.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GuessScheduleStatusChange} returns this
 */
proto.tcim.GuessScheduleStatusChange.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 tik_time = 3;
 * @return {number}
 */
proto.tcim.GuessScheduleStatusChange.prototype.getTikTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GuessScheduleStatusChange} returns this
 */
proto.tcim.GuessScheduleStatusChange.prototype.setTikTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 server_time = 4;
 * @return {number}
 */
proto.tcim.GuessScheduleStatusChange.prototype.getServerTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GuessScheduleStatusChange} returns this
 */
proto.tcim.GuessScheduleStatusChange.prototype.setServerTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 lucky_ticket = 5;
 * @return {number}
 */
proto.tcim.GuessScheduleStatusChange.prototype.getLuckyTicket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tcim.GuessScheduleStatusChange} returns this
 */
proto.tcim.GuessScheduleStatusChange.prototype.setLuckyTicket = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string big = 6;
 * @return {string}
 */
proto.tcim.GuessScheduleStatusChange.prototype.getBig = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcim.GuessScheduleStatusChange} returns this
 */
proto.tcim.GuessScheduleStatusChange.prototype.setBig = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.tcim);
