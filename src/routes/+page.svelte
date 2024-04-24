<script lang="ts">
    import type { LlmResponses } from "$lib/types";
    import LlmResults from "$lib/components/LlmResults.svelte";
    import Carousel from "svelte-carousel";

    export let data: { body: LlmResponses[] };
</script>

<Carousel>
    {#each data.body as results}
        <div class="space-y-5 mt-5">
            <LlmResults {results} />
        </div>
    {/each}
</Carousel>
