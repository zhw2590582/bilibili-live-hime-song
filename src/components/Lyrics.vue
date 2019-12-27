<template>
  <div id="lyrics" ref="lyrics">
    <div class="inner">
      <div
        v-for="(item, index) in lyrics"
        :key="index"
        :class="`item ${item.playing ? 'playing' : ''}`"
      >{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lyrics: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    //
  },
  updated() {
    const $playing = this.$refs.lyrics.querySelector(".playing");
    this.$refs.lyrics.scrollTo(0, $playing.offsetTop - 200);
  }
};
</script>

<style lang="scss">
#lyrics {
  position: fixed;
  z-index: 4;
  width: 500px;
  height: 500px;
  left: 50%;
  top: 50%;
  margin: -250px 0 0 -250px;
  overflow: hidden;
  user-select: none;
  scroll-behavior: smooth;

  .inner {
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 10px;
      font-size: 26px;
      white-space: nowrap;
      text-align: center;
      padding: 10px 0;
      color: rgba(255, 255, 255, 0.5);
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);

      &.playing {
        padding: 15px 0;
        font-size: 30px;
        transition: all 0.3s ease;
        color: #ffc107;
        text-shadow: 0px 1px 10px rgba(255, 229, 0, 0.5);
      }
    }
  }
}
</style>
