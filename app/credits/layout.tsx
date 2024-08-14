export default function CreditLayout({
    children,
} : {
    children : React.ReactNode
}) {
    return (
        <div>
            {children}
            <h2>Credits</h2>
        </div>
    )
}