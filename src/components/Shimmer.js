import React from 'react'

export const Shimmer = ({ classNames }) => {
  return (
    <div className={`bg-gray-400 animate-pulse ${classNames}`}>&nbsp;</div>
  )
}
