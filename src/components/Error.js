import React from 'react'
import { Alert } from 'react-bootstrap'

const Error = ({variant="info", children}) => {
    return (
        <div>
            <Alert  variant={variant}>
                {children}
            </Alert>
        </div>
    )
}

export default Error
