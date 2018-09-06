const FontSelector = ({ fonts, selectedFont, onSelect }) => {
  return (
    <div className="font-picker">
      {fonts.map((f, i) => 
        <div className="grid center font-item">
          <input type="radio" name="font" value={`abc${i}`} id={`abc${i}`}
            onClick={() => onSelect(f)} checked={f === selectedFont} />
          <label htmlFor={`abc${i}`} className="grid-1">
            <PictureFont text='abc' path={f.path} />
          </label>
        </div>
      )}
    </div>
  )
};