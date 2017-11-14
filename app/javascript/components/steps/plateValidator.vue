<template>
  <simple-plate-check :expected="inputPlate" @input="checkedPlate" v-if="active"></simple-plate-check>
</template>

<script>

import simplePlateCheck from '../simplePlateCheck'

export default {
  name: 'plate-validator',
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
