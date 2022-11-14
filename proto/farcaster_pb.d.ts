import * as jspb from 'google-protobuf'



export class InfoRequest extends jspb.Message {
  getId(): number;
  setId(value: number): InfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InfoRequest): InfoRequest.AsObject;
  static serializeBinaryToWriter(message: InfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoRequest;
  static deserializeBinaryFromReader(message: InfoRequest, reader: jspb.BinaryReader): InfoRequest;
}

export namespace InfoRequest {
  export type AsObject = {
    id: number,
  }
}

export class InfoResponse extends jspb.Message {
  getId(): number;
  setId(value: number): InfoResponse;

  getListensList(): Array<string>;
  setListensList(value: Array<string>): InfoResponse;
  clearListensList(): InfoResponse;
  addListens(value: string, index?: number): InfoResponse;

  getUptime(): number;
  setUptime(value: number): InfoResponse;

  getSince(): number;
  setSince(value: number): InfoResponse;

  getPeersList(): Array<string>;
  setPeersList(value: Array<string>): InfoResponse;
  clearPeersList(): InfoResponse;
  addPeers(value: string, index?: number): InfoResponse;

  getSwapsList(): Array<string>;
  setSwapsList(value: Array<string>): InfoResponse;
  clearSwapsList(): InfoResponse;
  addSwaps(value: string, index?: number): InfoResponse;

  getOffersList(): Array<string>;
  setOffersList(value: Array<string>): InfoResponse;
  clearOffersList(): InfoResponse;
  addOffers(value: string, index?: number): InfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InfoResponse): InfoResponse.AsObject;
  static serializeBinaryToWriter(message: InfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoResponse;
  static deserializeBinaryFromReader(message: InfoResponse, reader: jspb.BinaryReader): InfoResponse;
}

export namespace InfoResponse {
  export type AsObject = {
    id: number,
    listensList: Array<string>,
    uptime: number,
    since: number,
    peersList: Array<string>,
    swapsList: Array<string>,
    offersList: Array<string>,
  }
}

export class SwapInfoRequest extends jspb.Message {
  getId(): number;
  setId(value: number): SwapInfoRequest;

  getSwapId(): string;
  setSwapId(value: string): SwapInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwapInfoRequest): SwapInfoRequest.AsObject;
  static serializeBinaryToWriter(message: SwapInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapInfoRequest;
  static deserializeBinaryFromReader(message: SwapInfoRequest, reader: jspb.BinaryReader): SwapInfoRequest;
}

export namespace SwapInfoRequest {
  export type AsObject = {
    id: number,
    swapId: string,
  }
}

export class SwapInfoResponse extends jspb.Message {
  getId(): number;
  setId(value: number): SwapInfoResponse;

  getMakerPeer(): string;
  setMakerPeer(value: string): SwapInfoResponse;

  getUptime(): number;
  setUptime(value: number): SwapInfoResponse;

  getSince(): number;
  setSince(value: number): SwapInfoResponse;

  getPublicOffer(): string;
  setPublicOffer(value: string): SwapInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SwapInfoResponse): SwapInfoResponse.AsObject;
  static serializeBinaryToWriter(message: SwapInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapInfoResponse;
  static deserializeBinaryFromReader(message: SwapInfoResponse, reader: jspb.BinaryReader): SwapInfoResponse;
}

export namespace SwapInfoResponse {
  export type AsObject = {
    id: number,
    makerPeer: string,
    uptime: number,
    since: number,
    publicOffer: string,
  }
}

export class OfferInfoRequest extends jspb.Message {
  getId(): number;
  setId(value: number): OfferInfoRequest;

  getPublicOffer(): string;
  setPublicOffer(value: string): OfferInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfferInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OfferInfoRequest): OfferInfoRequest.AsObject;
  static serializeBinaryToWriter(message: OfferInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfferInfoRequest;
  static deserializeBinaryFromReader(message: OfferInfoRequest, reader: jspb.BinaryReader): OfferInfoRequest;
}

export namespace OfferInfoRequest {
  export type AsObject = {
    id: number,
    publicOffer: string,
  }
}

export class OfferInfoResponse extends jspb.Message {
  getId(): number;
  setId(value: number): OfferInfoResponse;

  getArbitratingAmount(): number;
  setArbitratingAmount(value: number): OfferInfoResponse;

  getAccordantAmount(): number;
  setAccordantAmount(value: number): OfferInfoResponse;

  getCancelTimelock(): number;
  setCancelTimelock(value: number): OfferInfoResponse;

  getPunishTimelock(): number;
  setPunishTimelock(value: number): OfferInfoResponse;

  getFeeStrategy(): string;
  setFeeStrategy(value: string): OfferInfoResponse;

  getMakerRole(): SwapRole;
  setMakerRole(value: SwapRole): OfferInfoResponse;

  getUuid(): string;
  setUuid(value: string): OfferInfoResponse;

  getNetwork(): Network;
  setNetwork(value: Network): OfferInfoResponse;

  getArbitratingBlockchain(): Blockchain;
  setArbitratingBlockchain(value: Blockchain): OfferInfoResponse;

  getAccordantBlockchain(): Blockchain;
  setAccordantBlockchain(value: Blockchain): OfferInfoResponse;

  getNodeId(): string;
  setNodeId(value: string): OfferInfoResponse;

  getPeerAddress(): string;
  setPeerAddress(value: string): OfferInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfferInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OfferInfoResponse): OfferInfoResponse.AsObject;
  static serializeBinaryToWriter(message: OfferInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfferInfoResponse;
  static deserializeBinaryFromReader(message: OfferInfoResponse, reader: jspb.BinaryReader): OfferInfoResponse;
}

export namespace OfferInfoResponse {
  export type AsObject = {
    id: number,
    arbitratingAmount: number,
    accordantAmount: number,
    cancelTimelock: number,
    punishTimelock: number,
    feeStrategy: string,
    makerRole: SwapRole,
    uuid: string,
    network: Network,
    arbitratingBlockchain: Blockchain,
    accordantBlockchain: Blockchain,
    nodeId: string,
    peerAddress: string,
  }
}

export class PeersRequest extends jspb.Message {
  getId(): number;
  setId(value: number): PeersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PeersRequest): PeersRequest.AsObject;
  static serializeBinaryToWriter(message: PeersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeersRequest;
  static deserializeBinaryFromReader(message: PeersRequest, reader: jspb.BinaryReader): PeersRequest;
}

export namespace PeersRequest {
  export type AsObject = {
    id: number,
  }
}

export class PeersResponse extends jspb.Message {
  getId(): number;
  setId(value: number): PeersResponse;

  getPeersList(): Array<string>;
  setPeersList(value: Array<string>): PeersResponse;
  clearPeersList(): PeersResponse;
  addPeers(value: string, index?: number): PeersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PeersResponse): PeersResponse.AsObject;
  static serializeBinaryToWriter(message: PeersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeersResponse;
  static deserializeBinaryFromReader(message: PeersResponse, reader: jspb.BinaryReader): PeersResponse;
}

export namespace PeersResponse {
  export type AsObject = {
    id: number,
    peersList: Array<string>,
  }
}

export class CheckpointsRequest extends jspb.Message {
  getId(): number;
  setId(value: number): CheckpointsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckpointsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckpointsRequest): CheckpointsRequest.AsObject;
  static serializeBinaryToWriter(message: CheckpointsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckpointsRequest;
  static deserializeBinaryFromReader(message: CheckpointsRequest, reader: jspb.BinaryReader): CheckpointsRequest;
}

export namespace CheckpointsRequest {
  export type AsObject = {
    id: number,
  }
}

export class CheckpointsResponse extends jspb.Message {
  getId(): number;
  setId(value: number): CheckpointsResponse;

  getCheckpointEntriesList(): Array<CheckpointEntry>;
  setCheckpointEntriesList(value: Array<CheckpointEntry>): CheckpointsResponse;
  clearCheckpointEntriesList(): CheckpointsResponse;
  addCheckpointEntries(value?: CheckpointEntry, index?: number): CheckpointEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckpointsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckpointsResponse): CheckpointsResponse.AsObject;
  static serializeBinaryToWriter(message: CheckpointsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckpointsResponse;
  static deserializeBinaryFromReader(message: CheckpointsResponse, reader: jspb.BinaryReader): CheckpointsResponse;
}

export namespace CheckpointsResponse {
  export type AsObject = {
    id: number,
    checkpointEntriesList: Array<CheckpointEntry.AsObject>,
  }
}

export class CheckpointEntry extends jspb.Message {
  getSwapId(): string;
  setSwapId(value: string): CheckpointEntry;

  getPublicOffer(): string;
  setPublicOffer(value: string): CheckpointEntry;

  getTradeRole(): TradeRole;
  setTradeRole(value: TradeRole): CheckpointEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckpointEntry.AsObject;
  static toObject(includeInstance: boolean, msg: CheckpointEntry): CheckpointEntry.AsObject;
  static serializeBinaryToWriter(message: CheckpointEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckpointEntry;
  static deserializeBinaryFromReader(message: CheckpointEntry, reader: jspb.BinaryReader): CheckpointEntry;
}

export namespace CheckpointEntry {
  export type AsObject = {
    swapId: string,
    publicOffer: string,
    tradeRole: TradeRole,
  }
}

export class RestoreCheckpointRequest extends jspb.Message {
  getId(): number;
  setId(value: number): RestoreCheckpointRequest;

  getSwapId(): string;
  setSwapId(value: string): RestoreCheckpointRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreCheckpointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreCheckpointRequest): RestoreCheckpointRequest.AsObject;
  static serializeBinaryToWriter(message: RestoreCheckpointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreCheckpointRequest;
  static deserializeBinaryFromReader(message: RestoreCheckpointRequest, reader: jspb.BinaryReader): RestoreCheckpointRequest;
}

export namespace RestoreCheckpointRequest {
  export type AsObject = {
    id: number,
    swapId: string,
  }
}

export class RestoreCheckpointResponse extends jspb.Message {
  getId(): number;
  setId(value: number): RestoreCheckpointResponse;

  getStatus(): string;
  setStatus(value: string): RestoreCheckpointResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreCheckpointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreCheckpointResponse): RestoreCheckpointResponse.AsObject;
  static serializeBinaryToWriter(message: RestoreCheckpointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreCheckpointResponse;
  static deserializeBinaryFromReader(message: RestoreCheckpointResponse, reader: jspb.BinaryReader): RestoreCheckpointResponse;
}

export namespace RestoreCheckpointResponse {
  export type AsObject = {
    id: number,
    status: string,
  }
}

export class MakeRequest extends jspb.Message {
  getId(): number;
  setId(value: number): MakeRequest;

  getNetwork(): Network;
  setNetwork(value: Network): MakeRequest;

  getAccordantBlockchain(): Blockchain;
  setAccordantBlockchain(value: Blockchain): MakeRequest;

  getArbitratingBlockchain(): Blockchain;
  setArbitratingBlockchain(value: Blockchain): MakeRequest;

  getAccordantAmount(): number;
  setAccordantAmount(value: number): MakeRequest;

  getArbitratingAmount(): number;
  setArbitratingAmount(value: number): MakeRequest;

  getArbitratingAddr(): string;
  setArbitratingAddr(value: string): MakeRequest;

  getAccordantAddr(): string;
  setAccordantAddr(value: string): MakeRequest;

  getCancelTimelock(): number;
  setCancelTimelock(value: number): MakeRequest;

  getPunishTimelock(): number;
  setPunishTimelock(value: number): MakeRequest;

  getFeeStrategy(): string;
  setFeeStrategy(value: string): MakeRequest;

  getMakerRole(): SwapRole;
  setMakerRole(value: SwapRole): MakeRequest;

  getPublicIpAddr(): string;
  setPublicIpAddr(value: string): MakeRequest;

  getBindIpAddr(): string;
  setBindIpAddr(value: string): MakeRequest;

  getPort(): number;
  setPort(value: number): MakeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MakeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MakeRequest): MakeRequest.AsObject;
  static serializeBinaryToWriter(message: MakeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MakeRequest;
  static deserializeBinaryFromReader(message: MakeRequest, reader: jspb.BinaryReader): MakeRequest;
}

export namespace MakeRequest {
  export type AsObject = {
    id: number,
    network: Network,
    accordantBlockchain: Blockchain,
    arbitratingBlockchain: Blockchain,
    accordantAmount: number,
    arbitratingAmount: number,
    arbitratingAddr: string,
    accordantAddr: string,
    cancelTimelock: number,
    punishTimelock: number,
    feeStrategy: string,
    makerRole: SwapRole,
    publicIpAddr: string,
    bindIpAddr: string,
    port: number,
  }
}

export class MakeResponse extends jspb.Message {
  getId(): number;
  setId(value: number): MakeResponse;

  getOffer(): string;
  setOffer(value: string): MakeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MakeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MakeResponse): MakeResponse.AsObject;
  static serializeBinaryToWriter(message: MakeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MakeResponse;
  static deserializeBinaryFromReader(message: MakeResponse, reader: jspb.BinaryReader): MakeResponse;
}

export namespace MakeResponse {
  export type AsObject = {
    id: number,
    offer: string,
  }
}

export class TakeRequest extends jspb.Message {
  getId(): number;
  setId(value: number): TakeRequest;

  getPublicOffer(): string;
  setPublicOffer(value: string): TakeRequest;

  getBitcoinAddress(): string;
  setBitcoinAddress(value: string): TakeRequest;

  getMoneroAddress(): string;
  setMoneroAddress(value: string): TakeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TakeRequest): TakeRequest.AsObject;
  static serializeBinaryToWriter(message: TakeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakeRequest;
  static deserializeBinaryFromReader(message: TakeRequest, reader: jspb.BinaryReader): TakeRequest;
}

export namespace TakeRequest {
  export type AsObject = {
    id: number,
    publicOffer: string,
    bitcoinAddress: string,
    moneroAddress: string,
  }
}

export class TakeResponse extends jspb.Message {
  getId(): number;
  setId(value: number): TakeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TakeResponse): TakeResponse.AsObject;
  static serializeBinaryToWriter(message: TakeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakeResponse;
  static deserializeBinaryFromReader(message: TakeResponse, reader: jspb.BinaryReader): TakeResponse;
}

export namespace TakeResponse {
  export type AsObject = {
    id: number,
  }
}

export class RevokeOfferRequest extends jspb.Message {
  getId(): number;
  setId(value: number): RevokeOfferRequest;

  getPublicOffer(): string;
  setPublicOffer(value: string): RevokeOfferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeOfferRequest): RevokeOfferRequest.AsObject;
  static serializeBinaryToWriter(message: RevokeOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeOfferRequest;
  static deserializeBinaryFromReader(message: RevokeOfferRequest, reader: jspb.BinaryReader): RevokeOfferRequest;
}

export namespace RevokeOfferRequest {
  export type AsObject = {
    id: number,
    publicOffer: string,
  }
}

export class RevokeOfferResponse extends jspb.Message {
  getId(): number;
  setId(value: number): RevokeOfferResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeOfferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeOfferResponse): RevokeOfferResponse.AsObject;
  static serializeBinaryToWriter(message: RevokeOfferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeOfferResponse;
  static deserializeBinaryFromReader(message: RevokeOfferResponse, reader: jspb.BinaryReader): RevokeOfferResponse;
}

export namespace RevokeOfferResponse {
  export type AsObject = {
    id: number,
  }
}

export class AbortSwapRequest extends jspb.Message {
  getId(): number;
  setId(value: number): AbortSwapRequest;

  getSwapId(): string;
  setSwapId(value: string): AbortSwapRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortSwapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AbortSwapRequest): AbortSwapRequest.AsObject;
  static serializeBinaryToWriter(message: AbortSwapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortSwapRequest;
  static deserializeBinaryFromReader(message: AbortSwapRequest, reader: jspb.BinaryReader): AbortSwapRequest;
}

export namespace AbortSwapRequest {
  export type AsObject = {
    id: number,
    swapId: string,
  }
}

export class AbortSwapResponse extends jspb.Message {
  getId(): number;
  setId(value: number): AbortSwapResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortSwapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AbortSwapResponse): AbortSwapResponse.AsObject;
  static serializeBinaryToWriter(message: AbortSwapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortSwapResponse;
  static deserializeBinaryFromReader(message: AbortSwapResponse, reader: jspb.BinaryReader): AbortSwapResponse;
}

export namespace AbortSwapResponse {
  export type AsObject = {
    id: number,
  }
}

export class ProgressRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ProgressRequest;

  getSwapId(): string;
  setSwapId(value: string): ProgressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProgressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProgressRequest): ProgressRequest.AsObject;
  static serializeBinaryToWriter(message: ProgressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProgressRequest;
  static deserializeBinaryFromReader(message: ProgressRequest, reader: jspb.BinaryReader): ProgressRequest;
}

export namespace ProgressRequest {
  export type AsObject = {
    id: number,
    swapId: string,
  }
}

export class ProgressResponse extends jspb.Message {
  getId(): number;
  setId(value: number): ProgressResponse;

  getProgressList(): Array<string>;
  setProgressList(value: Array<string>): ProgressResponse;
  clearProgressList(): ProgressResponse;
  addProgress(value: string, index?: number): ProgressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProgressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProgressResponse): ProgressResponse.AsObject;
  static serializeBinaryToWriter(message: ProgressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProgressResponse;
  static deserializeBinaryFromReader(message: ProgressResponse, reader: jspb.BinaryReader): ProgressResponse;
}

export namespace ProgressResponse {
  export type AsObject = {
    id: number,
    progressList: Array<string>,
  }
}

export class NeedsFundingRequest extends jspb.Message {
  getId(): number;
  setId(value: number): NeedsFundingRequest;

  getBlockchain(): Blockchain;
  setBlockchain(value: Blockchain): NeedsFundingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeedsFundingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NeedsFundingRequest): NeedsFundingRequest.AsObject;
  static serializeBinaryToWriter(message: NeedsFundingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeedsFundingRequest;
  static deserializeBinaryFromReader(message: NeedsFundingRequest, reader: jspb.BinaryReader): NeedsFundingRequest;
}

export namespace NeedsFundingRequest {
  export type AsObject = {
    id: number,
    blockchain: Blockchain,
  }
}

export class NeedsFundingResponse extends jspb.Message {
  getId(): number;
  setId(value: number): NeedsFundingResponse;

  getFundingInfos(): string;
  setFundingInfos(value: string): NeedsFundingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeedsFundingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NeedsFundingResponse): NeedsFundingResponse.AsObject;
  static serializeBinaryToWriter(message: NeedsFundingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeedsFundingResponse;
  static deserializeBinaryFromReader(message: NeedsFundingResponse, reader: jspb.BinaryReader): NeedsFundingResponse;
}

export namespace NeedsFundingResponse {
  export type AsObject = {
    id: number,
    fundingInfos: string,
  }
}

export class SweepAddressRequest extends jspb.Message {
  getId(): number;
  setId(value: number): SweepAddressRequest;

  getSourceAddress(): string;
  setSourceAddress(value: string): SweepAddressRequest;

  getDestinationAddress(): string;
  setDestinationAddress(value: string): SweepAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SweepAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SweepAddressRequest): SweepAddressRequest.AsObject;
  static serializeBinaryToWriter(message: SweepAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SweepAddressRequest;
  static deserializeBinaryFromReader(message: SweepAddressRequest, reader: jspb.BinaryReader): SweepAddressRequest;
}

export namespace SweepAddressRequest {
  export type AsObject = {
    id: number,
    sourceAddress: string,
    destinationAddress: string,
  }
}

export class SweepAddressResponse extends jspb.Message {
  getId(): number;
  setId(value: number): SweepAddressResponse;

  getMessage(): string;
  setMessage(value: string): SweepAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SweepAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SweepAddressResponse): SweepAddressResponse.AsObject;
  static serializeBinaryToWriter(message: SweepAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SweepAddressResponse;
  static deserializeBinaryFromReader(message: SweepAddressResponse, reader: jspb.BinaryReader): SweepAddressResponse;
}

export namespace SweepAddressResponse {
  export type AsObject = {
    id: number,
    message: string,
  }
}

export enum TradeRole { 
  MAKER = 0,
  TAKER = 1,
}
export enum SwapRole { 
  ALICE = 0,
  BOB = 1,
}
export enum Network { 
  MAINNET = 0,
  TESTNET = 1,
  LOCAL = 2,
}
export enum Blockchain { 
  BITCOIN = 0,
  MONERO = 1,
}
