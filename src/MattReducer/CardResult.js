const CardResult = ({result}) => {
    return (
        <div className="card">
            <div className="card-header text-center"><h1>RESULTADO</h1></div>
            <div className="card-body">
                <blockquote className="blockquote mb-0 text-center">
                    <h1>{result}</h1>
                </blockquote>
            </div>
        </div>
    )
}

export default CardResult
