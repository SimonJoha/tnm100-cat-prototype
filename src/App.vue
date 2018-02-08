<template>
  <div id="app">
    <div class="app-container md-layout">
      <Tabs id="tabs" />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Tabs from './Tabs';

export default {
  name: 'App',
  components: {
    Tabs
  }
}
</script>

<style>
* {
  cursor: touch;
}

#tabs {
  position: fixed;
  bottom: 0;
}
</style>
