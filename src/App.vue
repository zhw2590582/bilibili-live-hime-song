<template>
  <div id="app">
    <Music163 />
    <VideoBg />
    <Topbar />
  </div>
</template>

<script>
import Music163 from "./components/Music163";
import VideoBg from "./components/VideoBg";
import Topbar from "./components/Topbar";

export default {
  data() {
    return {};
  },
  components: {
    Music163,
    VideoBg,
    Topbar
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}

*,
:after,
:before {
  box-sizing: border-box;
}

@font-face {
  font-family: "Kuaile";
  src: url("./assets/Kuaile.ttf");
}

#app {
  font-family: "Kuaile", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  overflow: hidden;
}
</style>
