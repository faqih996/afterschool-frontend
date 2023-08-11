import Head from 'next/head'
import Link from 'next/link'

function Random({data}) {
    
    return (
        <>
            <Head>
                <title>Micro | Courses</title>
            </Head>

            <main className="container mx-auto mt-12">
                <h1 className="text-3xl font-bold">
                    Fetching random words
                </h1>
                <ul>
                    {data.map((todo) => {
                        return (
                            <li key={todo.id} className="px-5 border border-indigo-700">
                                {todo?.title ?? "-"}{" "}
                                <Link href={`/courses/${todo.id}`}>
                                    Launch
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                
            </main>
        </>
    );
}

Random.getInitialProps = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => json);
        return { data };
    } catch (error) {
            
    }
}


export default Random