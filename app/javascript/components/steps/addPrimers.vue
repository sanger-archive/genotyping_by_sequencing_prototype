<template>
  <div>
    <b-form-checkbox id="checkbox1"
                     v-model="panelVerified"
                     value="verified"
                     unchecked-value="unverified"
                     :disabled="!active">
      I have selected primer panel '<em>{{ primerPanel }}</em>'
    </b-form-checkbox>
    <bed-verify :expected="expectedBeds" v-model="bedVerified" :disabled="!active"></bed-verify>
  </div>
</template>

<script>

import bedVerify from '../bedVerify'

export default {
  name: 'add-primers',
  data() { return {
    panelVerified: 'unverified',
    bedVerified: false
  }},
  props: {
    primerPanel: {
      type: String,
      default: 'My Special Panel'
    },
    active: {
      type: Boolean,
      default: true
    },
    inputPlate: { type: String, required: true }
  },
  computed: {
    complete() { return this.bedVerified && this.panelVerified == 'verified' },
    expectedBeds() { return [{bed: '2', plate: this.inputPlate}] }
  },
  components: {
    'bed-verify': bedVerify
  },
  watch: {
    complete() { this.$emit('complete', this.complete) }
  }
}
</script>

<style scoped>
</style>
