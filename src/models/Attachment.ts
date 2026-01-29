export class Attachment {
  constructor(
    public readonly id: number,
    public readonly taskId: number,
    public filename: string,
    public size: number, // em bytes
    public url: string,
    public readonly uploadedAt: Date = new Date()
  ) {}
}
