"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createNode_1 = require("./createNode");
const PostMessage_1 = require("./messages/PostMessage");
const selectionChange = () => __awaiter(void 0, void 0, void 0, function* () {
    const selections = figma.currentPage.selection;
    let message = new PostMessage_1.PostMessage({
        type: 'selectionChange',
        payload: null,
    });
    if (selections.length !== 0) {
        const selection = selections[0];
        try {
            message.payload = yield (0, createNode_1.createNode)(selection);
        }
        catch (_a) { }
    }
    console.log('selected node:', message.payload);
    figma.ui.postMessage(message);
});
figma.on("selectionchange", selectionChange);
figma.showUI(__html__, {
    width: 400,
    height: 600,
    title: "LowCode"
});
selectionChange();
