export default {
    throttle(callback, delay) {
        const now = new Date().getTime();
        let lastCall = '';
        return () => {
            if (!lastCall || lastCall - now > delay) {
                lastCall = now;
                callback.call(null, arguments);
            }
        };
    },
    debounce(callback, delay) {
        let timeoutId = '';
        return () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                callback.call(null, arguments);
            }, delay);
        };
    }
};
