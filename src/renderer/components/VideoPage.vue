<template>
  <div id="wrapper">
    <video autoplay id="videoContainer"></video>
  </div>
</template>

<script>
import Vue from 'vue'
import { ipcRenderer } from 'electron'

export default {
  name: 'video-page',
  data () {
    return {
      videoUrl: null
    }
  },
  created () {
    ipcRenderer.on('video-response', (event, arg) => {
      if (arg.command === 'next') {
        this.setNextVideo(arg)
      }
    })
    this.requestNextVideo()
  },
  computed: {
    player () {
      return document.querySelector('video')
    }
  },
  methods: {
    requestNextVideo () {
      ipcRenderer.send('video-request', {command: 'getnext'})
    },
    setNextVideo (arg) {
      Vue.set(this, 'videoUrl', arg.url)
      if (this.videoUrl !== this.player.src || arg.break) {
        this.player.src = this.videoUrl // TODO: report playing
        this.requestNextVideo()
      }
    }
  }
}
</script>

<style>
</style>
