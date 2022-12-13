/* eslint-disable @next/next/no-title-in-document-head */
/* eslint-disable @next/next/inline-script-id */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const page = ctx.renderPage();
    return { ...initialProps, ...page };
  }

  render() {
    return (
      <Html lang="km">
        <title>Chhay | Portfolio</title>
        <Head>
          
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
