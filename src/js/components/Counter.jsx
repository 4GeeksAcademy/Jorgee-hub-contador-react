function Counter(props) {
    const hh = String(props.hours).padStart(2, "0")
    const mm = String(props.minutes).padStart(2, "0")
    const ss = String(props.seconds).padStart(2, "0")
    return (
        <>
            <h1 className="text-light bg bg-dark d-flex justify-content-center fw-bold m-0">Contador de segundos by Jorgee-hub</h1>
            <div className="justify-content-center gap-3 bg-black d-flex align-items-center" style={{ fontSize: "80px" }}>
                <i className="rounded p-1 bg-dark text-light bi bi-clock" style={{ width: "70px", height: "96px", textAlign: "center", fontSize: "60px" }}></i>
                <div className="my-2 rounded p-1 bg-dark text-light" style={{ width: "70px", height: "96px", textAlign: "center", fontSize: "60px" }}>{hh[0]}</div>
                <div className="my-2 rounded p-1 bg-dark text-light" style={{ width: "70px", height: "96px", textAlign: "center", fontSize: "60px" }}>{hh[1]}</div>
                <div className="my-2 rounded p-1 bg-dark text-light" style={{ width: "70px", height: "96px", textAlign: "center", fontSize: "60px" }}>{mm[0]}</div>
                <div className="my-2 rounded p-1 bg-dark text-light" style={{ width: "70px", height: "96px", textAlign: "center", fontSize: "60px" }}>{mm[1]}</div>
                <div className="my-2 rounded p-1 bg-dark text-light" style={{ width: "70px", height: "96px", textAlign: "center", fontSize: "60px" }}>{ss[0]}</div>
                <div className="my-2 rounded p-1 bg-dark text-light" style={{ width: "70px", height: "96px", textAlign: "center", fontSize: "60px" }}>{ss[1]}</div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-dark fs-2 m-1" onClick={props.stopInterval}>Detener</button>
                <button className="btn btn-dark fs-2 m-1" onClick={props.startInterval}>Reanudar</button>
                <button className="btn btn-dark fs-2 m-1" onClick={props.resetInterval}>Reiniciar</button>
            </div>

            <div className="m-1 d-flex justify-content-center">
                <input
                    className="text-light bg-dark form-control" style={{ width: "200px" }}
                    type="number"
                    placeholder="Establecer alerta"
                    onChange={(e) => props.setAlertTime(e.target.value)}
                    pattern="[0-9]*"
                    onKeyDown={(e) => {
                        if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                            e.preventDefault()
                        }
                    }}
                />
            </div>
            <div className="d-flex justify-content-center">
                <input
                    className="text-light bg-dark form-control" style={{ width: "200px" }}
                    type="number"
                    onChange={(e) => props.setCountDownTime(e.target.value)}
                    placeholder="Cuenta regresiva"
                    pattern="[0-9]*"
                    onKeyDown={(e) => {
                        if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                            e.preventDefault()
                        }
                    }}
                />
                <button className="btn btn-dark fs-6 m-1" onClick={props.startCountDown}>Iniciar cuenta regresiva</button>

            </div>

        </>
    );
}
export default Counter;