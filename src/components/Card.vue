<template>
  <q-card class="pokeCardContainer" :style="{backgroundColor: pokemon.color}">
    <q-card-section class="pokeCard">
      <div class="layer" />
      <div class="pokeCard--infoContainer">
        <span>{{ pokemon.number }}</span>
        <p>{{ pokemon.name }}</p>
      </div>
      <div class="pokeCard--thumbContainer">
        <img :src="pokemon.img" height="88px" width="88px" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "Card",

  props: ["pokemon"]
};
</script>

<style lang="scss">
.pokeCardContainer {
  margin-bottom: 10px;
  filter: saturate(1.4);
}

.pokeCard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* position: relative; */
  /* justify-content: space-between; */
  /* width: 100%; */
  height: 115px;
  max-height: 115px;
  /* z-index: 1; */

  &.q-card__section {
    padding: 8px;
  }

  &--infoContainer {
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */

    span {
      font-size: 0.6rem;
      color: #fff;
      margin-bottom: -2px;
    }

    p {
      font-size: 0.9rem;
      color: #fff;
      font-weight: 600;
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
