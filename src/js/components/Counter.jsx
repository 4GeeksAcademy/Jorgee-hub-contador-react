function Counter(props) {

    const hh = String(props.hours).padStart(2, "0")
    const mm = String(props.minutes).padStart(2, "0")
    const ss = String(props.seconds).padStart(2, "0")
    return (
        <div className="justify-content-center gap-1 bg-black d-flex align-items-center">
            <i className="fs-6 rounded p-1 bg-dark text-light bi bi-clock"></i>
            <div className="rounded p-1 bg-dark text-light">{hh[0]}</div>
            <div className="rounded p-1 bg-dark text-light">{hh[1]}</div>
            <div className="rounded p-1 bg-dark text-light">{mm[0]}</div>
            <div className="rounded p-1 bg-dark text-light">{mm[1]}</div>
            <div className="rounded p-1 bg-dark text-light">{ss[0]}</div>
            <div className="rounded p-1 bg-dark text-light">{ss[1]}</div>
        </div>
    );
}
export default Counter;