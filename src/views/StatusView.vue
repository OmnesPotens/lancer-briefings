<script lang="ts">
import Markdown from 'vue3-markdown-it'
import Mission from '@/components/Mission.vue'
import Event from '@/components/Event.vue'
import Clock from '@/components/Clock.vue'
import Reserve from '@/components/Reserve.vue'
import type { ClockData, EventData, MissionData, ReserveData } from '@/App.vue'
import type { LDExport } from '@/pilot-export'

export default {
  components: {
    Markdown,
    Mission,
    Event,
    Clock,
    Reserve,
  },
  props: {
    animate: {
      type: Boolean,
      required: true,
    },
    initialSlug: {
      type: String,
      required: true,
    },
    missions: {
      type: Array<MissionData>,
      required: true,
    },
    events: {
      type: Array<EventData>,
      required: true,
    },
    pilots: {
      type: Array<LDExport>,
      required: true,
    },
    clocks: {
      type: Array<ClockData>,
      required: true,
    },
    reserves: {
      type: Array<ReserveData>,
      required: true,
    },
  },
  data() {
    // eslint-disable-next-line no-console
    console.log('SETTING DATA')
    return {
      missionSlug: this.initialSlug,
      animateView: this.animate,
      animationDelay: '2.5s',
      clockAnimationDelay: '2500',
      missionMarkdown: ' ',
    }
  },
  computed: {
    // selectedMission() {
    //   const m: Array<MissionData> = this.missions.find((obj: MissionData) => obj.slug === this.selectedSlug)
    //   return m || this.missions[0]
    // },
    // selectedContent() {
    //   return this.selectedMission.content || ' '
    // },
    // selectedSlug() {
    //   return this.missionSlug || this.initialSlug
    // },
    selectedMission: {
      get() {
        // eslint-disable-next-line no-console
        console.log('GETTER BEFORE: ', this.selectedMission)
        const m: Array<MissionData> = this.missions.find((obj: MissionData) => obj.slug === this.missionSlug)
        return m || this.missions[0]
      },
      set(mission: MissionData) {
        // eslint-disable-next-line no-console
        console.log('SETTER BEFORE: ', this.selectedMission, this.missionSlug)
        // this.selectedMission = mission
        this.missionSlug = mission.slug
        // eslint-disable-next-line no-console
        console.log('SETTER AFTER: ', this.selectedMission, this.missionSlug)
        // this.missionMarkdown = this.selectedMission.content
      },
    },
  },
  created() {
    // eslint-disable-next-line no-console
    // console.log('STATUS SLUG: ', this.missionSlug)
    // avoid unhandled error during beforeUpdate hook
    // this.selectMission(this.missionSlug)
    this.setAnimate()
    this.setClockAnimateDelay()
  },
  beforeUpdate() {
    // initial set
    // if (this.missions.length > 0)
    //   this.selectMission(this.missionSlug || this.initialSlug)
    //   this.selectedMission = this.findMission(this.missionSlug)
  },
  mounted() {
    // need to set on re-mount
    // if (this.missions.length > 0)
    //   // this.selectedMission = this.missions[0]
    //   this.selectMission(this.missions[0].slug)
  },
  methods: {
    findMission(slug: string) {
      return this.missions.find((obj: any) => obj.slug === slug)
    },
    selectMission(slug: string) {
      this.missionSlug = slug
      // const m: MissionData = this.missions.find((obj: any) => obj.slug === this.missionSlug)
      // this.missionMarkdown = m.content
      // return m || this.missions[0]
    },
    setAnimate() {
      if (this.animate)
        this.animateView = true

      const statusAnimated = window.sessionStorage.getItem('statusAnimated')
      if (statusAnimated)
        this.animationDelay = '0s'

      if (statusAnimated === null)
        window.sessionStorage.setItem('statusAnimated', 'true')
    },
    setClockAnimateDelay() {
      const delayToFloat = parseFloat(this.animationDelay.replace('s', ''))
      const finalClockDelay = delayToFloat * 600 + 600
      this.clockAnimationDelay = finalClockDelay.toString()
    },
  },
}
</script>

<template>
  <div
    id="statusView"
    :class="{ animate: animateView }"
    :style="{ 'animation-delay': animationDelay }"
    class="content-container"
  >
    <section id="missions" class="section-container" :style="{ 'animation-delay': animationDelay }">
      <div class="section-header clipped-medium-backward">
        <img src="/icons/campaign.svg">
        <h1>Mission Log</h1>
      </div>
      <div class="section-content-container">
        <h3>Current Assignment</h3>
        <Markdown
          :source="selectedMission?.content"
          class="markdown"
        />
        <h3>Mission List</h3>
        <div class="mission-list-container">
          <Mission
            v-for="item in $props.missions"
            :key="item.slug"
            :mission="item"
            :selected="selectedMission?.slug"
            @click="selectMission(item.slug)"
          />
        </div>
      </div>
    </section>
    <section id="events" class="section-container" :style="{ 'animation-delay': animationDelay }">
      <div class="section-header clipped-medium-backward">
        <img src="/icons/events.svg">
        <h1>Events Log</h1>
      </div>
      <div class="section-content-container">
        <div class="events-list-container">
          <Event
            v-for="item in $props.events"
            :key="item.title"
            :event="item"
          />
        </div>
      </div>
    </section>
    <section id="reserves" class="section-container" :style="{ 'animation-delay': animationDelay }">
      <div class="section-header clipped-medium-backward">
        <img src="/icons/squad.svg">
        <h1>Reserves</h1>
      </div>
      <div class="section-content-container">
        <div class="reserves-list-container">
          <Reserve
            v-for="item in $props.reserves"
            :key="item.name"
            :reserve="item"
            :pilots="pilots"
          />
        </div>
      </div>
    </section>
    <section id="clocks" class="section-container" :style="{ 'animation-delay': animationDelay }">
      <div class="section-header clipped-medium-backward">
        <img src="/icons/protocol.svg">
        <h1>Progress Clocks</h1>
      </div>
      <div class="section-content-container">
        <div class="clocks-list-container">
          <Clock
            v-for="item in $props.clocks"
            :key="item.name"
            :clock="item"
            :animate="animate"
            :animation-delay="clockAnimationDelay"
          />
        </div>
      </div>
    </section>
  </div>
</template>
