import React, { useMemo } from "react";

export default function Logo({ fill = "#fff" }) {
  const color = useMemo(
    () => fill ? fill : '#000' , [fill]
  );

  return (
    <svg height="50" viewBox="0 0 200 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.39062 14.8848H0.0234375V14H5.39062V14.8848Z" fill={color} />
    <path d="M6.4043 14V5.46875H8.8125C9.55469 5.46875 10.2109 5.63281 10.7812 5.96094C11.3516 6.28906 11.791 6.75586 12.0996 7.36133C12.4121 7.9668 12.5703 8.66211 12.5742 9.44727V9.99219C12.5742 10.7969 12.418 11.502 12.1055 12.1074C11.7969 12.7129 11.3535 13.1777 10.7754 13.502C10.2012 13.8262 9.53125 13.9922 8.76562 14H6.4043ZM7.5293 6.39453V13.0801H8.71289C9.58008 13.0801 10.2539 12.8105 10.7344 12.2715C11.2188 11.7324 11.4609 10.9648 11.4609 9.96875V9.4707C11.4609 8.50195 11.2324 7.75 10.7754 7.21484C10.3223 6.67578 9.67773 6.40234 8.8418 6.39453H7.5293Z" fill={color}/>
    <path d="M19.1016 10.0566H15.4043V13.0801H19.6992V14H14.2793V5.46875H19.6406V6.39453H15.4043V9.13672H19.1016V10.0566Z" fill={color}/>
    <path d="M25.9219 10.0566H22.2246V13.0801H26.5195V14H21.0996V5.46875H26.4609V6.39453H22.2246V9.13672H25.9219V10.0566Z" fill={color}/>
    <path d="M34.1953 11.293C34.0898 12.1953 33.7559 12.8926 33.1934 13.3848C32.6348 13.873 31.8906 14.1172 30.9609 14.1172C29.9531 14.1172 29.1445 13.7559 28.5352 13.0332C27.9297 12.3105 27.627 11.3438 27.627 10.1328V9.3125C27.627 8.51953 27.7676 7.82227 28.0488 7.2207C28.334 6.61914 28.7363 6.1582 29.2559 5.83789C29.7754 5.51367 30.377 5.35156 31.0605 5.35156C31.9668 5.35156 32.6934 5.60547 33.2402 6.11328C33.7871 6.61719 34.1055 7.31641 34.1953 8.21094H33.0645C32.9668 7.53125 32.7539 7.03906 32.4258 6.73438C32.1016 6.42969 31.6465 6.27734 31.0605 6.27734C30.3418 6.27734 29.7773 6.54297 29.3672 7.07422C28.9609 7.60547 28.7578 8.36133 28.7578 9.3418V10.168C28.7578 11.0938 28.9512 11.8301 29.3379 12.377C29.7246 12.9238 30.2656 13.1973 30.9609 13.1973C31.5859 13.1973 32.0645 13.0566 32.3965 12.7754C32.7324 12.4902 32.9551 11.9961 33.0645 11.293H34.1953Z" fill={color}/>
    <path d="M42.2988 10.0098C42.2988 10.8457 42.1582 11.5762 41.877 12.2012C41.5957 12.8223 41.1973 13.2969 40.6816 13.625C40.166 13.9531 39.5645 14.1172 38.877 14.1172C38.2051 14.1172 37.6094 13.9531 37.0898 13.625C36.5703 13.293 36.166 12.8223 35.877 12.2129C35.5918 11.5996 35.4453 10.8906 35.4375 10.0859V9.4707C35.4375 8.65039 35.5801 7.92578 35.8652 7.29688C36.1504 6.66797 36.5527 6.1875 37.0723 5.85547C37.5957 5.51953 38.1934 5.35156 38.8652 5.35156C39.5488 5.35156 40.1504 5.51758 40.6699 5.84961C41.1934 6.17773 41.5957 6.65625 41.877 7.28516C42.1582 7.91016 42.2988 8.63867 42.2988 9.4707V10.0098ZM41.1797 9.45898C41.1797 8.44727 40.9766 7.67188 40.5703 7.13281C40.1641 6.58984 39.5957 6.31836 38.8652 6.31836C38.1543 6.31836 37.5938 6.58984 37.1836 7.13281C36.7773 7.67188 36.5684 8.42188 36.5566 9.38281V10.0098C36.5566 10.9902 36.7617 11.7617 37.1719 12.3242C37.5859 12.8828 38.1543 13.1621 38.877 13.1621C39.6035 13.1621 40.166 12.8984 40.5645 12.3711C40.9629 11.8398 41.168 11.0801 41.1797 10.0918V9.45898Z" fill={color}/>
    <path d="M43.9863 14V5.46875H46.3945C47.1367 5.46875 47.793 5.63281 48.3633 5.96094C48.9336 6.28906 49.373 6.75586 49.6816 7.36133C49.9941 7.9668 50.1523 8.66211 50.1562 9.44727V9.99219C50.1562 10.7969 50 11.502 49.6875 12.1074C49.3789 12.7129 48.9355 13.1777 48.3574 13.502C47.7832 13.8262 47.1133 13.9922 46.3477 14H43.9863ZM45.1113 6.39453V13.0801H46.2949C47.1621 13.0801 47.8359 12.8105 48.3164 12.2715C48.8008 11.7324 49.043 10.9648 49.043 9.96875V9.4707C49.043 8.50195 48.8145 7.75 48.3574 7.21484C47.9043 6.67578 47.2598 6.40234 46.4238 6.39453H45.1113Z" fill={color}/>
    <path d="M56.6836 10.0566H52.9863V13.0801H57.2812V14H51.8613V5.46875H57.2227V6.39453H52.9863V9.13672H56.6836V10.0566Z" fill={color}/>
    <path d="M68.0039 5.46875V11.0527C68.0039 11.6855 67.8691 12.2344 67.5996 12.6992C67.3301 13.1602 66.9434 13.5117 66.4395 13.7539C65.9355 13.9961 65.3398 14.1172 64.6523 14.1172C63.6133 14.1172 62.7949 13.8477 62.1973 13.3086C61.5996 12.7695 61.2949 12.0312 61.2832 11.0938V5.46875H63.3516V11.1348C63.375 12.0684 63.8086 12.5352 64.6523 12.5352C65.0781 12.5352 65.4004 12.418 65.6191 12.1836C65.8379 11.9492 65.9473 11.5684 65.9473 11.041V5.46875H68.0039Z" fill={color}/>
    <path d="M76.418 14H74.373L71.3496 8.69141V14H69.293V5.46875H71.3496L74.3672 10.7773V5.46875H76.418V14Z" fill={color}/>
    <path d="M83.0918 10.6016H79.7754V14H77.7188V5.46875H83.4258V7.05664H79.7754V9.01953H83.0918V10.6016Z" fill={color}/>
    <path d="M89.5723 10.3848H86.3379V12.418H90.1582V14H84.2812V5.46875H90.1699V7.05664H86.3379V8.85547H89.5723V10.3848Z" fill={color}/>
    <path d="M90.9961 14V5.46875H93.7441C94.498 5.46875 95.1758 5.64062 95.7773 5.98438C96.3789 6.32422 96.8477 6.80664 97.1836 7.43164C97.5234 8.05273 97.6953 8.75 97.6992 9.52344V9.91602C97.6992 10.6973 97.5332 11.3984 97.2012 12.0195C96.873 12.6367 96.4082 13.1211 95.8066 13.4727C95.209 13.8203 94.541 13.9961 93.8027 14H90.9961ZM93.0527 7.05664V12.418H93.7676C94.3574 12.418 94.8105 12.209 95.127 11.791C95.4434 11.3691 95.6016 10.7441 95.6016 9.91602V9.54688C95.6016 8.72266 95.4434 8.10156 95.127 7.68359C94.8105 7.26562 94.3496 7.05664 93.7441 7.05664H93.0527Z" fill={color}/>
    <path d="M100.945 14H98.8945V5.46875H100.945V14Z" fill={color}/>
    <path d="M109.5 14H107.455L104.432 8.69141V14H102.375V5.46875H104.432L107.449 10.7773V5.46875H109.5V14Z" fill={color}/>
    <path d="M116.092 10.3848H112.857V12.418H116.678V14H110.801V5.46875H116.689V7.05664H112.857V8.85547H116.092V10.3848Z" fill={color}/>
    <path d="M117.516 14V5.46875H120.264C121.018 5.46875 121.695 5.64062 122.297 5.98438C122.898 6.32422 123.367 6.80664 123.703 7.43164C124.043 8.05273 124.215 8.75 124.219 9.52344V9.91602C124.219 10.6973 124.053 11.3984 123.721 12.0195C123.393 12.6367 122.928 13.1211 122.326 13.4727C121.729 13.8203 121.061 13.9961 120.322 14H117.516ZM119.572 7.05664V12.418H120.287C120.877 12.418 121.33 12.209 121.646 11.791C121.963 11.3691 122.121 10.7441 122.121 9.91602V9.54688C122.121 8.72266 121.963 8.10156 121.646 7.68359C121.33 7.26562 120.869 7.05664 120.264 7.05664H119.572Z" fill={color}/>
    <path d="M151 8.826V11.175C149.438 11.175 148 12.487 148 14.032C148 16.213 149.281 20 142 20V17.998C146.917 17.998 145.966 16.398 145.966 14.031C145.966 11.937 147.177 10.531 148.244 10C147.177 9.469 145.966 8.562 145.966 6.688C145.966 4.316 146.906 1.996 142 2.002V0C149.285 0 148 4.506 148 6.688C148 8.232 149.438 8.826 151 8.826ZM132 6.688C132 4.506 130.715 0 138 0V2.002C133.094 1.995 134.034 4.315 134.034 6.688C134.034 8.563 132.823 9.469 131.756 10C132.823 10.531 134.034 11.938 134.034 14.031C134.034 16.398 133.083 17.998 138 17.998V20C130.719 20 132 16.213 132 14.031C132 12.486 130.562 11.174 129 11.174V8.825C130.562 8.826 132 8.232 132 6.688ZM141 12V13.278C141 14.421 140.278 15.346 139.226 15.554L139.027 15.123C139.514 14.939 139.824 14.35 139.824 13.907H139V12H141ZM141 6H139V8H141V6Z" fill={color}/>
    </svg>
  );
}
