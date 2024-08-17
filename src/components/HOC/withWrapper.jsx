import New from '../New/New'
import Popular from '../Popular/Popular'

export const withWrapper = (Component) => {
    return (props) => {
        if (props.views < 100) {
            return (
                <New>
                    <Component {...props} />
                </New>
            );
        }
        if (props.views >= 1000) {
            return (
                <Popular>
                    <Component {...props} />
                </Popular>
            );
        }
        return <Component {...props} />
    };
};