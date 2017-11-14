<template>
  <b-list-group-item :variant="variant">
    <h5>{{ name }} <small>{{ state }}</small></h5>
    <b-alert v-if="active" show>{{ before }}</b-alert>
    <!-- Dynamically selected component based on stage configuration -->
    <component v-bind:is="component" @complete="readyForCompletion" :active="active" :inputPlate="inputPlate"></component>
    <b-row v-if="active" align-h="end" class="mt-3">
      <b-col cols="1">
        <b-button @click="complete" :disabled="incomplete" v-if="active">Complete</b-button>
      </b-col>
    </b-row>
  </b-list-group-item>
</template>

<script>

const variant_maps = {
  'pending': 'secondary',
  'active': 'default',
  'complete': 'success'
}

import pcr from './steps/pcr'
import addPrimers from './steps/addPrimers'
import plateValidator from './steps/plateValidator'
import tagging from './steps/tagging'

export default {
  data() { return {
    incomplete: true
  }},
  name: 'step',
  props: {
    name: { type: String, required: true },
    component: { type: String, required: true },
    state: { type: String, required: true },
    before: { type: String, required: true },
    inputPlate: { type: String, required: true }
  },
  computed: {
    variant() { return variant_maps[this.state] },
    active() { return this.state === 'active' },
    disabled() { return this.state !== 'active' }
  },
  methods: {
    readyForCompletion(valid) { this.incomplete = !valid },
    complete() { this.$emit('complete') }
  },
  components: {
    pcr, // Supplies information about the pcr program, and records it being started
    'add-primers': addPrimers, // Apply a primer set and record on the robot,
    'plate-validator': plateValidator, // Simple tracking of a named event with plate validation
    tagging // Apply tags and verify on mosquito
  }
}
</script>

<style scoped>

</style>
