<template> 
  <RouterLink 
    to = "/"
    class="logo">
    <span>OMDbAPI</span>.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo{
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: var(--bs-black);
  text-decoration: none;
  
  &:hover {
    color : var(--bs-black)
  }
  
  span { color: var(--bs-primary); }
}
</style>
 