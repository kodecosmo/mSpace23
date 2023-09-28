export default function OptionAtom({ value = "", text = "", disabled = false }) {
    return (
        <option disabled={disabled} value={value}>
            {text}
        </option>
    );
}