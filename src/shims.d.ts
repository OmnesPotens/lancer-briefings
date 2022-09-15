declare module 'vue-writer';
declare module 'vue3-markdown-it';
declare module 'remove-markdown';
declare module 'lancer-data';
declare module 'lancer-ktb-data';
declare module 'lancer-nrfaw-data';
declare module 'lancer-longrim-data';

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
