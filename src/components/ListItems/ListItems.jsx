
export default function ListItems({label, value, onToggle}){
    return(
        <>
        <label className="flex items-center m-3 gap-3 p-3 rounded-lg bg-card text-textcol cursor-pointer hover:bg-blue/10 transition">
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