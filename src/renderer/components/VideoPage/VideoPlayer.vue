<template>
  <div id="videoComponent">
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

<style>
#videoComponent {
    height:100%;
    width:100%;  
}
#wrapper {
    padding: 0px;
    height:100%;
    width:100%;  
}

#videoContainer {
    height:100%;
    width:100%;  
    background:rgb(0,0,0);
}
</style>