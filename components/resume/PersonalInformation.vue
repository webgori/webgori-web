<template>
  <v-row class="mt-0">
    <v-col cols="12">
      <span class="text-h5 secondary--text">인적사항</span>
      <v-divider />

      <div v-if="$vuetify.breakpoint.mobile">
        <v-row class="mt-0">
          <v-col cols="12">
            <p>
              <span class="pr-10 text-subtitle-1 font-weight-bold">이름</span>
              <br>
              <span>박 용 순</span>
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col cols="12">
            <p>
              <span class="pr-10 text-subtitle-1 font-weight-bold">성별</span>
              <br>
              <span>남성</span>
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col cols="12">
            <p>
              <span class="pr-10 text-subtitle-1 font-weight-bold">나이</span>
              <br>
              <span>{{ getAge() }} (만 나이 {{ getWesternAge() }})</span>
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col cols="12">
            <p>
              <span class="pr-10 text-subtitle-1 font-weight-bold">이메일</span>
              <br>
              <span><a href="mailto:webgori@gmail.com">webgori@gmail.com</a></span>
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col cols="12">
            <p>
              <span class="pr-10 text-subtitle-1 font-weight-bold">블로그</span>
              <br>
              <span><a href="https://webgori.github.io">https://webgori.github.io</a></span>
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col cols="12">
            <p>
              <span class="pr-10 text-subtitle-1 font-weight-bold">GitHub</span>
              <br>
              <span><a href="https://github.com/webgori">https://github.com/webgori</a></span>
            </p>
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-row class="mt-0">
          <v-col cols="5">
            <p>
              <span class="pr-10 text-subtitle-1 font-weight-bold">이름</span>
              <br>
              <span>박 용 순</span>
            </p>
          </v-col>

          <v-col cols="5">
            <p>
              <span class="pr-10 text-subtitle-1 font-weight-bold">성별</span>
              <br>
              <span>남성</span>
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col cols="5">
            <p>
              <span class="pr-10 text-subtitle-1 font-weight-bold">나이</span>
              <br>
              <span>{{ getAge() }} (만 나이 {{ getWesternAge() }})</span>
            </p>
          </v-col>

          <v-col cols="5">
            <p>
              <span class="pr-10 text-subtitle-1 font-weight-bold">이메일</span>
              <br>
              <span><a href="mailto:webgori@gmail.com">webgori@gmail.com</a></span>
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col cols="5">
            <p>
              <span class="pr-10 text-subtitle-1 font-weight-bold">블로그</span>
              <br>
              <span><a href="https://webgori.github.io">https://webgori.github.io</a></span>
            </p>
          </v-col>

          <v-col cols="5">
            <p>
              <span class="pr-10 text-subtitle-1 font-weight-bold">GitHub</span>
              <br>
              <span><a href="https://github.com/webgori">https://github.com/webgori</a></span>
            </p>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    computed: {
      mobile() {
        return this.$vuetify.breakpoint.mobile;
      }
    },
    methods: {
      getWesternAge() {
        const today = new Date();
        const birthDate = new Date(1990, 9, 29);
        const thisYear = today.getFullYear();
        const birthYear = birthDate.getFullYear();
        let yearAge = thisYear - birthYear;
        const thisBirth = birthDate.setFullYear(thisYear);

        if(today.getTime() > thisBirth){
          yearAge--;
        }
        return yearAge
      },
      getAge() {
        const today = new Date();
        const birthDate = new Date(1990, 9, 29);
        return today.getFullYear()
          - birthDate.getFullYear()
          + 1;
      }
    }
  }
</script>
