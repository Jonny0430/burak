import { MemberStatus, MemberType } from "../enums/member.enum";

export interface MemberInput {
    memberTaype?: MemberType;
    memberStatus?: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: number;
}