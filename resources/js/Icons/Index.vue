<template>
    <Iconslist :name="name" :size="size"></Iconslist> 
</template>

<script>
    import Iconslist from "./Iconslist.vue"

    export default {
        name: "icons",
        props: {  
            name: { type: String, required: true },
            size: {
                type: Object,
                default: {
                    height: 4,
                    width: 4
                }
            }
        },
        components: {
            Iconslist
        },
    }
</script>