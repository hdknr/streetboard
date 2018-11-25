<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  name: 'streetboard',
  created () {
    ipcRenderer.on('network-message', (event, arg) => {
      if (arg.url === '/config') {
        console.log(event, arg)
        this.$router.push({name: 'config-page'})
      }
      if (arg.url === '/main') {
        console.log(event, arg)
        this.$router.push({name: 'landing-page'})
      }
    })
  }
}
</script>

<style>
/* CSS */
</style>
