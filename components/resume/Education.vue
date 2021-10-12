<template>
  <v-row class="mt-0">
    <v-col cols="12">
      <span class="text-h5">학교</span>
      <v-divider />
      <p v-for="(education, index) in educations" :key="index" :class="[index === 0 ? 'mt-1' : 'mt-5', 'mb-0']">
        <span class="pr-10">{{ education.startDate }} — {{ education.endDate }}</span>
        <span>{{ education.name }}</span>
      </p>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        educations: [
          {
            name: '인하공업전문대학 - 컴퓨터시스템과',
            startDate: '2009-03-02',
            endDate: '2014-02-14'
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
