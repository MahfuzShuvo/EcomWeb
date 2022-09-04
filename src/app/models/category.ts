export class Category {
    categoryId!: number;
    name!: string;
    parentId: number = 0;
    status: boolean = true;
}