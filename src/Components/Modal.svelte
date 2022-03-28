<script>
import { fade } from 'svelte/transition';
import { sineInOut } from 'svelte/easing';
// props
export let isPromo = false,
    showModal = false;
// props end
</script>

{#if showModal}
    <div
        transition:fade={{ duration: 600, easing: sineInOut }}
        class="backdrop z-10"
        class:promo={isPromo}
        on:click|self>
        <div class="content">
            <!-- Добавляем компомнент формы AddPerson.svelte в нутрь блока slot -->
            <slot />
        </div>
    </div>
{/if}

<style>
.backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
}
.content {
    padding: 40px 10px;
    border-radius: 15px;
    max-width: 500px;
    margin: 10% auto;
    text-align: center;
    background: white;
}

.promo .content {
    @apply bg-primary-content opacity-100;
}
</style>
