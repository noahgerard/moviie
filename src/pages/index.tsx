import Head from "next/head";

import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import MovieCard from "~/components/MovieCard";
import { type MovieResult } from "moviedb-promise";
import { useState } from "react";
import { loadingMovies } from "~/lib/utils";

export default function Home() {
    const [recent, setRecent] = useState<MovieResult[]>(loadingMovies);
    const [favorites, setFavorites] = useState<MovieResult[]>(loadingMovies);
    
    return (
        <>
            <Head>
                <title>Moviie | Home</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar selected="home" />
            <main id="app" className="page-container">
                <div className="h-10 w-full"></div>
                <div className="flex flex-col w-full py-16">
                    <p className="text-3xl font-bold pl-4">Recent</p>
                    <div className="overflow-x-scroll">
                        <div className="flex w-fit">
                        {
                            recent.map((movie, index) => <MovieCard key={index} data={movie} />)
                        }
                        </div>
                    </div>

                    <p className="text-3xl font-bold pl-4 mt-8">Your Favorites</p>
                    <div className="overflow-x-scroll">
                        <div className="flex w-fit">
                        {
                            favorites.map((movie, index) => <MovieCard key={index} data={movie} />)
                        }
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
