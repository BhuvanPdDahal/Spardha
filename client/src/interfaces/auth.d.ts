import { ObjectId } from 'mongodb';

export interface FormDataProp {
    fullName: string;
    email: string;
    password: string;
}

export interface State {
    isLoading: boolean;
    user: User;
    token: string;
}

interface UserType {
    _id: ObjectId;
    fullName: string;
    email: string;
    password: string;
    joinedAt: string;
}

export type User = UserType | null;

interface Data {
    user?: UserType;
    token?: string;
}

export interface Action {
    type: string;
    for?: string;
    data?: Data;
}