<template>
  <main>
    <div class="text-top">Vídeos novos toda <b>quinta</b> às <b>20h</b></div>
    <a href="https://youtube.com.br" target="_black">
      <img
        src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg"
        alt="inscreva-se"
        id="subscribe"
      />
    </a>
    <div class="text-bottom">youtube.com/videoficial</div>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
main {
  background-color: var(--color-background-home);
  justify-content: center;
  align-items: center;
}
.text-top {
  color: var(--color-text-light);
  font-size: 20px;
  margin-bottom: 20px;
}
#subscribe {
  width: 300px;
}
.text-bottom {
  color: var(--color-text-light);
  font-size: 17px;
  margin-top: 20px;
}

@media (min-width: 700px) {
  #subscribe {
    width: 380px;
  }
}
</style>