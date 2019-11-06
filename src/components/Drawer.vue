<template>
  <QDrawer
    :value="openDetails"
    :width="$q.platform.is.mobile ? $q.screen.width : 360"
    :breakpoint="500"
    behavior="mobile"
    side="right"
    @input="openDetailsHandler()"
    no-swipe-close
    class="drawer"
  >
    <div class="drawerContainer bg-primary">
      <div class="parte1">
        <div class="controls--container">
          <q-btn flat round color="text-white" icon="mdi-arrow-left" @click="openDetailsHandler()" />
          <div class="navigation--container">
            <q-btn
              flat
              round
              color="text-white"
              icon="mdi-arrow-left"
              @click="openDetailsHandler()"
            />
            <q-btn
              flat
              round
              color="text-white"
              icon="mdi-arrow-right"
              @click="openDetailsHandler()"
            />
          </div>
        </div>

        <div class="headerInfo--container">
          <div class="headerInfo--infoContainer">
            <div class="headerInfo--texts">
              <span class="text--number">{{ activePokemon.number }}</span>
              <span class="text--name">{{ activePokemon.name }}</span>
              <span class="text--specie">{{ activePokemon.specie }}</span>
              <Types :types="activePokemon.types" class="big" />
            </div>
          </div>
          <div class="headerInfo--image">
            <q-img
              :src="activePokemon.img"
              class="pokemon--img"
              style="height: 160px; width: 170px"
              contain
            />
          </div>
        </div>
      </div>

      <div class="parte2">
        <q-tabs v-model="tab" align="justify" no-caps active-color="primary" class="text-grey-9">
          <q-tab name="about" label="About" />
          <q-tab name="stats" label="Stats" />
          <q-tab name="evolution" label="Evolution" />
        </q-tabs>

        <q-scroll-area class="fit">
          <q-tab-panels v-model="tab" animated swipeable class="text-center">
            <q-tab-panel class="tabContent" name="about">
              <div class="text-h6">Mails</div>
              <p>{{ loremText }}</p>
            </q-tab-panel>

            <q-tab-panel class="tabContent" name="stats">
              <div class="text-h6">Alarms</div>
              <p>{{ loremText }}</p>
            </q-tab-panel>

            <q-tab-panel class="tabContent" name="evolution">
              <div class="text-h6">Movies</div>
              <p>{{ loremText }}</p>
            </q-tab-panel>
          </q-tab-panels>
        </q-scroll-area>
      </div>
    </div>
  </QDrawer>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { colors } from "quasar";

import Types from "./Types";

export default {
  name: "Drawer",

  data() {
    return {
      tab: "about",
      pokemonColor: "",
      loremText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at risus viverra adipiscing at. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Mauris nunc congue nisi vitae suscipit. Eros donec ac odio tempor orci dapibus ultrices. Blandit cursus risus at ultrices mi tempus imperdiet. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ac odio tempor orci dapibus ultrices in iaculis. Aliquet bibendum enim facilisis gravida neque convallis. Dis parturient montes nascetur ridiculus mus. Vitae justo eget magna fermentum iaculis. Lectus proin nibh nisl condimentum id venenatis a. Etiam erat velit scelerisque in dictum non.
      Semper quis lectus nulla at volutpat diam ut venenatis. Sed blandit libero volutpat sed cras ornare arcu dui. Id faucibus nisl tincidunt eget. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. A erat nam at lectus urna. Nunc consequat interdum varius sit amet. Arcu dictum varius duis at. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Vitae congue eu consequat ac felis donec et odio. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Pretium fusce id velit ut tortor. Purus sit amet volutpat consequat mauris nunc congue nisi.
      Ut faucibus pulvinar elementum integer enim neque volutpat. Gravida neque convallis a cras semper auctor neque. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Leo duis ut diam quam nulla porttitor massa. Quam nulla porttitor massa id neque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sit amet risus nullam eget felis eget nunc lobortis. Orci a scelerisque purus semper eget duis at. Vitae sapien pellentesque habitant morbi tristique senectus. Interdum posuere lorem ipsum dolor sit amet. Tempor orci dapibus ultrices in.
      Varius sit amet mattis vulputate enim nulla. Ut ornare lectus sit amet est placerat in egestas erat. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Neque viverra justo nec ultrices dui sapien. Amet tellus cras adipiscing enim eu turpis. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Orci eu lobortis elementum nibh. Semper quis lectus nulla at volutpat diam ut venenatis. Pellentesque sit amet porttitor eget dolor morbi non. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Sed egestas egestas fringilla phasellus faucibus. Quis risus sed vulputate odio ut enim blandit.
      Urna duis convallis convallis tellus id interdum velit laoreet id. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Feugiat nibh sed pulvinar proin gravida. Augue lacus viverra vitae congue. Malesuada bibendum arcu vitae elementum curabitur vitae. Et ultrices neque ornare aenean euismod elementum nisi quis. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Orci sagittis eu volutpat odio facilisis mauris. Ullamcorper sit amet risus nullam eget. At augue eget arcu dictum varius duis. Enim ut sem viverra aliquet. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Accumsan in nisl nisi scelerisque eu ultrices vitae. Maecenas sed enim ut sem viverra aliquet eget sit. Pretium lectus quam id leo. Nibh tellus molestie nunc non blandit massa enim nec dui. Congue quisque egestas diam in arcu cursus. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Interdum posuere lorem ipsum dolor.`
    };
  },

  components: {
    Types
  },

  computed: {
    ...mapState(["openDetails", "activePokemon"])
  },

  methods: {
    ...mapActions(["openDetailsHandler"])
  },

  watch: {
    activePokemon: function() {
      colors.setBrand("primary", this.activePokemon.color);
    }
  },

  beforeMount() {
    colors.setBrand("primary", this.activePokemon.color);
  }
};
</script>

<style lang="scss" scoped>
.drawerContainer {
  height: 100%;
  overflow: scroll;
  color: #000;
  filter: saturate(1.8);
}

.q-tab-panel.tabContent {
  /* margin-bottom: 220px; */
}

.parte1 {
  height: 175px;
  color: #fff;
  margin-top: 10px;
  padding: 0px 25px;
}

.parte2 {
  padding-top: 40px;
  background-color: #fff;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
}

.controls {
  &--container {
    display: flex;
    justify-content: space-between;
    margin: 0px -12px;

    .navigation {
      &--container {
        display: flex;
        justify-content: space-between;
        width: 80px;
      }
    }
  }
}

.headerInfo {
  &--container {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  &--infoContainer {
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;
    height: 100%;
  }

  &--texts {
    display: flex;
    flex-direction: column;
    height: 100%;
    line-height: 1.2;
    margin-top: 15px;
  }

  &--image {
    height: 100%;
    position: relative;
  }
}

.text {
  &--number {
    font-weight: 500;
    font-size: 14px;
  }

  &--name {
    font-weight: 600;
    font-size: 24px;
  }

  &--specie {
    font-size: 13px;
    margin-bottom: 10px;
  }
}

.pokemon {
  &--img {
    position: absolute;
    right: -5px;
    bottom: 10px;
  }
}
</style>

<style>
.q-drawer__content {
  overflow-y: hidden !important;
}
</style>
