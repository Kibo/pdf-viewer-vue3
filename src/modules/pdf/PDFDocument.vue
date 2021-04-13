<template>
  <canvas class="d-block mx-auto my-2 bg-dark"
    v-bind:id="utils.getConstant('ID_PDF_CANVAS')"
    v-bind:width="utils.getConstant('PDF_CANVAS_WIDTH')"
    v-bind:height="utils.getConstant('PDF_CANVAS_HEIGHT')">
  </canvas>
  <button class="btn btn-secondary" v-on:click.prevent="prevPage()">Prev</button>
  <button class="btn btn-secondary" v-on:click.prevent="nextPage()">Next</button>
</template>

<script>
import Utils from "../tools/Utils.js"
const pdfjs = require("pdfjs-dist/build/pdf.js");
const PdfjsWorker = require("pdfjs-dist/build/pdf.worker.js");
pdfjs.GlobalWorkerOptions.workerPort = new PdfjsWorker();

//import { PDFDocumentProxy, PDFViewerParams, PDFSource, PDFPromise } from 'pdfjs-dist';

export default {
  components: {

  },
	emits: [],
  props: ['src', 'scale', 'page'],
  data() {
    return {
    	utils:Utils,

      currentPageIndex:0,
      pdf:undefined,
      totalPagesCount:0,

      canvas:null,
      ctx:null,
    }
  },
  watch: {
    pdf( pdf ){
      this.render()
    }
  },
  mounted() {
    this.canvas = document.getElementById( Utils.getConstant('ID_PDF_CANVAS') );
    this.ctx = this.canvas.getContext("2d");

    this.fetchPDF();
  },
	beforeUnmount(){},
  computed: {},
  methods: {
    nextPage(){
        this.currentPageIndex++
        if( this.currentPageIndex >= this.totalPagesCount ){
            this.currentPageIndex = 0
        }

        this.render()
    },
    prevPage(){
        this.currentPageIndex--
        if( this.currentPageIndex <= 0 ){
            this.currentPageIndex = this.totalPagesCount - 1
        }

        this.render()
    },

    fetchPDF() {
      pdfjs.getDocument( this.src ).promise.then( doc =>{
        this.pdf = doc
        this.totalPagesCount = doc.numPages;
      })
    },

    render(){
      this.pdf.getPage( this.currentPageIndex + 1 ).then( page => {
        this.renderPage( page )
      })
    },

    renderPage( page ){
      let viewport = page.getViewport( {scale: this.scale} )

      page.render({
          canvasContext: this.ctx,
          viewport: viewport
      });
    }
  }
}
</script>
