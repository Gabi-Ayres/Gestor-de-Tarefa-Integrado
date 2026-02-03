export class Paginator {
    paginate(items, page, size) {
        const startIndex = (page - 1) * size;
        const endIndex = startIndex + 1;
        return items.slice(startIndex, endIndex);
    }
}
