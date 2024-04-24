import { prompts } from "$lib/prompts";
import { Gpt, Llama, PromptTester } from "$lib/server/llms";
import type { LlmResponses } from "$lib/types.js";

export async function load({}) {
    const models = [new Gpt(), new Llama()];

    const testers = prompts.map((prompt) => {
        return new PromptTester(prompt.systemPrompt, prompt.userPrompt, models);
    });

    const promises = testers.map((tester) => tester.run());
    await Promise.all(promises);
    const response: LlmResponses[] = prompts.map((prompt, i) => {
        return {
            systemPrompt: prompt.systemPrompt,
            userPrompt: prompt.userPrompt,
            responses: testers[i].modelResponses.map((modelResponse) => {
                return {
                    model: modelResponse.model.model,
                    response: modelResponse.response ?? "",
                };
            }),
        };
    });
    return {
        body: response,
    };
}
