import { mount } from 'dashboard/DashboardApp';
import React , {useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


export default () => {
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
            }
        });

        history.listen(onParentNavigat);
    }, []);

    return <div ref={ref} />;
}