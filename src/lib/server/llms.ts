import OpenAI from "openai";
import type {
    ChatCompletionSystemMessageParam,
    ChatCompletionUserMessageParam,
} from "openai/resources/index.mjs";
import {
    BedrockRuntimeClient,
    InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import { fromEnv } from "@aws-sdk/credential-providers";

export interface llm {
    readonly model: string;

    run(systemPrompt: string, userPrompt: string): Promise<string>;
}

export class Gpt implements llm {
    readonly model: string = "gpt-4";
    private client = new OpenAI();

    async run(systemPrompt: string, userPrompt: string): Promise<string> {
        const messages = [
            {
                role: "system",
                content: systemPrompt,
            } as ChatCompletionSystemMessageParam,
            {
                role: "user",
                content: userPrompt,
            } as ChatCompletionUserMessageParam,
        ];
        const chatCompletion = await this.client.chat.completions.create({
            messages: messages,
            model: this.model,
        });
        return chatCompletion.choices[0].message.content ?? "";
    }
}

export class Llama implements llm {
    readonly model: string = "meta.llama3-70b-instruct-v1:0";
    private client = new BedrockRuntimeClient({
        region: "us-east-1",
        credentials: fromEnv(),
    });

    async run(systemPrompt: string, userPrompt: string): Promise<string> {
        const prompt = `
[INST]${systemPrompt}[/INST]
${userPrompt}
`;
        const payload = {
            prompt,
            max_gen_len: 1000,
            temperature: 0.5,
            top_p: 0.9,
        };

        const command = new InvokeModelCommand({
            contentType: "application/json",
            body: JSON.stringify(payload),
            modelId: this.model,
        });
        const apiResponse = await this.client.send(command);
        const decodedResponseBody = new TextDecoder().decode(apiResponse.body);
        const responseBody = JSON.parse(decodedResponseBody);
        return responseBody.generation;
    }
}

export class PromptTester {
    readonly systemPrompt: string;
    readonly userPrompt: string;
    readonly modelResponses: {
        model: llm;
        response?: string;
    }[];

    constructor(systemPrompt: string, userPrompt: string, models: llm[]) {
        this.systemPrompt = systemPrompt;
        this.userPrompt = userPrompt;
        this.modelResponses = models.map((model) => {
            return { model };
        });
    }

    async run() {
        await Promise.all(
            this.modelResponses.map(async (modelResponse) => {
                modelResponse.response = await modelResponse.model.run(
                    this.systemPrompt,
                    this.userPrompt,
                );
            }),
        );
    }
}
