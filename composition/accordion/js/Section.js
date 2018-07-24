function Section({title, children}) {
  let section;
  return (
    <section className='section' ref={el => section = el} onClick={() => section.classList.toggle('open')}>
      <button>toggle</button>
      <h3 className="sectionhead">{title}</h3>
      <div className="articlewrap">
        <div className="article">
          {children}
        </div>
      </div>
    </section>
  );
}