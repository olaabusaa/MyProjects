import React, { useState } from 'react';

const SuccessMessage = () => {
    // State to manage the visibility of the message box
    const [isVisible, setIsVisible] = useState(true);

    // Function to hide the message box
    const handleClose = () => {
        setIsVisible(false);
    };

    // Render the component only if it is visible
    return (
        isVisible && (
            <div style={styles.container}>
                <div style={styles.messageBox}>
                    <div style={styles.checkIcon}>✓</div>
                    <p style={styles.messageText}>
                        تم إنشاء حسابك بنجاح!<br />
                        أهلاً وسهلاً بك في عائلة شايبني،<br />
                        نتمنى لك تجربة ممتعة.
                    </p>
                    <button style={styles.closeButton} onClick={handleClose}>
                        ×
                    </button>
                </div>
            </div>
        )
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    messageBox: {
        position: 'relative',
        backgroundColor: '#f0f0f0',
        borderRadius: '20px',
        padding: '20px',
        width: '400px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center',
        border: '2px solid #0048a7',
    },
    checkIcon: {
        fontSize: '24px',
        color: '#0048a7',
        marginBottom: '10px',
    },
    messageText: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        color: '#0048a7',
        lineHeight: '1.5',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '18px',
        color: '#0048a7',
        cursor: 'pointer',
    }
};

export default SuccessMessage;
