import { FrameNodeHandler } from "./types/nodes/frameNode";
export function createNode(node) {
    if (FrameNodeHandler.checkForNode(node)) {
        return new FrameNodeHandler(node);
    }
    return null;
}
;
