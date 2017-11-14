<template>
  <b-container fluid class="inbox">
    <b-row>
      <b-col><h1>Inbox</h1></b-col>
    </b-row>
    <b-card no-body>
      <b-tabs card v-model="tabIndex">
        <b-tab v-bind:title="state.name" v-for="state in states" :key="state.name">
          <b-list-group>
            <b-list-group-item v-for="plate in plates" href="#" :key="plate.barcode">{{ plate.barcode }} <b-badge>{{ plate.state }}</b-badge></b-list-group-item>
          </b-list-group>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>

import states from '../shared/states'
import all_plates from '../shared/plates'

export default {
  name: 'inbox',
  data () {
    return {
      username: 'Testy McTestface',
      states,
      all_plates,
      tabIndex: this.indexOf(this.state)
    }
  },
  props: [ 'state' ],
  computed: {
    plates() {
      if (this.selectedState.filter ) {
        return this.all_plates.filter( (plate) => { return plate.state === this.selectedState.name })
      } else {
        return this.all_plates
      }
    },
    selectedState() { return this.states[this.tabIndex] }
  },
  methods: {
    indexOf(new_state) { return states.findIndex( (state) => { return state.name === new_state }) }
  },
  watch: {
    selectedState(new_state) { this.$router.replace({name: 'Inbox', params: { state: new_state.name }}) }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
