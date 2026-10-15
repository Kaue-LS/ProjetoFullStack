export interface NFTUpdatedEventPayload {
  nftId: string;
  priceEth?: string;
  availableQuantity?: number;
  version: number;
  // Identificador de versão para ignorar eventos antigos
}
export interface OrderUpdatedEventPayload {
  orderId: string;
  status: 'confirmed' | 'rejected';
  transactionHash?: string;
  version: number;
}
// Contrato de eventos do Socket.IO Client
export interface ServerToClientEvents {
  'nft.updated': (payload: NFTUpdatedEventPayload) => void;
  'order.updated': (payload: OrderUpdatedEventPayload) => void;
}
export interface ClientToServerEvents {
  subscribeNFT: (nftId: string) => void;
  unsubscribeNFT: (nftId: string) => void;
  subscribeOrder: (orderId: string) => void;
}
