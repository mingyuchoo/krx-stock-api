export default class DailyInformation {
    date: string;
    price: number;
    change: number;
    start: number;
    high: number;
    low: number;
    volume: number;
    amount: number;
    constructor({ day_Date, day_EndPrice, day_Dungrak, day_getDebi, day_Start, day_High, day_Low, day_Volume, day_getAmount, }: {
        day_Date: any;
        day_EndPrice: any;
        day_Dungrak: any;
        day_getDebi: any;
        day_Start: any;
        day_High: any;
        day_Low: any;
        day_Volume: any;
        day_getAmount: any;
    });
}
