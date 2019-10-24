<template>
    <div class="home">
        eirwoty2q349314
        <img src="../assets/logo.png" />
        <HelloWorld msg="ssssssssssssssssssssssss"/>
    </div>
</template>
<script lang="ts">
    import {Component,Vue} from 'vue-property-decorator';
    import HelloWorld from '../compoments/helloWorld.vue'

    @Component({
        components: {
            HelloWorld
        }
    })
    export default class Index extends Vue {
        name: 'home'
    }
</script>