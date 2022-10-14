"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
figma.on("selectionchange", () => {
    const selections = figma.currentPage.selection;
    if (!selections.length) {
        return;
    }
    const selection = selections[0];
});
figma.showUI(__html__, {
    width: 400,
    height: 600,
    title: "LowCode"
});
