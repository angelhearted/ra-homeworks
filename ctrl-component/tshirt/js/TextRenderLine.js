const TextRenderLine = ({ onChange }) => {
  const handleInput = e => {
    if (typeof onChange !== 'function') {
      return;
    }
    e.target.value = e.target.value.toLowerCase().replace(/[^a-z\n]/g, '');
    onChange(e.target.value);
  };

  return (
    <div className="type-text">
      Введите текст:
      <textarea onChange={e => handleInput(e)} />
		</div>
  );
};
