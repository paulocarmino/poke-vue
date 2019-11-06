<template>
  <q-card
    class="pokeCardContainer"
    :style="{backgroundColor: pokemon.color}"
    @click="openDetails()"
  >
    <q-card-section class="pokeCard">
      <div class="layer" />
      <div class="pokeCard--infoContainer">
        <div>
          <span>{{ pokemon.number }}</span>
          <p>{{ pokemon.name }}</p>
        </div>
        <Types :types="pokemon.types" />
      </div>
      <div class="pokeCard--thumbContainer">
        <img :src="pokemon.img" height="88px" width="88px" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

import Types from "./Types";

export default {
  name: "Card",

  props: ["pokemon"],

  components: {
    Types
  },

  methods: {
    ...mapActions(["openDetailsHandler", "setActivePokemon"]),
    openDetails() {
      this.setActivePokemon(this.pokemon);
      this.openDetailsHandler();
    }
  }
};
</script>

<style lang="scss">
.pokeCardContainer {
  max-height: 115px;
  margin-bottom: 10px;
  filter: saturate(1.4);
  cursor: pointer;
}

.pokeCard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 115px;
  max-height: 115px;
  z-index: 1;

  &.q-card__section {
    padding: 8px;
  }

  &--infoContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      font-size: 0.6rem;
      color: #fff;
    }

    p {
      font-size: 0.9rem;
      color: #fff;
      font-weight: 600;
      margin-top: -5px;
    }
  }

  &--thumbContainer {
    height: 88px;
    position: relative;

    img {
      position: absolute;
      right: -4px;
      bottom: -13px;
    }
  }
}

.layer {
  z-index: -1;
  position: absolute;
  width: 150px;
  height: 150px;
  content: "";
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  right: -46px;
  bottom: -44px;
}
</style>
