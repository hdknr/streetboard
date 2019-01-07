<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import * as Mousetrap from 'Mousetrap'

export default {
  name: 'streetboard',
  created () {
    // Configure
    Mousetrap.bind(['ctrl+s', 'command+s'], (e) => {
      this.$router.push({path: '/settings'})
    })

    ipcRenderer.on('network-message', (event, arg) => {
      if (arg.url === '/settings') {
        this.$router.push({path: '/settings'})
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
