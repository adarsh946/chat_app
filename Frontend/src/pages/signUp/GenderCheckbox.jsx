const GenderCheckbox = ({ onCheckboxChange, onSelectedCheckbox }) => {
  return (
    <div className="flex  text-gray-600">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer  ${
            onSelectedCheckbox === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={onSelectedCheckbox === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            onSelectedCheckbox === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={onSelectedCheckbox === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
