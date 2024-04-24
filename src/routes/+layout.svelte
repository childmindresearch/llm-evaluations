<script lang="ts">
    import "../app.postcss";
    import "@cmi-dair/skeleton-themes/cmi.postcss";

    import { AppShell, Toast } from "@skeletonlabs/skeleton";
    import { initializeStores } from "@skeletonlabs/skeleton";

    initializeStores();
</script>

<svelte:head>
    <title>Agate</title>
</svelte:head>

<Toast />

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 md:w-64">
    <div class="max-w-screen-md mx-auto mt-5 px-5 min-w-[332px]">
        <slot />
    </div>
</AppShell>
