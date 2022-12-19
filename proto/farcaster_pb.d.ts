import * as jspb from 'google-protobuf'



export class HealthCheckRequest extends jspb.Message {
  getId(): number;
  setId(value: number): HealthCheckRequest;

  getSelector(): NetworkSelector;
  setSelector(value: NetworkSelector): HealthCheckRequest;

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
    selector: NetworkSelector,
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

  getDealsList(): Array<string>;
  setDealsList(value: Array<string>): InfoResponse;
  clearDealsList(): InfoResponse;
  addDeals(value: string, index?: number): InfoResponse;

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
    dealsList: Array<string>,
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

  getDeal(): DealInfo | undefined;
  setDeal(value?: DealInfo): SwapInfoResponse;
  hasDeal(): boolean;
  clearDeal(): SwapInfoResponse;

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
    deal?: DealInfo.AsObject,
    connected: boolean,
    tradeRole: TradeRole,
    swapRole: SwapRole,
    connectedCounterpartyNodeId: string,
    state: string,
  }
}

export class DealInfoRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DealInfoRequest;

  getDeal(): string;
  setDeal(value: string): DealInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DealInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DealInfoRequest): DealInfoRequest.AsObject;
  static serializeBinaryToWriter(message: DealInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DealInfoRequest;
  static deserializeBinaryFromReader(message: DealInfoRequest, reader: jspb.BinaryReader): DealInfoRequest;
}

export namespace DealInfoRequest {
  export type AsObject = {
    id: number,
    deal: string,
  }
}

export class DealInfoResponse extends jspb.Message {
  getId(): number;
  setId(value: number): DealInfoResponse;

  getDeserializedDeal(): DeserializedDeal | undefined;
  setDeserializedDeal(value?: DeserializedDeal): DealInfoResponse;
  hasDeserializedDeal(): boolean;
  clearDeserializedDeal(): DealInfoResponse;

  getDeal(): string;
  setDeal(value: string): DealInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DealInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DealInfoResponse): DealInfoResponse.AsObject;
  static serializeBinaryToWriter(message: DealInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DealInfoResponse;
  static deserializeBinaryFromReader(message: DealInfoResponse, reader: jspb.BinaryReader): DealInfoResponse;
}

export namespace DealInfoResponse {
  export type AsObject = {
    id: number,
    deserializedDeal?: DeserializedDeal.AsObject,
    deal: string,
  }
}

export class DealInfo extends jspb.Message {
  getDeserializedDeal(): DeserializedDeal | undefined;
  setDeserializedDeal(value?: DeserializedDeal): DealInfo;
  hasDeserializedDeal(): boolean;
  clearDeserializedDeal(): DealInfo;

  getSerializedDeal(): string;
  setSerializedDeal(value: string): DealInfo;

  getLocalTradeRole(): TradeRole;
  setLocalTradeRole(value: TradeRole): DealInfo;

  getDealStatus(): DealStatus;
  setDealStatus(value: DealStatus): DealInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DealInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DealInfo): DealInfo.AsObject;
  static serializeBinaryToWriter(message: DealInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DealInfo;
  static deserializeBinaryFromReader(message: DealInfo, reader: jspb.BinaryReader): DealInfo;
}

export namespace DealInfo {
  export type AsObject = {
    deserializedDeal?: DeserializedDeal.AsObject,
    serializedDeal: string,
    localTradeRole: TradeRole,
    dealStatus: DealStatus,
  }
}

export class DeserializedDeal extends jspb.Message {
  getArbitratingAmount(): number;
  setArbitratingAmount(value: number): DeserializedDeal;

  getAccordantAmount(): number;
  setAccordantAmount(value: number): DeserializedDeal;

  getCancelTimelock(): number;
  setCancelTimelock(value: number): DeserializedDeal;

  getPunishTimelock(): number;
  setPunishTimelock(value: number): DeserializedDeal;

  getFeeStrategy(): string;
  setFeeStrategy(value: string): DeserializedDeal;

  getMakerRole(): SwapRole;
  setMakerRole(value: SwapRole): DeserializedDeal;

  getUuid(): string;
  setUuid(value: string): DeserializedDeal;

  getNetwork(): Network;
  setNetwork(value: Network): DeserializedDeal;

  getArbitratingBlockchain(): Blockchain;
  setArbitratingBlockchain(value: Blockchain): DeserializedDeal;

  getAccordantBlockchain(): Blockchain;
  setAccordantBlockchain(value: Blockchain): DeserializedDeal;

  getNodeId(): string;
  setNodeId(value: string): DeserializedDeal;

  getPeerAddress(): string;
  setPeerAddress(value: string): DeserializedDeal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeserializedDeal.AsObject;
  static toObject(includeInstance: boolean, msg: DeserializedDeal): DeserializedDeal.AsObject;
  static serializeBinaryToWriter(message: DeserializedDeal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeserializedDeal;
  static deserializeBinaryFromReader(message: DeserializedDeal, reader: jspb.BinaryReader): DeserializedDeal;
}

export namespace DeserializedDeal {
  export type AsObject = {
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

export class ListDealsRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ListDealsRequest;

  getDealSelector(): DealSelector;
  setDealSelector(value: DealSelector): ListDealsRequest;

  getNetworkSelector(): NetworkSelector;
  setNetworkSelector(value: NetworkSelector): ListDealsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDealsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDealsRequest): ListDealsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDealsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDealsRequest;
  static deserializeBinaryFromReader(message: ListDealsRequest, reader: jspb.BinaryReader): ListDealsRequest;
}

export namespace ListDealsRequest {
  export type AsObject = {
    id: number,
    dealSelector: DealSelector,
    networkSelector: NetworkSelector,
  }
}

export class ListDealsResponse extends jspb.Message {
  getId(): number;
  setId(value: number): ListDealsResponse;

  getDealsList(): Array<DealInfo>;
  setDealsList(value: Array<DealInfo>): ListDealsResponse;
  clearDealsList(): ListDealsResponse;
  addDeals(value?: DealInfo, index?: number): DealInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDealsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDealsResponse): ListDealsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDealsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDealsResponse;
  static deserializeBinaryFromReader(message: ListDealsResponse, reader: jspb.BinaryReader): ListDealsResponse;
}

export namespace ListDealsResponse {
  export type AsObject = {
    id: number,
    dealsList: Array<DealInfo.AsObject>,
  }
}

export class CheckpointsRequest extends jspb.Message {
  getId(): number;
  setId(value: number): CheckpointsRequest;

  getCheckpointSelector(): CheckpointSelector;
  setCheckpointSelector(value: CheckpointSelector): CheckpointsRequest;

  getNetworkSelector(): NetworkSelector;
  setNetworkSelector(value: NetworkSelector): CheckpointsRequest;

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
    checkpointSelector: CheckpointSelector,
    networkSelector: NetworkSelector,
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

  getDeal(): DealInfo | undefined;
  setDeal(value?: DealInfo): CheckpointEntry;
  hasDeal(): boolean;
  clearDeal(): CheckpointEntry;

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
    deal?: DealInfo.AsObject,
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

  getNetworkSelector(): NetworkSelector;
  setNetworkSelector(value: NetworkSelector): FundingAddressesRequest;

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
    networkSelector: NetworkSelector,
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

  getDeserializedDeal(): DeserializedDeal | undefined;
  setDeserializedDeal(value?: DeserializedDeal): MakeResponse;
  hasDeserializedDeal(): boolean;
  clearDeserializedDeal(): MakeResponse;

  getDeal(): string;
  setDeal(value: string): MakeResponse;

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
    deserializedDeal?: DeserializedDeal.AsObject,
    deal: string,
  }
}

export class TakeRequest extends jspb.Message {
  getId(): number;
  setId(value: number): TakeRequest;

  getDeal(): string;
  setDeal(value: string): TakeRequest;

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
    deal: string,
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

export class RevokeDealRequest extends jspb.Message {
  getId(): number;
  setId(value: number): RevokeDealRequest;

  getDeal(): string;
  setDeal(value: string): RevokeDealRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeDealRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeDealRequest): RevokeDealRequest.AsObject;
  static serializeBinaryToWriter(message: RevokeDealRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeDealRequest;
  static deserializeBinaryFromReader(message: RevokeDealRequest, reader: jspb.BinaryReader): RevokeDealRequest;
}

export namespace RevokeDealRequest {
  export type AsObject = {
    id: number,
    deal: string,
  }
}

export class RevokeDealResponse extends jspb.Message {
  getId(): number;
  setId(value: number): RevokeDealResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeDealResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeDealResponse): RevokeDealResponse.AsObject;
  static serializeBinaryToWriter(message: RevokeDealResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeDealResponse;
  static deserializeBinaryFromReader(message: RevokeDealResponse, reader: jspb.BinaryReader): RevokeDealResponse;
}

export namespace RevokeDealResponse {
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
  getState(): string;
  setState(value: string): State;

  getArbBlockHeight(): number;
  setArbBlockHeight(value: number): State;

  getAccBlockHeight(): number;
  setAccBlockHeight(value: number): State;

  getArbLocked(): boolean;
  setArbLocked(value: boolean): State;

  getAccLocked(): boolean;
  setAccLocked(value: boolean): State;

  getCanceled(): boolean;
  setCanceled(value: boolean): State;

  getBuySeen(): boolean;
  setBuySeen(value: boolean): State;

  getRefundSeen(): boolean;
  setRefundSeen(value: boolean): State;

  getOverfunded(): boolean;
  setOverfunded(value: boolean): State;

  getArbConfs(): number;
  setArbConfs(value: number): State;

  getAccConfs(): number;
  setAccConfs(value: number): State;

  getCancelConfs(): number;
  setCancelConfs(value: number): State;

  getCancelBlocks(): number;
  setCancelBlocks(value: number): State;

  getPunishBlocks(): number;
  setPunishBlocks(value: number): State;

  getBuyBlocks(): number;
  setBuyBlocks(value: number): State;

  getBuyMoneroBlocks(): number;
  setBuyMoneroBlocks(value: number): State;

  getArbLockConfirmationsCase(): State.ArbLockConfirmationsCase;

  getAccLockConfirmationsCase(): State.AccLockConfirmationsCase;

  getCancelConfirmationsCase(): State.CancelConfirmationsCase;

  getBlocksUntilCancelPossibleCase(): State.BlocksUntilCancelPossibleCase;

  getBlocksUntilPunishPossibleCase(): State.BlocksUntilPunishPossibleCase;

  getBlocksUntilSafeBuyCase(): State.BlocksUntilSafeBuyCase;

  getBlocksUntilSafeMoneroBuySweepCase(): State.BlocksUntilSafeMoneroBuySweepCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): State.AsObject;
  static toObject(includeInstance: boolean, msg: State): State.AsObject;
  static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): State;
  static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
}

export namespace State {
  export type AsObject = {
    state: string,
    arbBlockHeight: number,
    accBlockHeight: number,
    arbLocked: boolean,
    accLocked: boolean,
    canceled: boolean,
    buySeen: boolean,
    refundSeen: boolean,
    overfunded: boolean,
    arbConfs: number,
    accConfs: number,
    cancelConfs: number,
    cancelBlocks: number,
    punishBlocks: number,
    buyBlocks: number,
    buyMoneroBlocks: number,
  }

  export enum ArbLockConfirmationsCase { 
    ARB_LOCK_CONFIRMATIONS_NOT_SET = 0,
    ARB_CONFS = 10,
  }

  export enum AccLockConfirmationsCase { 
    ACC_LOCK_CONFIRMATIONS_NOT_SET = 0,
    ACC_CONFS = 11,
  }

  export enum CancelConfirmationsCase { 
    CANCEL_CONFIRMATIONS_NOT_SET = 0,
    CANCEL_CONFS = 12,
  }

  export enum BlocksUntilCancelPossibleCase { 
    BLOCKS_UNTIL_CANCEL_POSSIBLE_NOT_SET = 0,
    CANCEL_BLOCKS = 13,
  }

  export enum BlocksUntilPunishPossibleCase { 
    BLOCKS_UNTIL_PUNISH_POSSIBLE_NOT_SET = 0,
    PUNISH_BLOCKS = 14,
  }

  export enum BlocksUntilSafeBuyCase { 
    BLOCKS_UNTIL_SAFE_BUY_NOT_SET = 0,
    BUY_BLOCKS = 15,
  }

  export enum BlocksUntilSafeMoneroBuySweepCase { 
    BLOCKS_UNTIL_SAFE_MONERO_BUY_SWEEP_NOT_SET = 0,
    BUY_MONERO_BLOCKS = 16,
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

  getNetworkSelector(): NetworkSelector;
  setNetworkSelector(value: NetworkSelector): NeedsFundingRequest;

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
    networkSelector: NetworkSelector,
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

export enum NetworkSelector { 
  ALL_NETWORKS = 0,
  MAINNET_NETWORKS = 1,
  TESTNET_NETWORKS = 2,
  LOCAL_NETWORKS = 3,
}
export enum DealStatus { 
  DEAL_OPEN = 0,
  DEAL_IN_PROGRESS = 1,
  DEAL_ENDED_SUCCESS_SWAP = 2,
  DEAL_ENDED_FAILURE_REFUND = 3,
  DEAL_ENDED_FAILURE_PUNISH = 4,
  DEAL_ENDED_FAILURE_ABORT = 5,
}
export enum DealSelector { 
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
