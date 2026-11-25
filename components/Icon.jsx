// Simple line icons standing in for each firm. Swap for real logo images in /public if you have them.
const paths = {
  TL: <><path d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5v13c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5z" /><path d="M12 6v13" /></>,
  EM: <><path d="M3 20h18M5 20V10l7-5 7 5v10" /><path d="M10 20v-5h4v5M9 11h.01M15 11h.01" /></>,
  N: <><circle cx="12" cy="4" r="1.6" /><path d="M12 5.6v3" /><path d="M12 8.6l-4 6.4a4.6 4.6 0 0 0 8 0z" /><circle cx="12" cy="19.5" r="1.2" /></>,
  HB: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M12 8v8M8 12h8" /></>,
  SPJ: <><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6" /></>,
  D: <><rect x="4" y="4" width="16" height="6" rx="1.5" /><rect x="4" y="14" width="16" height="6" rx="1.5" /><path d="M8 7h.01M8 17h.01M12 7h4M12 17h4" /></>,
  BP: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></>,
};

export default function Icon({ name }) {
  return (
    <span className="mono">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {paths[name]}
      </svg>
    </span>
  );
}
