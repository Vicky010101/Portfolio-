import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
    const trailRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (trailRef.current) {
                trailRef.current.style.top = e.clientY + 'px';
                trailRef.current.style.left = e.clientX + 'px';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div ref={trailRef} id="cursor-trail" />;
};

export default CursorTrail;
