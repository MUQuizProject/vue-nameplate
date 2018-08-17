<template>
  <div>
  <section class='sheet' v-for="(item, index) in namelists" :key="index">
    <div class='background'><img src='../assets/backlogo.png'></div>
    <div class='print_pages'>
      <div v-bind:class="['name', 'name-' + item.surname.length + '-' + item.given.length]">{{ item.surname }} {{ item.given }}</div>
      <div v-bind:class="[item.school.length >= 7 ? 'school-7' : 'school']">{{ item.school }} {{ item.grade }}</div>
    </div>
  </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: mapState({
    namelists: state => state.namelists
  }),
  methods: {
    beforeCreate () {
      document.body.class = 'A4 landscape'
    }
  }
}
</script>
