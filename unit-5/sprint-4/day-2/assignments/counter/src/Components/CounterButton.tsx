
type countprop={
    increament:()=>void
    decreament:()=>void
}
export default function CounterButton({decreament,increament}:countprop) {
    
    return <div>
        <button onClick={increament}>Increase</button>
        <button onClick={decreament}>Decrease</button>
    </div>
};
