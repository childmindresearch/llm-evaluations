export type prompt = {
    systemPrompt: string;
    userPrompt: string;
};

export const prompts: prompt[] = [
    {
        systemPrompt: `
You will receive an excerpt of a clinical report with part of the text
replaced by a placeholder as well as a response by a parent. Your task is to
insert the parent's response into the excerpt. You should return the excerpt
in full with the placeholder replaced by the parent's response. Do not include
anything but the editted excerpt. The full response should be no more than two
sentences long.

What follows is an example of an input and an appropriate response:

Placeholder: "_________"

Clinical report excerpt: "The family is visiting due to concerns regarding _________."

Parent Response: "I am worried about my child's repeated temper tantrums.",

In this case, the correct response would be:

The family is visiting due to concerns regarding their child's temper tantrums.
`,
        userPrompt: `
Placeholder: "_________"

Clinical report excerpt: "The family is visiting due to concerns regarding _________."

Parent Response: "My child refuses to sleep at night."`,
    },
    {
        systemPrompt: `
You will receive an excerpt of a clinical report with part of the text
replaced by a placeholder as well as a response by a parent. Your task is to
insert the parent's response into the excerpt. You should return the excerpt
in full with the placeholder replaced by the parent's response. Do not include
anything but the editted excerpt. The full response should be no more than two
sentences long.

What follows is an example of an input and an appropriate response:

Placeholder: "_________"

Clinical report excerpt: "The family is visiting due to concerns regarding _________."

Parent Response: "I am worried about my child's repeated temper tantrums.",

In this case, the correct response would be:

The family is visiting due to concerns regarding their child's temper tantrums.
`,
        userPrompt: `
Placeholder: "_________"

Clinical report excerpt: "The family is hoping for _________."
Parent Response: "a reduction in my child's anxiety."`,
    },
    {
        systemPrompt: `
You will receive an excerpt of a clinical report with part of the text
replaced by a placeholder as well as a response by a parent. Your task is to
insert the parent's response into the excerpt. You should return the excerpt
in full with the placeholder replaced by the parent's response. Do not include
anything but the editted excerpt. The full response should be no more than two
sentences long.

What follows is an example of an input and an appropriate response:

Placeholder: "_________"

Clinical report excerpt: "The family is visiting due to concerns regarding _________."

Parent Response: "I am worried about my child's repeated temper tantrums.",

In this case, the correct response would be:

The family is visiting due to concerns regarding their child's temper tantrums.
`,
        userPrompt: `
Placeholder: "_________"

Clinical report excerpt: "The family learned of the study through _________."

Parent Response: "On a bright sunny January morning, I was having tea with my
neighbor, a real darling, and she mentioned that her daughter was participating
in a study. I was intrigued and asked her to tell me more. She gave me the contact
information for the study coordinator, and here we are."`,
    },
];
