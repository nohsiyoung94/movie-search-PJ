<template> 
    <div class="about">
        <div class="photo">
            <Loader 
            v-if="imgeLoading"
            absolute />
            <img :src="image" :alt="name">
        </div>
        <div class="name">
            {{ name }}
        </div>
        <div>{{ email }}</div>
        <div>{{ blog }}</div>
        <div>{{ phone }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Loader from '~/components/Loader';
import loadImage from '../plugins/loadImage';

export default {
    data(){
        return {
            imgeLoading : true
        }
    },
    computed : {
        ...mapState('about',[
            'image',
            'name',
            'email',
            'blog',
            'phone']),
    },
    mounted(){
        this.init()
    },
    methods:{
        async init () {
            await this.$loadImage(this.image)
            this.imgeLoading = false
        }
    }
}

</script>



<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap' as bs; // Bootstrap 변수 import

.about {
    text-align: center; // 중앙 정렬
    .photo {
        width: 250px;
        height: 250px;
        margin: 40px auto 20px;
        padding : 30px;
        border : 10px solid bs.$gray-300;
        border-radius: 50%;
        box-sizing: border-box;
        background-color: bs.$gray-200;
        position: relative;
        img{
            width:100%;
        }
    }
    
    .name {
        font-size: 40px;
        font-family: "Oswald", sans-serif;
        margin-bottom: 20px;
    }
}
</style> 