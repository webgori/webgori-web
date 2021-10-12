<template>
  <v-row class="mt-0">
    <v-col cols="12">
      <span class="text-h5">프로젝트</span>
      <v-divider />
      <div v-for="(project, index) in projects" :key="index">
        <p :class="[index === 0 ? 'mt-1' : 'mt-5', 'mb-0']">
          <span v-if="project.link === ''" class="text-subtitle-1 font-weight-bold">
            {{ project.name }} ({{ project.company }})
          </span>
          <span v-else>
            <a v-if="project.link !== ''" :href="project.link" target="_blank">{{ project.name }} ({{ project.company }})</a>
          </span>
        </p>

        <span class="subtitle-2">
          {{ project.startDate }} — {{ project.endDate }}
        </span>

        <p v-if="project.description !== ''" class="mb-1 mt-1 font-italic">
          {{ project.description }}
        </p>

        📋 담당 업무

        <ul>
          <li v-for="work in project.works" :key="work">
            {{ work }}
          </li>
        </ul>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          {
            name: '토이토이',
            startDate: '2014-01-01',
            endDate: '2015-10-23',
            link: '',
            company: '넷마블블루',
            description: '목표 동시접속자 50,000명. 최고 동시접속자 약 10,000명, 게임 서버 5대 사용',
            works: [
              "게임 서버를 메인 프로젝트 개발자에게 인수인계 받아 개발",
              "Spring Framework를 사용",
              "Apache, Tomcat 서버를 사용",
              "서버 failover 처리",
              "Redis를 사용하여 랭킹 구현",
              "Kakao API를 사용하여 게임 플레이 시 이모티콘 지급하도록 개발",
              "KT API를 사용하여 게임 플레이 시 특정 아이템을 모으면 모바일 데이터로 바꿔주는 기능 개발",
              "기술 PM에게 요청하여 L4에서 배포할 서버를 disable 하고 무중단 배포 방식으로 운영",
              "버전 관리는 사내 SVN 사용"
            ]
          },
          {
            name: '마구마구2017',
            startDate: '2014-03-01',
            endDate: '2017-08-31',
            link: '',
            company: '넷마블블루, 넷마블앤파크',
            description: '국내 및 대만 서비스. 목표 동시접속자 50,000명. 최고 동시접속자 약 35,000명, 게임 서버 5대 사용',
            works: [
              "게임 서버를 메인 프로젝트 개발자에게 인수인계 받아 개발",
              "Spring Framework를 사용",
              "Apache, Tomcat 서버를 사용",
              "서버 failover 처리",
              "Redis를 사용하여 랭킹 구현",
              "Spring Session을 사용하여 API 요청 필터링 기능 개발",
              "PHP7을 사용하여 운영툴 개발 및 기능 추가(기본적인 DB 작업 병행)",
              "PHP7을 APK, IPA 빌드 배포 사이트 개발",
              "JavaScript 및 jQuery를 사용하여 API 문서 개발",
              "Elasticsearch, logstash, Kafka를 사용하여 지표 사이트 개발",
              "서버 세팅시 자동화 스크립트로 편리하게 세팅",
              "Kakao API를 사용하여 게임 플레이 시 이모티콘 지급하도록 개발",
              "Freetds, 여러 서버 설치 및 스크립팅 등 전반적인 리눅스 작업",
              "대만 서비스시 대만 법인과 커뮤니케이션 하며 운영",
              "기술 PM에게 요청하여 L4에서 배포할 서버를 disable 하고 무중단 배포 방식으로 운영",
              "버전 관리는 사내 Git 사용"
            ]
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
