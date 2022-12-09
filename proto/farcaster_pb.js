// source: farcaster.proto
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
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.farcaster.AbortSwapRequest', null, global);
goog.exportSymbol('proto.farcaster.AbortSwapResponse', null, global);
goog.exportSymbol('proto.farcaster.AddressSwapIdPair', null, global);
goog.exportSymbol('proto.farcaster.AddressSwapIdPair.AddressSwapIdCase', null, global);
goog.exportSymbol('proto.farcaster.Blockchain', null, global);
goog.exportSymbol('proto.farcaster.BuySigB', null, global);
goog.exportSymbol('proto.farcaster.BuySigB.AccLockConfirmationsCase', null, global);
goog.exportSymbol('proto.farcaster.BuySigB.ArbLockConfirmationsCase', null, global);
goog.exportSymbol('proto.farcaster.BuySigB.BlocksUntilCancelPossibleCase', null, global);
goog.exportSymbol('proto.farcaster.BuySigB.BlocksUntilPunishPossibleCase', null, global);
goog.exportSymbol('proto.farcaster.BuySigB.BlocksUntilRefundCase', null, global);
goog.exportSymbol('proto.farcaster.BuySigB.BlocksUntilSafeMoneroBuySweepCase', null, global);
goog.exportSymbol('proto.farcaster.BuySigB.CancelConfirmationsCase', null, global);
goog.exportSymbol('proto.farcaster.CheckpointEntry', null, global);
goog.exportSymbol('proto.farcaster.CheckpointSelector', null, global);
goog.exportSymbol('proto.farcaster.CheckpointsRequest', null, global);
goog.exportSymbol('proto.farcaster.CheckpointsResponse', null, global);
goog.exportSymbol('proto.farcaster.CommitA', null, global);
goog.exportSymbol('proto.farcaster.CommitB', null, global);
goog.exportSymbol('proto.farcaster.ConnectSwapRequest', null, global);
goog.exportSymbol('proto.farcaster.ConnectSwapResponse', null, global);
goog.exportSymbol('proto.farcaster.CoreArbB', null, global);
goog.exportSymbol('proto.farcaster.CoreArbB.AccLockConfirmationsCase', null, global);
goog.exportSymbol('proto.farcaster.CoreArbB.ArbLockConfirmationsCase', null, global);
goog.exportSymbol('proto.farcaster.CoreArbB.BlocksUntilCancelPossibleCase', null, global);
goog.exportSymbol('proto.farcaster.CoreArbB.BlocksUntilPunishPossibleCase', null, global);
goog.exportSymbol('proto.farcaster.CoreArbB.BlocksUntilRefundCase', null, global);
goog.exportSymbol('proto.farcaster.CoreArbB.CancelConfirmationsCase', null, global);
goog.exportSymbol('proto.farcaster.FinishA', null, global);
goog.exportSymbol('proto.farcaster.FinishB', null, global);
goog.exportSymbol('proto.farcaster.FundingAddressesRequest', null, global);
goog.exportSymbol('proto.farcaster.FundingAddressesResponse', null, global);
goog.exportSymbol('proto.farcaster.FundingInfo', null, global);
goog.exportSymbol('proto.farcaster.HealthCheckRequest', null, global);
goog.exportSymbol('proto.farcaster.HealthCheckResponse', null, global);
goog.exportSymbol('proto.farcaster.InfoRequest', null, global);
goog.exportSymbol('proto.farcaster.InfoResponse', null, global);
goog.exportSymbol('proto.farcaster.ListOffersRequest', null, global);
goog.exportSymbol('proto.farcaster.ListOffersResponse', null, global);
goog.exportSymbol('proto.farcaster.MakeRequest', null, global);
goog.exportSymbol('proto.farcaster.MakeResponse', null, global);
goog.exportSymbol('proto.farcaster.NeedsFundingRequest', null, global);
goog.exportSymbol('proto.farcaster.NeedsFundingResponse', null, global);
goog.exportSymbol('proto.farcaster.Network', null, global);
goog.exportSymbol('proto.farcaster.OfferInfoRequest', null, global);
goog.exportSymbol('proto.farcaster.OfferInfoResponse', null, global);
goog.exportSymbol('proto.farcaster.OfferSelector', null, global);
goog.exportSymbol('proto.farcaster.Outcome', null, global);
goog.exportSymbol('proto.farcaster.PeersRequest', null, global);
goog.exportSymbol('proto.farcaster.PeersResponse', null, global);
goog.exportSymbol('proto.farcaster.Progress', null, global);
goog.exportSymbol('proto.farcaster.Progress.ProgressCase', null, global);
goog.exportSymbol('proto.farcaster.ProgressRequest', null, global);
goog.exportSymbol('proto.farcaster.ProgressResponse', null, global);
goog.exportSymbol('proto.farcaster.RefundSigA', null, global);
goog.exportSymbol('proto.farcaster.RefundSigA.AccLockConfirmationsCase', null, global);
goog.exportSymbol('proto.farcaster.RefundSigA.ArbLockConfirmationsCase', null, global);
goog.exportSymbol('proto.farcaster.RefundSigA.BlocksUntilCancelPossibleCase', null, global);
goog.exportSymbol('proto.farcaster.RefundSigA.BlocksUntilPunishPossibleCase', null, global);
goog.exportSymbol('proto.farcaster.RefundSigA.BlocksUntilSafeBuyCase', null, global);
goog.exportSymbol('proto.farcaster.RefundSigA.CancelConfirmationsCase', null, global);
goog.exportSymbol('proto.farcaster.RestoreCheckpointRequest', null, global);
goog.exportSymbol('proto.farcaster.RestoreCheckpointResponse', null, global);
goog.exportSymbol('proto.farcaster.RevealA', null, global);
goog.exportSymbol('proto.farcaster.RevealB', null, global);
goog.exportSymbol('proto.farcaster.RevokeOfferRequest', null, global);
goog.exportSymbol('proto.farcaster.RevokeOfferResponse', null, global);
goog.exportSymbol('proto.farcaster.StartA', null, global);
goog.exportSymbol('proto.farcaster.StartB', null, global);
goog.exportSymbol('proto.farcaster.State', null, global);
goog.exportSymbol('proto.farcaster.State.StateCase', null, global);
goog.exportSymbol('proto.farcaster.StateTransition', null, global);
goog.exportSymbol('proto.farcaster.SwapInfoRequest', null, global);
goog.exportSymbol('proto.farcaster.SwapInfoResponse', null, global);
goog.exportSymbol('proto.farcaster.SwapRole', null, global);
goog.exportSymbol('proto.farcaster.SweepAddressRequest', null, global);
goog.exportSymbol('proto.farcaster.SweepAddressResponse', null, global);
goog.exportSymbol('proto.farcaster.TakeRequest', null, global);
goog.exportSymbol('proto.farcaster.TakeResponse', null, global);
goog.exportSymbol('proto.farcaster.TradeRole', null, global);
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
proto.farcaster.HealthCheckRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.HealthCheckRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.HealthCheckRequest.displayName = 'proto.farcaster.HealthCheckRequest';
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
proto.farcaster.HealthCheckResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.HealthCheckResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.HealthCheckResponse.displayName = 'proto.farcaster.HealthCheckResponse';
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
proto.farcaster.InfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.InfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.InfoRequest.displayName = 'proto.farcaster.InfoRequest';
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
proto.farcaster.InfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.farcaster.InfoResponse.repeatedFields_, null);
};
goog.inherits(proto.farcaster.InfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.InfoResponse.displayName = 'proto.farcaster.InfoResponse';
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
proto.farcaster.SwapInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.SwapInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.SwapInfoRequest.displayName = 'proto.farcaster.SwapInfoRequest';
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
proto.farcaster.SwapInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.SwapInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.SwapInfoResponse.displayName = 'proto.farcaster.SwapInfoResponse';
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
proto.farcaster.OfferInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.OfferInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.OfferInfoRequest.displayName = 'proto.farcaster.OfferInfoRequest';
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
proto.farcaster.OfferInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.OfferInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.OfferInfoResponse.displayName = 'proto.farcaster.OfferInfoResponse';
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
proto.farcaster.PeersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.PeersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.PeersRequest.displayName = 'proto.farcaster.PeersRequest';
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
proto.farcaster.PeersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.farcaster.PeersResponse.repeatedFields_, null);
};
goog.inherits(proto.farcaster.PeersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.PeersResponse.displayName = 'proto.farcaster.PeersResponse';
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
proto.farcaster.ListOffersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.ListOffersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.ListOffersRequest.displayName = 'proto.farcaster.ListOffersRequest';
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
proto.farcaster.ListOffersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.farcaster.ListOffersResponse.repeatedFields_, null);
};
goog.inherits(proto.farcaster.ListOffersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.ListOffersResponse.displayName = 'proto.farcaster.ListOffersResponse';
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
proto.farcaster.CheckpointsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.CheckpointsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.CheckpointsRequest.displayName = 'proto.farcaster.CheckpointsRequest';
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
proto.farcaster.CheckpointsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.farcaster.CheckpointsResponse.repeatedFields_, null);
};
goog.inherits(proto.farcaster.CheckpointsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.CheckpointsResponse.displayName = 'proto.farcaster.CheckpointsResponse';
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
proto.farcaster.CheckpointEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.CheckpointEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.CheckpointEntry.displayName = 'proto.farcaster.CheckpointEntry';
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
proto.farcaster.RestoreCheckpointRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.RestoreCheckpointRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.RestoreCheckpointRequest.displayName = 'proto.farcaster.RestoreCheckpointRequest';
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
proto.farcaster.RestoreCheckpointResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.RestoreCheckpointResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.RestoreCheckpointResponse.displayName = 'proto.farcaster.RestoreCheckpointResponse';
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
proto.farcaster.FundingAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.FundingAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.FundingAddressesRequest.displayName = 'proto.farcaster.FundingAddressesRequest';
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
proto.farcaster.FundingAddressesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.farcaster.FundingAddressesResponse.repeatedFields_, null);
};
goog.inherits(proto.farcaster.FundingAddressesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.FundingAddressesResponse.displayName = 'proto.farcaster.FundingAddressesResponse';
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
proto.farcaster.AddressSwapIdPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.farcaster.AddressSwapIdPair.oneofGroups_);
};
goog.inherits(proto.farcaster.AddressSwapIdPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.AddressSwapIdPair.displayName = 'proto.farcaster.AddressSwapIdPair';
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
proto.farcaster.MakeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.MakeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.MakeRequest.displayName = 'proto.farcaster.MakeRequest';
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
proto.farcaster.MakeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.MakeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.MakeResponse.displayName = 'proto.farcaster.MakeResponse';
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
proto.farcaster.TakeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.TakeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.TakeRequest.displayName = 'proto.farcaster.TakeRequest';
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
proto.farcaster.TakeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.TakeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.TakeResponse.displayName = 'proto.farcaster.TakeResponse';
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
proto.farcaster.RevokeOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.RevokeOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.RevokeOfferRequest.displayName = 'proto.farcaster.RevokeOfferRequest';
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
proto.farcaster.RevokeOfferResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.RevokeOfferResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.RevokeOfferResponse.displayName = 'proto.farcaster.RevokeOfferResponse';
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
proto.farcaster.AbortSwapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.AbortSwapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.AbortSwapRequest.displayName = 'proto.farcaster.AbortSwapRequest';
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
proto.farcaster.AbortSwapResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.AbortSwapResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.AbortSwapResponse.displayName = 'proto.farcaster.AbortSwapResponse';
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
proto.farcaster.ProgressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.ProgressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.ProgressRequest.displayName = 'proto.farcaster.ProgressRequest';
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
proto.farcaster.ProgressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.farcaster.ProgressResponse.repeatedFields_, null);
};
goog.inherits(proto.farcaster.ProgressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.ProgressResponse.displayName = 'proto.farcaster.ProgressResponse';
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
proto.farcaster.Progress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.farcaster.Progress.oneofGroups_);
};
goog.inherits(proto.farcaster.Progress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.Progress.displayName = 'proto.farcaster.Progress';
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
proto.farcaster.StateTransition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.StateTransition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.StateTransition.displayName = 'proto.farcaster.StateTransition';
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
proto.farcaster.State = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.farcaster.State.oneofGroups_);
};
goog.inherits(proto.farcaster.State, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.State.displayName = 'proto.farcaster.State';
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
proto.farcaster.StartA = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.StartA, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.StartA.displayName = 'proto.farcaster.StartA';
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
proto.farcaster.CommitA = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.CommitA, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.CommitA.displayName = 'proto.farcaster.CommitA';
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
proto.farcaster.RevealA = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.RevealA, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.RevealA.displayName = 'proto.farcaster.RevealA';
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
proto.farcaster.FinishA = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.FinishA, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.FinishA.displayName = 'proto.farcaster.FinishA';
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
proto.farcaster.StartB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.StartB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.StartB.displayName = 'proto.farcaster.StartB';
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
proto.farcaster.CommitB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.CommitB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.CommitB.displayName = 'proto.farcaster.CommitB';
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
proto.farcaster.RevealB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.RevealB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.RevealB.displayName = 'proto.farcaster.RevealB';
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
proto.farcaster.FinishB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.FinishB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.FinishB.displayName = 'proto.farcaster.FinishB';
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
proto.farcaster.RefundSigA = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.farcaster.RefundSigA.oneofGroups_);
};
goog.inherits(proto.farcaster.RefundSigA, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.RefundSigA.displayName = 'proto.farcaster.RefundSigA';
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
proto.farcaster.CoreArbB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.farcaster.CoreArbB.oneofGroups_);
};
goog.inherits(proto.farcaster.CoreArbB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.CoreArbB.displayName = 'proto.farcaster.CoreArbB';
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
proto.farcaster.BuySigB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.farcaster.BuySigB.oneofGroups_);
};
goog.inherits(proto.farcaster.BuySigB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.BuySigB.displayName = 'proto.farcaster.BuySigB';
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
proto.farcaster.ConnectSwapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.ConnectSwapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.ConnectSwapRequest.displayName = 'proto.farcaster.ConnectSwapRequest';
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
proto.farcaster.ConnectSwapResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.ConnectSwapResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.ConnectSwapResponse.displayName = 'proto.farcaster.ConnectSwapResponse';
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
proto.farcaster.NeedsFundingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.NeedsFundingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.NeedsFundingRequest.displayName = 'proto.farcaster.NeedsFundingRequest';
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
proto.farcaster.NeedsFundingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.farcaster.NeedsFundingResponse.repeatedFields_, null);
};
goog.inherits(proto.farcaster.NeedsFundingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.NeedsFundingResponse.displayName = 'proto.farcaster.NeedsFundingResponse';
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
proto.farcaster.FundingInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.FundingInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.FundingInfo.displayName = 'proto.farcaster.FundingInfo';
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
proto.farcaster.SweepAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.SweepAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.SweepAddressRequest.displayName = 'proto.farcaster.SweepAddressRequest';
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
proto.farcaster.SweepAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.SweepAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.SweepAddressResponse.displayName = 'proto.farcaster.SweepAddressResponse';
}



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
proto.farcaster.HealthCheckRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.HealthCheckRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.HealthCheckRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.HealthCheckRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.farcaster.HealthCheckRequest}
 */
proto.farcaster.HealthCheckRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.HealthCheckRequest;
  return proto.farcaster.HealthCheckRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.HealthCheckRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.HealthCheckRequest}
 */
proto.farcaster.HealthCheckRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
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
proto.farcaster.HealthCheckRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.HealthCheckRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.HealthCheckRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.HealthCheckRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.HealthCheckRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.HealthCheckRequest} returns this
 */
proto.farcaster.HealthCheckRequest.prototype.setId = function(value) {
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
proto.farcaster.HealthCheckResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.HealthCheckResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.HealthCheckResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.HealthCheckResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bitcoinMainnetHealth: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bitcoinTestnetHealth: jspb.Message.getFieldWithDefault(msg, 3, ""),
    bitcoinLocalHealth: jspb.Message.getFieldWithDefault(msg, 4, ""),
    moneroMainnetHealth: jspb.Message.getFieldWithDefault(msg, 5, ""),
    moneroTestnetHealth: jspb.Message.getFieldWithDefault(msg, 6, ""),
    moneroLocalHealth: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.farcaster.HealthCheckResponse}
 */
proto.farcaster.HealthCheckResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.HealthCheckResponse;
  return proto.farcaster.HealthCheckResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.HealthCheckResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.HealthCheckResponse}
 */
proto.farcaster.HealthCheckResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBitcoinMainnetHealth(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBitcoinTestnetHealth(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBitcoinLocalHealth(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMoneroMainnetHealth(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMoneroTestnetHealth(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMoneroLocalHealth(value);
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
proto.farcaster.HealthCheckResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.HealthCheckResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.HealthCheckResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.HealthCheckResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBitcoinMainnetHealth();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBitcoinTestnetHealth();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBitcoinLocalHealth();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMoneroMainnetHealth();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMoneroTestnetHealth();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMoneroLocalHealth();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.HealthCheckResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.HealthCheckResponse} returns this
 */
proto.farcaster.HealthCheckResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string bitcoin_mainnet_health = 2;
 * @return {string}
 */
proto.farcaster.HealthCheckResponse.prototype.getBitcoinMainnetHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.HealthCheckResponse} returns this
 */
proto.farcaster.HealthCheckResponse.prototype.setBitcoinMainnetHealth = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bitcoin_testnet_health = 3;
 * @return {string}
 */
proto.farcaster.HealthCheckResponse.prototype.getBitcoinTestnetHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.HealthCheckResponse} returns this
 */
proto.farcaster.HealthCheckResponse.prototype.setBitcoinTestnetHealth = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string bitcoin_local_health = 4;
 * @return {string}
 */
proto.farcaster.HealthCheckResponse.prototype.getBitcoinLocalHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.HealthCheckResponse} returns this
 */
proto.farcaster.HealthCheckResponse.prototype.setBitcoinLocalHealth = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string monero_mainnet_health = 5;
 * @return {string}
 */
proto.farcaster.HealthCheckResponse.prototype.getMoneroMainnetHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.HealthCheckResponse} returns this
 */
proto.farcaster.HealthCheckResponse.prototype.setMoneroMainnetHealth = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string monero_testnet_health = 6;
 * @return {string}
 */
proto.farcaster.HealthCheckResponse.prototype.getMoneroTestnetHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.HealthCheckResponse} returns this
 */
proto.farcaster.HealthCheckResponse.prototype.setMoneroTestnetHealth = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string monero_local_health = 7;
 * @return {string}
 */
proto.farcaster.HealthCheckResponse.prototype.getMoneroLocalHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.HealthCheckResponse} returns this
 */
proto.farcaster.HealthCheckResponse.prototype.setMoneroLocalHealth = function(value) {
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
proto.farcaster.InfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.InfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.InfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.InfoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.farcaster.InfoRequest}
 */
proto.farcaster.InfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.InfoRequest;
  return proto.farcaster.InfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.InfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.InfoRequest}
 */
proto.farcaster.InfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
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
proto.farcaster.InfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.InfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.InfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.InfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.InfoRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.InfoRequest} returns this
 */
proto.farcaster.InfoRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.farcaster.InfoResponse.repeatedFields_ = [3,6,7,8];



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
proto.farcaster.InfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.InfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.InfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.InfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    listensList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    uptime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    since: jspb.Message.getFieldWithDefault(msg, 5, 0),
    peersList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    swapsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    offersList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
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
 * @return {!proto.farcaster.InfoResponse}
 */
proto.farcaster.InfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.InfoResponse;
  return proto.farcaster.InfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.InfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.InfoResponse}
 */
proto.farcaster.InfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addListens(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUptime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSince(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addPeers(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addSwaps(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addOffers(value);
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
proto.farcaster.InfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.InfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.InfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.InfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getListensList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getUptime();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getSince();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getPeersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getSwapsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getOffersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.InfoResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string listens = 3;
 * @return {!Array<string>}
 */
proto.farcaster.InfoResponse.prototype.getListensList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.setListensList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.addListens = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.clearListensList = function() {
  return this.setListensList([]);
};


/**
 * optional uint64 uptime = 4;
 * @return {number}
 */
proto.farcaster.InfoResponse.prototype.getUptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.setUptime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 since = 5;
 * @return {number}
 */
proto.farcaster.InfoResponse.prototype.getSince = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.setSince = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated string peers = 6;
 * @return {!Array<string>}
 */
proto.farcaster.InfoResponse.prototype.getPeersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.setPeersList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.addPeers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.clearPeersList = function() {
  return this.setPeersList([]);
};


/**
 * repeated string swaps = 7;
 * @return {!Array<string>}
 */
proto.farcaster.InfoResponse.prototype.getSwapsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.setSwapsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.addSwaps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.clearSwapsList = function() {
  return this.setSwapsList([]);
};


/**
 * repeated string offers = 8;
 * @return {!Array<string>}
 */
proto.farcaster.InfoResponse.prototype.getOffersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.setOffersList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.addOffers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.clearOffersList = function() {
  return this.setOffersList([]);
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
proto.farcaster.SwapInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.SwapInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.SwapInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.SwapInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    swapId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.farcaster.SwapInfoRequest}
 */
proto.farcaster.SwapInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.SwapInfoRequest;
  return proto.farcaster.SwapInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.SwapInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.SwapInfoRequest}
 */
proto.farcaster.SwapInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSwapId(value);
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
proto.farcaster.SwapInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.SwapInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.SwapInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.SwapInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSwapId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.SwapInfoRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.SwapInfoRequest} returns this
 */
proto.farcaster.SwapInfoRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string swap_id = 2;
 * @return {string}
 */
proto.farcaster.SwapInfoRequest.prototype.getSwapId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.SwapInfoRequest} returns this
 */
proto.farcaster.SwapInfoRequest.prototype.setSwapId = function(value) {
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
proto.farcaster.SwapInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.SwapInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.SwapInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.SwapInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    connection: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uptime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    since: jspb.Message.getFieldWithDefault(msg, 4, 0),
    publicOffer: jspb.Message.getFieldWithDefault(msg, 5, ""),
    connected: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    tradeRole: jspb.Message.getFieldWithDefault(msg, 7, 0),
    swapRole: jspb.Message.getFieldWithDefault(msg, 8, 0),
    connectedCounterpartyNodeId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    state: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.farcaster.SwapInfoResponse}
 */
proto.farcaster.SwapInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.SwapInfoResponse;
  return proto.farcaster.SwapInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.SwapInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.SwapInfoResponse}
 */
proto.farcaster.SwapInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnection(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUptime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSince(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicOffer(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConnected(value);
      break;
    case 7:
      var value = /** @type {!proto.farcaster.TradeRole} */ (reader.readEnum());
      msg.setTradeRole(value);
      break;
    case 8:
      var value = /** @type {!proto.farcaster.SwapRole} */ (reader.readEnum());
      msg.setSwapRole(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectedCounterpartyNodeId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
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
proto.farcaster.SwapInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.SwapInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.SwapInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.SwapInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getConnection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUptime();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getSince();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getPublicOffer();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getConnected();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getTradeRole();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getSwapRole();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getConnectedCounterpartyNodeId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.SwapInfoResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.SwapInfoResponse} returns this
 */
proto.farcaster.SwapInfoResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string connection = 2;
 * @return {string}
 */
proto.farcaster.SwapInfoResponse.prototype.getConnection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.SwapInfoResponse} returns this
 */
proto.farcaster.SwapInfoResponse.prototype.setConnection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 uptime = 3;
 * @return {number}
 */
proto.farcaster.SwapInfoResponse.prototype.getUptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.SwapInfoResponse} returns this
 */
proto.farcaster.SwapInfoResponse.prototype.setUptime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 since = 4;
 * @return {number}
 */
proto.farcaster.SwapInfoResponse.prototype.getSince = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.SwapInfoResponse} returns this
 */
proto.farcaster.SwapInfoResponse.prototype.setSince = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string public_offer = 5;
 * @return {string}
 */
proto.farcaster.SwapInfoResponse.prototype.getPublicOffer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.SwapInfoResponse} returns this
 */
proto.farcaster.SwapInfoResponse.prototype.setPublicOffer = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool connected = 6;
 * @return {boolean}
 */
proto.farcaster.SwapInfoResponse.prototype.getConnected = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.SwapInfoResponse} returns this
 */
proto.farcaster.SwapInfoResponse.prototype.setConnected = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional TradeRole trade_role = 7;
 * @return {!proto.farcaster.TradeRole}
 */
proto.farcaster.SwapInfoResponse.prototype.getTradeRole = function() {
  return /** @type {!proto.farcaster.TradeRole} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.farcaster.TradeRole} value
 * @return {!proto.farcaster.SwapInfoResponse} returns this
 */
proto.farcaster.SwapInfoResponse.prototype.setTradeRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional SwapRole swap_role = 8;
 * @return {!proto.farcaster.SwapRole}
 */
proto.farcaster.SwapInfoResponse.prototype.getSwapRole = function() {
  return /** @type {!proto.farcaster.SwapRole} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.farcaster.SwapRole} value
 * @return {!proto.farcaster.SwapInfoResponse} returns this
 */
proto.farcaster.SwapInfoResponse.prototype.setSwapRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string connected_counterparty_node_id = 9;
 * @return {string}
 */
proto.farcaster.SwapInfoResponse.prototype.getConnectedCounterpartyNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.SwapInfoResponse} returns this
 */
proto.farcaster.SwapInfoResponse.prototype.setConnectedCounterpartyNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string state = 10;
 * @return {string}
 */
proto.farcaster.SwapInfoResponse.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.SwapInfoResponse} returns this
 */
proto.farcaster.SwapInfoResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
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
proto.farcaster.OfferInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.OfferInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.OfferInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.OfferInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    publicOffer: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.farcaster.OfferInfoRequest}
 */
proto.farcaster.OfferInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.OfferInfoRequest;
  return proto.farcaster.OfferInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.OfferInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.OfferInfoRequest}
 */
proto.farcaster.OfferInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicOffer(value);
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
proto.farcaster.OfferInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.OfferInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.OfferInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.OfferInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPublicOffer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.OfferInfoRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.OfferInfoRequest} returns this
 */
proto.farcaster.OfferInfoRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string public_offer = 2;
 * @return {string}
 */
proto.farcaster.OfferInfoRequest.prototype.getPublicOffer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.OfferInfoRequest} returns this
 */
proto.farcaster.OfferInfoRequest.prototype.setPublicOffer = function(value) {
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
proto.farcaster.OfferInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.OfferInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.OfferInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.OfferInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    arbitratingAmount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    accordantAmount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cancelTimelock: jspb.Message.getFieldWithDefault(msg, 4, 0),
    punishTimelock: jspb.Message.getFieldWithDefault(msg, 5, 0),
    feeStrategy: jspb.Message.getFieldWithDefault(msg, 6, ""),
    makerRole: jspb.Message.getFieldWithDefault(msg, 7, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    network: jspb.Message.getFieldWithDefault(msg, 9, 0),
    arbitratingBlockchain: jspb.Message.getFieldWithDefault(msg, 10, 0),
    accordantBlockchain: jspb.Message.getFieldWithDefault(msg, 11, 0),
    nodeId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    peerAddress: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.farcaster.OfferInfoResponse}
 */
proto.farcaster.OfferInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.OfferInfoResponse;
  return proto.farcaster.OfferInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.OfferInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.OfferInfoResponse}
 */
proto.farcaster.OfferInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setArbitratingAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAccordantAmount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCancelTimelock(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPunishTimelock(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeeStrategy(value);
      break;
    case 7:
      var value = /** @type {!proto.farcaster.SwapRole} */ (reader.readEnum());
      msg.setMakerRole(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 9:
      var value = /** @type {!proto.farcaster.Network} */ (reader.readEnum());
      msg.setNetwork(value);
      break;
    case 10:
      var value = /** @type {!proto.farcaster.Blockchain} */ (reader.readEnum());
      msg.setArbitratingBlockchain(value);
      break;
    case 11:
      var value = /** @type {!proto.farcaster.Blockchain} */ (reader.readEnum());
      msg.setAccordantBlockchain(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerAddress(value);
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
proto.farcaster.OfferInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.OfferInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.OfferInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.OfferInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getArbitratingAmount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAccordantAmount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getCancelTimelock();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPunishTimelock();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getFeeStrategy();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMakerRole();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getNetwork();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getArbitratingBlockchain();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getAccordantBlockchain();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getPeerAddress();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.OfferInfoResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.OfferInfoResponse} returns this
 */
proto.farcaster.OfferInfoResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 arbitrating_amount = 2;
 * @return {number}
 */
proto.farcaster.OfferInfoResponse.prototype.getArbitratingAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.OfferInfoResponse} returns this
 */
proto.farcaster.OfferInfoResponse.prototype.setArbitratingAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 accordant_amount = 3;
 * @return {number}
 */
proto.farcaster.OfferInfoResponse.prototype.getAccordantAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.OfferInfoResponse} returns this
 */
proto.farcaster.OfferInfoResponse.prototype.setAccordantAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 cancel_timelock = 4;
 * @return {number}
 */
proto.farcaster.OfferInfoResponse.prototype.getCancelTimelock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.OfferInfoResponse} returns this
 */
proto.farcaster.OfferInfoResponse.prototype.setCancelTimelock = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 punish_timelock = 5;
 * @return {number}
 */
proto.farcaster.OfferInfoResponse.prototype.getPunishTimelock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.OfferInfoResponse} returns this
 */
proto.farcaster.OfferInfoResponse.prototype.setPunishTimelock = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string fee_strategy = 6;
 * @return {string}
 */
proto.farcaster.OfferInfoResponse.prototype.getFeeStrategy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.OfferInfoResponse} returns this
 */
proto.farcaster.OfferInfoResponse.prototype.setFeeStrategy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional SwapRole maker_role = 7;
 * @return {!proto.farcaster.SwapRole}
 */
proto.farcaster.OfferInfoResponse.prototype.getMakerRole = function() {
  return /** @type {!proto.farcaster.SwapRole} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.farcaster.SwapRole} value
 * @return {!proto.farcaster.OfferInfoResponse} returns this
 */
proto.farcaster.OfferInfoResponse.prototype.setMakerRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string uuid = 8;
 * @return {string}
 */
proto.farcaster.OfferInfoResponse.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.OfferInfoResponse} returns this
 */
proto.farcaster.OfferInfoResponse.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional Network network = 9;
 * @return {!proto.farcaster.Network}
 */
proto.farcaster.OfferInfoResponse.prototype.getNetwork = function() {
  return /** @type {!proto.farcaster.Network} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.farcaster.Network} value
 * @return {!proto.farcaster.OfferInfoResponse} returns this
 */
proto.farcaster.OfferInfoResponse.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional Blockchain arbitrating_blockchain = 10;
 * @return {!proto.farcaster.Blockchain}
 */
proto.farcaster.OfferInfoResponse.prototype.getArbitratingBlockchain = function() {
  return /** @type {!proto.farcaster.Blockchain} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.farcaster.Blockchain} value
 * @return {!proto.farcaster.OfferInfoResponse} returns this
 */
proto.farcaster.OfferInfoResponse.prototype.setArbitratingBlockchain = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional Blockchain accordant_blockchain = 11;
 * @return {!proto.farcaster.Blockchain}
 */
proto.farcaster.OfferInfoResponse.prototype.getAccordantBlockchain = function() {
  return /** @type {!proto.farcaster.Blockchain} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.farcaster.Blockchain} value
 * @return {!proto.farcaster.OfferInfoResponse} returns this
 */
proto.farcaster.OfferInfoResponse.prototype.setAccordantBlockchain = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string node_id = 12;
 * @return {string}
 */
proto.farcaster.OfferInfoResponse.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.OfferInfoResponse} returns this
 */
proto.farcaster.OfferInfoResponse.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string peer_address = 13;
 * @return {string}
 */
proto.farcaster.OfferInfoResponse.prototype.getPeerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.OfferInfoResponse} returns this
 */
proto.farcaster.OfferInfoResponse.prototype.setPeerAddress = function(value) {
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
proto.farcaster.PeersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.PeersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.PeersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.PeersRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.farcaster.PeersRequest}
 */
proto.farcaster.PeersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.PeersRequest;
  return proto.farcaster.PeersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.PeersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.PeersRequest}
 */
proto.farcaster.PeersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
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
proto.farcaster.PeersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.PeersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.PeersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.PeersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.PeersRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.PeersRequest} returns this
 */
proto.farcaster.PeersRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.farcaster.PeersResponse.repeatedFields_ = [2];



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
proto.farcaster.PeersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.PeersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.PeersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.PeersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    peersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.farcaster.PeersResponse}
 */
proto.farcaster.PeersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.PeersResponse;
  return proto.farcaster.PeersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.PeersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.PeersResponse}
 */
proto.farcaster.PeersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPeers(value);
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
proto.farcaster.PeersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.PeersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.PeersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.PeersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPeersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.PeersResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.PeersResponse} returns this
 */
proto.farcaster.PeersResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string peers = 2;
 * @return {!Array<string>}
 */
proto.farcaster.PeersResponse.prototype.getPeersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.farcaster.PeersResponse} returns this
 */
proto.farcaster.PeersResponse.prototype.setPeersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.farcaster.PeersResponse} returns this
 */
proto.farcaster.PeersResponse.prototype.addPeers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.farcaster.PeersResponse} returns this
 */
proto.farcaster.PeersResponse.prototype.clearPeersList = function() {
  return this.setPeersList([]);
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
proto.farcaster.ListOffersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.ListOffersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.ListOffersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ListOffersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    selector: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.farcaster.ListOffersRequest}
 */
proto.farcaster.ListOffersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.ListOffersRequest;
  return proto.farcaster.ListOffersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.ListOffersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.ListOffersRequest}
 */
proto.farcaster.ListOffersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.farcaster.OfferSelector} */ (reader.readEnum());
      msg.setSelector(value);
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
proto.farcaster.ListOffersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.ListOffersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.ListOffersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ListOffersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSelector();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.ListOffersRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.ListOffersRequest} returns this
 */
proto.farcaster.ListOffersRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional OfferSelector selector = 2;
 * @return {!proto.farcaster.OfferSelector}
 */
proto.farcaster.ListOffersRequest.prototype.getSelector = function() {
  return /** @type {!proto.farcaster.OfferSelector} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.farcaster.OfferSelector} value
 * @return {!proto.farcaster.ListOffersRequest} returns this
 */
proto.farcaster.ListOffersRequest.prototype.setSelector = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.farcaster.ListOffersResponse.repeatedFields_ = [2];



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
proto.farcaster.ListOffersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.ListOffersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.ListOffersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ListOffersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    publicOffersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.farcaster.ListOffersResponse}
 */
proto.farcaster.ListOffersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.ListOffersResponse;
  return proto.farcaster.ListOffersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.ListOffersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.ListOffersResponse}
 */
proto.farcaster.ListOffersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPublicOffers(value);
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
proto.farcaster.ListOffersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.ListOffersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.ListOffersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ListOffersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPublicOffersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.ListOffersResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.ListOffersResponse} returns this
 */
proto.farcaster.ListOffersResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string public_offers = 2;
 * @return {!Array<string>}
 */
proto.farcaster.ListOffersResponse.prototype.getPublicOffersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.farcaster.ListOffersResponse} returns this
 */
proto.farcaster.ListOffersResponse.prototype.setPublicOffersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.farcaster.ListOffersResponse} returns this
 */
proto.farcaster.ListOffersResponse.prototype.addPublicOffers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.farcaster.ListOffersResponse} returns this
 */
proto.farcaster.ListOffersResponse.prototype.clearPublicOffersList = function() {
  return this.setPublicOffersList([]);
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
proto.farcaster.CheckpointsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.CheckpointsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.CheckpointsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CheckpointsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    selector: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.farcaster.CheckpointsRequest}
 */
proto.farcaster.CheckpointsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.CheckpointsRequest;
  return proto.farcaster.CheckpointsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.CheckpointsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.CheckpointsRequest}
 */
proto.farcaster.CheckpointsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.farcaster.CheckpointSelector} */ (reader.readEnum());
      msg.setSelector(value);
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
proto.farcaster.CheckpointsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.CheckpointsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.CheckpointsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CheckpointsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSelector();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.CheckpointsRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.CheckpointsRequest} returns this
 */
proto.farcaster.CheckpointsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CheckpointSelector selector = 2;
 * @return {!proto.farcaster.CheckpointSelector}
 */
proto.farcaster.CheckpointsRequest.prototype.getSelector = function() {
  return /** @type {!proto.farcaster.CheckpointSelector} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.farcaster.CheckpointSelector} value
 * @return {!proto.farcaster.CheckpointsRequest} returns this
 */
proto.farcaster.CheckpointsRequest.prototype.setSelector = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.farcaster.CheckpointsResponse.repeatedFields_ = [2];



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
proto.farcaster.CheckpointsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.CheckpointsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.CheckpointsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CheckpointsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    checkpointEntriesList: jspb.Message.toObjectList(msg.getCheckpointEntriesList(),
    proto.farcaster.CheckpointEntry.toObject, includeInstance)
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
 * @return {!proto.farcaster.CheckpointsResponse}
 */
proto.farcaster.CheckpointsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.CheckpointsResponse;
  return proto.farcaster.CheckpointsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.CheckpointsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.CheckpointsResponse}
 */
proto.farcaster.CheckpointsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.farcaster.CheckpointEntry;
      reader.readMessage(value,proto.farcaster.CheckpointEntry.deserializeBinaryFromReader);
      msg.addCheckpointEntries(value);
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
proto.farcaster.CheckpointsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.CheckpointsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.CheckpointsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CheckpointsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCheckpointEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.farcaster.CheckpointEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.CheckpointsResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.CheckpointsResponse} returns this
 */
proto.farcaster.CheckpointsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated CheckpointEntry checkpoint_entries = 2;
 * @return {!Array<!proto.farcaster.CheckpointEntry>}
 */
proto.farcaster.CheckpointsResponse.prototype.getCheckpointEntriesList = function() {
  return /** @type{!Array<!proto.farcaster.CheckpointEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.farcaster.CheckpointEntry, 2));
};


/**
 * @param {!Array<!proto.farcaster.CheckpointEntry>} value
 * @return {!proto.farcaster.CheckpointsResponse} returns this
*/
proto.farcaster.CheckpointsResponse.prototype.setCheckpointEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.farcaster.CheckpointEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.farcaster.CheckpointEntry}
 */
proto.farcaster.CheckpointsResponse.prototype.addCheckpointEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.farcaster.CheckpointEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.farcaster.CheckpointsResponse} returns this
 */
proto.farcaster.CheckpointsResponse.prototype.clearCheckpointEntriesList = function() {
  return this.setCheckpointEntriesList([]);
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
proto.farcaster.CheckpointEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.CheckpointEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.CheckpointEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CheckpointEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    publicOffer: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tradeRole: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.farcaster.CheckpointEntry}
 */
proto.farcaster.CheckpointEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.CheckpointEntry;
  return proto.farcaster.CheckpointEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.CheckpointEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.CheckpointEntry}
 */
proto.farcaster.CheckpointEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSwapId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicOffer(value);
      break;
    case 3:
      var value = /** @type {!proto.farcaster.TradeRole} */ (reader.readEnum());
      msg.setTradeRole(value);
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
proto.farcaster.CheckpointEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.CheckpointEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.CheckpointEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CheckpointEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPublicOffer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTradeRole();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string swap_id = 1;
 * @return {string}
 */
proto.farcaster.CheckpointEntry.prototype.getSwapId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.CheckpointEntry} returns this
 */
proto.farcaster.CheckpointEntry.prototype.setSwapId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string public_offer = 2;
 * @return {string}
 */
proto.farcaster.CheckpointEntry.prototype.getPublicOffer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.CheckpointEntry} returns this
 */
proto.farcaster.CheckpointEntry.prototype.setPublicOffer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TradeRole trade_role = 3;
 * @return {!proto.farcaster.TradeRole}
 */
proto.farcaster.CheckpointEntry.prototype.getTradeRole = function() {
  return /** @type {!proto.farcaster.TradeRole} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.farcaster.TradeRole} value
 * @return {!proto.farcaster.CheckpointEntry} returns this
 */
proto.farcaster.CheckpointEntry.prototype.setTradeRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.farcaster.RestoreCheckpointRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.RestoreCheckpointRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.RestoreCheckpointRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RestoreCheckpointRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    swapId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.farcaster.RestoreCheckpointRequest}
 */
proto.farcaster.RestoreCheckpointRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.RestoreCheckpointRequest;
  return proto.farcaster.RestoreCheckpointRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.RestoreCheckpointRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.RestoreCheckpointRequest}
 */
proto.farcaster.RestoreCheckpointRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSwapId(value);
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
proto.farcaster.RestoreCheckpointRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.RestoreCheckpointRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.RestoreCheckpointRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RestoreCheckpointRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSwapId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.RestoreCheckpointRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RestoreCheckpointRequest} returns this
 */
proto.farcaster.RestoreCheckpointRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string swap_id = 2;
 * @return {string}
 */
proto.farcaster.RestoreCheckpointRequest.prototype.getSwapId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.RestoreCheckpointRequest} returns this
 */
proto.farcaster.RestoreCheckpointRequest.prototype.setSwapId = function(value) {
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
proto.farcaster.RestoreCheckpointResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.RestoreCheckpointResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.RestoreCheckpointResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RestoreCheckpointResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.farcaster.RestoreCheckpointResponse}
 */
proto.farcaster.RestoreCheckpointResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.RestoreCheckpointResponse;
  return proto.farcaster.RestoreCheckpointResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.RestoreCheckpointResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.RestoreCheckpointResponse}
 */
proto.farcaster.RestoreCheckpointResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
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
proto.farcaster.RestoreCheckpointResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.RestoreCheckpointResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.RestoreCheckpointResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RestoreCheckpointResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.RestoreCheckpointResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RestoreCheckpointResponse} returns this
 */
proto.farcaster.RestoreCheckpointResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.farcaster.RestoreCheckpointResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.RestoreCheckpointResponse} returns this
 */
proto.farcaster.RestoreCheckpointResponse.prototype.setStatus = function(value) {
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
proto.farcaster.FundingAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.FundingAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.FundingAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.FundingAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    blockchain: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.farcaster.FundingAddressesRequest}
 */
proto.farcaster.FundingAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.FundingAddressesRequest;
  return proto.farcaster.FundingAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.FundingAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.FundingAddressesRequest}
 */
proto.farcaster.FundingAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.farcaster.Blockchain} */ (reader.readEnum());
      msg.setBlockchain(value);
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
proto.farcaster.FundingAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.FundingAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.FundingAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.FundingAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBlockchain();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.FundingAddressesRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.FundingAddressesRequest} returns this
 */
proto.farcaster.FundingAddressesRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Blockchain blockchain = 2;
 * @return {!proto.farcaster.Blockchain}
 */
proto.farcaster.FundingAddressesRequest.prototype.getBlockchain = function() {
  return /** @type {!proto.farcaster.Blockchain} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.farcaster.Blockchain} value
 * @return {!proto.farcaster.FundingAddressesRequest} returns this
 */
proto.farcaster.FundingAddressesRequest.prototype.setBlockchain = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.farcaster.FundingAddressesResponse.repeatedFields_ = [2];



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
proto.farcaster.FundingAddressesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.FundingAddressesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.FundingAddressesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.FundingAddressesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    proto.farcaster.AddressSwapIdPair.toObject, includeInstance)
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
 * @return {!proto.farcaster.FundingAddressesResponse}
 */
proto.farcaster.FundingAddressesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.FundingAddressesResponse;
  return proto.farcaster.FundingAddressesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.FundingAddressesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.FundingAddressesResponse}
 */
proto.farcaster.FundingAddressesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.farcaster.AddressSwapIdPair;
      reader.readMessage(value,proto.farcaster.AddressSwapIdPair.deserializeBinaryFromReader);
      msg.addAddresses(value);
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
proto.farcaster.FundingAddressesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.FundingAddressesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.FundingAddressesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.FundingAddressesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.farcaster.AddressSwapIdPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.FundingAddressesResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.FundingAddressesResponse} returns this
 */
proto.farcaster.FundingAddressesResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated AddressSwapIdPair addresses = 2;
 * @return {!Array<!proto.farcaster.AddressSwapIdPair>}
 */
proto.farcaster.FundingAddressesResponse.prototype.getAddressesList = function() {
  return /** @type{!Array<!proto.farcaster.AddressSwapIdPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.farcaster.AddressSwapIdPair, 2));
};


/**
 * @param {!Array<!proto.farcaster.AddressSwapIdPair>} value
 * @return {!proto.farcaster.FundingAddressesResponse} returns this
*/
proto.farcaster.FundingAddressesResponse.prototype.setAddressesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.farcaster.AddressSwapIdPair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.farcaster.AddressSwapIdPair}
 */
proto.farcaster.FundingAddressesResponse.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.farcaster.AddressSwapIdPair, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.farcaster.FundingAddressesResponse} returns this
 */
proto.farcaster.FundingAddressesResponse.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.farcaster.AddressSwapIdPair.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.farcaster.AddressSwapIdPair.AddressSwapIdCase = {
  ADDRESS_SWAP_ID_NOT_SET: 0,
  SWAP_ID: 2
};

/**
 * @return {proto.farcaster.AddressSwapIdPair.AddressSwapIdCase}
 */
proto.farcaster.AddressSwapIdPair.prototype.getAddressSwapIdCase = function() {
  return /** @type {proto.farcaster.AddressSwapIdPair.AddressSwapIdCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.AddressSwapIdPair.oneofGroups_[0]));
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
proto.farcaster.AddressSwapIdPair.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.AddressSwapIdPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.AddressSwapIdPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.AddressSwapIdPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    swapId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.farcaster.AddressSwapIdPair}
 */
proto.farcaster.AddressSwapIdPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.AddressSwapIdPair;
  return proto.farcaster.AddressSwapIdPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.AddressSwapIdPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.AddressSwapIdPair}
 */
proto.farcaster.AddressSwapIdPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSwapId(value);
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
proto.farcaster.AddressSwapIdPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.AddressSwapIdPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.AddressSwapIdPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.AddressSwapIdPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.farcaster.AddressSwapIdPair.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.AddressSwapIdPair} returns this
 */
proto.farcaster.AddressSwapIdPair.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string swap_id = 2;
 * @return {string}
 */
proto.farcaster.AddressSwapIdPair.prototype.getSwapId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.AddressSwapIdPair} returns this
 */
proto.farcaster.AddressSwapIdPair.prototype.setSwapId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.farcaster.AddressSwapIdPair.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.AddressSwapIdPair} returns this
 */
proto.farcaster.AddressSwapIdPair.prototype.clearSwapId = function() {
  return jspb.Message.setOneofField(this, 2, proto.farcaster.AddressSwapIdPair.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.AddressSwapIdPair.prototype.hasSwapId = function() {
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
proto.farcaster.MakeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.MakeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.MakeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.MakeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    network: jspb.Message.getFieldWithDefault(msg, 2, 0),
    accordantBlockchain: jspb.Message.getFieldWithDefault(msg, 3, 0),
    arbitratingBlockchain: jspb.Message.getFieldWithDefault(msg, 4, 0),
    accordantAmount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    arbitratingAmount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    arbitratingAddr: jspb.Message.getFieldWithDefault(msg, 7, ""),
    accordantAddr: jspb.Message.getFieldWithDefault(msg, 8, ""),
    cancelTimelock: jspb.Message.getFieldWithDefault(msg, 9, 0),
    punishTimelock: jspb.Message.getFieldWithDefault(msg, 10, 0),
    feeStrategy: jspb.Message.getFieldWithDefault(msg, 11, ""),
    makerRole: jspb.Message.getFieldWithDefault(msg, 12, 0),
    publicIpAddr: jspb.Message.getFieldWithDefault(msg, 13, ""),
    publicPort: jspb.Message.getFieldWithDefault(msg, 14, 0)
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
 * @return {!proto.farcaster.MakeRequest}
 */
proto.farcaster.MakeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.MakeRequest;
  return proto.farcaster.MakeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.MakeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.MakeRequest}
 */
proto.farcaster.MakeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.farcaster.Network} */ (reader.readEnum());
      msg.setNetwork(value);
      break;
    case 3:
      var value = /** @type {!proto.farcaster.Blockchain} */ (reader.readEnum());
      msg.setAccordantBlockchain(value);
      break;
    case 4:
      var value = /** @type {!proto.farcaster.Blockchain} */ (reader.readEnum());
      msg.setArbitratingBlockchain(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAccordantAmount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setArbitratingAmount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setArbitratingAddr(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccordantAddr(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCancelTimelock(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPunishTimelock(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeeStrategy(value);
      break;
    case 12:
      var value = /** @type {!proto.farcaster.SwapRole} */ (reader.readEnum());
      msg.setMakerRole(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicIpAddr(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPublicPort(value);
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
proto.farcaster.MakeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.MakeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.MakeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.MakeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getNetwork();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAccordantBlockchain();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getArbitratingBlockchain();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAccordantAmount();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getArbitratingAmount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getArbitratingAddr();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAccordantAddr();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCancelTimelock();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getPunishTimelock();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getFeeStrategy();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getMakerRole();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getPublicIpAddr();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPublicPort();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.MakeRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Network network = 2;
 * @return {!proto.farcaster.Network}
 */
proto.farcaster.MakeRequest.prototype.getNetwork = function() {
  return /** @type {!proto.farcaster.Network} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.farcaster.Network} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Blockchain accordant_blockchain = 3;
 * @return {!proto.farcaster.Blockchain}
 */
proto.farcaster.MakeRequest.prototype.getAccordantBlockchain = function() {
  return /** @type {!proto.farcaster.Blockchain} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.farcaster.Blockchain} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setAccordantBlockchain = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Blockchain arbitrating_blockchain = 4;
 * @return {!proto.farcaster.Blockchain}
 */
proto.farcaster.MakeRequest.prototype.getArbitratingBlockchain = function() {
  return /** @type {!proto.farcaster.Blockchain} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.farcaster.Blockchain} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setArbitratingBlockchain = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional uint64 accordant_amount = 5;
 * @return {number}
 */
proto.farcaster.MakeRequest.prototype.getAccordantAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setAccordantAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 arbitrating_amount = 6;
 * @return {number}
 */
proto.farcaster.MakeRequest.prototype.getArbitratingAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setArbitratingAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string arbitrating_addr = 7;
 * @return {string}
 */
proto.farcaster.MakeRequest.prototype.getArbitratingAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setArbitratingAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string accordant_addr = 8;
 * @return {string}
 */
proto.farcaster.MakeRequest.prototype.getAccordantAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setAccordantAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint32 cancel_timelock = 9;
 * @return {number}
 */
proto.farcaster.MakeRequest.prototype.getCancelTimelock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setCancelTimelock = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 punish_timelock = 10;
 * @return {number}
 */
proto.farcaster.MakeRequest.prototype.getPunishTimelock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setPunishTimelock = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string fee_strategy = 11;
 * @return {string}
 */
proto.farcaster.MakeRequest.prototype.getFeeStrategy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setFeeStrategy = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional SwapRole maker_role = 12;
 * @return {!proto.farcaster.SwapRole}
 */
proto.farcaster.MakeRequest.prototype.getMakerRole = function() {
  return /** @type {!proto.farcaster.SwapRole} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.farcaster.SwapRole} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setMakerRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional string public_ip_addr = 13;
 * @return {string}
 */
proto.farcaster.MakeRequest.prototype.getPublicIpAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setPublicIpAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional uint32 public_port = 14;
 * @return {number}
 */
proto.farcaster.MakeRequest.prototype.getPublicPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.MakeRequest} returns this
 */
proto.farcaster.MakeRequest.prototype.setPublicPort = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
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
proto.farcaster.MakeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.MakeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.MakeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.MakeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offer: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.farcaster.MakeResponse}
 */
proto.farcaster.MakeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.MakeResponse;
  return proto.farcaster.MakeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.MakeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.MakeResponse}
 */
proto.farcaster.MakeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOffer(value);
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
proto.farcaster.MakeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.MakeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.MakeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.MakeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOffer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.MakeResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.MakeResponse} returns this
 */
proto.farcaster.MakeResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string offer = 2;
 * @return {string}
 */
proto.farcaster.MakeResponse.prototype.getOffer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.MakeResponse} returns this
 */
proto.farcaster.MakeResponse.prototype.setOffer = function(value) {
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
proto.farcaster.TakeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.TakeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.TakeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.TakeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    publicOffer: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bitcoinAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    moneroAddress: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.farcaster.TakeRequest}
 */
proto.farcaster.TakeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.TakeRequest;
  return proto.farcaster.TakeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.TakeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.TakeRequest}
 */
proto.farcaster.TakeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicOffer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBitcoinAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMoneroAddress(value);
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
proto.farcaster.TakeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.TakeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.TakeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.TakeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPublicOffer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBitcoinAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMoneroAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.TakeRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.TakeRequest} returns this
 */
proto.farcaster.TakeRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string public_offer = 2;
 * @return {string}
 */
proto.farcaster.TakeRequest.prototype.getPublicOffer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.TakeRequest} returns this
 */
proto.farcaster.TakeRequest.prototype.setPublicOffer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bitcoin_address = 3;
 * @return {string}
 */
proto.farcaster.TakeRequest.prototype.getBitcoinAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.TakeRequest} returns this
 */
proto.farcaster.TakeRequest.prototype.setBitcoinAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string monero_address = 4;
 * @return {string}
 */
proto.farcaster.TakeRequest.prototype.getMoneroAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.TakeRequest} returns this
 */
proto.farcaster.TakeRequest.prototype.setMoneroAddress = function(value) {
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
proto.farcaster.TakeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.TakeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.TakeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.TakeResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.farcaster.TakeResponse}
 */
proto.farcaster.TakeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.TakeResponse;
  return proto.farcaster.TakeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.TakeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.TakeResponse}
 */
proto.farcaster.TakeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
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
proto.farcaster.TakeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.TakeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.TakeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.TakeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.TakeResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.TakeResponse} returns this
 */
proto.farcaster.TakeResponse.prototype.setId = function(value) {
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
proto.farcaster.RevokeOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.RevokeOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.RevokeOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RevokeOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    publicOffer: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.farcaster.RevokeOfferRequest}
 */
proto.farcaster.RevokeOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.RevokeOfferRequest;
  return proto.farcaster.RevokeOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.RevokeOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.RevokeOfferRequest}
 */
proto.farcaster.RevokeOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicOffer(value);
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
proto.farcaster.RevokeOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.RevokeOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.RevokeOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RevokeOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPublicOffer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.RevokeOfferRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RevokeOfferRequest} returns this
 */
proto.farcaster.RevokeOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string public_offer = 2;
 * @return {string}
 */
proto.farcaster.RevokeOfferRequest.prototype.getPublicOffer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.RevokeOfferRequest} returns this
 */
proto.farcaster.RevokeOfferRequest.prototype.setPublicOffer = function(value) {
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
proto.farcaster.RevokeOfferResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.RevokeOfferResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.RevokeOfferResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RevokeOfferResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.farcaster.RevokeOfferResponse}
 */
proto.farcaster.RevokeOfferResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.RevokeOfferResponse;
  return proto.farcaster.RevokeOfferResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.RevokeOfferResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.RevokeOfferResponse}
 */
proto.farcaster.RevokeOfferResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
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
proto.farcaster.RevokeOfferResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.RevokeOfferResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.RevokeOfferResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RevokeOfferResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.RevokeOfferResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RevokeOfferResponse} returns this
 */
proto.farcaster.RevokeOfferResponse.prototype.setId = function(value) {
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
proto.farcaster.AbortSwapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.AbortSwapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.AbortSwapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.AbortSwapRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    swapId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.farcaster.AbortSwapRequest}
 */
proto.farcaster.AbortSwapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.AbortSwapRequest;
  return proto.farcaster.AbortSwapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.AbortSwapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.AbortSwapRequest}
 */
proto.farcaster.AbortSwapRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSwapId(value);
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
proto.farcaster.AbortSwapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.AbortSwapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.AbortSwapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.AbortSwapRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSwapId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.AbortSwapRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.AbortSwapRequest} returns this
 */
proto.farcaster.AbortSwapRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string swap_id = 2;
 * @return {string}
 */
proto.farcaster.AbortSwapRequest.prototype.getSwapId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.AbortSwapRequest} returns this
 */
proto.farcaster.AbortSwapRequest.prototype.setSwapId = function(value) {
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
proto.farcaster.AbortSwapResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.AbortSwapResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.AbortSwapResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.AbortSwapResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.farcaster.AbortSwapResponse}
 */
proto.farcaster.AbortSwapResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.AbortSwapResponse;
  return proto.farcaster.AbortSwapResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.AbortSwapResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.AbortSwapResponse}
 */
proto.farcaster.AbortSwapResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
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
proto.farcaster.AbortSwapResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.AbortSwapResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.AbortSwapResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.AbortSwapResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.AbortSwapResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.AbortSwapResponse} returns this
 */
proto.farcaster.AbortSwapResponse.prototype.setId = function(value) {
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
proto.farcaster.ProgressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.ProgressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.ProgressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ProgressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    swapId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.farcaster.ProgressRequest}
 */
proto.farcaster.ProgressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.ProgressRequest;
  return proto.farcaster.ProgressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.ProgressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.ProgressRequest}
 */
proto.farcaster.ProgressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSwapId(value);
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
proto.farcaster.ProgressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.ProgressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.ProgressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ProgressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSwapId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.ProgressRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.ProgressRequest} returns this
 */
proto.farcaster.ProgressRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string swap_id = 2;
 * @return {string}
 */
proto.farcaster.ProgressRequest.prototype.getSwapId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.ProgressRequest} returns this
 */
proto.farcaster.ProgressRequest.prototype.setSwapId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.farcaster.ProgressResponse.repeatedFields_ = [2];



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
proto.farcaster.ProgressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.ProgressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.ProgressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ProgressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    progressList: jspb.Message.toObjectList(msg.getProgressList(),
    proto.farcaster.Progress.toObject, includeInstance)
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
 * @return {!proto.farcaster.ProgressResponse}
 */
proto.farcaster.ProgressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.ProgressResponse;
  return proto.farcaster.ProgressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.ProgressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.ProgressResponse}
 */
proto.farcaster.ProgressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.farcaster.Progress;
      reader.readMessage(value,proto.farcaster.Progress.deserializeBinaryFromReader);
      msg.addProgress(value);
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
proto.farcaster.ProgressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.ProgressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.ProgressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ProgressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getProgressList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.farcaster.Progress.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.ProgressResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.ProgressResponse} returns this
 */
proto.farcaster.ProgressResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Progress progress = 2;
 * @return {!Array<!proto.farcaster.Progress>}
 */
proto.farcaster.ProgressResponse.prototype.getProgressList = function() {
  return /** @type{!Array<!proto.farcaster.Progress>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.farcaster.Progress, 2));
};


/**
 * @param {!Array<!proto.farcaster.Progress>} value
 * @return {!proto.farcaster.ProgressResponse} returns this
*/
proto.farcaster.ProgressResponse.prototype.setProgressList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.farcaster.Progress=} opt_value
 * @param {number=} opt_index
 * @return {!proto.farcaster.Progress}
 */
proto.farcaster.ProgressResponse.prototype.addProgress = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.farcaster.Progress, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.farcaster.ProgressResponse} returns this
 */
proto.farcaster.ProgressResponse.prototype.clearProgressList = function() {
  return this.setProgressList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.farcaster.Progress.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.farcaster.Progress.ProgressCase = {
  PROGRESS_NOT_SET: 0,
  MESSAGE: 1,
  STATE_UPDATE: 2,
  STATE_TRANSITION: 3,
  FAILURE: 4,
  SUCCESS: 5
};

/**
 * @return {proto.farcaster.Progress.ProgressCase}
 */
proto.farcaster.Progress.prototype.getProgressCase = function() {
  return /** @type {proto.farcaster.Progress.ProgressCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.Progress.oneofGroups_[0]));
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
proto.farcaster.Progress.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.Progress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.Progress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.Progress.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stateUpdate: (f = msg.getStateUpdate()) && proto.farcaster.State.toObject(includeInstance, f),
    stateTransition: (f = msg.getStateTransition()) && proto.farcaster.StateTransition.toObject(includeInstance, f),
    failure: jspb.Message.getFieldWithDefault(msg, 4, ""),
    success: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.farcaster.Progress}
 */
proto.farcaster.Progress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.Progress;
  return proto.farcaster.Progress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.Progress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.Progress}
 */
proto.farcaster.Progress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = new proto.farcaster.State;
      reader.readMessage(value,proto.farcaster.State.deserializeBinaryFromReader);
      msg.setStateUpdate(value);
      break;
    case 3:
      var value = new proto.farcaster.StateTransition;
      reader.readMessage(value,proto.farcaster.StateTransition.deserializeBinaryFromReader);
      msg.setStateTransition(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailure(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuccess(value);
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
proto.farcaster.Progress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.Progress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.Progress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.Progress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStateUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.farcaster.State.serializeBinaryToWriter
    );
  }
  f = message.getStateTransition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.farcaster.StateTransition.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.farcaster.Progress.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.Progress} returns this
 */
proto.farcaster.Progress.prototype.setMessage = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.farcaster.Progress.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.Progress} returns this
 */
proto.farcaster.Progress.prototype.clearMessage = function() {
  return jspb.Message.setOneofField(this, 1, proto.farcaster.Progress.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.Progress.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional State state_update = 2;
 * @return {?proto.farcaster.State}
 */
proto.farcaster.Progress.prototype.getStateUpdate = function() {
  return /** @type{?proto.farcaster.State} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.State, 2));
};


/**
 * @param {?proto.farcaster.State|undefined} value
 * @return {!proto.farcaster.Progress} returns this
*/
proto.farcaster.Progress.prototype.setStateUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.farcaster.Progress.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.Progress} returns this
 */
proto.farcaster.Progress.prototype.clearStateUpdate = function() {
  return this.setStateUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.Progress.prototype.hasStateUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StateTransition state_transition = 3;
 * @return {?proto.farcaster.StateTransition}
 */
proto.farcaster.Progress.prototype.getStateTransition = function() {
  return /** @type{?proto.farcaster.StateTransition} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.StateTransition, 3));
};


/**
 * @param {?proto.farcaster.StateTransition|undefined} value
 * @return {!proto.farcaster.Progress} returns this
*/
proto.farcaster.Progress.prototype.setStateTransition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.farcaster.Progress.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.Progress} returns this
 */
proto.farcaster.Progress.prototype.clearStateTransition = function() {
  return this.setStateTransition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.Progress.prototype.hasStateTransition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string failure = 4;
 * @return {string}
 */
proto.farcaster.Progress.prototype.getFailure = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.Progress} returns this
 */
proto.farcaster.Progress.prototype.setFailure = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.farcaster.Progress.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.Progress} returns this
 */
proto.farcaster.Progress.prototype.clearFailure = function() {
  return jspb.Message.setOneofField(this, 4, proto.farcaster.Progress.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.Progress.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string success = 5;
 * @return {string}
 */
proto.farcaster.Progress.prototype.getSuccess = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.Progress} returns this
 */
proto.farcaster.Progress.prototype.setSuccess = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.farcaster.Progress.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.Progress} returns this
 */
proto.farcaster.Progress.prototype.clearSuccess = function() {
  return jspb.Message.setOneofField(this, 5, proto.farcaster.Progress.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.Progress.prototype.hasSuccess = function() {
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
proto.farcaster.StateTransition.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.StateTransition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.StateTransition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.StateTransition.toObject = function(includeInstance, msg) {
  var f, obj = {
    oldState: (f = msg.getOldState()) && proto.farcaster.State.toObject(includeInstance, f),
    newState: (f = msg.getNewState()) && proto.farcaster.State.toObject(includeInstance, f)
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
 * @return {!proto.farcaster.StateTransition}
 */
proto.farcaster.StateTransition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.StateTransition;
  return proto.farcaster.StateTransition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.StateTransition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.StateTransition}
 */
proto.farcaster.StateTransition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.farcaster.State;
      reader.readMessage(value,proto.farcaster.State.deserializeBinaryFromReader);
      msg.setOldState(value);
      break;
    case 2:
      var value = new proto.farcaster.State;
      reader.readMessage(value,proto.farcaster.State.deserializeBinaryFromReader);
      msg.setNewState(value);
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
proto.farcaster.StateTransition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.StateTransition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.StateTransition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.StateTransition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOldState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.farcaster.State.serializeBinaryToWriter
    );
  }
  f = message.getNewState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.farcaster.State.serializeBinaryToWriter
    );
  }
};


/**
 * optional State old_state = 1;
 * @return {?proto.farcaster.State}
 */
proto.farcaster.StateTransition.prototype.getOldState = function() {
  return /** @type{?proto.farcaster.State} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.State, 1));
};


/**
 * @param {?proto.farcaster.State|undefined} value
 * @return {!proto.farcaster.StateTransition} returns this
*/
proto.farcaster.StateTransition.prototype.setOldState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.StateTransition} returns this
 */
proto.farcaster.StateTransition.prototype.clearOldState = function() {
  return this.setOldState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.StateTransition.prototype.hasOldState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional State new_state = 2;
 * @return {?proto.farcaster.State}
 */
proto.farcaster.StateTransition.prototype.getNewState = function() {
  return /** @type{?proto.farcaster.State} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.State, 2));
};


/**
 * @param {?proto.farcaster.State|undefined} value
 * @return {!proto.farcaster.StateTransition} returns this
*/
proto.farcaster.StateTransition.prototype.setNewState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.StateTransition} returns this
 */
proto.farcaster.StateTransition.prototype.clearNewState = function() {
  return this.setNewState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.StateTransition.prototype.hasNewState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.farcaster.State.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11]];

/**
 * @enum {number}
 */
proto.farcaster.State.StateCase = {
  STATE_NOT_SET: 0,
  START_A: 1,
  COMMIT_A: 2,
  REVEAL_A: 3,
  REFUND_SIG_A: 4,
  FINISH_A: 5,
  START_B: 6,
  COMMIT_B: 7,
  REVEAL_B: 8,
  CORE_ARB_B: 9,
  BUY_SIG_B: 10,
  FINISH_B: 11
};

/**
 * @return {proto.farcaster.State.StateCase}
 */
proto.farcaster.State.prototype.getStateCase = function() {
  return /** @type {proto.farcaster.State.StateCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.State.oneofGroups_[0]));
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
proto.farcaster.State.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.State.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.State} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.State.toObject = function(includeInstance, msg) {
  var f, obj = {
    startA: (f = msg.getStartA()) && proto.farcaster.StartA.toObject(includeInstance, f),
    commitA: (f = msg.getCommitA()) && proto.farcaster.CommitA.toObject(includeInstance, f),
    revealA: (f = msg.getRevealA()) && proto.farcaster.RevealA.toObject(includeInstance, f),
    refundSigA: (f = msg.getRefundSigA()) && proto.farcaster.RefundSigA.toObject(includeInstance, f),
    finishA: (f = msg.getFinishA()) && proto.farcaster.FinishA.toObject(includeInstance, f),
    startB: (f = msg.getStartB()) && proto.farcaster.StartB.toObject(includeInstance, f),
    commitB: (f = msg.getCommitB()) && proto.farcaster.CommitB.toObject(includeInstance, f),
    revealB: (f = msg.getRevealB()) && proto.farcaster.RevealB.toObject(includeInstance, f),
    coreArbB: (f = msg.getCoreArbB()) && proto.farcaster.CoreArbB.toObject(includeInstance, f),
    buySigB: (f = msg.getBuySigB()) && proto.farcaster.BuySigB.toObject(includeInstance, f),
    finishB: (f = msg.getFinishB()) && proto.farcaster.FinishB.toObject(includeInstance, f)
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
 * @return {!proto.farcaster.State}
 */
proto.farcaster.State.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.State;
  return proto.farcaster.State.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.State} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.State}
 */
proto.farcaster.State.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.farcaster.StartA;
      reader.readMessage(value,proto.farcaster.StartA.deserializeBinaryFromReader);
      msg.setStartA(value);
      break;
    case 2:
      var value = new proto.farcaster.CommitA;
      reader.readMessage(value,proto.farcaster.CommitA.deserializeBinaryFromReader);
      msg.setCommitA(value);
      break;
    case 3:
      var value = new proto.farcaster.RevealA;
      reader.readMessage(value,proto.farcaster.RevealA.deserializeBinaryFromReader);
      msg.setRevealA(value);
      break;
    case 4:
      var value = new proto.farcaster.RefundSigA;
      reader.readMessage(value,proto.farcaster.RefundSigA.deserializeBinaryFromReader);
      msg.setRefundSigA(value);
      break;
    case 5:
      var value = new proto.farcaster.FinishA;
      reader.readMessage(value,proto.farcaster.FinishA.deserializeBinaryFromReader);
      msg.setFinishA(value);
      break;
    case 6:
      var value = new proto.farcaster.StartB;
      reader.readMessage(value,proto.farcaster.StartB.deserializeBinaryFromReader);
      msg.setStartB(value);
      break;
    case 7:
      var value = new proto.farcaster.CommitB;
      reader.readMessage(value,proto.farcaster.CommitB.deserializeBinaryFromReader);
      msg.setCommitB(value);
      break;
    case 8:
      var value = new proto.farcaster.RevealB;
      reader.readMessage(value,proto.farcaster.RevealB.deserializeBinaryFromReader);
      msg.setRevealB(value);
      break;
    case 9:
      var value = new proto.farcaster.CoreArbB;
      reader.readMessage(value,proto.farcaster.CoreArbB.deserializeBinaryFromReader);
      msg.setCoreArbB(value);
      break;
    case 10:
      var value = new proto.farcaster.BuySigB;
      reader.readMessage(value,proto.farcaster.BuySigB.deserializeBinaryFromReader);
      msg.setBuySigB(value);
      break;
    case 11:
      var value = new proto.farcaster.FinishB;
      reader.readMessage(value,proto.farcaster.FinishB.deserializeBinaryFromReader);
      msg.setFinishB(value);
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
proto.farcaster.State.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.State.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.State} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.State.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartA();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.farcaster.StartA.serializeBinaryToWriter
    );
  }
  f = message.getCommitA();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.farcaster.CommitA.serializeBinaryToWriter
    );
  }
  f = message.getRevealA();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.farcaster.RevealA.serializeBinaryToWriter
    );
  }
  f = message.getRefundSigA();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.farcaster.RefundSigA.serializeBinaryToWriter
    );
  }
  f = message.getFinishA();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.farcaster.FinishA.serializeBinaryToWriter
    );
  }
  f = message.getStartB();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.farcaster.StartB.serializeBinaryToWriter
    );
  }
  f = message.getCommitB();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.farcaster.CommitB.serializeBinaryToWriter
    );
  }
  f = message.getRevealB();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.farcaster.RevealB.serializeBinaryToWriter
    );
  }
  f = message.getCoreArbB();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.farcaster.CoreArbB.serializeBinaryToWriter
    );
  }
  f = message.getBuySigB();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.farcaster.BuySigB.serializeBinaryToWriter
    );
  }
  f = message.getFinishB();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.farcaster.FinishB.serializeBinaryToWriter
    );
  }
};


/**
 * optional StartA start_a = 1;
 * @return {?proto.farcaster.StartA}
 */
proto.farcaster.State.prototype.getStartA = function() {
  return /** @type{?proto.farcaster.StartA} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.StartA, 1));
};


/**
 * @param {?proto.farcaster.StartA|undefined} value
 * @return {!proto.farcaster.State} returns this
*/
proto.farcaster.State.prototype.setStartA = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.farcaster.State.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearStartA = function() {
  return this.setStartA(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasStartA = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CommitA commit_a = 2;
 * @return {?proto.farcaster.CommitA}
 */
proto.farcaster.State.prototype.getCommitA = function() {
  return /** @type{?proto.farcaster.CommitA} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.CommitA, 2));
};


/**
 * @param {?proto.farcaster.CommitA|undefined} value
 * @return {!proto.farcaster.State} returns this
*/
proto.farcaster.State.prototype.setCommitA = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.farcaster.State.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearCommitA = function() {
  return this.setCommitA(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasCommitA = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RevealA reveal_a = 3;
 * @return {?proto.farcaster.RevealA}
 */
proto.farcaster.State.prototype.getRevealA = function() {
  return /** @type{?proto.farcaster.RevealA} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.RevealA, 3));
};


/**
 * @param {?proto.farcaster.RevealA|undefined} value
 * @return {!proto.farcaster.State} returns this
*/
proto.farcaster.State.prototype.setRevealA = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.farcaster.State.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearRevealA = function() {
  return this.setRevealA(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasRevealA = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RefundSigA refund_sig_a = 4;
 * @return {?proto.farcaster.RefundSigA}
 */
proto.farcaster.State.prototype.getRefundSigA = function() {
  return /** @type{?proto.farcaster.RefundSigA} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.RefundSigA, 4));
};


/**
 * @param {?proto.farcaster.RefundSigA|undefined} value
 * @return {!proto.farcaster.State} returns this
*/
proto.farcaster.State.prototype.setRefundSigA = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.farcaster.State.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearRefundSigA = function() {
  return this.setRefundSigA(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasRefundSigA = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FinishA finish_a = 5;
 * @return {?proto.farcaster.FinishA}
 */
proto.farcaster.State.prototype.getFinishA = function() {
  return /** @type{?proto.farcaster.FinishA} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.FinishA, 5));
};


/**
 * @param {?proto.farcaster.FinishA|undefined} value
 * @return {!proto.farcaster.State} returns this
*/
proto.farcaster.State.prototype.setFinishA = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.farcaster.State.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearFinishA = function() {
  return this.setFinishA(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasFinishA = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional StartB start_b = 6;
 * @return {?proto.farcaster.StartB}
 */
proto.farcaster.State.prototype.getStartB = function() {
  return /** @type{?proto.farcaster.StartB} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.StartB, 6));
};


/**
 * @param {?proto.farcaster.StartB|undefined} value
 * @return {!proto.farcaster.State} returns this
*/
proto.farcaster.State.prototype.setStartB = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.farcaster.State.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearStartB = function() {
  return this.setStartB(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasStartB = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CommitB commit_b = 7;
 * @return {?proto.farcaster.CommitB}
 */
proto.farcaster.State.prototype.getCommitB = function() {
  return /** @type{?proto.farcaster.CommitB} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.CommitB, 7));
};


/**
 * @param {?proto.farcaster.CommitB|undefined} value
 * @return {!proto.farcaster.State} returns this
*/
proto.farcaster.State.prototype.setCommitB = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.farcaster.State.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearCommitB = function() {
  return this.setCommitB(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasCommitB = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RevealB reveal_b = 8;
 * @return {?proto.farcaster.RevealB}
 */
proto.farcaster.State.prototype.getRevealB = function() {
  return /** @type{?proto.farcaster.RevealB} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.RevealB, 8));
};


/**
 * @param {?proto.farcaster.RevealB|undefined} value
 * @return {!proto.farcaster.State} returns this
*/
proto.farcaster.State.prototype.setRevealB = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.farcaster.State.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearRevealB = function() {
  return this.setRevealB(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasRevealB = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CoreArbB core_arb_b = 9;
 * @return {?proto.farcaster.CoreArbB}
 */
proto.farcaster.State.prototype.getCoreArbB = function() {
  return /** @type{?proto.farcaster.CoreArbB} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.CoreArbB, 9));
};


/**
 * @param {?proto.farcaster.CoreArbB|undefined} value
 * @return {!proto.farcaster.State} returns this
*/
proto.farcaster.State.prototype.setCoreArbB = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.farcaster.State.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearCoreArbB = function() {
  return this.setCoreArbB(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasCoreArbB = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional BuySigB buy_sig_b = 10;
 * @return {?proto.farcaster.BuySigB}
 */
proto.farcaster.State.prototype.getBuySigB = function() {
  return /** @type{?proto.farcaster.BuySigB} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.BuySigB, 10));
};


/**
 * @param {?proto.farcaster.BuySigB|undefined} value
 * @return {!proto.farcaster.State} returns this
*/
proto.farcaster.State.prototype.setBuySigB = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.farcaster.State.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearBuySigB = function() {
  return this.setBuySigB(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasBuySigB = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional FinishB finish_b = 11;
 * @return {?proto.farcaster.FinishB}
 */
proto.farcaster.State.prototype.getFinishB = function() {
  return /** @type{?proto.farcaster.FinishB} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.FinishB, 11));
};


/**
 * @param {?proto.farcaster.FinishB|undefined} value
 * @return {!proto.farcaster.State} returns this
*/
proto.farcaster.State.prototype.setFinishB = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.farcaster.State.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearFinishB = function() {
  return this.setFinishB(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasFinishB = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.farcaster.StartA.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.StartA.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.StartA} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.StartA.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.farcaster.StartA}
 */
proto.farcaster.StartA.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.StartA;
  return proto.farcaster.StartA.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.StartA} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.StartA}
 */
proto.farcaster.StartA.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.farcaster.StartA.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.StartA.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.StartA} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.StartA.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.farcaster.CommitA.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.CommitA.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.CommitA} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CommitA.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.farcaster.CommitA}
 */
proto.farcaster.CommitA.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.CommitA;
  return proto.farcaster.CommitA.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.CommitA} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.CommitA}
 */
proto.farcaster.CommitA.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.farcaster.CommitA.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.CommitA.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.CommitA} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CommitA.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.farcaster.RevealA.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.RevealA.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.RevealA} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RevealA.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.farcaster.RevealA}
 */
proto.farcaster.RevealA.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.RevealA;
  return proto.farcaster.RevealA.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.RevealA} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.RevealA}
 */
proto.farcaster.RevealA.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.farcaster.RevealA.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.RevealA.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.RevealA} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RevealA.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.farcaster.FinishA.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.FinishA.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.FinishA} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.FinishA.toObject = function(includeInstance, msg) {
  var f, obj = {
    outcome: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.farcaster.FinishA}
 */
proto.farcaster.FinishA.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.FinishA;
  return proto.farcaster.FinishA.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.FinishA} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.FinishA}
 */
proto.farcaster.FinishA.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.farcaster.Outcome} */ (reader.readEnum());
      msg.setOutcome(value);
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
proto.farcaster.FinishA.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.FinishA.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.FinishA} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.FinishA.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutcome();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional Outcome outcome = 1;
 * @return {!proto.farcaster.Outcome}
 */
proto.farcaster.FinishA.prototype.getOutcome = function() {
  return /** @type {!proto.farcaster.Outcome} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.farcaster.Outcome} value
 * @return {!proto.farcaster.FinishA} returns this
 */
proto.farcaster.FinishA.prototype.setOutcome = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.farcaster.StartB.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.StartB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.StartB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.StartB.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.farcaster.StartB}
 */
proto.farcaster.StartB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.StartB;
  return proto.farcaster.StartB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.StartB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.StartB}
 */
proto.farcaster.StartB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.farcaster.StartB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.StartB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.StartB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.StartB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.farcaster.CommitB.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.CommitB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.CommitB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CommitB.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.farcaster.CommitB}
 */
proto.farcaster.CommitB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.CommitB;
  return proto.farcaster.CommitB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.CommitB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.CommitB}
 */
proto.farcaster.CommitB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.farcaster.CommitB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.CommitB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.CommitB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CommitB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.farcaster.RevealB.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.RevealB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.RevealB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RevealB.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.farcaster.RevealB}
 */
proto.farcaster.RevealB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.RevealB;
  return proto.farcaster.RevealB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.RevealB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.RevealB}
 */
proto.farcaster.RevealB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.farcaster.RevealB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.RevealB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.RevealB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RevealB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.farcaster.FinishB.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.FinishB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.FinishB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.FinishB.toObject = function(includeInstance, msg) {
  var f, obj = {
    outcome: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.farcaster.FinishB}
 */
proto.farcaster.FinishB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.FinishB;
  return proto.farcaster.FinishB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.FinishB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.FinishB}
 */
proto.farcaster.FinishB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.farcaster.Outcome} */ (reader.readEnum());
      msg.setOutcome(value);
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
proto.farcaster.FinishB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.FinishB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.FinishB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.FinishB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutcome();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional Outcome outcome = 1;
 * @return {!proto.farcaster.Outcome}
 */
proto.farcaster.FinishB.prototype.getOutcome = function() {
  return /** @type {!proto.farcaster.Outcome} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.farcaster.Outcome} value
 * @return {!proto.farcaster.FinishB} returns this
 */
proto.farcaster.FinishB.prototype.setOutcome = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.farcaster.RefundSigA.oneofGroups_ = [[9],[10],[11],[12],[13],[14]];

/**
 * @enum {number}
 */
proto.farcaster.RefundSigA.ArbLockConfirmationsCase = {
  ARB_LOCK_CONFIRMATIONS_NOT_SET: 0,
  ARB_CONFS: 9
};

/**
 * @return {proto.farcaster.RefundSigA.ArbLockConfirmationsCase}
 */
proto.farcaster.RefundSigA.prototype.getArbLockConfirmationsCase = function() {
  return /** @type {proto.farcaster.RefundSigA.ArbLockConfirmationsCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.RefundSigA.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.farcaster.RefundSigA.AccLockConfirmationsCase = {
  ACC_LOCK_CONFIRMATIONS_NOT_SET: 0,
  ACC_CONFS: 10
};

/**
 * @return {proto.farcaster.RefundSigA.AccLockConfirmationsCase}
 */
proto.farcaster.RefundSigA.prototype.getAccLockConfirmationsCase = function() {
  return /** @type {proto.farcaster.RefundSigA.AccLockConfirmationsCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.RefundSigA.oneofGroups_[1]));
};

/**
 * @enum {number}
 */
proto.farcaster.RefundSigA.BlocksUntilCancelPossibleCase = {
  BLOCKS_UNTIL_CANCEL_POSSIBLE_NOT_SET: 0,
  CANCEL_BLOCKS: 11
};

/**
 * @return {proto.farcaster.RefundSigA.BlocksUntilCancelPossibleCase}
 */
proto.farcaster.RefundSigA.prototype.getBlocksUntilCancelPossibleCase = function() {
  return /** @type {proto.farcaster.RefundSigA.BlocksUntilCancelPossibleCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.RefundSigA.oneofGroups_[2]));
};

/**
 * @enum {number}
 */
proto.farcaster.RefundSigA.CancelConfirmationsCase = {
  CANCEL_CONFIRMATIONS_NOT_SET: 0,
  CANCEL_CONFS: 12
};

/**
 * @return {proto.farcaster.RefundSigA.CancelConfirmationsCase}
 */
proto.farcaster.RefundSigA.prototype.getCancelConfirmationsCase = function() {
  return /** @type {proto.farcaster.RefundSigA.CancelConfirmationsCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.RefundSigA.oneofGroups_[3]));
};

/**
 * @enum {number}
 */
proto.farcaster.RefundSigA.BlocksUntilPunishPossibleCase = {
  BLOCKS_UNTIL_PUNISH_POSSIBLE_NOT_SET: 0,
  PUNISH_BLOCKS: 13
};

/**
 * @return {proto.farcaster.RefundSigA.BlocksUntilPunishPossibleCase}
 */
proto.farcaster.RefundSigA.prototype.getBlocksUntilPunishPossibleCase = function() {
  return /** @type {proto.farcaster.RefundSigA.BlocksUntilPunishPossibleCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.RefundSigA.oneofGroups_[4]));
};

/**
 * @enum {number}
 */
proto.farcaster.RefundSigA.BlocksUntilSafeBuyCase = {
  BLOCKS_UNTIL_SAFE_BUY_NOT_SET: 0,
  BUY_BLOCKS: 14
};

/**
 * @return {proto.farcaster.RefundSigA.BlocksUntilSafeBuyCase}
 */
proto.farcaster.RefundSigA.prototype.getBlocksUntilSafeBuyCase = function() {
  return /** @type {proto.farcaster.RefundSigA.BlocksUntilSafeBuyCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.RefundSigA.oneofGroups_[5]));
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
proto.farcaster.RefundSigA.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.RefundSigA.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.RefundSigA} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RefundSigA.toObject = function(includeInstance, msg) {
  var f, obj = {
    arbBlockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    accBlockHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    arbLocked: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    accLocked: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    buyPublished: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    cancelSeen: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    refundSeen: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    overfunded: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    arbConfs: jspb.Message.getFieldWithDefault(msg, 9, 0),
    accConfs: jspb.Message.getFieldWithDefault(msg, 10, 0),
    cancelBlocks: jspb.Message.getFieldWithDefault(msg, 11, 0),
    cancelConfs: jspb.Message.getFieldWithDefault(msg, 12, 0),
    punishBlocks: jspb.Message.getFieldWithDefault(msg, 13, 0),
    buyBlocks: jspb.Message.getFieldWithDefault(msg, 14, 0)
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
 * @return {!proto.farcaster.RefundSigA}
 */
proto.farcaster.RefundSigA.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.RefundSigA;
  return proto.farcaster.RefundSigA.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.RefundSigA} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.RefundSigA}
 */
proto.farcaster.RefundSigA.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setArbBlockHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAccBlockHeight(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArbLocked(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccLocked(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBuyPublished(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCancelSeen(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRefundSeen(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverfunded(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setArbConfs(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccConfs(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCancelBlocks(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCancelConfs(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPunishBlocks(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBuyBlocks(value);
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
proto.farcaster.RefundSigA.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.RefundSigA.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.RefundSigA} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RefundSigA.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArbBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAccBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getArbLocked();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAccLocked();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getBuyPublished();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCancelSeen();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getRefundSeen();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getOverfunded();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeUint32(
      14,
      f
    );
  }
};


/**
 * optional uint64 arb_block_height = 1;
 * @return {number}
 */
proto.farcaster.RefundSigA.prototype.getArbBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setArbBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 acc_block_height = 2;
 * @return {number}
 */
proto.farcaster.RefundSigA.prototype.getAccBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setAccBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool arb_locked = 3;
 * @return {boolean}
 */
proto.farcaster.RefundSigA.prototype.getArbLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setArbLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool acc_locked = 4;
 * @return {boolean}
 */
proto.farcaster.RefundSigA.prototype.getAccLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setAccLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool buy_published = 5;
 * @return {boolean}
 */
proto.farcaster.RefundSigA.prototype.getBuyPublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setBuyPublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool cancel_seen = 6;
 * @return {boolean}
 */
proto.farcaster.RefundSigA.prototype.getCancelSeen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setCancelSeen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool refund_seen = 7;
 * @return {boolean}
 */
proto.farcaster.RefundSigA.prototype.getRefundSeen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setRefundSeen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool overfunded = 8;
 * @return {boolean}
 */
proto.farcaster.RefundSigA.prototype.getOverfunded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setOverfunded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional uint32 arb_confs = 9;
 * @return {number}
 */
proto.farcaster.RefundSigA.prototype.getArbConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setArbConfs = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.farcaster.RefundSigA.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.clearArbConfs = function() {
  return jspb.Message.setOneofField(this, 9, proto.farcaster.RefundSigA.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.RefundSigA.prototype.hasArbConfs = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 acc_confs = 10;
 * @return {number}
 */
proto.farcaster.RefundSigA.prototype.getAccConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setAccConfs = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.farcaster.RefundSigA.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.clearAccConfs = function() {
  return jspb.Message.setOneofField(this, 10, proto.farcaster.RefundSigA.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.RefundSigA.prototype.hasAccConfs = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 cancel_blocks = 11;
 * @return {number}
 */
proto.farcaster.RefundSigA.prototype.getCancelBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setCancelBlocks = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.farcaster.RefundSigA.oneofGroups_[2], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.clearCancelBlocks = function() {
  return jspb.Message.setOneofField(this, 11, proto.farcaster.RefundSigA.oneofGroups_[2], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.RefundSigA.prototype.hasCancelBlocks = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint32 cancel_confs = 12;
 * @return {number}
 */
proto.farcaster.RefundSigA.prototype.getCancelConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setCancelConfs = function(value) {
  return jspb.Message.setOneofField(this, 12, proto.farcaster.RefundSigA.oneofGroups_[3], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.clearCancelConfs = function() {
  return jspb.Message.setOneofField(this, 12, proto.farcaster.RefundSigA.oneofGroups_[3], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.RefundSigA.prototype.hasCancelConfs = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int64 punish_blocks = 13;
 * @return {number}
 */
proto.farcaster.RefundSigA.prototype.getPunishBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setPunishBlocks = function(value) {
  return jspb.Message.setOneofField(this, 13, proto.farcaster.RefundSigA.oneofGroups_[4], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.clearPunishBlocks = function() {
  return jspb.Message.setOneofField(this, 13, proto.farcaster.RefundSigA.oneofGroups_[4], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.RefundSigA.prototype.hasPunishBlocks = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional uint32 buy_blocks = 14;
 * @return {number}
 */
proto.farcaster.RefundSigA.prototype.getBuyBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.setBuyBlocks = function(value) {
  return jspb.Message.setOneofField(this, 14, proto.farcaster.RefundSigA.oneofGroups_[5], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.RefundSigA} returns this
 */
proto.farcaster.RefundSigA.prototype.clearBuyBlocks = function() {
  return jspb.Message.setOneofField(this, 14, proto.farcaster.RefundSigA.oneofGroups_[5], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.RefundSigA.prototype.hasBuyBlocks = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.farcaster.CoreArbB.oneofGroups_ = [[9],[10],[11],[12],[13],[14]];

/**
 * @enum {number}
 */
proto.farcaster.CoreArbB.ArbLockConfirmationsCase = {
  ARB_LOCK_CONFIRMATIONS_NOT_SET: 0,
  ARB_CONFS: 9
};

/**
 * @return {proto.farcaster.CoreArbB.ArbLockConfirmationsCase}
 */
proto.farcaster.CoreArbB.prototype.getArbLockConfirmationsCase = function() {
  return /** @type {proto.farcaster.CoreArbB.ArbLockConfirmationsCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.CoreArbB.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.farcaster.CoreArbB.AccLockConfirmationsCase = {
  ACC_LOCK_CONFIRMATIONS_NOT_SET: 0,
  ACC_CONFS: 10
};

/**
 * @return {proto.farcaster.CoreArbB.AccLockConfirmationsCase}
 */
proto.farcaster.CoreArbB.prototype.getAccLockConfirmationsCase = function() {
  return /** @type {proto.farcaster.CoreArbB.AccLockConfirmationsCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.CoreArbB.oneofGroups_[1]));
};

/**
 * @enum {number}
 */
proto.farcaster.CoreArbB.BlocksUntilCancelPossibleCase = {
  BLOCKS_UNTIL_CANCEL_POSSIBLE_NOT_SET: 0,
  CANCEL_BLOCKS: 11
};

/**
 * @return {proto.farcaster.CoreArbB.BlocksUntilCancelPossibleCase}
 */
proto.farcaster.CoreArbB.prototype.getBlocksUntilCancelPossibleCase = function() {
  return /** @type {proto.farcaster.CoreArbB.BlocksUntilCancelPossibleCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.CoreArbB.oneofGroups_[2]));
};

/**
 * @enum {number}
 */
proto.farcaster.CoreArbB.CancelConfirmationsCase = {
  CANCEL_CONFIRMATIONS_NOT_SET: 0,
  CANCEL_CONFS: 12
};

/**
 * @return {proto.farcaster.CoreArbB.CancelConfirmationsCase}
 */
proto.farcaster.CoreArbB.prototype.getCancelConfirmationsCase = function() {
  return /** @type {proto.farcaster.CoreArbB.CancelConfirmationsCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.CoreArbB.oneofGroups_[3]));
};

/**
 * @enum {number}
 */
proto.farcaster.CoreArbB.BlocksUntilRefundCase = {
  BLOCKS_UNTIL_REFUND_NOT_SET: 0,
  REFUND_BLOCKS: 13
};

/**
 * @return {proto.farcaster.CoreArbB.BlocksUntilRefundCase}
 */
proto.farcaster.CoreArbB.prototype.getBlocksUntilRefundCase = function() {
  return /** @type {proto.farcaster.CoreArbB.BlocksUntilRefundCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.CoreArbB.oneofGroups_[4]));
};

/**
 * @enum {number}
 */
proto.farcaster.CoreArbB.BlocksUntilPunishPossibleCase = {
  BLOCKS_UNTIL_PUNISH_POSSIBLE_NOT_SET: 0,
  PUNISH_BLOCKS: 14
};

/**
 * @return {proto.farcaster.CoreArbB.BlocksUntilPunishPossibleCase}
 */
proto.farcaster.CoreArbB.prototype.getBlocksUntilPunishPossibleCase = function() {
  return /** @type {proto.farcaster.CoreArbB.BlocksUntilPunishPossibleCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.CoreArbB.oneofGroups_[5]));
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
proto.farcaster.CoreArbB.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.CoreArbB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.CoreArbB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CoreArbB.toObject = function(includeInstance, msg) {
  var f, obj = {
    arbBlockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    accBlockHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    arbLocked: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    accLocked: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    buyPublished: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    refundSeen: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    arbConfs: jspb.Message.getFieldWithDefault(msg, 9, 0),
    accConfs: jspb.Message.getFieldWithDefault(msg, 10, 0),
    cancelBlocks: jspb.Message.getFieldWithDefault(msg, 11, 0),
    cancelConfs: jspb.Message.getFieldWithDefault(msg, 12, 0),
    refundBlocks: jspb.Message.getFieldWithDefault(msg, 13, 0),
    punishBlocks: jspb.Message.getFieldWithDefault(msg, 14, 0)
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
 * @return {!proto.farcaster.CoreArbB}
 */
proto.farcaster.CoreArbB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.CoreArbB;
  return proto.farcaster.CoreArbB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.CoreArbB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.CoreArbB}
 */
proto.farcaster.CoreArbB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setArbBlockHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAccBlockHeight(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArbLocked(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccLocked(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBuyPublished(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRefundSeen(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setArbConfs(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccConfs(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCancelBlocks(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCancelConfs(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRefundBlocks(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPunishBlocks(value);
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
proto.farcaster.CoreArbB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.CoreArbB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.CoreArbB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CoreArbB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArbBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAccBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getArbLocked();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAccLocked();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getBuyPublished();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getRefundSeen();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt64(
      14,
      f
    );
  }
};


/**
 * optional uint64 arb_block_height = 1;
 * @return {number}
 */
proto.farcaster.CoreArbB.prototype.getArbBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.setArbBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 acc_block_height = 2;
 * @return {number}
 */
proto.farcaster.CoreArbB.prototype.getAccBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.setAccBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool arb_locked = 3;
 * @return {boolean}
 */
proto.farcaster.CoreArbB.prototype.getArbLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.setArbLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool acc_locked = 4;
 * @return {boolean}
 */
proto.farcaster.CoreArbB.prototype.getAccLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.setAccLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool buy_published = 5;
 * @return {boolean}
 */
proto.farcaster.CoreArbB.prototype.getBuyPublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.setBuyPublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool refund_seen = 7;
 * @return {boolean}
 */
proto.farcaster.CoreArbB.prototype.getRefundSeen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.setRefundSeen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional uint32 arb_confs = 9;
 * @return {number}
 */
proto.farcaster.CoreArbB.prototype.getArbConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.setArbConfs = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.farcaster.CoreArbB.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.clearArbConfs = function() {
  return jspb.Message.setOneofField(this, 9, proto.farcaster.CoreArbB.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.CoreArbB.prototype.hasArbConfs = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 acc_confs = 10;
 * @return {number}
 */
proto.farcaster.CoreArbB.prototype.getAccConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.setAccConfs = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.farcaster.CoreArbB.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.clearAccConfs = function() {
  return jspb.Message.setOneofField(this, 10, proto.farcaster.CoreArbB.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.CoreArbB.prototype.hasAccConfs = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 cancel_blocks = 11;
 * @return {number}
 */
proto.farcaster.CoreArbB.prototype.getCancelBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.setCancelBlocks = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.farcaster.CoreArbB.oneofGroups_[2], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.clearCancelBlocks = function() {
  return jspb.Message.setOneofField(this, 11, proto.farcaster.CoreArbB.oneofGroups_[2], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.CoreArbB.prototype.hasCancelBlocks = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint32 cancel_confs = 12;
 * @return {number}
 */
proto.farcaster.CoreArbB.prototype.getCancelConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.setCancelConfs = function(value) {
  return jspb.Message.setOneofField(this, 12, proto.farcaster.CoreArbB.oneofGroups_[3], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.clearCancelConfs = function() {
  return jspb.Message.setOneofField(this, 12, proto.farcaster.CoreArbB.oneofGroups_[3], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.CoreArbB.prototype.hasCancelConfs = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int64 refund_blocks = 13;
 * @return {number}
 */
proto.farcaster.CoreArbB.prototype.getRefundBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.setRefundBlocks = function(value) {
  return jspb.Message.setOneofField(this, 13, proto.farcaster.CoreArbB.oneofGroups_[4], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.clearRefundBlocks = function() {
  return jspb.Message.setOneofField(this, 13, proto.farcaster.CoreArbB.oneofGroups_[4], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.CoreArbB.prototype.hasRefundBlocks = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int64 punish_blocks = 14;
 * @return {number}
 */
proto.farcaster.CoreArbB.prototype.getPunishBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.setPunishBlocks = function(value) {
  return jspb.Message.setOneofField(this, 14, proto.farcaster.CoreArbB.oneofGroups_[5], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.CoreArbB} returns this
 */
proto.farcaster.CoreArbB.prototype.clearPunishBlocks = function() {
  return jspb.Message.setOneofField(this, 14, proto.farcaster.CoreArbB.oneofGroups_[5], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.CoreArbB.prototype.hasPunishBlocks = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.farcaster.BuySigB.oneofGroups_ = [[4],[5],[6],[7],[8],[9],[10]];

/**
 * @enum {number}
 */
proto.farcaster.BuySigB.ArbLockConfirmationsCase = {
  ARB_LOCK_CONFIRMATIONS_NOT_SET: 0,
  ARB_CONFS: 4
};

/**
 * @return {proto.farcaster.BuySigB.ArbLockConfirmationsCase}
 */
proto.farcaster.BuySigB.prototype.getArbLockConfirmationsCase = function() {
  return /** @type {proto.farcaster.BuySigB.ArbLockConfirmationsCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.BuySigB.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.farcaster.BuySigB.AccLockConfirmationsCase = {
  ACC_LOCK_CONFIRMATIONS_NOT_SET: 0,
  ACC_CONFS: 5
};

/**
 * @return {proto.farcaster.BuySigB.AccLockConfirmationsCase}
 */
proto.farcaster.BuySigB.prototype.getAccLockConfirmationsCase = function() {
  return /** @type {proto.farcaster.BuySigB.AccLockConfirmationsCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.BuySigB.oneofGroups_[1]));
};

/**
 * @enum {number}
 */
proto.farcaster.BuySigB.BlocksUntilCancelPossibleCase = {
  BLOCKS_UNTIL_CANCEL_POSSIBLE_NOT_SET: 0,
  CANCEL_BLOCKS: 6
};

/**
 * @return {proto.farcaster.BuySigB.BlocksUntilCancelPossibleCase}
 */
proto.farcaster.BuySigB.prototype.getBlocksUntilCancelPossibleCase = function() {
  return /** @type {proto.farcaster.BuySigB.BlocksUntilCancelPossibleCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.BuySigB.oneofGroups_[2]));
};

/**
 * @enum {number}
 */
proto.farcaster.BuySigB.CancelConfirmationsCase = {
  CANCEL_CONFIRMATIONS_NOT_SET: 0,
  CANCEL_CONFS: 7
};

/**
 * @return {proto.farcaster.BuySigB.CancelConfirmationsCase}
 */
proto.farcaster.BuySigB.prototype.getCancelConfirmationsCase = function() {
  return /** @type {proto.farcaster.BuySigB.CancelConfirmationsCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.BuySigB.oneofGroups_[3]));
};

/**
 * @enum {number}
 */
proto.farcaster.BuySigB.BlocksUntilRefundCase = {
  BLOCKS_UNTIL_REFUND_NOT_SET: 0,
  REFUND_BLOCKS: 8
};

/**
 * @return {proto.farcaster.BuySigB.BlocksUntilRefundCase}
 */
proto.farcaster.BuySigB.prototype.getBlocksUntilRefundCase = function() {
  return /** @type {proto.farcaster.BuySigB.BlocksUntilRefundCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.BuySigB.oneofGroups_[4]));
};

/**
 * @enum {number}
 */
proto.farcaster.BuySigB.BlocksUntilPunishPossibleCase = {
  BLOCKS_UNTIL_PUNISH_POSSIBLE_NOT_SET: 0,
  PUNISH_BLOCKS: 9
};

/**
 * @return {proto.farcaster.BuySigB.BlocksUntilPunishPossibleCase}
 */
proto.farcaster.BuySigB.prototype.getBlocksUntilPunishPossibleCase = function() {
  return /** @type {proto.farcaster.BuySigB.BlocksUntilPunishPossibleCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.BuySigB.oneofGroups_[5]));
};

/**
 * @enum {number}
 */
proto.farcaster.BuySigB.BlocksUntilSafeMoneroBuySweepCase = {
  BLOCKS_UNTIL_SAFE_MONERO_BUY_SWEEP_NOT_SET: 0,
  BUY_MONERO_BLOCKS: 10
};

/**
 * @return {proto.farcaster.BuySigB.BlocksUntilSafeMoneroBuySweepCase}
 */
proto.farcaster.BuySigB.prototype.getBlocksUntilSafeMoneroBuySweepCase = function() {
  return /** @type {proto.farcaster.BuySigB.BlocksUntilSafeMoneroBuySweepCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.BuySigB.oneofGroups_[6]));
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
proto.farcaster.BuySigB.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.BuySigB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.BuySigB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.BuySigB.toObject = function(includeInstance, msg) {
  var f, obj = {
    arbBlockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    accBlockHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    buyTxSeen: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    arbConfs: jspb.Message.getFieldWithDefault(msg, 4, 0),
    accConfs: jspb.Message.getFieldWithDefault(msg, 5, 0),
    cancelBlocks: jspb.Message.getFieldWithDefault(msg, 6, 0),
    cancelConfs: jspb.Message.getFieldWithDefault(msg, 7, 0),
    refundBlocks: jspb.Message.getFieldWithDefault(msg, 8, 0),
    punishBlocks: jspb.Message.getFieldWithDefault(msg, 9, 0),
    buyMoneroBlocks: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.farcaster.BuySigB}
 */
proto.farcaster.BuySigB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.BuySigB;
  return proto.farcaster.BuySigB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.BuySigB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.BuySigB}
 */
proto.farcaster.BuySigB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setArbBlockHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAccBlockHeight(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBuyTxSeen(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setArbConfs(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccConfs(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCancelBlocks(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCancelConfs(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRefundBlocks(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPunishBlocks(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBuyMoneroBlocks(value);
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
proto.farcaster.BuySigB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.BuySigB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.BuySigB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.BuySigB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArbBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAccBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getBuyTxSeen();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint32(
      10,
      f
    );
  }
};


/**
 * optional uint64 arb_block_height = 1;
 * @return {number}
 */
proto.farcaster.BuySigB.prototype.getArbBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.setArbBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 acc_block_height = 2;
 * @return {number}
 */
proto.farcaster.BuySigB.prototype.getAccBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.setAccBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool buy_tx_seen = 3;
 * @return {boolean}
 */
proto.farcaster.BuySigB.prototype.getBuyTxSeen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.setBuyTxSeen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint32 arb_confs = 4;
 * @return {number}
 */
proto.farcaster.BuySigB.prototype.getArbConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.setArbConfs = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.farcaster.BuySigB.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.clearArbConfs = function() {
  return jspb.Message.setOneofField(this, 4, proto.farcaster.BuySigB.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.BuySigB.prototype.hasArbConfs = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 acc_confs = 5;
 * @return {number}
 */
proto.farcaster.BuySigB.prototype.getAccConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.setAccConfs = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.farcaster.BuySigB.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.clearAccConfs = function() {
  return jspb.Message.setOneofField(this, 5, proto.farcaster.BuySigB.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.BuySigB.prototype.hasAccConfs = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 cancel_blocks = 6;
 * @return {number}
 */
proto.farcaster.BuySigB.prototype.getCancelBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.setCancelBlocks = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.farcaster.BuySigB.oneofGroups_[2], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.clearCancelBlocks = function() {
  return jspb.Message.setOneofField(this, 6, proto.farcaster.BuySigB.oneofGroups_[2], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.BuySigB.prototype.hasCancelBlocks = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 cancel_confs = 7;
 * @return {number}
 */
proto.farcaster.BuySigB.prototype.getCancelConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.setCancelConfs = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.farcaster.BuySigB.oneofGroups_[3], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.clearCancelConfs = function() {
  return jspb.Message.setOneofField(this, 7, proto.farcaster.BuySigB.oneofGroups_[3], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.BuySigB.prototype.hasCancelConfs = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int64 refund_blocks = 8;
 * @return {number}
 */
proto.farcaster.BuySigB.prototype.getRefundBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.setRefundBlocks = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.farcaster.BuySigB.oneofGroups_[4], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.clearRefundBlocks = function() {
  return jspb.Message.setOneofField(this, 8, proto.farcaster.BuySigB.oneofGroups_[4], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.BuySigB.prototype.hasRefundBlocks = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int64 punish_blocks = 9;
 * @return {number}
 */
proto.farcaster.BuySigB.prototype.getPunishBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.setPunishBlocks = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.farcaster.BuySigB.oneofGroups_[5], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.clearPunishBlocks = function() {
  return jspb.Message.setOneofField(this, 9, proto.farcaster.BuySigB.oneofGroups_[5], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.BuySigB.prototype.hasPunishBlocks = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 buy_monero_blocks = 10;
 * @return {number}
 */
proto.farcaster.BuySigB.prototype.getBuyMoneroBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.setBuyMoneroBlocks = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.farcaster.BuySigB.oneofGroups_[6], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.BuySigB} returns this
 */
proto.farcaster.BuySigB.prototype.clearBuyMoneroBlocks = function() {
  return jspb.Message.setOneofField(this, 10, proto.farcaster.BuySigB.oneofGroups_[6], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.BuySigB.prototype.hasBuyMoneroBlocks = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.farcaster.ConnectSwapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.ConnectSwapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.ConnectSwapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ConnectSwapRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    swapId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.farcaster.ConnectSwapRequest}
 */
proto.farcaster.ConnectSwapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.ConnectSwapRequest;
  return proto.farcaster.ConnectSwapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.ConnectSwapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.ConnectSwapRequest}
 */
proto.farcaster.ConnectSwapRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSwapId(value);
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
proto.farcaster.ConnectSwapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.ConnectSwapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.ConnectSwapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ConnectSwapRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSwapId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.ConnectSwapRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.ConnectSwapRequest} returns this
 */
proto.farcaster.ConnectSwapRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string swap_id = 2;
 * @return {string}
 */
proto.farcaster.ConnectSwapRequest.prototype.getSwapId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.ConnectSwapRequest} returns this
 */
proto.farcaster.ConnectSwapRequest.prototype.setSwapId = function(value) {
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
proto.farcaster.ConnectSwapResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.ConnectSwapResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.ConnectSwapResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ConnectSwapResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.farcaster.ConnectSwapResponse}
 */
proto.farcaster.ConnectSwapResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.ConnectSwapResponse;
  return proto.farcaster.ConnectSwapResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.ConnectSwapResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.ConnectSwapResponse}
 */
proto.farcaster.ConnectSwapResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
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
proto.farcaster.ConnectSwapResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.ConnectSwapResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.ConnectSwapResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ConnectSwapResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.ConnectSwapResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.ConnectSwapResponse} returns this
 */
proto.farcaster.ConnectSwapResponse.prototype.setId = function(value) {
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
proto.farcaster.NeedsFundingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.NeedsFundingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.NeedsFundingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.NeedsFundingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    blockchain: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.farcaster.NeedsFundingRequest}
 */
proto.farcaster.NeedsFundingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.NeedsFundingRequest;
  return proto.farcaster.NeedsFundingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.NeedsFundingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.NeedsFundingRequest}
 */
proto.farcaster.NeedsFundingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.farcaster.Blockchain} */ (reader.readEnum());
      msg.setBlockchain(value);
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
proto.farcaster.NeedsFundingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.NeedsFundingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.NeedsFundingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.NeedsFundingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBlockchain();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.NeedsFundingRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.NeedsFundingRequest} returns this
 */
proto.farcaster.NeedsFundingRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Blockchain blockchain = 2;
 * @return {!proto.farcaster.Blockchain}
 */
proto.farcaster.NeedsFundingRequest.prototype.getBlockchain = function() {
  return /** @type {!proto.farcaster.Blockchain} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.farcaster.Blockchain} value
 * @return {!proto.farcaster.NeedsFundingRequest} returns this
 */
proto.farcaster.NeedsFundingRequest.prototype.setBlockchain = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.farcaster.NeedsFundingResponse.repeatedFields_ = [2];



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
proto.farcaster.NeedsFundingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.NeedsFundingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.NeedsFundingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.NeedsFundingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fundingInfosList: jspb.Message.toObjectList(msg.getFundingInfosList(),
    proto.farcaster.FundingInfo.toObject, includeInstance)
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
 * @return {!proto.farcaster.NeedsFundingResponse}
 */
proto.farcaster.NeedsFundingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.NeedsFundingResponse;
  return proto.farcaster.NeedsFundingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.NeedsFundingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.NeedsFundingResponse}
 */
proto.farcaster.NeedsFundingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.farcaster.FundingInfo;
      reader.readMessage(value,proto.farcaster.FundingInfo.deserializeBinaryFromReader);
      msg.addFundingInfos(value);
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
proto.farcaster.NeedsFundingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.NeedsFundingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.NeedsFundingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.NeedsFundingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getFundingInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.farcaster.FundingInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.NeedsFundingResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.NeedsFundingResponse} returns this
 */
proto.farcaster.NeedsFundingResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated FundingInfo funding_infos = 2;
 * @return {!Array<!proto.farcaster.FundingInfo>}
 */
proto.farcaster.NeedsFundingResponse.prototype.getFundingInfosList = function() {
  return /** @type{!Array<!proto.farcaster.FundingInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.farcaster.FundingInfo, 2));
};


/**
 * @param {!Array<!proto.farcaster.FundingInfo>} value
 * @return {!proto.farcaster.NeedsFundingResponse} returns this
*/
proto.farcaster.NeedsFundingResponse.prototype.setFundingInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.farcaster.FundingInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.farcaster.FundingInfo}
 */
proto.farcaster.NeedsFundingResponse.prototype.addFundingInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.farcaster.FundingInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.farcaster.NeedsFundingResponse} returns this
 */
proto.farcaster.NeedsFundingResponse.prototype.clearFundingInfosList = function() {
  return this.setFundingInfosList([]);
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
proto.farcaster.FundingInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.FundingInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.FundingInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.FundingInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.farcaster.FundingInfo}
 */
proto.farcaster.FundingInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.FundingInfo;
  return proto.farcaster.FundingInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.FundingInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.FundingInfo}
 */
proto.farcaster.FundingInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSwapId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
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
proto.farcaster.FundingInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.FundingInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.FundingInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.FundingInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string swap_id = 1;
 * @return {string}
 */
proto.farcaster.FundingInfo.prototype.getSwapId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.FundingInfo} returns this
 */
proto.farcaster.FundingInfo.prototype.setSwapId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.farcaster.FundingInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.FundingInfo} returns this
 */
proto.farcaster.FundingInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 amount = 3;
 * @return {number}
 */
proto.farcaster.FundingInfo.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.FundingInfo} returns this
 */
proto.farcaster.FundingInfo.prototype.setAmount = function(value) {
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
proto.farcaster.SweepAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.SweepAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.SweepAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.SweepAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sourceAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    destinationAddress: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.farcaster.SweepAddressRequest}
 */
proto.farcaster.SweepAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.SweepAddressRequest;
  return proto.farcaster.SweepAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.SweepAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.SweepAddressRequest}
 */
proto.farcaster.SweepAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationAddress(value);
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
proto.farcaster.SweepAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.SweepAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.SweepAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.SweepAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSourceAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestinationAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.SweepAddressRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.SweepAddressRequest} returns this
 */
proto.farcaster.SweepAddressRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string source_address = 2;
 * @return {string}
 */
proto.farcaster.SweepAddressRequest.prototype.getSourceAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.SweepAddressRequest} returns this
 */
proto.farcaster.SweepAddressRequest.prototype.setSourceAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destination_address = 3;
 * @return {string}
 */
proto.farcaster.SweepAddressRequest.prototype.getDestinationAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.SweepAddressRequest} returns this
 */
proto.farcaster.SweepAddressRequest.prototype.setDestinationAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.farcaster.SweepAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.SweepAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.SweepAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.SweepAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.farcaster.SweepAddressResponse}
 */
proto.farcaster.SweepAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.SweepAddressResponse;
  return proto.farcaster.SweepAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.SweepAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.SweepAddressResponse}
 */
proto.farcaster.SweepAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.farcaster.SweepAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.SweepAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.SweepAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.SweepAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.SweepAddressResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.SweepAddressResponse} returns this
 */
proto.farcaster.SweepAddressResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.farcaster.SweepAddressResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.SweepAddressResponse} returns this
 */
proto.farcaster.SweepAddressResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.farcaster.OfferSelector = {
  OPEN: 0,
  IN_PROGRESS: 1,
  ENDED: 2,
  ALL: 3
};

/**
 * @enum {number}
 */
proto.farcaster.CheckpointSelector = {
  ALL_CHECKPOINTS: 0,
  AVAILABLE_FOR_RESTORE: 1
};

/**
 * @enum {number}
 */
proto.farcaster.TradeRole = {
  MAKER: 0,
  TAKER: 1
};

/**
 * @enum {number}
 */
proto.farcaster.Outcome = {
  SUCCESSSWAP: 0,
  FAILUREREFUND: 1,
  FAILUREPUNISH: 2,
  FAILUREABORT: 3
};

/**
 * @enum {number}
 */
proto.farcaster.SwapRole = {
  ALICE: 0,
  BOB: 1
};

/**
 * @enum {number}
 */
proto.farcaster.Network = {
  MAINNET: 0,
  TESTNET: 1,
  LOCAL: 2
};

/**
 * @enum {number}
 */
proto.farcaster.Blockchain = {
  BITCOIN: 0,
  MONERO: 1
};

goog.object.extend(exports, proto.farcaster);
