import Head from 'next/head'
import Link from 'next/link'

function Random({data}) {
    
    return (
        <>
            <Head>
                <title>AfterSchool | Courses</title>
            </Head>

            <main className="container mx-auto mt-12">
                <h1 className="text-3xl font-bold text-blue-900">
                    Fetching random words
                </h1>
                <ul>
                    {data.map((todo) => {
                        return (
                            <li key={todo.id} className="p-4 border border-blue-600">
                                {todo?.title ?? "-"}{" "}
                                <Link href={`/random/${todo.id}`}>
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