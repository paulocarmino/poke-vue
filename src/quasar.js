import Vue from "vue";

import "./styles/quasar.styl";
import iconSet from "quasar/icon-set/mdi-v4";
import lang from "quasar/lang/pt-br.js";
import "@quasar/extras/mdi-v4/mdi-v4.css";

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
  QBadge,
  QScrollArea,
  QTabPanels,
  QTabPanel,
  QTabs,
  QTab,
  QRouteTab,
  QSeparator
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
    QBadge,
    QScrollArea,
    QTabPanels,
    QTabPanel,
    QTabs,
    QTab,
    QRouteTab,
    QSeparator
  },
  directives: {},
  plugins: {},
  lang: lang,
  iconSet: iconSet
});
