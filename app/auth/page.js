"use client";

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa, supabase } from '@supabase/auth-ui-shared';
import Link from 'next/link';

export default function AutPage() {

    const supabase = createClientComponentClient();

    return(
        <>
             <div id="AuthPage" className="w-full min-h-screen bg-white">
                <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
                    <Link href="/" className='MIN-W-[170PX]'>
                        <img width="170" src="/images/logo.svg"/>
                    </Link>
                </div>

                <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
                    Login/ Register
                </div>

                <div className="max-w-[400px] mx-auto px-2">
                    <Auth 
                        onlyThirdPartyProviders
                        redirectTo={`${window.location.origin}/auth/callback`}
                        supabaseClient={supabase}
                        providers={['google']}
                        appearance={{theme: ThemeSupa}}
                    />
                </div>
             </div>
        </>
    )
}