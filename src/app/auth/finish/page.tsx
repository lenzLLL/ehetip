// Server wrapper for the client-side finish sign-in flow
import React, { Suspense } from "react";
import FinishSignInClient from "./FinishSignInClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E5FA8] to-[#164a8a]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-white text-lg font-semibold">Signing you in...</p>
          </div>
        </div>
      }
    >
      {/* Client component handles useSearchParams and localStorage */}
      <FinishSignInClient />
    </Suspense>
  );
}
