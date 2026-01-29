export class Attachment {
    constructor(id, taskId, filename, size, // em bytes
    url, uploadedAt = new Date()) {
        this.id = id;
        this.taskId = taskId;
        this.filename = filename;
        this.size = size;
        this.url = url;
        this.uploadedAt = uploadedAt;
    }
}
