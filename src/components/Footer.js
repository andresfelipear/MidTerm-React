import React from 'react'

export default function Footer() {
    return (
        <div style={{
            position: 'sticky',
            bottom: '0',
        }}>
            <hr />
            <p style={{
                fontSize: "12px",
                fontStyle: "italic",
            }}>© 2021 Andres Arevalo - Weather App </p>
        </div>
    )
}
