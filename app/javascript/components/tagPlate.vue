<template>
  <b-form-group :label="label" :state="valid" :description="description"
                  :feedback="feedback">
    <b-form-input name="validate_plate"
                  id="validatePlate"
                  @change="scannedPlate"
                  ref="newEntryBed"
                  :state="valid"></b-form-input>
  </b-form-group>
</template>

<script>

export default {
  name: 'tag-plate',
  data() { return {
    valid: null,
    feedback: 'There was an unidentified problem with the tag plate.'
  }},
  props: {
    label: { type: String, default: 'Tag Plate'},
    description: { type: String, default: 'Scan the tag plate you wish to use'},
    accepted_type: { type: Array }
  },
  methods: {
    scannedPlate(scanned) {
      this.valid = true
      this.$emit('input', scanned)
    }
  }
}
</script>
