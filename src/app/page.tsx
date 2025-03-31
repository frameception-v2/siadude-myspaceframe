import { Metadata } from "next";
import App from "./app";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

const appUrl =
  process.env.NEXT_PUBLIC_URL ||
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

const frame = {
  version: "next",
  imageUrl: `${appUrl}/opengraph-image`,
  button: {
    title: "Launch Frame",
    action: {
      type: "launch_frame",
      name: PROJECT_TITLE,
      url: appUrl,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: PROJECT_TITLE,
    metadataBase: new URL(appUrl),
    openGraph: {
      title: PROJECT_TITLE,
      description: PROJECT_DESCRIPTION,
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return <App />;
}
import Frame from "~/components/Frame";
import { PROJECT_TITLE, PROJECT_DESCRIPTION, EMPIRE_URL } from "~/lib/constants";

export const metadata = {
  title: PROJECT_TITLE,
  description: PROJECT_DESCRIPTION,
  openGraph: {
    title: PROJECT_TITLE,
    description: PROJECT_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: PROJECT_TITLE,
      },
    ],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "/og-image.png",
    "fc:frame:post_url": EMPIRE_URL,
    "fc:frame:button:1": "Visit My Empire",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Frame />
    </main>
  );
}
