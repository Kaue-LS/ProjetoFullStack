export interface Wallet {
  id: string;
  address: string;
  name: string;
  isMain: boolean;
  network: 'ethereum' | 'polygon' | 'arbitrum';
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  username: string;
  avatarUrl?: string;
  mainWallet?: Wallet;
  secondaryWallet?: Wallet;
}

export interface AuthSession {
  user: UserProfile;
  token: string;
  expireAt: string;
}
