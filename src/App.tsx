import React from 'react';

type PropsType = {
    body: string
    id: number
    title: string
    userId: number
}

function App() {

    const [data, setData] = React.useState<PropsType[]>([])

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))

    }, [])

    const deleteHandler = () => {
        setData([])
    }




    const showPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }

    return (
        <div className="App">
            <button onClick={deleteHandler}>delete</button>
            <button onClick={showPosts}>show</button>
            <ul>
                {data.map((el) => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
