export class RatingSystem {
    constructor() {
        this.ratings = new Map();
    }
    rate(item, value) {
        if (value < 1 || value > 5) {
            throw new Error('Rating must be between 1 and 5');
        }
        const existingRatings = this.ratings.get(item);
        if (!existingRatings) {
            this.ratings.set(item, [value]);
            return;
        }
        existingRatings.push(value);
    }
    getAverage(item) {
        const values = this.ratings.get(item);
        if (!values || values.length === 0) {
            return 0;
        }
        const sum = values.reduce((acc, v) => acc + v, 0);
        return sum / values.length;
    }
    getRatings(item) {
        var _a;
        return (_a = this.ratings.get(item)) !== null && _a !== void 0 ? _a : [];
    }
}
