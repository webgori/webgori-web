<template>
  <v-row justify="center" class="fill-height">
    <v-col cols="12" class="ml-10 mt-3">
      <v-row class="mt-0">
        <v-col cols="12">
          <span class="text-h5">인적사항</span>
          <v-divider />
          <p class="mt-1">
            <span class="pr-10 text-subtitle-1 font-weight-bold">이름</span>
            <br>
            <span>박 용 순</span>
          </p>

          <p>
            <span class="pr-10 text-subtitle-1 font-weight-bold">성별</span>
            <br>
            <span>남성</span>
          </p>

          <p>
            <span class="pr-10 text-subtitle-1 font-weight-bold">나이</span>
            <br>
            <span>{{ getAge() }} (만 나이 {{ getWesternAge() }})</span>
          </p>

          <p>
            <span class="pr-10 text-subtitle-1 font-weight-bold">이메일</span>
            <br>
            <span><a href="mailto:webgori@gmail.com">webgori@gmail.com</a></span>
          </p>

          <p>
            <span class="pr-10 text-subtitle-1 font-weight-bold">블로그</span>
            <br>
            <span><a href="https://webgori.github.io">https://webgori.github.io</a></span>
          </p>

          <p>
            <span class="pr-10 text-subtitle-1 font-weight-bold">GitHub</span>
            <br>
            <span><a href="https://github.com/webgori">https://github.com/webgori</a></span>
          </p>
        </v-col>
      </v-row>

      <v-row class="mt-0">
        <v-col cols="12">
          <span class="text-h5">학교</span>
          <v-divider />
          <p class="mt-1"><span class="pr-10">2000-01-01</span><span>문남초등학교</span></p>
          <p class="mt-1"><span class="pr-10">2000-01-01</span><span>인천중학교</span></p>
          <p class="mt-1"><span class="pr-10">2000-01-01</span><span>인천전자공업고등학교 (멀티미디어 전자과)</span></p>
          <p class="mt-1"><span class="pr-10">2000-01-01</span><span>인하공업전문대학 (컴퓨터시스템과)</span></p>
        </v-col>
      </v-row>

      <v-row class="mt-0">
        <v-col cols="12">
          <span class="text-h5">경력</span>
          <v-divider />
          <p class="mt-1"><span class="pr-10">2000-01-01</span><span>넷마블블루</span></p>
          <p class="mt-1"><span class="pr-10">2000-01-01</span><span>넷마블앤파크</span></p>
          <p class="mt-1"><span class="pr-10">2000-01-01</span><span>모비두</span></p>
          <p class="mt-1"><span class="pr-10">2000-01-01</span><span>게임빌</span></p>
        </v-col>
      </v-row>

      <v-row class="mt-0">
        <v-col cols="12">
          <span class="text-h5">프로젝트</span>
          <v-divider />
          <p class="mt-1"><span class="pr-10">2000-01-01</span><span><a href="http://mobile.netmarble.net/event/2014/0825_toytoy/_html/index.asp" target="_blank">토이토이</a></span></p>
        </v-col>
      </v-row>

      <Progress title="프로그래밍 언어" :items="languages" />
      <Progress title="프레임워크" :items="frameworks" />

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
    </v-col>
  </v-row>
</template>

<script>
  import Progress from "~/components/resume/Progress"

  export default {
    components: {
      Progress
    },
    data() {
      return {
        name: "박용순",
        email: "webgori@gmail.com",
        value: 10,
        bufferValue: 20,
        languages: [
          {
            name: 'JAVA',
            value: 10
          },
          {
            name: 'PHP',
            value: 10
          },
          {
            name: 'Javascript',
            value: 10
          },
          {
            name: 'Typescript',
            value: 10
          },
          {
            name: 'C#',
            value: 10
          },
          {
            name: 'Python',
            value: 10
          },
          {
            name: 'Bash',
            value: 10
          },
          {
            name: 'SQL',
            value: 10
          }
        ],
        frameworks: [
          {
            name: 'Spring',
            value: 10
          },
          {
            name: 'Socket.IO',
            value: 10
          },
          {
            name: 'Vue.js',
            value: 10
          }
        ],
        interestDevelopSkills: ['Clean Code', 'refactoring', 'Jenkins', 'ELK Stack', 'Checkstyle', 'Coding conventions', 'automation'],
        birthDate: new Date()
      }
    },
    mounted() {
      this.birthDate = new Date(1990, 9, 29);
    },
    methods: {
      getWesternAge() {
        const today = new Date();
        const thisYear = today.getFullYear();
        const birthYear = this.birthDate.getFullYear();
        let yearAge = thisYear - birthYear;
        const thisBirth = this.birthDate.setFullYear(thisYear);

        if(today.getTime() > thisBirth){
          yearAge--;
        }
        return yearAge
      },
      getAge() {
        const today = new Date();
        return today.getFullYear()
          - this.birthDate.getFullYear()
          + 1;
      }
    }
  }
</script>
