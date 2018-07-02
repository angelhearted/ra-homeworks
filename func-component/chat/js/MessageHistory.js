'use strict';
function MessageHistory({list}) {
  const components = {
    message: Message,
    response: Response,
    typing: Typing
  };

  return (
    <ul>  
      {list.map(msg => {
        const Component = components[msg.type];
        return <Component from={msg.from} message={{'time': msg.time, 'text': msg.text}} />
      })}
    </ul>
  );
}