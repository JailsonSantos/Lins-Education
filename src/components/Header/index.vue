<template>
  <header>
    <nav class="container">
      <router-link to="/">
        <img
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
          alt="Logo do site institucional"
          id="logo"
        />
      </router-link>

      <img
        v-on:click="openMenu"
        src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg"
        alt="Menu Mobile"
        id="menu-button"
      />

      <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>

      <div id="menu-items" :class="{ active: menuActive }">
        <img
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
          alt="Logo do site institucional"
          id="menu-logo"
        />

        <ul>
          <li v-on:click="closeMenu"><router-link to="/">Home</router-link></li>
          <li v-on:click="closeMenu">
            <router-link to="/videos">Vídeos</router-link>
          </li>
          <li v-on:click="closeMenu">
            <router-link to="/about">About</router-link>
          </li>
          <li v-on:click="closeMenu">
            <router-link to="/contact">Contacts</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    openMenu: function () {
      this.menuActive = true;
    },
    closeMenu: function () {
      this.menuActive = false;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-nav);
  width: 100%;
  height: 60px;
}
nav {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}
#logo {
  width: 130px;
}
#menu-button {
  width: 30px;
}
#menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.8;
}
#menu-logo {
  width: 110px;
  margin-top: 30px;
  margin-bottom: 10px;
}
#menu-items {
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background-nav);
  width: 60%;
  height: 100vh;
  display: none;
  flex-direction: column;
  align-items: center;
}
#menu-items.active {
  display: flex;
}
ul {
  list-style: none;
  text-align: center;
}
ul li {
  margin: 20px 0px;
}
ul li a {
  color: var(--color-text-light);
}

@media (min-width: 700px) {
  #menu-button,
  #menu-logo,
  #menu-overlay {
    display: none;
  }

  #menu-items {
    display: flex;
    position: static;
    height: 60px;
    widows: auto;
  }

  ul {
    display: flex;
    height: 60px;
    align-items: center;
  }

  ul li {
    margin: 0px;
    margin-left: 20px;
  }
}
</style>