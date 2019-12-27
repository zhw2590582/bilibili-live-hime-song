<template>
  <div class="vidage">
    <video id="vidage" class="vidage-video" preload="metadata" loop autoplay muted>
      <source src="../assets/bg.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import Vidage from "vidage";
import "../assets/vidage.css";
export default {
  mounted() {
    new Vidage("#vidage");
  }
};
</script>

<style lang="scss">
.vidage {
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
