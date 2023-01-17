<script setup>
    import setcover from "./Configurations/Cover.vue"
    import setcouples from "./Configurations/Couples.vue"
    import setinvitations from "./Configurations/Invitations.vue"
</script>

<template>

    <setcover v-if="slot === 'Cover'"></setcover>
    <setcouples v-if="slot === 'Profil Pasangan'"></setcouples>
    <setinvitations v-if=" slot === 'Detail Undangan'"></setinvitations>

</template>

<script>
export default {
    props: {
        slot: String,
    },
}
</script>