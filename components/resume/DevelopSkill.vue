<template>
  <v-row class="mt-0">
    <v-col cols="12">
      <span class="text-h5">관심있는 개발 스킬</span>
      <v-divider />

      <v-chip-group
        column
      >
        <v-chip
          v-for="interestDevelopSkill in interestDevelopSkills"
          :key="interestDevelopSkill"
        >
          {{ interestDevelopSkill }}
        </v-chip>
      </v-chip-group>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        interestDevelopSkills: ['Clean Code', 'refactoring', 'Jenkins', 'ELK Stack', 'Checkstyle', 'Coding conventions', 'Code Review', 'automation']
      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>
