import React from 'react';
import { BehaviorSubject } from 'rxjs';
import doFetch from '../network/doFetch';
import Bacon from 'baconjs';

export default class Home extends React.Component {

    componentWillMount(){

        var source;
        if (!!window.EventSource) {
            source = new EventSource('/webflux/events');
        }

        source.addEventListener('message', function(e) {
            console.log(e.data);
        }, false);

/*        const initialList = Bacon.fromPromise(doFetch('/webflux/events/1'));
        initialList.onValue(value => console.log('Response ' + value));

        const initialList2 = Bacon.fromPromise(doFetch('/webflux/events'))
            .flatMap(Bacon.fromArray)
            .onValue(value => console.log('Response ' + value));*/


        /*        doFetch('/webflux/events').then((response) => {
                        console.log('Response ' + response);
                    },
                    (rejectionReason) => {
                        console.log('Rejected ' + rejectionReason);
                    }
                );

                let subject = new BehaviorSubject();
                subject.subscribe(value => console.log('Received new subject value: ' + value))
                subject.next('Hello');*/
    }

    render() {
        return (<div>
            Hello World!
        </div>);
    }
}