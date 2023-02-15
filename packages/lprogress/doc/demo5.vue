<template>
    <div class="progress">
    <div class="progress-row">
        <l-progress circle :length=10 :percent=30 color="danger"></l-progress>
    </div>
    <div class="progress-row">
        <l-progress circle :length=10 :percent=40 color="success"></l-progress>
    </div>
    <div class="progress-row">
        <l-progress circle :length=10 :percent=50 color="warning"></l-progress>
    </div>
    <div class="progress-row">
        <l-progress circle :length=10 :percent=60 color="primary"></l-progress>
    </div>
    <div class="progress-row">
        <l-progress circle :length=10 :percent=70 color="default"></l-progress>
    </div>
</div>
</template>
<style scoped>
.progress{
    overflow: hidden;
}
.progress-row{
    float: left;
    margin-left: 2vw;
}
</style>