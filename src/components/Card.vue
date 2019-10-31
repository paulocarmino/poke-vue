<template>
  <q-card class="pokeCardContainer" :style="{backgroundColor: pokemon.color}">
    <q-card-section class="pokeCard">
      <div class="layer" />
      <img :src="pokemon.img" height="100%" />
      <div class="pokeCard--infoContainer">
        <span>{{ pokemon.number }}</span>
        <p>{{ pokemon.name }}</p>
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
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  height: 160px;
  max-height: 160px;
  z-index: 1;

  &--infoContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
      font-size: 1rem;
      color: #fff;
      margin-bottom: -5px;
    }

    p {
      font-size: 1.4rem;
      color: #fff;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
  }
}

.layer {
  z-index: -1;
  position: absolute;
  width: 300px;
  height: 300px;
  content: "";
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  left: -90px;
  top: 5px;
}
</style>
