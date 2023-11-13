<template>
  <select v-model="selectedValue" @change="hendlerSelectChange">
    <option class="F">М</option>
    <option>Р</option>
    <option>О</option>
    <option>ПР</option>
    <option>ГТД</option>
    <option>ТО1</option>
  </select>
</template>

<script>
import { useDataStrore } from '../stores/dataStore'

export default {
  props: {
    status: {
      status: Object
    }
  },
  data() {
    return {
      selectedValue: ''
    }
  },
  setup() {
    const data = useDataStrore()

    return {
      data
    }
  },
  methods: {
    hendlerSelectChange(event) {
      console.log(event.target.value)
      this.data.updateArrayDataStatus_gpa(this.data.focus_row)
    }
  },
  //   watch: {
  //     selectedValue(value) {
  //       this.data.focus_elem = value
  //       this.data.updateArrayData(value)
  //       //   console.log(value)
  //     }
  //   },

  mounted() {
    this.selectedValue = this.status
  }
}
</script>

<style scoped>
select {
  height: 100%;
  width: 100%;
  text-align: center;
  background: none;
  border: none;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 10px;
}
select:hover {
  -webkit-appearance: auto;
  -moz-appearance: auto;
  appearance: auto;
}
</style>
