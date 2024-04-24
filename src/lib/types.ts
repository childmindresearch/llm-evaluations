export type LlmResponses = {
    systemPrompt: string;
    userPrompt: string;
    responses: {
        model: string;
        response: string;
    }[];
};
