import Head from "next/head";
import Link from 'next/link'
import Image from 'next/image'


import axios from "/src/configs/axios";

import Circle from "public/images/circle-accent-1.svg"

import Header from "src/parts/Header";

function Home(props) {
    console.log(props);
    return (
        
        <>
            <Head>
                <title>
                    AfterSchool
                </title>
            </Head>

            <main>
                <section className="min-h-screen pt-10 header-clipping md:min-h-0">
                    <Circle className="absolute bottom-0 left-0"></Circle>
                    <div className="max-w-full sunshine"></div>
                    <div className="container px-4 mx-auto">
                        <Header></Header>
                        {/* <Hero></Hero> */}
                    </div>
                </section>

                <section className="container px-4 mx-auto md:pt-24">
                    {/* <Clients></Clients> */}
                </section>

                <section className="container px-4 mx-auto md:pt-24">
                    {/* <ListCourses data={data}></ListCourses> */}
                </section>

                <section className="container px-4 mx-auto md:pt-24">
                    {/* <ListCategories></ListCategories> */}
                </section>

                <section className="py-12 mt-24 bg-indigo-1000">
                    {/* <Footer></Footer> */}
                </section>
            </main>
        </>
        
    )
}

Home.getInitialProps = async () => {
try {
    const data = await axios.get(`/courses`);

    return { data: data.data };
} catch (error) {
    return error;
}
};

export default Home;