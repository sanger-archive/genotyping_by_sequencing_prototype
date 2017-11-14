<template>
  <b-list-group-item>
    <b-row>
      <b-col sm="10">
      <dl class="scannedEntry">
        <dt>Bed</dt> <dd>{{ bed }}</dd>
        <dt>Plate</dt> <dd>{{ plate }}</dd>
      </dl>
      </b-col>
      <b-col sm="2">
        <b-button variant="danger" size="sm" @click="remove" v-if="!noRemove">x</b-button>
      </b-col>
    </b-row>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'scanned-bed',
  props: {
    bed: { type: String, required: true },
    plate: { type: String, required: true },
    noRemove: { type: Boolean, required: false, default: false}
  },
  methods: {
    remove() { this.$emit('remove') }
  }
}
</script>

<style scoped>
  .scannedEntry {
    display: inline;
  }
  .scannedEntry dd, .scannedEntry dt { display: inline; }
</style>
