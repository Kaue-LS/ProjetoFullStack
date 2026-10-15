import type { CartItem } from './cart';

export type OrderStatus = 'pending' | 'confirmed' | 'rejected';

export interface CreateOrderPayload {
  idempotencyKey: string;
  walletAddress: string;
  network: 'ethereum' | 'polygon' | 'arbitrum';
  items: Array<{
    nftId: string;
    quantity: number;
    priceEthAtPurchase: string;
  }>;
  couponCode?: string;
  quoteTotalEth: string;
}
export interface Order {
  id: string;
  idempotencyKey: string;
  status: OrderStatus;
  items: CartItem[];
  subtotalEth: string;
  discountEth: string;
  networkFeeEth: string;
  totalEth: string;
  walletAddress: string;
  network: string;
  transactionHash?: string;
  createdAt: string;
  updatedAt: string;
}
