<template>
    <PDFDocument v-bind:src="'/assets/testa.pdf'" />
</template>

<script>
import PDFDocument from "./pdf/PDFDocument.vue"

export default {
  components: {
      PDFDocument
  }
}
</script>
