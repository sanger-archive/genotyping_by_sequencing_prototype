<!--
  A simple plate check confirms that the scanned plate matches the expected
  Emits 'input' with true/false to indicate that an incorrect/correct plate has been scanned
  can be bound with v-model.

  Parameters:
    expected: The expected plate barcode
    label: The form field label (optional)
    description: Help text under the form field (optional)
    feedback: error to display if the input is wrong (optional)
-->
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
  name: 'scanned-bed',
  data() { return {
    valid: null
  }},
  props: {
    expected: { type: String, required: true },
    label: { type: String, default: 'Plate'},
    description: { type: String, default: 'Scan plate for validation purposes'},
    feedback: { type: String, default: 'Scanned plate does not match expected plate'}
  },
  methods: {
    scannedPlate(scanned) {
      this.valid = scanned === this.expected
      this.$emit('input', scanned === this.expected)
    }
  }
}
</script>
