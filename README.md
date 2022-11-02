**Low Code is Project for generating VueJS SFC from Figma sketches**

This software can create a live preview for Figma sketches.

# Installation

run `lerna bootstrap`

# Launch

* run backend with command `yarn dev:backend`
* in different terminal run `yarn dev:ui`
* in third terminal run `yarn dev:plugin`
* in fourth terminal run `yarn dev:plugin-tsc`
* open figma and add plugin for development form manifest. Select this file `./packages/plugin/manifest.json`
* run plugin

# Features

Plugin can convert Image, Svg, Text nodes with styles. Frame should use auto-layout. In preview tab you will see live preview of component.



