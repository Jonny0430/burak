import { ObjectId } from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";

export interface MemberInput {
    memberType?: MemberType;
    memberStatus?: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: number;
}

export interface Member {
    _id: Object;
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: number;
    createdAt:  Date;
    updatedAt: Date;
}

export interface LoginInput {
    memberNick: string;
    memberPassword: string;
}