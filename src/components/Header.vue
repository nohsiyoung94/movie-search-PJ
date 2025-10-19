<template> 
    <header>
        <Logo />
        <div class="nav nav-pills">
             <div v-for="nav in navigators"
             :key="nav.name"
              class="nav-item">
                <RouterLink
                v-bind:to="nav.href"
                active-class ="active"
                :class="{ active: isMatch(nav.path) }"
                 class="nav-link">
                {{ nav.name }}
                </RouterLink>
             </div>
        </div>
        <div class="user" 
        @click="toAbout">
            <img 
              :src="image" 
              :alt="name">
        </div>
    </header>
</template>



<script>
import { map } from 'lodash';
import { mapState } from 'vuex/dist/vuex.cjs.js';
import Logo from '~/components/Logo'

export default {
    components : {
        Logo
    },
    data() {
        return {
            navigators: [
                {
                    name : 'Search',
                    href: '/'
                },
                 {
                    name : 'Movie',
                    href: '/movie/tt4520988',
                    path: /^\/movie\//
                },
                 {
                    name : 'About',
                    href: '/about'
                }
            ]
        }
    },
    computed : {
    ...mapState('about',[
        'image',
        'name'
    ])
    }, 
        methods: {
        isMatch(path) {
            if(!path) return false
            return path.test(this.$route.fullPath)
        },
        toAbout() {
            console.log('!!!!!!')
            this.$router.push('/about')
        }
    }
}
</script>


<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap' as bs;
@use 'sass:color';

    header{
        height: 70px;
        padding: 0 40px;
        display: flex;
        align-items: center;
        position: relative ;
        .logo{
            margin-right: 40px;
        }
        .user {
            width: 40px;
            height: 40px;
            padding: 6px;
            border-radius: 50%;
            box-sizing: border-box;
            background-color: bs.$gray-200;
            cursor: pointer;
            position: absolute ;
            top: 0;
            bottom: 0;
            right: 40px;
            margin: auto;
            transition: 0.4s;
            &:hover{
                background-color: color.adjust(bs.$gray-200, $lightness: -10%);
            }
            img {
                width: 100%;
            }
        }
            @include bs.media-breakpoint-down(sm){
                .nav{
                    display: none;
                }
    }  
}
</style>