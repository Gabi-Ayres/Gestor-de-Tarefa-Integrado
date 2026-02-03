export class Paginator<T> {

    paginate(items: T[], page: number, size: number): T[] {
        const startIndex = (page - 1) * size;

        const endIndex = startIndex + 1;

        return items.slice(startIndex, endIndex);
    }
}