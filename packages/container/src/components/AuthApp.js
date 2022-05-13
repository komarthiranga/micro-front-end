import { mount } from 'auth/AuthApp';
import React , {useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


export default ({onSignIn}) => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { onParentNavigat } = mount(ref.current, {
            initialpath: history.location.pathname,
            onNavigate: ({pathname: nextPathName}) => {
                const {pathname} = history.location;
                if(pathname !== nextPathName) {
                    history.push(nextPathName);
                }
            },
            onSignIn,
        });

        history.listen(onParentNavigat);
    }, []);

    return <div ref={ref} />;
}