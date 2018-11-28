<template>
  <div>
    <video autoplay id="videoContainer"></video>
  </div>
</template>


<script>
export default {
  data () {
    return {
      url: null,
    }
  },
  mounted () {
    this.player.addEventListener('ended', this.onEnd)
  },
  computed: {
    player () {
      return document.querySelector('video')
    }
  },
  methods: {
    setUrl (url, force) {
      this.url = url
      if (!this.player.src || force === true) {
        this.play()
      }
    },
    play () {
      this.player.src = this.url
      this.$emit('start', this.url)
    },
    onEnd (e) {
      // Infinite Loop
      this.play()
    }
  }
}
</script>