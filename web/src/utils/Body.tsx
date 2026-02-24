import illeg from './img/LLEG.png';
import irleg from './img/RLEG.png';
import iupperbody from './img/upperbody.png';
import ilowerbody from './img/lowerbody.png';
import irarm from './img/rarm.png';
import ilarm from './img/larm.png';
import ilpalm from './img/lpalm.png';
import ineck from './img/neck.png';
import ihead from './img/head.png';
import irpalm from './img/rpalm.png';
import irfoot from './img/rfoot.png';
import ilfoot from './img/lfoot.png';
import { flip, FloatingPortal, offset, shift, useFloating, useTransitionStyles } from '@floating-ui/react';
import React from 'react';
import { getItemUrl } from '../helpers';
import { isEnvBrowser } from './misc';
import { debugData } from './debugData';
import './Body.css';
debugData([
    {
        action: 'DamageCall',
        data: {
            HEAD: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            SPINE: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            LARM: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            RFOOT: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            RHAND: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            LFOOT: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            NECK: {
                severity: true,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            RLEG: {
                severity: true,
                percent: 50,
                bullets: 6,
                broken: false,
                bleeding: true,
            },
            LLEG: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            LOWER_BODY: {
                severity: false,
                percent: 90,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            LHAND: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            UPPER_BODY: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            RARM: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
        }
    }
]);


export default function Body(
    { detaileddata }:
        { detaileddata?: any }
) {
    const [hoverData, setHoverData] = React.useState<boolean>(false);
    const [bodypart, setBodypart] = React.useState<string>("");
    const [bodydamagecal, setBodydamagecal] = React.useState<any>(detaileddata || {});

    const { refs, context, floatingStyles } = useFloating({
        middleware: [flip(), shift(), offset({ mainAxis: 15, crossAxis: -20 })],
        open: hoverData,
        placement: 'right-start',
    });
    const { isMounted, styles } = useTransitionStyles(context, {
        duration: 200,
    });
    const handleMouseMove = ({ clientX, clientY }: MouseEvent | React.MouseEvent<unknown, MouseEvent>) => {
        refs.setPositionReference({
            getBoundingClientRect() {
                return {
                    width: 0,
                    height: 0,
                    x: clientX,
                    y: clientY,
                    left: clientX,
                    top: clientY,
                    right: clientX,
                    bottom: clientY,
                };
            },
        });
    };
    React.useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className="group" style={{ position: 'relative', width: '28vw', height: '38vw',  }}>

            <div className="overlap-group" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '0vw', marginTop: '0vw' }}>
                {isMounted && (
                    <FloatingPortal>
                        <div
                            ref={refs.setFloating}
                            style={{
                                ...floatingStyles,
                                ...styles,
                                color: 'rgba(255, 255, 255, 0.9)',
                                backgroundColor: 'rgba(8, 8, 8, 0.44)',
                                borderRadius: '0.5vw',
                                padding: '0.5vw',
                                minWidth: '10vw',
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3vw' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4vw 0.5vw', }}>
                                    <span style={{ fontSize: '0.6vw', fontWeight: 500, color: 'rgba(255, 255, 255, 0.5)' }}>Balas</span>
                                    <span style={{ fontSize: '0.65vw', fontWeight: 700, color: 'rgba(255, 255, 255, 0.9)' }}>{bodydamagecal[bodypart]?.bullets || 0}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4vw 0.5vw', }}>
                                    <span style={{ fontSize: '0.6vw', fontWeight: 500, color: 'rgba(255, 255, 255, 0.5)' }}>Partido</span>
                                    <span style={{ fontSize: '0.65vw', fontWeight: 700, color: 'rgba(255, 255, 255, 0.9)' }}>{bodydamagecal[bodypart]?.broken ? 'Sim' : 'Não'}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4vw 0.5vw', }}>
                                    <span style={{ fontSize: '0.6vw', fontWeight: 500, color: 'rgba(255, 255, 255, 0.5)' }}>Severidade</span>
                                    <span style={{ fontSize: '0.65vw', fontWeight: 700, color: 'rgba(255, 255, 255, 0.9)' }}>{bodydamagecal[bodypart]?.severity ? 'Alta' : 'Nenhuma'}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4vw 0.5vw', }}>
                                    <span style={{ fontSize: '0.6vw', fontWeight: 500, color: 'rgba(255, 255, 255, 0.5)' }}>Sangramento</span>
                                    <span style={{ fontSize: '0.65vw', fontWeight: 700, color: 'rgba(255, 255, 255, 0.9)' }}>{bodydamagecal[bodypart]?.bleeding ? 'Sim' : 'Não'}</span>
                                </div>
                            </div>
                        </div>
                    </FloatingPortal>
                )}
                <div onMouseEnter={() => { setHoverData(true); setBodypart('UPPER_BODY') }} onMouseLeave={() => { setHoverData(false) }} className='upbody' style={{ width: '6.5vw', height: '5vw', position: 'absolute', left: '10vw', top: '8vw', zIndex: 1, borderRadius: '1vw', cursor: 'pointer' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('HEAD') }} onMouseLeave={() => { setHoverData(false) }} className='headd' style={{ width: '4vw', height: '4.5vw', position: 'absolute', left: '11vw', top: '1vw', zIndex: 1, borderRadius: '1vw', rotate: '2deg', cursor: 'pointer' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('NECK') }} onMouseLeave={() => { setHoverData(false) }} className='neckk' style={{ width: '6.5vw', height: '2.5vw', position: 'absolute', left: '7.8vw', top: '5.5vw', zIndex: 1, borderRadius: '1vw', rotate: '0deg', cursor: 'pointer' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('LOWER_BODY') }} onMouseLeave={() => { setHoverData(false) }} className='lowerbodyyy' style={{ width: '6.5vw', height: '5vw', position: 'absolute', left: '9.8vw', top: '13vw', zIndex: 1, borderRadius: '1vw', rotate: '2deg', cursor: 'pointer' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('RARM') }} onMouseLeave={() => { setHoverData(false) }} className='rarmmm' style={{ width: '2vw', height: '12vw', position: 'absolute', left: '17.2vw', top: '7vw', zIndex: 1, borderRadius: '1vw', rotate: '-15deg', cursor: 'pointer' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('LARM') }} onMouseLeave={() => { setHoverData(false) }} className='larmmm' style={{ width: '2vw', height: '12vw', position: 'absolute', left: '7vw', top: '7.5vw', zIndex: 1, borderRadius: '1vw', rotate: '20deg', cursor: 'pointer' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('LLEG') }} onMouseLeave={() => { setHoverData(false) }} className='lleggg' style={{ width: '4vw', height: '14vw', position: 'absolute', left: '8vw', top: '18.5vw', zIndex: 1, borderRadius: '1vw', rotate: '0deg', cursor: 'pointer' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('RLEG') }} onMouseLeave={() => { setHoverData(false) }} className='rlegg' style={{ width: '3.5vw', height: '16vw', position: 'absolute', left: '12.7vw', top: '18.5vw', zIndex: 1, borderRadius: '1vw', rotate: '-5deg', cursor: 'pointer' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('LHAND') }} onMouseLeave={() => { setHoverData(false) }} className='lpalmmm' style={{ width: '2vw', height: '3vw', position: 'absolute', left: '4.2vw', top: '18.5vw', zIndex: 1, borderRadius: '1vw', rotate: '20deg', cursor: 'pointer' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('LFOOT') }} onMouseLeave={() => { setHoverData(false) }} className='lfoottt' style={{ width: '2vw', height: '5vw', position: 'absolute', left: '8.8vw', top: '32vw', zIndex: 1, borderRadius: '1vw', rotate: '30deg', cursor: 'pointer' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('RHAND') }} onMouseLeave={() => { setHoverData(false) }} className='rpalmmm' style={{ width: '2vw', height: '4vw', position: 'absolute', left: '18.8vw', top: '18.5vw', zIndex: 1, borderRadius: '1vw', rotate: '-10deg', cursor: 'pointer' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('RFOOT') }} onMouseLeave={() => { setHoverData(false) }} className='rfoottt' style={{ width: '3vw', height: '3vw', position: 'absolute', left: '13vw', top: '34.5vw', zIndex: 1, borderRadius: '1vw', rotate: '10deg', cursor: 'pointer' }} />
                <img className="UPPERBODY" style={{ position: 'absolute', pointerEvents: 'none', filter: `sepia(${bodydamagecal["UPPER_BODY"]?.percent}%) saturate(400%) brightness(60%) hue-rotate(-45deg)` }} alt="Upperbody" src={isEnvBrowser() ? iupperbody : getItemUrl('upperbody')} />
                <img className="img" style={{ position: 'absolute', pointerEvents: 'none', filter: `sepia(${bodydamagecal["LOWER_BODY"]?.percent}%) saturate(400%) brightness(60%) hue-rotate(-45deg)` }} alt="Lowerbody" src={isEnvBrowser() ? ilowerbody : getItemUrl('lowerbody')} />
                <img className="LLEG" style={{ position: 'absolute', pointerEvents: 'none', filter: `sepia(${bodydamagecal["LLEG"]?.percent}%) saturate(400%) brightness(60%) hue-rotate(-45deg)` }} alt="Lleg" src={isEnvBrowser() ? illeg : getItemUrl('LLEG')} />
                <img className="RLEG" style={{ position: 'absolute', pointerEvents: 'none', filter: `sepia(${bodydamagecal["RLEG"]?.percent}%) saturate(400%) brightness(60%) hue-rotate(-45deg)` }} alt="Rleg" src={isEnvBrowser() ? irleg : getItemUrl('RLEG')} />
                <img className="img" style={{ position: 'absolute', pointerEvents: 'none', filter: `sepia(${bodydamagecal["RARM"]?.percent}%) saturate(400%) brightness(60%) hue-rotate(-45deg)` }} alt="Rhand" src={isEnvBrowser() ? irarm : getItemUrl('rarm')} />
                <img className="LARM" style={{ position: 'absolute', pointerEvents: 'none', filter: `sepia(${bodydamagecal["LARM"]?.percent}%) saturate(400%) brightness(60%) hue-rotate(-45deg)` }} alt="Larm" src={isEnvBrowser() ? ilarm : getItemUrl('larm')} />
                <img className="img" style={{ position: 'absolute', pointerEvents: 'none', filter: `sepia(${bodydamagecal["LHAND"]?.percent}%) saturate(400%) brightness(60%) hue-rotate(-45deg)` }} alt="Lparm" src={isEnvBrowser() ? ilpalm : getItemUrl('lpalm')} />
                <img className="neck" style={{ position: 'absolute', pointerEvents: 'none', filter: `sepia(${bodydamagecal["NECK"]?.percent}%) saturate(400%) brightness(60%) hue-rotate(-45deg)` }} alt="Neck" src={isEnvBrowser() ? ineck : getItemUrl('neck')} />
                
                <img className="head" style={{ position: 'absolute', pointerEvents: 'none', filter: `sepia(${bodydamagecal["HEAD"]?.percent}%) saturate(400%) brightness(60%) hue-rotate(-45deg)` }} alt="Head" src={isEnvBrowser() ? ihead : getItemUrl('head')} />
                
                <img className="RARM" style={{ position: 'absolute', pointerEvents: 'none', filter: `sepia(${bodydamagecal["RHAND"]?.percent}%) saturate(400%) brightness(60%) hue-rotate(-45deg)` }} alt="Rarm" src={isEnvBrowser() ? irpalm : getItemUrl('rpalm')} />
                <img className="img-2" style={{ position: 'absolute', pointerEvents: 'none', filter: `sepia(${bodydamagecal["RFOOT"]?.percent}%) saturate(400%) brightness(60%) hue-rotate(-45deg)` }} alt="RFoot" src={isEnvBrowser() ? irfoot : getItemUrl('rfoot')} />
                <img className="img-3" style={{ position: 'absolute', pointerEvents: 'none', filter: `sepia(${bodydamagecal["LFOOT"]?.percent}%) saturate(400%) brightness(60%) hue-rotate(-45deg)` }} alt='LFoot' src={isEnvBrowser() ? ilfoot : getItemUrl('lfoot')} />
            </div>
        </div>
    );
}