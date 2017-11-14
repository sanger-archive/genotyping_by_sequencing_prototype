<template>
  <div v-if="active">
    <tag-plate v-model="tagPlate"></tag-plate>
    <label-print :barcode="tagPlate" v-if="tagPlate"></label-print>
    <bed-verify :expected="expected" v-if="tagPlate" :disabled="!active" @input="bedVerified"></bed-verify>
  </div>
  <div v-else>
    <dl><dt>Tag Plate</dt><dd>{{ tagPlate }}</dd></dl>
  </div>
</template>

<script>

import tagPlate from '../tagPlate'
import labelPrint from '../labelPrint'
import bedVerify from '../bedVerify'

export default {
  name: 'tagging',
  data() { return {
    tagPlate: null
  } },
  props: {
    inputPlate: { type: String, required: true },
    active: { type: Boolean, default: true }
  },
  components: {
    'tag-plate': tagPlate,
    'label-print': labelPrint,
    'bed-verify': bedVerify
  },
  computed: {
    expected() { return [{ bed: '1', plate: this.inputPlate }, { bed: '2', plate: this.tagPlate }] },
    tagPlateScanned() { return this.tagPlate !== null && this.tagPlate !== '' }
  },
  methods: {
    bedVerified(valid) { this.$emit('complete', valid) }
  }
}
</script>
