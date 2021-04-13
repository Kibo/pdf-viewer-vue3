<template>

    <canvas class="d-block mx-auto my-2 bg-dark"
      v-bind:id="utils.getConstant('ID_PDF_CANVAS')"
      v-bind:width="utils.getConstant('PDF_CANVAS_WIDTH')"
      v-bind:height="utils.getConstant('PDF_CANVAS_HEIGHT')">
    </canvas>

    <div class="text-center">
      <div class="btn-group btn-group-sm mx-auto">
        <button class="btn btn-secondary" v-on:click.prevent="prevPage()">Prev</button>
        <button class="btn btn-secondary" v-on:click.prevent="nextPage()">Next</button>
      </div>
    </div>
    
</template>

<script>
import Utils from "../tools/Utils.js"
const pdfjs = require("pdfjs-dist/build/pdf.js");
const PdfjsWorker = require("pdfjs-dist/build/pdf.worker.js");
pdfjs.GlobalWorkerOptions.workerPort = new PdfjsWorker();

export default {
  components: {

  },
  props: ['src'],
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
  mounted() {
    this.canvas = document.getElementById( Utils.getConstant('ID_PDF_CANVAS') );
    this.ctx = this.canvas.getContext("2d");
    this.fetchPDF();
  },
	beforeUnmount(){
    this.pdf.destroy()
  },
  methods: {
    /*
    * Render next page - handler
    */
    nextPage(){
      this.currentPageIndex++
      if( this.currentPageIndex > this.totalPagesCount - 1 ){
        this.currentPageIndex = this.totalPagesCount - 1
      }

      this.render()
    },

    /*
    * Render previous page - handler
    */
    prevPage(){
      this.currentPageIndex--
      if( this.currentPageIndex < 0 ){
        this.currentPageIndex = 0
      }

      this.render()
    },

    /*
    * Fetch PDF file fomr server
    */
    fetchPDF() {
      pdfjs.getDocument( this.src ).promise.then( doc =>{
        this.pdf = doc
        this.totalPagesCount = doc.numPages;

        this.render()
      })
    },

    /*
    * Render current page
    */
    render(){
      this.pdf.getPage( this.currentPageIndex + 1 ).then( page => {
        this.drawPage( page )
      })
    },

    /*
    * Draw page to canvas
    */
    drawPage( page ){
      let unscaledViewport = page.getViewport({scale:1});
      let scale = Math.min((this.canvas.height / unscaledViewport.height), (this.canvas.width / unscaledViewport.width));
      let viewport = page.getViewport({scale:scale});

      page.render({
          canvasContext: this.ctx,
          viewport: viewport
      });
    }
  }
}
</script>
