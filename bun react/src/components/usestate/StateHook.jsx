import React, { useState } from 'react'

export default function StateHook() {
    const [answer, setAnswer] = useState('');
    // const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');


    return (
        <>
            <form onSubmit={() => {
                setStatus("submiting")
            }
            }>
                <textarea
                    value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value)
                        // answer = e.target.value;= 
                        setStatus("typing")
                    }}
                />
                <br />
                <button disabled={
                    answer.length === 0 || status === "submiting"
                }>
                    Submit
                </button>

            </form>
        </>
    );
}