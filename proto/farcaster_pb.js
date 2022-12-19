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
goog.exportSymbol('proto.farcaster.CheckpointEntry', null, global);
goog.exportSymbol('proto.farcaster.CheckpointSelector', null, global);
goog.exportSymbol('proto.farcaster.CheckpointsRequest', null, global);
goog.exportSymbol('proto.farcaster.CheckpointsResponse', null, global);
goog.exportSymbol('proto.farcaster.CompleteHealthReport', null, global);
goog.exportSymbol('proto.farcaster.ConnectSwapRequest', null, global);
goog.exportSymbol('proto.farcaster.ConnectSwapResponse', null, global);
goog.exportSymbol('proto.farcaster.DealInfo', null, global);
goog.exportSymbol('proto.farcaster.DealInfoRequest', null, global);
goog.exportSymbol('proto.farcaster.DealInfoResponse', null, global);
goog.exportSymbol('proto.farcaster.DealSelector', null, global);
goog.exportSymbol('proto.farcaster.DealStatus', null, global);
goog.exportSymbol('proto.farcaster.DeserializedDeal', null, global);
goog.exportSymbol('proto.farcaster.FundingAddressesRequest', null, global);
goog.exportSymbol('proto.farcaster.FundingAddressesResponse', null, global);
goog.exportSymbol('proto.farcaster.FundingInfo', null, global);
goog.exportSymbol('proto.farcaster.HealthCheckRequest', null, global);
goog.exportSymbol('proto.farcaster.HealthCheckResponse', null, global);
goog.exportSymbol('proto.farcaster.HealthCheckResponse.HealthReportCase', null, global);
goog.exportSymbol('proto.farcaster.InfoRequest', null, global);
goog.exportSymbol('proto.farcaster.InfoResponse', null, global);
goog.exportSymbol('proto.farcaster.ListDealsRequest', null, global);
goog.exportSymbol('proto.farcaster.ListDealsResponse', null, global);
goog.exportSymbol('proto.farcaster.MakeRequest', null, global);
goog.exportSymbol('proto.farcaster.MakeResponse', null, global);
goog.exportSymbol('proto.farcaster.NeedsFundingRequest', null, global);
goog.exportSymbol('proto.farcaster.NeedsFundingResponse', null, global);
goog.exportSymbol('proto.farcaster.Network', null, global);
goog.exportSymbol('proto.farcaster.NetworkSelector', null, global);
goog.exportSymbol('proto.farcaster.Outcome', null, global);
goog.exportSymbol('proto.farcaster.PeersRequest', null, global);
goog.exportSymbol('proto.farcaster.PeersResponse', null, global);
goog.exportSymbol('proto.farcaster.Progress', null, global);
goog.exportSymbol('proto.farcaster.Progress.ProgressCase', null, global);
goog.exportSymbol('proto.farcaster.ProgressRequest', null, global);
goog.exportSymbol('proto.farcaster.ProgressResponse', null, global);
goog.exportSymbol('proto.farcaster.ReducedHealthReport', null, global);
goog.exportSymbol('proto.farcaster.RestoreCheckpointRequest', null, global);
goog.exportSymbol('proto.farcaster.RestoreCheckpointResponse', null, global);
goog.exportSymbol('proto.farcaster.RevokeDealRequest', null, global);
goog.exportSymbol('proto.farcaster.RevokeDealResponse', null, global);
goog.exportSymbol('proto.farcaster.State', null, global);
goog.exportSymbol('proto.farcaster.State.AccLockConfirmationsCase', null, global);
goog.exportSymbol('proto.farcaster.State.ArbLockConfirmationsCase', null, global);
goog.exportSymbol('proto.farcaster.State.BlocksUntilCancelPossibleCase', null, global);
goog.exportSymbol('proto.farcaster.State.BlocksUntilPunishPossibleCase', null, global);
goog.exportSymbol('proto.farcaster.State.BlocksUntilSafeBuyCase', null, global);
goog.exportSymbol('proto.farcaster.State.BlocksUntilSafeMoneroBuySweepCase', null, global);
goog.exportSymbol('proto.farcaster.State.CancelConfirmationsCase', null, global);
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
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.farcaster.HealthCheckResponse.oneofGroups_);
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
proto.farcaster.CompleteHealthReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.CompleteHealthReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.CompleteHealthReport.displayName = 'proto.farcaster.CompleteHealthReport';
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
proto.farcaster.ReducedHealthReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.ReducedHealthReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.ReducedHealthReport.displayName = 'proto.farcaster.ReducedHealthReport';
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
proto.farcaster.DealInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.DealInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.DealInfoRequest.displayName = 'proto.farcaster.DealInfoRequest';
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
proto.farcaster.DealInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.DealInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.DealInfoResponse.displayName = 'proto.farcaster.DealInfoResponse';
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
proto.farcaster.DealInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.DealInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.DealInfo.displayName = 'proto.farcaster.DealInfo';
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
proto.farcaster.DeserializedDeal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.DeserializedDeal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.DeserializedDeal.displayName = 'proto.farcaster.DeserializedDeal';
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
proto.farcaster.ListDealsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.ListDealsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.ListDealsRequest.displayName = 'proto.farcaster.ListDealsRequest';
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
proto.farcaster.ListDealsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.farcaster.ListDealsResponse.repeatedFields_, null);
};
goog.inherits(proto.farcaster.ListDealsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.ListDealsResponse.displayName = 'proto.farcaster.ListDealsResponse';
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
proto.farcaster.RevokeDealRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.RevokeDealRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.RevokeDealRequest.displayName = 'proto.farcaster.RevokeDealRequest';
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
proto.farcaster.RevokeDealResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farcaster.RevokeDealResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farcaster.RevokeDealResponse.displayName = 'proto.farcaster.RevokeDealResponse';
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
    case 2:
      var value = /** @type {!proto.farcaster.NetworkSelector} */ (reader.readEnum());
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


/**
 * optional NetworkSelector selector = 2;
 * @return {!proto.farcaster.NetworkSelector}
 */
proto.farcaster.HealthCheckRequest.prototype.getSelector = function() {
  return /** @type {!proto.farcaster.NetworkSelector} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.farcaster.NetworkSelector} value
 * @return {!proto.farcaster.HealthCheckRequest} returns this
 */
proto.farcaster.HealthCheckRequest.prototype.setSelector = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.farcaster.HealthCheckResponse.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.farcaster.HealthCheckResponse.HealthReportCase = {
  HEALTH_REPORT_NOT_SET: 0,
  COMPLETE_HEALTH_REPORT: 2,
  REDUCED_HEALTH_REPORT: 3
};

/**
 * @return {proto.farcaster.HealthCheckResponse.HealthReportCase}
 */
proto.farcaster.HealthCheckResponse.prototype.getHealthReportCase = function() {
  return /** @type {proto.farcaster.HealthCheckResponse.HealthReportCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.HealthCheckResponse.oneofGroups_[0]));
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
    completeHealthReport: (f = msg.getCompleteHealthReport()) && proto.farcaster.CompleteHealthReport.toObject(includeInstance, f),
    reducedHealthReport: (f = msg.getReducedHealthReport()) && proto.farcaster.ReducedHealthReport.toObject(includeInstance, f)
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
      var value = new proto.farcaster.CompleteHealthReport;
      reader.readMessage(value,proto.farcaster.CompleteHealthReport.deserializeBinaryFromReader);
      msg.setCompleteHealthReport(value);
      break;
    case 3:
      var value = new proto.farcaster.ReducedHealthReport;
      reader.readMessage(value,proto.farcaster.ReducedHealthReport.deserializeBinaryFromReader);
      msg.setReducedHealthReport(value);
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
  f = message.getCompleteHealthReport();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.farcaster.CompleteHealthReport.serializeBinaryToWriter
    );
  }
  f = message.getReducedHealthReport();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.farcaster.ReducedHealthReport.serializeBinaryToWriter
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
 * optional CompleteHealthReport complete_health_report = 2;
 * @return {?proto.farcaster.CompleteHealthReport}
 */
proto.farcaster.HealthCheckResponse.prototype.getCompleteHealthReport = function() {
  return /** @type{?proto.farcaster.CompleteHealthReport} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.CompleteHealthReport, 2));
};


/**
 * @param {?proto.farcaster.CompleteHealthReport|undefined} value
 * @return {!proto.farcaster.HealthCheckResponse} returns this
*/
proto.farcaster.HealthCheckResponse.prototype.setCompleteHealthReport = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.farcaster.HealthCheckResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.HealthCheckResponse} returns this
 */
proto.farcaster.HealthCheckResponse.prototype.clearCompleteHealthReport = function() {
  return this.setCompleteHealthReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.HealthCheckResponse.prototype.hasCompleteHealthReport = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReducedHealthReport reduced_health_report = 3;
 * @return {?proto.farcaster.ReducedHealthReport}
 */
proto.farcaster.HealthCheckResponse.prototype.getReducedHealthReport = function() {
  return /** @type{?proto.farcaster.ReducedHealthReport} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.ReducedHealthReport, 3));
};


/**
 * @param {?proto.farcaster.ReducedHealthReport|undefined} value
 * @return {!proto.farcaster.HealthCheckResponse} returns this
*/
proto.farcaster.HealthCheckResponse.prototype.setReducedHealthReport = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.farcaster.HealthCheckResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.HealthCheckResponse} returns this
 */
proto.farcaster.HealthCheckResponse.prototype.clearReducedHealthReport = function() {
  return this.setReducedHealthReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.HealthCheckResponse.prototype.hasReducedHealthReport = function() {
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
proto.farcaster.CompleteHealthReport.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.CompleteHealthReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.CompleteHealthReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CompleteHealthReport.toObject = function(includeInstance, msg) {
  var f, obj = {
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
 * @return {!proto.farcaster.CompleteHealthReport}
 */
proto.farcaster.CompleteHealthReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.CompleteHealthReport;
  return proto.farcaster.CompleteHealthReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.CompleteHealthReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.CompleteHealthReport}
 */
proto.farcaster.CompleteHealthReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.farcaster.CompleteHealthReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.CompleteHealthReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.CompleteHealthReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.CompleteHealthReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
 * optional string bitcoin_mainnet_health = 2;
 * @return {string}
 */
proto.farcaster.CompleteHealthReport.prototype.getBitcoinMainnetHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.CompleteHealthReport} returns this
 */
proto.farcaster.CompleteHealthReport.prototype.setBitcoinMainnetHealth = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bitcoin_testnet_health = 3;
 * @return {string}
 */
proto.farcaster.CompleteHealthReport.prototype.getBitcoinTestnetHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.CompleteHealthReport} returns this
 */
proto.farcaster.CompleteHealthReport.prototype.setBitcoinTestnetHealth = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string bitcoin_local_health = 4;
 * @return {string}
 */
proto.farcaster.CompleteHealthReport.prototype.getBitcoinLocalHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.CompleteHealthReport} returns this
 */
proto.farcaster.CompleteHealthReport.prototype.setBitcoinLocalHealth = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string monero_mainnet_health = 5;
 * @return {string}
 */
proto.farcaster.CompleteHealthReport.prototype.getMoneroMainnetHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.CompleteHealthReport} returns this
 */
proto.farcaster.CompleteHealthReport.prototype.setMoneroMainnetHealth = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string monero_testnet_health = 6;
 * @return {string}
 */
proto.farcaster.CompleteHealthReport.prototype.getMoneroTestnetHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.CompleteHealthReport} returns this
 */
proto.farcaster.CompleteHealthReport.prototype.setMoneroTestnetHealth = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string monero_local_health = 7;
 * @return {string}
 */
proto.farcaster.CompleteHealthReport.prototype.getMoneroLocalHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.CompleteHealthReport} returns this
 */
proto.farcaster.CompleteHealthReport.prototype.setMoneroLocalHealth = function(value) {
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
proto.farcaster.ReducedHealthReport.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.ReducedHealthReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.ReducedHealthReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ReducedHealthReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    bitcoinHealth: jspb.Message.getFieldWithDefault(msg, 2, ""),
    moneroHealth: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.farcaster.ReducedHealthReport}
 */
proto.farcaster.ReducedHealthReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.ReducedHealthReport;
  return proto.farcaster.ReducedHealthReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.ReducedHealthReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.ReducedHealthReport}
 */
proto.farcaster.ReducedHealthReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBitcoinHealth(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMoneroHealth(value);
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
proto.farcaster.ReducedHealthReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.ReducedHealthReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.ReducedHealthReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ReducedHealthReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBitcoinHealth();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMoneroHealth();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string bitcoin_health = 2;
 * @return {string}
 */
proto.farcaster.ReducedHealthReport.prototype.getBitcoinHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.ReducedHealthReport} returns this
 */
proto.farcaster.ReducedHealthReport.prototype.setBitcoinHealth = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string monero_health = 7;
 * @return {string}
 */
proto.farcaster.ReducedHealthReport.prototype.getMoneroHealth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.ReducedHealthReport} returns this
 */
proto.farcaster.ReducedHealthReport.prototype.setMoneroHealth = function(value) {
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
    dealsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
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
      msg.addDeals(value);
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
  f = message.getDealsList();
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
 * repeated string deals = 8;
 * @return {!Array<string>}
 */
proto.farcaster.InfoResponse.prototype.getDealsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.setDealsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.addDeals = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.farcaster.InfoResponse} returns this
 */
proto.farcaster.InfoResponse.prototype.clearDealsList = function() {
  return this.setDealsList([]);
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
    deal: (f = msg.getDeal()) && proto.farcaster.DealInfo.toObject(includeInstance, f),
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
      var value = new proto.farcaster.DealInfo;
      reader.readMessage(value,proto.farcaster.DealInfo.deserializeBinaryFromReader);
      msg.setDeal(value);
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
  f = message.getDeal();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.farcaster.DealInfo.serializeBinaryToWriter
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
 * optional DealInfo deal = 5;
 * @return {?proto.farcaster.DealInfo}
 */
proto.farcaster.SwapInfoResponse.prototype.getDeal = function() {
  return /** @type{?proto.farcaster.DealInfo} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.DealInfo, 5));
};


/**
 * @param {?proto.farcaster.DealInfo|undefined} value
 * @return {!proto.farcaster.SwapInfoResponse} returns this
*/
proto.farcaster.SwapInfoResponse.prototype.setDeal = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.SwapInfoResponse} returns this
 */
proto.farcaster.SwapInfoResponse.prototype.clearDeal = function() {
  return this.setDeal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.SwapInfoResponse.prototype.hasDeal = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.farcaster.DealInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.DealInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.DealInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.DealInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    deal: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.farcaster.DealInfoRequest}
 */
proto.farcaster.DealInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.DealInfoRequest;
  return proto.farcaster.DealInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.DealInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.DealInfoRequest}
 */
proto.farcaster.DealInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDeal(value);
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
proto.farcaster.DealInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.DealInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.DealInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.DealInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDeal();
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
proto.farcaster.DealInfoRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.DealInfoRequest} returns this
 */
proto.farcaster.DealInfoRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string deal = 2;
 * @return {string}
 */
proto.farcaster.DealInfoRequest.prototype.getDeal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.DealInfoRequest} returns this
 */
proto.farcaster.DealInfoRequest.prototype.setDeal = function(value) {
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
proto.farcaster.DealInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.DealInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.DealInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.DealInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    deserializedDeal: (f = msg.getDeserializedDeal()) && proto.farcaster.DeserializedDeal.toObject(includeInstance, f),
    deal: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.farcaster.DealInfoResponse}
 */
proto.farcaster.DealInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.DealInfoResponse;
  return proto.farcaster.DealInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.DealInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.DealInfoResponse}
 */
proto.farcaster.DealInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.farcaster.DeserializedDeal;
      reader.readMessage(value,proto.farcaster.DeserializedDeal.deserializeBinaryFromReader);
      msg.setDeserializedDeal(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeal(value);
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
proto.farcaster.DealInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.DealInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.DealInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.DealInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDeserializedDeal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.farcaster.DeserializedDeal.serializeBinaryToWriter
    );
  }
  f = message.getDeal();
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
proto.farcaster.DealInfoResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.DealInfoResponse} returns this
 */
proto.farcaster.DealInfoResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional DeserializedDeal deserialized_deal = 2;
 * @return {?proto.farcaster.DeserializedDeal}
 */
proto.farcaster.DealInfoResponse.prototype.getDeserializedDeal = function() {
  return /** @type{?proto.farcaster.DeserializedDeal} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.DeserializedDeal, 2));
};


/**
 * @param {?proto.farcaster.DeserializedDeal|undefined} value
 * @return {!proto.farcaster.DealInfoResponse} returns this
*/
proto.farcaster.DealInfoResponse.prototype.setDeserializedDeal = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.DealInfoResponse} returns this
 */
proto.farcaster.DealInfoResponse.prototype.clearDeserializedDeal = function() {
  return this.setDeserializedDeal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.DealInfoResponse.prototype.hasDeserializedDeal = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string deal = 3;
 * @return {string}
 */
proto.farcaster.DealInfoResponse.prototype.getDeal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.DealInfoResponse} returns this
 */
proto.farcaster.DealInfoResponse.prototype.setDeal = function(value) {
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
proto.farcaster.DealInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.DealInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.DealInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.DealInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    deserializedDeal: (f = msg.getDeserializedDeal()) && proto.farcaster.DeserializedDeal.toObject(includeInstance, f),
    serializedDeal: jspb.Message.getFieldWithDefault(msg, 2, ""),
    localTradeRole: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dealStatus: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.farcaster.DealInfo}
 */
proto.farcaster.DealInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.DealInfo;
  return proto.farcaster.DealInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.DealInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.DealInfo}
 */
proto.farcaster.DealInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.farcaster.DeserializedDeal;
      reader.readMessage(value,proto.farcaster.DeserializedDeal.deserializeBinaryFromReader);
      msg.setDeserializedDeal(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerializedDeal(value);
      break;
    case 3:
      var value = /** @type {!proto.farcaster.TradeRole} */ (reader.readEnum());
      msg.setLocalTradeRole(value);
      break;
    case 4:
      var value = /** @type {!proto.farcaster.DealStatus} */ (reader.readEnum());
      msg.setDealStatus(value);
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
proto.farcaster.DealInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.DealInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.DealInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.DealInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeserializedDeal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.farcaster.DeserializedDeal.serializeBinaryToWriter
    );
  }
  f = message.getSerializedDeal();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocalTradeRole();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDealStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional DeserializedDeal deserialized_deal = 1;
 * @return {?proto.farcaster.DeserializedDeal}
 */
proto.farcaster.DealInfo.prototype.getDeserializedDeal = function() {
  return /** @type{?proto.farcaster.DeserializedDeal} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.DeserializedDeal, 1));
};


/**
 * @param {?proto.farcaster.DeserializedDeal|undefined} value
 * @return {!proto.farcaster.DealInfo} returns this
*/
proto.farcaster.DealInfo.prototype.setDeserializedDeal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.DealInfo} returns this
 */
proto.farcaster.DealInfo.prototype.clearDeserializedDeal = function() {
  return this.setDeserializedDeal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.DealInfo.prototype.hasDeserializedDeal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string serialized_deal = 2;
 * @return {string}
 */
proto.farcaster.DealInfo.prototype.getSerializedDeal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.DealInfo} returns this
 */
proto.farcaster.DealInfo.prototype.setSerializedDeal = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TradeRole local_trade_role = 3;
 * @return {!proto.farcaster.TradeRole}
 */
proto.farcaster.DealInfo.prototype.getLocalTradeRole = function() {
  return /** @type {!proto.farcaster.TradeRole} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.farcaster.TradeRole} value
 * @return {!proto.farcaster.DealInfo} returns this
 */
proto.farcaster.DealInfo.prototype.setLocalTradeRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional DealStatus deal_status = 4;
 * @return {!proto.farcaster.DealStatus}
 */
proto.farcaster.DealInfo.prototype.getDealStatus = function() {
  return /** @type {!proto.farcaster.DealStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.farcaster.DealStatus} value
 * @return {!proto.farcaster.DealInfo} returns this
 */
proto.farcaster.DealInfo.prototype.setDealStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
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
proto.farcaster.DeserializedDeal.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.DeserializedDeal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.DeserializedDeal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.DeserializedDeal.toObject = function(includeInstance, msg) {
  var f, obj = {
    arbitratingAmount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    accordantAmount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cancelTimelock: jspb.Message.getFieldWithDefault(msg, 3, 0),
    punishTimelock: jspb.Message.getFieldWithDefault(msg, 4, 0),
    feeStrategy: jspb.Message.getFieldWithDefault(msg, 5, ""),
    makerRole: jspb.Message.getFieldWithDefault(msg, 6, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    network: jspb.Message.getFieldWithDefault(msg, 8, 0),
    arbitratingBlockchain: jspb.Message.getFieldWithDefault(msg, 9, 0),
    accordantBlockchain: jspb.Message.getFieldWithDefault(msg, 10, 0),
    nodeId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    peerAddress: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.farcaster.DeserializedDeal}
 */
proto.farcaster.DeserializedDeal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.DeserializedDeal;
  return proto.farcaster.DeserializedDeal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.DeserializedDeal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.DeserializedDeal}
 */
proto.farcaster.DeserializedDeal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setArbitratingAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAccordantAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCancelTimelock(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPunishTimelock(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeeStrategy(value);
      break;
    case 6:
      var value = /** @type {!proto.farcaster.SwapRole} */ (reader.readEnum());
      msg.setMakerRole(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 8:
      var value = /** @type {!proto.farcaster.Network} */ (reader.readEnum());
      msg.setNetwork(value);
      break;
    case 9:
      var value = /** @type {!proto.farcaster.Blockchain} */ (reader.readEnum());
      msg.setArbitratingBlockchain(value);
      break;
    case 10:
      var value = /** @type {!proto.farcaster.Blockchain} */ (reader.readEnum());
      msg.setAccordantBlockchain(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 12:
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
proto.farcaster.DeserializedDeal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.DeserializedDeal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.DeserializedDeal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.DeserializedDeal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArbitratingAmount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAccordantAmount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCancelTimelock();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPunishTimelock();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getFeeStrategy();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMakerRole();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getNetwork();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getArbitratingBlockchain();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getAccordantBlockchain();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPeerAddress();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional uint64 arbitrating_amount = 1;
 * @return {number}
 */
proto.farcaster.DeserializedDeal.prototype.getArbitratingAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.DeserializedDeal} returns this
 */
proto.farcaster.DeserializedDeal.prototype.setArbitratingAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 accordant_amount = 2;
 * @return {number}
 */
proto.farcaster.DeserializedDeal.prototype.getAccordantAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.DeserializedDeal} returns this
 */
proto.farcaster.DeserializedDeal.prototype.setAccordantAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 cancel_timelock = 3;
 * @return {number}
 */
proto.farcaster.DeserializedDeal.prototype.getCancelTimelock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.DeserializedDeal} returns this
 */
proto.farcaster.DeserializedDeal.prototype.setCancelTimelock = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 punish_timelock = 4;
 * @return {number}
 */
proto.farcaster.DeserializedDeal.prototype.getPunishTimelock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.DeserializedDeal} returns this
 */
proto.farcaster.DeserializedDeal.prototype.setPunishTimelock = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string fee_strategy = 5;
 * @return {string}
 */
proto.farcaster.DeserializedDeal.prototype.getFeeStrategy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.DeserializedDeal} returns this
 */
proto.farcaster.DeserializedDeal.prototype.setFeeStrategy = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional SwapRole maker_role = 6;
 * @return {!proto.farcaster.SwapRole}
 */
proto.farcaster.DeserializedDeal.prototype.getMakerRole = function() {
  return /** @type {!proto.farcaster.SwapRole} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.farcaster.SwapRole} value
 * @return {!proto.farcaster.DeserializedDeal} returns this
 */
proto.farcaster.DeserializedDeal.prototype.setMakerRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string uuid = 7;
 * @return {string}
 */
proto.farcaster.DeserializedDeal.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.DeserializedDeal} returns this
 */
proto.farcaster.DeserializedDeal.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Network network = 8;
 * @return {!proto.farcaster.Network}
 */
proto.farcaster.DeserializedDeal.prototype.getNetwork = function() {
  return /** @type {!proto.farcaster.Network} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.farcaster.Network} value
 * @return {!proto.farcaster.DeserializedDeal} returns this
 */
proto.farcaster.DeserializedDeal.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional Blockchain arbitrating_blockchain = 9;
 * @return {!proto.farcaster.Blockchain}
 */
proto.farcaster.DeserializedDeal.prototype.getArbitratingBlockchain = function() {
  return /** @type {!proto.farcaster.Blockchain} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.farcaster.Blockchain} value
 * @return {!proto.farcaster.DeserializedDeal} returns this
 */
proto.farcaster.DeserializedDeal.prototype.setArbitratingBlockchain = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional Blockchain accordant_blockchain = 10;
 * @return {!proto.farcaster.Blockchain}
 */
proto.farcaster.DeserializedDeal.prototype.getAccordantBlockchain = function() {
  return /** @type {!proto.farcaster.Blockchain} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.farcaster.Blockchain} value
 * @return {!proto.farcaster.DeserializedDeal} returns this
 */
proto.farcaster.DeserializedDeal.prototype.setAccordantBlockchain = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string node_id = 11;
 * @return {string}
 */
proto.farcaster.DeserializedDeal.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.DeserializedDeal} returns this
 */
proto.farcaster.DeserializedDeal.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string peer_address = 12;
 * @return {string}
 */
proto.farcaster.DeserializedDeal.prototype.getPeerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.DeserializedDeal} returns this
 */
proto.farcaster.DeserializedDeal.prototype.setPeerAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
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
proto.farcaster.ListDealsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.ListDealsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.ListDealsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ListDealsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dealSelector: jspb.Message.getFieldWithDefault(msg, 2, 0),
    networkSelector: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.farcaster.ListDealsRequest}
 */
proto.farcaster.ListDealsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.ListDealsRequest;
  return proto.farcaster.ListDealsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.ListDealsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.ListDealsRequest}
 */
proto.farcaster.ListDealsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.farcaster.DealSelector} */ (reader.readEnum());
      msg.setDealSelector(value);
      break;
    case 3:
      var value = /** @type {!proto.farcaster.NetworkSelector} */ (reader.readEnum());
      msg.setNetworkSelector(value);
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
proto.farcaster.ListDealsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.ListDealsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.ListDealsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ListDealsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDealSelector();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getNetworkSelector();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.ListDealsRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.ListDealsRequest} returns this
 */
proto.farcaster.ListDealsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional DealSelector deal_selector = 2;
 * @return {!proto.farcaster.DealSelector}
 */
proto.farcaster.ListDealsRequest.prototype.getDealSelector = function() {
  return /** @type {!proto.farcaster.DealSelector} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.farcaster.DealSelector} value
 * @return {!proto.farcaster.ListDealsRequest} returns this
 */
proto.farcaster.ListDealsRequest.prototype.setDealSelector = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional NetworkSelector network_selector = 3;
 * @return {!proto.farcaster.NetworkSelector}
 */
proto.farcaster.ListDealsRequest.prototype.getNetworkSelector = function() {
  return /** @type {!proto.farcaster.NetworkSelector} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.farcaster.NetworkSelector} value
 * @return {!proto.farcaster.ListDealsRequest} returns this
 */
proto.farcaster.ListDealsRequest.prototype.setNetworkSelector = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.farcaster.ListDealsResponse.repeatedFields_ = [2];



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
proto.farcaster.ListDealsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.ListDealsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.ListDealsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ListDealsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dealsList: jspb.Message.toObjectList(msg.getDealsList(),
    proto.farcaster.DealInfo.toObject, includeInstance)
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
 * @return {!proto.farcaster.ListDealsResponse}
 */
proto.farcaster.ListDealsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.ListDealsResponse;
  return proto.farcaster.ListDealsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.ListDealsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.ListDealsResponse}
 */
proto.farcaster.ListDealsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.farcaster.DealInfo;
      reader.readMessage(value,proto.farcaster.DealInfo.deserializeBinaryFromReader);
      msg.addDeals(value);
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
proto.farcaster.ListDealsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.ListDealsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.ListDealsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.ListDealsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDealsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.farcaster.DealInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.farcaster.ListDealsResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.ListDealsResponse} returns this
 */
proto.farcaster.ListDealsResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DealInfo deals = 2;
 * @return {!Array<!proto.farcaster.DealInfo>}
 */
proto.farcaster.ListDealsResponse.prototype.getDealsList = function() {
  return /** @type{!Array<!proto.farcaster.DealInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.farcaster.DealInfo, 2));
};


/**
 * @param {!Array<!proto.farcaster.DealInfo>} value
 * @return {!proto.farcaster.ListDealsResponse} returns this
*/
proto.farcaster.ListDealsResponse.prototype.setDealsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.farcaster.DealInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.farcaster.DealInfo}
 */
proto.farcaster.ListDealsResponse.prototype.addDeals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.farcaster.DealInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.farcaster.ListDealsResponse} returns this
 */
proto.farcaster.ListDealsResponse.prototype.clearDealsList = function() {
  return this.setDealsList([]);
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
    checkpointSelector: jspb.Message.getFieldWithDefault(msg, 2, 0),
    networkSelector: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
      msg.setCheckpointSelector(value);
      break;
    case 3:
      var value = /** @type {!proto.farcaster.NetworkSelector} */ (reader.readEnum());
      msg.setNetworkSelector(value);
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
  f = message.getCheckpointSelector();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getNetworkSelector();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
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
 * optional CheckpointSelector checkpoint_selector = 2;
 * @return {!proto.farcaster.CheckpointSelector}
 */
proto.farcaster.CheckpointsRequest.prototype.getCheckpointSelector = function() {
  return /** @type {!proto.farcaster.CheckpointSelector} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.farcaster.CheckpointSelector} value
 * @return {!proto.farcaster.CheckpointsRequest} returns this
 */
proto.farcaster.CheckpointsRequest.prototype.setCheckpointSelector = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional NetworkSelector network_selector = 3;
 * @return {!proto.farcaster.NetworkSelector}
 */
proto.farcaster.CheckpointsRequest.prototype.getNetworkSelector = function() {
  return /** @type {!proto.farcaster.NetworkSelector} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.farcaster.NetworkSelector} value
 * @return {!proto.farcaster.CheckpointsRequest} returns this
 */
proto.farcaster.CheckpointsRequest.prototype.setNetworkSelector = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
    deal: (f = msg.getDeal()) && proto.farcaster.DealInfo.toObject(includeInstance, f),
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
      var value = new proto.farcaster.DealInfo;
      reader.readMessage(value,proto.farcaster.DealInfo.deserializeBinaryFromReader);
      msg.setDeal(value);
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
  f = message.getDeal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.farcaster.DealInfo.serializeBinaryToWriter
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
 * optional DealInfo deal = 2;
 * @return {?proto.farcaster.DealInfo}
 */
proto.farcaster.CheckpointEntry.prototype.getDeal = function() {
  return /** @type{?proto.farcaster.DealInfo} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.DealInfo, 2));
};


/**
 * @param {?proto.farcaster.DealInfo|undefined} value
 * @return {!proto.farcaster.CheckpointEntry} returns this
*/
proto.farcaster.CheckpointEntry.prototype.setDeal = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.CheckpointEntry} returns this
 */
proto.farcaster.CheckpointEntry.prototype.clearDeal = function() {
  return this.setDeal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.CheckpointEntry.prototype.hasDeal = function() {
  return jspb.Message.getField(this, 2) != null;
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
    blockchain: jspb.Message.getFieldWithDefault(msg, 2, 0),
    networkSelector: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
    case 3:
      var value = /** @type {!proto.farcaster.NetworkSelector} */ (reader.readEnum());
      msg.setNetworkSelector(value);
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
  f = message.getNetworkSelector();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
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
 * optional NetworkSelector network_selector = 3;
 * @return {!proto.farcaster.NetworkSelector}
 */
proto.farcaster.FundingAddressesRequest.prototype.getNetworkSelector = function() {
  return /** @type {!proto.farcaster.NetworkSelector} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.farcaster.NetworkSelector} value
 * @return {!proto.farcaster.FundingAddressesRequest} returns this
 */
proto.farcaster.FundingAddressesRequest.prototype.setNetworkSelector = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
    deserializedDeal: (f = msg.getDeserializedDeal()) && proto.farcaster.DeserializedDeal.toObject(includeInstance, f),
    deal: jspb.Message.getFieldWithDefault(msg, 3, "")
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
      var value = new proto.farcaster.DeserializedDeal;
      reader.readMessage(value,proto.farcaster.DeserializedDeal.deserializeBinaryFromReader);
      msg.setDeserializedDeal(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeal(value);
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
  f = message.getDeserializedDeal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.farcaster.DeserializedDeal.serializeBinaryToWriter
    );
  }
  f = message.getDeal();
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
 * optional DeserializedDeal deserialized_deal = 2;
 * @return {?proto.farcaster.DeserializedDeal}
 */
proto.farcaster.MakeResponse.prototype.getDeserializedDeal = function() {
  return /** @type{?proto.farcaster.DeserializedDeal} */ (
    jspb.Message.getWrapperField(this, proto.farcaster.DeserializedDeal, 2));
};


/**
 * @param {?proto.farcaster.DeserializedDeal|undefined} value
 * @return {!proto.farcaster.MakeResponse} returns this
*/
proto.farcaster.MakeResponse.prototype.setDeserializedDeal = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.farcaster.MakeResponse} returns this
 */
proto.farcaster.MakeResponse.prototype.clearDeserializedDeal = function() {
  return this.setDeserializedDeal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.MakeResponse.prototype.hasDeserializedDeal = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string deal = 3;
 * @return {string}
 */
proto.farcaster.MakeResponse.prototype.getDeal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.MakeResponse} returns this
 */
proto.farcaster.MakeResponse.prototype.setDeal = function(value) {
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
    deal: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
      msg.setDeal(value);
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
  f = message.getDeal();
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
 * optional string deal = 2;
 * @return {string}
 */
proto.farcaster.TakeRequest.prototype.getDeal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.TakeRequest} returns this
 */
proto.farcaster.TakeRequest.prototype.setDeal = function(value) {
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
proto.farcaster.RevokeDealRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.RevokeDealRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.RevokeDealRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RevokeDealRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    deal: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.farcaster.RevokeDealRequest}
 */
proto.farcaster.RevokeDealRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.RevokeDealRequest;
  return proto.farcaster.RevokeDealRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.RevokeDealRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.RevokeDealRequest}
 */
proto.farcaster.RevokeDealRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDeal(value);
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
proto.farcaster.RevokeDealRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.RevokeDealRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.RevokeDealRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RevokeDealRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDeal();
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
proto.farcaster.RevokeDealRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RevokeDealRequest} returns this
 */
proto.farcaster.RevokeDealRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string deal = 2;
 * @return {string}
 */
proto.farcaster.RevokeDealRequest.prototype.getDeal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.RevokeDealRequest} returns this
 */
proto.farcaster.RevokeDealRequest.prototype.setDeal = function(value) {
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
proto.farcaster.RevokeDealResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.farcaster.RevokeDealResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farcaster.RevokeDealResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RevokeDealResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.farcaster.RevokeDealResponse}
 */
proto.farcaster.RevokeDealResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farcaster.RevokeDealResponse;
  return proto.farcaster.RevokeDealResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farcaster.RevokeDealResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farcaster.RevokeDealResponse}
 */
proto.farcaster.RevokeDealResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.farcaster.RevokeDealResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farcaster.RevokeDealResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farcaster.RevokeDealResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farcaster.RevokeDealResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.farcaster.RevokeDealResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.RevokeDealResponse} returns this
 */
proto.farcaster.RevokeDealResponse.prototype.setId = function(value) {
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
proto.farcaster.State.oneofGroups_ = [[10],[11],[12],[13],[14],[15],[16]];

/**
 * @enum {number}
 */
proto.farcaster.State.ArbLockConfirmationsCase = {
  ARB_LOCK_CONFIRMATIONS_NOT_SET: 0,
  ARB_CONFS: 10
};

/**
 * @return {proto.farcaster.State.ArbLockConfirmationsCase}
 */
proto.farcaster.State.prototype.getArbLockConfirmationsCase = function() {
  return /** @type {proto.farcaster.State.ArbLockConfirmationsCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.State.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.farcaster.State.AccLockConfirmationsCase = {
  ACC_LOCK_CONFIRMATIONS_NOT_SET: 0,
  ACC_CONFS: 11
};

/**
 * @return {proto.farcaster.State.AccLockConfirmationsCase}
 */
proto.farcaster.State.prototype.getAccLockConfirmationsCase = function() {
  return /** @type {proto.farcaster.State.AccLockConfirmationsCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.State.oneofGroups_[1]));
};

/**
 * @enum {number}
 */
proto.farcaster.State.CancelConfirmationsCase = {
  CANCEL_CONFIRMATIONS_NOT_SET: 0,
  CANCEL_CONFS: 12
};

/**
 * @return {proto.farcaster.State.CancelConfirmationsCase}
 */
proto.farcaster.State.prototype.getCancelConfirmationsCase = function() {
  return /** @type {proto.farcaster.State.CancelConfirmationsCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.State.oneofGroups_[2]));
};

/**
 * @enum {number}
 */
proto.farcaster.State.BlocksUntilCancelPossibleCase = {
  BLOCKS_UNTIL_CANCEL_POSSIBLE_NOT_SET: 0,
  CANCEL_BLOCKS: 13
};

/**
 * @return {proto.farcaster.State.BlocksUntilCancelPossibleCase}
 */
proto.farcaster.State.prototype.getBlocksUntilCancelPossibleCase = function() {
  return /** @type {proto.farcaster.State.BlocksUntilCancelPossibleCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.State.oneofGroups_[3]));
};

/**
 * @enum {number}
 */
proto.farcaster.State.BlocksUntilPunishPossibleCase = {
  BLOCKS_UNTIL_PUNISH_POSSIBLE_NOT_SET: 0,
  PUNISH_BLOCKS: 14
};

/**
 * @return {proto.farcaster.State.BlocksUntilPunishPossibleCase}
 */
proto.farcaster.State.prototype.getBlocksUntilPunishPossibleCase = function() {
  return /** @type {proto.farcaster.State.BlocksUntilPunishPossibleCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.State.oneofGroups_[4]));
};

/**
 * @enum {number}
 */
proto.farcaster.State.BlocksUntilSafeBuyCase = {
  BLOCKS_UNTIL_SAFE_BUY_NOT_SET: 0,
  BUY_BLOCKS: 15
};

/**
 * @return {proto.farcaster.State.BlocksUntilSafeBuyCase}
 */
proto.farcaster.State.prototype.getBlocksUntilSafeBuyCase = function() {
  return /** @type {proto.farcaster.State.BlocksUntilSafeBuyCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.State.oneofGroups_[5]));
};

/**
 * @enum {number}
 */
proto.farcaster.State.BlocksUntilSafeMoneroBuySweepCase = {
  BLOCKS_UNTIL_SAFE_MONERO_BUY_SWEEP_NOT_SET: 0,
  BUY_MONERO_BLOCKS: 16
};

/**
 * @return {proto.farcaster.State.BlocksUntilSafeMoneroBuySweepCase}
 */
proto.farcaster.State.prototype.getBlocksUntilSafeMoneroBuySweepCase = function() {
  return /** @type {proto.farcaster.State.BlocksUntilSafeMoneroBuySweepCase} */(jspb.Message.computeOneofCase(this, proto.farcaster.State.oneofGroups_[6]));
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
    state: jspb.Message.getFieldWithDefault(msg, 1, ""),
    arbBlockHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    accBlockHeight: jspb.Message.getFieldWithDefault(msg, 3, 0),
    arbLocked: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    accLocked: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    canceled: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    buySeen: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    refundSeen: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    overfunded: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    arbConfs: jspb.Message.getFieldWithDefault(msg, 10, 0),
    accConfs: jspb.Message.getFieldWithDefault(msg, 11, 0),
    cancelConfs: jspb.Message.getFieldWithDefault(msg, 12, 0),
    cancelBlocks: jspb.Message.getFieldWithDefault(msg, 13, 0),
    punishBlocks: jspb.Message.getFieldWithDefault(msg, 14, 0),
    buyBlocks: jspb.Message.getFieldWithDefault(msg, 15, 0),
    buyMoneroBlocks: jspb.Message.getFieldWithDefault(msg, 16, 0)
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
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setArbBlockHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAccBlockHeight(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArbLocked(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccLocked(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanceled(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBuySeen(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRefundSeen(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverfunded(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setArbConfs(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccConfs(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCancelConfs(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCancelBlocks(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPunishBlocks(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBuyBlocks(value);
      break;
    case 16:
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
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArbBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAccBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getArbLocked();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAccLocked();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCanceled();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getBuySeen();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getRefundSeen();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getOverfunded();
  if (f) {
    writer.writeBool(
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
    writer.writeUint32(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeUint32(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeUint32(
      16,
      f
    );
  }
};


/**
 * optional string state = 1;
 * @return {string}
 */
proto.farcaster.State.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 arb_block_height = 2;
 * @return {number}
 */
proto.farcaster.State.prototype.getArbBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setArbBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 acc_block_height = 3;
 * @return {number}
 */
proto.farcaster.State.prototype.getAccBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setAccBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool arb_locked = 4;
 * @return {boolean}
 */
proto.farcaster.State.prototype.getArbLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setArbLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool acc_locked = 5;
 * @return {boolean}
 */
proto.farcaster.State.prototype.getAccLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setAccLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool canceled = 6;
 * @return {boolean}
 */
proto.farcaster.State.prototype.getCanceled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setCanceled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool buy_seen = 7;
 * @return {boolean}
 */
proto.farcaster.State.prototype.getBuySeen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setBuySeen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool refund_seen = 8;
 * @return {boolean}
 */
proto.farcaster.State.prototype.getRefundSeen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setRefundSeen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool overfunded = 9;
 * @return {boolean}
 */
proto.farcaster.State.prototype.getOverfunded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setOverfunded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional uint32 arb_confs = 10;
 * @return {number}
 */
proto.farcaster.State.prototype.getArbConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setArbConfs = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.farcaster.State.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearArbConfs = function() {
  return jspb.Message.setOneofField(this, 10, proto.farcaster.State.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasArbConfs = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 acc_confs = 11;
 * @return {number}
 */
proto.farcaster.State.prototype.getAccConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setAccConfs = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.farcaster.State.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearAccConfs = function() {
  return jspb.Message.setOneofField(this, 11, proto.farcaster.State.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasAccConfs = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint32 cancel_confs = 12;
 * @return {number}
 */
proto.farcaster.State.prototype.getCancelConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setCancelConfs = function(value) {
  return jspb.Message.setOneofField(this, 12, proto.farcaster.State.oneofGroups_[2], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearCancelConfs = function() {
  return jspb.Message.setOneofField(this, 12, proto.farcaster.State.oneofGroups_[2], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasCancelConfs = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int64 cancel_blocks = 13;
 * @return {number}
 */
proto.farcaster.State.prototype.getCancelBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setCancelBlocks = function(value) {
  return jspb.Message.setOneofField(this, 13, proto.farcaster.State.oneofGroups_[3], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearCancelBlocks = function() {
  return jspb.Message.setOneofField(this, 13, proto.farcaster.State.oneofGroups_[3], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasCancelBlocks = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int64 punish_blocks = 14;
 * @return {number}
 */
proto.farcaster.State.prototype.getPunishBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setPunishBlocks = function(value) {
  return jspb.Message.setOneofField(this, 14, proto.farcaster.State.oneofGroups_[4], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearPunishBlocks = function() {
  return jspb.Message.setOneofField(this, 14, proto.farcaster.State.oneofGroups_[4], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasPunishBlocks = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional uint32 buy_blocks = 15;
 * @return {number}
 */
proto.farcaster.State.prototype.getBuyBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setBuyBlocks = function(value) {
  return jspb.Message.setOneofField(this, 15, proto.farcaster.State.oneofGroups_[5], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearBuyBlocks = function() {
  return jspb.Message.setOneofField(this, 15, proto.farcaster.State.oneofGroups_[5], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasBuyBlocks = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional uint32 buy_monero_blocks = 16;
 * @return {number}
 */
proto.farcaster.State.prototype.getBuyMoneroBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.setBuyMoneroBlocks = function(value) {
  return jspb.Message.setOneofField(this, 16, proto.farcaster.State.oneofGroups_[6], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.farcaster.State} returns this
 */
proto.farcaster.State.prototype.clearBuyMoneroBlocks = function() {
  return jspb.Message.setOneofField(this, 16, proto.farcaster.State.oneofGroups_[6], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.farcaster.State.prototype.hasBuyMoneroBlocks = function() {
  return jspb.Message.getField(this, 16) != null;
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
    blockchain: jspb.Message.getFieldWithDefault(msg, 2, 0),
    networkSelector: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
    case 3:
      var value = /** @type {!proto.farcaster.NetworkSelector} */ (reader.readEnum());
      msg.setNetworkSelector(value);
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
  f = message.getNetworkSelector();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
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
 * optional NetworkSelector network_selector = 3;
 * @return {!proto.farcaster.NetworkSelector}
 */
proto.farcaster.NeedsFundingRequest.prototype.getNetworkSelector = function() {
  return /** @type {!proto.farcaster.NetworkSelector} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.farcaster.NetworkSelector} value
 * @return {!proto.farcaster.NeedsFundingRequest} returns this
 */
proto.farcaster.NeedsFundingRequest.prototype.setNetworkSelector = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.farcaster.NetworkSelector = {
  ALL_NETWORKS: 0,
  MAINNET_NETWORKS: 1,
  TESTNET_NETWORKS: 2,
  LOCAL_NETWORKS: 3
};

/**
 * @enum {number}
 */
proto.farcaster.DealStatus = {
  DEAL_OPEN: 0,
  DEAL_IN_PROGRESS: 1,
  DEAL_ENDED_SUCCESS_SWAP: 2,
  DEAL_ENDED_FAILURE_REFUND: 3,
  DEAL_ENDED_FAILURE_PUNISH: 4,
  DEAL_ENDED_FAILURE_ABORT: 5
};

/**
 * @enum {number}
 */
proto.farcaster.DealSelector = {
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
