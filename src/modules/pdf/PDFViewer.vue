<template>
  PDF viewer
</template>

<script>
import Utils from "../tools/Utils.js"
//import pdfjs from 'pdfjs-dist/webpack'

const pdfjs = require("pdfjs-dist/build/pdf.js");
const PdfjsWorker = require("pdfjs-dist/build/pdf.worker.js");
pdfjs.GlobalWorkerOptions.workerPort = new PdfjsWorker();

//import { PDFDocumentProxy, PDFViewerParams, PDFSource, PDFPromise } from 'pdfjs-dist';

export default {
  components: {

  },
	emits: [],
  props: ['src'],
  data() {
    return {
    	utils:Utils,
      pdf:null
    }
  },
  computed: {},
  mounted() {
    console.log( this.src )
    this.fetchPDF();
    console.log( this.pdf )
  },
	beforeUnmount(){},
  methods: {
    async fetchPDF(){
      try{
        this.pdf = await pdfjs.getDocument( this.src )
      }catch(e){
        console.error(e)
      }
    }
  }
}
</script>
