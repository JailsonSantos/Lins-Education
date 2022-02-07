<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
// Styles globais
import "./components/styles/global.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
