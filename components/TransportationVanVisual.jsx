export default function TransportationVanVisual({ className = "" }) {
  return (
    <svg
      aria-labelledby="transportationVanTitle transportationVanDescription"
      className={className}
      role="img"
      viewBox="0 0 900 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="transportationVanTitle">
        TAGA’S Compassionate Care nonmedical transportation visual
      </title>
      <desc id="transportationVanDescription">
        A clean white branded service van with a professional driver and a calm
        client in the back seat in a bright suburban setting.
      </desc>
      <defs>
        <linearGradient id="skyGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#eefafa" />
          <stop offset="58%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8f2e6" />
        </linearGradient>
        <linearGradient id="vanBody" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="58%" stopColor="#f7fbfc" />
          <stop offset="100%" stopColor="#e9f1f4" />
        </linearGradient>
        <linearGradient id="glassGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#bdeceb" />
          <stop offset="100%" stopColor="#12315c" />
        </linearGradient>
        <linearGradient id="tealStripe" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#54c8c1" />
          <stop offset="100%" stopColor="#148f8b" />
        </linearGradient>
        <filter id="softShadow" height="160%" width="160%" x="-30%" y="-30%">
          <feDropShadow dx="0" dy="22" floodColor="#12315c" floodOpacity="0.18" stdDeviation="20" />
        </filter>
        <filter id="smallShadow" height="150%" width="150%" x="-25%" y="-25%">
          <feDropShadow dx="0" dy="8" floodColor="#12315c" floodOpacity="0.14" stdDeviation="8" />
        </filter>
      </defs>

      <rect fill="url(#skyGradient)" height="420" rx="28" width="900" />
      <circle cx="760" cy="78" fill="#f7dca2" opacity="0.65" r="42" />
      <circle cx="135" cy="92" fill="#9de3df" opacity="0.35" r="62" />
      <path
        d="M0 318C112 287 237 292 360 314C499 339 615 337 740 310C808 295 860 295 900 304V420H0V318Z"
        fill="#eaf7f5"
      />
      <path
        d="M0 353C138 323 291 333 423 353C542 371 677 368 900 339V420H0V353Z"
        fill="#dceeed"
      />
      <rect fill="#617189" height="74" opacity="0.18" rx="37" width="780" x="60" y="314" />

      <g opacity="0.85">
        <rect fill="#ffffff" height="86" rx="10" width="108" x="92" y="158" />
        <rect fill="#e7f1ef" height="46" rx="4" width="40" x="115" y="176" />
        <path d="M90 244H205" stroke="#b7c9c8" strokeWidth="8" />
        <path d="M700 242h122" stroke="#c9dbd8" strokeWidth="8" />
        <rect fill="#ffffff" height="96" rx="12" width="118" x="704" y="146" />
        <rect fill="#dff0ef" height="48" rx="5" width="44" x="730" y="168" />
      </g>

      <g filter="url(#softShadow)" transform="translate(-72 -38) scale(1.14)">
        <path
          d="M158 257C166 207 205 175 254 168H540C605 168 656 199 694 256L743 265C769 270 787 291 787 317V332C787 347 775 359 760 359H184C166 359 151 344 151 326V287C151 275 153 265 158 257Z"
          fill="url(#vanBody)"
        />
        <path
          d="M226 183H394V262H178C186 217 203 195 226 183Z"
          fill="url(#glassGradient)"
          opacity="0.94"
        />
        <path
          d="M412 183H545C594 184 630 209 661 262H412V183Z"
          fill="url(#glassGradient)"
          opacity="0.94"
        />
        <path
          d="M151 292H786V326C786 344 772 358 754 358H184C166 358 151 343 151 325V292Z"
          fill="#f8fbfc"
        />
        <path
          d="M176 288H733"
          stroke="url(#tealStripe)"
          strokeLinecap="round"
          strokeWidth="12"
        />
        <path d="M399 181V354" stroke="#d5e1e5" strokeWidth="4" />
        <path d="M676 263L733 270" stroke="#d5e1e5" strokeWidth="5" />
        <rect fill="#dbe8eb" height="7" rx="3.5" width="42" x="420" y="276" />
        <rect fill="#dbe8eb" height="7" rx="3.5" width="42" x="233" y="276" />

        <g filter="url(#smallShadow)">
          <circle cx="259" cy="354" fill="#12315c" r="43" />
          <circle cx="259" cy="354" fill="#ffffff" r="24" />
          <circle cx="259" cy="354" fill="#9fb3c4" r="12" />
          <circle cx="674" cy="354" fill="#12315c" r="43" />
          <circle cx="674" cy="354" fill="#ffffff" r="24" />
          <circle cx="674" cy="354" fill="#9fb3c4" r="12" />
        </g>

        <g transform="translate(474 204)">
          <circle cx="54" cy="24" fill="#8a5b43" r="19" />
          <path d="M28 85C31 51 47 42 63 42C82 42 98 56 102 85H28Z" fill="#173a6a" />
          <path d="M46 24C50 31 61 32 72 28C70 16 61 9 49 10C40 12 35 18 34 27C38 28 42 27 46 24Z" fill="#1b2533" />
          <path d="M76 62C92 67 105 78 117 91" stroke="#148f8b" strokeLinecap="round" strokeWidth="9" />
        </g>

        <g transform="translate(382 207)">
          <circle cx="46" cy="23" fill="#9d6b52" r="18" />
          <path d="M18 85C22 53 36 41 52 41C73 41 89 56 94 85H18Z" fill="#148f8b" />
          <path d="M32 21C39 30 53 31 66 25C63 13 53 8 42 10C34 12 28 17 27 25C29 25 31 24 32 21Z" fill="#f0f4f7" />
          <path d="M58 31C62 35 68 35 72 31" stroke="#12315c" strokeLinecap="round" strokeWidth="3" />
        </g>

        <g transform="translate(460 306)">
          <rect fill="#ffffff" height="42" rx="13" width="172" />
          <circle cx="24" cy="21" fill="#148f8b" r="13" />
          <path
            d="M18 21C22 13 31 13 35 20C33 28 26 32 19 35C15 29 14 25 18 21Z"
            fill="#ffffff"
            opacity="0.96"
          />
          <text
            fill="#12315c"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="18"
            fontWeight="700"
            x="45"
            y="18"
          >
            TAGA’S
          </text>
          <text
            fill="#148f8b"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="14"
            fontWeight="700"
            x="45"
            y="34"
          >
            Compassionate Care
          </text>
        </g>
      </g>

      <g transform="translate(585 92)">
        <rect fill="#ffffff" height="54" opacity="0.92" rx="27" width="220" />
        <circle cx="30" cy="27" fill="#148f8b" r="13" />
        <path d="M24 27L29 32L38 22" fill="none" stroke="#ffffff" strokeLinecap="round" strokeWidth="4" />
        <text
          fill="#12315c"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="16"
          fontWeight="700"
          x="54"
          y="23"
        >
          Reliable rides
        </text>
        <text
          fill="#617189"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="12"
          fontWeight="700"
          x="54"
          y="39"
        >
          Clear scheduling support
        </text>
      </g>
    </svg>
  );
}
