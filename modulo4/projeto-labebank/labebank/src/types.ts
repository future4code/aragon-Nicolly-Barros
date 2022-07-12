export type Customers = {
    id: number,
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    accountPaid: AccountPaid[]
}

export type AccountPaid = {
    value: number,
    description: string,
    date: string
}