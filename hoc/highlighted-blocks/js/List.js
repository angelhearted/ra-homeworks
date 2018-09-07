'use strict';

const List = props => props.list.map(item => <StyledComponent item={item} />);

class StyledComponent extends React.Component {
    getComponent = item => item.type === 'video'
        ? Video
        : item.type === 'article'
        ? Article
        : null;

    getStyler = item => item.views >= 1000
        ? Popular
        : item.views >= 100
        ? New
        : null;

    render = () => {
        const Component = this.getComponent(this.props.item);
        const Styler = this.getStyler(this.props.item);
        return Styler
            ? <Styler><Component {...this.props.item}/></Styler>
            : <Component {...this.props.item}/>;
    }
}