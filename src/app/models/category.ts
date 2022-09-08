export class Category {
    categoryId!: number;
    name!: string;
    parentId: number = 0;
    hasChild!: boolean;
    status: boolean = true;
}