import React from 'react'

export const LocationIcon = ({ size = 20, color = '#ff8c00' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path 
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
      fill={color}
    />
    <circle cx="12" cy="9" r="2.5" fill="white" />
  </svg>
)

export const DemographicsIcon = ({ size = 20, color = '#ff8c00' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="8" width="4" height="13" fill={color} />
    <rect x="10" y="4" width="4" height="17" fill={color} />
    <rect x="17" y="12" width="4" height="9" fill={color} />
  </svg>
)

export const FilterIcon = ({ size = 20, color = '#ff8c00' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path 
      d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.73-4.8 5.75-7.39C20.25 4.95 19.78 4 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z" 
      fill={color}
    />
  </svg>
)

export const ChartIcon = ({ size = 20, color = '#ff8c00' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
    <path d="M74.6 256.1L256 74.6l181.4 181.5v181.3c0 13.3-10.7 24-24 24H298.7V338.7c0-13.3-10.7-24-24-24h-37.3c-13.3 0-24 10.7-24 24v122.7H98.6c-13.3 0-24-10.7-24-24V256.1z" fill={color} />
    <path d="M506.3 241.7L432 167.4V80c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v51.4L278.6 42c-12.5-12.5-32.8-12.5-45.3 0L5.7 269.7c-6.2 6.2-6.2 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0L256 87.3l216.4 216.3c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6z" fill={color} />
  </svg>
)

export const MoneyIcon = ({ size = 20, color = '#ff8c00' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
    <rect x="32" y="128" width="448" height="256" rx="32" fill={color} />
    <circle cx="80" cy="176" r="16" fill="white" />
    <circle cx="432" cy="176" r="16" fill="white" />
    <circle cx="80" cy="336" r="16" fill="white" />
    <circle cx="432" cy="336" r="16" fill="white" />
    <circle cx="256" cy="256" r="64" fill="white" />
    <path d="M256 224v8c-13.3 0-24 10.7-24 24s10.7 24 24 24c8.8 0 16 7.2 16 16s-7.2 16-16 16v8" stroke={color} strokeWidth="8" strokeLinecap="round" />
    <path d="M240 240h32M240 272h32" stroke={color} strokeWidth="4" strokeLinecap="round" />
  </svg>
)

export const SearchIcon = ({ size = 20, color = '#ff8c00' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="8" stroke={color} strokeWidth="2" fill="none" />
    <path d="m21 21-4.35-4.35" stroke={color} strokeWidth="2" />
  </svg>
)

export const ListIcon = ({ size = 20, color = '#ff8c00' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="6" width="18" height="2" fill={color} />
    <rect x="3" y="11" width="18" height="2" fill={color} />
    <rect x="3" y="16" width="18" height="2" fill={color} />
  </svg>
)