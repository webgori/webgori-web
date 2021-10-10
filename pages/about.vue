<template>
  <v-row justify="center" align="center" class="fill-height">
    <v-col cols="12" class="px-10">
      <v-card elevation="2">
        <v-card-title>자기소개</v-card-title>
        <v-card-subtitle>어떤 사람일까요?</v-card-subtitle>
        <v-card-text>
          <div class="text--primary">
            <h3 class="mb-4">이름</h3>
            <p class="pl-2">박 용 순</p>
            <h3 class="mb-4">성별</h3>
            <p class="pl-2">남성</p>
            <h3 class="mb-4">관심 있는 것</h3>
            <p class="pl-2">게임, 개발, 재테크</p>
            <h3 class="mb-4">현재 직장</h3>
            <p class="pl-2">게임빌</p>
          </div>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn color="blue white--text" href="mailto:webgori@gmail.com">
            <v-icon left>mdi-email</v-icon> 연락하기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
