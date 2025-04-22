import { useEffect, useState } from "react";

/**
 * hook to detect when a component entered into the viewport area
 * @param elementRef ref of a component
 * @param rootMargin optional margin offset to detect from
 * @param activateOnChange if true, state will change on visible and invisible, if false will change on visible the first time only
 * @returns
 */
export const useIntersection = (
    elementRef: React.RefObject<HTMLElement>,
    rootMargin: string | undefined,
    activateOnChange: boolean = true
) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        let observer: IntersectionObserver;
        if (elementRef) {
            const current = elementRef.current;
            observer = new IntersectionObserver(
                ([entry]) => {
                    setState((previous) =>
                        activateOnChange ? entry.isIntersecting : previous || entry.isIntersecting
                    );
                },
                { rootMargin, threshold: 0.5 }
            );
            current && observer?.observe(current);
        }
        return () => {
            elementRef.current && observer.unobserve(elementRef.current);
        };
    }, []);

    return isVisible;
};
