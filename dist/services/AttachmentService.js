import { Attachment } from "models/Attachment.js";
export class AttachmentService {
    constructor() {
        this.attachments = [];
        this.nextId = 1;
    }
    // adicionar anexo a uma task
    addAttachment(taskId, attachment) {
        const newAttachment = new Attachment(this.nextId++, taskId, attachment.filename, attachment.size, attachment.url);
        this.attachments.push(newAttachment);
        return newAttachment;
    }
    // obter anexos de uma task
    getAttachments(taskId) {
        return this.attachments.filter(att => att.taskId === taskId);
    }
    // remover anexo pelo id
    removeAttachment(attachmentId) {
        this.attachments = this.attachments.filter(att => att.id !== attachmentId);
    }
}
