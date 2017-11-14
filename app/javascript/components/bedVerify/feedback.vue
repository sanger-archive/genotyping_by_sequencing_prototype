<template>
  <b-card-body>
    <div v-if="valid">Great! Everything is as expected</div>
    <div v-else>
      Something isn't quite right! This is what was expected:
      <b-list-group>
        <scanned-bed v-for="entry in expected" :key="entry.plate" v-bind="entry" noRemove></scanned-bed>
      </b-list-group>
    </div>
  </b-card-body>
</template>

<script>
import scannedBed from './scannedBed'

export default {
  name: 'feedback',
  props: {
    valid: { type: Boolean, required: true },
    expected: { type: Array, required: true }
  },
  components: { 'scanned-bed': scannedBed }
}
</script>

