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
figma.on("selectionchange", () => __awaiter(void 0, void 0, void 0, function* () {
    const selections = figma.currentPage.selection;
    if (!selections.length) {
        return;
    }
    const selection = selections[0];
    console.log(yield (0, createNode_1.createNode)(selection));
}));
figma.showUI(__html__, {
    width: 400,
    height: 600,
    title: "LowCode"
});
