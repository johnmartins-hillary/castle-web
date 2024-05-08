export interface GoogleSignUpProps {
  setLink?: any;
  navigate?: any;
}

export interface UserDataProps {
  user: any;
  token: string | null;
}

export interface UserProfileProps {
  name?: string | null;
  username?: string | null;
  email?: string | null;
  dateofbirth?: string | null;
  country?: string | null;
  state?: string | null;
  bio?: string | null;
  gender?: string | null;
  rate?: string | null;
  profile_image?: any | null;
  list_of_categories?: any | null;
  links?: any | null;
}

export interface AllUsersProps {
  users?: any;
  keyword?: string;
  page_no?: number;
}
export interface SingleUserProps {
  user?: any;
  id?: number;
}

export interface VerifyProfileProp {
  photo_id_front?: any;
  photo_id_back?: any;
}

export interface FundWalletProps {
  amount: any | null;
}

export interface PortfolioProp {
  role?: string | null;
  company?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  works_there?: any | null;
}
export interface SocialLinkProp {
  platform?: string | null;
  url?: string | null;
}

export interface MessageProp {
  message: string;
  from_id: number;
  to_id: number;
  id: number;
}

export interface CallProps {
  peerId?: string | any;
  currentStreamRef?: any | undefined;
  remoteStreamRef?: any | undefined;
  setCurrentPeer?: any;
}
