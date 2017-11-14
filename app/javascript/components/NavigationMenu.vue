<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand :to="{name: 'Root'}"><logo></logo></b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Logo from './Logo.vue'

export default {
  data: function () {
    return {}
  },
  name: 'navigation-menu',
  components: {
    logo: Logo
  }
}
</script>

<style scoped>
</style>
