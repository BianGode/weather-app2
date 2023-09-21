<template>
    <div>
        <input type="text" v-model="query">
        <h1>{{ query }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Search',
    props: ['query']
}
</script>

<style scoped>
input {
    background-color: black;
    color: white;
    width: 200px;
    height: 20px;
}
</style>