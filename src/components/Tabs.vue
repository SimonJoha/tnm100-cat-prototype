<template>
  <div class="tabs">
    <md-tabs md-alignment="fixed" md-sync-route>
      <md-tab id="tab-home" md-label="Home" md-icon="home"></md-tab>
      <md-tab id="tab-pages" md-label="Pages" md-icon="pages"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites" md-icon="favorite"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: 'Tabs'
}
</script>

<style lang="scss" scoped>
.tabs {
  width: 100vw;
}
</style>