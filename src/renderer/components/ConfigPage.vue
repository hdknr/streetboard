<template>
    <div id="wrapper">
        <form>
        config page
            <input type="text" v-model="message.token">
            <button type="button" @click="configure">設定</button>
        </form>
    </div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  name: 'config-page',
  data () {
    return { message: {} }
  },
  created () {
    ipcRenderer.on('configure-complete', (event, arg) => {
      if (arg.success === true) {
        this.$router.push({ name: 'landing-page' })
      }
    })
  },
  methods: {
    configure () {
      ipcRenderer.send('configure', { message: this.message })
    }
  }
}
</script>