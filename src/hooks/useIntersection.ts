import { useEffect, useState } from "react";

/**
 * hook to detect when a component entered into the viewport area
 * @param elementRef ref of a component
 * @param rootMargin optional margin offset to detect from
 * @returns
 */
export const useIntersection = (
    elementRef: React.RefObject<HTMLElement>,
    rootMargin: string | undefined
) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        let observer: IntersectionObserver;
        if (elementRef) {
            const current = elementRef.current;
            observer = new IntersectionObserver(
                ([entry]) => {
                    setState(entry.isIntersecting);
                },
                { rootMargin, threshold: 0.8 }
            );
            current && observer?.observe(current);
        }
        return () => {
            elementRef.current && observer.unobserve(elementRef.current);
        };
    }, []);

    return isVisible;
};
