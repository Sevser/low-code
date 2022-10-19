import { INode } from "../Itypes/INode";

export interface IPayload {

}

export type PostMessageType = "selectionChange";
export type PostMessagePayload = null | IPayload | INode;

export interface IPostMessage {
    type: PostMessageType,
    payload: PostMessagePayload,
}