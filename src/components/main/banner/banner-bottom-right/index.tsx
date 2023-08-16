import React from 'react'

export default function BannerBottomRight() {
  return (
    <div style={{ width: "100%", height: 139, padding: 0, position: "relative" }}>
      <img
        src="/images/banner/school.svg"
        alt="School banner"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "0% 0%",
          borderRadius: "16px"
        }}>
      </img>
      <img
        src="/images/banner/student.svg"
        alt="School banner"
        style={{
          position: "absolute",
          bottom: "-10px",
          left: "-10px"
        }}
      >
      </img>
    </div>
  )
}
