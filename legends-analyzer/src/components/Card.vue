<template lang="">
  <div :style="{ 'background-image': 'url(' + imageLink + ')' }" class="card">
    <div class="textCard" :class="{ hide: isHide }">
      <div>
        <h1>{{ title }}</h1>
        <a v-show="!isHide">Learn more</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imageLink: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isHide: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style>
.card {
  height: 50vh;
  width: 30vh;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;
}

.card:hover {
  box-shadow: 1px -300px 200px -70px rgba(0, 0, 0, 0.75) inset;
  -webkit-box-shadow: 1px -300px 200px -70px rgba(0, 0, 0, 0.75) inset;
  -moz-box-shadow: 1px -300px 200px -70px rgba(0, 0, 0, 0.75) inset;
  transition: 0.35s;
}

.card:hover .textCard div {
  transform: translateY(-15px);
  transition: 0.35s;
}

.card:not(:hover) .textCard div {
  transform: translateY(150px);
  transition: 0.35s;
}

.hide {
  backdrop-filter: blur(10px) grayscale(100%);
}

.textCard {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  filter: none;
  padding-left: 10%;
}
</style>
