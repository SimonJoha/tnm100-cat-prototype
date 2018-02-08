<template>
  <div id="app">
    <div class="md-layout">
      <Tabs id="tabs" />
      <!-- <router-view/> -->
    </div>
  </div>
</template>

<script>
import Tabs from './components/Tabs';

export default {
  name: 'App',
  components: {
    Tabs
  }
}
</script>

<style>
#tabs {
  position: fixed;
  bottom: 0;
}
</style>
