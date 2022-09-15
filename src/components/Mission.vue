<script lang="ts">
import type { MissionData } from '@/App.vue'

export default {
  components: {},
  props: {
    mission: {
      type: Object as unknown as MissionData,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  computed: {
    icon() {
      return `/icons/mission-${this.mission.status}.svg`
    },
    missionStatus() {
      switch (this.mission.status) {
        case 'start':
          return 'Current\nBriefing'
        case 'partial-success':
          return 'Partial\nSuccess'
        case 'success':
          return 'Mission\nSuccess'
        case 'failure':
          return 'Mission\nFailure'
        default:
          return 'Mission\nUnknown'
      }
    },
    isActive() {
      return this.mission.slug === this.selected
    },
  },
  created() {
    // eslint-disable-next-line no-console
    // console.log('MISSION: ', this.mission.slug, 'SELECTED: ', this.selected)
    // avoid unhandled error during beforeUpdate hook
  },
}
</script>

<template>
  <div class="mission" :class="[{ active: isActive }, mission.status]">
    <div class="name">
      <h1>Mission // {{ mission.slug }}</h1>
      <h2>{{ mission.name }}</h2>
    </div>
    <div class="status" :class="mission.status">
      {{ missionStatus }}
      <img :src="icon">
    </div>
  </div>
</template>
