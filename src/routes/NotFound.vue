<template> 
<div class="not-found">
    <div class="status">
        404
    </div>
    <div class="message">
        페이지를 찾을 수 없습니다. 
    </div>
</div>

</template>


<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap' as bs;

.not-found{
    line-height: 1.2;
    text-align: center;
    font-family: "Oswald", sans-serif;
    padding: 80px 20px;
    color:bs.$primary;
    .status{
        font-size: 160px;
        color:bs.$primary;

    }
    .message{
        font-size: 80px;
    }
}
</style>