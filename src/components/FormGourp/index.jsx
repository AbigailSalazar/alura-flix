import styles from "./FormGroup.module.css";

function FormGroup({
  name,
  label,
  type,
  placeholder,
  options,
  color,
  required,
  handleChange,
  value,
}) {
  const borderStyle = { border: `2px solid ${color}` };

  return (
    <div className={styles.form_group}>
      <label>{label}</label>
      {type === "select" ? (
        <select
          className={styles.input}
          name={name}
          style={borderStyle}
          required={required}
          onChange={handleChange}
          value={value}
        >
          <option value={0} hidden>
            Selecciona una categoria
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          style={borderStyle}
          className={styles.input}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
          value={value}
        ></textarea>
      ) : (
        <input
          name={name}
          style={borderStyle}
          className={styles.input}
          type={type}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
          value={value}
        />
      )}
    </div>
  );
}

export default FormGroup;
