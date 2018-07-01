import counterReduce from '../reducesrs/counter';

export default function reducer(state = 0, action) {
    return {
        counter : counterReduce(state.counter, action)
    }
}
