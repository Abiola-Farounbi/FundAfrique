export class Paginate<Type> {

    constructor(data: Type[], total: number) {
        this.data = data;
        this.total = total;
    }
    total: number;

    data: Type[];
}