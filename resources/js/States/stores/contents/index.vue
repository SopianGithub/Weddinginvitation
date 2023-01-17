<script setup>
    import { useAmplopStore } from './amplop';
    import { useCoupleStore } from './couples';
    import { useCoverStore } from './covers';
    import { useGalleryStore } from './galleries';
    import { useGreetingStore } from './greetings';
    import { useGuestStore } from './guests';
    import { useInvitationStore } from './invitations';
    import { useQuoteStore } from './quotes';
    import { useSoundStore } from './sounds';
    import { useStoryStore } from './stories';
    import { useStramingStore } from './streaming';
    import { useThemeStore } from './themes';
</script>

<script>
export default {
    setup() {
        return {
            ...mapStores(useAmplopStore, useCoupleStore, useCoverStore, useGalleryStore, useGreetingStore, useGuestStore, useInvitationStore, useQuoteStore, useSoundStore, useStoryStore, useStramingStore, useThemeStore)
        }
    }
}
</script>

<!-- export const contentStore = () => {
    return {
        amplop: useAmplopStore(),
        couple: useCoupleStore(),
        cover: useCoverStore(),
        galley: useGalleryStore(),
        greeting: useGreetingStore(),
        guest: useGuestStore(),
        invitations: useInvitationStore(),
        quote: useQuoteStore(),
        sound: useSoundStore(),
        story: useStoryStore(),
        streaming: useStramingStore(),
        theme: useThemeStore()
        // 
    }
} -->

<!-- // export default {
    
//     computed: {
//         // other computed properties
//         ...mapStores(useAmplopStore, useCoupleStore, useCoverStore, useGalleryStore, useGreetingStore, useGuestStore, useInvitationStore, useQuoteStore, useSoundStore, useStoryStore, useStramingStore, useThemeStore)
//     },
// } -->