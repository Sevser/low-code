import { createNode } from "./createNode";

figma.on("selectionchange", async () => {
    const selections = figma.currentPage.selection;
    if (!selections.length) {
        return;
    }
    const selection = selections[0];
    console.log(await createNode(selection));
})

figma.showUI(
    __html__,
    {
        width: 400,
        height: 600,
        title: "LowCode"
    }
);
