<template>
  <div>
    <dl>
      <dt>PCR Program</dt><dd>{{ pcrProgram }}</dd>
      <dt>Duration</dt><dd>{{ duration }}</dd>
    </dl>
    <simple-plate-check :expected="inputPlate" @input="checkedPlate" v-if="active"></simple-plate-check>
  </div>
</template>

<script>

import simplePlateCheck from '../simplePlateCheck'

export default {
  name: 'logo',
  data() { return {
    pcrProgram: '20CycleB',
    duration: '40 minutes'
  }},
  props: {
    active: { type: Boolean, default: true, required: false },
    inputPlate: { type: String, required: true }
  },
  components: {
    'simple-plate-check': simplePlateCheck
  },
  methods: {
    checkedPlate(valid) { this.$emit('complete', valid)  }
  }
}
</script>

<style scoped>
</style>
