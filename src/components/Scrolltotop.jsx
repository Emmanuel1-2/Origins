/**
 * Scrolltotop.jsx — Side-effect component that scrolls to top on route change.
 * Returns `null` and depends on `useLocation()` to trigger effects.
 */
import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Scrolltotop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

  return null;
}
