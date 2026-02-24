import Body from "../../utils/Body";
import { useAppSelector } from "../../store";
import { useState, useEffect } from "react";

export default function BodyDamage() {
    const damagevar = useAppSelector((state) => state.damage.data);
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 0,
        }}>
            <Body
                detaileddata={damagevar}
            />
        </div>
    );
}