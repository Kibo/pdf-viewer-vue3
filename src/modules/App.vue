<template>
    <PDFViewer v-bind:src="'/assets/testa.pdf'" />
</template>

<script>
import Utils from "./tools/Utils.js"
import PDFViewer from "./pdf/PDFViewer.vue"

export default {
  components: {
      PDFViewer
  },
	emits: [],
  props: [],
  data() {
    return {

    }
  },
  methods: {}
}
</script>
