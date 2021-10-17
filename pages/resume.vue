<template>
  <v-row justify="center" class="fill-height">
    <v-col cols="12" class="pl-6 pt-3">
      <PersonalInformation />
      <Education />
      <WorkExperience />
      <Project />
      <Progress title="프로그래밍 언어" :items="languages" />
      <Progress title="프레임워크" :items="frameworks" />
      <DevelopSkill />
    </v-col>
  </v-row>
</template>

<script>
  import PersonalInformation from '~/components/resume/PersonalInformation'
  import Education from '~/components/resume/Education'
  import WorkExperience from '~/components/resume/WorkExperience'
  import Project from '~/components/resume/Project'
  import Progress from "~/components/resume/Progress"
  import DevelopSkill from '~/components/resume/DevelopSkill'

  export default {
    components: {
      PersonalInformation,
      Education,
      WorkExperience,
      Project,
      Progress,
      DevelopSkill
    },
    data() {
      return {
        languages: [
          {
            name: 'JAVA',
            value: 7
          },
          {
            name: 'PHP',
            value: 6
          },
          {
            name: 'Javascript',
            value: 6
          },
          {
            name: 'Typescript',
            value: 5
          },
          {
            name: 'C#',
            value: 5
          },
          {
            name: 'Python',
            value: 5
          },
          {
            name: 'Bash',
            value: 7
          },
          {
            name: 'SQL',
            value: 7
          }
        ],
        frameworks: [
          {
            name: 'Spring',
            value: 7
          },
          {
            name: 'Socket.IO',
            value: 6
          },
          {
            name: 'Vue.js',
            value: 5
          }
        ],
      }
    },
    methods: {

    }
  }
</script>
