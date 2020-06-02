<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button id="set-default" @click="defaultClick">
      Set to Default
    </button>
    <button id="set-irregular" @click="irregularClick">
      Set to Irregular
    </button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    defaultClick() {
      localStorage.setItem(this.$localStorageKeys.modeKey, 'DEFAULT');
    },
    irregularClick() {
      localStorage.setItem(this.$localStorageKeys.modeKey, 'IRREGULAR');
    },
  },
};
</script>
