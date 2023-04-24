const incrementAction = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

const decrementAction = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
    }
}

export {incrementAction, decrementAction}