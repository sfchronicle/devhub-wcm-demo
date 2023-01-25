import React from 'react'

const Instagram = ({rotate}) => {
  if (!rotate){
    rotate = 0
  }
  return <svg style={{transform: `rotate(${rotate}deg)`}} viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20.9224 5.93788L20.9228 5.94384C21.0257 7.7587 21.0257 13.2413 20.9228 15.0562L20.9225 15.0604C20.8371 16.7652 20.4545 18.1636 19.3094 19.3091C18.1645 20.4586 16.7664 20.8418 15.0636 20.9224L15.0576 20.9227C13.2432 21.0258 7.75683 21.0258 5.9424 20.9227L5.9382 20.9225C4.23473 20.8371 2.84055 20.4548 1.68978 19.3082C0.540503 18.163 0.158188 16.7655 0.0775469 15.0621L0.0772368 15.0562C-0.0257456 13.2413 -0.0257456 7.75373 0.0772368 5.93887L0.0774607 5.93468C0.162991 4.22844 0.541097 2.83141 1.68978 1.68684C2.84028 0.540452 4.23899 0.158187 5.93652 0.0775597L5.94239 0.0772534C7.75683 -0.0257511 13.2432 -0.0257511 15.0576 0.0772534L15.0618 0.0774775C16.7662 0.162953 18.1642 0.545539 19.3094 1.69095C20.4586 2.83611 20.8418 4.23454 20.9224 5.93788Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M10.5 14.2206C12.5548 14.2206 14.2206 12.5548 14.2206 10.5C14.2206 8.44518 12.5548 6.77941 10.5 6.77941C8.44518 6.77941 6.77941 8.44518 6.77941 10.5C6.77941 12.5548 8.44518 14.2206 10.5 14.2206ZM10.5 16C13.5376 16 16 13.5376 16 10.5C16 7.46243 13.5376 5 10.5 5C7.46243 5 5 7.46243 5 10.5C5 13.5376 7.46243 16 10.5 16Z" fill="white"/><path d="M18.0606 4.0303C18.0606 4.59932 17.5993 5.06061 17.0303 5.06061C16.4613 5.06061 16 4.59932 16 4.0303C16 3.46128 16.4613 3 17.0303 3C17.5993 3 18.0606 3.46128 18.0606 4.0303Z" fill="white"/></svg>
}

export default Instagram