import { Key, ReactNode } from "react"

type IRoles = "ADMIN" | "PERSONNEL" | "USER"

const enum Roles {
    ADMIN = "ADMIN",
    PERSONNEL = "PERSONNEL",
    USER = "USER"
}

interface IUser {
    id: Key | null | undefined
    name: ReactNode
    _id?: string,
    fullname: string,
    quarter: string,
    email: string,
    password: string,
    idNumber: string
    role: IRoles,
    phonenumber: string,
    verified: boolean
}

interface IOrder {
    userId: string,
    idNumber: string
    name: string
    pointFrom: string
    pointTo: string
    nameOfGood: string
    status: string
    vehicle: string
    timeDeparture: string
}

export { Roles };

export type { IRoles, IUser, IOrder };
