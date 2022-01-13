import useAckee from 'use-ackee';

export function useAcklytics() {
  return useAckee(
    window.location.hash || window.location.pathname,
    {
      server: 'https://acklytics.vercel.app',
      domainId: 'd571ac04-f0be-4ca9-9999-b035ee86111a',
    },
    {
      detailed: true,
      ignoreLocalhost: true,
      ignoreOwnVisits: true,
    }
  );
}
