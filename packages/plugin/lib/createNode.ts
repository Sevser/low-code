import { INode } from "./Itypes/INode";
import { FrameNodeModel } from "./types/nodes/frameNode";
import { TextNodeModel } from "./types/nodes/textNode";

export function createNode(node): INode | null {
    if (FrameNodeModel.checkForNode(node)) {
        return new FrameNodeModel(node);
    }
    if (TextNodeModel.checkForNode(node)) {
        return new TextNodeModel(node);
    }
    return null;
};