"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";
import DisableJS from "./DisableJS";
import { Suspense } from "react";

interface IProps {
    userAgentFromServer: string
}
export const UserAgent = ({ userAgentFromServer }: IProps) => {
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
                <DisableJS userAgentFromServer={userAgentFromServer} />
            )}
        </div>
    );
};