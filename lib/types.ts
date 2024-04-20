export interface GoogleSignUpProps {
    setLink?: any,
    navigate?: any
}


export interface UserDataProps {
    user: any,
    token: string | null
}



export interface UserProfileProps {
    name?: string | null,
    username?: string | null,
    dateofbirth?: string | null,
    country?: string | null,
    state?: string | null,
    bio?: string | null,
    rate?: string | null,
    profile_image?: any | null
}


export interface AllUsersProps {
    users?: any,
    keyword?: string,
    page_no?: number
}
export interface SingleUserProps {
    user?: any,
    id?: number
}


export interface VerifyProfileProp {
    photo_id_front?: any,
    photo_id_back?: any
}


export interface FundWalletProps {
    amount: any | null
}