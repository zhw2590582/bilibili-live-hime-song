<template>
  <div id="songs" ref="songs">
    <div class="inner">
      <div
        v-for="(item, index) in songs"
        :key="item.id"
        :class="`item ${item.playing ? 'playing' : ''}`"
      >
        <span class="index">{{index + 1}}.</span>
        <span class="song">{{item.song}}</span>
        <span class="singer">{{item.singer}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    //
  },
  updated() {
    const $playing = this.$refs.songs.querySelector(".playing");
    this.$refs.songs.scrollTo(0, $playing.offsetTop);
  }
};
</script>

<style lang="scss">
#songs {
  position: fixed;
  z-index: 3;
  left: 20px;
  top: 80px;
  width: 400px;
  height: 700px;
  overflow-y: auto;
  overflow-x: hidden;
  user-select: none;
  scroll-behavior: smooth;
  background-color: rgba(0, 0, 0, 0.5);

  .inner {
    .item {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      font-size: 18px;
      white-space: nowrap;

      &.playing {
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.2);

        .song {
          color: #ffc107;
        }
      }

      .index {
        color: #fff;
      }

      .song {
        color: #03a9f4;
        margin-left: 5px;
      }

      .singer {
        color: #9a9a9a;
        margin-left: 10px;
      }
    }
  }
}
</style>
