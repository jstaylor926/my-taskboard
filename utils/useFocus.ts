import {useEffect, useRef} from 'react';

export const useFocus = () => {
    const ref = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        ref.current?.focus()
    }, [])
    return ref;
}