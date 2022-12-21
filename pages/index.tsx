import Header from "../components/header";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>STREAM@S</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <p className="my-4">
        サブスクリプションサービスで楽しむアイドルマスターの音楽
      </p>
      <p>
        <ul className="text-2xl font-bold">
          <li>
            765PRO ALLSTARS
            <span className="text-gray-300 text-lg"> - 現在対応中です</span>
          </li>
          <li>
            <span className="text-gray-300">
              シンデレラガールズ
              <span className="text-gray-300 text-lg">
                - 取り扱い予定はございません
              </span>
            </span>
          </li>
          <li>
            <Link href="/millionlive" className="underline">
              ミリオンライブ
            </Link>
            <span className="text-gray-300 text-lg"> - 現在対応中です</span>
          </li>
          <li>
            SideM
            <span className="text-gray-300 text-lg">
              - 対応を検討しています
            </span>
          </li>
          <li>
            <Link href="/shinycolors" className="underline">
              シャイニーカラーズ
            </Link>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Home;
