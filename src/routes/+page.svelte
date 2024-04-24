<script lang="ts">
    import type { LlmResponses } from "$lib/types";
    import LlmResults from "$lib/components/LlmResults.svelte";

    export let data: { body: LlmResponses[] };
</script>

<div class="space-y-8 mb-8">
    {#each data.body as results}
        <div>
            <LlmResults {results} />
        </div>
    {/each}
</div>
