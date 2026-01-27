(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"google-protobuf":2}],2:[function(require,module,exports){
(function (global,Buffer){(function (){
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Array.prototype.findIndex",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).i}},"es6","es3");
$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
$jscomp.polyfill("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=$jscomp.checkStringArgs(this,a,"endsWith");a+="";void 0===c&&(c=b.length);c=Math.max(0,Math.min(c|0,b.length));for(var e=a.length;0<e&&0<c;)if(b[--c]!=a[--e])return!1;return 0>=e}},"es6","es3");$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6","es3");
$jscomp.polyfill("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=$jscomp.checkStringArgs(this,a,"startsWith");a+="";var e=b.length,f=a.length;c=Math.max(0,Math.min(c|0,b.length));for(var g=0;g<f&&c<e;)if(b[c++]!=a[g++])return!1;return g>=f}},"es6","es3");
$jscomp.polyfill("String.prototype.repeat",function(a){return a?a:function(a){var b=$jscomp.checkStringArgs(this,null,"repeat");if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}},"es6","es3");var COMPILED=!0,goog=goog||{};goog.global=this||self;goog.isDef=function(a){return void 0!==a};goog.isString=function(a){return"string"==typeof a};goog.isBoolean=function(a){return"boolean"==typeof a};
goog.isNumber=function(a){return"number"==typeof a};goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}};
goog.define=function(a,b){if(!COMPILED){var c=goog.global.CLOSURE_UNCOMPILED_DEFINES,d=goog.global.CLOSURE_DEFINES;c&&void 0===c.nodeType&&Object.prototype.hasOwnProperty.call(c,a)?b=c[a]:d&&void 0===d.nodeType&&Object.prototype.hasOwnProperty.call(d,a)&&(b=d[a])}return b};goog.FEATURESET_YEAR=2012;goog.DEBUG=!0;goog.LOCALE="en";goog.TRUSTED_SITE=!0;goog.STRICT_MODE_COMPATIBLE=!1;goog.DISALLOW_TEST_ONLY_CODE=COMPILED&&!goog.DEBUG;goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING=!1;
goog.provide=function(a){if(goog.isInModuleLoader_())throw Error("goog.provide cannot be used within a module.");if(!COMPILED&&goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');goog.constructNamespace_(a)};goog.constructNamespace_=function(a,b){if(!COMPILED){delete goog.implicitNamespaces_[a];for(var c=a;(c=c.substring(0,c.lastIndexOf(".")))&&!goog.getObjectByName(c);)goog.implicitNamespaces_[c]=!0}goog.exportPath_(a,b)};
goog.getScriptNonce=function(a){if(a&&a!=goog.global)return goog.getScriptNonce_(a.document);null===goog.cspNonce_&&(goog.cspNonce_=goog.getScriptNonce_(goog.global.document));return goog.cspNonce_};goog.NONCE_PATTERN_=/^[\w+/_-]+[=]{0,2}$/;goog.cspNonce_=null;goog.getScriptNonce_=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&goog.NONCE_PATTERN_.test(a)?a:""};goog.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module=function(a){if(!goog.isString(a)||!a||-1==a.search(goog.VALID_MODULE_RE_))throw Error("Invalid module identifier");if(!goog.isInGoogModuleLoader_())throw Error("Module "+a+" has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
if(goog.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");goog.moduleLoaderState_.moduleName=a;if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a]}};goog.module.get=function(a){return goog.module.getInternal_(a)};
goog.module.getInternal_=function(a){if(!COMPILED){if(a in goog.loadedModules_)return goog.loadedModules_[a].exports;if(!goog.implicitNamespaces_[a])return a=goog.getObjectByName(a),null!=a?a:null}return null};goog.ModuleType={ES6:"es6",GOOG:"goog"};goog.moduleLoaderState_=null;goog.isInModuleLoader_=function(){return goog.isInGoogModuleLoader_()||goog.isInEs6ModuleLoader_()};goog.isInGoogModuleLoader_=function(){return!!goog.moduleLoaderState_&&goog.moduleLoaderState_.type==goog.ModuleType.GOOG};
goog.isInEs6ModuleLoader_=function(){if(goog.moduleLoaderState_&&goog.moduleLoaderState_.type==goog.ModuleType.ES6)return!0;var a=goog.global.$jscomp;return a?"function"!=typeof a.getCurrentModulePath?!1:!!a.getCurrentModulePath():!1};
goog.module.declareLegacyNamespace=function(){if(!COMPILED&&!goog.isInGoogModuleLoader_())throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");if(!COMPILED&&!goog.moduleLoaderState_.moduleName)throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");goog.moduleLoaderState_.declareLegacyNamespace=!0};
goog.declareModuleId=function(a){if(!COMPILED){if(!goog.isInEs6ModuleLoader_())throw Error("goog.declareModuleId may only be called from within an ES6 module");if(goog.moduleLoaderState_&&goog.moduleLoaderState_.moduleName)throw Error("goog.declareModuleId may only be called once per module.");if(a in goog.loadedModules_)throw Error('Module with namespace "'+a+'" already exists.');}if(goog.moduleLoaderState_)goog.moduleLoaderState_.moduleName=a;else{var b=goog.global.$jscomp;if(!b||"function"!=typeof b.getCurrentModulePath)throw Error('Module with namespace "'+
a+'" has been loaded incorrectly.');b=b.require(b.getCurrentModulePath());goog.loadedModules_[a]={exports:b,type:goog.ModuleType.ES6,moduleId:a}}};goog.setTestOnly=function(a){if(goog.DISALLOW_TEST_ONLY_CODE)throw a=a||"",Error("Importing test-only code into non-debug environment"+(a?": "+a:"."));};goog.forwardDeclare=function(a){};
COMPILED||(goog.isProvided_=function(a){return a in goog.loadedModules_||!goog.implicitNamespaces_[a]&&goog.isDefAndNotNull(goog.getObjectByName(a))},goog.implicitNamespaces_={"goog.module":!0});goog.getObjectByName=function(a,b){a=a.split(".");b=b||goog.global;for(var c=0;c<a.length;c++)if(b=b[a[c]],!goog.isDefAndNotNull(b))return null;return b};goog.globalize=function(a,b){b=b||goog.global;for(var c in a)b[c]=a[c]};
goog.addDependency=function(a,b,c,d){!COMPILED&&goog.DEPENDENCIES_ENABLED&&goog.debugLoader_.addDependency(a,b,c,d)};goog.ENABLE_DEBUG_LOADER=!0;goog.logToConsole_=function(a){goog.global.console&&goog.global.console.error(a)};
goog.require=function(a){if(!COMPILED){goog.ENABLE_DEBUG_LOADER&&goog.debugLoader_.requested(a);if(goog.isProvided_(a)){if(goog.isInModuleLoader_())return goog.module.getInternal_(a)}else if(goog.ENABLE_DEBUG_LOADER){var b=goog.moduleLoaderState_;goog.moduleLoaderState_=null;try{goog.debugLoader_.load_(a)}finally{goog.moduleLoaderState_=b}}return null}};goog.requireType=function(a){return{}};goog.basePath="";goog.nullFunction=function(){};
goog.abstractMethod=function(){throw Error("unimplemented abstract method");};goog.addSingletonGetter=function(a){a.instance_=void 0;a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];goog.LOAD_MODULE_USING_EVAL=!0;goog.SEAL_MODULE_EXPORTS=goog.DEBUG;goog.loadedModules_={};goog.DEPENDENCIES_ENABLED=!COMPILED&&goog.ENABLE_DEBUG_LOADER;goog.TRANSPILE="detect";
goog.ASSUME_ES_MODULES_TRANSPILED=!1;goog.TRANSPILE_TO_LANGUAGE="";goog.TRANSPILER="transpile.js";goog.hasBadLetScoping=null;goog.useSafari10Workaround=function(){if(null==goog.hasBadLetScoping){try{var a=!eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')}catch(b){a=!1}goog.hasBadLetScoping=a}return goog.hasBadLetScoping};goog.workaroundSafari10EvalBug=function(a){return"(function(){"+a+"\n;})();\n"};
goog.loadModule=function(a){var b=goog.moduleLoaderState_;try{goog.moduleLoaderState_={moduleName:"",declareLegacyNamespace:!1,type:goog.ModuleType.GOOG};if(goog.isFunction(a))var c=a.call(void 0,{});else if(goog.isString(a))goog.useSafari10Workaround()&&(a=goog.workaroundSafari10EvalBug(a)),c=goog.loadModuleFromSource_.call(void 0,a);else throw Error("Invalid module definition");var d=goog.moduleLoaderState_.moduleName;if(goog.isString(d)&&d)goog.moduleLoaderState_.declareLegacyNamespace?goog.constructNamespace_(d,
c):goog.SEAL_MODULE_EXPORTS&&Object.seal&&"object"==typeof c&&null!=c&&Object.seal(c),goog.loadedModules_[d]={exports:c,type:goog.ModuleType.GOOG,moduleId:goog.moduleLoaderState_.moduleName};else throw Error('Invalid module name "'+d+'"');}finally{goog.moduleLoaderState_=b}};goog.loadModuleFromSource_=function(a){eval(a);return{}};goog.normalizePath_=function(a){a=a.split("/");for(var b=0;b<a.length;)"."==a[b]?a.splice(b,1):b&&".."==a[b]&&a[b-1]&&".."!=a[b-1]?a.splice(--b,2):b++;return a.join("/")};
goog.loadFileSync_=function(a){if(goog.global.CLOSURE_LOAD_FILE_SYNC)return goog.global.CLOSURE_LOAD_FILE_SYNC(a);try{var b=new goog.global.XMLHttpRequest;b.open("get",a,!1);b.send();return 0==b.status||200==b.status?b.responseText:null}catch(c){return null}};
goog.transpile_=function(a,b,c){var d=goog.global.$jscomp;d||(goog.global.$jscomp=d={});var e=d.transpile;if(!e){var f=goog.basePath+goog.TRANSPILER,g=goog.loadFileSync_(f);if(g){(function(){(0,eval)(g+"\n//# sourceURL="+f)}).call(goog.global);if(goog.global.$gwtExport&&goog.global.$gwtExport.$jscomp&&!goog.global.$gwtExport.$jscomp.transpile)throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: '+JSON.stringify(goog.global.$gwtExport));goog.global.$jscomp.transpile=
goog.global.$gwtExport.$jscomp.transpile;d=goog.global.$jscomp;e=d.transpile}}e||(e=d.transpile=function(a,b){goog.logToConsole_(b+" requires transpilation but no transpiler was found.");return a});return e(a,b,c)};
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isNull=function(a){return null===a};goog.isDefAndNotNull=function(a){return null!=a};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isFunction=function(a){return"function"==goog.typeOf(a)};
goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.hasUid=function(a){return!!a[goog.UID_PROPERTY_]};goog.removeUid=function(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};goog.UID_PROPERTY_="closure_uid_"+(1E9*Math.random()>>>0);goog.uidCounter_=0;goog.getHashCode=goog.getUid;
goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if("function"===typeof a.clone)return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bind=goog.bindNative_:goog.bind=goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval){if(null==goog.evalWorksForGlobals_){try{goog.global.eval("var _evalTest_ = 1;")}catch(d){}if("undefined"!=typeof goog.global._evalTest_){try{delete goog.global._evalTest_}catch(d){}goog.evalWorksForGlobals_=!0}else goog.evalWorksForGlobals_=!1}if(goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("SCRIPT");c.type="text/javascript";c.defer=
!1;c.appendChild(b.createTextNode(a));b.head.appendChild(c);b.head.removeChild(c)}}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;
goog.getCssName=function(a,b){if("."==String(a).charAt(0))throw Error('className passed in goog.getCssName must not start with ".". You passed: '+a);var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){a=a.split("-");for(var b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")};d=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?c:d:function(a){return a};a=b?a+"-"+d(b):d(a);return goog.global.CLOSURE_CSS_NAME_MAP_FN?goog.global.CLOSURE_CSS_NAME_MAP_FN(a):a};
goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b,c){c&&c.html&&(a=a.replace(/</g,"&lt;"));b&&(a=a.replace(/\{\$([^}]+)}/g,function(a,c){return null!=b&&c in b?b[c]:a}));return a};goog.getMsgWithFallback=function(a,b){return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};
goog.exportProperty=function(a,b,c){a[b]=c};goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(goog.STRICT_MODE_COMPATIBLE||goog.DEBUG&&!d)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if("undefined"!==typeof d.superClass_){for(var e=Array(arguments.length-1),f=1;f<arguments.length;f++)e[f-1]=arguments[f];return d.superClass_.constructor.apply(a,e)}if("string"!=typeof b&&"symbol"!=typeof b)throw Error("method names provided to goog.base must be a string or a symbol");
e=Array(arguments.length-2);for(f=2;f<arguments.length;f++)e[f-2]=arguments[f];f=!1;for(var g=a.constructor.prototype;g;g=Object.getPrototypeOf(g))if(g[b]===d)f=!0;else if(f)return g[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};goog.scope=function(a){if(goog.isInModuleLoader_())throw Error("goog.scope is not supported within a module.");a.call(goog.global)};
COMPILED||(goog.global.COMPILED=COMPILED);goog.defineClass=function(a,b){var c=b.constructor,d=b.statics;c&&c!=Object.prototype.constructor||(c=function(){throw Error("cannot instantiate an interface (no constructor defined).");});c=goog.defineClass.createSealingConstructor_(c,a);a&&goog.inherits(c,a);delete b.constructor;delete b.statics;goog.defineClass.applyProperties_(c.prototype,b);null!=d&&(d instanceof Function?d(c):goog.defineClass.applyProperties_(c,d));return c};
goog.defineClass.SEAL_CLASS_INSTANCES=goog.DEBUG;goog.defineClass.createSealingConstructor_=function(a,b){if(!goog.defineClass.SEAL_CLASS_INSTANCES)return a;var c=!goog.defineClass.isUnsealable_(b),d=function(){var b=a.apply(this,arguments)||this;b[goog.UID_PROPERTY_]=b[goog.UID_PROPERTY_];this.constructor===d&&c&&Object.seal instanceof Function&&Object.seal(b);return b};return d};goog.defineClass.isUnsealable_=function(a){return a&&a.prototype&&a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");goog.defineClass.applyProperties_=function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c]);for(var d=0;d<goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;d++)c=goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d],Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])};
goog.tagUnsealableClass=function(a){!COMPILED&&goog.defineClass.SEAL_CLASS_INSTANCES&&(a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]=!0)};goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable";
!COMPILED&&goog.DEPENDENCIES_ENABLED&&(goog.inHtmlDocument_=function(){var a=goog.global.document;return null!=a&&"write"in a},goog.isDocumentLoading_=function(){var a=goog.global.document;return a.attachEvent?"complete"!=a.readyState:"loading"==a.readyState},goog.findBasePath_=function(){if(goog.isDef(goog.global.CLOSURE_BASE_PATH)&&goog.isString(goog.global.CLOSURE_BASE_PATH))goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_()){var a=goog.global.document,b=a.currentScript;
a=b?[b]:a.getElementsByTagName("SCRIPT");for(b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?");d=-1==d?c.length:d;if("base.js"==c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}}},goog.findBasePath_(),goog.Transpiler=function(){this.requiresTranspilation_=null;this.transpilationTarget_=goog.TRANSPILE_TO_LANGUAGE},goog.Transpiler.prototype.createRequiresTranspilation_=function(){function a(a,b){e?d[a]=!0:b()?(c=a,d[a]=!1):e=d[a]=!0}function b(a){try{return!!eval(a)}catch(h){return!1}}
var c="es3",d={es3:!1},e=!1,f=goog.global.navigator&&goog.global.navigator.userAgent?goog.global.navigator.userAgent:"";a("es5",function(){return b("[1,].length==1")});a("es6",function(){return f.match(/Edge\/(\d+)(\.\d)*/i)?!1:b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')});
a("es7",function(){return b("2 ** 2 == 4")});a("es8",function(){return b("async () => 1, true")});a("es9",function(){return b("({...rest} = {}), true")});a("es_next",function(){return!1});return{target:c,map:d}},goog.Transpiler.prototype.needsTranspile=function(a,b){if("always"==goog.TRANSPILE)return!0;if("never"==goog.TRANSPILE)return!1;if(!this.requiresTranspilation_){var c=this.createRequiresTranspilation_();this.requiresTranspilation_=c.map;this.transpilationTarget_=this.transpilationTarget_||
c.target}if(a in this.requiresTranspilation_)return this.requiresTranspilation_[a]?!0:!goog.inHtmlDocument_()||"es6"!=b||"noModule"in goog.global.document.createElement("script")?!1:!0;throw Error("Unknown language mode: "+a);},goog.Transpiler.prototype.transpile=function(a,b){return goog.transpile_(a,b,this.transpilationTarget_)},goog.transpiler_=new goog.Transpiler,goog.protectScriptTag_=function(a){return a.replace(/<\/(SCRIPT)/ig,"\\x3c/$1")},goog.DebugLoader_=function(){this.dependencies_={};
this.idToPath_={};this.written_={};this.loadingDeps_=[];this.depsToLoad_=[];this.paused_=!1;this.factory_=new goog.DependencyFactory(goog.transpiler_);this.deferredCallbacks_={};this.deferredQueue_=[]},goog.DebugLoader_.prototype.bootstrap=function(a,b){function c(){d&&(goog.global.setTimeout(d,0),d=null)}var d=b;if(a.length){b=[];for(var e=0;e<a.length;e++){var f=this.getPathFromDeps_(a[e]);if(!f)throw Error("Unregonized namespace: "+a[e]);b.push(this.dependencies_[f])}f=goog.require;var g=0;for(e=
0;e<a.length;e++)f(a[e]),b[e].onLoad(function(){++g==a.length&&c()})}else c()},goog.DebugLoader_.prototype.loadClosureDeps=function(){this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath+"deps.js"),"deps.js",[],[],{},!1));this.loadDeps_()},goog.DebugLoader_.prototype.requested=function(a,b){(a=this.getPathFromDeps_(a))&&(b||this.areDepsLoaded_(this.dependencies_[a].requires))&&(b=this.deferredCallbacks_[a])&&(delete this.deferredCallbacks_[a],b())},goog.DebugLoader_.prototype.setDependencyFactory=
function(a){this.factory_=a},goog.DebugLoader_.prototype.load_=function(a){if(this.getPathFromDeps_(a)){var b=this,c=[],d=function(a){var e=b.getPathFromDeps_(a);if(!e)throw Error("Bad dependency path or symbol: "+a);if(!b.written_[e]){b.written_[e]=!0;a=b.dependencies_[e];for(e=0;e<a.requires.length;e++)goog.isProvided_(a.requires[e])||d(a.requires[e]);c.push(a)}};d(a);a=!!this.depsToLoad_.length;this.depsToLoad_=this.depsToLoad_.concat(c);this.paused_||a||this.loadDeps_()}else throw a="goog.require could not find: "+
a,goog.logToConsole_(a),Error(a);},goog.DebugLoader_.prototype.loadDeps_=function(){for(var a=this,b=this.paused_;this.depsToLoad_.length&&!b;)(function(){var c=!1,d=a.depsToLoad_.shift(),e=!1;a.loading_(d);var f={pause:function(){if(c)throw Error("Cannot call pause after the call to load.");b=!0},resume:function(){c?a.resume_():b=!1},loaded:function(){if(e)throw Error("Double call to loaded.");e=!0;a.loaded_(d)},pending:function(){for(var b=[],c=0;c<a.loadingDeps_.length;c++)b.push(a.loadingDeps_[c]);
return b},setModuleState:function(a){goog.moduleLoaderState_={type:a,moduleName:"",declareLegacyNamespace:!1}},registerEs6ModuleExports:function(a,b,c){c&&(goog.loadedModules_[c]={exports:b,type:goog.ModuleType.ES6,moduleId:c||""})},registerGoogModuleExports:function(a,b){goog.loadedModules_[a]={exports:b,type:goog.ModuleType.GOOG,moduleId:a}},clearModuleState:function(){goog.moduleLoaderState_=null},defer:function(b){if(c)throw Error("Cannot register with defer after the call to load.");a.defer_(d,
b)},areDepsLoaded:function(){return a.areDepsLoaded_(d.requires)}};try{d.load(f)}finally{c=!0}})();b&&this.pause_()},goog.DebugLoader_.prototype.pause_=function(){this.paused_=!0},goog.DebugLoader_.prototype.resume_=function(){this.paused_&&(this.paused_=!1,this.loadDeps_())},goog.DebugLoader_.prototype.loading_=function(a){this.loadingDeps_.push(a)},goog.DebugLoader_.prototype.loaded_=function(a){for(var b=0;b<this.loadingDeps_.length;b++)if(this.loadingDeps_[b]==a){this.loadingDeps_.splice(b,1);
break}for(b=0;b<this.deferredQueue_.length;b++)if(this.deferredQueue_[b]==a.path){this.deferredQueue_.splice(b,1);break}if(this.loadingDeps_.length==this.deferredQueue_.length&&!this.depsToLoad_.length)for(;this.deferredQueue_.length;)this.requested(this.deferredQueue_.shift(),!0);a.loaded()},goog.DebugLoader_.prototype.areDepsLoaded_=function(a){for(var b=0;b<a.length;b++){var c=this.getPathFromDeps_(a[b]);if(!c||!(c in this.deferredCallbacks_||goog.isProvided_(a[b])))return!1}return!0},goog.DebugLoader_.prototype.getPathFromDeps_=
function(a){return a in this.idToPath_?this.idToPath_[a]:a in this.dependencies_?a:null},goog.DebugLoader_.prototype.defer_=function(a,b){this.deferredCallbacks_[a.path]=b;this.deferredQueue_.push(a.path)},goog.LoadController=function(){},goog.LoadController.prototype.pause=function(){},goog.LoadController.prototype.resume=function(){},goog.LoadController.prototype.loaded=function(){},goog.LoadController.prototype.pending=function(){},goog.LoadController.prototype.registerEs6ModuleExports=function(a,
b,c){},goog.LoadController.prototype.setModuleState=function(a){},goog.LoadController.prototype.clearModuleState=function(){},goog.LoadController.prototype.defer=function(a){},goog.LoadController.prototype.areDepsLoaded=function(){},goog.Dependency=function(a,b,c,d,e){this.path=a;this.relativePath=b;this.provides=c;this.requires=d;this.loadFlags=e;this.loaded_=!1;this.loadCallbacks_=[]},goog.Dependency.prototype.getPathName=function(){var a=this.path,b=a.indexOf("://");0<=b&&(a=a.substring(b+3),b=
a.indexOf("/"),0<=b&&(a=a.substring(b+1)));return a},goog.Dependency.prototype.onLoad=function(a){this.loaded_?a():this.loadCallbacks_.push(a)},goog.Dependency.prototype.loaded=function(){this.loaded_=!0;var a=this.loadCallbacks_;this.loadCallbacks_=[];for(var b=0;b<a.length;b++)a[b]()},goog.Dependency.defer_=!1,goog.Dependency.callbackMap_={},goog.Dependency.registerCallback_=function(a){var b=Math.random().toString(32);goog.Dependency.callbackMap_[b]=a;return b},goog.Dependency.unregisterCallback_=
function(a){delete goog.Dependency.callbackMap_[a]},goog.Dependency.callback_=function(a,b){if(a in goog.Dependency.callbackMap_){for(var c=goog.Dependency.callbackMap_[a],d=[],e=1;e<arguments.length;e++)d.push(arguments[e]);c.apply(void 0,d)}else throw Error("Callback key "+a+" does not exist (was base.js loaded more than once?).");},goog.Dependency.prototype.load=function(a){if(goog.global.CLOSURE_IMPORT_SCRIPT)goog.global.CLOSURE_IMPORT_SCRIPT(this.path)?a.loaded():a.pause();else if(goog.inHtmlDocument_()){var b=
goog.global.document;if("complete"==b.readyState&&!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING){if(/\bdeps.js$/.test(this.path)){a.loaded();return}throw Error('Cannot write "'+this.path+'" after document load');}if(!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING&&goog.isDocumentLoading_()){var c=goog.Dependency.registerCallback_(function(b){goog.DebugLoader_.IS_OLD_IE_&&"complete"!=b.readyState||(goog.Dependency.unregisterCallback_(c),a.loaded())}),d=!goog.DebugLoader_.IS_OLD_IE_&&goog.getScriptNonce()?
' nonce="'+goog.getScriptNonce()+'"':"";d='<script src="'+this.path+'" '+(goog.DebugLoader_.IS_OLD_IE_?"onreadystatechange":"onload")+"=\"goog.Dependency.callback_('"+c+'\', this)" type="text/javascript" '+(goog.Dependency.defer_?"defer":"")+d+">\x3c/script>";b.write(goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createHTML(d):d)}else{var e=b.createElement("script");e.defer=goog.Dependency.defer_;e.async=!1;e.type="text/javascript";(d=goog.getScriptNonce())&&e.setAttribute("nonce",d);goog.DebugLoader_.IS_OLD_IE_?
(a.pause(),e.onreadystatechange=function(){if("loaded"==e.readyState||"complete"==e.readyState)a.loaded(),a.resume()}):e.onload=function(){e.onload=null;a.loaded()};e.src=goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path):this.path;b.head.appendChild(e)}}else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."),"deps.js"==this.relativePath?(goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."),
a.loaded()):a.pause()},goog.Es6ModuleDependency=function(a,b,c,d,e){goog.Dependency.call(this,a,b,c,d,e)},goog.inherits(goog.Es6ModuleDependency,goog.Dependency),goog.Es6ModuleDependency.prototype.load=function(a){function b(a,b){a=b?'<script type="module" crossorigin>'+b+"\x3c/script>":'<script type="module" crossorigin src="'+a+'">\x3c/script>';d.write(goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createHTML(a):a)}function c(a,b){var c=d.createElement("script");c.defer=!0;c.async=!1;c.type=
"module";c.setAttribute("crossorigin",!0);var e=goog.getScriptNonce();e&&c.setAttribute("nonce",e);b?c.textContent=goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createScript(b):b:c.src=goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createScriptURL(a):a;d.head.appendChild(c)}if(goog.global.CLOSURE_IMPORT_SCRIPT)goog.global.CLOSURE_IMPORT_SCRIPT(this.path)?a.loaded():a.pause();else if(goog.inHtmlDocument_()){var d=goog.global.document,e=this;if(goog.isDocumentLoading_()){var f=b;goog.Dependency.defer_=
!0}else f=c;var g=goog.Dependency.registerCallback_(function(){goog.Dependency.unregisterCallback_(g);a.setModuleState(goog.ModuleType.ES6)});f(void 0,'goog.Dependency.callback_("'+g+'")');f(this.path,void 0);var h=goog.Dependency.registerCallback_(function(b){goog.Dependency.unregisterCallback_(h);a.registerEs6ModuleExports(e.path,b,goog.moduleLoaderState_.moduleName)});f(void 0,'import * as m from "'+this.path+'"; goog.Dependency.callback_("'+h+'", m)');var k=goog.Dependency.registerCallback_(function(){goog.Dependency.unregisterCallback_(k);
a.clearModuleState();a.loaded()});f(void 0,'goog.Dependency.callback_("'+k+'")')}else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."),a.pause()},goog.TransformedDependency=function(a,b,c,d,e){goog.Dependency.call(this,a,b,c,d,e);this.contents_=null;this.lazyFetch_=!goog.inHtmlDocument_()||!("noModule"in goog.global.document.createElement("script"))},goog.inherits(goog.TransformedDependency,goog.Dependency),goog.TransformedDependency.prototype.load=function(a){function b(){e.contents_=
goog.loadFileSync_(e.path);e.contents_&&(e.contents_=e.transform(e.contents_),e.contents_&&(e.contents_+="\n//# sourceURL="+e.path))}function c(){e.lazyFetch_&&b();if(e.contents_){f&&a.setModuleState(goog.ModuleType.ES6);try{var c=e.contents_;e.contents_=null;goog.globalEval(c);if(f)var d=goog.moduleLoaderState_.moduleName}finally{f&&a.clearModuleState()}f&&goog.global.$jscomp.require.ensure([e.getPathName()],function(){a.registerEs6ModuleExports(e.path,goog.global.$jscomp.require(e.getPathName()),
d)});a.loaded()}}function d(){var a=goog.global.document,b=goog.Dependency.registerCallback_(function(){goog.Dependency.unregisterCallback_(b);c()}),d='<script type="text/javascript">'+goog.protectScriptTag_('goog.Dependency.callback_("'+b+'");')+"\x3c/script>";a.write(goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createHTML(d):d)}var e=this;if(goog.global.CLOSURE_IMPORT_SCRIPT)b(),this.contents_&&goog.global.CLOSURE_IMPORT_SCRIPT("",this.contents_)?(this.contents_=null,a.loaded()):a.pause();
else{var f=this.loadFlags.module==goog.ModuleType.ES6;this.lazyFetch_||b();var g=1<a.pending().length,h=g&&goog.DebugLoader_.IS_OLD_IE_;g=goog.Dependency.defer_&&(g||goog.isDocumentLoading_());if(h||g)a.defer(function(){c()});else{var k=goog.global.document;h=goog.inHtmlDocument_()&&"ActiveXObject"in goog.global;if(f&&goog.inHtmlDocument_()&&goog.isDocumentLoading_()&&!h){goog.Dependency.defer_=!0;a.pause();var l=k.onreadystatechange;k.onreadystatechange=function(){"interactive"==k.readyState&&(k.onreadystatechange=
l,c(),a.resume());goog.isFunction(l)&&l.apply(void 0,arguments)}}else!goog.DebugLoader_.IS_OLD_IE_&&goog.inHtmlDocument_()&&goog.isDocumentLoading_()?d():c()}}},goog.TransformedDependency.prototype.transform=function(a){},goog.TranspiledDependency=function(a,b,c,d,e,f){goog.TransformedDependency.call(this,a,b,c,d,e);this.transpiler=f},goog.inherits(goog.TranspiledDependency,goog.TransformedDependency),goog.TranspiledDependency.prototype.transform=function(a){return this.transpiler.transpile(a,this.getPathName())},
goog.PreTranspiledEs6ModuleDependency=function(a,b,c,d,e){goog.TransformedDependency.call(this,a,b,c,d,e)},goog.inherits(goog.PreTranspiledEs6ModuleDependency,goog.TransformedDependency),goog.PreTranspiledEs6ModuleDependency.prototype.transform=function(a){return a},goog.GoogModuleDependency=function(a,b,c,d,e,f,g){goog.TransformedDependency.call(this,a,b,c,d,e);this.needsTranspile_=f;this.transpiler_=g},goog.inherits(goog.GoogModuleDependency,goog.TransformedDependency),goog.GoogModuleDependency.prototype.transform=
function(a){this.needsTranspile_&&(a=this.transpiler_.transpile(a,this.getPathName()));return goog.LOAD_MODULE_USING_EVAL&&goog.isDef(goog.global.JSON)?"goog.loadModule("+goog.global.JSON.stringify(a+"\n//# sourceURL="+this.path+"\n")+");":'goog.loadModule(function(exports) {"use strict";'+a+"\n;return exports});\n//# sourceURL="+this.path+"\n"},goog.DebugLoader_.IS_OLD_IE_=!(goog.global.atob||!goog.global.document||!goog.global.document.all),goog.DebugLoader_.prototype.addDependency=function(a,b,
c,d){b=b||[];a=a.replace(/\\/g,"/");var e=goog.normalizePath_(goog.basePath+a);d&&"boolean"!==typeof d||(d=d?{module:goog.ModuleType.GOOG}:{});c=this.factory_.createDependency(e,a,b,c,d,goog.transpiler_.needsTranspile(d.lang||"es3",d.module));this.dependencies_[e]=c;for(c=0;c<b.length;c++)this.idToPath_[b[c]]=e;this.idToPath_[a]=e},goog.DependencyFactory=function(a){this.transpiler=a},goog.DependencyFactory.prototype.createDependency=function(a,b,c,d,e,f){return e.module==goog.ModuleType.GOOG?new goog.GoogModuleDependency(a,
b,c,d,e,f,this.transpiler):f?new goog.TranspiledDependency(a,b,c,d,e,this.transpiler):e.module==goog.ModuleType.ES6?"never"==goog.TRANSPILE&&goog.ASSUME_ES_MODULES_TRANSPILED?new goog.PreTranspiledEs6ModuleDependency(a,b,c,d,e):new goog.Es6ModuleDependency(a,b,c,d,e):new goog.Dependency(a,b,c,d,e)},goog.debugLoader_=new goog.DebugLoader_,goog.loadClosureDeps=function(){goog.debugLoader_.loadClosureDeps()},goog.setDependencyFactory=function(a){goog.debugLoader_.setDependencyFactory(a)},goog.global.CLOSURE_NO_DEPS||
goog.debugLoader_.loadClosureDeps(),goog.bootstrap=function(a,b){goog.debugLoader_.bootstrap(a,b)});goog.TRUSTED_TYPES_POLICY_NAME="";goog.identity_=function(a){return a};goog.createTrustedTypesPolicy=function(a){var b=null;if("undefined"===typeof TrustedTypes||!TrustedTypes.createPolicy)return b;try{b=TrustedTypes.createPolicy(a,{createHTML:goog.identity_,createScript:goog.identity_,createScriptURL:goog.identity_,createURL:goog.identity_})}catch(c){goog.logToConsole_(c.message)}return b};
goog.TRUSTED_TYPES_POLICY_=goog.TRUSTED_TYPES_POLICY_NAME?goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME+"#base"):null;goog.object={};goog.object.is=function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b};goog.object.forEach=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};goog.object.filter=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};goog.object.map=function(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d};goog.object.some=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};
goog.object.every=function(a,b,c){for(var d in a)if(!b.call(c,a[d],d,a))return!1;return!0};goog.object.getCount=function(a){var b=0,c;for(c in a)b++;return b};goog.object.getAnyKey=function(a){for(var b in a)return b};goog.object.getAnyValue=function(a){for(var b in a)return a[b]};goog.object.contains=function(a,b){return goog.object.containsValue(a,b)};goog.object.getValues=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
goog.object.getKeys=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};goog.object.getValueByKeys=function(a,b){var c=goog.isArrayLike(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a};goog.object.containsKey=function(a,b){return null!==a&&b in a};goog.object.containsValue=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};goog.object.findKey=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
goog.object.findValue=function(a,b,c){return(b=goog.object.findKey(a,b,c))&&a[b]};goog.object.isEmpty=function(a){for(var b in a)return!1;return!0};goog.object.clear=function(a){for(var b in a)delete a[b]};goog.object.remove=function(a,b){var c;(c=b in a)&&delete a[b];return c};goog.object.add=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');goog.object.set(a,b,c)};goog.object.get=function(a,b,c){return null!==a&&b in a?a[b]:c};
goog.object.set=function(a,b,c){a[b]=c};goog.object.setIfUndefined=function(a,b,c){return b in a?a[b]:a[b]=c};goog.object.setWithReturnValueIfNotSet=function(a,b,c){if(b in a)return a[b];c=c();return a[b]=c};goog.object.equals=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};goog.object.clone=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
goog.object.unsafeClone=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(goog.isFunction(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=goog.object.unsafeClone(a[c]);return b}return a};goog.object.transpose=function(a){var b={},c;for(c in a)b[a[c]]=c;return b};goog.object.PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<goog.object.PROTOTYPE_FIELDS_.length;f++)c=goog.object.PROTOTYPE_FIELDS_[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
goog.object.create=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(b%2)throw Error("Uneven number of arguments");for(var c={},d=0;d<b;d+=2)c[arguments[d]]=arguments[d+1];return c};goog.object.createSet=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};
goog.object.createImmutableView=function(a){var b=a;Object.isFrozen&&!Object.isFrozen(a)&&(b=Object.create(a),Object.freeze(b));return b};goog.object.isImmutableView=function(a){return!!Object.isFrozen&&Object.isFrozen(a)};
goog.object.getAllPropertyNames=function(a,b,c){if(!a)return[];if(!Object.getOwnPropertyNames||!Object.getPrototypeOf)return goog.object.getKeys(a);for(var d={};a&&(a!==Object.prototype||b)&&(a!==Function.prototype||c);){for(var e=Object.getOwnPropertyNames(a),f=0;f<e.length;f++)d[e[f]]=!0;a=Object.getPrototypeOf(a)}return goog.object.getKeys(d)};goog.object.getSuperClass=function(a){return(a=Object.getPrototypeOf(a.prototype))&&a.constructor};goog.debug={};goog.debug.Error=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,goog.debug.Error);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a));this.reportErrorToServer=!0};goog.inherits(goog.debug.Error,Error);goog.debug.Error.prototype.name="CustomError";goog.dom={};goog.dom.NodeType={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};goog.asserts={};goog.asserts.ENABLE_ASSERTS=goog.DEBUG;goog.asserts.AssertionError=function(a,b){goog.debug.Error.call(this,goog.asserts.subs_(a,b));this.messagePattern=a};goog.inherits(goog.asserts.AssertionError,goog.debug.Error);goog.asserts.AssertionError.prototype.name="AssertionError";goog.asserts.DEFAULT_ERROR_HANDLER=function(a){throw a;};goog.asserts.errorHandler_=goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.subs_=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");return c+a[d]};goog.asserts.doAssertFailure_=function(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);a=new goog.asserts.AssertionError(""+e,f||[]);goog.asserts.errorHandler_(a)};goog.asserts.setErrorHandler=function(a){goog.asserts.ENABLE_ASSERTS&&(goog.asserts.errorHandler_=a)};
goog.asserts.assert=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!a&&goog.asserts.doAssertFailure_("",null,b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertExists=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&null==a&&goog.asserts.doAssertFailure_("Expected to exist: %s.",[a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.fail=function(a,b){goog.asserts.ENABLE_ASSERTS&&goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1)))};goog.asserts.assertNumber=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isNumber(a)&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertString=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isString(a)&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertFunction=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(a)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertObject=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isObject(a)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertArray=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isArray(a)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertBoolean=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isBoolean(a)&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertElement=function(a,b,c){!goog.asserts.ENABLE_ASSERTS||goog.isObject(a)&&a.nodeType==goog.dom.NodeType.ELEMENT||goog.asserts.doAssertFailure_("Expected Element but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertInstanceof=function(a,b,c,d){!goog.asserts.ENABLE_ASSERTS||a instanceof b||goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.",[goog.asserts.getType_(b),goog.asserts.getType_(a)],c,Array.prototype.slice.call(arguments,3));return a};goog.asserts.assertFinite=function(a,b,c){!goog.asserts.ENABLE_ASSERTS||"number"==typeof a&&isFinite(a)||goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.",[a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertObjectPrototypeIsIntact=function(){for(var a in Object.prototype)goog.asserts.fail(a+" should not be enumerable in Object.prototype.")};goog.asserts.getType_=function(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};var jspb={BinaryConstants:{},ConstBinaryMessage:function(){},BinaryMessage:function(){}};jspb.BinaryConstants.FieldType={INVALID:-1,DOUBLE:1,FLOAT:2,INT64:3,UINT64:4,INT32:5,FIXED64:6,FIXED32:7,BOOL:8,STRING:9,GROUP:10,MESSAGE:11,BYTES:12,UINT32:13,ENUM:14,SFIXED32:15,SFIXED64:16,SINT32:17,SINT64:18,FHASH64:30,VHASH64:31};jspb.BinaryConstants.WireType={INVALID:-1,VARINT:0,FIXED64:1,DELIMITED:2,START_GROUP:3,END_GROUP:4,FIXED32:5};
jspb.BinaryConstants.FieldTypeToWireType=function(a){var b=jspb.BinaryConstants.FieldType,c=jspb.BinaryConstants.WireType;switch(a){case b.INT32:case b.INT64:case b.UINT32:case b.UINT64:case b.SINT32:case b.SINT64:case b.BOOL:case b.ENUM:case b.VHASH64:return c.VARINT;case b.DOUBLE:case b.FIXED64:case b.SFIXED64:case b.FHASH64:return c.FIXED64;case b.STRING:case b.MESSAGE:case b.BYTES:return c.DELIMITED;case b.FLOAT:case b.FIXED32:case b.SFIXED32:return c.FIXED32;default:return c.INVALID}};
jspb.BinaryConstants.INVALID_FIELD_NUMBER=-1;jspb.BinaryConstants.FLOAT32_EPS=1.401298464324817E-45;jspb.BinaryConstants.FLOAT32_MIN=1.1754943508222875E-38;jspb.BinaryConstants.FLOAT32_MAX=3.4028234663852886E38;jspb.BinaryConstants.FLOAT64_EPS=4.9E-324;jspb.BinaryConstants.FLOAT64_MIN=2.2250738585072014E-308;jspb.BinaryConstants.FLOAT64_MAX=1.7976931348623157E308;jspb.BinaryConstants.TWO_TO_20=1048576;jspb.BinaryConstants.TWO_TO_23=8388608;jspb.BinaryConstants.TWO_TO_31=2147483648;
jspb.BinaryConstants.TWO_TO_32=4294967296;jspb.BinaryConstants.TWO_TO_52=4503599627370496;jspb.BinaryConstants.TWO_TO_63=0x7fffffffffffffff;jspb.BinaryConstants.TWO_TO_64=1.8446744073709552E19;jspb.BinaryConstants.ZERO_HASH="\x00\x00\x00\x00\x00\x00\x00\x00";goog.array={};goog.NATIVE_ARRAY_PROTOTYPES=goog.TRUSTED_SITE;goog.array.ASSUME_NATIVE_FUNCTIONS=2012<goog.FEATURESET_YEAR;goog.array.peek=function(a){return a[a.length-1]};goog.array.last=goog.array.peek;
goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.indexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(goog.isString(a))return goog.isString(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.lastIndexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;0>c&&(c=Math.max(0,a.length+c));if(goog.isString(a))return goog.isString(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.forEach)?function(a,b,c){goog.asserts.assert(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};goog.array.forEachRight=function(a,b,c){var d=a.length,e=goog.isString(a)?a.split(""):a;for(--d;0<=d;--d)d in e&&b.call(c,e[d],d,a)};
goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.filter)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=goog.isString(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];b.call(c,k,h,a)&&(e[f++]=k)}return e};
goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.map)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=goog.isString(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};
goog.array.reduce=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduce)?function(a,b,c,d){goog.asserts.assert(null!=a.length);d&&(b=goog.bind(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEach(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.reduceRight=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduceRight)?function(a,b,c,d){goog.asserts.assert(null!=a.length);goog.asserts.assert(null!=b);d&&(b=goog.bind(b,d));return Array.prototype.reduceRight.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEachRight(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.some)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.every)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};goog.array.count=function(a,b,c){var d=0;goog.array.forEach(a,function(a,f,g){b.call(c,a,f,g)&&++d},c);return d};
goog.array.find=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};goog.array.findIndex=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};goog.array.findRight=function(a,b,c){b=goog.array.findIndexRight(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};
goog.array.findIndexRight=function(a,b,c){var d=a.length,e=goog.isString(a)?a.split(""):a;for(--d;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};goog.array.contains=function(a,b){return 0<=goog.array.indexOf(a,b)};goog.array.isEmpty=function(a){return 0==a.length};goog.array.clear=function(a){if(!goog.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};goog.array.insert=function(a,b){goog.array.contains(a,b)||a.push(b)};
goog.array.insertAt=function(a,b,c){goog.array.splice(a,c,0,b)};goog.array.insertArrayAt=function(a,b,c){goog.partial(goog.array.splice,a,c,0).apply(null,b)};goog.array.insertBefore=function(a,b,c){var d;2==arguments.length||0>(d=goog.array.indexOf(a,c))?a.push(b):goog.array.insertAt(a,b,d)};goog.array.remove=function(a,b){b=goog.array.indexOf(a,b);var c;(c=0<=b)&&goog.array.removeAt(a,b);return c};
goog.array.removeLast=function(a,b){b=goog.array.lastIndexOf(a,b);return 0<=b?(goog.array.removeAt(a,b),!0):!1};goog.array.removeAt=function(a,b){goog.asserts.assert(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length};goog.array.removeIf=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0<=b?(goog.array.removeAt(a,b),!0):!1};goog.array.removeAllIf=function(a,b,c){var d=0;goog.array.forEachRight(a,function(e,f){b.call(c,e,f,a)&&goog.array.removeAt(a,f)&&d++});return d};
goog.array.concat=function(a){return Array.prototype.concat.apply([],arguments)};goog.array.join=function(a){return Array.prototype.concat.apply([],arguments)};goog.array.toArray=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};goog.array.clone=goog.array.toArray;goog.array.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(goog.isArrayLike(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};
goog.array.splice=function(a,b,c,d){goog.asserts.assert(null!=a.length);return Array.prototype.splice.apply(a,goog.array.slice(arguments,1))};goog.array.slice=function(a,b,c){goog.asserts.assert(null!=a.length);return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
goog.array.removeDuplicates=function(a,b,c){b=b||a;var d=function(a){return goog.isObject(a)?"o"+goog.getUid(a):(typeof a).charAt(0)+a};c=c||d;d={};for(var e=0,f=0;f<a.length;){var g=a[f++],h=c(g);Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,b[e++]=g)}b.length=e};goog.array.binarySearch=function(a,b,c){return goog.array.binarySearch_(a,c||goog.array.defaultCompare,!1,b)};goog.array.binarySelect=function(a,b,c){return goog.array.binarySearch_(a,b,!0,void 0,c)};
goog.array.binarySearch_=function(a,b,c,d,e){for(var f=0,g=a.length,h;f<g;){var k=f+g>>1;var l=c?b.call(e,a[k],k,a):b(d,a[k]);0<l?f=k+1:(g=k,h=!l)}return h?f:~f};goog.array.sort=function(a,b){a.sort(b||goog.array.defaultCompare)};goog.array.stableSort=function(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]={index:d,value:a[d]};var e=b||goog.array.defaultCompare;goog.array.sort(c,function(a,b){return e(a.value,b.value)||a.index-b.index});for(d=0;d<a.length;d++)a[d]=c[d].value};
goog.array.sortByKey=function(a,b,c){var d=c||goog.array.defaultCompare;goog.array.sort(a,function(a,c){return d(b(a),b(c))})};goog.array.sortObjectsByKey=function(a,b,c){goog.array.sortByKey(a,function(a){return a[b]},c)};goog.array.isSorted=function(a,b,c){b=b||goog.array.defaultCompare;for(var d=1;d<a.length;d++){var e=b(a[d-1],a[d]);if(0<e||0==e&&c)return!1}return!0};
goog.array.equals=function(a,b,c){if(!goog.isArrayLike(a)||!goog.isArrayLike(b)||a.length!=b.length)return!1;var d=a.length;c=c||goog.array.defaultCompareEquality;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0};goog.array.compare3=function(a,b,c){c=c||goog.array.defaultCompare;for(var d=Math.min(a.length,b.length),e=0;e<d;e++){var f=c(a[e],b[e]);if(0!=f)return f}return goog.array.defaultCompare(a.length,b.length)};goog.array.defaultCompare=function(a,b){return a>b?1:a<b?-1:0};
goog.array.inverseDefaultCompare=function(a,b){return-goog.array.defaultCompare(a,b)};goog.array.defaultCompareEquality=function(a,b){return a===b};goog.array.binaryInsert=function(a,b,c){c=goog.array.binarySearch(a,b,c);return 0>c?(goog.array.insertAt(a,b,-(c+1)),!0):!1};goog.array.binaryRemove=function(a,b,c){b=goog.array.binarySearch(a,b,c);return 0<=b?goog.array.removeAt(a,b):!1};
goog.array.bucket=function(a,b,c){for(var d={},e=0;e<a.length;e++){var f=a[e],g=b.call(c,f,e,a);goog.isDef(g)&&(d[g]||(d[g]=[])).push(f)}return d};goog.array.toObject=function(a,b,c){var d={};goog.array.forEach(a,function(e,f){d[b.call(c,e,f,a)]=e});return d};goog.array.range=function(a,b,c){var d=[],e=0,f=a;c=c||1;void 0!==b&&(e=a,f=b);if(0>c*(f-e))return[];if(0<c)for(a=e;a<f;a+=c)d.push(a);else for(a=e;a>f;a+=c)d.push(a);return d};
goog.array.repeat=function(a,b){for(var c=[],d=0;d<b;d++)c[d]=a;return c};goog.array.flatten=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(goog.isArray(d))for(var e=0;e<d.length;e+=8192){var f=goog.array.slice(d,e,e+8192);f=goog.array.flatten.apply(null,f);for(var g=0;g<f.length;g++)b.push(f[g])}else b.push(d)}return b};
goog.array.rotate=function(a,b){goog.asserts.assert(null!=a.length);a.length&&(b%=a.length,0<b?Array.prototype.unshift.apply(a,a.splice(-b,b)):0>b&&Array.prototype.push.apply(a,a.splice(0,-b)));return a};goog.array.moveItem=function(a,b,c){goog.asserts.assert(0<=b&&b<a.length);goog.asserts.assert(0<=c&&c<a.length);b=Array.prototype.splice.call(a,b,1);Array.prototype.splice.call(a,c,0,b[0])};
goog.array.zip=function(a){if(!arguments.length)return[];for(var b=[],c=arguments[0].length,d=1;d<arguments.length;d++)arguments[d].length<c&&(c=arguments[d].length);for(d=0;d<c;d++){for(var e=[],f=0;f<arguments.length;f++)e.push(arguments[f][d]);b.push(e)}return b};goog.array.shuffle=function(a,b){b=b||Math.random;for(var c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}};goog.array.copyByIndex=function(a,b){var c=[];goog.array.forEach(b,function(b){c.push(a[b])});return c};
goog.array.concatMap=function(a,b,c){return goog.array.concat.apply([],goog.array.map(a,b,c))};goog.crypt={};goog.crypt.stringToByteArray=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return b};goog.crypt.byteArrayToString=function(a){if(8192>=a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192){var d=goog.array.slice(a,c,c+8192);b+=String.fromCharCode.apply(null,d)}return b};
goog.crypt.byteArrayToHex=function(a,b){return goog.array.map(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join(b||"")};goog.crypt.hexToByteArray=function(a){goog.asserts.assert(0==a.length%2,"Key string length must be multiple of 2");for(var b=[],c=0;c<a.length;c+=2)b.push(parseInt(a.substring(c,c+2),16));return b};
goog.crypt.stringToUtf8ByteArray=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};
goog.crypt.utf8ByteArrayToString=function(a){for(var b=[],c=0,d=0;c<a.length;){var e=a[c++];if(128>e)b[d++]=String.fromCharCode(e);else if(191<e&&224>e){var f=a[c++];b[d++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){f=a[c++];var g=a[c++],h=a[c++];e=((e&7)<<18|(f&63)<<12|(g&63)<<6|h&63)-65536;b[d++]=String.fromCharCode(55296+(e>>10));b[d++]=String.fromCharCode(56320+(e&1023))}else f=a[c++],g=a[c++],b[d++]=String.fromCharCode((e&15)<<12|(f&63)<<6|g&63)}return b.join("")};
goog.crypt.xorByteArray=function(a,b){goog.asserts.assert(a.length==b.length,"XOR array lengths must match");for(var c=[],d=0;d<a.length;d++)c.push(a[d]^b[d]);return c};goog.dom.asserts={};goog.dom.asserts.assertIsLocation=function(a){if(goog.asserts.ENABLE_ASSERTS){var b=goog.dom.asserts.getWindow_(a);b&&(!a||!(a instanceof b.Location)&&a instanceof b.Element)&&goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s",goog.dom.asserts.debugStringForType_(a))}return a};
goog.dom.asserts.assertIsElementType_=function(a,b){if(goog.asserts.ENABLE_ASSERTS){var c=goog.dom.asserts.getWindow_(a);c&&"undefined"!=typeof c[b]&&(a&&(a instanceof c[b]||!(a instanceof c.Location||a instanceof c.Element))||goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s",b,goog.dom.asserts.debugStringForType_(a)))}return a};goog.dom.asserts.assertIsHTMLAnchorElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLAnchorElement")};
goog.dom.asserts.assertIsHTMLButtonElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLButtonElement")};goog.dom.asserts.assertIsHTMLLinkElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLLinkElement")};goog.dom.asserts.assertIsHTMLImageElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLImageElement")};goog.dom.asserts.assertIsHTMLAudioElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLAudioElement")};
goog.dom.asserts.assertIsHTMLVideoElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLVideoElement")};goog.dom.asserts.assertIsHTMLInputElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLInputElement")};goog.dom.asserts.assertIsHTMLTextAreaElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLTextAreaElement")};goog.dom.asserts.assertIsHTMLCanvasElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLCanvasElement")};
goog.dom.asserts.assertIsHTMLEmbedElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLEmbedElement")};goog.dom.asserts.assertIsHTMLFormElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLFormElement")};goog.dom.asserts.assertIsHTMLFrameElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLFrameElement")};goog.dom.asserts.assertIsHTMLIFrameElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLIFrameElement")};
goog.dom.asserts.assertIsHTMLObjectElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLObjectElement")};goog.dom.asserts.assertIsHTMLScriptElement=function(a){return goog.dom.asserts.assertIsElementType_(a,"HTMLScriptElement")};
goog.dom.asserts.debugStringForType_=function(a){if(goog.isObject(a))try{return a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(b){return"<object could not be stringified>"}else return void 0===a?"undefined":null===a?"null":typeof a};goog.dom.asserts.getWindow_=function(a){try{var b=a&&a.ownerDocument,c=b&&(b.defaultView||b.parentWindow);c=c||goog.global;if(c.Element&&c.Location)return c}catch(d){}return null};goog.functions={};goog.functions.constant=function(a){return function(){return a}};goog.functions.FALSE=function(){return!1};goog.functions.TRUE=function(){return!0};goog.functions.NULL=function(){return null};goog.functions.identity=function(a,b){return a};goog.functions.error=function(a){return function(){throw Error(a);}};goog.functions.fail=function(a){return function(){throw a;}};
goog.functions.lock=function(a,b){b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};goog.functions.nth=function(a){return function(){return arguments[a]}};goog.functions.partialRight=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.push.apply(b,c);return a.apply(this,b)}};goog.functions.withReturnValue=function(a,b){return goog.functions.sequence(a,goog.functions.constant(b))};
goog.functions.equalTo=function(a,b){return function(c){return b?a==c:a===c}};goog.functions.compose=function(a,b){var c=arguments,d=c.length;return function(){var a;d&&(a=c[d-1].apply(this,arguments));for(var b=d-2;0<=b;b--)a=c[b].call(this,a);return a}};goog.functions.sequence=function(a){var b=arguments,c=b.length;return function(){for(var a,e=0;e<c;e++)a=b[e].apply(this,arguments);return a}};
goog.functions.and=function(a){var b=arguments,c=b.length;return function(){for(var a=0;a<c;a++)if(!b[a].apply(this,arguments))return!1;return!0}};goog.functions.or=function(a){var b=arguments,c=b.length;return function(){for(var a=0;a<c;a++)if(b[a].apply(this,arguments))return!0;return!1}};goog.functions.not=function(a){return function(){return!a.apply(this,arguments)}};
goog.functions.create=function(a,b){var c=function(){};c.prototype=a.prototype;c=new c;a.apply(c,Array.prototype.slice.call(arguments,1));return c};goog.functions.CACHE_RETURN_VALUE=!0;goog.functions.cacheReturnValue=function(a){var b=!1,c;return function(){if(!goog.functions.CACHE_RETURN_VALUE)return a();b||(c=a(),b=!0);return c}};goog.functions.once=function(a){var b=a;return function(){if(b){var a=b;b=null;a()}}};
goog.functions.debounce=function(a,b,c){var d=0;return function(e){goog.global.clearTimeout(d);var f=arguments;d=goog.global.setTimeout(function(){a.apply(c,f)},b)}};goog.functions.throttle=function(a,b,c){var d=0,e=!1,f=[],g=function(){d=0;e&&(e=!1,h())},h=function(){d=goog.global.setTimeout(g,b);a.apply(c,f)};return function(a){f=arguments;d?e=!0:h()}};goog.functions.rateLimit=function(a,b,c){var d=0,e=function(){d=0};return function(f){d||(d=goog.global.setTimeout(e,b),a.apply(c,arguments))}};goog.dom.HtmlElement=function(){};goog.dom.TagName=function(a){this.tagName_=a};goog.dom.TagName.prototype.toString=function(){return this.tagName_};goog.dom.TagName.A=new goog.dom.TagName("A");goog.dom.TagName.ABBR=new goog.dom.TagName("ABBR");goog.dom.TagName.ACRONYM=new goog.dom.TagName("ACRONYM");goog.dom.TagName.ADDRESS=new goog.dom.TagName("ADDRESS");goog.dom.TagName.APPLET=new goog.dom.TagName("APPLET");goog.dom.TagName.AREA=new goog.dom.TagName("AREA");goog.dom.TagName.ARTICLE=new goog.dom.TagName("ARTICLE");
goog.dom.TagName.ASIDE=new goog.dom.TagName("ASIDE");goog.dom.TagName.AUDIO=new goog.dom.TagName("AUDIO");goog.dom.TagName.B=new goog.dom.TagName("B");goog.dom.TagName.BASE=new goog.dom.TagName("BASE");goog.dom.TagName.BASEFONT=new goog.dom.TagName("BASEFONT");goog.dom.TagName.BDI=new goog.dom.TagName("BDI");goog.dom.TagName.BDO=new goog.dom.TagName("BDO");goog.dom.TagName.BIG=new goog.dom.TagName("BIG");goog.dom.TagName.BLOCKQUOTE=new goog.dom.TagName("BLOCKQUOTE");goog.dom.TagName.BODY=new goog.dom.TagName("BODY");
goog.dom.TagName.BR=new goog.dom.TagName("BR");goog.dom.TagName.BUTTON=new goog.dom.TagName("BUTTON");goog.dom.TagName.CANVAS=new goog.dom.TagName("CANVAS");goog.dom.TagName.CAPTION=new goog.dom.TagName("CAPTION");goog.dom.TagName.CENTER=new goog.dom.TagName("CENTER");goog.dom.TagName.CITE=new goog.dom.TagName("CITE");goog.dom.TagName.CODE=new goog.dom.TagName("CODE");goog.dom.TagName.COL=new goog.dom.TagName("COL");goog.dom.TagName.COLGROUP=new goog.dom.TagName("COLGROUP");
goog.dom.TagName.COMMAND=new goog.dom.TagName("COMMAND");goog.dom.TagName.DATA=new goog.dom.TagName("DATA");goog.dom.TagName.DATALIST=new goog.dom.TagName("DATALIST");goog.dom.TagName.DD=new goog.dom.TagName("DD");goog.dom.TagName.DEL=new goog.dom.TagName("DEL");goog.dom.TagName.DETAILS=new goog.dom.TagName("DETAILS");goog.dom.TagName.DFN=new goog.dom.TagName("DFN");goog.dom.TagName.DIALOG=new goog.dom.TagName("DIALOG");goog.dom.TagName.DIR=new goog.dom.TagName("DIR");goog.dom.TagName.DIV=new goog.dom.TagName("DIV");
goog.dom.TagName.DL=new goog.dom.TagName("DL");goog.dom.TagName.DT=new goog.dom.TagName("DT");goog.dom.TagName.EM=new goog.dom.TagName("EM");goog.dom.TagName.EMBED=new goog.dom.TagName("EMBED");goog.dom.TagName.FIELDSET=new goog.dom.TagName("FIELDSET");goog.dom.TagName.FIGCAPTION=new goog.dom.TagName("FIGCAPTION");goog.dom.TagName.FIGURE=new goog.dom.TagName("FIGURE");goog.dom.TagName.FONT=new goog.dom.TagName("FONT");goog.dom.TagName.FOOTER=new goog.dom.TagName("FOOTER");goog.dom.TagName.FORM=new goog.dom.TagName("FORM");
goog.dom.TagName.FRAME=new goog.dom.TagName("FRAME");goog.dom.TagName.FRAMESET=new goog.dom.TagName("FRAMESET");goog.dom.TagName.H1=new goog.dom.TagName("H1");goog.dom.TagName.H2=new goog.dom.TagName("H2");goog.dom.TagName.H3=new goog.dom.TagName("H3");goog.dom.TagName.H4=new goog.dom.TagName("H4");goog.dom.TagName.H5=new goog.dom.TagName("H5");goog.dom.TagName.H6=new goog.dom.TagName("H6");goog.dom.TagName.HEAD=new goog.dom.TagName("HEAD");goog.dom.TagName.HEADER=new goog.dom.TagName("HEADER");
goog.dom.TagName.HGROUP=new goog.dom.TagName("HGROUP");goog.dom.TagName.HR=new goog.dom.TagName("HR");goog.dom.TagName.HTML=new goog.dom.TagName("HTML");goog.dom.TagName.I=new goog.dom.TagName("I");goog.dom.TagName.IFRAME=new goog.dom.TagName("IFRAME");goog.dom.TagName.IMG=new goog.dom.TagName("IMG");goog.dom.TagName.INPUT=new goog.dom.TagName("INPUT");goog.dom.TagName.INS=new goog.dom.TagName("INS");goog.dom.TagName.ISINDEX=new goog.dom.TagName("ISINDEX");goog.dom.TagName.KBD=new goog.dom.TagName("KBD");
goog.dom.TagName.KEYGEN=new goog.dom.TagName("KEYGEN");goog.dom.TagName.LABEL=new goog.dom.TagName("LABEL");goog.dom.TagName.LEGEND=new goog.dom.TagName("LEGEND");goog.dom.TagName.LI=new goog.dom.TagName("LI");goog.dom.TagName.LINK=new goog.dom.TagName("LINK");goog.dom.TagName.MAIN=new goog.dom.TagName("MAIN");goog.dom.TagName.MAP=new goog.dom.TagName("MAP");goog.dom.TagName.MARK=new goog.dom.TagName("MARK");goog.dom.TagName.MATH=new goog.dom.TagName("MATH");goog.dom.TagName.MENU=new goog.dom.TagName("MENU");
goog.dom.TagName.MENUITEM=new goog.dom.TagName("MENUITEM");goog.dom.TagName.META=new goog.dom.TagName("META");goog.dom.TagName.METER=new goog.dom.TagName("METER");goog.dom.TagName.NAV=new goog.dom.TagName("NAV");goog.dom.TagName.NOFRAMES=new goog.dom.TagName("NOFRAMES");goog.dom.TagName.NOSCRIPT=new goog.dom.TagName("NOSCRIPT");goog.dom.TagName.OBJECT=new goog.dom.TagName("OBJECT");goog.dom.TagName.OL=new goog.dom.TagName("OL");goog.dom.TagName.OPTGROUP=new goog.dom.TagName("OPTGROUP");
goog.dom.TagName.OPTION=new goog.dom.TagName("OPTION");goog.dom.TagName.OUTPUT=new goog.dom.TagName("OUTPUT");goog.dom.TagName.P=new goog.dom.TagName("P");goog.dom.TagName.PARAM=new goog.dom.TagName("PARAM");goog.dom.TagName.PICTURE=new goog.dom.TagName("PICTURE");goog.dom.TagName.PRE=new goog.dom.TagName("PRE");goog.dom.TagName.PROGRESS=new goog.dom.TagName("PROGRESS");goog.dom.TagName.Q=new goog.dom.TagName("Q");goog.dom.TagName.RP=new goog.dom.TagName("RP");goog.dom.TagName.RT=new goog.dom.TagName("RT");
goog.dom.TagName.RTC=new goog.dom.TagName("RTC");goog.dom.TagName.RUBY=new goog.dom.TagName("RUBY");goog.dom.TagName.S=new goog.dom.TagName("S");goog.dom.TagName.SAMP=new goog.dom.TagName("SAMP");goog.dom.TagName.SCRIPT=new goog.dom.TagName("SCRIPT");goog.dom.TagName.SECTION=new goog.dom.TagName("SECTION");goog.dom.TagName.SELECT=new goog.dom.TagName("SELECT");goog.dom.TagName.SMALL=new goog.dom.TagName("SMALL");goog.dom.TagName.SOURCE=new goog.dom.TagName("SOURCE");goog.dom.TagName.SPAN=new goog.dom.TagName("SPAN");
goog.dom.TagName.STRIKE=new goog.dom.TagName("STRIKE");goog.dom.TagName.STRONG=new goog.dom.TagName("STRONG");goog.dom.TagName.STYLE=new goog.dom.TagName("STYLE");goog.dom.TagName.SUB=new goog.dom.TagName("SUB");goog.dom.TagName.SUMMARY=new goog.dom.TagName("SUMMARY");goog.dom.TagName.SUP=new goog.dom.TagName("SUP");goog.dom.TagName.SVG=new goog.dom.TagName("SVG");goog.dom.TagName.TABLE=new goog.dom.TagName("TABLE");goog.dom.TagName.TBODY=new goog.dom.TagName("TBODY");goog.dom.TagName.TD=new goog.dom.TagName("TD");
goog.dom.TagName.TEMPLATE=new goog.dom.TagName("TEMPLATE");goog.dom.TagName.TEXTAREA=new goog.dom.TagName("TEXTAREA");goog.dom.TagName.TFOOT=new goog.dom.TagName("TFOOT");goog.dom.TagName.TH=new goog.dom.TagName("TH");goog.dom.TagName.THEAD=new goog.dom.TagName("THEAD");goog.dom.TagName.TIME=new goog.dom.TagName("TIME");goog.dom.TagName.TITLE=new goog.dom.TagName("TITLE");goog.dom.TagName.TR=new goog.dom.TagName("TR");goog.dom.TagName.TRACK=new goog.dom.TagName("TRACK");goog.dom.TagName.TT=new goog.dom.TagName("TT");
goog.dom.TagName.U=new goog.dom.TagName("U");goog.dom.TagName.UL=new goog.dom.TagName("UL");goog.dom.TagName.VAR=new goog.dom.TagName("VAR");goog.dom.TagName.VIDEO=new goog.dom.TagName("VIDEO");goog.dom.TagName.WBR=new goog.dom.TagName("WBR");goog.dom.tags={};goog.dom.tags.VOID_TAGS_={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};goog.dom.tags.isVoidTag=function(a){return!0===goog.dom.tags.VOID_TAGS_[a]};goog.html={};goog.html.trustedtypes={};goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY=goog.TRUSTED_TYPES_POLICY_NAME?goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME+"#html"):null;goog.string={};goog.string.TypedString=function(){};goog.string.Const=function(a,b){this.stringConstValueWithSecurityContract__googStringSecurityPrivate_=a===goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_&&b||"";this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_=goog.string.Const.TYPE_MARKER_};goog.string.Const.prototype.implementsGoogStringTypedString=!0;goog.string.Const.prototype.getTypedStringValue=function(){return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_};
goog.string.Const.prototype.toString=function(){return"Const{"+this.stringConstValueWithSecurityContract__googStringSecurityPrivate_+"}"};goog.string.Const.unwrap=function(a){if(a instanceof goog.string.Const&&a.constructor===goog.string.Const&&a.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_===goog.string.Const.TYPE_MARKER_)return a.stringConstValueWithSecurityContract__googStringSecurityPrivate_;goog.asserts.fail("expected object of type Const, got '"+a+"'");return"type_error:Const"};
goog.string.Const.from=function(a){return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,a)};goog.string.Const.TYPE_MARKER_={};goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_={};goog.string.Const.EMPTY=goog.string.Const.from("");goog.html.SafeScript=function(){this.privateDoNotAccessOrElseSafeScriptWrappedValue_="";this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.SafeScript.prototype.implementsGoogStringTypedString=!0;goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};goog.html.SafeScript.fromConstant=function(a){a=goog.string.Const.unwrap(a);return 0===a.length?goog.html.SafeScript.EMPTY:goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeScript.fromConstantAndArgs=function(a,b){for(var c=[],d=1;d<arguments.length;d++)c.push(goog.html.SafeScript.stringify_(arguments[d]));return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("("+goog.string.Const.unwrap(a)+")("+c.join(", ")+");")};goog.html.SafeScript.fromJson=function(a){return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(a))};goog.html.SafeScript.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString()};
goog.DEBUG&&(goog.html.SafeScript.prototype.toString=function(){return"SafeScript{"+this.privateDoNotAccessOrElseSafeScriptWrappedValue_+"}"});goog.html.SafeScript.unwrap=function(a){return goog.html.SafeScript.unwrapTrustedScript(a).toString()};
goog.html.SafeScript.unwrapTrustedScript=function(a){if(a instanceof goog.html.SafeScript&&a.constructor===goog.html.SafeScript&&a.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeScriptWrappedValue_;goog.asserts.fail("expected object of type SafeScript, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeScript"};
goog.html.SafeScript.stringify_=function(a){return JSON.stringify(a).replace(/</g,"\\x3c")};goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse=function(a){return(new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(a)};
goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_=function(a){this.privateDoNotAccessOrElseSafeScriptWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(a):a;return this};goog.html.SafeScript.EMPTY=goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");goog.fs={};goog.fs.url={};goog.fs.url.createObjectUrl=function(a){return goog.fs.url.getUrlObject_().createObjectURL(a)};goog.fs.url.revokeObjectUrl=function(a){goog.fs.url.getUrlObject_().revokeObjectURL(a)};goog.fs.url.getUrlObject_=function(){var a=goog.fs.url.findUrlObject_();if(null!=a)return a;throw Error("This browser doesn't seem to support blob URLs");};
goog.fs.url.findUrlObject_=function(){return goog.isDef(goog.global.URL)&&goog.isDef(goog.global.URL.createObjectURL)?goog.global.URL:goog.isDef(goog.global.webkitURL)&&goog.isDef(goog.global.webkitURL.createObjectURL)?goog.global.webkitURL:goog.isDef(goog.global.createObjectURL)?goog.global:null};goog.fs.url.browserSupportsObjectUrls=function(){return null!=goog.fs.url.findUrlObject_()};goog.i18n={};goog.i18n.bidi={};goog.i18n.bidi.FORCE_RTL=!1;
goog.i18n.bidi.IS_RTL=goog.i18n.bidi.FORCE_RTL||("ar"==goog.LOCALE.substring(0,2).toLowerCase()||"fa"==goog.LOCALE.substring(0,2).toLowerCase()||"he"==goog.LOCALE.substring(0,2).toLowerCase()||"iw"==goog.LOCALE.substring(0,2).toLowerCase()||"ps"==goog.LOCALE.substring(0,2).toLowerCase()||"sd"==goog.LOCALE.substring(0,2).toLowerCase()||"ug"==goog.LOCALE.substring(0,2).toLowerCase()||"ur"==goog.LOCALE.substring(0,2).toLowerCase()||"yi"==goog.LOCALE.substring(0,2).toLowerCase())&&(2==goog.LOCALE.length||
"-"==goog.LOCALE.substring(2,3)||"_"==goog.LOCALE.substring(2,3))||3<=goog.LOCALE.length&&"ckb"==goog.LOCALE.substring(0,3).toLowerCase()&&(3==goog.LOCALE.length||"-"==goog.LOCALE.substring(3,4)||"_"==goog.LOCALE.substring(3,4))||7<=goog.LOCALE.length&&("-"==goog.LOCALE.substring(2,3)||"_"==goog.LOCALE.substring(2,3))&&("adlm"==goog.LOCALE.substring(3,7).toLowerCase()||"arab"==goog.LOCALE.substring(3,7).toLowerCase()||"hebr"==goog.LOCALE.substring(3,7).toLowerCase()||"nkoo"==goog.LOCALE.substring(3,
7).toLowerCase()||"rohg"==goog.LOCALE.substring(3,7).toLowerCase()||"thaa"==goog.LOCALE.substring(3,7).toLowerCase())||8<=goog.LOCALE.length&&("-"==goog.LOCALE.substring(3,4)||"_"==goog.LOCALE.substring(3,4))&&("adlm"==goog.LOCALE.substring(4,8).toLowerCase()||"arab"==goog.LOCALE.substring(4,8).toLowerCase()||"hebr"==goog.LOCALE.substring(4,8).toLowerCase()||"nkoo"==goog.LOCALE.substring(4,8).toLowerCase()||"rohg"==goog.LOCALE.substring(4,8).toLowerCase()||"thaa"==goog.LOCALE.substring(4,8).toLowerCase());
goog.i18n.bidi.Format={LRE:"\u202a",RLE:"\u202b",PDF:"\u202c",LRM:"\u200e",RLM:"\u200f"};goog.i18n.bidi.Dir={LTR:1,RTL:-1,NEUTRAL:0};goog.i18n.bidi.RIGHT="right";goog.i18n.bidi.LEFT="left";goog.i18n.bidi.I18N_RIGHT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.LEFT:goog.i18n.bidi.RIGHT;goog.i18n.bidi.I18N_LEFT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT;
goog.i18n.bidi.toDir=function(a,b){return"number"==typeof a?0<a?goog.i18n.bidi.Dir.LTR:0>a?goog.i18n.bidi.Dir.RTL:b?null:goog.i18n.bidi.Dir.NEUTRAL:null==a?null:a?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR};goog.i18n.bidi.ltrChars_="A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";goog.i18n.bidi.rtlChars_="\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc";
goog.i18n.bidi.htmlSkipReg_=/<[^>]*>|&[^;]+;/g;goog.i18n.bidi.stripHtmlIfNeeded_=function(a,b){return b?a.replace(goog.i18n.bidi.htmlSkipReg_,""):a};goog.i18n.bidi.rtlCharReg_=new RegExp("["+goog.i18n.bidi.rtlChars_+"]");goog.i18n.bidi.ltrCharReg_=new RegExp("["+goog.i18n.bidi.ltrChars_+"]");goog.i18n.bidi.hasAnyRtl=function(a,b){return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.hasRtlChar=goog.i18n.bidi.hasAnyRtl;
goog.i18n.bidi.hasAnyLtr=function(a,b){return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.ltrRe_=new RegExp("^["+goog.i18n.bidi.ltrChars_+"]");goog.i18n.bidi.rtlRe_=new RegExp("^["+goog.i18n.bidi.rtlChars_+"]");goog.i18n.bidi.isRtlChar=function(a){return goog.i18n.bidi.rtlRe_.test(a)};goog.i18n.bidi.isLtrChar=function(a){return goog.i18n.bidi.ltrRe_.test(a)};goog.i18n.bidi.isNeutralChar=function(a){return!goog.i18n.bidi.isLtrChar(a)&&!goog.i18n.bidi.isRtlChar(a)};
goog.i18n.bidi.ltrDirCheckRe_=new RegExp("^[^"+goog.i18n.bidi.rtlChars_+"]*["+goog.i18n.bidi.ltrChars_+"]");goog.i18n.bidi.rtlDirCheckRe_=new RegExp("^[^"+goog.i18n.bidi.ltrChars_+"]*["+goog.i18n.bidi.rtlChars_+"]");goog.i18n.bidi.startsWithRtl=function(a,b){return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isRtlText=goog.i18n.bidi.startsWithRtl;
goog.i18n.bidi.startsWithLtr=function(a,b){return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isLtrText=goog.i18n.bidi.startsWithLtr;goog.i18n.bidi.isRequiredLtrRe_=/^http:\/\/.*/;goog.i18n.bidi.isNeutralText=function(a,b){a=goog.i18n.bidi.stripHtmlIfNeeded_(a,b);return goog.i18n.bidi.isRequiredLtrRe_.test(a)||!goog.i18n.bidi.hasAnyLtr(a)&&!goog.i18n.bidi.hasAnyRtl(a)};
goog.i18n.bidi.ltrExitDirCheckRe_=new RegExp("["+goog.i18n.bidi.ltrChars_+"][^"+goog.i18n.bidi.rtlChars_+"]*$");goog.i18n.bidi.rtlExitDirCheckRe_=new RegExp("["+goog.i18n.bidi.rtlChars_+"][^"+goog.i18n.bidi.ltrChars_+"]*$");goog.i18n.bidi.endsWithLtr=function(a,b){return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isLtrExitText=goog.i18n.bidi.endsWithLtr;
goog.i18n.bidi.endsWithRtl=function(a,b){return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a,b))};goog.i18n.bidi.isRtlExitText=goog.i18n.bidi.endsWithRtl;goog.i18n.bidi.rtlLocalesRe_=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;goog.i18n.bidi.isRtlLanguage=function(a){return goog.i18n.bidi.rtlLocalesRe_.test(a)};goog.i18n.bidi.bracketGuardTextRe_=/(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
goog.i18n.bidi.guardBracketInText=function(a,b){b=(void 0===b?goog.i18n.bidi.hasAnyRtl(a):b)?goog.i18n.bidi.Format.RLM:goog.i18n.bidi.Format.LRM;return a.replace(goog.i18n.bidi.bracketGuardTextRe_,b+"$&"+b)};goog.i18n.bidi.enforceRtlInHtml=function(a){return"<"==a.charAt(0)?a.replace(/<\w+/,"$& dir=rtl"):"\n<span dir=rtl>"+a+"</span>"};goog.i18n.bidi.enforceRtlInText=function(a){return goog.i18n.bidi.Format.RLE+a+goog.i18n.bidi.Format.PDF};
goog.i18n.bidi.enforceLtrInHtml=function(a){return"<"==a.charAt(0)?a.replace(/<\w+/,"$& dir=ltr"):"\n<span dir=ltr>"+a+"</span>"};goog.i18n.bidi.enforceLtrInText=function(a){return goog.i18n.bidi.Format.LRE+a+goog.i18n.bidi.Format.PDF};goog.i18n.bidi.dimensionsRe_=/:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;goog.i18n.bidi.leftRe_=/left/gi;goog.i18n.bidi.rightRe_=/right/gi;goog.i18n.bidi.tempRe_=/%%%%/g;
goog.i18n.bidi.mirrorCSS=function(a){return a.replace(goog.i18n.bidi.dimensionsRe_,":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_,"%%%%").replace(goog.i18n.bidi.rightRe_,goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_,goog.i18n.bidi.RIGHT)};goog.i18n.bidi.doubleQuoteSubstituteRe_=/([\u0591-\u05f2])"/g;goog.i18n.bidi.singleQuoteSubstituteRe_=/([\u0591-\u05f2])'/g;
goog.i18n.bidi.normalizeHebrewQuote=function(a){return a.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_,"$1\u05f4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_,"$1\u05f3")};goog.i18n.bidi.wordSeparatorRe_=/\s+/;goog.i18n.bidi.hasNumeralsRe_=/[\d\u06f0-\u06f9]/;goog.i18n.bidi.rtlDetectionThreshold_=.4;
goog.i18n.bidi.estimateDirection=function(a,b){var c=0,d=0,e=!1;a=goog.i18n.bidi.stripHtmlIfNeeded_(a,b).split(goog.i18n.bidi.wordSeparatorRe_);for(b=0;b<a.length;b++){var f=a[b];goog.i18n.bidi.startsWithRtl(f)?(c++,d++):goog.i18n.bidi.isRequiredLtrRe_.test(f)?e=!0:goog.i18n.bidi.hasAnyLtr(f)?d++:goog.i18n.bidi.hasNumeralsRe_.test(f)&&(e=!0)}return 0==d?e?goog.i18n.bidi.Dir.LTR:goog.i18n.bidi.Dir.NEUTRAL:c/d>goog.i18n.bidi.rtlDetectionThreshold_?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR};
goog.i18n.bidi.detectRtlDirectionality=function(a,b){return goog.i18n.bidi.estimateDirection(a,b)==goog.i18n.bidi.Dir.RTL};goog.i18n.bidi.setElementDirAndAlign=function(a,b){a&&(b=goog.i18n.bidi.toDir(b))&&(a.style.textAlign=b==goog.i18n.bidi.Dir.RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT,a.dir=b==goog.i18n.bidi.Dir.RTL?"rtl":"ltr")};
goog.i18n.bidi.setElementDirByTextDirectionality=function(a,b){switch(goog.i18n.bidi.estimateDirection(b)){case goog.i18n.bidi.Dir.LTR:a.dir="ltr";break;case goog.i18n.bidi.Dir.RTL:a.dir="rtl";break;default:a.removeAttribute("dir")}};goog.i18n.bidi.DirectionalString=function(){};goog.html.TrustedResourceUrl=function(){this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_="";this.trustedURL_=null;this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString=!0;goog.html.TrustedResourceUrl.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString()};
goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString=!0;goog.html.TrustedResourceUrl.prototype.getDirection=function(){return goog.i18n.bidi.Dir.LTR};
goog.html.TrustedResourceUrl.prototype.cloneWithParams=function(a,b){var c=goog.html.TrustedResourceUrl.unwrap(this);c=goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c);var d=c[3]||"";return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c[1]+goog.html.TrustedResourceUrl.stringifyParams_("?",c[2]||"",a)+goog.html.TrustedResourceUrl.stringifyParams_("#",d,b))};
goog.DEBUG&&(goog.html.TrustedResourceUrl.prototype.toString=function(){return"TrustedResourceUrl{"+this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_+"}"});goog.html.TrustedResourceUrl.unwrap=function(a){return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a).toString()};
goog.html.TrustedResourceUrl.unwrapTrustedScriptURL=function(a){if(a instanceof goog.html.TrustedResourceUrl&&a.constructor===goog.html.TrustedResourceUrl&&a.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;goog.asserts.fail("expected object of type TrustedResourceUrl, got '"+a+"' of type "+goog.typeOf(a));return"type_error:TrustedResourceUrl"};
goog.html.TrustedResourceUrl.unwrapTrustedURL=function(a){return a.trustedURL_?a.trustedURL_:goog.html.TrustedResourceUrl.unwrap(a)};
goog.html.TrustedResourceUrl.format=function(a,b){var c=goog.string.Const.unwrap(a);if(!goog.html.TrustedResourceUrl.BASE_URL_.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));a=b[e];return a instanceof goog.string.Const?goog.string.Const.unwrap(a):
encodeURIComponent(String(a))});return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a)};goog.html.TrustedResourceUrl.FORMAT_MARKER_=/%{(\w+)}/g;goog.html.TrustedResourceUrl.BASE_URL_=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;goog.html.TrustedResourceUrl.URL_PARAM_PARSER_=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
goog.html.TrustedResourceUrl.formatWithParams=function(a,b,c,d){return goog.html.TrustedResourceUrl.format(a,b).cloneWithParams(c,d)};goog.html.TrustedResourceUrl.fromConstant=function(a){return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a))};goog.html.TrustedResourceUrl.fromConstants=function(a){for(var b="",c=0;c<a.length;c++)b+=goog.string.Const.unwrap(a[c]);return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b)};
goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};
goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse=function(a){var b=new goog.html.TrustedResourceUrl;b.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(a):a;goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY&&(b.trustedURL_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a));return b};
goog.html.TrustedResourceUrl.stringifyParams_=function(a,b,c){if(null==c)return b;if(goog.isString(c))return c?a+encodeURIComponent(c):"";for(var d in c){var e=c[d];e=goog.isArray(e)?e:[e];for(var f=0;f<e.length;f++){var g=e[f];null!=g&&(b||(b=a),b+=(b.length>a.length?"&":"")+encodeURIComponent(d)+"="+encodeURIComponent(String(g)))}}return b};goog.string.internal={};goog.string.internal.startsWith=function(a,b){return 0==a.lastIndexOf(b,0)};goog.string.internal.endsWith=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};goog.string.internal.caseInsensitiveStartsWith=function(a,b){return 0==goog.string.internal.caseInsensitiveCompare(b,a.substr(0,b.length))};goog.string.internal.caseInsensitiveEndsWith=function(a,b){return 0==goog.string.internal.caseInsensitiveCompare(b,a.substr(a.length-b.length,b.length))};
goog.string.internal.caseInsensitiveEquals=function(a,b){return a.toLowerCase()==b.toLowerCase()};goog.string.internal.isEmptyOrWhitespace=function(a){return/^[\s\xa0]*$/.test(a)};goog.string.internal.trim=goog.TRUSTED_SITE&&String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};goog.string.internal.caseInsensitiveCompare=function(a,b){a=String(a).toLowerCase();b=String(b).toLowerCase();return a<b?-1:a==b?0:1};
goog.string.internal.newLineToBr=function(a,b){return a.replace(/(\r\n|\r|\n)/g,b?"<br />":"<br>")};
goog.string.internal.htmlEscape=function(a,b){if(b)a=a.replace(goog.string.internal.AMP_RE_,"&amp;").replace(goog.string.internal.LT_RE_,"&lt;").replace(goog.string.internal.GT_RE_,"&gt;").replace(goog.string.internal.QUOT_RE_,"&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_,"&#39;").replace(goog.string.internal.NULL_RE_,"&#0;");else{if(!goog.string.internal.ALL_RE_.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(goog.string.internal.AMP_RE_,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(goog.string.internal.LT_RE_,
"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(goog.string.internal.GT_RE_,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(goog.string.internal.QUOT_RE_,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(goog.string.internal.SINGLE_QUOTE_RE_,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(goog.string.internal.NULL_RE_,"&#0;"))}return a};goog.string.internal.AMP_RE_=/&/g;goog.string.internal.LT_RE_=/</g;goog.string.internal.GT_RE_=/>/g;goog.string.internal.QUOT_RE_=/"/g;goog.string.internal.SINGLE_QUOTE_RE_=/'/g;
goog.string.internal.NULL_RE_=/\x00/g;goog.string.internal.ALL_RE_=/[\x00&<>"']/;goog.string.internal.whitespaceEscape=function(a,b){return goog.string.internal.newLineToBr(a.replace(/  /g," &#160;"),b)};goog.string.internal.contains=function(a,b){return-1!=a.indexOf(b)};goog.string.internal.caseInsensitiveContains=function(a,b){return goog.string.internal.contains(a.toLowerCase(),b.toLowerCase())};
goog.string.internal.compareVersions=function(a,b){var c=0;a=goog.string.internal.trim(String(a)).split(".");b=goog.string.internal.trim(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=0==f[1].length?0:parseInt(f[1],10);var h=0==g[1].length?0:parseInt(g[1],10);c=goog.string.internal.compareElements_(c,h)||goog.string.internal.compareElements_(0==
f[2].length,0==g[2].length)||goog.string.internal.compareElements_(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c};goog.string.internal.compareElements_=function(a,b){return a<b?-1:a>b?1:0};goog.html.SafeUrl=function(){this.privateDoNotAccessOrElseSafeUrlWrappedValue_="";this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.SafeUrl.INNOCUOUS_STRING="about:invalid#zClosurez";goog.html.SafeUrl.prototype.implementsGoogStringTypedString=!0;goog.html.SafeUrl.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString()};
goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString=!0;goog.html.SafeUrl.prototype.getDirection=function(){return goog.i18n.bidi.Dir.LTR};goog.DEBUG&&(goog.html.SafeUrl.prototype.toString=function(){return"SafeUrl{"+this.privateDoNotAccessOrElseSafeUrlWrappedValue_+"}"});goog.html.SafeUrl.unwrap=function(a){return goog.html.SafeUrl.unwrapTrustedURL(a).toString()};
goog.html.SafeUrl.unwrapTrustedURL=function(a){if(a instanceof goog.html.SafeUrl&&a.constructor===goog.html.SafeUrl&&a.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeUrlWrappedValue_;goog.asserts.fail("expected object of type SafeUrl, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeUrl"};goog.html.SafeUrl.fromConstant=function(a){return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a))};
goog.html.SAFE_MIME_TYPE_PATTERN_=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i;goog.html.SafeUrl.isSafeMimeType=function(a){return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a)};goog.html.SafeUrl.fromBlob=function(a){a=goog.html.SAFE_MIME_TYPE_PATTERN_.test(a.type)?goog.fs.url.createObjectUrl(a):goog.html.SafeUrl.INNOCUOUS_STRING;return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.DATA_URL_PATTERN_=/^data:([^,]*);base64,[a-z0-9+\/]+=*$/i;goog.html.SafeUrl.fromDataUrl=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(goog.html.DATA_URL_PATTERN_);b=b&&goog.html.SAFE_MIME_TYPE_PATTERN_.test(b[1]);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b?a:goog.html.SafeUrl.INNOCUOUS_STRING)};goog.html.SafeUrl.fromTelUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"tel:")||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SIP_URL_PATTERN_=/^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;goog.html.SafeUrl.fromSipUrl=function(a){goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a))||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};goog.html.SafeUrl.fromFacebookMessengerUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"fb-messenger://share")||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.fromWhatsAppUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"whatsapp://send")||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};goog.html.SafeUrl.fromSmsUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"sms:")&&goog.html.SafeUrl.isSmsUrlBodyValid_(a)||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.isSmsUrlBodyValid_=function(a){var b=a.indexOf("#");0<b&&(a=a.substring(0,b));b=a.match(/[?&]body=/gi);if(!b)return!0;if(1<b.length)return!1;a=a.match(/[?&]body=([^&]*)/)[1];if(!a)return!0;try{decodeURIComponent(a)}catch(c){return!1}return/^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a)};goog.html.SafeUrl.fromSshUrl=function(a){goog.string.internal.caseInsensitiveStartsWith(a,"ssh://")||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.sanitizeChromeExtensionUrl=function(a,b){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//,a,b)};goog.html.SafeUrl.sanitizeFirefoxExtensionUrl=function(a,b){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//,a,b)};goog.html.SafeUrl.sanitizeEdgeExtensionUrl=function(a,b){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//,a,b)};
goog.html.SafeUrl.sanitizeExtensionUrl_=function(a,b,c){(a=a.exec(b))?(a=a[1],-1==(c instanceof goog.string.Const?[goog.string.Const.unwrap(c)]:c.map(function(a){return goog.string.Const.unwrap(a)})).indexOf(a)&&(b=goog.html.SafeUrl.INNOCUOUS_STRING)):b=goog.html.SafeUrl.INNOCUOUS_STRING;return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b)};goog.html.SafeUrl.fromTrustedResourceUrl=function(a){return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a))};
goog.html.SAFE_URL_PATTERN_=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;goog.html.SafeUrl.SAFE_URL_PATTERN=goog.html.SAFE_URL_PATTERN_;goog.html.SafeUrl.sanitize=function(a){if(a instanceof goog.html.SafeUrl)return a;a="object"==typeof a&&a.implementsGoogStringTypedString?a.getTypedStringValue():String(a);goog.html.SAFE_URL_PATTERN_.test(a)||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.sanitizeAssertUnchanged=function(a,b){if(a instanceof goog.html.SafeUrl)return a;a="object"==typeof a&&a.implementsGoogStringTypedString?a.getTypedStringValue():String(a);if(b&&/^data:/i.test(a)&&(b=goog.html.SafeUrl.fromDataUrl(a),b.getTypedStringValue()==a))return b;goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a),"%s does not match the safe URL pattern",a)||(a=goog.html.SafeUrl.INNOCUOUS_STRING);return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse=function(a){var b=new goog.html.SafeUrl;b.privateDoNotAccessOrElseSafeUrlWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a):a;return b};goog.html.SafeUrl.ABOUT_BLANK=goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");goog.html.SafeStyle=function(){this.privateDoNotAccessOrElseSafeStyleWrappedValue_="";this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.SafeStyle.prototype.implementsGoogStringTypedString=!0;goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};
goog.html.SafeStyle.fromConstant=function(a){a=goog.string.Const.unwrap(a);if(0===a.length)return goog.html.SafeStyle.EMPTY;goog.asserts.assert(goog.string.internal.endsWith(a,";"),"Last character of style string is not ';': "+a);goog.asserts.assert(goog.string.internal.contains(a,":"),"Style string must contain at least one ':', to specify a \"name: value\" pair: "+a);return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a)};
goog.html.SafeStyle.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeStyleWrappedValue_};goog.DEBUG&&(goog.html.SafeStyle.prototype.toString=function(){return"SafeStyle{"+this.privateDoNotAccessOrElseSafeStyleWrappedValue_+"}"});
goog.html.SafeStyle.unwrap=function(a){if(a instanceof goog.html.SafeStyle&&a.constructor===goog.html.SafeStyle&&a.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeStyleWrappedValue_;goog.asserts.fail("expected object of type SafeStyle, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeStyle"};goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse=function(a){return(new goog.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_(a)};
goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_=function(a){this.privateDoNotAccessOrElseSafeStyleWrappedValue_=a;return this};goog.html.SafeStyle.EMPTY=goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");goog.html.SafeStyle.INNOCUOUS_STRING="zClosurez";
goog.html.SafeStyle.create=function(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d=goog.isArray(d)?goog.array.map(d,goog.html.SafeStyle.sanitizePropertyValue_).join(" "):goog.html.SafeStyle.sanitizePropertyValue_(d),b+=c+":"+d+";")}return b?goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b):goog.html.SafeStyle.EMPTY};
goog.html.SafeStyle.sanitizePropertyValue_=function(a){if(a instanceof goog.html.SafeUrl)return'url("'+goog.html.SafeUrl.unwrap(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';a=a instanceof goog.string.Const?goog.string.Const.unwrap(a):goog.html.SafeStyle.sanitizePropertyValueString_(String(a));if(/[{;}]/.test(a))throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.",[a]);return a};
goog.html.SafeStyle.sanitizePropertyValueString_=function(a){var b=a.replace(goog.html.SafeStyle.FUNCTIONS_RE_,"$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_,"$1").replace(goog.html.SafeStyle.URL_RE_,"url");if(goog.html.SafeStyle.VALUE_RE_.test(b)){if(goog.html.SafeStyle.COMMENT_RE_.test(a))return goog.asserts.fail("String value disallows comments, got: "+a),goog.html.SafeStyle.INNOCUOUS_STRING;if(!goog.html.SafeStyle.hasBalancedQuotes_(a))return goog.asserts.fail("String value requires balanced quotes, got: "+
a),goog.html.SafeStyle.INNOCUOUS_STRING;if(!goog.html.SafeStyle.hasBalancedSquareBrackets_(a))return goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: "+a),goog.html.SafeStyle.INNOCUOUS_STRING}else return goog.asserts.fail("String value allows only "+goog.html.SafeStyle.VALUE_ALLOWED_CHARS_+" and simple functions, got: "+a),goog.html.SafeStyle.INNOCUOUS_STRING;return goog.html.SafeStyle.sanitizeUrl_(a)};
goog.html.SafeStyle.hasBalancedQuotes_=function(a){for(var b=!0,c=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}return b&&c};goog.html.SafeStyle.hasBalancedSquareBrackets_=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b};goog.html.SafeStyle.VALUE_ALLOWED_CHARS_="[-,.\"'%_!# a-zA-Z0-9\\[\\]]";
goog.html.SafeStyle.VALUE_RE_=new RegExp("^"+goog.html.SafeStyle.VALUE_ALLOWED_CHARS_+"+$");goog.html.SafeStyle.URL_RE_=/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;goog.html.SafeStyle.FUNCTIONS_RE_=/\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;goog.html.SafeStyle.COMMENT_RE_=/\/\*/;
goog.html.SafeStyle.sanitizeUrl_=function(a){return a.replace(goog.html.SafeStyle.URL_RE_,function(a,c,d,e){var b="";d=d.replace(/^(['"])(.*)\1$/,function(a,c,d){b=c;return d});a=goog.html.SafeUrl.sanitize(d).getTypedStringValue();return c+b+a+b+e})};goog.html.SafeStyle.concat=function(a){var b="",c=function(a){goog.isArray(a)?goog.array.forEach(a,c):b+=goog.html.SafeStyle.unwrap(a)};goog.array.forEach(arguments,c);return b?goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b):goog.html.SafeStyle.EMPTY};goog.html.SafeStyleSheet=function(){this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_="";this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_};goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString=!0;goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};
goog.html.SafeStyleSheet.createRule=function(a,b){if(goog.string.internal.contains(a,"<"))throw Error("Selector does not allow '<', got: "+a);var c=a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+a);if(!goog.html.SafeStyleSheet.hasBalancedBrackets_(c))throw Error("() and [] in selector must be balanced, got: "+a);b instanceof goog.html.SafeStyle||(b=goog.html.SafeStyle.create(b));
a=a+"{"+goog.html.SafeStyle.unwrap(b).replace(/</g,"\\3C ")+"}";return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a)};goog.html.SafeStyleSheet.hasBalancedBrackets_=function(a){for(var b={"(":")","[":"]"},c=[],d=0;d<a.length;d++){var e=a[d];if(b[e])c.push(b[e]);else if(goog.object.contains(b,e)&&c.pop()!=e)return!1}return 0==c.length};
goog.html.SafeStyleSheet.concat=function(a){var b="",c=function(a){goog.isArray(a)?goog.array.forEach(a,c):b+=goog.html.SafeStyleSheet.unwrap(a)};goog.array.forEach(arguments,c);return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b)};
goog.html.SafeStyleSheet.fromConstant=function(a){a=goog.string.Const.unwrap(a);if(0===a.length)return goog.html.SafeStyleSheet.EMPTY;goog.asserts.assert(!goog.string.internal.contains(a,"<"),"Forbidden '<' character in style sheet string: "+a);return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a)};goog.html.SafeStyleSheet.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_};
goog.DEBUG&&(goog.html.SafeStyleSheet.prototype.toString=function(){return"SafeStyleSheet{"+this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_+"}"});
goog.html.SafeStyleSheet.unwrap=function(a){if(a instanceof goog.html.SafeStyleSheet&&a.constructor===goog.html.SafeStyleSheet&&a.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;goog.asserts.fail("expected object of type SafeStyleSheet, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeStyleSheet"};
goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse=function(a){return(new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(a)};goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_=function(a){this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_=a;return this};goog.html.SafeStyleSheet.EMPTY=goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");goog.labs={};goog.labs.userAgent={};goog.labs.userAgent.util={};goog.labs.userAgent.util.getNativeUserAgentString_=function(){var a=goog.labs.userAgent.util.getNavigator_();return a&&(a=a.userAgent)?a:""};goog.labs.userAgent.util.getNavigator_=function(){return goog.global.navigator};goog.labs.userAgent.util.userAgent_=goog.labs.userAgent.util.getNativeUserAgentString_();goog.labs.userAgent.util.setUserAgent=function(a){goog.labs.userAgent.util.userAgent_=a||goog.labs.userAgent.util.getNativeUserAgentString_()};
goog.labs.userAgent.util.getUserAgent=function(){return goog.labs.userAgent.util.userAgent_};goog.labs.userAgent.util.matchUserAgent=function(a){var b=goog.labs.userAgent.util.getUserAgent();return goog.string.internal.contains(b,a)};goog.labs.userAgent.util.matchUserAgentIgnoreCase=function(a){var b=goog.labs.userAgent.util.getUserAgent();return goog.string.internal.caseInsensitiveContains(b,a)};
goog.labs.userAgent.util.extractVersionTuples=function(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};goog.labs.userAgent.browser={};goog.labs.userAgent.browser.matchOpera_=function(){return goog.labs.userAgent.util.matchUserAgent("Opera")};goog.labs.userAgent.browser.matchIE_=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")};goog.labs.userAgent.browser.matchEdgeHtml_=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")};goog.labs.userAgent.browser.matchEdgeChromium_=function(){return goog.labs.userAgent.util.matchUserAgent("Edg/")};
goog.labs.userAgent.browser.matchOperaChromium_=function(){return goog.labs.userAgent.util.matchUserAgent("OPR")};goog.labs.userAgent.browser.matchFirefox_=function(){return goog.labs.userAgent.util.matchUserAgent("Firefox")||goog.labs.userAgent.util.matchUserAgent("FxiOS")};
goog.labs.userAgent.browser.matchSafari_=function(){return goog.labs.userAgent.util.matchUserAgent("Safari")&&!(goog.labs.userAgent.browser.matchChrome_()||goog.labs.userAgent.browser.matchCoast_()||goog.labs.userAgent.browser.matchOpera_()||goog.labs.userAgent.browser.matchEdgeHtml_()||goog.labs.userAgent.browser.matchEdgeChromium_()||goog.labs.userAgent.browser.matchOperaChromium_()||goog.labs.userAgent.browser.matchFirefox_()||goog.labs.userAgent.browser.isSilk()||goog.labs.userAgent.util.matchUserAgent("Android"))};
goog.labs.userAgent.browser.matchCoast_=function(){return goog.labs.userAgent.util.matchUserAgent("Coast")};goog.labs.userAgent.browser.matchIosWebview_=function(){return(goog.labs.userAgent.util.matchUserAgent("iPad")||goog.labs.userAgent.util.matchUserAgent("iPhone"))&&!goog.labs.userAgent.browser.matchSafari_()&&!goog.labs.userAgent.browser.matchChrome_()&&!goog.labs.userAgent.browser.matchCoast_()&&!goog.labs.userAgent.browser.matchFirefox_()&&goog.labs.userAgent.util.matchUserAgent("AppleWebKit")};
goog.labs.userAgent.browser.matchChrome_=function(){return(goog.labs.userAgent.util.matchUserAgent("Chrome")||goog.labs.userAgent.util.matchUserAgent("CriOS"))&&!goog.labs.userAgent.browser.matchEdgeHtml_()};goog.labs.userAgent.browser.matchAndroidBrowser_=function(){return goog.labs.userAgent.util.matchUserAgent("Android")&&!(goog.labs.userAgent.browser.isChrome()||goog.labs.userAgent.browser.isFirefox()||goog.labs.userAgent.browser.isOpera()||goog.labs.userAgent.browser.isSilk())};
goog.labs.userAgent.browser.isOpera=goog.labs.userAgent.browser.matchOpera_;goog.labs.userAgent.browser.isIE=goog.labs.userAgent.browser.matchIE_;goog.labs.userAgent.browser.isEdge=goog.labs.userAgent.browser.matchEdgeHtml_;goog.labs.userAgent.browser.isEdgeChromium=goog.labs.userAgent.browser.matchEdgeChromium_;goog.labs.userAgent.browser.isOperaChromium=goog.labs.userAgent.browser.matchOperaChromium_;goog.labs.userAgent.browser.isFirefox=goog.labs.userAgent.browser.matchFirefox_;
goog.labs.userAgent.browser.isSafari=goog.labs.userAgent.browser.matchSafari_;goog.labs.userAgent.browser.isCoast=goog.labs.userAgent.browser.matchCoast_;goog.labs.userAgent.browser.isIosWebview=goog.labs.userAgent.browser.matchIosWebview_;goog.labs.userAgent.browser.isChrome=goog.labs.userAgent.browser.matchChrome_;goog.labs.userAgent.browser.isAndroidBrowser=goog.labs.userAgent.browser.matchAndroidBrowser_;goog.labs.userAgent.browser.isSilk=function(){return goog.labs.userAgent.util.matchUserAgent("Silk")};
goog.labs.userAgent.browser.getVersion=function(){function a(a){a=goog.array.find(a,d);return c[a]||""}var b=goog.labs.userAgent.util.getUserAgent();if(goog.labs.userAgent.browser.isIE())return goog.labs.userAgent.browser.getIEVersion_(b);b=goog.labs.userAgent.util.extractVersionTuples(b);var c={};goog.array.forEach(b,function(a){c[a[0]]=a[1]});var d=goog.partial(goog.object.containsKey,c);return goog.labs.userAgent.browser.isOpera()?a(["Version","Opera"]):goog.labs.userAgent.browser.isEdge()?a(["Edge"]):
goog.labs.userAgent.browser.isEdgeChromium()?a(["Edg"]):goog.labs.userAgent.browser.isChrome()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""};goog.labs.userAgent.browser.isVersionOrHigher=function(a){return 0<=goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(),a)};
goog.labs.userAgent.browser.getIEVersion_=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};goog.html.SafeHtml=function(){this.privateDoNotAccessOrElseSafeHtmlWrappedValue_="";this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;this.dir_=null};goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString=!0;goog.html.SafeHtml.prototype.getDirection=function(){return this.dir_};goog.html.SafeHtml.prototype.implementsGoogStringTypedString=!0;goog.html.SafeHtml.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()};
goog.DEBUG&&(goog.html.SafeHtml.prototype.toString=function(){return"SafeHtml{"+this.privateDoNotAccessOrElseSafeHtmlWrappedValue_+"}"});goog.html.SafeHtml.unwrap=function(a){return goog.html.SafeHtml.unwrapTrustedHTML(a).toString()};
goog.html.SafeHtml.unwrapTrustedHTML=function(a){if(a instanceof goog.html.SafeHtml&&a.constructor===goog.html.SafeHtml&&a.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;goog.asserts.fail("expected object of type SafeHtml, got '"+a+"' of type "+goog.typeOf(a));return"type_error:SafeHtml"};
goog.html.SafeHtml.htmlEscape=function(a){if(a instanceof goog.html.SafeHtml)return a;var b="object"==typeof a,c=null;b&&a.implementsGoogI18nBidiDirectionalString&&(c=a.getDirection());a=b&&a.implementsGoogStringTypedString?a.getTypedStringValue():String(a);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(a),c)};
goog.html.SafeHtml.htmlEscapePreservingNewlines=function(a){if(a instanceof goog.html.SafeHtml)return a;a=goog.html.SafeHtml.htmlEscape(a);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(a)),a.getDirection())};
goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces=function(a){if(a instanceof goog.html.SafeHtml)return a;a=goog.html.SafeHtml.htmlEscape(a);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(a)),a.getDirection())};goog.html.SafeHtml.from=goog.html.SafeHtml.htmlEscape;goog.html.SafeHtml.VALID_NAMES_IN_TAG_=/^[a-zA-Z0-9-]+$/;
goog.html.SafeHtml.URL_ATTRIBUTES_={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0};goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};goog.html.SafeHtml.create=function(a,b,c){goog.html.SafeHtml.verifyTagName(String(a));return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a),b,c)};
goog.html.SafeHtml.verifyTagName=function(a){if(!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toUpperCase()in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");};
goog.html.SafeHtml.createIframe=function(a,b,c,d){a&&goog.html.TrustedResourceUrl.unwrap(a);var e={};e.src=a||null;e.srcdoc=b&&goog.html.SafeHtml.unwrap(b);a=goog.html.SafeHtml.combineAttributes(e,{sandbox:""},c);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe",a,d)};
goog.html.SafeHtml.createSandboxIframe=function(a,b,c,d){if(!goog.html.SafeHtml.canUseSandboxIframe())throw Error("The browser does not support sandboxed iframes.");var e={};e.src=a?goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a)):null;e.srcdoc=b||null;e.sandbox="";a=goog.html.SafeHtml.combineAttributes(e,{},c);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe",a,d)};
goog.html.SafeHtml.canUseSandboxIframe=function(){return goog.global.HTMLIFrameElement&&"sandbox"in goog.global.HTMLIFrameElement.prototype};goog.html.SafeHtml.createScriptSrc=function(a,b){goog.html.TrustedResourceUrl.unwrap(a);a=goog.html.SafeHtml.combineAttributes({src:a},{},b);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script",a)};
goog.html.SafeHtml.createScript=function(a,b){for(var c in b){var d=c.toLowerCase();if("language"==d||"src"==d||"text"==d||"type"==d)throw Error('Cannot set "'+d+'" attribute');}c="";a=goog.array.concat(a);for(d=0;d<a.length;d++)c+=goog.html.SafeScript.unwrap(a[d]);a=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c,goog.i18n.bidi.Dir.NEUTRAL);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script",b,a)};
goog.html.SafeHtml.createStyle=function(a,b){b=goog.html.SafeHtml.combineAttributes({type:"text/css"},{},b);var c="";a=goog.array.concat(a);for(var d=0;d<a.length;d++)c+=goog.html.SafeStyleSheet.unwrap(a[d]);a=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c,goog.i18n.bidi.Dir.NEUTRAL);return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style",b,a)};
goog.html.SafeHtml.createMetaRefresh=function(a,b){a=goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a));(goog.labs.userAgent.browser.isIE()||goog.labs.userAgent.browser.isEdge())&&goog.string.internal.contains(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'");return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta",{"http-equiv":"refresh",content:(b||0)+"; url="+a})};
goog.html.SafeHtml.getAttrNameAndValue_=function(a,b,c){if(c instanceof goog.string.Const)c=goog.string.Const.unwrap(c);else if("style"==b.toLowerCase())c=goog.html.SafeHtml.getStyleValue_(c);else{if(/^on/i.test(b))throw Error('Attribute "'+b+'" requires goog.string.Const value, "'+c+'" given.');if(b.toLowerCase()in goog.html.SafeHtml.URL_ATTRIBUTES_)if(c instanceof goog.html.TrustedResourceUrl)c=goog.html.TrustedResourceUrl.unwrap(c);else if(c instanceof goog.html.SafeUrl)c=goog.html.SafeUrl.unwrap(c);
else if(goog.isString(c))c=goog.html.SafeUrl.sanitize(c).getTypedStringValue();else throw Error('Attribute "'+b+'" on tag "'+a+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+c+'" given.');}c.implementsGoogStringTypedString&&(c=c.getTypedStringValue());goog.asserts.assert(goog.isString(c)||goog.isNumber(c),"String or number value expected, got "+typeof c+" with value: "+c);return b+'="'+goog.string.internal.htmlEscape(String(c))+'"'};
goog.html.SafeHtml.getStyleValue_=function(a){if(!goog.isObject(a))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof a+" given: "+a);a instanceof goog.html.SafeStyle||(a=goog.html.SafeStyle.create(a));return goog.html.SafeStyle.unwrap(a)};goog.html.SafeHtml.createWithDir=function(a,b,c,d){b=goog.html.SafeHtml.create(b,c,d);b.dir_=a;return b};
goog.html.SafeHtml.join=function(a,b){a=goog.html.SafeHtml.htmlEscape(a);var c=a.getDirection(),d=[],e=function(a){goog.isArray(a)?goog.array.forEach(a,e):(a=goog.html.SafeHtml.htmlEscape(a),d.push(goog.html.SafeHtml.unwrap(a)),a=a.getDirection(),c==goog.i18n.bidi.Dir.NEUTRAL?c=a:a!=goog.i18n.bidi.Dir.NEUTRAL&&c!=a&&(c=null))};goog.array.forEach(b,e);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d.join(goog.html.SafeHtml.unwrap(a)),c)};
goog.html.SafeHtml.concat=function(a){return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY,Array.prototype.slice.call(arguments))};goog.html.SafeHtml.concatWithDir=function(a,b){var c=goog.html.SafeHtml.concat(goog.array.slice(arguments,1));c.dir_=a;return c};goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={};goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse=function(a,b){return(new goog.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_(a,b)};
goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_=function(a,b){this.privateDoNotAccessOrElseSafeHtmlWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(a):a;this.dir_=b;return this};
goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse=function(a,b,c){var d=null;var e="<"+a+goog.html.SafeHtml.stringifyAttributes(a,b);goog.isDefAndNotNull(c)?goog.isArray(c)||(c=[c]):c=[];goog.dom.tags.isVoidTag(a.toLowerCase())?(goog.asserts.assert(!c.length,"Void tag <"+a+"> does not allow content."),e+=">"):(d=goog.html.SafeHtml.concat(c),e+=">"+goog.html.SafeHtml.unwrap(d)+"</"+a+">",d=d.getDirection());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?goog.i18n.bidi.Dir.NEUTRAL:
null);return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e,d)};goog.html.SafeHtml.stringifyAttributes=function(a,b){var c="";if(b)for(var d in b){if(!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(d))throw Error('Invalid attribute name "'+d+'".');var e=b[d];goog.isDefAndNotNull(e)&&(c+=" "+goog.html.SafeHtml.getAttrNameAndValue_(a,d,e))}return c};
goog.html.SafeHtml.combineAttributes=function(a,b,c){var d={},e;for(e in a)goog.asserts.assert(e.toLowerCase()==e,"Must be lower case"),d[e]=a[e];for(e in b)goog.asserts.assert(e.toLowerCase()==e,"Must be lower case"),d[e]=b[e];for(e in c){var f=e.toLowerCase();if(f in a)throw Error('Cannot override "'+f+'" attribute, got "'+e+'" with value "'+c[e]+'"');f in b&&delete d[f];d[e]=c[e]}return d};
goog.html.SafeHtml.DOCTYPE_HTML=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>",goog.i18n.bidi.Dir.NEUTRAL);goog.html.SafeHtml.EMPTY=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("",goog.i18n.bidi.Dir.NEUTRAL);goog.html.SafeHtml.BR=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>",goog.i18n.bidi.Dir.NEUTRAL);goog.html.uncheckedconversions={};goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract=function(a,b,c){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b,c||null)};
goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b)};
goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b)};
goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b)};
goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b)};
goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract=function(a,b){goog.asserts.assertString(goog.string.Const.unwrap(a),"must provide justification");goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a)),"must provide non-empty justification");return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b)};goog.dom.safe={};goog.dom.safe.InsertAdjacentHtmlPosition={AFTERBEGIN:"afterbegin",AFTEREND:"afterend",BEFOREBEGIN:"beforebegin",BEFOREEND:"beforeend"};goog.dom.safe.insertAdjacentHtml=function(a,b,c){a.insertAdjacentHTML(b,goog.html.SafeHtml.unwrapTrustedHTML(c))};goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};
goog.dom.safe.isInnerHtmlCleanupRecursive_=goog.functions.cacheReturnValue(function(){if(goog.DEBUG&&"undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(goog.DEBUG&&!a.firstChild)return!1;b=a.firstChild.firstChild;a.innerHTML=goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);return!b.parentElement});
goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse=function(a,b){if(goog.dom.safe.isInnerHtmlCleanupRecursive_())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=goog.html.SafeHtml.unwrapTrustedHTML(b)};
goog.dom.safe.setInnerHtml=function(a,b){if(goog.asserts.ENABLE_ASSERTS){var c=a.tagName.toUpperCase();if(goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[c])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+a.tagName+".");}goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a,b)};goog.dom.safe.setOuterHtml=function(a,b){a.outerHTML=goog.html.SafeHtml.unwrapTrustedHTML(b)};
goog.dom.safe.setFormElementAction=function(a,b){b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);goog.dom.asserts.assertIsHTMLFormElement(a).action=goog.html.SafeUrl.unwrapTrustedURL(b)};goog.dom.safe.setButtonFormAction=function(a,b){b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);goog.dom.asserts.assertIsHTMLButtonElement(a).formAction=goog.html.SafeUrl.unwrapTrustedURL(b)};
goog.dom.safe.setInputFormAction=function(a,b){b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);goog.dom.asserts.assertIsHTMLInputElement(a).formAction=goog.html.SafeUrl.unwrapTrustedURL(b)};goog.dom.safe.setStyle=function(a,b){a.style.cssText=goog.html.SafeStyle.unwrap(b)};goog.dom.safe.documentWrite=function(a,b){a.write(goog.html.SafeHtml.unwrapTrustedHTML(b))};
goog.dom.safe.setAnchorHref=function(a,b){goog.dom.asserts.assertIsHTMLAnchorElement(a);b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);a.href=goog.html.SafeUrl.unwrapTrustedURL(b)};goog.dom.safe.setImageSrc=function(a,b){goog.dom.asserts.assertIsHTMLImageElement(a);if(!(b instanceof goog.html.SafeUrl)){var c=/^data:image\//i.test(b);b=goog.html.SafeUrl.sanitizeAssertUnchanged(b,c)}a.src=goog.html.SafeUrl.unwrapTrustedURL(b)};
goog.dom.safe.setAudioSrc=function(a,b){goog.dom.asserts.assertIsHTMLAudioElement(a);if(!(b instanceof goog.html.SafeUrl)){var c=/^data:audio\//i.test(b);b=goog.html.SafeUrl.sanitizeAssertUnchanged(b,c)}a.src=goog.html.SafeUrl.unwrapTrustedURL(b)};goog.dom.safe.setVideoSrc=function(a,b){goog.dom.asserts.assertIsHTMLVideoElement(a);if(!(b instanceof goog.html.SafeUrl)){var c=/^data:video\//i.test(b);b=goog.html.SafeUrl.sanitizeAssertUnchanged(b,c)}a.src=goog.html.SafeUrl.unwrapTrustedURL(b)};
goog.dom.safe.setEmbedSrc=function(a,b){goog.dom.asserts.assertIsHTMLEmbedElement(a);a.src=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b)};goog.dom.safe.setFrameSrc=function(a,b){goog.dom.asserts.assertIsHTMLFrameElement(a);a.src=goog.html.TrustedResourceUrl.unwrapTrustedURL(b)};goog.dom.safe.setIframeSrc=function(a,b){goog.dom.asserts.assertIsHTMLIFrameElement(a);a.src=goog.html.TrustedResourceUrl.unwrapTrustedURL(b)};
goog.dom.safe.setIframeSrcdoc=function(a,b){goog.dom.asserts.assertIsHTMLIFrameElement(a);a.srcdoc=goog.html.SafeHtml.unwrapTrustedHTML(b)};
goog.dom.safe.setLinkHrefAndRel=function(a,b,c){goog.dom.asserts.assertIsHTMLLinkElement(a);a.rel=c;goog.string.internal.caseInsensitiveContains(c,"stylesheet")?(goog.asserts.assert(b instanceof goog.html.TrustedResourceUrl,'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'),a.href=goog.html.TrustedResourceUrl.unwrapTrustedURL(b)):a.href=b instanceof goog.html.TrustedResourceUrl?goog.html.TrustedResourceUrl.unwrapTrustedURL(b):b instanceof goog.html.SafeUrl?goog.html.SafeUrl.unwrapTrustedURL(b):
goog.html.SafeUrl.unwrapTrustedURL(goog.html.SafeUrl.sanitizeAssertUnchanged(b))};goog.dom.safe.setObjectData=function(a,b){goog.dom.asserts.assertIsHTMLObjectElement(a);a.data=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b)};goog.dom.safe.setScriptSrc=function(a,b){goog.dom.asserts.assertIsHTMLScriptElement(a);a.src=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);(b=goog.getScriptNonce())&&a.setAttribute("nonce",b)};
goog.dom.safe.setScriptContent=function(a,b){goog.dom.asserts.assertIsHTMLScriptElement(a);a.text=goog.html.SafeScript.unwrapTrustedScript(b);(b=goog.getScriptNonce())&&a.setAttribute("nonce",b)};goog.dom.safe.setLocationHref=function(a,b){goog.dom.asserts.assertIsLocation(a);b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);a.href=goog.html.SafeUrl.unwrapTrustedURL(b)};
goog.dom.safe.assignLocation=function(a,b){goog.dom.asserts.assertIsLocation(a);b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);a.assign(goog.html.SafeUrl.unwrapTrustedURL(b))};goog.dom.safe.replaceLocation=function(a,b){goog.dom.asserts.assertIsLocation(a);b=b instanceof goog.html.SafeUrl?b:goog.html.SafeUrl.sanitizeAssertUnchanged(b);a.replace(goog.html.SafeUrl.unwrapTrustedURL(b))};
goog.dom.safe.openInWindow=function(a,b,c,d,e){a=a instanceof goog.html.SafeUrl?a:goog.html.SafeUrl.sanitizeAssertUnchanged(a);return(b||goog.global).open(goog.html.SafeUrl.unwrapTrustedURL(a),c?goog.string.Const.unwrap(c):"",d,e)};goog.dom.safe.parseFromStringHtml=function(a,b){return goog.dom.safe.parseFromString(a,b,"text/html")};goog.dom.safe.parseFromString=function(a,b,c){return a.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(b),c)};
goog.dom.safe.createImageFromBlob=function(a){if(!/^image\/.*/g.test(a.type))throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");var b=goog.global.URL.createObjectURL(a);a=new goog.global.Image;a.onload=function(){goog.global.URL.revokeObjectURL(b)};goog.dom.safe.setImageSrc(a,goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."),b));return a};goog.string.DETECT_DOUBLE_ESCAPING=!1;goog.string.FORCE_NON_DOM_HTML_UNESCAPING=!1;goog.string.Unicode={NBSP:"\u00a0"};goog.string.startsWith=goog.string.internal.startsWith;goog.string.endsWith=goog.string.internal.endsWith;goog.string.caseInsensitiveStartsWith=goog.string.internal.caseInsensitiveStartsWith;goog.string.caseInsensitiveEndsWith=goog.string.internal.caseInsensitiveEndsWith;goog.string.caseInsensitiveEquals=goog.string.internal.caseInsensitiveEquals;
goog.string.subs=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};goog.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};goog.string.isEmptyOrWhitespace=goog.string.internal.isEmptyOrWhitespace;goog.string.isEmptyString=function(a){return 0==a.length};goog.string.isEmpty=goog.string.isEmptyOrWhitespace;goog.string.isEmptyOrWhitespaceSafe=function(a){return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a))};
goog.string.isEmptySafe=goog.string.isEmptyOrWhitespaceSafe;goog.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};goog.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};goog.string.isNumeric=function(a){return!/[^0-9]/.test(a)};goog.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};goog.string.isSpace=function(a){return" "==a};goog.string.isUnicodeChar=function(a){return 1==a.length&&" "<=a&&"~">=a||"\u0080"<=a&&"\ufffd">=a};
goog.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};goog.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};goog.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};goog.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};goog.string.collapseBreakingSpaces=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};goog.string.trim=goog.string.internal.trim;
goog.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};goog.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};goog.string.caseInsensitiveCompare=goog.string.internal.caseInsensitiveCompare;
goog.string.numberAwareCompare_=function(a,b,c){if(a==b)return 0;if(!a)return-1;if(!b)return 1;for(var d=a.toLowerCase().match(c),e=b.toLowerCase().match(c),f=Math.min(d.length,e.length),g=0;g<f;g++){c=d[g];var h=e[g];if(c!=h)return a=parseInt(c,10),!isNaN(a)&&(b=parseInt(h,10),!isNaN(b)&&a-b)?a-b:c<h?-1:1}return d.length!=e.length?d.length-e.length:a<b?-1:1};goog.string.intAwareCompare=function(a,b){return goog.string.numberAwareCompare_(a,b,/\d+|\D+/g)};
goog.string.floatAwareCompare=function(a,b){return goog.string.numberAwareCompare_(a,b,/\d+|\.\d+|\D+/g)};goog.string.numerateCompare=goog.string.floatAwareCompare;goog.string.urlEncode=function(a){return encodeURIComponent(String(a))};goog.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};goog.string.newLineToBr=goog.string.internal.newLineToBr;
goog.string.htmlEscape=function(a,b){a=goog.string.internal.htmlEscape(a,b);goog.string.DETECT_DOUBLE_ESCAPING&&(a=a.replace(goog.string.E_RE_,"&#101;"));return a};goog.string.E_RE_=/e/g;goog.string.unescapeEntities=function(a){return goog.string.contains(a,"&")?!goog.string.FORCE_NON_DOM_HTML_UNESCAPING&&"document"in goog.global?goog.string.unescapeEntitiesUsingDom_(a):goog.string.unescapePureXmlEntities_(a):a};
goog.string.unescapeEntitiesWithDocument=function(a,b){return goog.string.contains(a,"&")?goog.string.unescapeEntitiesUsingDom_(a,b):a};
goog.string.unescapeEntitiesUsingDom_=function(a,b){var c={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var d=b?b.createElement("div"):goog.global.document.createElement("div");return a.replace(goog.string.HTML_ENTITY_PATTERN_,function(a,b){var e=c[a];if(e)return e;"#"==b.charAt(0)&&(b=Number("0"+b.substr(1)),isNaN(b)||(e=String.fromCharCode(b)));e||(goog.dom.safe.setInnerHtml(d,goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."),
a+" ")),e=d.firstChild.nodeValue.slice(0,-1));return c[a]=e})};goog.string.unescapePureXmlEntities_=function(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:return"#"!=c.charAt(0)||(c=Number("0"+c.substr(1)),isNaN(c))?a:String.fromCharCode(c)}})};goog.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g;goog.string.whitespaceEscape=function(a,b){return goog.string.newLineToBr(a.replace(/  /g," &#160;"),b)};
goog.string.preserveSpaces=function(a){return a.replace(/(^|[\n ]) /g,"$1"+goog.string.Unicode.NBSP)};goog.string.stripQuotes=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};goog.string.truncate=function(a,b,c){c&&(a=goog.string.unescapeEntities(a));a.length>b&&(a=a.substring(0,b-3)+"...");c&&(a=goog.string.htmlEscape(a));return a};
goog.string.truncateMiddle=function(a,b,c,d){c&&(a=goog.string.unescapeEntities(a));if(d&&a.length>b){d>b&&(d=b);var e=a.length-d;a=a.substring(0,b-d)+"..."+a.substring(e)}else a.length>b&&(d=Math.floor(b/2),e=a.length-d,a=a.substring(0,d+b%2)+"..."+a.substring(e));c&&(a=goog.string.htmlEscape(a));return a};goog.string.specialEscapeChars_={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"};goog.string.jsEscapeCache_={"'":"\\'"};
goog.string.quote=function(a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0);b[c+1]=goog.string.specialEscapeChars_[d]||(31<e&&127>e?d:goog.string.escapeChar(d))}b.push('"');return b.join("")};goog.string.escapeString=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=goog.string.escapeChar(a.charAt(c));return b.join("")};
goog.string.escapeChar=function(a){if(a in goog.string.jsEscapeCache_)return goog.string.jsEscapeCache_[a];if(a in goog.string.specialEscapeChars_)return goog.string.jsEscapeCache_[a]=goog.string.specialEscapeChars_[a];var b=a.charCodeAt(0);if(31<b&&127>b)var c=a;else{if(256>b){if(c="\\x",16>b||256<b)c+="0"}else c="\\u",4096>b&&(c+="0");c+=b.toString(16).toUpperCase()}return goog.string.jsEscapeCache_[a]=c};goog.string.contains=goog.string.internal.contains;goog.string.caseInsensitiveContains=goog.string.internal.caseInsensitiveContains;
goog.string.countOf=function(a,b){return a&&b?a.split(b).length-1:0};goog.string.removeAt=function(a,b,c){var d=a;0<=b&&b<a.length&&0<c&&(d=a.substr(0,b)+a.substr(b+c,a.length-b-c));return d};goog.string.remove=function(a,b){return a.replace(b,"")};goog.string.removeAll=function(a,b){b=new RegExp(goog.string.regExpEscape(b),"g");return a.replace(b,"")};goog.string.replaceAll=function(a,b,c){b=new RegExp(goog.string.regExpEscape(b),"g");return a.replace(b,c.replace(/\$/g,"$$$$"))};
goog.string.regExpEscape=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};goog.string.repeat=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};goog.string.padNumber=function(a,b,c){a=goog.isDef(c)?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return goog.string.repeat("0",Math.max(0,b-c))+a};goog.string.makeSafe=function(a){return null==a?"":String(a)};
goog.string.buildString=function(a){return Array.prototype.join.call(arguments,"")};goog.string.getRandomString=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^goog.now()).toString(36)};goog.string.compareVersions=goog.string.internal.compareVersions;goog.string.hashCode=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};goog.string.uniqueStringCounter_=2147483648*Math.random()|0;
goog.string.createUniqueString=function(){return"goog_"+goog.string.uniqueStringCounter_++};goog.string.toNumber=function(a){var b=Number(a);return 0==b&&goog.string.isEmptyOrWhitespace(a)?NaN:b};goog.string.isLowerCamelCase=function(a){return/^[a-z]+([A-Z][a-z]*)*$/.test(a)};goog.string.isUpperCamelCase=function(a){return/^([A-Z][a-z]*)+$/.test(a)};goog.string.toCamelCase=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};
goog.string.toSelectorCase=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};goog.string.toTitleCase=function(a,b){b=goog.isString(b)?goog.string.regExpEscape(b):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};goog.string.capitalize=function(a){return String(a.charAt(0)).toUpperCase()+String(a.substr(1)).toLowerCase()};
goog.string.parseInt=function(a){isFinite(a)&&(a=String(a));return goog.isString(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN};goog.string.splitLimit=function(a,b,c){a=a.split(b);for(var d=[];0<c&&a.length;)d.push(a.shift()),c--;a.length&&d.push(a.join(b));return d};goog.string.lastComponent=function(a,b){if(b)"string"==typeof b&&(b=[b]);else return a;for(var c=-1,d=0;d<b.length;d++)if(""!=b[d]){var e=a.lastIndexOf(b[d]);e>c&&(c=e)}return-1==c?a:a.slice(c+1)};
goog.string.editDistance=function(a,b){var c=[],d=[];if(a==b)return 0;if(!a.length||!b.length)return Math.max(a.length,b.length);for(var e=0;e<b.length+1;e++)c[e]=e;for(e=0;e<a.length;e++){d[0]=e+1;for(var f=0;f<b.length;f++)d[f+1]=Math.min(d[f]+1,c[f+1]+1,c[f]+Number(a[e]!=b[f]));for(f=0;f<c.length;f++)c[f]=d[f]}return d[b.length]};goog.labs.userAgent.engine={};goog.labs.userAgent.engine.isPresto=function(){return goog.labs.userAgent.util.matchUserAgent("Presto")};goog.labs.userAgent.engine.isTrident=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")};goog.labs.userAgent.engine.isEdge=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")};
goog.labs.userAgent.engine.isWebKit=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit")&&!goog.labs.userAgent.engine.isEdge()};goog.labs.userAgent.engine.isGecko=function(){return goog.labs.userAgent.util.matchUserAgent("Gecko")&&!goog.labs.userAgent.engine.isWebKit()&&!goog.labs.userAgent.engine.isTrident()&&!goog.labs.userAgent.engine.isEdge()};
goog.labs.userAgent.engine.getVersion=function(){var a=goog.labs.userAgent.util.getUserAgent();if(a){a=goog.labs.userAgent.util.extractVersionTuples(a);var b=goog.labs.userAgent.engine.getEngineTuple_(a);if(b)return"Gecko"==b[0]?goog.labs.userAgent.engine.getVersionForKey_(a,"Firefox"):b[1];a=a[0];var c;if(a&&(c=a[2])&&(c=/Trident\/([^\s;]+)/.exec(c)))return c[1]}return""};
goog.labs.userAgent.engine.getEngineTuple_=function(a){if(!goog.labs.userAgent.engine.isEdge())return a[1];for(var b=0;b<a.length;b++){var c=a[b];if("Edge"==c[0])return c}};goog.labs.userAgent.engine.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(),a)};goog.labs.userAgent.engine.getVersionForKey_=function(a,b){return(a=goog.array.find(a,function(a){return b==a[0]}))&&a[1]||""};goog.labs.userAgent.platform={};goog.labs.userAgent.platform.isAndroid=function(){return goog.labs.userAgent.util.matchUserAgent("Android")};goog.labs.userAgent.platform.isIpod=function(){return goog.labs.userAgent.util.matchUserAgent("iPod")};goog.labs.userAgent.platform.isIphone=function(){return goog.labs.userAgent.util.matchUserAgent("iPhone")&&!goog.labs.userAgent.util.matchUserAgent("iPod")&&!goog.labs.userAgent.util.matchUserAgent("iPad")};goog.labs.userAgent.platform.isIpad=function(){return goog.labs.userAgent.util.matchUserAgent("iPad")};
goog.labs.userAgent.platform.isIos=function(){return goog.labs.userAgent.platform.isIphone()||goog.labs.userAgent.platform.isIpad()||goog.labs.userAgent.platform.isIpod()};goog.labs.userAgent.platform.isMacintosh=function(){return goog.labs.userAgent.util.matchUserAgent("Macintosh")};goog.labs.userAgent.platform.isLinux=function(){return goog.labs.userAgent.util.matchUserAgent("Linux")};goog.labs.userAgent.platform.isWindows=function(){return goog.labs.userAgent.util.matchUserAgent("Windows")};
goog.labs.userAgent.platform.isChromeOS=function(){return goog.labs.userAgent.util.matchUserAgent("CrOS")};goog.labs.userAgent.platform.isChromecast=function(){return goog.labs.userAgent.util.matchUserAgent("CrKey")};goog.labs.userAgent.platform.isKaiOS=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS")};goog.labs.userAgent.platform.isGo2Phone=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("GAFP")};
goog.labs.userAgent.platform.getVersion=function(){var a=goog.labs.userAgent.util.getUserAgent(),b="";goog.labs.userAgent.platform.isWindows()?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):goog.labs.userAgent.platform.isIos()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):goog.labs.userAgent.platform.isMacintosh()?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):goog.labs.userAgent.platform.isKaiOS()?(b=/(?:KaiOS)\/(\S+)/i,
b=(a=b.exec(a))&&a[1]):goog.labs.userAgent.platform.isAndroid()?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):goog.labs.userAgent.platform.isChromeOS()&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1]);return b||""};goog.labs.userAgent.platform.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(),a)};goog.reflect={};goog.reflect.object=function(a,b){return b};goog.reflect.objectProperty=function(a,b){return a};goog.reflect.sinkValue=function(a){goog.reflect.sinkValue[" "](a);return a};goog.reflect.sinkValue[" "]=goog.nullFunction;goog.reflect.canAccessProperty=function(a,b){try{return goog.reflect.sinkValue(a[b]),!0}catch(c){}return!1};goog.reflect.cache=function(a,b,c,d){d=d?d(b):b;return Object.prototype.hasOwnProperty.call(a,d)?a[d]:a[d]=c(b)};goog.userAgent={};goog.userAgent.ASSUME_IE=!1;goog.userAgent.ASSUME_EDGE=!1;goog.userAgent.ASSUME_GECKO=!1;goog.userAgent.ASSUME_WEBKIT=!1;goog.userAgent.ASSUME_MOBILE_WEBKIT=!1;goog.userAgent.ASSUME_OPERA=!1;goog.userAgent.ASSUME_ANY_VERSION=!1;goog.userAgent.BROWSER_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_EDGE||goog.userAgent.ASSUME_GECKO||goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_OPERA;goog.userAgent.getUserAgentString=function(){return goog.labs.userAgent.util.getUserAgent()};
goog.userAgent.getNavigatorTyped=function(){return goog.global.navigator||null};goog.userAgent.getNavigator=function(){return goog.userAgent.getNavigatorTyped()};goog.userAgent.OPERA=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_OPERA:goog.labs.userAgent.browser.isOpera();goog.userAgent.IE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_IE:goog.labs.userAgent.browser.isIE();goog.userAgent.EDGE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_EDGE:goog.labs.userAgent.engine.isEdge();
goog.userAgent.EDGE_OR_IE=goog.userAgent.EDGE||goog.userAgent.IE;goog.userAgent.GECKO=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_GECKO:goog.labs.userAgent.engine.isGecko();goog.userAgent.WEBKIT=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_MOBILE_WEBKIT:goog.labs.userAgent.engine.isWebKit();goog.userAgent.isMobile_=function(){return goog.userAgent.WEBKIT&&goog.labs.userAgent.util.matchUserAgent("Mobile")};
goog.userAgent.MOBILE=goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.isMobile_();goog.userAgent.SAFARI=goog.userAgent.WEBKIT;goog.userAgent.determinePlatform_=function(){var a=goog.userAgent.getNavigatorTyped();return a&&a.platform||""};goog.userAgent.PLATFORM=goog.userAgent.determinePlatform_();goog.userAgent.ASSUME_MAC=!1;goog.userAgent.ASSUME_WINDOWS=!1;goog.userAgent.ASSUME_LINUX=!1;goog.userAgent.ASSUME_X11=!1;goog.userAgent.ASSUME_ANDROID=!1;goog.userAgent.ASSUME_IPHONE=!1;
goog.userAgent.ASSUME_IPAD=!1;goog.userAgent.ASSUME_IPOD=!1;goog.userAgent.ASSUME_KAIOS=!1;goog.userAgent.ASSUME_GO2PHONE=!1;goog.userAgent.PLATFORM_KNOWN_=goog.userAgent.ASSUME_MAC||goog.userAgent.ASSUME_WINDOWS||goog.userAgent.ASSUME_LINUX||goog.userAgent.ASSUME_X11||goog.userAgent.ASSUME_ANDROID||goog.userAgent.ASSUME_IPHONE||goog.userAgent.ASSUME_IPAD||goog.userAgent.ASSUME_IPOD;goog.userAgent.MAC=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_MAC:goog.labs.userAgent.platform.isMacintosh();
goog.userAgent.WINDOWS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_WINDOWS:goog.labs.userAgent.platform.isWindows();goog.userAgent.isLegacyLinux_=function(){return goog.labs.userAgent.platform.isLinux()||goog.labs.userAgent.platform.isChromeOS()};goog.userAgent.LINUX=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_LINUX:goog.userAgent.isLegacyLinux_();goog.userAgent.isX11_=function(){var a=goog.userAgent.getNavigatorTyped();return!!a&&goog.string.contains(a.appVersion||"","X11")};
goog.userAgent.X11=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_X11:goog.userAgent.isX11_();goog.userAgent.ANDROID=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_ANDROID:goog.labs.userAgent.platform.isAndroid();goog.userAgent.IPHONE=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPHONE:goog.labs.userAgent.platform.isIphone();goog.userAgent.IPAD=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPAD:goog.labs.userAgent.platform.isIpad();
goog.userAgent.IPOD=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPOD:goog.labs.userAgent.platform.isIpod();goog.userAgent.IOS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPHONE||goog.userAgent.ASSUME_IPAD||goog.userAgent.ASSUME_IPOD:goog.labs.userAgent.platform.isIos();goog.userAgent.KAIOS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_KAIOS:goog.labs.userAgent.platform.isKaiOS();goog.userAgent.GO2PHONE=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_GO2PHONE:goog.labs.userAgent.platform.isGo2Phone();
goog.userAgent.determineVersion_=function(){var a="",b=goog.userAgent.getVersionRegexResult_();b&&(a=b?b[1]:"");return goog.userAgent.IE&&(b=goog.userAgent.getDocumentMode_(),null!=b&&b>parseFloat(a))?String(b):a};
goog.userAgent.getVersionRegexResult_=function(){var a=goog.userAgent.getUserAgentString();if(goog.userAgent.GECKO)return/rv:([^\);]+)(\)|;)/.exec(a);if(goog.userAgent.EDGE)return/Edge\/([\d\.]+)/.exec(a);if(goog.userAgent.IE)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(goog.userAgent.WEBKIT)return/WebKit\/(\S+)/.exec(a);if(goog.userAgent.OPERA)return/(?:Version)[ \/]?(\S+)/.exec(a)};goog.userAgent.getDocumentMode_=function(){var a=goog.global.document;return a?a.documentMode:void 0};
goog.userAgent.VERSION=goog.userAgent.determineVersion_();goog.userAgent.compare=function(a,b){return goog.string.compareVersions(a,b)};goog.userAgent.isVersionOrHigherCache_={};goog.userAgent.isVersionOrHigher=function(a){return goog.userAgent.ASSUME_ANY_VERSION||goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_,a,function(){return 0<=goog.string.compareVersions(goog.userAgent.VERSION,a)})};goog.userAgent.isVersion=goog.userAgent.isVersionOrHigher;
goog.userAgent.isDocumentModeOrHigher=function(a){return Number(goog.userAgent.DOCUMENT_MODE)>=a};goog.userAgent.isDocumentMode=goog.userAgent.isDocumentModeOrHigher;goog.userAgent.DOCUMENT_MODE=function(){if(goog.global.document&&goog.userAgent.IE)return goog.userAgent.getDocumentMode_()}();goog.userAgent.product={};goog.userAgent.product.ASSUME_FIREFOX=!1;goog.userAgent.product.ASSUME_IPHONE=!1;goog.userAgent.product.ASSUME_IPAD=!1;goog.userAgent.product.ASSUME_ANDROID=!1;goog.userAgent.product.ASSUME_CHROME=!1;goog.userAgent.product.ASSUME_SAFARI=!1;
goog.userAgent.product.PRODUCT_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_EDGE||goog.userAgent.ASSUME_OPERA||goog.userAgent.product.ASSUME_FIREFOX||goog.userAgent.product.ASSUME_IPHONE||goog.userAgent.product.ASSUME_IPAD||goog.userAgent.product.ASSUME_ANDROID||goog.userAgent.product.ASSUME_CHROME||goog.userAgent.product.ASSUME_SAFARI;goog.userAgent.product.OPERA=goog.userAgent.OPERA;goog.userAgent.product.IE=goog.userAgent.IE;goog.userAgent.product.EDGE=goog.userAgent.EDGE;
goog.userAgent.product.FIREFOX=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_FIREFOX:goog.labs.userAgent.browser.isFirefox();goog.userAgent.product.isIphoneOrIpod_=function(){return goog.labs.userAgent.platform.isIphone()||goog.labs.userAgent.platform.isIpod()};goog.userAgent.product.IPHONE=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPHONE:goog.userAgent.product.isIphoneOrIpod_();
goog.userAgent.product.IPAD=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPAD:goog.labs.userAgent.platform.isIpad();goog.userAgent.product.ANDROID=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_ANDROID:goog.labs.userAgent.browser.isAndroidBrowser();goog.userAgent.product.CHROME=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_CHROME:goog.labs.userAgent.browser.isChrome();
goog.userAgent.product.isSafariDesktop_=function(){return goog.labs.userAgent.browser.isSafari()&&!goog.labs.userAgent.platform.isIos()};goog.userAgent.product.SAFARI=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_SAFARI:goog.userAgent.product.isSafariDesktop_();goog.crypt.base64={};goog.crypt.base64.DEFAULT_ALPHABET_COMMON_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";goog.crypt.base64.ENCODED_VALS=goog.crypt.base64.DEFAULT_ALPHABET_COMMON_+"+/=";goog.crypt.base64.ENCODED_VALS_WEBSAFE=goog.crypt.base64.DEFAULT_ALPHABET_COMMON_+"-_.";goog.crypt.base64.Alphabet={DEFAULT:0,NO_PADDING:1,WEBSAFE:2,WEBSAFE_DOT_PADDING:3,WEBSAFE_NO_PADDING:4};goog.crypt.base64.paddingChars_="=.";
goog.crypt.base64.isPadding_=function(a){return goog.string.contains(goog.crypt.base64.paddingChars_,a)};goog.crypt.base64.byteToCharMaps_={};goog.crypt.base64.charToByteMap_=null;goog.crypt.base64.ASSUME_NATIVE_SUPPORT_=goog.userAgent.GECKO||goog.userAgent.WEBKIT&&!goog.userAgent.product.SAFARI||goog.userAgent.OPERA;goog.crypt.base64.HAS_NATIVE_ENCODE_=goog.crypt.base64.ASSUME_NATIVE_SUPPORT_||"function"==typeof goog.global.btoa;
goog.crypt.base64.HAS_NATIVE_DECODE_=goog.crypt.base64.ASSUME_NATIVE_SUPPORT_||!goog.userAgent.product.SAFARI&&!goog.userAgent.IE&&"function"==typeof goog.global.atob;
goog.crypt.base64.encodeByteArray=function(a,b){goog.asserts.assert(goog.isArrayLike(a),"encodeByteArray takes an array as a parameter");void 0===b&&(b=goog.crypt.base64.Alphabet.DEFAULT);goog.crypt.base64.init_();b=goog.crypt.base64.byteToCharMaps_[b];for(var c=[],d=0;d<a.length;d+=3){var e=a[d],f=d+1<a.length,g=f?a[d+1]:0,h=d+2<a.length,k=h?a[d+2]:0,l=e>>2;e=(e&3)<<4|g>>4;g=(g&15)<<2|k>>6;k&=63;h||(k=64,f||(g=64));c.push(b[l],b[e],b[g]||"",b[k]||"")}return c.join("")};
goog.crypt.base64.encodeString=function(a,b){return goog.crypt.base64.HAS_NATIVE_ENCODE_&&!b?goog.global.btoa(a):goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a),b)};goog.crypt.base64.decodeString=function(a,b){if(goog.crypt.base64.HAS_NATIVE_DECODE_&&!b)return goog.global.atob(a);var c="";goog.crypt.base64.decodeStringInternal_(a,function(a){c+=String.fromCharCode(a)});return c};
goog.crypt.base64.decodeStringToByteArray=function(a,b){var c=[];goog.crypt.base64.decodeStringInternal_(a,function(a){c.push(a)});return c};
goog.crypt.base64.decodeStringToUint8Array=function(a){goog.asserts.assert(!goog.userAgent.IE||goog.userAgent.isVersionOrHigher("10"),"Browser does not support typed arrays");var b=a.length,c=3*b/4;c%3?c=Math.floor(c):goog.crypt.base64.isPadding_(a[b-1])&&(c=goog.crypt.base64.isPadding_(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;goog.crypt.base64.decodeStringInternal_(a,function(a){d[e++]=a});return d.subarray(0,e)};
goog.crypt.base64.decodeStringInternal_=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=goog.crypt.base64.charToByteMap_[c];if(null!=e)return e;if(!goog.string.isEmptyOrWhitespace(c))throw Error("Unknown base64 encoding at char: "+c);}return b}goog.crypt.base64.init_();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}};
goog.crypt.base64.init_=function(){if(!goog.crypt.base64.charToByteMap_){goog.crypt.base64.charToByteMap_={};for(var a=goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));goog.crypt.base64.byteToCharMaps_[c]=d;for(var e=0;e<d.length;e++){var f=d[e],g=goog.crypt.base64.charToByteMap_[f];void 0===g?goog.crypt.base64.charToByteMap_[f]=e:goog.asserts.assert(g===e)}}}};jspb.utils={};jspb.utils.split64Low=0;jspb.utils.split64High=0;jspb.utils.splitUint64=function(a){var b=a>>>0;a=Math.floor((a-b)/jspb.BinaryConstants.TWO_TO_32)>>>0;jspb.utils.split64Low=b;jspb.utils.split64High=a};jspb.utils.splitInt64=function(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/jspb.BinaryConstants.TWO_TO_32);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));jspb.utils.split64Low=c;jspb.utils.split64High=a};
jspb.utils.splitZigzag64=function(a){var b=0>a;a=2*Math.abs(a);jspb.utils.splitUint64(a);a=jspb.utils.split64Low;var c=jspb.utils.split64High;b&&(0==a?0==c?c=a=4294967295:(c--,a=4294967295):a--);jspb.utils.split64Low=a;jspb.utils.split64High=c};
jspb.utils.splitFloat32=function(a){var b=0>a?1:0;a=b?-a:a;if(0===a)0<1/a?(jspb.utils.split64High=0,jspb.utils.split64Low=0):(jspb.utils.split64High=0,jspb.utils.split64Low=2147483648);else if(isNaN(a))jspb.utils.split64High=0,jspb.utils.split64Low=2147483647;else if(a>jspb.BinaryConstants.FLOAT32_MAX)jspb.utils.split64High=0,jspb.utils.split64Low=(b<<31|2139095040)>>>0;else if(a<jspb.BinaryConstants.FLOAT32_MIN)a=Math.round(a/Math.pow(2,-149)),jspb.utils.split64High=0,jspb.utils.split64Low=(b<<31|
a)>>>0;else{var c=Math.floor(Math.log(a)/Math.LN2);a*=Math.pow(2,-c);a=Math.round(a*jspb.BinaryConstants.TWO_TO_23);16777216<=a&&++c;jspb.utils.split64High=0;jspb.utils.split64Low=(b<<31|c+127<<23|a&8388607)>>>0}};
jspb.utils.splitFloat64=function(a){var b=0>a?1:0;a=b?-a:a;if(0===a)jspb.utils.split64High=0<1/a?0:2147483648,jspb.utils.split64Low=0;else if(isNaN(a))jspb.utils.split64High=2147483647,jspb.utils.split64Low=4294967295;else if(a>jspb.BinaryConstants.FLOAT64_MAX)jspb.utils.split64High=(b<<31|2146435072)>>>0,jspb.utils.split64Low=0;else if(a<jspb.BinaryConstants.FLOAT64_MIN){var c=a/Math.pow(2,-1074);a=c/jspb.BinaryConstants.TWO_TO_32;jspb.utils.split64High=(b<<31|a)>>>0;jspb.utils.split64Low=c>>>0}else{c=
a;var d=0;if(2<=c)for(;2<=c&&1023>d;)d++,c/=2;else for(;1>c&&-1022<d;)c*=2,d--;c=a*Math.pow(2,-d);a=c*jspb.BinaryConstants.TWO_TO_20&1048575;c=c*jspb.BinaryConstants.TWO_TO_52>>>0;jspb.utils.split64High=(b<<31|d+1023<<20|a)>>>0;jspb.utils.split64Low=c}};
jspb.utils.splitHash64=function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=a.charCodeAt(4),g=a.charCodeAt(5),h=a.charCodeAt(6);a=a.charCodeAt(7);jspb.utils.split64Low=b+(c<<8)+(d<<16)+(e<<24)>>>0;jspb.utils.split64High=f+(g<<8)+(h<<16)+(a<<24)>>>0};jspb.utils.joinUint64=function(a,b){return b*jspb.BinaryConstants.TWO_TO_32+(a>>>0)};
jspb.utils.joinInt64=function(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0));a=jspb.utils.joinUint64(a,b);return c?-a:a};jspb.utils.toZigzag64=function(a,b,c){var d=b>>31;return c(a<<1^d,(b<<1|a>>>31)^d)};jspb.utils.joinZigzag64=function(a,b){return jspb.utils.fromZigzag64(a,b,jspb.utils.joinInt64)};jspb.utils.fromZigzag64=function(a,b,c){var d=-(a&1);return c((a>>>1|b<<31)^d,b>>>1^d)};
jspb.utils.joinFloat32=function(a,b){b=2*(a>>31)+1;var c=a>>>23&255;a&=8388607;return 255==c?a?NaN:Infinity*b:0==c?b*Math.pow(2,-149)*a:b*Math.pow(2,c-150)*(a+Math.pow(2,23))};jspb.utils.joinFloat64=function(a,b){var c=2*(b>>31)+1,d=b>>>20&2047;a=jspb.BinaryConstants.TWO_TO_32*(b&1048575)+a;return 2047==d?a?NaN:Infinity*c:0==d?c*Math.pow(2,-1074)*a:c*Math.pow(2,d-1075)*(a+jspb.BinaryConstants.TWO_TO_52)};
jspb.utils.joinHash64=function(a,b){return String.fromCharCode(a>>>0&255,a>>>8&255,a>>>16&255,a>>>24&255,b>>>0&255,b>>>8&255,b>>>16&255,b>>>24&255)};jspb.utils.DIGITS="0123456789abcdef".split("");jspb.utils.ZERO_CHAR_CODE_=48;jspb.utils.A_CHAR_CODE_=97;
jspb.utils.joinUnsignedDecimalString=function(a,b){function c(a,b){a=a?String(a):"";return b?"0000000".slice(a.length)+a:a}if(2097151>=b)return""+jspb.utils.joinUint64(a,b);var d=(a>>>24|b<<8)>>>0&16777215;b=b>>16&65535;a=(a&16777215)+6777216*d+6710656*b;d+=8147497*b;b*=2;1E7<=a&&(d+=Math.floor(a/1E7),a%=1E7);1E7<=d&&(b+=Math.floor(d/1E7),d%=1E7);return c(b,0)+c(d,b)+c(a,1)};
jspb.utils.joinSignedDecimalString=function(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b+(0==a?1:0)>>>0);a=jspb.utils.joinUnsignedDecimalString(a,b);return c?"-"+a:a};jspb.utils.hash64ToDecimalString=function(a,b){jspb.utils.splitHash64(a);a=jspb.utils.split64Low;var c=jspb.utils.split64High;return b?jspb.utils.joinSignedDecimalString(a,c):jspb.utils.joinUnsignedDecimalString(a,c)};
jspb.utils.hash64ArrayToDecimalStrings=function(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=jspb.utils.hash64ToDecimalString(a[d],b);return c};
jspb.utils.decimalStringToHash64=function(a){function b(a,b){for(var c=0;8>c&&(1!==a||0<b);c++)b=a*e[c]+b,e[c]=b&255,b>>>=8}function c(){for(var a=0;8>a;a++)e[a]=~e[a]&255}goog.asserts.assert(0<a.length);var d=!1;"-"===a[0]&&(d=!0,a=a.slice(1));for(var e=[0,0,0,0,0,0,0,0],f=0;f<a.length;f++)b(10,a.charCodeAt(f)-jspb.utils.ZERO_CHAR_CODE_);d&&(c(),b(1,1));return goog.crypt.byteArrayToString(e)};jspb.utils.splitDecimalString=function(a){jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a))};
jspb.utils.toHexDigit_=function(a){return String.fromCharCode(10>a?jspb.utils.ZERO_CHAR_CODE_+a:jspb.utils.A_CHAR_CODE_-10+a)};jspb.utils.fromHexCharCode_=function(a){return a>=jspb.utils.A_CHAR_CODE_?a-jspb.utils.A_CHAR_CODE_+10:a-jspb.utils.ZERO_CHAR_CODE_};jspb.utils.hash64ToHexString=function(a){var b=Array(18);b[0]="0";b[1]="x";for(var c=0;8>c;c++){var d=a.charCodeAt(7-c);b[2*c+2]=jspb.utils.toHexDigit_(d>>4);b[2*c+3]=jspb.utils.toHexDigit_(d&15)}return b.join("")};
jspb.utils.hexStringToHash64=function(a){a=a.toLowerCase();goog.asserts.assert(18==a.length);goog.asserts.assert("0"==a[0]);goog.asserts.assert("x"==a[1]);for(var b="",c=0;8>c;c++){var d=jspb.utils.fromHexCharCode_(a.charCodeAt(2*c+2)),e=jspb.utils.fromHexCharCode_(a.charCodeAt(2*c+3));b=String.fromCharCode(16*d+e)+b}return b};
jspb.utils.hash64ToNumber=function(a,b){jspb.utils.splitHash64(a);a=jspb.utils.split64Low;var c=jspb.utils.split64High;return b?jspb.utils.joinInt64(a,c):jspb.utils.joinUint64(a,c)};jspb.utils.numberToHash64=function(a){jspb.utils.splitInt64(a);return jspb.utils.joinHash64(jspb.utils.split64Low,jspb.utils.split64High)};jspb.utils.countVarints=function(a,b,c){for(var d=0,e=b;e<c;e++)d+=a[e]>>7;return c-b-d};
jspb.utils.countVarintFields=function(a,b,c,d){var e=0;d=8*d+jspb.BinaryConstants.WireType.VARINT;if(128>d)for(;b<c&&a[b++]==d;)for(e++;;){var f=a[b++];if(0==(f&128))break}else for(;b<c;){for(f=d;128<f;){if(a[b]!=(f&127|128))return e;b++;f>>=7}if(a[b++]!=f)break;for(e++;f=a[b++],0!=(f&128););}return e};jspb.utils.countFixedFields_=function(a,b,c,d,e){var f=0;if(128>d)for(;b<c&&a[b++]==d;)f++,b+=e;else for(;b<c;){for(var g=d;128<g;){if(a[b++]!=(g&127|128))return f;g>>=7}if(a[b++]!=g)break;f++;b+=e}return f};
jspb.utils.countFixed32Fields=function(a,b,c,d){return jspb.utils.countFixedFields_(a,b,c,8*d+jspb.BinaryConstants.WireType.FIXED32,4)};jspb.utils.countFixed64Fields=function(a,b,c,d){return jspb.utils.countFixedFields_(a,b,c,8*d+jspb.BinaryConstants.WireType.FIXED64,8)};
jspb.utils.countDelimitedFields=function(a,b,c,d){var e=0;for(d=8*d+jspb.BinaryConstants.WireType.DELIMITED;b<c;){for(var f=d;128<f;){if(a[b++]!=(f&127|128))return e;f>>=7}if(a[b++]!=f)break;e++;for(var g=0,h=1;f=a[b++],g+=(f&127)*h,h*=128,0!=(f&128););b+=g}return e};jspb.utils.debugBytesToTextFormat=function(a){var b='"';if(a){a=jspb.utils.byteSourceToUint8Array(a);for(var c=0;c<a.length;c++)b+="\\x",16>a[c]&&(b+="0"),b+=a[c].toString(16)}return b+'"'};
jspb.utils.debugScalarToTextFormat=function(a){return"string"===typeof a?goog.string.quote(a):a.toString()};jspb.utils.stringToByteArray=function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);if(255<d)throw Error("Conversion error: string contains codepoint outside of byte range");b[c]=d}return b};
jspb.utils.byteSourceToUint8Array=function(a){if(a.constructor===Uint8Array)return a;if(a.constructor===ArrayBuffer||"undefined"!=typeof Buffer&&a.constructor===Buffer||a.constructor===Array)return new Uint8Array(a);if(a.constructor===String)return goog.crypt.base64.decodeStringToUint8Array(a);goog.asserts.fail("Type not convertible to Uint8Array.");return new Uint8Array(0)};jspb.BinaryDecoder=function(a,b,c){this.bytes_=null;this.cursor_=this.end_=this.start_=0;this.error_=!1;a&&this.setBlock(a,b,c)};jspb.BinaryDecoder.instanceCache_=[];jspb.BinaryDecoder.alloc=function(a,b,c){if(jspb.BinaryDecoder.instanceCache_.length){var d=jspb.BinaryDecoder.instanceCache_.pop();a&&d.setBlock(a,b,c);return d}return new jspb.BinaryDecoder(a,b,c)};jspb.BinaryDecoder.prototype.free=function(){this.clear();100>jspb.BinaryDecoder.instanceCache_.length&&jspb.BinaryDecoder.instanceCache_.push(this)};
jspb.BinaryDecoder.prototype.clone=function(){return jspb.BinaryDecoder.alloc(this.bytes_,this.start_,this.end_-this.start_)};jspb.BinaryDecoder.prototype.clear=function(){this.bytes_=null;this.cursor_=this.end_=this.start_=0;this.error_=!1};jspb.BinaryDecoder.prototype.getBuffer=function(){return this.bytes_};
jspb.BinaryDecoder.prototype.setBlock=function(a,b,c){this.bytes_=jspb.utils.byteSourceToUint8Array(a);this.start_=void 0!==b?b:0;this.end_=void 0!==c?this.start_+c:this.bytes_.length;this.cursor_=this.start_};jspb.BinaryDecoder.prototype.getEnd=function(){return this.end_};jspb.BinaryDecoder.prototype.setEnd=function(a){this.end_=a};jspb.BinaryDecoder.prototype.reset=function(){this.cursor_=this.start_};jspb.BinaryDecoder.prototype.getCursor=function(){return this.cursor_};
jspb.BinaryDecoder.prototype.setCursor=function(a){this.cursor_=a};jspb.BinaryDecoder.prototype.advance=function(a){this.cursor_+=a;goog.asserts.assert(this.cursor_<=this.end_)};jspb.BinaryDecoder.prototype.atEnd=function(){return this.cursor_==this.end_};jspb.BinaryDecoder.prototype.pastEnd=function(){return this.cursor_>this.end_};jspb.BinaryDecoder.prototype.getError=function(){return this.error_||0>this.cursor_||this.cursor_>this.end_};
jspb.BinaryDecoder.prototype.readSplitVarint64=function(a){for(var b=128,c=0,d=0,e=0;4>e&&128<=b;e++)b=this.bytes_[this.cursor_++],c|=(b&127)<<7*e;128<=b&&(b=this.bytes_[this.cursor_++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(e=0;5>e&&128<=b;e++)b=this.bytes_[this.cursor_++],d|=(b&127)<<7*e+3;if(128>b)return a(c>>>0,d>>>0);goog.asserts.fail("Failed to read varint, encoding is invalid.");this.error_=!0};
jspb.BinaryDecoder.prototype.readSplitZigzagVarint64=function(a){return this.readSplitVarint64(function(b,c){return jspb.utils.fromZigzag64(b,c,a)})};jspb.BinaryDecoder.prototype.readSplitFixed64=function(a){var b=this.bytes_,c=this.cursor_;this.cursor_+=8;for(var d=0,e=0,f=c+7;f>=c;f--)d=d<<8|b[f],e=e<<8|b[f+4];return a(d,e)};jspb.BinaryDecoder.prototype.skipVarint=function(){for(;this.bytes_[this.cursor_]&128;)this.cursor_++;this.cursor_++};
jspb.BinaryDecoder.prototype.unskipVarint=function(a){for(;128<a;)this.cursor_--,a>>>=7;this.cursor_--};
jspb.BinaryDecoder.prototype.readUnsignedVarint32=function(){var a=this.bytes_;var b=a[this.cursor_+0];var c=b&127;if(128>b)return this.cursor_+=1,goog.asserts.assert(this.cursor_<=this.end_),c;b=a[this.cursor_+1];c|=(b&127)<<7;if(128>b)return this.cursor_+=2,goog.asserts.assert(this.cursor_<=this.end_),c;b=a[this.cursor_+2];c|=(b&127)<<14;if(128>b)return this.cursor_+=3,goog.asserts.assert(this.cursor_<=this.end_),c;b=a[this.cursor_+3];c|=(b&127)<<21;if(128>b)return this.cursor_+=4,goog.asserts.assert(this.cursor_<=
this.end_),c;b=a[this.cursor_+4];c|=(b&15)<<28;if(128>b)return this.cursor_+=5,goog.asserts.assert(this.cursor_<=this.end_),c>>>0;this.cursor_+=5;128<=a[this.cursor_++]&&128<=a[this.cursor_++]&&128<=a[this.cursor_++]&&128<=a[this.cursor_++]&&128<=a[this.cursor_++]&&goog.asserts.assert(!1);goog.asserts.assert(this.cursor_<=this.end_);return c};jspb.BinaryDecoder.prototype.readSignedVarint32=jspb.BinaryDecoder.prototype.readUnsignedVarint32;jspb.BinaryDecoder.prototype.readUnsignedVarint32String=function(){return this.readUnsignedVarint32().toString()};
jspb.BinaryDecoder.prototype.readSignedVarint32String=function(){return this.readSignedVarint32().toString()};jspb.BinaryDecoder.prototype.readZigzagVarint32=function(){var a=this.readUnsignedVarint32();return a>>>1^-(a&1)};jspb.BinaryDecoder.prototype.readUnsignedVarint64=function(){return this.readSplitVarint64(jspb.utils.joinUint64)};jspb.BinaryDecoder.prototype.readUnsignedVarint64String=function(){return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString)};
jspb.BinaryDecoder.prototype.readSignedVarint64=function(){return this.readSplitVarint64(jspb.utils.joinInt64)};jspb.BinaryDecoder.prototype.readSignedVarint64String=function(){return this.readSplitVarint64(jspb.utils.joinSignedDecimalString)};jspb.BinaryDecoder.prototype.readZigzagVarint64=function(){return this.readSplitVarint64(jspb.utils.joinZigzag64)};jspb.BinaryDecoder.prototype.readZigzagVarintHash64=function(){return this.readSplitZigzagVarint64(jspb.utils.joinHash64)};
jspb.BinaryDecoder.prototype.readZigzagVarint64String=function(){return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString)};jspb.BinaryDecoder.prototype.readUint8=function(){var a=this.bytes_[this.cursor_+0];this.cursor_+=1;goog.asserts.assert(this.cursor_<=this.end_);return a};jspb.BinaryDecoder.prototype.readUint16=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1];this.cursor_+=2;goog.asserts.assert(this.cursor_<=this.end_);return a<<0|b<<8};
jspb.BinaryDecoder.prototype.readUint32=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1],c=this.bytes_[this.cursor_+2],d=this.bytes_[this.cursor_+3];this.cursor_+=4;goog.asserts.assert(this.cursor_<=this.end_);return(a<<0|b<<8|c<<16|d<<24)>>>0};jspb.BinaryDecoder.prototype.readUint64=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinUint64(a,b)};
jspb.BinaryDecoder.prototype.readUint64String=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinUnsignedDecimalString(a,b)};jspb.BinaryDecoder.prototype.readInt8=function(){var a=this.bytes_[this.cursor_+0];this.cursor_+=1;goog.asserts.assert(this.cursor_<=this.end_);return a<<24>>24};
jspb.BinaryDecoder.prototype.readInt16=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1];this.cursor_+=2;goog.asserts.assert(this.cursor_<=this.end_);return(a<<0|b<<8)<<16>>16};jspb.BinaryDecoder.prototype.readInt32=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1],c=this.bytes_[this.cursor_+2],d=this.bytes_[this.cursor_+3];this.cursor_+=4;goog.asserts.assert(this.cursor_<=this.end_);return a<<0|b<<8|c<<16|d<<24};
jspb.BinaryDecoder.prototype.readInt64=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinInt64(a,b)};jspb.BinaryDecoder.prototype.readInt64String=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinSignedDecimalString(a,b)};jspb.BinaryDecoder.prototype.readFloat=function(){var a=this.readUint32();return jspb.utils.joinFloat32(a,0)};
jspb.BinaryDecoder.prototype.readDouble=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinFloat64(a,b)};jspb.BinaryDecoder.prototype.readBool=function(){return!!this.bytes_[this.cursor_++]};jspb.BinaryDecoder.prototype.readEnum=function(){return this.readSignedVarint32()};
jspb.BinaryDecoder.prototype.readString=function(a){var b=this.bytes_,c=this.cursor_;a=c+a;for(var d=[],e="";c<a;){var f=b[c++];if(128>f)d.push(f);else if(192>f)continue;else if(224>f){var g=b[c++];d.push((f&31)<<6|g&63)}else if(240>f){g=b[c++];var h=b[c++];d.push((f&15)<<12|(g&63)<<6|h&63)}else if(248>f){g=b[c++];h=b[c++];var k=b[c++];f=(f&7)<<18|(g&63)<<12|(h&63)<<6|k&63;f-=65536;d.push((f>>10&1023)+55296,(f&1023)+56320)}8192<=d.length&&(e+=String.fromCharCode.apply(null,d),d.length=0)}e+=goog.crypt.byteArrayToString(d);
this.cursor_=c;return e};jspb.BinaryDecoder.prototype.readStringWithLength=function(){var a=this.readUnsignedVarint32();return this.readString(a)};jspb.BinaryDecoder.prototype.readBytes=function(a){if(0>a||this.cursor_+a>this.bytes_.length)return this.error_=!0,goog.asserts.fail("Invalid byte length!"),new Uint8Array(0);var b=this.bytes_.subarray(this.cursor_,this.cursor_+a);this.cursor_+=a;goog.asserts.assert(this.cursor_<=this.end_);return b};jspb.BinaryDecoder.prototype.readVarintHash64=function(){return this.readSplitVarint64(jspb.utils.joinHash64)};
jspb.BinaryDecoder.prototype.readFixedHash64=function(){var a=this.bytes_,b=this.cursor_,c=a[b+0],d=a[b+1],e=a[b+2],f=a[b+3],g=a[b+4],h=a[b+5],k=a[b+6];a=a[b+7];this.cursor_+=8;return String.fromCharCode(c,d,e,f,g,h,k,a)};jspb.BinaryReader=function(a,b,c){this.decoder_=jspb.BinaryDecoder.alloc(a,b,c);this.fieldCursor_=this.decoder_.getCursor();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID;this.error_=!1;this.readCallbacks_=null};jspb.BinaryReader.instanceCache_=[];
jspb.BinaryReader.alloc=function(a,b,c){if(jspb.BinaryReader.instanceCache_.length){var d=jspb.BinaryReader.instanceCache_.pop();a&&d.decoder_.setBlock(a,b,c);return d}return new jspb.BinaryReader(a,b,c)};jspb.BinaryReader.prototype.alloc=jspb.BinaryReader.alloc;
jspb.BinaryReader.prototype.free=function(){this.decoder_.clear();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID;this.error_=!1;this.readCallbacks_=null;100>jspb.BinaryReader.instanceCache_.length&&jspb.BinaryReader.instanceCache_.push(this)};jspb.BinaryReader.prototype.getFieldCursor=function(){return this.fieldCursor_};jspb.BinaryReader.prototype.getCursor=function(){return this.decoder_.getCursor()};
jspb.BinaryReader.prototype.getBuffer=function(){return this.decoder_.getBuffer()};jspb.BinaryReader.prototype.getFieldNumber=function(){return this.nextField_};jspb.BinaryReader.prototype.getWireType=function(){return this.nextWireType_};jspb.BinaryReader.prototype.isDelimited=function(){return this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED};jspb.BinaryReader.prototype.isEndGroup=function(){return this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP};
jspb.BinaryReader.prototype.getError=function(){return this.error_||this.decoder_.getError()};jspb.BinaryReader.prototype.setBlock=function(a,b,c){this.decoder_.setBlock(a,b,c);this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID};jspb.BinaryReader.prototype.reset=function(){this.decoder_.reset();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID};
jspb.BinaryReader.prototype.advance=function(a){this.decoder_.advance(a)};
jspb.BinaryReader.prototype.nextField=function(){if(this.decoder_.atEnd())return!1;if(this.getError())return goog.asserts.fail("Decoder hit an error"),!1;this.fieldCursor_=this.decoder_.getCursor();var a=this.decoder_.readUnsignedVarint32(),b=a>>>3;a&=7;if(a!=jspb.BinaryConstants.WireType.VARINT&&a!=jspb.BinaryConstants.WireType.FIXED32&&a!=jspb.BinaryConstants.WireType.FIXED64&&a!=jspb.BinaryConstants.WireType.DELIMITED&&a!=jspb.BinaryConstants.WireType.START_GROUP&&a!=jspb.BinaryConstants.WireType.END_GROUP)return goog.asserts.fail("Invalid wire type: %s (at position %s)",
a,this.fieldCursor_),this.error_=!0,!1;this.nextField_=b;this.nextWireType_=a;return!0};jspb.BinaryReader.prototype.unskipHeader=function(){this.decoder_.unskipVarint(this.nextField_<<3|this.nextWireType_)};jspb.BinaryReader.prototype.skipMatchingFields=function(){var a=this.nextField_;for(this.unskipHeader();this.nextField()&&this.getFieldNumber()==a;)this.skipField();this.decoder_.atEnd()||this.unskipHeader()};
jspb.BinaryReader.prototype.skipVarintField=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.VARINT?(goog.asserts.fail("Invalid wire type for skipVarintField"),this.skipField()):this.decoder_.skipVarint()};jspb.BinaryReader.prototype.skipDelimitedField=function(){if(this.nextWireType_!=jspb.BinaryConstants.WireType.DELIMITED)goog.asserts.fail("Invalid wire type for skipDelimitedField"),this.skipField();else{var a=this.decoder_.readUnsignedVarint32();this.decoder_.advance(a)}};
jspb.BinaryReader.prototype.skipFixed32Field=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.FIXED32?(goog.asserts.fail("Invalid wire type for skipFixed32Field"),this.skipField()):this.decoder_.advance(4)};jspb.BinaryReader.prototype.skipFixed64Field=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.FIXED64?(goog.asserts.fail("Invalid wire type for skipFixed64Field"),this.skipField()):this.decoder_.advance(8)};
jspb.BinaryReader.prototype.skipGroup=function(){var a=this.nextField_;do{if(!this.nextField()){goog.asserts.fail("Unmatched start-group tag: stream EOF");this.error_=!0;break}if(this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP){this.nextField_!=a&&(goog.asserts.fail("Unmatched end-group tag"),this.error_=!0);break}this.skipField()}while(1)};
jspb.BinaryReader.prototype.skipField=function(){switch(this.nextWireType_){case jspb.BinaryConstants.WireType.VARINT:this.skipVarintField();break;case jspb.BinaryConstants.WireType.FIXED64:this.skipFixed64Field();break;case jspb.BinaryConstants.WireType.DELIMITED:this.skipDelimitedField();break;case jspb.BinaryConstants.WireType.FIXED32:this.skipFixed32Field();break;case jspb.BinaryConstants.WireType.START_GROUP:this.skipGroup();break;default:goog.asserts.fail("Invalid wire encoding for field.")}};
jspb.BinaryReader.prototype.registerReadCallback=function(a,b){null===this.readCallbacks_&&(this.readCallbacks_={});goog.asserts.assert(!this.readCallbacks_[a]);this.readCallbacks_[a]=b};jspb.BinaryReader.prototype.runReadCallback=function(a){goog.asserts.assert(null!==this.readCallbacks_);a=this.readCallbacks_[a];goog.asserts.assert(a);return a(this)};
jspb.BinaryReader.prototype.readAny=function(a){this.nextWireType_=jspb.BinaryConstants.FieldTypeToWireType(a);var b=jspb.BinaryConstants.FieldType;switch(a){case b.DOUBLE:return this.readDouble();case b.FLOAT:return this.readFloat();case b.INT64:return this.readInt64();case b.UINT64:return this.readUint64();case b.INT32:return this.readInt32();case b.FIXED64:return this.readFixed64();case b.FIXED32:return this.readFixed32();case b.BOOL:return this.readBool();case b.STRING:return this.readString();
case b.GROUP:goog.asserts.fail("Group field type not supported in readAny()");case b.MESSAGE:goog.asserts.fail("Message field type not supported in readAny()");case b.BYTES:return this.readBytes();case b.UINT32:return this.readUint32();case b.ENUM:return this.readEnum();case b.SFIXED32:return this.readSfixed32();case b.SFIXED64:return this.readSfixed64();case b.SINT32:return this.readSint32();case b.SINT64:return this.readSint64();case b.FHASH64:return this.readFixedHash64();case b.VHASH64:return this.readVarintHash64();
default:goog.asserts.fail("Invalid field type in readAny()")}return 0};jspb.BinaryReader.prototype.readMessage=function(a,b){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var c=this.decoder_.getEnd(),d=this.decoder_.readUnsignedVarint32();d=this.decoder_.getCursor()+d;this.decoder_.setEnd(d);b(a,this);this.decoder_.setCursor(d);this.decoder_.setEnd(c)};
jspb.BinaryReader.prototype.readGroup=function(a,b,c){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.START_GROUP);goog.asserts.assert(this.nextField_==a);c(b,this);this.error_||this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP||(goog.asserts.fail("Group submessage did not end with an END_GROUP tag"),this.error_=!0)};
jspb.BinaryReader.prototype.getFieldDecoder=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32(),b=this.decoder_.getCursor(),c=b+a;a=jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(),b,a);this.decoder_.setCursor(c);return a};jspb.BinaryReader.prototype.readInt32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint32()};
jspb.BinaryReader.prototype.readInt32String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint32String()};jspb.BinaryReader.prototype.readInt64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64()};jspb.BinaryReader.prototype.readInt64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64String()};
jspb.BinaryReader.prototype.readUint32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint32()};jspb.BinaryReader.prototype.readUint32String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint32String()};jspb.BinaryReader.prototype.readUint64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint64()};
jspb.BinaryReader.prototype.readUint64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint64String()};jspb.BinaryReader.prototype.readSint32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint32()};jspb.BinaryReader.prototype.readSint64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint64()};
jspb.BinaryReader.prototype.readSint64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint64String()};jspb.BinaryReader.prototype.readFixed32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readUint32()};jspb.BinaryReader.prototype.readFixed64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readUint64()};
jspb.BinaryReader.prototype.readFixed64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readUint64String()};jspb.BinaryReader.prototype.readSfixed32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readInt32()};jspb.BinaryReader.prototype.readSfixed32String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readInt32().toString()};
jspb.BinaryReader.prototype.readSfixed64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readInt64()};jspb.BinaryReader.prototype.readSfixed64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readInt64String()};jspb.BinaryReader.prototype.readFloat=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readFloat()};
jspb.BinaryReader.prototype.readDouble=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readDouble()};jspb.BinaryReader.prototype.readBool=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return!!this.decoder_.readUnsignedVarint32()};jspb.BinaryReader.prototype.readEnum=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64()};
jspb.BinaryReader.prototype.readString=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32();return this.decoder_.readString(a)};jspb.BinaryReader.prototype.readBytes=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32();return this.decoder_.readBytes(a)};
jspb.BinaryReader.prototype.readVarintHash64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readVarintHash64()};jspb.BinaryReader.prototype.readSintHash64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarintHash64()};jspb.BinaryReader.prototype.readSplitVarint64=function(a){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSplitVarint64(a)};
jspb.BinaryReader.prototype.readSplitZigzagVarint64=function(a){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSplitVarint64(function(b,c){return jspb.utils.fromZigzag64(b,c,a)})};jspb.BinaryReader.prototype.readFixedHash64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readFixedHash64()};
jspb.BinaryReader.prototype.readSplitFixed64=function(a){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readSplitFixed64(a)};jspb.BinaryReader.prototype.readPackedField_=function(a){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var b=this.decoder_.readUnsignedVarint32();b=this.decoder_.getCursor()+b;for(var c=[];this.decoder_.getCursor()<b;)c.push(a.call(this.decoder_));return c};
jspb.BinaryReader.prototype.readPackedInt32=function(){return this.readPackedField_(this.decoder_.readSignedVarint32)};jspb.BinaryReader.prototype.readPackedInt32String=function(){return this.readPackedField_(this.decoder_.readSignedVarint32String)};jspb.BinaryReader.prototype.readPackedInt64=function(){return this.readPackedField_(this.decoder_.readSignedVarint64)};jspb.BinaryReader.prototype.readPackedInt64String=function(){return this.readPackedField_(this.decoder_.readSignedVarint64String)};
jspb.BinaryReader.prototype.readPackedUint32=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint32)};jspb.BinaryReader.prototype.readPackedUint32String=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint32String)};jspb.BinaryReader.prototype.readPackedUint64=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint64)};jspb.BinaryReader.prototype.readPackedUint64String=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint64String)};
jspb.BinaryReader.prototype.readPackedSint32=function(){return this.readPackedField_(this.decoder_.readZigzagVarint32)};jspb.BinaryReader.prototype.readPackedSint64=function(){return this.readPackedField_(this.decoder_.readZigzagVarint64)};jspb.BinaryReader.prototype.readPackedSint64String=function(){return this.readPackedField_(this.decoder_.readZigzagVarint64String)};jspb.BinaryReader.prototype.readPackedFixed32=function(){return this.readPackedField_(this.decoder_.readUint32)};
jspb.BinaryReader.prototype.readPackedFixed64=function(){return this.readPackedField_(this.decoder_.readUint64)};jspb.BinaryReader.prototype.readPackedFixed64String=function(){return this.readPackedField_(this.decoder_.readUint64String)};jspb.BinaryReader.prototype.readPackedSfixed32=function(){return this.readPackedField_(this.decoder_.readInt32)};jspb.BinaryReader.prototype.readPackedSfixed64=function(){return this.readPackedField_(this.decoder_.readInt64)};
jspb.BinaryReader.prototype.readPackedSfixed64String=function(){return this.readPackedField_(this.decoder_.readInt64String)};jspb.BinaryReader.prototype.readPackedFloat=function(){return this.readPackedField_(this.decoder_.readFloat)};jspb.BinaryReader.prototype.readPackedDouble=function(){return this.readPackedField_(this.decoder_.readDouble)};jspb.BinaryReader.prototype.readPackedBool=function(){return this.readPackedField_(this.decoder_.readBool)};jspb.BinaryReader.prototype.readPackedEnum=function(){return this.readPackedField_(this.decoder_.readEnum)};
jspb.BinaryReader.prototype.readPackedVarintHash64=function(){return this.readPackedField_(this.decoder_.readVarintHash64)};jspb.BinaryReader.prototype.readPackedFixedHash64=function(){return this.readPackedField_(this.decoder_.readFixedHash64)};jspb.BinaryEncoder=function(){this.buffer_=[]};jspb.BinaryEncoder.prototype.length=function(){return this.buffer_.length};jspb.BinaryEncoder.prototype.end=function(){var a=this.buffer_;this.buffer_=[];return a};
jspb.BinaryEncoder.prototype.writeSplitVarint64=function(a,b){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(b==Math.floor(b));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);for(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32);0<b||127<a;)this.buffer_.push(a&127|128),a=(a>>>7|b<<25)>>>0,b>>>=7;this.buffer_.push(a)};
jspb.BinaryEncoder.prototype.writeSplitFixed64=function(a,b){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(b==Math.floor(b));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32);this.writeUint32(a);this.writeUint32(b)};
jspb.BinaryEncoder.prototype.writeUnsignedVarint32=function(a){goog.asserts.assert(a==Math.floor(a));for(goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);127<a;)this.buffer_.push(a&127|128),a>>>=7;this.buffer_.push(a)};
jspb.BinaryEncoder.prototype.writeSignedVarint32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);if(0<=a)this.writeUnsignedVarint32(a);else{for(var b=0;9>b;b++)this.buffer_.push(a&127|128),a>>=7;this.buffer_.push(1)}};
jspb.BinaryEncoder.prototype.writeUnsignedVarint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_64);jspb.utils.splitInt64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeSignedVarint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitInt64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeZigzagVarint32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.writeUnsignedVarint32((a<<1^a>>31)>>>0)};jspb.BinaryEncoder.prototype.writeZigzagVarint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitZigzag64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeZigzagVarint64String=function(a){this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(a))};jspb.BinaryEncoder.prototype.writeZigzagVarintHash64=function(a){var b=this;jspb.utils.splitHash64(a);jspb.utils.toZigzag64(jspb.utils.split64Low,jspb.utils.split64High,function(a,d){b.writeSplitVarint64(a>>>0,d>>>0)})};
jspb.BinaryEncoder.prototype.writeUint8=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&256>a);this.buffer_.push(a>>>0&255)};jspb.BinaryEncoder.prototype.writeUint16=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&65536>a);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255)};
jspb.BinaryEncoder.prototype.writeUint32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255);this.buffer_.push(a>>>16&255);this.buffer_.push(a>>>24&255)};jspb.BinaryEncoder.prototype.writeUint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_64);jspb.utils.splitUint64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeInt8=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(-128<=a&&128>a);this.buffer_.push(a>>>0&255)};jspb.BinaryEncoder.prototype.writeInt16=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(-32768<=a&&32768>a);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255)};
jspb.BinaryEncoder.prototype.writeInt32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255);this.buffer_.push(a>>>16&255);this.buffer_.push(a>>>24&255)};
jspb.BinaryEncoder.prototype.writeInt64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitInt64(a);this.writeSplitFixed64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeInt64String=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(+a>=-jspb.BinaryConstants.TWO_TO_63&&+a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a));this.writeSplitFixed64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeFloat=function(a){goog.asserts.assert(Infinity===a||-Infinity===a||isNaN(a)||a>=-jspb.BinaryConstants.FLOAT32_MAX&&a<=jspb.BinaryConstants.FLOAT32_MAX);jspb.utils.splitFloat32(a);this.writeUint32(jspb.utils.split64Low)};
jspb.BinaryEncoder.prototype.writeDouble=function(a){goog.asserts.assert(Infinity===a||-Infinity===a||isNaN(a)||a>=-jspb.BinaryConstants.FLOAT64_MAX&&a<=jspb.BinaryConstants.FLOAT64_MAX);jspb.utils.splitFloat64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};jspb.BinaryEncoder.prototype.writeBool=function(a){goog.asserts.assert("boolean"===typeof a||"number"===typeof a);this.buffer_.push(a?1:0)};
jspb.BinaryEncoder.prototype.writeEnum=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.writeSignedVarint32(a)};jspb.BinaryEncoder.prototype.writeBytes=function(a){this.buffer_.push.apply(this.buffer_,a)};jspb.BinaryEncoder.prototype.writeVarintHash64=function(a){jspb.utils.splitHash64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeFixedHash64=function(a){jspb.utils.splitHash64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeString=function(a){for(var b=this.buffer_.length,c=0;c<a.length;c++){var d=a.charCodeAt(c);if(128>d)this.buffer_.push(d);else if(2048>d)this.buffer_.push(d>>6|192),this.buffer_.push(d&63|128);else if(65536>d)if(55296<=d&&56319>=d&&c+1<a.length){var e=a.charCodeAt(c+1);56320<=e&&57343>=e&&(d=1024*(d-55296)+e-56320+65536,this.buffer_.push(d>>18|240),this.buffer_.push(d>>12&63|128),this.buffer_.push(d>>6&63|128),this.buffer_.push(d&63|128),c++)}else this.buffer_.push(d>>
12|224),this.buffer_.push(d>>6&63|128),this.buffer_.push(d&63|128)}return this.buffer_.length-b};jspb.arith={};jspb.arith.UInt64=function(a,b){this.lo=a;this.hi=b};jspb.arith.UInt64.prototype.cmp=function(a){return this.hi<a.hi||this.hi==a.hi&&this.lo<a.lo?-1:this.hi==a.hi&&this.lo==a.lo?0:1};jspb.arith.UInt64.prototype.rightShift=function(){return new jspb.arith.UInt64((this.lo>>>1|(this.hi&1)<<31)>>>0,this.hi>>>1>>>0)};jspb.arith.UInt64.prototype.leftShift=function(){return new jspb.arith.UInt64(this.lo<<1>>>0,(this.hi<<1|this.lo>>>31)>>>0)};
jspb.arith.UInt64.prototype.msb=function(){return!!(this.hi&2147483648)};jspb.arith.UInt64.prototype.lsb=function(){return!!(this.lo&1)};jspb.arith.UInt64.prototype.zero=function(){return 0==this.lo&&0==this.hi};jspb.arith.UInt64.prototype.add=function(a){return new jspb.arith.UInt64((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};
jspb.arith.UInt64.prototype.sub=function(a){return new jspb.arith.UInt64((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};jspb.arith.UInt64.mul32x32=function(a,b){var c=a&65535;a>>>=16;var d=b&65535,e=b>>>16;b=c*d+65536*(c*e&65535)+65536*(a*d&65535);for(c=a*e+(c*e>>>16)+(a*d>>>16);4294967296<=b;)b-=4294967296,c+=1;return new jspb.arith.UInt64(b>>>0,c>>>0)};
jspb.arith.UInt64.prototype.mul=function(a){var b=jspb.arith.UInt64.mul32x32(this.lo,a);a=jspb.arith.UInt64.mul32x32(this.hi,a);a.hi=a.lo;a.lo=0;return b.add(a)};
jspb.arith.UInt64.prototype.div=function(a){if(0==a)return[];var b=new jspb.arith.UInt64(0,0),c=new jspb.arith.UInt64(this.lo,this.hi);a=new jspb.arith.UInt64(a,0);for(var d=new jspb.arith.UInt64(1,0);!a.msb();)a=a.leftShift(),d=d.leftShift();for(;!d.zero();)0>=a.cmp(c)&&(b=b.add(d),c=c.sub(a)),a=a.rightShift(),d=d.rightShift();return[b,c]};jspb.arith.UInt64.prototype.toString=function(){for(var a="",b=this;!b.zero();){b=b.div(10);var c=b[0];a=b[1].lo+a;b=c}""==a&&(a="0");return a};
jspb.arith.UInt64.fromString=function(a){for(var b=new jspb.arith.UInt64(0,0),c=new jspb.arith.UInt64(0,0),d=0;d<a.length;d++){if("0">a[d]||"9"<a[d])return null;var e=parseInt(a[d],10);c.lo=e;b=b.mul(10).add(c)}return b};jspb.arith.UInt64.prototype.clone=function(){return new jspb.arith.UInt64(this.lo,this.hi)};jspb.arith.Int64=function(a,b){this.lo=a;this.hi=b};
jspb.arith.Int64.prototype.add=function(a){return new jspb.arith.Int64((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};jspb.arith.Int64.prototype.sub=function(a){return new jspb.arith.Int64((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};jspb.arith.Int64.prototype.clone=function(){return new jspb.arith.Int64(this.lo,this.hi)};
jspb.arith.Int64.prototype.toString=function(){var a=0!=(this.hi&2147483648),b=new jspb.arith.UInt64(this.lo,this.hi);a&&(b=(new jspb.arith.UInt64(0,0)).sub(b));return(a?"-":"")+b.toString()};jspb.arith.Int64.fromString=function(a){var b=0<a.length&&"-"==a[0];b&&(a=a.substring(1));a=jspb.arith.UInt64.fromString(a);if(null===a)return null;b&&(a=(new jspb.arith.UInt64(0,0)).sub(a));return new jspb.arith.Int64(a.lo,a.hi)};jspb.BinaryWriter=function(){this.blocks_=[];this.totalLength_=0;this.encoder_=new jspb.BinaryEncoder;this.bookmarks_=[]};jspb.BinaryWriter.prototype.appendUint8Array_=function(a){var b=this.encoder_.end();this.blocks_.push(b);this.blocks_.push(a);this.totalLength_+=b.length+a.length};
jspb.BinaryWriter.prototype.beginDelimited_=function(a){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);a=this.encoder_.end();this.blocks_.push(a);this.totalLength_+=a.length;a.push(this.totalLength_);return a};jspb.BinaryWriter.prototype.endDelimited_=function(a){var b=a.pop();b=this.totalLength_+this.encoder_.length()-b;for(goog.asserts.assert(0<=b);127<b;)a.push(b&127|128),b>>>=7,this.totalLength_++;a.push(b);this.totalLength_++};
jspb.BinaryWriter.prototype.writeSerializedMessage=function(a,b,c){this.appendUint8Array_(a.subarray(b,c))};jspb.BinaryWriter.prototype.maybeWriteSerializedMessage=function(a,b,c){null!=a&&null!=b&&null!=c&&this.writeSerializedMessage(a,b,c)};jspb.BinaryWriter.prototype.reset=function(){this.blocks_=[];this.encoder_.end();this.totalLength_=0;this.bookmarks_=[]};
jspb.BinaryWriter.prototype.getResultBuffer=function(){goog.asserts.assert(0==this.bookmarks_.length);for(var a=new Uint8Array(this.totalLength_+this.encoder_.length()),b=this.blocks_,c=b.length,d=0,e=0;e<c;e++){var f=b[e];a.set(f,d);d+=f.length}b=this.encoder_.end();a.set(b,d);d+=b.length;goog.asserts.assert(d==a.length);this.blocks_=[a];return a};jspb.BinaryWriter.prototype.getResultBase64String=function(a){return goog.crypt.base64.encodeByteArray(this.getResultBuffer(),a)};
jspb.BinaryWriter.prototype.beginSubMessage=function(a){this.bookmarks_.push(this.beginDelimited_(a))};jspb.BinaryWriter.prototype.endSubMessage=function(){goog.asserts.assert(0<=this.bookmarks_.length);this.endDelimited_(this.bookmarks_.pop())};jspb.BinaryWriter.prototype.writeFieldHeader_=function(a,b){goog.asserts.assert(1<=a&&a==Math.floor(a));this.encoder_.writeUnsignedVarint32(8*a+b)};
jspb.BinaryWriter.prototype.writeAny=function(a,b,c){var d=jspb.BinaryConstants.FieldType;switch(a){case d.DOUBLE:this.writeDouble(b,c);break;case d.FLOAT:this.writeFloat(b,c);break;case d.INT64:this.writeInt64(b,c);break;case d.UINT64:this.writeUint64(b,c);break;case d.INT32:this.writeInt32(b,c);break;case d.FIXED64:this.writeFixed64(b,c);break;case d.FIXED32:this.writeFixed32(b,c);break;case d.BOOL:this.writeBool(b,c);break;case d.STRING:this.writeString(b,c);break;case d.GROUP:goog.asserts.fail("Group field type not supported in writeAny()");
break;case d.MESSAGE:goog.asserts.fail("Message field type not supported in writeAny()");break;case d.BYTES:this.writeBytes(b,c);break;case d.UINT32:this.writeUint32(b,c);break;case d.ENUM:this.writeEnum(b,c);break;case d.SFIXED32:this.writeSfixed32(b,c);break;case d.SFIXED64:this.writeSfixed64(b,c);break;case d.SINT32:this.writeSint32(b,c);break;case d.SINT64:this.writeSint64(b,c);break;case d.FHASH64:this.writeFixedHash64(b,c);break;case d.VHASH64:this.writeVarintHash64(b,c);break;default:goog.asserts.fail("Invalid field type in writeAny()")}};
jspb.BinaryWriter.prototype.writeUnsignedVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeUnsignedVarint32(b))};jspb.BinaryWriter.prototype.writeSignedVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(b))};jspb.BinaryWriter.prototype.writeUnsignedVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeUnsignedVarint64(b))};
jspb.BinaryWriter.prototype.writeSignedVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint64(b))};jspb.BinaryWriter.prototype.writeZigzagVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint32(b))};jspb.BinaryWriter.prototype.writeZigzagVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint64(b))};
jspb.BinaryWriter.prototype.writeZigzagVarint64String_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint64String(b))};jspb.BinaryWriter.prototype.writeZigzagVarintHash64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarintHash64(b))};
jspb.BinaryWriter.prototype.writeInt32=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeSignedVarint32_(a,b))};jspb.BinaryWriter.prototype.writeInt32String=function(a,b){null!=b&&(b=parseInt(b,10),goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeSignedVarint32_(a,b))};
jspb.BinaryWriter.prototype.writeInt64=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeSignedVarint64_(a,b))};jspb.BinaryWriter.prototype.writeInt64String=function(a,b){null!=b&&(b=jspb.arith.Int64.fromString(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSplitVarint64(b.lo,b.hi))};
jspb.BinaryWriter.prototype.writeUint32=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32),this.writeUnsignedVarint32_(a,b))};jspb.BinaryWriter.prototype.writeUint32String=function(a,b){null!=b&&(b=parseInt(b,10),goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32),this.writeUnsignedVarint32_(a,b))};jspb.BinaryWriter.prototype.writeUint64=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_64),this.writeUnsignedVarint64_(a,b))};
jspb.BinaryWriter.prototype.writeUint64String=function(a,b){null!=b&&(b=jspb.arith.UInt64.fromString(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSplitVarint64(b.lo,b.hi))};jspb.BinaryWriter.prototype.writeSint32=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeZigzagVarint32_(a,b))};
jspb.BinaryWriter.prototype.writeSint64=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeZigzagVarint64_(a,b))};jspb.BinaryWriter.prototype.writeSintHash64=function(a,b){null!=b&&this.writeZigzagVarintHash64_(a,b)};jspb.BinaryWriter.prototype.writeSint64String=function(a,b){null!=b&&this.writeZigzagVarint64String_(a,b)};
jspb.BinaryWriter.prototype.writeFixed32=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeUint32(b))};jspb.BinaryWriter.prototype.writeFixed64=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_64),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeUint64(b))};
jspb.BinaryWriter.prototype.writeFixed64String=function(a,b){null!=b&&(b=jspb.arith.UInt64.fromString(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeSplitFixed64(b.lo,b.hi))};jspb.BinaryWriter.prototype.writeSfixed32=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeInt32(b))};
jspb.BinaryWriter.prototype.writeSfixed64=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeInt64(b))};jspb.BinaryWriter.prototype.writeSfixed64String=function(a,b){null!=b&&(b=jspb.arith.Int64.fromString(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeSplitFixed64(b.lo,b.hi))};
jspb.BinaryWriter.prototype.writeFloat=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeFloat(b))};jspb.BinaryWriter.prototype.writeDouble=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeDouble(b))};
jspb.BinaryWriter.prototype.writeBool=function(a,b){null!=b&&(goog.asserts.assert("boolean"===typeof b||"number"===typeof b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeBool(b))};jspb.BinaryWriter.prototype.writeEnum=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(b))};
jspb.BinaryWriter.prototype.writeString=function(a,b){null!=b&&(a=this.beginDelimited_(a),this.encoder_.writeString(b),this.endDelimited_(a))};jspb.BinaryWriter.prototype.writeBytes=function(a,b){null!=b&&(b=jspb.utils.byteSourceToUint8Array(b),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(b.length),this.appendUint8Array_(b))};jspb.BinaryWriter.prototype.writeMessage=function(a,b,c){null!=b&&(a=this.beginDelimited_(a),c(b,this),this.endDelimited_(a))};
jspb.BinaryWriter.prototype.writeMessageSet=function(a,b,c){null!=b&&(this.writeFieldHeader_(1,jspb.BinaryConstants.WireType.START_GROUP),this.writeFieldHeader_(2,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(a),a=this.beginDelimited_(3),c(b,this),this.endDelimited_(a),this.writeFieldHeader_(1,jspb.BinaryConstants.WireType.END_GROUP))};
jspb.BinaryWriter.prototype.writeGroup=function(a,b,c){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.START_GROUP),c(b,this),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.END_GROUP))};jspb.BinaryWriter.prototype.writeFixedHash64=function(a,b){null!=b&&(goog.asserts.assert(8==b.length),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeFixedHash64(b))};
jspb.BinaryWriter.prototype.writeVarintHash64=function(a,b){null!=b&&(goog.asserts.assert(8==b.length),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeVarintHash64(b))};jspb.BinaryWriter.prototype.writeSplitFixed64=function(a,b,c){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64);this.encoder_.writeSplitFixed64(b,c)};
jspb.BinaryWriter.prototype.writeSplitVarint64=function(a,b,c){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT);this.encoder_.writeSplitVarint64(b,c)};jspb.BinaryWriter.prototype.writeSplitZigzagVarint64=function(a,b,c){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT);var d=this.encoder_;jspb.utils.toZigzag64(b,c,function(a,b){d.writeSplitVarint64(a>>>0,b>>>0)})};
jspb.BinaryWriter.prototype.writeRepeatedInt32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSignedVarint32_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedInt32String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeInt32String(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedInt64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSignedVarint64_(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64=function(a,b,c,d){if(null!=b)for(var e=0;e<b.length;e++)this.writeSplitFixed64(a,c(b[e]),d(b[e]))};jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64=function(a,b,c,d){if(null!=b)for(var e=0;e<b.length;e++)this.writeSplitVarint64(a,c(b[e]),d(b[e]))};jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64=function(a,b,c,d){if(null!=b)for(var e=0;e<b.length;e++)this.writeSplitZigzagVarint64(a,c(b[e]),d(b[e]))};
jspb.BinaryWriter.prototype.writeRepeatedInt64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeInt64String(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedUint32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUnsignedVarint32_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedUint32String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUint32String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedUint64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUnsignedVarint64_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedUint64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUint64String(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSint32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint32_(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedSint64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint64_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSint64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint64String_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSintHash64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarintHash64_(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedFixed32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed32(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedFixed64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed64(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedFixed64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed64String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedSfixed32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed32(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSfixed64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed64(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSfixed64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed64String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedFloat=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFloat(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedDouble=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeDouble(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedBool=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeBool(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedEnum=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeEnum(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedString=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeString(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedBytes=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeBytes(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedMessage=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++){var e=this.beginDelimited_(a);c(b[d],this);this.endDelimited_(e)}};
jspb.BinaryWriter.prototype.writeRepeatedGroup=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++)this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.START_GROUP),c(b[d],this),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.END_GROUP)};jspb.BinaryWriter.prototype.writeRepeatedFixedHash64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixedHash64(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedVarintHash64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeVarintHash64(a,b[c])};jspb.BinaryWriter.prototype.writePackedInt32=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeSignedVarint32(b[c]);this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedInt32String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeSignedVarint32(parseInt(b[c],10));this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedInt64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeSignedVarint64(b[c]);this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedSplitFixed64=function(a,b,c,d){if(null!=b){a=this.beginDelimited_(a);for(var e=0;e<b.length;e++)this.encoder_.writeSplitFixed64(c(b[e]),d(b[e]));this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedSplitVarint64=function(a,b,c,d){if(null!=b){a=this.beginDelimited_(a);for(var e=0;e<b.length;e++)this.encoder_.writeSplitVarint64(c(b[e]),d(b[e]));this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64=function(a,b,c,d){if(null!=b){a=this.beginDelimited_(a);for(var e=this.encoder_,f=0;f<b.length;f++)jspb.utils.toZigzag64(c(b[f]),d(b[f]),function(a,b){e.writeSplitVarint64(a>>>0,b>>>0)});this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedInt64String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++){var d=jspb.arith.Int64.fromString(b[c]);this.encoder_.writeSplitVarint64(d.lo,d.hi)}this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedUint32=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeUnsignedVarint32(b[c]);this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedUint32String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeUnsignedVarint32(parseInt(b[c],10));this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedUint64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeUnsignedVarint64(b[c]);this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedUint64String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++){var d=jspb.arith.UInt64.fromString(b[c]);this.encoder_.writeSplitVarint64(d.lo,d.hi)}this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedSint32=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeZigzagVarint32(b[c]);this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedSint64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeZigzagVarint64(b[c]);this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedSint64String=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(b[c]));this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedSintHash64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeZigzagVarintHash64(b[c]);this.endDelimited_(a)}};
jspb.BinaryWriter.prototype.writePackedFixed32=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(4*b.length),a=0;a<b.length;a++)this.encoder_.writeUint32(b[a])};jspb.BinaryWriter.prototype.writePackedFixed64=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeUint64(b[a])};
jspb.BinaryWriter.prototype.writePackedFixed64String=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++){var c=jspb.arith.UInt64.fromString(b[a]);this.encoder_.writeSplitFixed64(c.lo,c.hi)}};
jspb.BinaryWriter.prototype.writePackedSfixed32=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(4*b.length),a=0;a<b.length;a++)this.encoder_.writeInt32(b[a])};jspb.BinaryWriter.prototype.writePackedSfixed64=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeInt64(b[a])};
jspb.BinaryWriter.prototype.writePackedSfixed64String=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeInt64String(b[a])};jspb.BinaryWriter.prototype.writePackedFloat=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(4*b.length),a=0;a<b.length;a++)this.encoder_.writeFloat(b[a])};
jspb.BinaryWriter.prototype.writePackedDouble=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeDouble(b[a])};jspb.BinaryWriter.prototype.writePackedBool=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(b.length),a=0;a<b.length;a++)this.encoder_.writeBool(b[a])};
jspb.BinaryWriter.prototype.writePackedEnum=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeEnum(b[c]);this.endDelimited_(a)}};jspb.BinaryWriter.prototype.writePackedFixedHash64=function(a,b){if(null!=b&&b.length)for(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*b.length),a=0;a<b.length;a++)this.encoder_.writeFixedHash64(b[a])};
jspb.BinaryWriter.prototype.writePackedVarintHash64=function(a,b){if(null!=b&&b.length){a=this.beginDelimited_(a);for(var c=0;c<b.length;c++)this.encoder_.writeVarintHash64(b[c]);this.endDelimited_(a)}};jspb.Map=function(a,b){this.arr_=a;this.valueCtor_=b;this.map_={};this.arrClean=!0;0<this.arr_.length&&this.loadFromArray_()};jspb.Map.prototype.loadFromArray_=function(){for(var a=0;a<this.arr_.length;a++){var b=this.arr_[a],c=b[0];this.map_[c.toString()]=new jspb.Map.Entry_(c,b[1])}this.arrClean=!0};
jspb.Map.prototype.toArray=function(){if(this.arrClean){if(this.valueCtor_){var a=this.map_,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].valueWrapper;c&&c.toArray()}}}else{this.arr_.length=0;a=this.stringKeys_();a.sort();for(b=0;b<a.length;b++){var d=this.map_[a[b]];(c=d.valueWrapper)&&c.toArray();this.arr_.push([d.key,d.value])}this.arrClean=!0}return this.arr_};
jspb.Map.prototype.toObject=function(a,b){for(var c=this.toArray(),d=[],e=0;e<c.length;e++){var f=this.map_[c[e][0].toString()];this.wrapEntry_(f);var g=f.valueWrapper;g?(goog.asserts.assert(b),d.push([f.key,b(a,g)])):d.push([f.key,f.value])}return d};jspb.Map.fromObject=function(a,b,c){b=new jspb.Map([],b);for(var d=0;d<a.length;d++){var e=a[d][0],f=c(a[d][1]);b.set(e,f)}return b};jspb.Map.ArrayIteratorIterable_=function(a){this.idx_=0;this.arr_=a};
jspb.Map.ArrayIteratorIterable_.prototype.next=function(){return this.idx_<this.arr_.length?{done:!1,value:this.arr_[this.idx_++]}:{done:!0,value:void 0}};"undefined"!=typeof Symbol&&(jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator]=function(){return this});jspb.Map.prototype.getLength=function(){return this.stringKeys_().length};jspb.Map.prototype.clear=function(){this.map_={};this.arrClean=!1};
jspb.Map.prototype.del=function(a){a=a.toString();var b=this.map_.hasOwnProperty(a);delete this.map_[a];this.arrClean=!1;return b};jspb.Map.prototype.getEntryList=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++){var d=this.map_[b[c]];a.push([d.key,d.value])}return a};jspb.Map.prototype.entries=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++){var d=this.map_[b[c]];a.push([d.key,this.wrapEntry_(d)])}return new jspb.Map.ArrayIteratorIterable_(a)};
jspb.Map.prototype.keys=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++)a.push(this.map_[b[c]].key);return new jspb.Map.ArrayIteratorIterable_(a)};jspb.Map.prototype.values=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++)a.push(this.wrapEntry_(this.map_[b[c]]));return new jspb.Map.ArrayIteratorIterable_(a)};
jspb.Map.prototype.forEach=function(a,b){var c=this.stringKeys_();c.sort();for(var d=0;d<c.length;d++){var e=this.map_[c[d]];a.call(b,this.wrapEntry_(e),e.key,this)}};jspb.Map.prototype.set=function(a,b){var c=new jspb.Map.Entry_(a);this.valueCtor_?(c.valueWrapper=b,c.value=b.toArray()):c.value=b;this.map_[a.toString()]=c;this.arrClean=!1;return this};jspb.Map.prototype.wrapEntry_=function(a){return this.valueCtor_?(a.valueWrapper||(a.valueWrapper=new this.valueCtor_(a.value)),a.valueWrapper):a.value};
jspb.Map.prototype.get=function(a){if(a=this.map_[a.toString()])return this.wrapEntry_(a)};jspb.Map.prototype.has=function(a){return a.toString()in this.map_};jspb.Map.prototype.serializeBinary=function(a,b,c,d,e){var f=this.stringKeys_();f.sort();for(var g=0;g<f.length;g++){var h=this.map_[f[g]];b.beginSubMessage(a);c.call(b,1,h.key);this.valueCtor_?d.call(b,2,this.wrapEntry_(h),e):d.call(b,2,h.value);b.endSubMessage()}};
jspb.Map.deserializeBinary=function(a,b,c,d,e,f,g){for(;b.nextField()&&!b.isEndGroup();){var h=b.getFieldNumber();1==h?f=c.call(b):2==h&&(a.valueCtor_?(goog.asserts.assert(e),g||(g=new a.valueCtor_),d.call(b,g,e)):g=d.call(b))}goog.asserts.assert(void 0!=f);goog.asserts.assert(void 0!=g);a.set(f,g)};jspb.Map.prototype.stringKeys_=function(){var a=this.map_,b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b};
jspb.Map.Entry_=function(a,b){this.key=a;this.value=b;this.valueWrapper=void 0};jspb.ExtensionFieldInfo=function(a,b,c,d,e){this.fieldIndex=a;this.fieldName=b;this.ctor=c;this.toObjectFn=d;this.isRepeated=e};jspb.ExtensionFieldBinaryInfo=function(a,b,c,d,e,f){this.fieldInfo=a;this.binaryReaderFn=b;this.binaryWriterFn=c;this.binaryMessageSerializeFn=d;this.binaryMessageDeserializeFn=e;this.isPacked=f};jspb.ExtensionFieldInfo.prototype.isMessageType=function(){return!!this.ctor};jspb.Message=function(){};jspb.Message.GENERATE_TO_OBJECT=!0;jspb.Message.GENERATE_FROM_OBJECT=!goog.DISALLOW_TEST_ONLY_CODE;
jspb.Message.GENERATE_TO_STRING=!0;jspb.Message.ASSUME_LOCAL_ARRAYS=!1;jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS=!0;jspb.Message.SUPPORTS_UINT8ARRAY_="function"==typeof Uint8Array;jspb.Message.prototype.getJsPbMessageId=function(){return this.messageId_};jspb.Message.getIndex_=function(a,b){return b+a.arrayIndexOffset_};jspb.Message.hiddenES6Property_=function(){};jspb.Message.getFieldNumber_=function(a,b){return b-a.arrayIndexOffset_};
jspb.Message.initialize=function(a,b,c,d,e,f){a.wrappers_=null;b||(b=c?[c]:[]);a.messageId_=c?String(c):void 0;a.arrayIndexOffset_=0===c?-1:0;a.array=b;jspb.Message.initPivotAndExtensionObject_(a,d);a.convertedPrimitiveFields_={};jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS||(a.repeatedFields=e);if(e)for(b=0;b<e.length;b++)c=e[b],c<a.pivot_?(c=jspb.Message.getIndex_(a,c),a.array[c]=a.array[c]||jspb.Message.EMPTY_LIST_SENTINEL_):(jspb.Message.maybeInitEmptyExtensionObject_(a),a.extensionObject_[c]=
a.extensionObject_[c]||jspb.Message.EMPTY_LIST_SENTINEL_);if(f&&f.length)for(b=0;b<f.length;b++)jspb.Message.computeOneofCase(a,f[b])};jspb.Message.EMPTY_LIST_SENTINEL_=goog.DEBUG&&Object.freeze?Object.freeze([]):[];jspb.Message.isArray_=function(a){return jspb.Message.ASSUME_LOCAL_ARRAYS?a instanceof Array:Array.isArray(a)};jspb.Message.isExtensionObject_=function(a){return null!==a&&"object"==typeof a&&!jspb.Message.isArray_(a)&&!(jspb.Message.SUPPORTS_UINT8ARRAY_&&a instanceof Uint8Array)};
jspb.Message.initPivotAndExtensionObject_=function(a,b){var c=a.array.length,d=-1;if(c&&(d=c-1,c=a.array[d],jspb.Message.isExtensionObject_(c))){a.pivot_=jspb.Message.getFieldNumber_(a,d);a.extensionObject_=c;return}-1<b?(a.pivot_=Math.max(b,jspb.Message.getFieldNumber_(a,d+1)),a.extensionObject_=null):a.pivot_=Number.MAX_VALUE};jspb.Message.maybeInitEmptyExtensionObject_=function(a){var b=jspb.Message.getIndex_(a,a.pivot_);a.array[b]||(a.extensionObject_=a.array[b]={})};
jspb.Message.toObjectList=function(a,b,c){for(var d=[],e=0;e<a.length;e++)d[e]=b.call(a[e],c,a[e]);return d};jspb.Message.toObjectExtension=function(a,b,c,d,e){for(var f in c){var g=c[f],h=d.call(a,g);if(null!=h){for(var k in g.fieldName)if(g.fieldName.hasOwnProperty(k))break;b[k]=g.toObjectFn?g.isRepeated?jspb.Message.toObjectList(h,g.toObjectFn,e):g.toObjectFn(e,h):h}}};
jspb.Message.serializeBinaryExtensions=function(a,b,c,d){for(var e in c){var f=c[e],g=f.fieldInfo;if(!f.binaryWriterFn)throw Error("Message extension present that was generated without binary serialization support");var h=d.call(a,g);if(null!=h)if(g.isMessageType())if(f.binaryMessageSerializeFn)f.binaryWriterFn.call(b,g.fieldIndex,h,f.binaryMessageSerializeFn);else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
else f.binaryWriterFn.call(b,g.fieldIndex,h)}};jspb.Message.readBinaryExtension=function(a,b,c,d,e){var f=c[b.getFieldNumber()];if(f){c=f.fieldInfo;if(!f.binaryReaderFn)throw Error("Deserializing extension whose generated code does not support binary format");if(c.isMessageType()){var g=new c.ctor;f.binaryReaderFn.call(b,g,f.binaryMessageDeserializeFn)}else g=f.binaryReaderFn.call(b);c.isRepeated&&!f.isPacked?(b=d.call(a,c))?b.push(g):e.call(a,c,[g]):e.call(a,c,g)}else b.skipField()};
jspb.Message.getField=function(a,b){if(b<a.pivot_){b=jspb.Message.getIndex_(a,b);var c=a.array[b];return c===jspb.Message.EMPTY_LIST_SENTINEL_?a.array[b]=[]:c}if(a.extensionObject_)return c=a.extensionObject_[b],c===jspb.Message.EMPTY_LIST_SENTINEL_?a.extensionObject_[b]=[]:c};jspb.Message.getRepeatedField=function(a,b){return jspb.Message.getField(a,b)};jspb.Message.getOptionalFloatingPointField=function(a,b){a=jspb.Message.getField(a,b);return null==a?a:+a};
jspb.Message.getBooleanField=function(a,b){a=jspb.Message.getField(a,b);return null==a?a:!!a};jspb.Message.getRepeatedFloatingPointField=function(a,b){var c=jspb.Message.getRepeatedField(a,b);a.convertedPrimitiveFields_||(a.convertedPrimitiveFields_={});if(!a.convertedPrimitiveFields_[b]){for(var d=0;d<c.length;d++)c[d]=+c[d];a.convertedPrimitiveFields_[b]=!0}return c};
jspb.Message.getRepeatedBooleanField=function(a,b){var c=jspb.Message.getRepeatedField(a,b);a.convertedPrimitiveFields_||(a.convertedPrimitiveFields_={});if(!a.convertedPrimitiveFields_[b]){for(var d=0;d<c.length;d++)c[d]=!!c[d];a.convertedPrimitiveFields_[b]=!0}return c};
jspb.Message.bytesAsB64=function(a){if(null==a||"string"===typeof a)return a;if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a instanceof Uint8Array)return goog.crypt.base64.encodeByteArray(a);goog.asserts.fail("Cannot coerce to b64 string: "+goog.typeOf(a));return null};jspb.Message.bytesAsU8=function(a){if(null==a||a instanceof Uint8Array)return a;if("string"===typeof a)return goog.crypt.base64.decodeStringToUint8Array(a);goog.asserts.fail("Cannot coerce to Uint8Array: "+goog.typeOf(a));return null};
jspb.Message.bytesListAsB64=function(a){jspb.Message.assertConsistentTypes_(a);return a.length&&"string"!==typeof a[0]?goog.array.map(a,jspb.Message.bytesAsB64):a};jspb.Message.bytesListAsU8=function(a){jspb.Message.assertConsistentTypes_(a);return!a.length||a[0]instanceof Uint8Array?a:goog.array.map(a,jspb.Message.bytesAsU8)};
jspb.Message.assertConsistentTypes_=function(a){if(goog.DEBUG&&a&&1<a.length){var b=goog.typeOf(a[0]);goog.array.forEach(a,function(a){goog.typeOf(a)!=b&&goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got "+goog.typeOf(a)+" expected "+b)})}};jspb.Message.getFieldWithDefault=function(a,b,c){a=jspb.Message.getField(a,b);return null==a?c:a};jspb.Message.getBooleanFieldWithDefault=function(a,b,c){a=jspb.Message.getBooleanField(a,b);return null==a?c:a};
jspb.Message.getFloatingPointFieldWithDefault=function(a,b,c){a=jspb.Message.getOptionalFloatingPointField(a,b);return null==a?c:a};jspb.Message.getFieldProto3=jspb.Message.getFieldWithDefault;jspb.Message.getMapField=function(a,b,c,d){a.wrappers_||(a.wrappers_={});if(b in a.wrappers_)return a.wrappers_[b];var e=jspb.Message.getField(a,b);if(!e){if(c)return;e=[];jspb.Message.setField(a,b,e)}return a.wrappers_[b]=new jspb.Map(e,d)};
jspb.Message.setField=function(a,b,c){goog.asserts.assertInstanceof(a,jspb.Message);b<a.pivot_?a.array[jspb.Message.getIndex_(a,b)]=c:(jspb.Message.maybeInitEmptyExtensionObject_(a),a.extensionObject_[b]=c);return a};jspb.Message.setProto3IntField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};jspb.Message.setProto3FloatField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};
jspb.Message.setProto3BooleanField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,!1)};jspb.Message.setProto3StringField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,"")};jspb.Message.setProto3BytesField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,"")};jspb.Message.setProto3EnumField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};
jspb.Message.setProto3StringIntField=function(a,b,c){return jspb.Message.setFieldIgnoringDefault_(a,b,c,"0")};jspb.Message.setFieldIgnoringDefault_=function(a,b,c,d){goog.asserts.assertInstanceof(a,jspb.Message);c!==d?jspb.Message.setField(a,b,c):b<a.pivot_?a.array[jspb.Message.getIndex_(a,b)]=null:(jspb.Message.maybeInitEmptyExtensionObject_(a),delete a.extensionObject_[b]);return a};
jspb.Message.addToRepeatedField=function(a,b,c,d){goog.asserts.assertInstanceof(a,jspb.Message);b=jspb.Message.getRepeatedField(a,b);void 0!=d?b.splice(d,0,c):b.push(c);return a};jspb.Message.setOneofField=function(a,b,c,d){goog.asserts.assertInstanceof(a,jspb.Message);(c=jspb.Message.computeOneofCase(a,c))&&c!==b&&void 0!==d&&(a.wrappers_&&c in a.wrappers_&&(a.wrappers_[c]=void 0),jspb.Message.setField(a,c,void 0));return jspb.Message.setField(a,b,d)};
jspb.Message.computeOneofCase=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],g=jspb.Message.getField(a,f);null!=g&&(c=f,d=g,jspb.Message.setField(a,f,void 0))}return c?(jspb.Message.setField(a,c,d),c):0};jspb.Message.getWrapperField=function(a,b,c,d){a.wrappers_||(a.wrappers_={});if(!a.wrappers_[c]){var e=jspb.Message.getField(a,c);if(d||e)a.wrappers_[c]=new b(e)}return a.wrappers_[c]};
jspb.Message.getRepeatedWrapperField=function(a,b,c){jspb.Message.wrapRepeatedField_(a,b,c);b=a.wrappers_[c];b==jspb.Message.EMPTY_LIST_SENTINEL_&&(b=a.wrappers_[c]=[]);return b};jspb.Message.wrapRepeatedField_=function(a,b,c){a.wrappers_||(a.wrappers_={});if(!a.wrappers_[c]){for(var d=jspb.Message.getRepeatedField(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.wrappers_[c]=e}};
jspb.Message.setWrapperField=function(a,b,c){goog.asserts.assertInstanceof(a,jspb.Message);a.wrappers_||(a.wrappers_={});var d=c?c.toArray():c;a.wrappers_[b]=c;return jspb.Message.setField(a,b,d)};jspb.Message.setOneofWrapperField=function(a,b,c,d){goog.asserts.assertInstanceof(a,jspb.Message);a.wrappers_||(a.wrappers_={});var e=d?d.toArray():d;a.wrappers_[b]=d;return jspb.Message.setOneofField(a,b,c,e)};
jspb.Message.setRepeatedWrapperField=function(a,b,c){goog.asserts.assertInstanceof(a,jspb.Message);a.wrappers_||(a.wrappers_={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].toArray();a.wrappers_[b]=c;return jspb.Message.setField(a,b,d)};
jspb.Message.addToRepeatedWrapperField=function(a,b,c,d,e){jspb.Message.wrapRepeatedField_(a,d,b);var f=a.wrappers_[b];f||(f=a.wrappers_[b]=[]);c=c?c:new d;a=jspb.Message.getRepeatedField(a,b);void 0!=e?(f.splice(e,0,c),a.splice(e,0,c.toArray())):(f.push(c),a.push(c.toArray()));return c};jspb.Message.toMap=function(a,b,c,d){for(var e={},f=0;f<a.length;f++)e[b.call(a[f])]=c?c.call(a[f],d,a[f]):a[f];return e};
jspb.Message.prototype.syncMapFields_=function(){if(this.wrappers_)for(var a in this.wrappers_){var b=this.wrappers_[a];if(Array.isArray(b))for(var c=0;c<b.length;c++)b[c]&&b[c].toArray();else b&&b.toArray()}};jspb.Message.prototype.toArray=function(){this.syncMapFields_();return this.array};jspb.Message.GENERATE_TO_STRING&&(jspb.Message.prototype.toString=function(){this.syncMapFields_();return this.array.toString()});
jspb.Message.prototype.getExtension=function(a){if(this.extensionObject_){this.wrappers_||(this.wrappers_={});var b=a.fieldIndex;if(a.isRepeated){if(a.isMessageType())return this.wrappers_[b]||(this.wrappers_[b]=goog.array.map(this.extensionObject_[b]||[],function(b){return new a.ctor(b)})),this.wrappers_[b]}else if(a.isMessageType())return!this.wrappers_[b]&&this.extensionObject_[b]&&(this.wrappers_[b]=new a.ctor(this.extensionObject_[b])),this.wrappers_[b];return this.extensionObject_[b]}};
jspb.Message.prototype.setExtension=function(a,b){this.wrappers_||(this.wrappers_={});jspb.Message.maybeInitEmptyExtensionObject_(this);var c=a.fieldIndex;a.isRepeated?(b=b||[],a.isMessageType()?(this.wrappers_[c]=b,this.extensionObject_[c]=goog.array.map(b,function(a){return a.toArray()})):this.extensionObject_[c]=b):a.isMessageType()?(this.wrappers_[c]=b,this.extensionObject_[c]=b?b.toArray():b):this.extensionObject_[c]=b;return this};
jspb.Message.difference=function(a,b){if(!(a instanceof b.constructor))throw Error("Messages have different types.");var c=a.toArray();b=b.toArray();var d=[],e=0,f=c.length>b.length?c.length:b.length;a.getJsPbMessageId()&&(d[0]=a.getJsPbMessageId(),e=1);for(;e<f;e++)jspb.Message.compareFields(c[e],b[e])||(d[e]=b[e]);return new a.constructor(d)};jspb.Message.equals=function(a,b){return a==b||!(!a||!b)&&a instanceof b.constructor&&jspb.Message.compareFields(a.toArray(),b.toArray())};
jspb.Message.compareExtensions=function(a,b){a=a||{};b=b||{};var c={},d;for(d in a)c[d]=0;for(d in b)c[d]=0;for(d in c)if(!jspb.Message.compareFields(a[d],b[d]))return!1;return!0};
jspb.Message.compareFields=function(a,b){if(a==b)return!0;if(!goog.isObject(a)||!goog.isObject(b))return"number"===typeof a&&isNaN(a)||"number"===typeof b&&isNaN(b)?String(a)==String(b):!1;if(a.constructor!=b.constructor)return!1;if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a.constructor===Uint8Array){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0}if(a.constructor===Array){var d=void 0,e=void 0,f=Math.max(a.length,b.length);for(c=0;c<f;c++){var g=a[c],h=b[c];g&&
g.constructor==Object&&(goog.asserts.assert(void 0===d),goog.asserts.assert(c===a.length-1),d=g,g=void 0);h&&h.constructor==Object&&(goog.asserts.assert(void 0===e),goog.asserts.assert(c===b.length-1),e=h,h=void 0);if(!jspb.Message.compareFields(g,h))return!1}return d||e?(d=d||{},e=e||{},jspb.Message.compareExtensions(d,e)):!0}if(a.constructor===Object)return jspb.Message.compareExtensions(a,b);throw Error("Invalid type in JSPB array");};jspb.Message.prototype.cloneMessage=function(){return jspb.Message.cloneMessage(this)};
jspb.Message.prototype.clone=function(){return jspb.Message.cloneMessage(this)};jspb.Message.clone=function(a){return jspb.Message.cloneMessage(a)};jspb.Message.cloneMessage=function(a){return new a.constructor(jspb.Message.clone_(a.toArray()))};
jspb.Message.copyInto=function(a,b){goog.asserts.assertInstanceof(a,jspb.Message);goog.asserts.assertInstanceof(b,jspb.Message);goog.asserts.assert(a.constructor==b.constructor,"Copy source and target message should have the same type.");a=jspb.Message.clone(a);for(var c=b.toArray(),d=a.toArray(),e=c.length=0;e<d.length;e++)c[e]=d[e];b.wrappers_=a.wrappers_;b.extensionObject_=a.extensionObject_};
jspb.Message.clone_=function(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?jspb.Message.clone_(goog.asserts.assert(d)):d)}return b}if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?jspb.Message.clone_(goog.asserts.assert(d)):d);return b};jspb.Message.registerMessageType=function(a,b){b.messageId=a};jspb.Message.messageSetExtensions={};
jspb.Message.messageSetExtensionsBinary={};jspb.Export={};"object"===typeof exports&&(exports.Map=jspb.Map,exports.Message=jspb.Message,exports.BinaryReader=jspb.BinaryReader,exports.BinaryWriter=jspb.BinaryWriter,exports.ExtensionFieldInfo=jspb.ExtensionFieldInfo,exports.ExtensionFieldBinaryInfo=jspb.ExtensionFieldBinaryInfo,exports.exportSymbol=goog.exportSymbol,exports.inherits=goog.inherits,exports.object={extend:goog.object.extend},exports.typeOf=goog.typeOf);

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
},{"buffer":4}],3:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],4:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":3,"buffer":4,"ieee754":5}],5:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}]},{},[1]);
