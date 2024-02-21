function SelectInput() {
  const options = Array.from({ length: 5 }, (val, index) => index + 1);
  return (
    <div>
      <label>Label</label>
      <select>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
