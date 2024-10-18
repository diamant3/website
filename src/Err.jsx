import { useRouteError } from 'react-router-dom'

export function Err() {
    const err = useRouteError();
    console.error(err);

    return (
        <div className='flex flex-col justify-evenly items-center py-2'>
            <h1 className='text-4xl font-mono text-red-500'>Oops!</h1>
            <p>Sorry, an unexpected error has occured.</p>
            <p>
                <i>{err.statusText || err.message}</i>
            </p>
        </div>
    )
}