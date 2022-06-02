import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User{
    name?: string,
    job?: string
}

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);
    const handleIncreaser = (): void =>{
        setCounter(counter + 1)
    }

    const handleUserSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const userData = {
            name: 'Adan',
            job: 'Dev'
        }
        setUser(userData);
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void =>{

    }
    return (
        <div>
            <h2>This is for counter</h2>
            <h2>{counter}</h2>
            <button onClick={handleIncreaser}>Increase</button>
        </div>
    );
};

export default Counter;