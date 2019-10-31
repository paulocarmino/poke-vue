<template>
  <div class="typesContainer">
    <div v-for="(type, i) in types" :key="i">
      <QBadge :color="catColor(type)">{{ type }}</QBadge>
    </div>
  </div>
</template>

<script>
export default {
  props: ["types"],

  methods: {
    catColor(type) {
      switch (type) {
        case "Grass":
          return "green-9";
        case "Poison":
          return "deep-purple";
        case "Fire":
          return "orange-9";
        case "Flying":
          return "teal-6";
        case "Water":
          return "blue-8";
        case "Bug":
          return "grey-6";
        case "Ground":
          return "brown-6";
        case "Fighting":
          return "red-10";
        case "Electric":
          return "indigo-6";
        case "Psychic":
          return "amber-8";
        case "Fairy":
          return "pink-6";
        case "Normal":
          return "grey-9";
        case "Rock":
          return "blue-grey-9";
        case "Steel":
          return "grey-5";
        case "Ice":
          return "light-blue-5";
        case "Ghost":
          return "blue-grey-5";
        default:
          return "grey-2";
      }
    }
  }
};
</script>

<style lang="scss">
.typesContainer {
  display: flex;
  flex-direction: column;
}
.type-badge {
  background-color: "#1b1b1b";
}
</style>
