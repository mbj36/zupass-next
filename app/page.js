'use client';
import { useCallback } from 'react';
import { zuAuthPopup } from '@pcd/zuauth';
import { ETHBERLIN04 } from '@pcd/zuauth/configs/ethberlin';

export default function Home() {
  const getProof = useCallback(async () => {
    const result = await zuAuthPopup({
      fieldsToReveal: {
        revealAttendeeEmail: true,
        revealAttendeeName: true,
        revealEventId: true,
      },
      watermark: 12345n,
      config: ETHBERLIN04,
    });

    if (result.type === 'pcd') {
      console.log(result);
    }
  }, []);
  return (
    <div>
      <button onClick={getProof}>Get proof</button>
    </div>
  );
}
