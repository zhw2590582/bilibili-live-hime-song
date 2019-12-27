<template>
  <div id="app">
    <Music163 />
    <VideoBg />
    <Topbar />
    <Songs :songs="songs" />
    <Lyrics :lyrics="lyrics" />
  </div>
</template>

<script>
import dequal from "dequal";
import Music163 from "./components/Music163";
import VideoBg from "./components/VideoBg";
import Topbar from "./components/Topbar";
import Songs from "./components/Songs";
import Lyrics from "./components/Lyrics";

export default {
  data() {
    return {
      songs: [],
      lyrics: []
    };
  },
  mounted() {
    const $frame = document.getElementById("iframe");
    window.addEventListener("message", event => {
      const { cmd, info } = event.data;
      if (cmd === "DANMU_MSG") {
        const macth = info[1].match(/\s*#\s*([^\s]+)(\s+(.+))*/i);
        const type = macth[1];
        const song = macth[2];

        if (type === "切歌") {
          $frame.contentWindow.postMessage({ type: "NEXT_SONG" }, "*");
        }

        if (type === "点歌" && song) {
          $frame.contentWindow.postMessage(
            { type: "ORDER_SONG", data: song },
            "*"
          );
        }
      }
    });

    window.addEventListener("message", event => {
      const { type, data } = event.data;
      switch (type) {
        case "MUSIC_163":
          if (!dequal(this.songs, data.songs)) {
            this.songs = data.songs || [];
          }
          if (!dequal(this.lyrics, data.lyrics)) {
            this.lyrics = data.lyrics || [];
          }
          break;
        default:
          break;
      }
    });
  },
  components: {
    Music163,
    VideoBg,
    Topbar,
    Songs,
    Lyrics
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

::-webkit-scrollbar {
  display: block !important;
  width: 5px !important;
}

::-webkit-scrollbar-thumb {
  background-color: #333 !important;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #444 !important;
}

@font-face {
  font-family: "Kuaile";
  src: url("./assets/Kuaile.ttf");
}

#app {
  font-family: "Kuaile", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  color: #fff;
  background-color: #000;
}
</style>
