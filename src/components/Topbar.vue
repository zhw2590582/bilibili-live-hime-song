<template>
  <div class="topbar">
    <div class="inner" ref="text">{{text.join('')}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ["Hi, 老赵其实不老, 是一枚前端攻城狮, 就这样. QQ群：320881312"],
      translateX: 0,
      textWidth: 0
    };
  },
  mounted() {
    const textWidth = this.$refs.text.clientWidth;
    const length = Math.ceil(document.body.clientWidth / textWidth) + 2;
    this.text = Array(length).fill(this.text[0]);
    this.textWidth = textWidth;
    this.$nextTick(() => {
      this.loopScroll();
    });
  },
  methods: {
    loopScroll() {
      this.translateX += 1;
      setTimeout(() => {
        if (this.translateX >= this.textWidth) {
          this.translateX = 0;
          this.$refs.text.style.transform = `translate(0, 0)`;
        } else {
          this.$refs.text.style.transform = `translate(-${this.translateX}px, 0)`;
        }
        this.loopScroll();
      }, 1000 / 24);
    }
  }
};
</script>

<style lang="scss">
.topbar {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  padding: 5px 0;
  font-size: 34px;
  overflow: hidden;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);

  .inner {
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    line-height: 1;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.8);
  }
}
</style>
