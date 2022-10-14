"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createNode_1 = require("./createNode");
figma.on("selectionchange", () => {
    const selections = figma.currentPage.selection;
    if (!selections.length) {
        return;
    }
    const selection = selections[0];
    console.log((0, createNode_1.createNode)(selection));
});
figma.showUI(__html__, {
    width: 400,
    height: 600,
    title: "LowCode"
});
