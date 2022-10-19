import renderTemplate from "./renders/index.js";
import transformToTemplate from "./utills/transform.js";

const generateTemplate = (frame) => {
    return `<template>${transformToTemplate(renderTemplate(frame))}</template>`;
}

export const generateTemplateSSR = (frame) => {
    return `${transformToTemplate(renderTemplate(frame))}`;
}

export default generateTemplate;