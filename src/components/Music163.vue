<template>
  <iframe
    id="iframe"
    src="https://music.163.com/#/search/m/?s="
    frameborder="0"
    scrolling="true"
    allowfullscreen="true"
    sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
  ></iframe>
</template>

<script>
export default {
  mounted() {
    //
  }
};
</script>

<style lang="scss">
#iframe {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
