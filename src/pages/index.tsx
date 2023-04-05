import Head from 'next/head'
import SearchVehicle from '../components/SearchVehicle'
import Title from '@/components/Title'
import { SearchProvider } from '@/context/SearchContext';
import { Styled } from '@/typings/types';

const styled: Styled = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    background: "#f9f7fc",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
    color: "#383838"
  }
}

export default function Home() {
  return (
    <SearchProvider>
      <Head>
        <title>Mobiauto</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={styled.main}>
        <Title />
        <SearchVehicle />
      </main>
    </SearchProvider>
  )
}