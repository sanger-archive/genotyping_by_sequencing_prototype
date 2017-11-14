<template>
  <b-card no-body :bg-variant="variant">
    <p slot="header" class="mb-0">Scanned {{ scannedBedCount }} of {{ expectedBedCount }}</p>

    <new-entry @scan="updated" v-if="active"></new-entry>
    <feedback v-else :valid="value" :expected="expected"></feedback>

    <b-list-group flush>
      <scanned-bed v-for="(entry, index) in scannedEntries" :key="entry.plate" v-bind="entry" @remove="remove(index)" :noRemove="disabled"></scanned-bed>
    </b-list-group>
  </b-card>
</template>

<script>

import scannedBed from './bedVerify/scannedBed'
import feedback from './bedVerify/feedback'
import newEntry from './bedVerify/newEntry'

// Note: Using value here allows us to bind the component with v-model

export default {
  name: 'bed-verify',
  data() { return {
    scannedEntries: [],
    value: false
  }},
  props: {
    expected: { type: Array, required: true },
    disabled: { type: Boolean }
  },
  computed: {
    expectedBedCount() { return this.expected.length },
    scannedBedCount() { return this.scannedEntries.length },
    active() { return this.scannedBedCount < this.expectedBedCount },
    variant() {
      if(this.active) {
        return 'default'
      } else {
        return this.value ? 'success' : 'danger'
      }

    },
    expectedForCompare() {
      return this.sortEntries(this.expected)
    }
  },
  methods: {
    updated(new_entry) {
      this.scannedEntries.push(new_entry)
      this.validate()
    },
    remove(index) {
      this.scannedEntries.splice(index, 1)
    },
    validate() {
      var sorted = this.sortEntries(this.scannedEntries)
      this.value = sorted.every((entry, index)=> {
        return entry[0] === this.expectedForCompare[index][0] && entry[1] === this.expectedForCompare[index][1]
      })
      this.$emit('input', this.value)
    },
    sortEntries(entries) {
      return entries.map((entry)=> { return [entry.bed, entry.plate] }).sort()
    }
  },
  components: {
    'scanned-bed': scannedBed,
    'new-entry': newEntry,
    feedback
  }
}
</script>

<style scoped>
</style>
