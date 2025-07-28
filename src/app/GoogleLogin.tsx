"use client"
import { GoogleLogin } from '@react-oauth/google';

export default function GoogleLoginButton() {
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
                const response = fetch('http://localhost:3000/auth/third-party/google', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentialResponse),
                })
                console.log(response)
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}