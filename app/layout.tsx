import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "@/styles/globals.css";
import { IBM_Plex_Sans, Roboto } from "next/font/google";
import { EntrustLogo, EuFundedLogo } from "@/components/Logos";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
});

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={<EntrustLogo />}
    // ... Your additional navbar options
  />
);
const footer = (
  <Footer>
    <EntrustLogo />
    <EuFundedLogo />
  </Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
      //fonts
      className={`${plexSans.variable} ${roboto.variable}`}
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/federated-research/entrust-training/tree/main"
          footer={footer}
          // ... Your additional layout options
          darkMode={false}
          nextThemes={{
            defaultTheme: "light",
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
