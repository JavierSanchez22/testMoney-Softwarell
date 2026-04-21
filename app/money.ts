export class InvalidMoneyError extends Error {
    constructor() {
        super('Invalid money');
    }
}

export class CurrencyMismatchError extends Error {
    constructor() {
        super('Currencies must match');
    }
}

export class Money {
    constructor(public readonly amount: number, public readonly currency: string) {
        if (amount < 0) {
            throw new InvalidMoneyError();
        }
    }

    static create(amount: number, currency: string): Money {
        return new Money(amount, currency);
    }

    add(other: Money): Money {
        if (this.currency !== other.currency) {
            throw new CurrencyMismatchError();
        }
        return new Money(this.amount + other.amount, this.currency);
    }

    equals(other: Money): boolean {
        return this.amount === other.amount && this.currency === other.currency;
    }
}