export interface Author {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  verified: boolean;
}

export interface NFT {
  id: string;
  title: string;
  description: string;
  priceEth: string;
  availableQuantity: number;
  totalQuantity: number;
  imageUrl: string;
  author: Author;
  category:
    | 'art'
    | 'collectibles'
    | 'music'
    | 'photography'
    | 'sports'
    | 'trading-cards'
    | 'utility';
  edition: string;
  isFavorite?: boolean;
  createdAt: string;
}

export interface NFTFilters {
  search?: string;
  category?: string;
  minPriceEth?: string;
  maxPriceEth?: string;
  sortBy?: 'price_asc' | 'price_desc' | 'newest' | 'popular';
  page?: number;
  limit?: number;
}

export interface PaginaedNFTResponse {
  items: NFT[];
  total: number;
  page: number;
  totalPages: number;
  hasMore: boolean;
}
