import Head from "next/head"
import Link from "next/link"

function Todo({data}) {
    return (
        <>
            <Head>
                <title>AfterSchool | Courses | {data.title}</title>
            </Head>

            <main className="container mx-auto mt-12">
                <h1 className="text-3xl font-bold">
                    {data.title}
                </h1>
                <p>Please compleate your jobs</p>
                <Link href="/random">
                    Bring me to random fetch
                </Link>
            </main>
        </>
    )
}

Todo.getInitialProps = async (props) => {
    
    const { id } = props.query;
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => response.json())
            .then((json) => json)
        return { data };

    } catch (error) {
        
    }
}

export default Todo;