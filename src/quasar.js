import Vue from "vue";

import "./styles/quasar.styl";
import iconSet from "quasar/icon-set/mdi-v3.js";
import lang from "quasar/lang/pt-br.js";
import "@quasar/extras/mdi-v3/mdi-v3.css";
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QImg,
  QInput,
  QInfiniteScroll,
  QCard,
  QCardSection,
  QBadge
} from "quasar";

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QImg,
    QInput,
    QInfiniteScroll,
    QCard,
    QCardSection,
    QBadge
  },
  directives: {},
  plugins: {},
  lang: lang,
  iconSet: iconSet
});
