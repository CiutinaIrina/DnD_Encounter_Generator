import { createRouter, createWebHistory } from 'vue-router'
import TestPage from '../TestPage.vue'
import MainPage from '../MainPage.vue'
import TestButton from '../test/TestButton.vue'
import TestIcon from '../test/TestIcon.vue'
import TestList from '../test/TestList.vue'
import TestPopup from '../test/TestPopup.vue'
import TestInput from '../test/TestInput.vue'
import TestBox from '../test/TestBox.vue'
import TestObjectLoader from '../test/TestObjectLoader.vue'
import TestObjectDisplayer from '../test/TestObjectDisplayer.vue'
import TestCompendium from '../test/TestCompendium.vue'
import TestIconMenu from '../test/TestIconMenu.vue'
import TestMonster from '../test/TestMonster.vue'
import TestEncounter from '../test/TestEncounter.vue'
import TestDungeon from '../test/TestDungeon.vue'
import TestDropdownMenu from '../test/TestDropdownMenu.vue'
import TestDot from '../test/TestDot.vue'
import TestThemeSelector from '../test/TestThemeSelector.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      component: TestPage,
      children: [
        { path: '/button', component: TestButton },
        { path: '/icon', component: TestIcon },
        { path: '/list', component: TestList },
        { path: '/popup', component: TestPopup },
        { path: '/input', component: TestInput },
        { path: '/box', component: TestBox },
        { path: '/object-loader', component: TestObjectLoader },
        { path: '/object-displayer', component: TestObjectDisplayer },
        { path: '/compendium', component: TestCompendium },
        { path: '/icon-menu', component: TestIconMenu },
        { path: '/monster', component: TestMonster },
        { path: '/encounter', component: TestEncounter },
        { path: '/dungeon', component: TestDungeon },
        { path: '/dropdown-menu', component: TestDropdownMenu },
        { path: '/dot', component: TestDot },
        { path: '/theme-selector', component: TestThemeSelector }
      ]
    },
    { path: '/', component: MainPage },
  ],
})

export default router
