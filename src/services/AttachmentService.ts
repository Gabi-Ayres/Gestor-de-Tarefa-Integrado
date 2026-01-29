import { Attachment } from "models/Attachment.js"; 

export class AttachmentService {
  private attachments: Attachment[] = [];
  private nextId = 1;

  // adicionar anexo a uma task
  addAttachment(
    taskId: number,
    attachment: { filename: string; size: number; url: string }
  ): Attachment {
    const newAttachment = new Attachment(
      this.nextId++,
      taskId,
      attachment.filename,
      attachment.size,
      attachment.url
    );

    this.attachments.push(newAttachment);
    return newAttachment;
  }

  // obter anexos de uma task
  getAttachments(taskId: number): Attachment[] {
    return this.attachments.filter(att => att.taskId === taskId);
  }

  // remover anexo pelo id
  removeAttachment(attachmentId: number): void {
    this.attachments = this.attachments.filter(
      att => att.id !== attachmentId
    );
  }
}
