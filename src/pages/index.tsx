import Head from "next/head";

import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import MovieCard from "~/components/MovieCard";
import { useState } from "react";

const movies = [
    {
        name: "The Shawshank Redemption",
        image: "https://images-na.ssl-images-amazon.com/images/I/51NpxWJQ5QL._AC_.jpg",
    },
    {
        name: "The Godfather",
        image: "https://images-na.ssl-images-amazon.com/images/I/51NpxWJQ5QL._AC_.jpg",
    },
    {
        name: "The Dark Knight",
        image: "https://images-na.ssl-images-amazon.com/images/I/51NpxWJQ5QL._AC_.jpg",
    },
    {
        name: "The Shawshank Redemption",
        image: "https://images-na.ssl-images-amazon.com/images/I/51NpxWJQ5QL._AC_.jpg",
    },
    {
        name: "The Godfather",
        image: "https://images-na.ssl-images-amazon.com/images/I/51NpxWJQ5QL._AC_.jpg",
    },
    {
        name: "The Dark Knight",
        image: "https://images-na.ssl-images-amazon.com/images/I/51NpxWJQ5QL._AC_.jpg",
    },
    {
        name: "The Shawshank Redemption",
        image: "https://images-na.ssl-images-amazon.com/images/I/51NpxWJQ5QL._AC_.jpg",
    },
    {
        name: "The Godfather",
        image: "https://images-na.ssl-images-amazon.com/images/I/51NpxWJQ5QL._AC_.jpg",
    },
    {
        name: "The Dark Knight",
        image: "https://images-na.ssl-images-amazon.com/images/I/51NpxWJQ5QL._AC_.jpg",
    },
    {
        name: "The Shawshank Redemption",
        image: "https://images-na.ssl-images-amazon.com/images/I/51NpxWJQ5QL._AC_.jpg",
    },
    {
        name: "The Godfather",
        image: "https://images-na.ssl-images-amazon.com/images/I/51NpxWJQ5QL._AC_.jpg",
    },
    {
        name: "The Dark Knight",
        image: "https://images-na.ssl-images-amazon.com/images/I/51NpxWJQ5QL._AC_.jpg",
    },
]

export default function Home() {

    
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
                            //movies.map((movie, index) => <MovieCard key={index} name={movie.name} image={movie.image} />)
                        }
                        </div>
                    </div>

                    <p className="text-3xl font-bold pl-4 mt-8">Your Favorites</p>
                    <div className="overflow-x-scroll">
                        <div className="flex w-fit">
                        {
                            //movies.map((movie, index) => <MovieCard key={index} data={movie} />)
                        }
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
