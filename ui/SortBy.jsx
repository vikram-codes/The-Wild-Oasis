import Select from "./Select";

function SortBy({ options }) {
  function handleChange(event) {
    console.log(event.target.value);
  }
  return (
    <div>
      <Select options={options} type="white" onChange={handleChange} />
    </div>
  );
}

export default SortBy;
