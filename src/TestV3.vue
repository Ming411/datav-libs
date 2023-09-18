<template>
  <div>
    <h1>{{ message }}</h1>
    <p>count: {{ count }}</p>
    <button @click="handleBtn">+1</button>
  </div>
</template>

<script setup>
import {ref} from 'vue';
defineOptions({
  name: 'TestV3' // 自定义组件名
});
const message = 'hello world';
const count = ref(0);
const handleBtn = () => {
  count.value++;
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
