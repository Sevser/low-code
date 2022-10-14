import { createNode } from "./createNode";

figma.on("selectionchange", () => {
    const selections = figma.currentPage.selection;
    if (!selections.length) {
        return;
    }
    const selection = selections[0]; 
    console.log(createNode(selection));
})

figma.showUI(
    __html__,
    {
        width: 400,
        height: 600,
        title: "LowCode"
    }
);
