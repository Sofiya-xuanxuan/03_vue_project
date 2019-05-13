<template>
  <div class="home">
    home页
  </div>
</template>

<script>
export default {
  name: 'home',
  created() {
    this.$ajax.get('/api/userInfo').then((data)=>{
      console.log(data);
    });
  }
}
</script>
