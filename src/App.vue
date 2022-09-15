<script lang="ts">
import AppHeader from './components/layout/Header.vue'
import Sidebar from './components/layout/Sidebar.vue'
import type { LDExport } from './pilot-export'
import Config from '@/assets/info/general-config.json'

export interface ClockData {
  type: string
  result: string
  description: string
  name: string
  value: string
  max: string
  color: string
}
export interface EventData {
  title: string
  location: string
  time: string
  thumbnail: string
  content: string
}
export interface MissionData {
  slug: string
  name: string
  status: string
  content: string
}
export interface ReserveData {
  type: string
  name: string
  description: string
  label: string
  cost: string
  notes: string
  callsign: string
}

export default {
  components: {
    AppHeader,
    Sidebar,
  },

  data() {
    return {
      animate: Config.animate,
      initialSlug: Config.initialSlug,
      planetPath: Config.planetPath,
      header: Config.header,
      pilotSpecialInfo: Config.pilotSpecialInfo,
      clocks: [] as ClockData[],
      events: [] as EventData[],
      missions: [] as MissionData[],
      pilots: [] as LDExport[],
      reserves: [] as ReserveData[],
      webpImages: [] as any[],
    }
  },
  created() {
    this.setTitleFavicon(`${Config.defaultTitle} MISSION BRIEFING`, Config.icon)
    this.convertImagesToWebp()
    // this.convertImagesToWebp(import.meta.glob("/public/mechs/*.png", { query: { format: "webp" }}));
    this.importMissions(import.meta.glob('@/assets/missions/*.md', { as: 'raw' }))
    this.importEvents(import.meta.glob('@/assets/events/*.md', { as: 'raw' }))
    this.importClocks(import.meta.glob('@/assets/clocks/*.json'))
    this.importReserves(import.meta.glob('@/assets/reserves/*.json'))
    this.importPilots(import.meta.glob('@/assets/pilots/*.json'))
  },
  mounted() {
    this.$router.push('/status')
  },
  methods: {
    setTitleFavicon(title: string, favicon: string) {
      document.title = title
      const headEl = document.querySelector('head')
      const faviconEl = document.createElement('link')
      faviconEl.setAttribute('rel', 'shortcut icon')
      faviconEl.setAttribute('href', favicon)
      headEl.appendChild(faviconEl)
    },
    async convertImagesToWebp() {
      const modules = import.meta.glob('@/assets/mechs/*.png', { query: { webp: '' } })
      const filePromises = Object.keys(modules).map(path => modules[path]())
      const fileContents = await Promise.all(filePromises)
      // console.log(fileContents)
      fileContents.forEach((content: string) => {
        // let webpURL = new URL(content, import.meta.url);
        this.webpImages = [...this.webpImages, content]
      })
      // console.log(this.webpImages)
      // for (const path in modules) {
      //   modules[path]().then(() => {
      //   const p = new URL(p2, import.meta.url)
      //   gallery.value.push(p)
      //   })
      // }
    },
    async importMissions(files: any) {
      const filePromises = Object.keys(files).map(path => files[path]())
      const fileContents = await Promise.all(filePromises)
      fileContents.forEach((content) => {
        const mission = {} as MissionData
        mission.slug = content.split('\n')[0]
        mission.name = content.split('\n')[1]
        mission.status = content.split('\n')[2]
        mission.content = content.split('\n').splice(3).join('\n')
        this.missions = [...this.missions, mission]
      })
    },
    async importEvents(files: any) {
      const filePromises = Object.keys(files).map(path => files[path]())
      const fileContents = await Promise.all(filePromises)
      fileContents.forEach((content) => {
        const event = {} as EventData
        event.title = content.split('\n')[0]
        event.location = content.split('\n')[1]
        event.time = content.split('\n')[2]
        event.thumbnail = content.split('\n')[3]
        event.content = content.split('\n').splice(4).join('\n')
        this.events = [...this.events, event]
      })
    },
    async importClocks(files: any) {
      const filePromises = Object.keys(files).map(path => files[path]())
      const fileContents = await Promise.all(filePromises)
      fileContents.forEach((content) => {
        this.clocks = JSON.parse(JSON.stringify(content)).default
      })
    },
    async importReserves(files: any) {
      const filePromises = Object.keys(files).map(path => files[path]())
      const fileContents = await Promise.all(filePromises)
      fileContents.forEach((content) => {
        this.reserves = JSON.parse(JSON.stringify(content)).default
      })
    },
    async importPilots(files: any) {
      const filePromises = Object.keys(files).map(path => files[path]())
      const fileContents = await Promise.all(filePromises)
      fileContents.forEach((content) => {
        const pilotFromJson = JSON.parse(JSON.stringify(content))
        // In case the pilot was added from a copy on compcon via sharecode, remove the "reference mark" symbol
        pilotFromJson.name = pilotFromJson.name.replace('※', '')
        pilotFromJson.callsign = pilotFromJson.callsign.replace('※', '')
        const pilotFromVue = this.pilotSpecialInfo[pilotFromJson.callsign.toUpperCase()]
        const pilot = {
          ...pilotFromJson,
          ...pilotFromVue,
        }
        this.pilots = [...this.pilots, pilot]
        pilot.clocks.forEach((content: any) => {
          const clock = {} as ClockData
          clock.type = `Pilot Project // ${pilot.callsign}`
          clock.result = ''
          clock.name = content.title
          clock.description = content.description
          clock.value = content.progress
          clock.max = content.segments
          clock.color = '#3CB043'
          this.clocks = [...this.clocks, clock]
        })

        pilot.reserves.forEach((content: any) => {
          const reserve = {} as ReserveData
          reserve.type = content.type
          reserve.name = content.name
          reserve.description = content.description
          reserve.label = content.label
          reserve.cost = content.cost
          reserve.notes = content.notes
          reserve.callsign = pilot.callsign.toUpperCase()
          this.reserves = [...this.reserves, reserve]
        })
      })
    },
  },
}
</script>

<!-- TODO: Automatically convert all non-webp images into webp for faster loading and smaller size.
      Maybe use https://github.com/JonasKruckenberg/imagetools or https://github.com/iampava/imagemin-webp-webpack-plugin for this.
      https://github.com/meisiwan/vite-plugin-vue-webp -->
<template>
  <div class="page-wrapper">
    <AppHeader :planet-path="planetPath" :class="{ animate }" :header="header" />
    <Sidebar :animate="animate" :class="{ animate }" />
  </div>
  <div id="router-view-container">
    <router-view
      :animate="animate"
      :initial-slug="initialSlug"
      :missions="missions"
      :events="events"
      :pilots="pilots"
      :clocks="clocks"
      :reserves="reserves"
      :webp-images="webpImages"
    />
  </div>
  <svg
    style="visibility: hidden; position: absolute"
    width="0"
    height="0"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <defs>
      <filter id="round">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -5"
          result="goo"
        />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
  <audio autoplay>
    <source src="/startup.ogg" type="audio/ogg">
  </audio>
</template>

<style>
#app {
  width: 1901px;
  /* height: 100%; */
  min-height: 100vh;
  overflow: hidden !important;
  /* border-right: 1px solid #ff0;
  border-bottom: 1px solid #ff0; */
}
</style>
