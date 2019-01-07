<template>
  <div id="wrapper">
    <video-player ref="video" @start="onStart"></video-player>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import VideoPlayer from './VideoPage/VideoPlayer'

export default {
  name: 'video-page',
  components: { VideoPlayer },
  data () {
    return {
      videoUrl: null
    }
  },
  created () {
    ipcRenderer.on('video-response', (event, arg) => {
      if (arg.command === 'video') {
        this.player.setUrl(arg.url, arg.break)
      }
    })
    this.requestNextVideo()
  },
  computed: {
    player () {
      return this.$refs['video']
    }
  },
  methods: {
    requestNextVideo () {
      ipcRenderer.send('video-request', {command: 'getnext'})
    },
    onStart (url) {
      this.requestNextVideo()
    }
  }
}
</script>

<style>

#wrapper {
    padding: 0px;
    height:100%;
    width:100%;  
}

</style>
