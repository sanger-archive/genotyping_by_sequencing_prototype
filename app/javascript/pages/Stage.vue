<template>
  <b-container fluid class="stage">
    <h1>{{ plate }}</h1>
    <b-card :title="state.name" :sub-title="state.summary" variant="primary">
      <b-progress :value="activeStep" :max="totalSteps" show-progress></b-progress>
      &nbsp;
      <b-list-group>
        <!-- A note on state:
         !   The inline method is a bit clunky, but if pulled out to a method it doesn't automatically get
         !   recaculated as activeStep changes. We can't use a compute property, as they don't take arguments.
         !   There's probably a better way of handling this, but this'll do for the moment.
         !   I did have this logic in the step itself, but that felt really wrong.
         !   Returns: 'active' if index matches the active step, 'complete' if index is lower,
         !   and 'pending' if greater.
        -->
        <step v-for="(step, index) in steps"
              v-bind="step"
              :key="step.name"
              :state="index === activeStep ? 'active' : ( index < activeStep ? 'complete' : 'pending' )"
              :inputPlate="plate"
              @complete="nextStep"></step>
      </b-list-group>
    </b-card>
  </b-container>
</template>

<script>

import states from '../shared/states'
import all_plates from '../shared/plates'

import Step from '../components/Step'

const step_configurations = [
  { name: 'Add primer panel', before: 'Find the matching primer panel, and place it on the mosquito with the plate.', component: 'add-primers' },
  { name: 'Start PCR', before: 'Put the plate onto the MJ thermo-cycler and select the indicated program. Click start when done.', component: 'pcr'},
  { name: 'Transfer to PCR2', before: 'Scan in a tag plate, and generate a new label. Please be ensure you apply the label to the correct plate.', component: 'tagging' },
  { name: 'Start PCR2', before: 'Put the plate onto the MJ thermo-cycler and select the indicated program. Click start when done.', component: 'pcr' },
  { name: 'Complete', before: 'Once the plate is complete, remove it from the thermo-cycler and click complete.', component: 'plate-validator' }
]

export default {
  name: 'inbox',
  data () {
    return {
      username: 'Testy McTestface',
      states,
      all_plates,
      activeStep: 0
    }
  },
  props: [ 'state_name', 'plate' ],
  computed: {
    state() { return states.find( (candidate)=> { return candidate.name === this.state_name }) },
    steps() { return step_configurations },
    totalSteps() { return this.steps.length }
  },
  components: {
    step: Step
  },
  methods: {
    stateOf(step_id) { return ['complete','active','pending','pending'][step_id] },
    nextStep() { this.activeStep += 1 },
    previousStep() { this.activeStep -= 1 }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
