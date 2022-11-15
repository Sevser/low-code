import { INode } from "./Itypes/INode";
import { FrameNodeModel } from "./types/nodes/frameNode";
import { ImageNodeModel } from "./types/nodes/imageNode";
import { InstanceNodeModel } from "./types/nodes/instanceNode";
import { TextNodeModel } from "./types/nodes/textNode";
import { VectorNodeModel } from "./types/nodes/vectorNode";

export async function createNode(node): Promise<INode | null> {
    if (FrameNodeModel.checkForNode(node)) {
        return await FrameNodeModel.createNode(node);
    }
    if (TextNodeModel.checkForNode(node)) {
        return await TextNodeModel.createNode(node);
    }
    if (VectorNodeModel.checkForNode(node)) {
        return await VectorNodeModel.createNode(node);
    }
    if (ImageNodeModel.checkForNode(node)) {
        return await ImageNodeModel.createNode(node);
    }
    if (InstanceNodeModel.checkForNode(node)) {
        return await InstanceNodeModel.createNode(node);
    }
    return null;
};