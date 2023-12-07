type IRoles = "ADMIN" | "PERSONNEL" | "USER"

const enum Roles {
    ADMIN = "ADMIN",
    PERSONNEL = "PERSONNEL",
    USER = "USER"
}

interface IUser {
    _id?: string,
    fullname: string,
    quarter: string,
    email: string,
    password: string,
    roles: IRoles,
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
