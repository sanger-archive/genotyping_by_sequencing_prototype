<template>
  <div class="root">
    <b-jumbotron header="SNP Snap" lead="Genotyping by sequencing library prep" >
      <p>Hello, <strong>{{ username }}</strong>, lets get started...</p>
      <b-container fluid>
        <b-row>
        <label>Scan a barcode...</label>
        <b-form-input id="input-large" size="lg" type="text" placeholder="Scan a barcode..." @change="scannedPlate"></b-form-input>
      </b-row>
      <b-row align-h="center">OR</b-row>
      <b-row>Visit an inbox...</b-row>
      <b-row>
        <b-button-toolbar key-nav>
          <b-button v-for="state in states"
                    :key="state.name"
                    class="mx-1"
                    v-bind:variant="state.variant"
                    size="lg"
                    :to="{name: 'Inbox', params: { state: state.name }}">
            {{ state.name }}
          </b-button>
        </b-button-toolbar>
      </b-row>
      </b-container>
    </b-jumbotron>
  </div>
</template>

<script>

import states from '../shared/states'

export default {
  name: 'root',
  data () {
    return {
      username: 'Testy McTestface',
      states
    }
  },
  methods: {
    scannedPlate(barcode) {
      this.$router.push({ name: 'Stage', params: { state_name: 'pre-pooling', plate: barcode }})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
