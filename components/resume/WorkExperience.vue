<template>
  <v-row class="mt-0">
    <v-col cols="12">
      <span class="text-h5 secondary--text">경력</span>
      <v-divider />
      <p v-for="(workExperience, index) in workExperienceList" :key="index" :class="[index === 0 ? 'mt-1' : '', 'mb-0']">
        <span class="pr-10">{{ workExperience.startDate }} — {{ workExperience.endDate }}</span>
        <span>{{ workExperience.name }}</span>
      </p>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        workExperienceList: [
          {
            name: '넷마블블루',
            startDate: '2013-08-19',
            endDate: '2016-10-31'
          },
          {
            name: '넷마블앤파크',
            startDate: '2016-11-01',
            endDate: '2017-08-31'
          },
          {
            name: '모비두',
            startDate: '2017-12-01',
            endDate: '2019-06-30'
          },
          {
            name: '게임빌 (현재 재직 중)',
            startDate: '2019-07-01',
            endDate: this.$moment().format('YYYY-MM-DD')
          }
        ]
      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>
