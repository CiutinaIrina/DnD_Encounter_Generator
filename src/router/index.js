import { createRouter, createWebHistory } from 'vue-router'
import TestPage from '../TestPage.vue'
import MainPage from '../MainPage.vue'
import degTestButton from '../test/degTestButton.vue'
import degTestIcon from '../test/degTestIcon.vue'
import degTestList from '../test/degTestList.vue'
import degTestPopup from '../test/degTestPopup.vue'
import degTestInput from '../test/degTestInput.vue'
import degBox from '../test/degTestBox.vue'
import degObjectLoader from '../test/degTestObjectLoader.vue'
import degObjectDisplayer from '../test/degTestObjectDisplayer.vue'
import degCompendium from '../test/degTestCompendium.vue'
import degIconMenu from '../test/degTestIconMenu.vue'
import degMonster from '../test/degTestMonster.vue'
import degEncounter from '../test/degTestEncounter.vue'
import degDungeon from '../test/degTestDungeon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/test',
      component: TestPage,
      children: [
        { path: '/button', component: degTestButton },
        { path: '/icon', component: degTestIcon },
        { path: '/list', component: degTestList },
        { path: '/popup', component: degTestPopup },
        { path: '/input', component: degTestInput },
        { path: '/box', component: degBox },
        { path: '/object-loader', component: degObjectLoader },
        { path: '/object-displayer', component: degObjectDisplayer },
        { path: '/compendium', component: degCompendium },
        { path: '/icon-menu', component: degIconMenu },
        { path: '/monster', component: degMonster },
        { path: '/encounter', component: degEncounter },
        { path: '/dungeon', component: degDungeon },
      ]
    },
    { path: '/', component: MainPage },
  ],
})

export default router
