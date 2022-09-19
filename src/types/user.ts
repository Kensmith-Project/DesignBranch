export type UserType = "Landlord" | "Renter";

export interface RefreshToken{
    id: number;
    token: string;
    expires: Date;
    isExpired: boolean;
    created: Date;
    createdByIp: string;
    revoked: Date;
    revokedByIp: string;
    replacedByToken: string;
    isActive: boolean;
}

export interface User{
    id: string;
    userName?: string;
    normalizedUserName?: string;
    email?: string;
    normalizedEmail?: string;
    emailConfirmed?: boolean;
    phoneNumber?: string;
    phoneNumberConfirmed?: string;
    twoFactorEnabled?: boolean;
    lockoutEnd?: Date;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
    firstName: string;
    lastName: string;
    refreshTokens?: RefreshToken[];
    userType?: UserType;
};