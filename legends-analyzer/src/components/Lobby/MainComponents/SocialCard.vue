<template>
    <div class="socialCard" :style="{backgroundColor: color}">
        <BsCalendar4Range />
        <h3>{{ title }}</h3>
    </div>
</template>

<script setup>
</script>

<script>
export default {
    props: {
        iconClass: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    }
}
</script>
<style>
.socialCard {
    width: 20vh;
    height: 100px;
}

.socialCard img {
    width: 20%;
    object-fit: cover;
}
</style>