export class Comment {
  constructor(
    public id: number,
    public taskId: number,
    public userId: number,
    public message: string,
    public createdAt: Date
  ) {}

}