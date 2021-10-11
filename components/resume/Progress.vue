<template>
  <div>
    <v-row class="mt-0">
      <v-col cols="12">
        <span class="text-h5">{{ title }}</span>
        <v-divider />
      </v-col>
    </v-row>

    <v-row v-for="item in items" :key="item.name" align="center" class="mt-0">
      <v-col cols="3" lg="1"><span class="text-subtitle-2">{{ item.name }}</span></v-col>
      <v-col cols="9" lg="11">
        <v-progress-linear
          :value="$vuetify.breakpoint.mobile ? item.value * 2 : item.value"
          :buffer-value="bufferValue" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      items: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        bufferValue: this.$vuetify.breakpoint.mobile ? 20 : 10
      }
    }
  }
</script>
