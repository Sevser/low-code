import { createNode } from "./createNode";
import { PostMessage } from "./messages/PostMessage";

const selectionChange = async () => {
    const selections = figma.currentPage.selection;
    let message = new PostMessage({
        type: 'selectionChange',
        payload: null,
    });
    if (selections.length !== 0) {
        const selection = selections[0];
        try {
            message.payload = await createNode(selection);
        } catch {}
    }
    console.log('selected node:', message.payload);
    figma.ui.postMessage(message);
};

figma.on("selectionchange", selectionChange);



figma.showUI(
    __html__,
    {
        width: 400,
        height: 600,
        title: "LowCode"
    }
);
selectionChange();
