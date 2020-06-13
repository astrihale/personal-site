<template>
  <div id="app">
    <div class="md-layout md-alignment-center-center" id="nav">
      <router-link class="md-layout-item" to="/">Home</router-link>
      <router-link class="md-layout-item" to="/about">About</router-link>
      <md-switch class="md-layout-item"
                 @change="modeSwitch" v-model="mode" id="mode-switcher"></md-switch>
    </div>
    <router-view/>
  </div>
</template>

<script>
const modeKey = 'agi-mode';

export default {
  data() {
    return {
      mode: false,
    };
  },
  created() {
    if (!localStorage.getItem(modeKey)) {
      localStorage.setItem(modeKey, 'light');
    } else {
      this.mode = localStorage.getItem(modeKey) === 'dark';
      if (this.mode) {
        document.body.classList.add('app-dark');
      } else {
        document.body.classList.add('app-light');
      }
    }
  },
  methods: {
    modeSwitch() {
      if (this.mode) {
        document.body.classList.remove('app-light');
        document.body.classList.add('app-dark');
        localStorage.setItem(modeKey, 'dark');
      } else {
        document.body.classList.remove('app-dark');
        document.body.classList.add('app-light');
        localStorage.setItem(modeKey, 'light');
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.app-light {
  background-color: #ededed;
  color: #1f1f1f;
}

.app-dark {
  background-color: #1f1f1f;
  color: #ededed;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: orangered;
}
</style>
