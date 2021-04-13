<template>
    <PDFDocument v-bind="{src, scale, page}">
        <template slot="loading">
          loading ...
        </template>
    </PDFDocument>
</template>

<script>
import Utils from "./tools/Utils.js"
import PDFDocument from "./pdf/PDFDocument.vue"

export default {
  components: {
      PDFDocument
  },
	emits: [],
  props: [],
  data() {
    return {
      src:'/assets/testa.pdf',
      scale:2,
      page:1
    }
  },
  methods: {}
}
</script>
