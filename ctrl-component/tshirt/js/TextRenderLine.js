const TextRenderLine = ({ onChange }) => {
  return (
    <div className="type-text">
      Введите текст:
      <input type='text' onChange={(e) => onChange(e.target.value)} />
		</div>
  );
};
