'use strict';

const List = props => {
  return props.list.map(item => withStyle(item, getComponent));
};

function getComponent(item) {
  return item.type === 'video'
      ? Video
      : item.type === 'article'
      ? Article
      : null;
}

function withStyle(item, componentGetter) {
  const Styler = item.views >= 1000
      ? Popular
      : item.views >= 100
      ? New
      : null;
  const Component = componentGetter(item);
  return Styler
      ? <Styler><Component {...item}/></Styler>
      : <Component {...item}/>;
}