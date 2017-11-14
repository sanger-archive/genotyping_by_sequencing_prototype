<template>
  <b-card-body>
    <b-input-group>
      <b-input-group-addon><label class="mb-0" for="newEntryBed">Bed</label></b-input-group-addon>
      <b-form-input name="bed" v-model.trim='bed' id="newEntryBed" @change="updatedBed" ref="newEntryBed"></b-form-input>
    </b-input-group>
    <b-input-group>
      <b-input-group-addon><label class="mb-0" for="newEntryPlate">Plate</label></b-input-group-addon>
      <b-form-input name="plate" v-model.trim='plate' id="newEntryPlate" @change="updatedPlate" ref="newEntryPlate"></b-form-input>
    </b-input-group>
  </b-card-body>
</template>

<script>


export default {
  name: 'bed-verify',
  data() { return {
    bed:'',
    plate: ''
  }},
  computed: {},
  methods: {
    updatedBed() {
      this.updated()
      this.$refs.newEntryPlate.focus()
    },
    updatedPlate() {
      this.updated()
      this.$refs.newEntryBed.focus()
    },
    updated() {
      if (this.bed !== '' && this.plate !== '' ) {
        this.$emit('scan', {bed: this.bed, plate: this.plate})
        this.bed = ''
        this.plate = ''
      }
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
