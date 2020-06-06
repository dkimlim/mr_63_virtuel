import React, { useState, useEffect } from 'react';
import ProgressComponent from '@material-ui/core/CircularProgress';

function JitsiMeetComponent() {
const [loading, setLoading] = useState(true);
const containerStyle = {
    width: '600px',
    height: '350px',
    bottom: '0px',
    right:'0',
    display: 'fixed',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0)',
    margin:'0'
};

const jitsiContainerStyle = {
    display: (loading ? 'none' : 'flex'),
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
}

function startConference() {
    try {
        //const domain = 'meet.jit.si';
        const domain = 'localhost:8080';
        const options = {
            roomName: 'meetsi',
            height: 300,
            parentNode: document.getElementById('jitsi-container'),
            interfaceConfigOverwrite: {
                filmStripOnly: false,
                SHOW_JITSI_WATERMARK: false,
                SHOW_WATERMARK_FOR_GUESTS: false,
                RANDOM_AVATAR_URL_PREFIX: false,
                RANDOM_AVATAR_URL_SUFFIX: false,
                FILM_STRIP_MAX_HEIGHT: 200,
                MOBILE_APP_PROMO: false,
                VIDEO_LAYOUT_FIT: 'width',
                TILE_VIEW_MAX_COLUMNS: 5,
                DEFAULT_BACKGROUND: 'rgba(0,0,0,1)',
                configOverwrite: {
                    disableSimulcast: false,
                    transcribingEnabled: true,
                },
                jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBvb2phIENob2xlcmEiLCJpYXQiOjE1MTYyMzkwMjJ9.E_g2EVeSH-MgKGDcngvx8njWVQMmq5P1F9mmAaWWnho',

            }
        };
        const api = new window.JitsiMeetExternalAPI(domain, options);
        api.addEventListener('videoConferenceJoined', () => {
            console.log('Local User Joined');
            setLoading(false);
            api.executeCommand('displayName', 'Pooja Cholera');
            /*api.executeCommand('displayName', 'Pooja Cholera');
            api.executeCommand('password', 'pooja@1234');
            api.executeCommand('subject', 'Say Hi to Pooja here');*/

        });
    } catch (error) {
        console.error('Failed to load Jitsi API', error);
    }
}

useEffect(() => {
    // verify the JitsiMeetExternalAPI constructor is added to the global..
    if (window.JitsiMeetExternalAPI) startConference();
    else alert('Jitsi Meet API script not loaded');
}, []);

return (
    <div style={containerStyle}>
        {loading && <ProgressComponent />}
        <div
            id="jitsi-container"
            style={jitsiContainerStyle}
        />
    </div>
);
}
export default JitsiMeetComponent;
