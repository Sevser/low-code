import renderTemplate from "./renders/index.js";
import transformToTemplate from "./utills/transform.js";

const generateTemplate = (frame) => {
    return `<template>${transformToTemplate(renderTemplate(frame))}</template>`;
}

export default generateTemplate;