# PDF viewer component

Simple Vue3 component for rendering PDF on HTML page.

## Version
- 0.4.1

### Dependencies
- [Vue.js](https://vuejs.org/)
- [Pdf.js]( https://github.com/mozilla/pdf.js )

### Tools
- [NPM](https://npmjs.org) - Node.js package manager.
- [Webpack](https://webpack.js.org/) - The JavaScript module bundler.

### Build
```
$ git clone git@github.com:Kibo/pdf-viewer-vue3.git
$ cd pdf-viewer-vue3
$ npm install
$ npm run build
```

```
$ npm run start
```
Open http://localhost:3000 in your browser.

### Example
```
<template>
    <PDFDocument v-bind:src="'/assets/seminars.pdf'" />
</template>

<script>
import PDFDocument from "./pdf/PDFDocument.vue"

export default {
  components: {
      PDFDocument
  }
}
</script>
```

### Screen
<img src="https://raw.githubusercontent.com/Kibo/pdf-viewer-vue3/master/src/img/screen1.jpg" alt="PDF screen">
