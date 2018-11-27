export class Category {
  public id: number;
  public title: string;
  public cluesCount: number;
}

export class Clue {
  public id: number;
  public answer: string;
  public question: string;
  public value: number;
  public categoryId: number;
  public notRequiredButOptional?: boolean;
  public category: Category;
}
