import React from 'react'

function Post(props) {
  return (
    <div className="post">
      <img className="photo" src={props.item.imageUrl} alt="" />
      <div className="text">
        <div className="group groupA">
          <div className="location-data">
            <PinIcon />
            <span className="location">{props.item.location}</span>
            <a href={props.item.googleMapsUrl} className="gmaps-link">
              View on Google Maps
            </a>
          </div>
          <h3 className="title">{props.item.title}</h3>
        </div>
        <div className="group groupB">
          <div className="dates">
            <span className="startDate">{props.item.startDate}</span>
            <span> - </span>
            <span className="endDate">{props.item.endDate}</span>
          </div>
          <div className="description">{props.item.description}</div>
        </div>
      </div>
    </div>
  )
}

function PinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="location-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#ff4500"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="11" r="3" />
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
    </svg>
  )
}

export default Post
