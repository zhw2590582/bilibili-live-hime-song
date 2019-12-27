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
  display: none;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  right: 0;
  bottom: 45px;
  width: 100%;
  min-height: auto;
}
</style>
