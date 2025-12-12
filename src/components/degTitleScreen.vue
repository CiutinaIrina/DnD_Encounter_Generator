<script setup>
import { ref, computed, onMounted, h } from 'vue'

import degInput from '../components/degInput.vue'
import degDropdownMenu from '../components/degDropdownMenu.vue'
import degCompendium from './degCompendium.vue'
import degButton from './degButton.vue'
import degBox from './degBox.vue'
import degList from './degList.vue'

import XP from '@/common/xp.js'

const partySize = ref(4);
const partyLevel = ref(1);
const partySkill = ref({ level: "Advanced", multiplier: 1.0 });
const monsters = ref([]);
const list1 = ref([]);

const columns = ref(["name", "size", "type", "alignment", "challenge_rating"]);
const columnsStyling = ref([
  { name: "name", width: "13rem", textAlign: "" },
  { name: "size", width: "6rem", textAlign: "right" },
  { name: "type", width: "6rem", textAlign: "center" },
  { name: "alignment", width: "6rem", textAlign: "left" },
  { name: "challenge_rating", width: "2.5rem", textAlign: "" },
]);

const skillLevelList = ref([
  { label: "Beginner", multiplier: 0.75 },
  { label: "Average", multiplier: 1.0 },
  { label: "Advanced", multiplier: 1.25 },
  { label: "Expert", multiplier: 1.5 },
]);

const updatePartySize = (e) => {
  partySize.value = e;
}

const updatePartyLevel = (e) => {
  partyLevel.value = e;
}

const updatePartySkill = (e) => {
  partySkill.value = e;
}

const testCalculateEncounter = (xp, pSize, pLevel) => {
  const remainingXP = xp;

  const mediumXP = XP.XP_PER_LEVEL[pLevel].medium;
  const easyXP = XP.XP_PER_LEVEL[pLevel].easy;
  const trivialXP = XP.XP_PER_LEVEL[pLevel].trivial;



  const smallestMediumCR = Object.values(XP.XP_PER_CR).filter(xp => xp < mediumXP).sort((a, b) => a - b)[0];


}

onMounted(async () => {
  const response = await fetch('src/common/srdMonsters.json');
  const data = await response.json();
  monsters.value = data;
  const license = monsters.value.pop();

  list1.value = data.slice(0, 8);

  console.log(list1.value);

  console.log(license);
});

// const partySizeValidator = size => {
//   if (!Number.isInteger(Number(size))) return false;

//   if (size < 3) return false;
//   else if (size > 6) return false;
//   else return true;
// }

// const partyLevelValidator = level => {
//   if (!Number.isInteger(Number(level))) return false;

//   if (level > 20 || level < 1) return false;
//   else return true;
// }

const partyXpPerDay = computed(() => {
  return XP.XP_PER_LEVEL[partyLevel.value]?.daily * partySize.value * partyLevel.value * partySkill.value?.multiplier;
})

</script>

<template>
  <div class="deg-title-screen">
    <div class="deg-title-screen-column-1">
      <hr>
      <div class="deg-title-screen-party-xp">
        <div class="deg-title-screen-party-xp-column-1">
          <deg-input
            v-model="partySize"
            label="Party Size :"
            @update:model-value="updatePartySize"
          />
          <deg-input
            v-model="partyLevel"
            label="Party Level :"
            @update:model-value="updatePartyLevel"
          />
          <deg-dropdown-menu
            v-model="partySkill"
            label="Party Skill :"
            placeholder="Select Skill"
            :list-items="skillLevelList"
            @update:model-value="updatePartySkill"
          />
        </div>
        <div class="deg-title-screen-party-xp-column-2">
          <p>Daily : {{ partyXpPerDay }}</p>
          <p>Trivial : {{ XP.XP_PER_LEVEL[partyLevel].trivial * partySize }}</p>
          <p>Easy : {{ XP.XP_PER_LEVEL[partyLevel].easy * partySize }}</p>
          <p>Medium : {{ XP.XP_PER_LEVEL[partyLevel].medium * partySize }}</p>
          <p>Hard : {{ XP.XP_PER_LEVEL[partyLevel].hard * partySize }}</p>
          <p>Deadly : {{ XP.XP_PER_LEVEL[partyLevel].deadly * partySize }}</p>
        </div>
      </div>
      <hr>
      <deg-dropdown-menu
        v-model="partySkill"
        label="Encounter Type WIP :"
        placeholder="Select Skill"
        :list-items="skillLevelList"
        @update:model-value="updatePartySkill"
      />
      <deg-dropdown-menu
        v-model="partySkill"
        label="Encounter Difficulty WIP:"
        placeholder="Select Skill"
        :list-items="skillLevelList"
        @update:model-value="updatePartySkill"
      />
      <deg-button text="Generate TEST encounter"></deg-button>
      <deg-box
        :height="15"
        :width="40"
      >
      </deg-box>
      <hr>
    </div>
    <div class="deg-title-screen-column-2">
      <hr>
      <deg-list
        :rows="list1"
        :columns="columns"
        :columns-styling="columnsStyling"
        :has-pagination="true"
        :numbers-per-page="4"
      />
      <br>
      <deg-compendium />
    </div>

  </div>
</template>

<style scoped>
.deg-title-screen {
  height: 95%;
  width: 95%;
  background: rgba(57, 43, 85, 0.5);
  display: flex;

  .deg-title-screen-column-1 {
    float: left;
    width: 50%;
    padding: 2rem;
    box-sizing: border-box;
    color: white;

    .deg-title-screen-party-xp {
      display: flex;


      .deg-title-screen-party-xp-column-1 {
        width: 50%;
      }
      .deg-title-screen-party-xp-column-2 {
        width: 50%;
        justify-content: space-around;
        p {
          margin: 0.75rem;
        }

      }
    }
  }
  .deg-title-screen-column-2 {
    float: right;
    width: 50%;
    padding: 2rem;
    box-sizing: border-box;
    color: white;
  }

  .deg-button, .deg-input, .deg-dropdown-menu, .deg-box {
    margin: 0.75rem 0rem;
  }

  hr {
    margin-bottom: 0.5rem;
  }
}
</style>
