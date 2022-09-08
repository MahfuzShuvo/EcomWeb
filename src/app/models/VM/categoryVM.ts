import { Category } from './../category';
export class CategoryVM {
    categoryId!: number;
    name!: string;
    parentId!: number;
    hasChild!: boolean;
    status!: boolean;
    child?: CategoryVM[] = [];
}