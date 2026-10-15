import type { NFT } from './nft';

export interface CartItem {
  nftId: string;
  quantity: number;
  nft: NFT;
}

export interface QuoteRequest {
  items: Array<{
    nftId: string;
    quantity: number;
  }>;
  couponCode?: string;
}

export interface QuoteResponse {
  subtotalEth: string;
  discountEth: string;
  networkFeeEth: string;
  totalEth: string;
  appliedCoupon?: {
    code: string;
    discountPercentage: number;
  };
  isValid: boolean;
  hasPriceOrAvailabilityChanges: boolean;
  warnings?: string[];
}

export interface Cart {
  items: CartItem[];
  quote?: QuoteResponse;
}
