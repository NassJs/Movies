export const Card = ({children}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {children}
        </div>
    )
}
export const CardHeader = ({children}) => {
    return (
        <div className="card_header">
            {children}
        </div>
    )
}
export const CardBody = ({children}) => {
    return (
        <div className="card_body">
            {children}
        </div>
    )
}
