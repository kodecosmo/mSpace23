export default function OptionAtom({ value = "", text = "", selected = "false", disabled = "false" }) {
    return (
        <option selected={selected} disabled={disabled} value={value}>
            {text}
        </option>
    );
}