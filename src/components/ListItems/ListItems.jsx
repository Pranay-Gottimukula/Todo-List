
export default function ListItems({label, value, onToggle}){
    return(
        <>
        <label className="flex items-center gap-3 p-3 my-3 rounded-lg border-blue border-1 bg-card text-textcol cursor-pointer hover:bg-blue/10 transition">
        <input
        type="radio"
        checked={value}
        onClick={onToggle}
        className="accent-blue w-5 h-5 cursor-pointer"
        />
        <span className="text-xl">{label}</span>
        </label>
        </>
    ) 
};