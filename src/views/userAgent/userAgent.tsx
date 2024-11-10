"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";

export const UserAgent = () => {
    const { userAgent } = useUserAgentContext();

    return (
        <div>
            <BackToHome />

            {userAgent ? (
                <div className="flex font-mono font-semibold text-sm">
                    <div className="border p-2">UserAgent</div>
                    <div className="border p-2">{userAgent}</div>
                </div>
            ) : (
                <div>No user agent</div>
            )}

            <noscript>
                <div className="flex font-mono font-semibold text-sm">
                    <div className="border p-2">UserAgent</div>
                    <div className="border p-2">JavaScript is disabled, unable to fetch the user agent.</div>
                </div>
            </noscript>
        </div>
    );
};