<script>
import ToggleTheme from './ToggleTheme.svelte';
</script>

<header class="navbar shadow-md shadow-neutral-content">
    <div class="flex-1">
        <button class="btn btn-secondary" on:click>Open modal</button>
    </div>
    <ToggleTheme />
</header>
