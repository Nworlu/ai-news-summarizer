export type OnboardingContentProps = {
  id: number;
  title: string;
  description: string;
  image: any;
};

export const onboardingContent = [
  {
    id: 1,
    title: "📢 Stay Informed, Effortlessly!",
    description:
      "Get the latest news, trending stories, and in-depth summaries—all in one place.",
    image: require("@/assets/image/onboard.jpeg"),
  },
  {
    id: 2,
    title: "🤖 Smart Summaries, No Fluff!",
    description:
      "Our AI condenses long articles into bite-sized summaries, so you get the key points in seconds.",
    image: require("@/assets/image/onboard2.jpeg"),
  },
  {
    id: 3,
    title: "✨ News That Matters to You",
    description:
      "Select your interests, and our AI will curate a feed just for you.",
    image: require("@/assets/image/onboard3.jpeg"),
  },
];

export const tagProfile = ["Recently Viewed", "Summarized News"];
