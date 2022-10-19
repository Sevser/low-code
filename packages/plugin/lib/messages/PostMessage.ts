import { IPostMessage, PostMessagePayload, PostMessageType } from "./IPostMessage";

export class PostMessage implements IPostMessage {
    public type: PostMessageType;
    public payload: PostMessagePayload;
    constructor(params: IPostMessage) {
        this.type = params.type;
        this.payload = params.payload;
    }
}