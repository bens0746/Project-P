import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { persistStore } from "redux-persist";
import { DefaultSeo } from 'next-seo';
import { GoogleAnalytics } from "nextjs-google-analytics";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  persistStore(store);
  return (
    <Provider store={store}>
      <div className="background bgsize -z-50"></div>
      <Layout>
        <Head>
          <link rel="icon" href="/images/logo.png" />
        </Head>
        <DefaultSeo
          title="ร้านขายกัญชา คาเฟ่กัญชา ที่ใหญ่ที่สุดในเขาใหญ่-ปากช่อง"
          description="ภายในร้าน มีสินค้าแปรรูปจากกัญชาให้เลือกหลากหลายสายพันธุ์ รวมทั้งมีอุปกรณ์ต่าง ๆ ให้เลือกซื้ออย่างครบครัน
                      และยังมีสินค้าพิเศษ อาทิ เสื้อ แก้วน้ำที่กสรีนลายโลโก้ของร้านไว้ให้เลือกสะสม มีการบริการลูกค้าดุจญาติมิตร รับรองความประทับใจ"
          canonical="https://pig-jungle.com/"
          openGraph={{
            url: 'https://pig-jungle.com/',
            title: 'ร้านขายกัญชา คาเฟ่กัญชา ที่ใหญ่ที่สุดในเขาใหญ่-ปากช่อง',
            description: 'ภายในร้าน มีสินค้าแปรรูปจากกัญชาให้เลือกหลากหลายสายพันธุ์ รวมทั้งมีอุปกรณ์ต่าง ๆ ให้เลือกซื้ออย่างครบครัน และยังมีสินค้าพิเศษ อาทิ เสื้อ แก้วน้ำที่กสรีนลายโลโก้ของร้านไว้ให้เลือกสะสม มีการบริการลูกค้าดุจญาติมิตร รับรองความประทับใจ',
            images: [
              {
                url: 'https://pig-jungle.com/images/popup.jpg',
                width: 800,
                height: 600,
                alt: 'Pig Jungle',
                type: 'image/jpeg',
              },
              {
                url: 'https://pig-jungle.com/images/popup.jpg',
                width: 900,
                height: 800,
                alt: 'กัญชาหมูป่า',
                type: 'image/jpeg',
              },
              { url: 'https://pig-jungle.com/images/popup.jpg' },
              { url: 'https://pig-jungle.com/images/popup.jpg' },
            ],
            siteName: 'SiteName',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
          facebook={{
            appId: '12345 67890',
            title: 'ร้านขายกัญชา คาเฟ่กัญชา ที่ใหญ่ที่สุดในเขาใหญ่-ปากช่อง บริการครบวงจร',
            description: 'ภายในร้าน มีสินค้าแปรรูปจากกัญชาให้เลือกหลากหลายสายพันธุ์ รวมทั้งมีอุปกรณ์ต่าง ๆ ให้เลือกซื้ออย่างครบครัน และยังมีสินค้าพิเศษ อาทิ เสื้อ แก้วน้ำที่กสรีนลายโลโก้ของร้านไว้ให้เลือกสะสม มีการบริการลูกค้าดุจญาติมิตร รับรองความประทับใจ',
            images: [
              {
                url: 'https://pig-jungle.com/images/popup.jpg',
                width: 800,
                height: 600,
                alt: 'Pig Jungle',
                type: 'image/jpeg',
              },
              {
                url: 'https://pig-jungle.com/images/popup.jpg',
                width: 900,
                height: 800,
                alt: 'กัญชาหมูป่า',
                type: 'image/jpeg',
              },
              { url: 'https://pig-jungle.com/images/popup.jpg' },
              { url: 'https://pig-jungle.com/images/popup.jpg' },
            ],
            siteName: 'SiteName',

          }}
        />
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
