import Head from 'next/head';
import Link from 'next/link';
import PostCard from '../components/PostCard';

export default function Home() {
  const posts = [
    {
      id: 1,
      title: 'Encrypted Message from Cairo',
      content: '🔐 Encrypted:\nU2FsdGVkX1+...',
      timestamp: '2025-09-18',
    },
    {
      id: 2,
      title: 'FreedomCast[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/bgoonz/docs-collection/tree/e5ff178fc6037ec4cf5a0d8bd35b0cecd8c24276/nextjs%2Fmigrating%2Ffrom-gatsby.md?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "1")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/kidow/blog/tree/69549cf92c334b49898f4efac43d0b0453dc8197/content%2Fblog%2F%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B8%B0%EC%B4%88-%EC%84%B8%ED%8C%85%2Findex.md?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "2")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/fitfab/fitfab.2/tree/c3edb7f287d0096e235955062e0c412deb64b839/INITIAL_SETUP_DOC.md?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "3")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/eunha0ne/study-nextjs-tutorial/tree/9a9093a8f1233cf4d0ff359c52faa051abd3362c/README.md?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "4")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/AugustoCustodio/boilerplate/tree/19150ffce41d00f094c2749851070cd2c09c0cd6/README.md?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "5")
