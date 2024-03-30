<template lang="">
  <div
    :style="{ 'background-image': 'url(' + imageLink + ')' }"
    class="card"
    :class="{ hide: isHide }"
  >
    <div class="full">
      <div class="textCard">
        <h1>{{ title }}</h1>
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
  display: flex;
  align-items: flex-end;
  border-radius: 20px;
}

.card:hover {
  box-shadow: 1px -300px 200px -70px rgba(0, 0, 0, 0.75) inset;
  -webkit-box-shadow: 1px -300px 200px -70px rgba(0, 0, 0, 0.75) inset;
  -moz-box-shadow: 1px -300px 200px -70px rgba(0, 0, 0, 0.75) inset;
  transition: 0.35s;
}

.card:hover {
  font-size: 1.5em;
  transition: 0.35s;
}

.card:not(:hover) {
  font-size: 0em;
  transition: 0.35s;
}

.hide {
  filter: blur(10px) grayscale(100%);
}

.textCard {
  width: 0%;
  padding-left: 10%;
  filter: none;
}
/* .hide:hover {
  font-size: 0em;
  box-shadow: none;
} */
</style>
