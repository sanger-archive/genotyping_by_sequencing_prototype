<template>
  <b-input-group>
    <b-input-group-button>
      <b-button>Print</b-button>
    </b-input-group-button>
     <b-form-select v-model="selected" :options="options" class=""></b-form-select>
  </b-input-group>
</template>

<script>

export default {
  name: 'label-print',
  props: {
    options: { type: Array, default: ['d304bc','d1123bc']}
  }
}
</script>

<style scoped>
  .snap { font-style: italic; }
</style>
