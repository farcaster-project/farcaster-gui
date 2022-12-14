import * as jspb from 'google-protobuf'



export class HealthCheckRequest extends jspb.Message {
  getId(): number;
  setId(value: number): HealthCheckRequest;

  getSelector(): HealthCheckSelector;
  setSelector(value: HealthCheckSelector): HealthCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckRequest): HealthCheckRequest.AsObject;
  static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
  static deserializeBinaryFromReader(message: HealthCheckRequest, reader: jspb.BinaryReader): HealthCheckRequest;
}

export namespace HealthCheckRequest {
  export type AsObject = {
    id: number,
    selector: HealthCheckSelector,
  }
}

export class HealthCheckResponse extends jspb.Message {
  getId(): number;
  setId(value: number): HealthCheckResponse;

  getCompleteHealthReport(): CompleteHealthReport | undefined;
  setCompleteHealthReport(value?: CompleteHealthReport): HealthCheckResponse;
  hasCompleteHealthReport(): boolean;
  clearCompleteHealthReport(): HealthCheckResponse;

  getReducedHealthReport(): ReducedHealthReport | undefined;
  setReducedHealthReport(value?: ReducedHealthReport): HealthCheckResponse;
  hasReducedHealthReport(): boolean;
  clearReducedHealthReport(): HealthCheckResponse;

  getHealthReportCase(): HealthCheckResponse.HealthReportCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckResponse): HealthCheckResponse.AsObject;
  static serializeBinaryToWriter(message: HealthCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckResponse;
  static deserializeBinaryFromReader(message: HealthCheckResponse, reader: jspb.BinaryReader): HealthCheckResponse;
}

export namespace HealthCheckResponse {
  export type AsObject = {
    id: number,
    completeHealthReport?: CompleteHealthReport.AsObject,
    reducedHealthReport?: ReducedHealthReport.AsObject,
  }

  export enum HealthReportCase { 
    HEALTH_REPORT_NOT_SET = 0,
    COMPLETE_HEALTH_REPORT = 2,
    REDUCED_HEALTH_REPORT = 3,
  }
}

export class CompleteHealthReport extends jspb.Message {
  getBitcoinMainnetHealth(): string;
  setBitcoinMainnetHealth(value: string): CompleteHealthReport;

  getBitcoinTestnetHealth(): string;
  setBitcoinTestnetHealth(value: string): CompleteHealthReport;

  getBitcoinLocalHealth(): string;
  setBitcoinLocalHealth(value: string): CompleteHealthReport;

  getMoneroMainnetHealth(): string;
  setMoneroMainnetHealth(value: string): CompleteHealthReport;

  getMoneroTestnetHealth(): string;
  setMoneroTestnetHealth(value: string): CompleteHealthReport;

  getMoneroLocalHealth(): string;
  setMoneroLocalHealth(value: string): CompleteHealthReport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteHealthReport.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteHealthReport): CompleteHealthReport.AsObject;
  static serializeBinaryToWriter(message: CompleteHealthReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteHealthReport;
  static deserializeBinaryFromReader(message: CompleteHealthReport, reader: jspb.BinaryReader): CompleteHealthReport;
}

export namespace CompleteHealthReport {
  export type AsObject = {
    bitcoinMainnetHealth: string,
    bitcoinTestnetHealth: string,
    bitcoinLocalHealth: string,
    moneroMainnetHealth: string,
    moneroTestnetHealth: string,
    moneroLocalHealth: string,
  }
}

export class ReducedHealthReport extends jspb.Message {
  getBitcoinHealth(): string;
  setBitcoinHealth(value: string): ReducedHealthReport;

  getMoneroHealth(): string;
  setMoneroHealth(value: string): ReducedHealthReport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReducedHealthReport.AsObject;
  static toObject(includeInstance: boolean, msg: ReducedHealthReport): ReducedHealthReport.AsObject;
  static serializeBinaryToWriter(message: ReducedHealthReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReducedHealthReport;
  static deserializeBinaryFromReader(message: ReducedHealthReport, reader: jspb.BinaryReader): ReducedHealthReport;
}

export namespace ReducedHealthReport {
  export type AsObject = {
    bitcoinHealth: string,
    moneroHealth: string,
  }
}

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

  getConnection(): string;
  setConnection(value: string): SwapInfoResponse;

  getUptime(): number;
  setUptime(value: number): SwapInfoResponse;

  getSince(): number;
  setSince(value: number): SwapInfoResponse;

  getPublicOffer(): string;
  setPublicOffer(value: string): SwapInfoResponse;

  getConnected(): boolean;
  setConnected(value: boolean): SwapInfoResponse;

  getTradeRole(): TradeRole;
  setTradeRole(value: TradeRole): SwapInfoResponse;

  getSwapRole(): SwapRole;
  setSwapRole(value: SwapRole): SwapInfoResponse;

  getConnectedCounterpartyNodeId(): string;
  setConnectedCounterpartyNodeId(value: string): SwapInfoResponse;

  getState(): string;
  setState(value: string): SwapInfoResponse;

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
    connection: string,
    uptime: number,
    since: number,
    publicOffer: string,
    connected: boolean,
    tradeRole: TradeRole,
    swapRole: SwapRole,
    connectedCounterpartyNodeId: string,
    state: string,
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

export class ListOffersRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ListOffersRequest;

  getSelector(): OfferSelector;
  setSelector(value: OfferSelector): ListOffersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOffersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOffersRequest): ListOffersRequest.AsObject;
  static serializeBinaryToWriter(message: ListOffersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOffersRequest;
  static deserializeBinaryFromReader(message: ListOffersRequest, reader: jspb.BinaryReader): ListOffersRequest;
}

export namespace ListOffersRequest {
  export type AsObject = {
    id: number,
    selector: OfferSelector,
  }
}

export class ListOffersResponse extends jspb.Message {
  getId(): number;
  setId(value: number): ListOffersResponse;

  getPublicOffersList(): Array<string>;
  setPublicOffersList(value: Array<string>): ListOffersResponse;
  clearPublicOffersList(): ListOffersResponse;
  addPublicOffers(value: string, index?: number): ListOffersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOffersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOffersResponse): ListOffersResponse.AsObject;
  static serializeBinaryToWriter(message: ListOffersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOffersResponse;
  static deserializeBinaryFromReader(message: ListOffersResponse, reader: jspb.BinaryReader): ListOffersResponse;
}

export namespace ListOffersResponse {
  export type AsObject = {
    id: number,
    publicOffersList: Array<string>,
  }
}

export class CheckpointsRequest extends jspb.Message {
  getId(): number;
  setId(value: number): CheckpointsRequest;

  getSelector(): CheckpointSelector;
  setSelector(value: CheckpointSelector): CheckpointsRequest;

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
    selector: CheckpointSelector,
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

export class FundingAddressesRequest extends jspb.Message {
  getId(): number;
  setId(value: number): FundingAddressesRequest;

  getBlockchain(): Blockchain;
  setBlockchain(value: Blockchain): FundingAddressesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FundingAddressesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FundingAddressesRequest): FundingAddressesRequest.AsObject;
  static serializeBinaryToWriter(message: FundingAddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FundingAddressesRequest;
  static deserializeBinaryFromReader(message: FundingAddressesRequest, reader: jspb.BinaryReader): FundingAddressesRequest;
}

export namespace FundingAddressesRequest {
  export type AsObject = {
    id: number,
    blockchain: Blockchain,
  }
}

export class FundingAddressesResponse extends jspb.Message {
  getId(): number;
  setId(value: number): FundingAddressesResponse;

  getAddressesList(): Array<AddressSwapIdPair>;
  setAddressesList(value: Array<AddressSwapIdPair>): FundingAddressesResponse;
  clearAddressesList(): FundingAddressesResponse;
  addAddresses(value?: AddressSwapIdPair, index?: number): AddressSwapIdPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FundingAddressesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FundingAddressesResponse): FundingAddressesResponse.AsObject;
  static serializeBinaryToWriter(message: FundingAddressesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FundingAddressesResponse;
  static deserializeBinaryFromReader(message: FundingAddressesResponse, reader: jspb.BinaryReader): FundingAddressesResponse;
}

export namespace FundingAddressesResponse {
  export type AsObject = {
    id: number,
    addressesList: Array<AddressSwapIdPair.AsObject>,
  }
}

export class AddressSwapIdPair extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): AddressSwapIdPair;

  getSwapId(): string;
  setSwapId(value: string): AddressSwapIdPair;

  getAddressSwapIdCase(): AddressSwapIdPair.AddressSwapIdCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressSwapIdPair.AsObject;
  static toObject(includeInstance: boolean, msg: AddressSwapIdPair): AddressSwapIdPair.AsObject;
  static serializeBinaryToWriter(message: AddressSwapIdPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressSwapIdPair;
  static deserializeBinaryFromReader(message: AddressSwapIdPair, reader: jspb.BinaryReader): AddressSwapIdPair;
}

export namespace AddressSwapIdPair {
  export type AsObject = {
    address: string,
    swapId: string,
  }

  export enum AddressSwapIdCase { 
    ADDRESS_SWAP_ID_NOT_SET = 0,
    SWAP_ID = 2,
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

  getPublicPort(): number;
  setPublicPort(value: number): MakeRequest;

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
    publicPort: number,
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

  getProgressList(): Array<Progress>;
  setProgressList(value: Array<Progress>): ProgressResponse;
  clearProgressList(): ProgressResponse;
  addProgress(value?: Progress, index?: number): Progress;

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
    progressList: Array<Progress.AsObject>,
  }
}

export class Progress extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): Progress;

  getStateUpdate(): State | undefined;
  setStateUpdate(value?: State): Progress;
  hasStateUpdate(): boolean;
  clearStateUpdate(): Progress;

  getStateTransition(): StateTransition | undefined;
  setStateTransition(value?: StateTransition): Progress;
  hasStateTransition(): boolean;
  clearStateTransition(): Progress;

  getFailure(): string;
  setFailure(value: string): Progress;

  getSuccess(): string;
  setSuccess(value: string): Progress;

  getProgressCase(): Progress.ProgressCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Progress.AsObject;
  static toObject(includeInstance: boolean, msg: Progress): Progress.AsObject;
  static serializeBinaryToWriter(message: Progress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Progress;
  static deserializeBinaryFromReader(message: Progress, reader: jspb.BinaryReader): Progress;
}

export namespace Progress {
  export type AsObject = {
    message: string,
    stateUpdate?: State.AsObject,
    stateTransition?: StateTransition.AsObject,
    failure: string,
    success: string,
  }

  export enum ProgressCase { 
    PROGRESS_NOT_SET = 0,
    MESSAGE = 1,
    STATE_UPDATE = 2,
    STATE_TRANSITION = 3,
    FAILURE = 4,
    SUCCESS = 5,
  }
}

export class StateTransition extends jspb.Message {
  getOldState(): State | undefined;
  setOldState(value?: State): StateTransition;
  hasOldState(): boolean;
  clearOldState(): StateTransition;

  getNewState(): State | undefined;
  setNewState(value?: State): StateTransition;
  hasNewState(): boolean;
  clearNewState(): StateTransition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateTransition.AsObject;
  static toObject(includeInstance: boolean, msg: StateTransition): StateTransition.AsObject;
  static serializeBinaryToWriter(message: StateTransition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateTransition;
  static deserializeBinaryFromReader(message: StateTransition, reader: jspb.BinaryReader): StateTransition;
}

export namespace StateTransition {
  export type AsObject = {
    oldState?: State.AsObject,
    newState?: State.AsObject,
  }
}

export class State extends jspb.Message {
  getStartA(): StartA | undefined;
  setStartA(value?: StartA): State;
  hasStartA(): boolean;
  clearStartA(): State;

  getCommitA(): CommitA | undefined;
  setCommitA(value?: CommitA): State;
  hasCommitA(): boolean;
  clearCommitA(): State;

  getRevealA(): RevealA | undefined;
  setRevealA(value?: RevealA): State;
  hasRevealA(): boolean;
  clearRevealA(): State;

  getRefundSigA(): RefundSigA | undefined;
  setRefundSigA(value?: RefundSigA): State;
  hasRefundSigA(): boolean;
  clearRefundSigA(): State;

  getFinishA(): FinishA | undefined;
  setFinishA(value?: FinishA): State;
  hasFinishA(): boolean;
  clearFinishA(): State;

  getStartB(): StartB | undefined;
  setStartB(value?: StartB): State;
  hasStartB(): boolean;
  clearStartB(): State;

  getCommitB(): CommitB | undefined;
  setCommitB(value?: CommitB): State;
  hasCommitB(): boolean;
  clearCommitB(): State;

  getRevealB(): RevealB | undefined;
  setRevealB(value?: RevealB): State;
  hasRevealB(): boolean;
  clearRevealB(): State;

  getCoreArbB(): CoreArbB | undefined;
  setCoreArbB(value?: CoreArbB): State;
  hasCoreArbB(): boolean;
  clearCoreArbB(): State;

  getBuySigB(): BuySigB | undefined;
  setBuySigB(value?: BuySigB): State;
  hasBuySigB(): boolean;
  clearBuySigB(): State;

  getFinishB(): FinishB | undefined;
  setFinishB(value?: FinishB): State;
  hasFinishB(): boolean;
  clearFinishB(): State;

  getStateCase(): State.StateCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): State.AsObject;
  static toObject(includeInstance: boolean, msg: State): State.AsObject;
  static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): State;
  static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
}

export namespace State {
  export type AsObject = {
    startA?: StartA.AsObject,
    commitA?: CommitA.AsObject,
    revealA?: RevealA.AsObject,
    refundSigA?: RefundSigA.AsObject,
    finishA?: FinishA.AsObject,
    startB?: StartB.AsObject,
    commitB?: CommitB.AsObject,
    revealB?: RevealB.AsObject,
    coreArbB?: CoreArbB.AsObject,
    buySigB?: BuySigB.AsObject,
    finishB?: FinishB.AsObject,
  }

  export enum StateCase { 
    STATE_NOT_SET = 0,
    START_A = 1,
    COMMIT_A = 2,
    REVEAL_A = 3,
    REFUND_SIG_A = 4,
    FINISH_A = 5,
    START_B = 6,
    COMMIT_B = 7,
    REVEAL_B = 8,
    CORE_ARB_B = 9,
    BUY_SIG_B = 10,
    FINISH_B = 11,
  }
}

export class StartA extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartA.AsObject;
  static toObject(includeInstance: boolean, msg: StartA): StartA.AsObject;
  static serializeBinaryToWriter(message: StartA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartA;
  static deserializeBinaryFromReader(message: StartA, reader: jspb.BinaryReader): StartA;
}

export namespace StartA {
  export type AsObject = {
  }
}

export class CommitA extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitA.AsObject;
  static toObject(includeInstance: boolean, msg: CommitA): CommitA.AsObject;
  static serializeBinaryToWriter(message: CommitA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitA;
  static deserializeBinaryFromReader(message: CommitA, reader: jspb.BinaryReader): CommitA;
}

export namespace CommitA {
  export type AsObject = {
  }
}

export class RevealA extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevealA.AsObject;
  static toObject(includeInstance: boolean, msg: RevealA): RevealA.AsObject;
  static serializeBinaryToWriter(message: RevealA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevealA;
  static deserializeBinaryFromReader(message: RevealA, reader: jspb.BinaryReader): RevealA;
}

export namespace RevealA {
  export type AsObject = {
  }
}

export class FinishA extends jspb.Message {
  getOutcome(): Outcome;
  setOutcome(value: Outcome): FinishA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishA.AsObject;
  static toObject(includeInstance: boolean, msg: FinishA): FinishA.AsObject;
  static serializeBinaryToWriter(message: FinishA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishA;
  static deserializeBinaryFromReader(message: FinishA, reader: jspb.BinaryReader): FinishA;
}

export namespace FinishA {
  export type AsObject = {
    outcome: Outcome,
  }
}

export class StartB extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartB.AsObject;
  static toObject(includeInstance: boolean, msg: StartB): StartB.AsObject;
  static serializeBinaryToWriter(message: StartB, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartB;
  static deserializeBinaryFromReader(message: StartB, reader: jspb.BinaryReader): StartB;
}

export namespace StartB {
  export type AsObject = {
  }
}

export class CommitB extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitB.AsObject;
  static toObject(includeInstance: boolean, msg: CommitB): CommitB.AsObject;
  static serializeBinaryToWriter(message: CommitB, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitB;
  static deserializeBinaryFromReader(message: CommitB, reader: jspb.BinaryReader): CommitB;
}

export namespace CommitB {
  export type AsObject = {
  }
}

export class RevealB extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevealB.AsObject;
  static toObject(includeInstance: boolean, msg: RevealB): RevealB.AsObject;
  static serializeBinaryToWriter(message: RevealB, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevealB;
  static deserializeBinaryFromReader(message: RevealB, reader: jspb.BinaryReader): RevealB;
}

export namespace RevealB {
  export type AsObject = {
  }
}

export class FinishB extends jspb.Message {
  getOutcome(): Outcome;
  setOutcome(value: Outcome): FinishB;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishB.AsObject;
  static toObject(includeInstance: boolean, msg: FinishB): FinishB.AsObject;
  static serializeBinaryToWriter(message: FinishB, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishB;
  static deserializeBinaryFromReader(message: FinishB, reader: jspb.BinaryReader): FinishB;
}

export namespace FinishB {
  export type AsObject = {
    outcome: Outcome,
  }
}

export class RefundSigA extends jspb.Message {
  getArbBlockHeight(): number;
  setArbBlockHeight(value: number): RefundSigA;

  getAccBlockHeight(): number;
  setAccBlockHeight(value: number): RefundSigA;

  getArbLocked(): boolean;
  setArbLocked(value: boolean): RefundSigA;

  getAccLocked(): boolean;
  setAccLocked(value: boolean): RefundSigA;

  getBuyPublished(): boolean;
  setBuyPublished(value: boolean): RefundSigA;

  getCancelSeen(): boolean;
  setCancelSeen(value: boolean): RefundSigA;

  getRefundSeen(): boolean;
  setRefundSeen(value: boolean): RefundSigA;

  getOverfunded(): boolean;
  setOverfunded(value: boolean): RefundSigA;

  getArbConfs(): number;
  setArbConfs(value: number): RefundSigA;

  getAccConfs(): number;
  setAccConfs(value: number): RefundSigA;

  getCancelBlocks(): number;
  setCancelBlocks(value: number): RefundSigA;

  getCancelConfs(): number;
  setCancelConfs(value: number): RefundSigA;

  getPunishBlocks(): number;
  setPunishBlocks(value: number): RefundSigA;

  getBuyBlocks(): number;
  setBuyBlocks(value: number): RefundSigA;

  getArbLockConfirmationsCase(): RefundSigA.ArbLockConfirmationsCase;

  getAccLockConfirmationsCase(): RefundSigA.AccLockConfirmationsCase;

  getBlocksUntilCancelPossibleCase(): RefundSigA.BlocksUntilCancelPossibleCase;

  getCancelConfirmationsCase(): RefundSigA.CancelConfirmationsCase;

  getBlocksUntilPunishPossibleCase(): RefundSigA.BlocksUntilPunishPossibleCase;

  getBlocksUntilSafeBuyCase(): RefundSigA.BlocksUntilSafeBuyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefundSigA.AsObject;
  static toObject(includeInstance: boolean, msg: RefundSigA): RefundSigA.AsObject;
  static serializeBinaryToWriter(message: RefundSigA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefundSigA;
  static deserializeBinaryFromReader(message: RefundSigA, reader: jspb.BinaryReader): RefundSigA;
}

export namespace RefundSigA {
  export type AsObject = {
    arbBlockHeight: number,
    accBlockHeight: number,
    arbLocked: boolean,
    accLocked: boolean,
    buyPublished: boolean,
    cancelSeen: boolean,
    refundSeen: boolean,
    overfunded: boolean,
    arbConfs: number,
    accConfs: number,
    cancelBlocks: number,
    cancelConfs: number,
    punishBlocks: number,
    buyBlocks: number,
  }

  export enum ArbLockConfirmationsCase { 
    ARB_LOCK_CONFIRMATIONS_NOT_SET = 0,
    ARB_CONFS = 9,
  }

  export enum AccLockConfirmationsCase { 
    ACC_LOCK_CONFIRMATIONS_NOT_SET = 0,
    ACC_CONFS = 10,
  }

  export enum BlocksUntilCancelPossibleCase { 
    BLOCKS_UNTIL_CANCEL_POSSIBLE_NOT_SET = 0,
    CANCEL_BLOCKS = 11,
  }

  export enum CancelConfirmationsCase { 
    CANCEL_CONFIRMATIONS_NOT_SET = 0,
    CANCEL_CONFS = 12,
  }

  export enum BlocksUntilPunishPossibleCase { 
    BLOCKS_UNTIL_PUNISH_POSSIBLE_NOT_SET = 0,
    PUNISH_BLOCKS = 13,
  }

  export enum BlocksUntilSafeBuyCase { 
    BLOCKS_UNTIL_SAFE_BUY_NOT_SET = 0,
    BUY_BLOCKS = 14,
  }
}

export class CoreArbB extends jspb.Message {
  getArbBlockHeight(): number;
  setArbBlockHeight(value: number): CoreArbB;

  getAccBlockHeight(): number;
  setAccBlockHeight(value: number): CoreArbB;

  getArbLocked(): boolean;
  setArbLocked(value: boolean): CoreArbB;

  getAccLocked(): boolean;
  setAccLocked(value: boolean): CoreArbB;

  getBuyPublished(): boolean;
  setBuyPublished(value: boolean): CoreArbB;

  getRefundSeen(): boolean;
  setRefundSeen(value: boolean): CoreArbB;

  getArbConfs(): number;
  setArbConfs(value: number): CoreArbB;

  getAccConfs(): number;
  setAccConfs(value: number): CoreArbB;

  getCancelBlocks(): number;
  setCancelBlocks(value: number): CoreArbB;

  getCancelConfs(): number;
  setCancelConfs(value: number): CoreArbB;

  getRefundBlocks(): number;
  setRefundBlocks(value: number): CoreArbB;

  getPunishBlocks(): number;
  setPunishBlocks(value: number): CoreArbB;

  getArbLockConfirmationsCase(): CoreArbB.ArbLockConfirmationsCase;

  getAccLockConfirmationsCase(): CoreArbB.AccLockConfirmationsCase;

  getBlocksUntilCancelPossibleCase(): CoreArbB.BlocksUntilCancelPossibleCase;

  getCancelConfirmationsCase(): CoreArbB.CancelConfirmationsCase;

  getBlocksUntilRefundCase(): CoreArbB.BlocksUntilRefundCase;

  getBlocksUntilPunishPossibleCase(): CoreArbB.BlocksUntilPunishPossibleCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoreArbB.AsObject;
  static toObject(includeInstance: boolean, msg: CoreArbB): CoreArbB.AsObject;
  static serializeBinaryToWriter(message: CoreArbB, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoreArbB;
  static deserializeBinaryFromReader(message: CoreArbB, reader: jspb.BinaryReader): CoreArbB;
}

export namespace CoreArbB {
  export type AsObject = {
    arbBlockHeight: number,
    accBlockHeight: number,
    arbLocked: boolean,
    accLocked: boolean,
    buyPublished: boolean,
    refundSeen: boolean,
    arbConfs: number,
    accConfs: number,
    cancelBlocks: number,
    cancelConfs: number,
    refundBlocks: number,
    punishBlocks: number,
  }

  export enum ArbLockConfirmationsCase { 
    ARB_LOCK_CONFIRMATIONS_NOT_SET = 0,
    ARB_CONFS = 9,
  }

  export enum AccLockConfirmationsCase { 
    ACC_LOCK_CONFIRMATIONS_NOT_SET = 0,
    ACC_CONFS = 10,
  }

  export enum BlocksUntilCancelPossibleCase { 
    BLOCKS_UNTIL_CANCEL_POSSIBLE_NOT_SET = 0,
    CANCEL_BLOCKS = 11,
  }

  export enum CancelConfirmationsCase { 
    CANCEL_CONFIRMATIONS_NOT_SET = 0,
    CANCEL_CONFS = 12,
  }

  export enum BlocksUntilRefundCase { 
    BLOCKS_UNTIL_REFUND_NOT_SET = 0,
    REFUND_BLOCKS = 13,
  }

  export enum BlocksUntilPunishPossibleCase { 
    BLOCKS_UNTIL_PUNISH_POSSIBLE_NOT_SET = 0,
    PUNISH_BLOCKS = 14,
  }
}

export class BuySigB extends jspb.Message {
  getArbBlockHeight(): number;
  setArbBlockHeight(value: number): BuySigB;

  getAccBlockHeight(): number;
  setAccBlockHeight(value: number): BuySigB;

  getBuyTxSeen(): boolean;
  setBuyTxSeen(value: boolean): BuySigB;

  getArbConfs(): number;
  setArbConfs(value: number): BuySigB;

  getAccConfs(): number;
  setAccConfs(value: number): BuySigB;

  getCancelBlocks(): number;
  setCancelBlocks(value: number): BuySigB;

  getCancelConfs(): number;
  setCancelConfs(value: number): BuySigB;

  getRefundBlocks(): number;
  setRefundBlocks(value: number): BuySigB;

  getPunishBlocks(): number;
  setPunishBlocks(value: number): BuySigB;

  getBuyMoneroBlocks(): number;
  setBuyMoneroBlocks(value: number): BuySigB;

  getArbLockConfirmationsCase(): BuySigB.ArbLockConfirmationsCase;

  getAccLockConfirmationsCase(): BuySigB.AccLockConfirmationsCase;

  getBlocksUntilCancelPossibleCase(): BuySigB.BlocksUntilCancelPossibleCase;

  getCancelConfirmationsCase(): BuySigB.CancelConfirmationsCase;

  getBlocksUntilRefundCase(): BuySigB.BlocksUntilRefundCase;

  getBlocksUntilPunishPossibleCase(): BuySigB.BlocksUntilPunishPossibleCase;

  getBlocksUntilSafeMoneroBuySweepCase(): BuySigB.BlocksUntilSafeMoneroBuySweepCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuySigB.AsObject;
  static toObject(includeInstance: boolean, msg: BuySigB): BuySigB.AsObject;
  static serializeBinaryToWriter(message: BuySigB, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuySigB;
  static deserializeBinaryFromReader(message: BuySigB, reader: jspb.BinaryReader): BuySigB;
}

export namespace BuySigB {
  export type AsObject = {
    arbBlockHeight: number,
    accBlockHeight: number,
    buyTxSeen: boolean,
    arbConfs: number,
    accConfs: number,
    cancelBlocks: number,
    cancelConfs: number,
    refundBlocks: number,
    punishBlocks: number,
    buyMoneroBlocks: number,
  }

  export enum ArbLockConfirmationsCase { 
    ARB_LOCK_CONFIRMATIONS_NOT_SET = 0,
    ARB_CONFS = 4,
  }

  export enum AccLockConfirmationsCase { 
    ACC_LOCK_CONFIRMATIONS_NOT_SET = 0,
    ACC_CONFS = 5,
  }

  export enum BlocksUntilCancelPossibleCase { 
    BLOCKS_UNTIL_CANCEL_POSSIBLE_NOT_SET = 0,
    CANCEL_BLOCKS = 6,
  }

  export enum CancelConfirmationsCase { 
    CANCEL_CONFIRMATIONS_NOT_SET = 0,
    CANCEL_CONFS = 7,
  }

  export enum BlocksUntilRefundCase { 
    BLOCKS_UNTIL_REFUND_NOT_SET = 0,
    REFUND_BLOCKS = 8,
  }

  export enum BlocksUntilPunishPossibleCase { 
    BLOCKS_UNTIL_PUNISH_POSSIBLE_NOT_SET = 0,
    PUNISH_BLOCKS = 9,
  }

  export enum BlocksUntilSafeMoneroBuySweepCase { 
    BLOCKS_UNTIL_SAFE_MONERO_BUY_SWEEP_NOT_SET = 0,
    BUY_MONERO_BLOCKS = 10,
  }
}

export class ConnectSwapRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ConnectSwapRequest;

  getSwapId(): string;
  setSwapId(value: string): ConnectSwapRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectSwapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectSwapRequest): ConnectSwapRequest.AsObject;
  static serializeBinaryToWriter(message: ConnectSwapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectSwapRequest;
  static deserializeBinaryFromReader(message: ConnectSwapRequest, reader: jspb.BinaryReader): ConnectSwapRequest;
}

export namespace ConnectSwapRequest {
  export type AsObject = {
    id: number,
    swapId: string,
  }
}

export class ConnectSwapResponse extends jspb.Message {
  getId(): number;
  setId(value: number): ConnectSwapResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectSwapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectSwapResponse): ConnectSwapResponse.AsObject;
  static serializeBinaryToWriter(message: ConnectSwapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectSwapResponse;
  static deserializeBinaryFromReader(message: ConnectSwapResponse, reader: jspb.BinaryReader): ConnectSwapResponse;
}

export namespace ConnectSwapResponse {
  export type AsObject = {
    id: number,
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

  getFundingInfosList(): Array<FundingInfo>;
  setFundingInfosList(value: Array<FundingInfo>): NeedsFundingResponse;
  clearFundingInfosList(): NeedsFundingResponse;
  addFundingInfos(value?: FundingInfo, index?: number): FundingInfo;

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
    fundingInfosList: Array<FundingInfo.AsObject>,
  }
}

export class FundingInfo extends jspb.Message {
  getSwapId(): string;
  setSwapId(value: string): FundingInfo;

  getAddress(): string;
  setAddress(value: string): FundingInfo;

  getAmount(): number;
  setAmount(value: number): FundingInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FundingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FundingInfo): FundingInfo.AsObject;
  static serializeBinaryToWriter(message: FundingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FundingInfo;
  static deserializeBinaryFromReader(message: FundingInfo, reader: jspb.BinaryReader): FundingInfo;
}

export namespace FundingInfo {
  export type AsObject = {
    swapId: string,
    address: string,
    amount: number,
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

export enum HealthCheckSelector { 
  CHECK_ALL = 0,
  CHECK_MAINNET = 1,
  CHECK_TESTNET = 2,
  CHECK_LOCAL = 3,
}
export enum OfferSelector { 
  OPEN = 0,
  IN_PROGRESS = 1,
  ENDED = 2,
  ALL = 3,
}
export enum CheckpointSelector { 
  ALL_CHECKPOINTS = 0,
  AVAILABLE_FOR_RESTORE = 1,
}
export enum TradeRole { 
  MAKER = 0,
  TAKER = 1,
}
export enum Outcome { 
  SUCCESSSWAP = 0,
  FAILUREREFUND = 1,
  FAILUREPUNISH = 2,
  FAILUREABORT = 3,
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
