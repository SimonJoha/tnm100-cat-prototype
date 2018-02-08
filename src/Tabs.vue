<template>
  <div class="tabs">
    <md-tabs md-alignment="fixed" md-sync-route>
      <md-tab id="tab-camera" md-label="Video feed" md-icon="camera_alt" to="/camera"></md-tab>
      <md-tab id="tab-home" md-label="Home" md-icon="home" to="/"></md-tab>
      <md-tab id="tab-chart" md-label="Statistics" md-icon="show_chart" to="/stats"></md-tab>
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
  width: 100%;
}
</style>