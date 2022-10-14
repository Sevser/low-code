import { INode } from "./Itypes/INode";
import { FrameNodeHandler } from "./types/nodes/frameNode";

export function createNode(node): INode | null {
    if (FrameNodeHandler.checkForNode(node)) {
        return new FrameNodeHandler(node);
    }
    return null;
};