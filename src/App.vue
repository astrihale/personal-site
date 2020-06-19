<template>
  <div id="app">
    <div class="md-layout md-flexible md-alignment-center dark-fade" id="nav">
      <router-link to="/" class="md-layout-item md-size-25">
        <md-button>
          Home
        </md-button>
      </router-link>
      <router-link class="md-layout-item md-size-25"
                   to="/about">
        <md-button>
          About
        </md-button>
      </router-link>
      <div>
        <md-tooltip md-direction="right">
          Switch between light/dark mode.
        </md-tooltip>
        <md-switch class="md-size-25" disabled="true"
                   @change="modeSwitch" v-model="mode" id="mode-switcher">
        </md-switch>
      </div>
    </div>
    <router-view id="main"/>
    <md-bottom-bar id="footer" md-type="fixed" class="md-layout-item dark-fade">
      Copyright <a href="https://github.com/astrihale/personal-site/blob/master/LICENSE">MIT</a> ©
      2020 | Nenad Vuletic
    </md-bottom-bar>
  </div>
</template>

<script>
const modeKey = 'agi-mode';

export default {
  data() {
    return {
      mode: true,
    };
  },
  created() {
    if (!localStorage.getItem(modeKey)) {
      localStorage.setItem(modeKey, 'dark');
    } else {
      this.mode = localStorage.getItem(modeKey) === 'dark';
      this.modeSwitch();
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
    background-image: url("assets/logo-light.png");
    background-size: 88px;
    color: #1f1f1f;
  }

  .app-dark {
    background-color: #1f1f1f;
    background-image: url("assets/logo-dark.png");
    background-size: 88px;
    color: #ededed;
  }

  .light-fade {
    background-color: rgba(255, 255, 255, 0.75);
  }

  .dark-fade {
    background-color: rgba(0, 0, 0, 0.75);
  }

  #nav a {
    font-weight: bold;
    color: orangered;
  }

  #footer {
    width: 100%;
    padding: 1% 3%;
    position: fixed;
    left: 0;
    bottom: 0;
  }

  #footer a {
    color: orangered;
  }
</style>
