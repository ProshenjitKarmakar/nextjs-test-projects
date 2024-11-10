import { UserAgent } from "@/views/userAgent";
import { headers } from "next/headers";
import { Suspense } from "react";

const UserAgentRoot = () => {
    const userAgent = headers().get('user-agent') || 'Unknown';
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UserAgent userAgentFromServer={userAgent} />
        </Suspense>
    );
};

export default UserAgentRoot;
