<script lang="ts">
    import type { LlmResponses } from "$lib/types";
    import { TabGroup, Tab } from "@skeletonlabs/skeleton";

    export let results: LlmResponses;
    let tabSet: number = 0;
</script>

<p><b>System Prompt:</b>{results.systemPrompt}</p>
<p><b>User Prompt</b>{results.userPrompt}</p>
<TabGroup>
    {#each results.responses as model, index}
        <Tab bind:group={tabSet} name={model.model} value={index}>
            <span>{model.model}</span>
        </Tab>
    {/each}

    <svelte:fragment slot="panel">
        {#each results.responses as model, index}
            {#if tabSet === index}
                <div>
                    <p>{model.response}</p>
                </div>
            {/if}
        {/each}
    </svelte:fragment>
</TabGroup>
