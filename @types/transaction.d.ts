export default class Transaction {
    time: string;
    transactionPrice: number;
    change: number;
    sellPrice: number;
    buyPrice: number;
    amount: number;
    constructor({ time, negoprice, Dungrak, Debi, sellprice, buyprice, amount, }: {
        time?: string;
        negoprice: any;
        Dungrak: any;
        Debi: any;
        sellprice: any;
        buyprice: any;
        amount: any;
    });
}
