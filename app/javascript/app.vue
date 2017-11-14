<template>
  <div id="app">

    <navigation-menu></navigation-menu>
    <router-view></router-view>
  </div>
</template>

<script>

import NavigationMenu from 'components/NavigationMenu'
export default {
  name: 'SNPSnap',
  components: {
    'navigation-menu': NavigationMenu
  },
  data() {
    return { username: 'Testy McTestFace' }
  }
}
</script>

<style>

</style>
