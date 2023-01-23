import React from 'react'

export default function Alert(Props) {

    const capital = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        Props.alert && <div class={`alert alert-${Props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capital(Props.alert.type)}</strong>:  {Props.alert.message}
        </div>
    )
}